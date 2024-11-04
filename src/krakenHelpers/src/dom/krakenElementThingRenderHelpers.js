import { krakenBaseHelpers as h } from "../base/krakenBaseHelpers.js";

import { krakenElementHelpers as eh } from "./krakenElementHelpers.js";

import { krakenElementThingInitHelpers as init } from "./krakenElementThingInitHelpers.js";

import { krakenElementThingTraverseHelpers as traverse } from "./krakenElementThingTraverseHelpers.js";

import { krakenElementThingPartHelpers as part } from "./krakenElementThingPartHelpers.js";
import { krakenElementThingPropertyHelpers as property } from "./krakenElementThingPropertyHelpers.js";


import { templateDB } from './krakenElementThingTemplateDatabase.js'



export const krakenElementThingRenderHelpers = {
    render: renderElements,
    renderProperty: _renderPropertyElement,
    newValue: _newValueElement
};

function renderElements(element, record, conditions, TEMPLATEDB) {
    /**
     * Updates all elements with same type and id
     * @param {Object} record
     * @param {Object} conditions
     * @returns {Object} The elements updated
     *
     */

    let action = new h.classes.Action(
        `Render elements ${record?.["@type"]} ${record?.["@id"]}`,
    );

    if (h.isNull(record)) {
        action.setFailed("No record provided");
        return action;
    }

    element = element || document.body;

    let thingElements = traverse.things.get(
        element,
        record["@type"],
        record["@id"],
    );

    // Add given element if also meets conditions
    if (
        property.type.get(element) == "thing" &&
        property.record_type.get(element) == record["@type"] &&
        property.record_id.get(element) == record["@id"]
    ) {
        thingElements.push(element);
    }

    //
    thingElements = eh.filter(thingElements, conditions);

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

    let action = new h.classes.Action(
        `Render elements ${value?.["@type"]} ${value?.["@id"]}`,
    );

    // Get current thing element
    let thingElement = traverse.current.thing.get(element);

    if (h.isNull(thingElement)) {
        action.setFailed("No thing element found");
        return action;
    }

    // Create main element if missing
    let propertyMainElement = part.main.get(thingElement);
    if (h.isNull(propertyMainElement)) {
        propertyMainElement = part.add(thingElement, "main", "");
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
    let propertyElements = traverse.children.properties.get(thingElement);

    
    // Render thing from template if not already on the document
    let templateID = element.getAttribute("data-templateID");
    if (propertyElements.length == 0 && h.isNotNull(templateID)) {
        let mainPart = part.main.get(thingElement);
        let content = templateDB.get(templateID) //TEMPLATEDB?.[templateID] || "";
        
        content = h.template.get(content, value);
        mainPart.innerHTML = content;
        
        init.init(mainPart, TEMPLATEDB);
        propertyElements = traverse.children.properties.get(mainPart);
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


    let action = new h.classes.Action(
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

    // Get value
    let propertyID = element.getAttribute("data-propertyID");
    let value = h.dot.get(propertyID, record);
    value = h.toArray(value)

    // Get template
    let templateID = element.getAttribute("data-templateID");
    template = templateDB.get(templateID) || ''//TEMPLATEDB?.[templateID] || template;
    template = template.trim()
    
    // Create main element if missing
    let propertyMainElement = part.main.get(element);
    if (h.isNull(propertyMainElement)) {
        propertyMainElement = part.add(element, "main", "");
    }

    // Clear existing values
    propertyMainElement.innerHTML = "";

    //
    if (h.isNull(value)) {
        action.close();
        return action
    }

    // Generate value elements
    
    let item = null;

    for (let v of value) {
        let ve;

        let newRecord = JSON.parse(JSON.stringify(record));
        newRecord = h.dot.set(newRecord, propertyID, v);
        
        // Prepopulate template with values (in case there are {{ }} )
        let content = h.template.get(template, newRecord);

        // Generate new value element
        ve = _newValueElement(newRecord, content, propertyID, TEMPLATEDB);
        
        // Render sub properties if any
        traverse.children.properties
            .get(ve)
            .map((x) => _renderPropertyElement(x, newRecord, null, TEMPLATEDB));

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

function _newValueElement(record, template, propertyID, TEMPLATEDB) {
    /**
     * Creates a new value element
     * @param {Object} value
     * @param {Object} template
     * @param {String} propertyID
     * @returns {Object} The new value element
     */

    let value = h.dot.get(propertyID, record);
    
    let newValueElement = document.createElement("span");
    property.type.setAsValue(newValueElement);    
    property.propertyID.set(newValueElement, propertyID)
    property.valueHash.set(newValueElement, value)
   

 
    if (h.isNull(template)) {
        newValueElement.textContent = value;
    } else {
        newValueElement.innerHTML = template;
        let main = part.main.get(newValueElement);
        if(main){
            main.innerHTML = value;
        }
    }

    init.init(newValueElement, TEMPLATEDB);

    for (let t of traverse.children.things.get(newValueElement)) {
        t.setAttribute("data-record-type", value?.["@type"]);
        t.setAttribute("data-record-id", value?.["@id"]);
    }

    return newValueElement;
}
