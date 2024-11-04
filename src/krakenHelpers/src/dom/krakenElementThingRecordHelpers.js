import { krakenBaseHelpers as h} from '../base/krakenBaseHelpers.js'

import { krakenElementThingTraverseHelpers as traverse } from "./krakenElementThingTraverseHelpers.js"


export const krakenElementThingRecordHelpers = {
    
    record: {
         get: getRecordFromElement,
        set: setRecordToElement,
        delete: deleteRecordFromElement,
    },
    value: {
        get: getValueFromElement
    }
   
};

function getRecordFromElement(element) {
    /**
     * Retrieves record from elements attributes and values
     * @param {Object} element
     * @returns {Object} The record
     */

    // Error handling
    if (h.isNull(element)) {
        return null;
    }

    // Get record
    let record = {};
    let thingElement = traverse.current.thing.get(element);

    if (h.isNull(thingElement)) {
        return null;
    }

    record["@type"] = thingElement.getAttribute("data-record-type");
    record["@id"] = thingElement.getAttribute("data-record-id");

    if (h.isNull(record?.["@type"])) {
        return null;
    }

    // Get properties
    let propertyElements = traverse.children.properties.get(thingElement);

    for (let p of propertyElements) {
        let propertyID = p.getAttribute("data-propertyID");
        record[propertyID] = [];

        // Get values
        let valueElements = traverse.children.values.get(p);
        for (let v of valueElements) {
            let value = getValueFromElement(v);
            if (h.isNotNull(value)) {
                record[propertyID].push(value);
            }
        }
    }
    record = h.json.simplify(record);
    return record;
}

function getValueFromElement(element) {
    /**
     * Returns the value contained in an element
     * @param {Object} element
     * @returns {Object} The value
     *
     */

    // Error handling
    if (h.isNull(element)) {
        return null;
    }

    // If input
    if (h.isNotNull(element?.value)) {
        return element.value;
    }

    // If value is contained in value attribute
    let v = element.getAttribute("value");
    if (h.isNotNull(v)) {
        return v;
    }

    // If thing
    let childrenThingElements = traverse.children.things.get(element);
    if (childrenThingElements.length > 0) {
        return childrenThingElements[0];
    }

    // html content
    if (h.isNotNull(element.innerHTML)) {
        let content = element.textContent;
        content = h.string.clean(content);
        
        return content;
    }

    return null;
}

function setRecordToElement(element, record_type, record_id) {
    /**
     * Sets record to element
     * @param {Object} element
     * @param {Object} record_type
     * @param {Object} record_id
     *
     */

    // Error handling
    if (h.isNull(element)) {
        return null;
    }

    //
    record_id = record_type?.record_id || record_type?.["@id"] || record_id;
    record_type =
        record_type?.record_type || record_type?.["@type"] || record_type;

    if (h.isNull(record_type)) {
        return;
    }
    if (h.isNull(record_id)) {
        return;
    }
    if (h.isNull(element)) {
        return;
    }

    // Set type and id

    let elements = [];

    // Retrieve thing
    let currentThing = traverse.current.thing.get(element);
    if (h.isNull(currentThing)) {
        return null;
    }
    elements.push(currentThing);

    // Retrieve properties
    let propertyElements = traverse.children.things.get(currentThing);
    elements = elements.concat(propertyElements);

    // Retrieve values
    for (let p of propertyElements) {
        let valueElements = traverse.children.values.get(p);
        elements = elements.concat(valueElements);
    }

    // Assign type and id for all elements
    for (let i of elements) {
        i.setAttribute("data-record-type", record_type);
        i.setAttribute("data-record-id", record_id);
    }
    return;
}

function deleteRecordFromElement(element) {
    /**
     * Deletes record from element
     * @param {Object} element
     * @returns {Object} The element
     */

    // Error handling
    if (h.isNull(element)) {
        return null;
    }

    //
    let elements = [];

    // Retrieve thing
    let currentThing = traverse.current.thing.get(element);
    if (h.isNull(currentThing)) {
        return null;
    }
    elements.push(currentThing);

    // Retrieve properties
    let propertyElements = traverse.children.properties.get(currentThing);
    elements = elements.concat(propertyElements);

    // Retrieve values
    for (let p of propertyElements) {
        let valueElements = traverse.children.values.get(p);
        elements = elements.concat(valueElements);
    }

    // Assign type and id for all elements
    for (let i of elements) {
        i.setAttribute("data-record-type", "");
        i.setAttribute("data-record-id", "");
    }
    return;
}
