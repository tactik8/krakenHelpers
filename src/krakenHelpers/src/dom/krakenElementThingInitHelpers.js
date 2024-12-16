
import { krakenBaseHelpers as h} from '../base/krakenBaseHelpers.js'

import { krakenElementHelpers as eh} from './krakenElementHelpers.js'

import { krakenElementTemplateHelpers } from "./krakenElementTemplateHelpers.js";


import { krakenElementThingPropertyHelpers as property} from "./krakenElementThingPropertyHelpers.js"

import { krakenElementThingPartHelpers as part} from "./krakenElementThingPartHelpers.js"
import { krakenElementThingTraverseHelpers as traverse} from "./krakenElementThingTraverseHelpers.js"


//import { templateDB } from './krakenElementThingTemplateDatabase.js'

export const krakenElementThingInitHelpers = {
    init: initThingElementAll,
};



function initThingElementAll(element, TEMPLATEDB, force=false) {
    /**
     * Initializes the element as a thing element
     * @param {Object} element (init document if not provided))
     * @returns {Object} The element
     */

    // Init action
    let action = new h.classes.Action(
        `Initialize All ${property.type.get(element)} element ${element?.id}`,
    )
    action.object = element

    
    // Error handling
    element = element || document.body

    if(h.isArray(element)){
        action.instrument = element.map(x => initThingElementAll(x, TEMPLATEDB, force))
        action.close()
        return action
    }


    // Placeholders
    //replacePlaceholders(element)

    // Add missing classes  
    let elements = element.getElementsByTagName("*")
    for (let e of elements) {
        addMissingClasses(e);
    }

    // Init childrens
    let item = element.firstElementChild;
    while (item) {
        let nextItem = item.nextElementSibling;
        action.instrument = initThingElementAll(item, TEMPLATEDB, force);
        item = nextItem;
    }

    
    // Init element
    if (h.isNotNull(property.type.get(element))) {
        action.instrument = initThingElement(element, TEMPLATEDB, force);
    }
    

    

    action.close()

   
    return action;
}


function initThingElement(element, TEMPLATEDB, force) {
    /**
     * Initialize thing, property and value elements
     * @param {Object} element
     * @returns {Object} The element
     */
    let action = new h.classes.Action(
        `Initialize ${property.type.get(element)} element ${element?.id}`,
    )


    
    action.object = element
    
    if (h.isNull(element)) {
        action.setFailed('Element is null')
        return action;
    }


    // Return if no type
    if(h.isNull(property.type.get(element))){
        action.close()
        return action;
    }

    
    // Set element id (if missing)
    eh.setId(element);



    // Add thing and value element if missing
    if(property.type.get(element) == 'property'){
        
        let addThingAction = addThingToProperty(element)
    
        let addValueAction = addValueToProperty(element)

        
    }


    // Add part element if missing       
    let mainAction = addMainIfMissing(element, TEMPLATEDB)
    
    let mainPart = part.main.get(element)


    // Set main part content as template 
    let retrieve3Action = retrieveInnerContentAsTemplate(mainPart, TEMPLATEDB, force)
    
    // Set content as template
    let retrieve2Action = retrieveInnerContentAsTemplate(element, TEMPLATEDB, force)
    
    
    
    action.close()
    return action
}



function addMainIfMissing(element, TEMPLATEDB){
    /**
     * Add main if missing
     * @param {Object} element
     * @returns {Object} The element
     * 
     */

    let action = new h.classes.Action(
        `addMainIfMissing ${property.type.get(element)} element ${element?.id}`,
    )
    action.object = element
    
    let mainPart = part.main.get(element)
    
    // Make main part if missing
    if(h.isNull(mainPart)){
        mainPart = part.add(element, 'main', '')
        action.result = mainPart

    }

    action.close()
    return action
}


function replacePlaceholders(element) {
    /**
     * Replaces placeholders in element with property elements {{ }}
     * @param {Object} element
     * @returns {Object} The element
     * 
     */
    // Replace references in {{ }} like {{ name }} or {{ item.name }} with properties

    // Error handling
    if(h.isNull(element)){ return null }

    

    let newContent = krakenElementTemplateHelpers.get(element.innerHTML);

    if(newContent != element.innerHTML){
        element.innerHTML = newContent;
    }


    return


}




function retrieveAndSaveTemplate(element, TEMPLATEDB={}){
    /**
     * Retrieves the content from the element and saves it as template
     * @param {Object} element
     * @returns {Object} The element
     */

    
    let action = new h.classes.Action(
        `retrieveAndSaveTemplate ${property.type.get(element)} element ${element?.id}`,
    )

    action.object = element

    // Skip if already has a templateID
    if(h.isNotNull(element.getAttribute('data-templateID'))){
        action.close()
        return action 
    }
    
    // Get templates from template
    let preTemplateParts = element.querySelectorAll('TEMPLATE') //getTemplateOfElement(element)


    // Return if no templates found
    if(h.isNull(preTemplateParts)){
        action.close()
        return action 
    }


    // Set template id
    let templateID = 'template_' + h.uuid.new()
    element.setAttribute('data-templateID', templateID)

    
    
    let templateParts = []
    for( let t of preTemplateParts){

        let className = 'kr' + property.type.get(element).slice(0, 1).toUpperCase() + property.type.get(element).slice(1).toLowerCase()

       if(traverse.current.get(t, className).id == element.id){
            templateParts.push(t)
            
       }
    }

    action.result = templateParts
    
    // Add template parts to TEMPLATEDB
    if(templateParts.length > 0){
        
        for(let t of templateParts){
            TEMPLATEDB[templateID] = (TEMPLATEDB?.[templateID] || '') +  t.innerHTML;

            
            TEMPLATEDB[templateID] = TEMPLATEDB[templateID].trim()
        }
    } 

    action.close()
    return action

}

