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

function _renderThingElement(element, value, TEMPLATEDB) {
    /**
     * Updates the element with the value
     * @param {Object} element
     * @param {Object} value
     * @returns {Object} The element updated
     */

    let action = new h.base.classes.Action(
        `Render elements ${value?.["@type"]} ${value?.["@id"]}`,
    );

    // Get current thing element
    let thingElement = h.dom.thing.traverse.current.thing.get(element);

    if (h.isNull(thingElement)) {
        action.setFailed("No thing element found");
        return action;
    }

    
    // Create main element if missing
    let propertyMainElement = h.dom.thing.part.main.get(thingElement);
    if (h.isNull(propertyMainElement)) {
        propertyMainElement = h.dom.thing.part.add(thingElement, "main", "");
    }

    // Set type and id
    thingElement.setAttribute(
        "data-record-type",
        value?.["@type"] || value?.record_type,
    );
    thingElement.setAttribute(
        "data-record-id",
        value?.["@id"] || value?.record_id,
    );

    // Retrieve property elements
    let propertyElements = h.dom.thing.traverse.children.properties.get(thingElement);

    
    // Render thing from template if not already on the document
    let templateID = element.getAttribute("data-templateID");


    // Test to see if need to render template 
    let template = thingElement?._template || h.dom.thing.templateDB.get(templateID)
    let mainPart = h.dom.thing.part.main.get(thingElement);
    
    let c1 = h.isNotNull(template) && template.includes('{{')
    let c2 = propertyElements.length == 0
 

    if(c1 || c2 ){

        console.log('*******')
        let mainPart = h.dom.thing.part.main.get(thingElement);
        
        // Get headings from record
        let headingRecord = h.thing.record.get(value)
        headingRecord = h.base.heading.addHeadings(headingRecord)
        headingRecord = h.base.json.simplify(headingRecord)

        // Render template and set as content
        let htmlContent = h.base.template.get(template, headingRecord);
        mainPart.innerHTML = htmlContent;
        h.dom.thing.init.init(mainPart, TEMPLATEDB);
        propertyElements = h.dom.thing.traverse.children.properties.get(mainPart);
       
    }

    // Render if contains {{
    mainPart = h.dom.thing.part.main.get(thingElement);
    if(mainPart.innerHTML.includes('{{')){
        let headingRecord = h.thing.record.get(value)
        headingRecord = h.base.heading.addHeadings(headingRecord)
        headingRecord = h.base.json.simplify(headingRecord)
        
        mainPart.innerHTML = h.base.template.get(mainPart.innerHTML, headingRecord);
        h.dom.thing.init.init(mainPart, TEMPLATEDB);
        propertyElements = h.dom.thing.traverse.children.properties.get(mainPart);
    }

    // Render individual properties
    for (let p of propertyElements) {
        action.instrument = _renderPropertyElement(p, value, null, TEMPLATEDB);
    }

    action.close()
    return action;
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

    // Get propertyValues (pvs)
    let propertyID = element.getAttribute("data-propertyID");
    
    let pvs = h.thing.propertyValues.get(record, propertyID)
    pvs = h.toArray(pvs)

    // Get template 
    let templateID = element.getAttribute("data-templateID");
    template = h.dom.thing.templateDB.get(templateID) //TEMPLATEDB?.[templateID] || template;


    
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
            
            // Prepopulate template with values (in case there are {{ }} )
            let content = template //h.template.get(template, newRecord);
            
            
            // Generate new value element
            ve = _newValueElement(pv, record,  content, propertyID, TEMPLATEDB);
            
            
            // Render sub things if any
            h.dom.thing.traverse.children.things
                .get(ve)
                .map((x) => _renderThingElement(x, pv?.object?.value, null, TEMPLATEDB));
            // Render sub properties if any
            h.dom.thing.traverse.children.properties
                .get(ve)
                .map((x) => _renderPropertyElement(x, pv?.object?.value, null, TEMPLATEDB));
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

   
    let value = pv?.object?.value || value
    let newValueElement = document.createElement("span");
    h.dom.thing.property.type.setAsValue(newValueElement);    
    h.dom.thing.property.propertyID.set(newValueElement, propertyID)
    h.dom.thing.property.propertyID.set(newValueElement, pv?.['@id'])
    h.dom.thing.property.valueHash.set(newValueElement, value )


    template = template.trim()
    if (h.isNull(template)) {
        newValueElement.textContent = value;
    } else {
        newValueElement.innerHTML = template;
        let main = h.dom.thing.part.main.get(newValueElement);
        if(main){
            main.innerHTML = value;
            for(let t of h.dom.thing.children.things.get(main)){
                h.dom.thing.property.ref.set(t, value)
            }
        }
    }

    



    if(newValueElement.innerHTML.includes('{{')){
        
        let headingRecord = h.thing.record.get(value)
        headingRecord = h.base.heading.addHeadings(headingRecord)
        headingRecord = h.base.json.simplify(headingRecord)
        newValueElement.innerHTML = h.base.template.get(newValueElement.innerHTML, headingRecord);
    }


    h.dom.thing.init.init(newValueElement, TEMPLATEDB);

    
    for (let t of h.dom.thing.traverse.children.things.get(newValueElement)) {
        t.setAttribute("data-record-type", value?.["@type"]);
        t.setAttribute("data-record-id", value?.["@id"]);
    }



    
    return newValueElement;
}
