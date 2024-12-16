
import { krakenBaseHelpers as h} from '../base/krakenBaseHelpers.js'

import { krakenElementThingTraverseHelpers as traverse} from "./krakenElementThingTraverseHelpers.js"



export const krakenElementThingPropertyHelpers = {

    type: {
        get: getElementType,
        getNext: getNextElementType,
        set: setElementType,
        delete: deleteElementType,
        setAsThing: setElementTypeThing,
        setAsProperty: setElementTypeProperty,
        setAsValue: setElementTypeValue,
    },
    record_type: {
        get: getRecordType,
        set: setRecordType,
    },
    record_id: {
        get: getRecordId,
        set: setRecordId,
    },
    propertyID: {
        get: getPropertyID,
        set: setPropertyID,
    },
    valueID: {
        get: getValueID,
        set: setValueID,
    },
    valueHash: {
        get: getValueHash,
        set: setValueHash,
    },
    ref: {
        get: getRecordRef,
        set: setRecordRef,
    }
   
    
}




function getRecordType(element) {
    /**
     * Returns the record type of the element
     * @param {Object} element
     * @returns {String} The record type
     */

    // Error handling
    if(h.isNull(element)){ return null }

    //
    let record_type = element.getAttribute("data-record-type");
    return record_type;
}

function setRecordType(element, record_type){
    /**
     * Sets the record type of the element
     * @param {Object} element
     * @param {String|Object} record_type of record or ref
     * @returns {Object} The element
     */

    // Error handling
    if(h.isNull(element)){ return null }

    //
    record_type = record_type?.['@type'] || record_type?.record_type || record_type

    element.setAttribute("data-record-type", record_type);
    return element
}



function getRecordId(element) {
    /**
     * Returns the record id of the element
     * @param {Object} element
     * @returns {String} The record id
     */
    // Error handling
    if(h.isNull(element)){ return null }

    //
    let record_id = element.getAttribute("data-record-id");
    return record_id;
}

function setRecordId(element, record_id){
    /**
     * Sets the record type of the element
     * @param {Object} element
     * @param {String|Object} record_type of record or ref
     * @returns {Object} The element
     */

    // Error handling
    if(h.isNull(element)){ return null }

    //
    record_id = record_id?.['@id'] || record_id?.record_id || record_id
    element.setAttribute("data-record-id", record_id);
    return element
}

function getPropertyID(element) {
    /**
     * Returns the record id of the element
     * @param {Object} element
     * @returns {String} The record id
     */
    // Error handling
    if(h.isNull(element)){ return null }

    //
    let record_id = element.getAttribute("data-propertyID");
    return record_id;
}

function setPropertyID(element, propertyID){
    /**
     * Sets the record type of the element
     * @param {Object} element
     * @param {String|Object} record_type of record or ref
     * @returns {Object} The element
     */

    // Error handling
    if(h.isNull(element)){ return null }

    //
    element.setAttribute("data-propertyID", propertyID);
    return element
}

function getValueID(element) {
    /**
     * Returns the record id of the element
     * @param {Object} element
     * @returns {String} The record id
     */
    // Error handling
    if(h.isNull(element)){ return null }

    //
    let record_id = element.getAttribute("data-valueID");
    return record_id;
}

function setValueID(element, valueID){
    /**
     * Sets the record type of the element
     * @param {Object} element
     * @param {String|Object} record_type of record or ref
     * @returns {Object} The element
     */

    // Error handling
    if(h.isNull(element)){ return null }

    //
    element.setAttribute("data-valueID", valueID);
    return element
}


function getValueHash(element) {
    /**
     * Returns the record id of the element
     * @param {Object} element
     * @returns {String} The record id
     */
    // Error handling
    if(h.isNull(element)){ return null }

    //
    let record_id = element.getAttribute("data-value");
    return record_id;
}

function setValueHash(element, value){
    /**
     * Sets the record type of the element
     * @param {Object} element
     * @param {String|Object} record_type of record or ref
     * @returns {Object} The element
     */

    // Error handling
    if(h.isNull(element)){ return null }

    if(typeof value != 'string' || value.length > 20){
        value = h.hash.get(JSON.stringify(value))
    }
    
    //
    element.setAttribute("data-value", value);
    return element
}