function retrieveInnerContentAsTemplate(element, TEMPLATEDB, force=false){
    /**
     * If no template, retrieves inner content to be used as template
     * @param {Object} element
     * @returns {Object} The element
     * 
     */


    let action = new h.classes.Action(
        `retrieveInnerContentAsTemplate ${property.type.get(element)} element ${element?.id}`,
    )
    action.object = element


    // Skip if already has a templateID
    let templateID = element.getAttribute('data-templateID')

    
    if(h.isNotNull(templateID) && h.isNotNull(TEMPLATEDB?.[templateID]) && force!=true){    

        action.close()
        return action 
    }

    // Create templateID
    if(h.isNull(templateID)){
        templateID = 'template_' + h.uuid.new()
        element.setAttribute('data-templateID', templateID)
    }
        
    // Get inner content
    let content = element.innerHTML || ''
    content = content.replaceAll('\n', '')
    content = content.replaceAll('  ', ' ')
    TEMPLATEDB[templateID] = content


    // Set content to null
    element.innerHTML = ''
    
    action.result = element.innerHTML
    
    action.close()
    return action
    
}

function addThingToProperty(element) {
    /**
     * If a property element doens't have a parent thing, adds one
     * @param {Object} element
     * @returns {Object} The element
     * 
     */


    let action = new h.classes.Action(
        `addThingToProperty ${property.type.get(element)} element ${element?.id}`,
    )
    action.object = element

    
    // Error handling
    if(h.isNull(element)){ 
        action.setFailed('Element is null')
        return action
    }

    if (h.isNull(element.getAttribute("data-propertyID"))) {
        action.setFailed('Element does not have a propertyID')
        return action
    }

    // Verify if it has a parent thing element
    let item = element.parentElement
    let hasNoThing = false
    while(h.isNotNull(item) && hasNoThing == false){
        if(h.isNotNull(item.classList) && item.classList.contains('krThing')){
            action.close()
            return action
            
        }
        if(item.classList.contains('krProperty')){
            hasNoThing = true
        }
        item = item.parentElement
    }



    // Create new parent
    let newThingElement = document.createElement("span");
    newThingElement.classList.add("Addedthing");
    action.result = newThingElement

    // Add parent to element
    property.type.setAsThing(newThingElement)
    
    //setElementTypeThing(newThingElement);
    newThingElement.setAttribute(
        "data-record-type",
        element.getAttribute("data-record-type"),
    );
    newThingElement.setAttribute(
        "data-record-id",
        element.getAttribute("data-record-id"),
    );
    eh.insert.above(newThingElement, element);

    action.close()
    return action
}



function addValueToProperty(element){
    /**
     * Addd value element if missing
     * 
     */

    let values = traverse.children.values.get(element)

    if(h.isNotNull(values)){
        return
    }

    let valueElement = document.createElement("span");
    property.type.setAsValue(valueElement)


    addMainIfMissing(element)
    let mainPart = part.main.get(element)
    
    eh.insert.below(valueElement, mainPart);

    return
    
}



    
function addMissingClasses(element) {
    /**
     * Adds missing classes to element
     * Elements with data- attributes filled in but no class
     * @param {Object} element
     * @returns {Object} The element
     * 
     */

    // Error handling
    if(h.isNull(element)){ return null }


    // Converts elements with proper attributes to proper class

    let record_type = element.getAttribute("data-record-type");
    let record_id = element.getAttribute("data-record-id");
    let propertyID = element.getAttribute("data-propertyID");
    let valueID = element.getAttribute("data-valueID");

    let record_type_null =
        !record_type || record_type == null || record_type == "";
    let record_id_null = !record_id || record_id == null || record_id == "";
    let record_propertyID_null =
        !propertyID || propertyID == null || propertyID == "";
    let record_valueID_null = !valueID || valueID == null || valueID == "";

    // Convert to krThing if type and id but not property
    if (
        record_type_null == false &&
        record_id_null == false &&
        record_propertyID_null == true
    ) {
        element.classList.add("krThing");
    }

    // Convert to krProperty if type and id but not property
    if (record_propertyID_null == false && record_valueID_null == true) {
        element.classList.add("krProperty");
    }

    // Convert to krProperty if type and id but not property
    if (record_valueID_null == false) {
        element.classList.add("krValue");
    }

    // Convert to krTemplate if tag template
    if(element.tagName == 'TEMPLATE'){
        element.classList.add("krTemplate");
    }

    // Return element
    return element;
}

