import { krakenBaseHelpers  } from "../base/krakenBaseHelpers.js";

import { krakenElementHelpers  } from "./krakenElementHelpers.js";

import { krakenElementThingInitHelpers } from "./krakenElementThingInitHelpers.js";

import { krakenElementThingTraverseHelpers } from "./krakenElementThingTraverseHelpers.js";

import { krakenElementThingPartHelpers } from "./krakenElementThingPartHelpers.js";
import { krakenElementThingPropertyHelpers } from "./krakenElementThingPropertyHelpers.js";
import { krakenThingHelpers } from "../thing/krakenThingHelpers.js";


import { krakenElementThingRenderHelpers as renderSimple} from './krakenElementThingRenderHelpers.js'

import {  templateDB } from './krakenElementThingTemplateDatabase.js'


const h = {
    base: krakenBaseHelpers,
    thing: krakenThingHelpers,
    dom: {
        element: krakenElementHelpers,
        thing: {
            init: krakenElementThingInitHelpers,
            part: krakenElementThingPartHelpers,
            property: krakenElementThingPropertyHelpers,
            traverse: krakenElementThingTraverseHelpers,
            templateDB: templateDB
        }
    },
    isNull: krakenBaseHelpers.isNull, 
    isNotNull: krakenBaseHelpers.isNotNull, 
    isArray: krakenBaseHelpers.isArray,
    toArray: krakenBaseHelpers.toArray,
    isObject: krakenBaseHelpers.isObject,
    thing: krakenThingHelpers

} 



/**
 *
 * Same as render but made to work with system records
 */



export const krakenElementThingRenderSystemHelpers = {
    render: renderElements,
};

function renderElements(element, record, conditions, TEMPLATEDB) {
    /**
     * Updates all elements with same type and id
     * @param {Object} record
     * @param {Object} conditions
     * @returns {Object} The elements updated
     *
     */

    let action = new h.base.classes.Action(
        `Render elements ${record?.["@type"]} ${record?.["@id"]}`,
    );

    if (h.isNull(record)) {
        action.setFailed("No record provided");
        return action;
    }

    element = element || document.body;

    let thingElements = h.dom.thing.traverse.things.get(
        element,
        record["@type"],
        record["@id"],
    );

    // Add given element if also meets conditions
    if (
        h.dom.thing.property.type.get(element) == "thing" &&
        h.dom.thing.property.record_type.get(element) == record["@type"] &&
        h.dom.thing.property.record_id.get(element) == record["@id"]
    ) {
        thingElements.push(element);
    }

    //
    thingElements = h.dom.element.filter(thingElements, conditions);

    //
    if(thingElements.length == 0){
        action.setFailed("No elements found");
        return action;
    }

    //
    for (let t of thingElements) {
        action.instrument = _renderThingElement(t, record, TEMPLATEDB);
    }

    // Render sub things
    for (let k of Object.keys(record)) {
        for (let v of h.toArray(record[k])) {
            if (h.isNotNull(v?.["@type"]) || h.isNotNull(v?.record_type)) {
                action.instrument = renderElements(
                    element,
                    v,
                    conditions,
                    TEMPLATEDB,
                );
            }
        }
    }

    //
    action.setCompleted();

    // Return
    return action;
}

function _renderThingElement(element, record, TEMPLATEDB) {
    /**
     * Updates the element with the value
     * @param {Object} element
     * @param {Object} value
     * @returns {Object} The element updated
     */

    let action = new h.base.classes.Action(
        `Render elements ${record?.["@type"]} ${record?.["@id"]}`,
    );

    // Get current thing element
    let thingElement = h.dom.thing.traverse.current.thing.get(element);

    if (h.isNull(thingElement)) {
        action.setFailed("No thing element found");
        return action;
    }

    // Use custom element render mechanism if classList contains 'krElement'
    if (element.classList.contains("krElement")){
        element.render()
        action.setCompleted();
        return action
    }

    
    
    // Set type and id
    thingElement.setAttribute(
        "data-record-type",
        record?.["@type"] || record?.record_type,
    );
    thingElement.setAttribute(
        "data-record-id",
        record?.["@id"] || record?.record_id,
    );

    // Retrieve property elements
    let propertyElements = h.dom.thing.traverse.children.properties.get(thingElement);

    
    // Render thing from stcratch if no propertyelements identified
    let templateID = element.getAttribute("data-templateID");
    let template = TEMPLATEDB?.[templateID] || ''
    if(propertyElements.length == 0 || (template && template.includes('{{'))){
        _renderNonExistantThingElement(element, record, TEMPLATEDB)
        propertyElements = h.dom.thing.traverse.children.properties.get(element);
    } 


    // Render individual property elements
    for (let p of propertyElements) {
        h.dom.thing.property.record_type.set(p, record?.['@type'] || record.record_type)
        h.dom.thing.property.record_id.set(p, record?.['@id'] || record.record_id)
        action.instrument = _renderPropertyElement(p, record, null, TEMPLATEDB);
    }

    action.close()
    return action;
}