function getRecordRefAll(element){
    /**
     * Returns all the record refs under the element
     * @param {Object} element
     * @returns {Array} The record refs
     */

    // Error handling
    if(h.isNull(element)){ element = document.body }

    let thingElements = traverse.childrenAll.things.get(element)

    let refs = thingElements.map(x => getRecordRef(x))

    return refs

}

function getRecordRef(element) {
    /**
     * Returns the ref of the element
     * @param {Object} element
     * @returns {Object} The ref
     */

    let record_type = getRecordType(element);
    let record_id = getRecordId(element);

    if (h.isNull(record_type)) {
        return null;
    }
    if (h.isNull(record_id)) {
        return null;
    }

    let ref = { "@type": record_type, "@id": record_id };
    return ref;
}

function setRecordRef(element, ref_or_record_type, record_id){
    /**
     * Sets the ref of the element (type and id)
     * @param {Object} element
     * @param {Object|String} ref_or_record_type of record or ref
     * @param {String} record_id
     * @returns {Object} The element
     */

    // Error handling
    if(h.isNull(element)){ return null }

    //

    let record_type = ref_or_record_type?.['@type'] || ref_or_record_type?.record_type || ref_or_record_type
    record_id = record_id?.['@id'] || record_id?.record_id || record_id

    setRecordType(element, record_type)
    setRecordId(element, record_id)

    return element


}




function getElementType(element) {
    /**
     * Returns the element type (thing, property, value)
     * @param {Object} element
     * @returns {Object} The element type
     * 
     */

    // Error handling
    if(h.isNull(element)){ return null }

    if(h.isNull(element.classList)){ return null }
    //
    if (element.classList.contains("krThing")) {
        return "thing";
    }
    if (element.classList.contains("krProperty")) {
        return "property";
    }
    if (element.classList.contains("krValue")) {
        return "value";
    }
    return null;
}

function getNextElementType(element) {
    /**
     * Returns the next element type (thing, property, value)
     * Order thing -> proeprty -> value -> thing
     * @param {Object} element
     * @returns {Object} The element type
     */

    // Error handling
    if(h.isNull(element)){ return null }

    //
    let type = getElementType(element);
    switch (type) {
        case "thing":
            return "property";
        case "property":
            return "value";
        case "value":
            return "thing";
        default:
            return null;
    }
}

function setElementType(element, elementType) {
    /**
     * Sets the element type
     * @param {Object} element
     * @param {Object} elementType
     * @returns {Object} The element
     */

    // Error handling
    if (h.isNull(element)) {
        return;
    }

    //
    deleteElementType(element);

    element.classList.add(elementType);
}

function deleteElementType(element) {
    /**
     * Deletes the element type (removes class)
     * @param {Object} element
     * @returns {Object} The element
     */

    // Error handling
    if (h.isNull(element)) {
        return;
    }

    //
    let classes = ["krThing", "krProperty", "krValue"];
    for (let c of classes) {
        element.classList.remove(c);
    }
    return;
}

function setElementTypeThing(element) {
    /**
     * Sets the element type to thing
     * @param {Object} element
     * @returns {Object} The element
     */

    // Error handling
    if (h.isNull(element)) {
        return;
    }
    //
    let elementType = "krThing";
    return setElementType(element, elementType);
}

function setElementTypeProperty(element) {
    /**
     * Sets the element type to property
     * @param {Object} element
     * @returns {Object} The element
     */

    // Error handling
    if (h.isNull(element)) {
        return;
    }

    //
    let elementType = "krProperty";
    return setElementType(element, elementType);
}
function setElementTypeValue(element) {
    /**
     * Sets the element type to value
     * @param {Object} element
     * @returns {Object} The element
     */

    // Error handling
    if (h.isNull(element)) {
        return;
    }

    //
    let elementType = "krValue";
    return setElementType(element, elementType);
}