function _renderNonExistantThingElement(element, record, TEMPLATEDB){
    /**
     * Render a thing element if not already on the document
     */

    
    let templateID = element.getAttribute("data-templateID");
    let template = TEMPLATEDB?.[templateID] || ''
    

    // Get headings from record
    let headingRecord = h.thing.record.get(record)
    headingRecord = h.base.heading.addHeadings(headingRecord)
    headingRecord = h.base.json.simplify(headingRecord)

    
    // Render template and set as content
    let htmlContent = h.base.template.get(template, headingRecord);
    element.innerHTML = htmlContent;


    let mainPart = h.dom.thing.part.main.get(element)
    if(h.isNull(mainPart)){ return }

    let mainPartTemplateID = mainPart.getAttribute("data-templateID");
    let mainPartTemplate = TEMPLATEDB?.[mainPartTemplateID] || ''
    

    // Render template and set as content
    mainPart.innerHTML = h.base.template.get(mainPartTemplate, headingRecord);
    


    
    return
}




function _renderPropertyElement(element, record, template, TEMPLATEDB) {
    /**
     * Updates a property element with new value
     * @param {Object} element
     * @param {Object} value
     * @param {Object} template
     * @returns {Object} The element updated
     */


    let action = new h.base.classes.Action(
        `Render property element ${element.getAttribute("data-propertyID")} ${record?.["@type"]} ${record?.["@id"]}`,
    )
    action.object = element
    
    // Error handling
    if (h.isNull(element)) {
        action.setFailed("No element provided");
        return action;
    }
    if (h.isNull(record)) {
        action.setFailed("No record provided");
        return action
    }

    // Use custom element render mechanism if classList contains 'krElement'
    if (element.classList.contains("krElement")){
        element.render()
        action.setCompleted();
        return action
    }


    
    // Get propertyValues (pvs)
    let propertyID = element.getAttribute("data-propertyID");

    let pvs = h.thing.propertyValues.get(record, propertyID)
    pvs = h.toArray(pvs)

    // Get template 
    let templateID = element.getAttribute("data-templateID");
    template = TEMPLATEDB?.[templateID] 

    // Set template if not set
    let values = h.dom.thing.traverse.children.values.get(element)
    if(h.isNull(values)){
        element.innerHTML = template
    }

    // Get value template
    
    let mainPart = h.dom.thing.part.main.get(element)
    let mainPartTemplateID = mainPart.getAttribute("data-templateID");
    let valueTemplate = TEMPLATEDB?.[mainPartTemplateID] 

    // Render value template
    
    // Create main element if missing
    let propertyMainElement = h.dom.thing.part.main.get(element);
    if (h.isNull(propertyMainElement)) {
        propertyMainElement = h.dom.thing.part.add(element, "main", "");
    }

    // Remove value elements no longer needed
    let newPVSId = pvs.map(x => x["@id"])
    let currentPVSElements = h.dom.thing.traverse.children.values.get(element)
    for(let e of currentPVSElements){

        if(!newPVSId.includes(h.dom.element.getId(e))){
            e.remove()
        }
    }

    
    // Return if no no elements to add
    if (h.isNull(pvs)) {
        action.close();
        return action
    }

    // Generate value elements
    
    let item = null;

    for (let pv of pvs) {

        let ve = null
        
        // Find if element already exist and if so move it to current position
        let pvElements = h.dom.thing.traverse.children.values.get(element, {'data-valueID': pv["@id"]});
        if(pvElements.length > 0){
            ve = pvElements[0]
        }

        // Create new element if missing
        if(h.isNull(ve)){
                        
            // Generate new value element
            ve = _newValueElement(pv, record,  valueTemplate, propertyID, TEMPLATEDB);
            
            
            // Render sub things if any
            h.dom.thing.traverse.children.things
                .get(ve)
                .map((x) => _renderThingElement(x, pv?.object?.value, TEMPLATEDB));

           
        }

        
        // Add to element
        if (h.isNotNull(item)) {
            item.after(ve);
        } else {
            propertyMainElement.appendChild(ve);
        }

        //
        item = ve;
    }


    action.close()
    return action
}




function _newValueElement(pv, record, template, propertyID, TEMPLATEDB) {
    /**
     * Creates a new value element
     * @param {Object} value
     * @param {Object} template
     * @param {String} propertyID
     * @returns {Object} The new value element
     */

    let value = pv
    if(h.isNotNull(pv?.object?.value)){
        value = pv?.object?.value
    }

    if(h.isNotNull(value?._system)){
        value = value?._system
    }
    
    
    let temp = document.createElement("span");
    temp.innerHTML = h.base.template.render(template, record)

    // Get valueElement from template
    let newValueElement = h.dom.thing.traverse.children.values.get(temp)?.[0] || temp

    
    
    h.dom.thing.property.type.setAsValue(newValueElement);    
    h.dom.thing.property.record_type.set(newValueElement, record?.['@type'] || record.record_type)
    h.dom.thing.property.record_id.set(newValueElement, record?.['@id'] || record.record_id)

    h.dom.thing.property.propertyID.set(newValueElement, propertyID)
    h.dom.thing.property.valueID.set(newValueElement, pv?.['@id'])
    h.dom.thing.property.valueHash.set(newValueElement, h.base.hash.get(value))


    // If value not an object, assign to main
    if (!h.thing.isThing(value)) {

        let mainPart = h.dom.thing.part.main.get(newValueElement) || newValueElement;
        mainPart.textContent = value
        return newValueElement
    }


    // Render template and set as content
    //newValueElement.innerHTML = h.base.template.get(template, record)

    // Get value
    let main = h.dom.thing.part.main.get(newValueElement) || newValueElement;

    // if children, assign value
    let c = h.dom.thing.traverse.children.things.get(main)

    if(h.isNotNull(c)){
        for(let t of c){
            h.dom.thing.property.ref.set(t, value)
        }
    } else {
        main.innerHTML = value;
    }
    
    
    return newValueElement;
}
