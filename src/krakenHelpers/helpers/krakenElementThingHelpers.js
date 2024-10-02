import { krakenHelpersLight as h } from "../krakenHelpersLight.js";

import { krakenTemplateLiveHelpers } from "./krakenTemplateLiveHelpers.js";

export const krakenElementThingHelpers = {
    /**
     * current: returns the element that composes the current record
     * parent: returns element parent of
     */

    record_type: getRecordType,
    record_id: getRecordId,
    ref: getRef,
    init: initThingElementAll,
    compile: replacePlaceholders,
    record: {
        get: getRecordFromElement,
        set: setRecordToElement,
        delete: deleteRecordFromElement,
    },
    current: {
        thing: getCurrentThing,
        property: getCurrentProperty,
        value: getCurrentValue,
        get: getCurrentElement,
    },
    parent: {
        thing: getParentThing,
        property: getParentProperty,
        value: getParentValue,
        get: getParentElement,
    },
    top: {
        thing: getTopThing,
        property: getTopProperty,
        value: getTopValue,
        get: getTopElement,
    },
    children: {
        things: getChildrenThings,
        properties: getChildrenProperties,
        values: getChildrenValues,
        get: getChildrenElements,
    },
    childrenAll: {
        things: getChildrenThingsAll,
        properties: getChildrenPropertiesAll,
        values: getChildrenValuesAll,
        get: getChildrenElementsAll,
    },
    type: {
        get: getElementType,
        getNext: getNextElementType,
        set: setElementType,
        delete: deleteElementType,
        setAsThing: setElementTypeThing,
        setAsProperty: setElementTypeProperty,
        setAsValue: setElementTypeValue,
    },
    parts: {
        header: {
            get: getHeaderOfElement,
        },
        body: {
            get: getBodyOfElement,
            add: addBodyToElement,
        },
        footer: {
            get: getFooterOfElement,
        },
    },
    update: {
        record: updateThing,
        thing: updateThingElement,
        property: updatePropertyElement,
    },
    format: replacePlaceholders,
};

// -----------------------------------------------------
//  Attributes
// -----------------------------------------------------

function getRecordType(element) {
    let record_type = element.getAttribute("data-record-type");
    return record_type;
}
function getRecordId(element) {
    let record_id = element.getAttribute("data-record-id");
    return record_id;
}
function getRef(element) {
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

// -----------------------------------------------------
//  Initialize
// -----------------------------------------------------

function initThingElementAll(element) {
    initThingElement(element);

    let item = element.firstElementChild;
    while (item) {
        let nextItem = item.nextElementSibling;
        initThingElementAll(item);
        item = nextItem;
    }

    initThingElement(element);

    return;
}

function initThingElement(element) {
    /**
     * Initialize thing, property and value elements
     */

    if (h.isNull(element)) {
        return;
    }

    // Placeholders
    //replacePlaceholders(element);

    
    // Add missing classes
    addMissingClasses(element);

    //
    if (h.isNull(getElementType(element))) {
        return;
    }

    // Set id
    h.element.setId(element);

    // Add parent thing if required
    addThingToProperty(element);

    // Add body if missing
    addBodyToElement(element);
}

// -----------------------------------------------------
//  Things
// -----------------------------------------------------

function getThingElements(element, record_type, record_id) {
    if (h.isNull(element)) {
        element = document;
    }

    let conditions;
    if (h.isNotNull(record_type)) {
        conditions = {
            "data-record-type": record_type,
            "data-record-id": record_id,
        };
    }

    let things = getChildrenThingsAll(element, conditions);
    return things;
}

// -----------------------------------------------------
//  Updating elements
// -----------------------------------------------------

function updateThing(record) {
    let thingElements = getThingElements(
        document,
        record["@type"],
        record["@id"],
    );
    for (let t of thingElements) {
        updateThingElement(t, record);
    }
}

function updateThingElement(element, value) {
    let thingElement = getCurrentThing(element);

    if (h.isNull(thingElement)) {
        return;
    }

    thingElement.setAttribute("data-record-type", value?.["@type"]);
    thingElement.setAttribute("data-record-id", value?.["@id"]);

    let propertyElements = getChildrenProperties(thingElement);

    for (let p of propertyElements) {
        let propertyID = p.getAttribute("data-propertyID");
        updatePropertyElement(p, value?.[propertyID]);
    }
}

function updatePropertyElement(element, value, template) {
    // Delete value elements
    let propertyBodyElement = getBodyOfElement(element);
    propertyBodyElement.innerHTML = "";

    //
    if (h.isNull(value)) {
        return;
    }

    if (!Array.isArray(value)) {
        value = [value];
    }

    // Add value elements
    let propertyID = element.getAttribute("data-propertyID");

    let item = null;
    for (let v of value) {
        let ve = newValueElement(v, template, propertyID);
        if (h.isNotNull(item)) {
            item.after(ve);
        } else {
            propertyBodyElement.appendChild(ve);
        }
        item = ve;
    }
}

function newValueElement(value, template, propertyID) {
    
    let newValueElement = document.createElement("span");
    setElementTypeValue(newValueElement);
    newValueElement.classList.add("krValue");
    newValueElement.setAttribute("data-property-vID", propertyID);
    newValueElement.setAttribute("data-value", JSON.stringify(value));

    if (h.isNull(template)) {
        newValueElement.textContent = value;
    } else {
        newValueElement.innerHTML = template;
    }

    initThingElementAll(newValueElement);

    for (let t of getChildrenThings(newValueElement)) {
        
        t.setAttribute("data-record-type", value?.["@type"]);
        t.setAttribute("data-record-id", value?.["@id"]);
    }

    return newValueElement;
}

function updatePropertyElement_WITH_THING(element, thing) {
    let propertyID = element.getAttribute("data-propertyID");
    let property = thing.p.get(propertyID);
    let pvs = property.propertyValues;
    let pvsID = pvs.map((x) => x.record_id);

    // Delete value elements
    let valueElements = getChildrenValues(element);
    for (let v of valueElements) {
        if (!pvsID.includes(v.id)) {
            v.remove();
        }
    }

    // Add value elements
    let propertyBodyElement = getBodyOfElement(element);
    let item = null;
    for (let pv of pvs) {
        // Search if element already exists and reorder
        let filteredValueElements = valueElements.filter(
            (x) => x.getAttribute("data-valueID") == pv.record_id,
        );
        if (filteredValueElements.length > 0) {
            for (let i of filteredValueElements) {
                if (h.isNotNull(item)) {
                    item.after(i);
                } else {
                    propertyBodyElement.appendchild(i);
                }
                item = i;
            }
        } else {
            // Creates new element if not already exist
            let newValueElement = newValueElement(propertyValue, template);
            if (h.isNotNull(item)) {
                item.after(i);
            } else {
                propertyBodyElement.appendchild(i);
            }
            item = i;
        }
    }
}

function newValueElement_WITH_THING(propertyValue, template) {
    let newValueElement = document.createElement("span");
    setElementTypeValue(newValueElement);
    newValueElement.setAttribute("data-valueID", propertyValue.record_id);

    if (h.isNull(template)) {
        newValueElement.textContent = propertyValue.value;
    } else {
        newValueElement.innerHTML = propertyValue.value;
        initThingElementAll(newValueElement);
        let childThingElements = getChildrenThings(newValueElement);
        for (let c of childThingElements) {
            c.setAttribute("data-record-type", propertyValue.value?.["@type"]);
            c.setAttribute("data-record-id", propertyValue.value?.["@id"]);
            updateThingElement(c, propertyValue.value);
        }
    }
    return newValueElement;
}

// -----------------------------------------------------
//  Placeholders
// -----------------------------------------------------

function replacePlaceholders(element) {
    // Replace references in {{ }} like {{ name }} or {{ item.name }} with properties

    // Get text nodes
    let textNodes = [];
    
    for (let node of element.childNodes) {
        if (node.nodeType == 3) {
            textNodes.push(node);
        }
    }

    for (let node of textNodes) {
        let nodeContent = node.nodeValue;

        if (nodeContent && nodeContent.includes("{{")) {
            console.log("has content");
            let content = krakenTemplateLiveHelpers.get(node.nodeValue);
            if (h.isNotNull(content)) {
                let newNode = document.createElement("span");
                newNode.innerHTML = content;
                node.nodeValue = "";
                node.after(newNode);
            }
        }
    }
}

// -----------------------------------------------------
//  Element structure - initialization
// -----------------------------------------------------

function addThingToProperty(element) {
    /**
     * If a property element doens't have a parent thing, adds one
     */

    if (h.isNull(element.getAttribute("data-propertyID"))) {
        return;
    }

    let propertyElement = element;

    let thingElement = null;
    let item = element.parentElement;
    while (item) {
        if (item.classList.contains("krThing")) {
            thingElement = item;
            break;
        }
        if (item.classList.contains("krProperty")) {
            break;
        }
        item = item.parentElement;
    }

    if (h.isNotNull(thingElement)) {
        return;
    }

    let newThingElement = document.createElement("span");
    newThingElement.classList.add("Addedthing");

    setElementTypeThing(newThingElement);
    newThingElement.setAttribute(
        "data-record-type",
        element.getAttribute("data-record-type"),
    );
    newThingElement.setAttribute(
        "data-record-id",
        element.getAttribute("data-record-id"),
    );
    h.element.insert.above(newThingElement, element);
}

function addMissingClasses(element) {
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
}

// -----------------------------------------------------
//  Record
// -----------------------------------------------------

function getRecordFromElement(element) {
    /**
     * Retrieves record from elements attributes and values
     */
    let record = {};
    let thingElement = getCurrentThing(element);

    if (h.isNull(thingElement)) {
        return null;
    }

    record["@type"] = thingElement.getAttribute("data-record-type");
    record["@id"] = thingElement.getAttribute("data-record-id");

    if (h.isNull(record?.["@type"])) {
        return null;
    }

    // Get properties
    let propertyElements = getChildrenProperties(thingElement);

    for (let p of propertyElements) {
        let propertyID = p.getAttribute("data-propertyID");
        record[propertyID] = [];

        // Get values
        let valueElements = getChildrenValues(p);
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
     */

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
    let childrenThingElements = getChildrenThings(element);
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
    let currentThing = getCurrentThing(element);
    if (h.isNull(currentThing)) {
        return null;
    }
    elements.push(currentThing);

    // Retrieve properties
    let propertyElements = getChildrenProperties(currentThing);
    elements = elements.concat(propertyElements);

    // Retrieve values
    for (let p of propertyElements) {
        let valueElements = getChildrenValues(p);
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
    let elements = [];

    // Retrieve thing
    let currentThing = h.element.getCurrentThing(element);
    if (h.isNull(currentThing)) {
        return null;
    }
    elements.push(currentThing);

    // Retrieve properties
    let propertyElements = getChildrenProperties(currentThing);
    elements = elements.concat(propertyElements);

    // Retrieve values
    for (let p of propertyElements) {
        let valueElements = getChildrenValues(p);
        elements = elements.concat(valueElements);
    }

    // Assign type and id for all elements
    for (let i of elements) {
        i.setAttribute("data-record-type", "");
        i.setAttribute("data-record-id", "");
    }
    return;
}

// -----------------------------------------------------
//  Type
// -----------------------------------------------------

function getElementType(element) {
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
    if (h.isNull(element)) {
        return;
    }

    deleteElementType(element);

    element.classList.add(elementType);
}

function deleteElementType(element) {
    let classes = ["krThing", "krProperty", "krValue"];
    for (let c of classes) {
        element.classList.remove(c);
    }
    return;
}

function setElementTypeThing(element) {
    let elementType = "krThing";
    return setElementType(element, elementType);
}

function setElementTypeProperty(element) {
    let elementType = "krProperty";
    return setElementType(element, elementType);
}
function setElementTypeValue(element) {
    let elementType = "krValue";
    return setElementType(element, elementType);
}

// -----------------------------------------------------
//  Current
// -----------------------------------------------------

function getCurrentElement(element, className, conditions) {
    if (h.isNull(element)) {
        return undefined;
    }

    let item = element;
    while (item) {
        if (
            item.classList &&
            item.classList.contains(className) &&
            h.element.meetsConditions(item)
        ) {
            return item;
        }
        item = item.parentElement;
    }
    return null;
}

function getCurrentThing(element, conditions) {
    let className = "krThing";
    return getCurrentElement(element, className, conditions);
}

function getCurrentProperty(element, conditions) {
    let className = "krProperty";
    return getCurrentElement(element, className, conditions);
}

function getCurrentValue(element, conditions) {
    let className = "krValue";
    return getCurrentElement(element, className, conditions);
}

// -----------------------------------------------------
//  Parent
// -----------------------------------------------------

function getParentElement(element, className, conditions) {
    if (!element || element == null) {
        return undefined;
    }

    let currentElement = getCurrentElement(element, className, conditions);
    if (h.isNull(currentElement)) {
        return;
    }

    let parentItem = currentElement.parentElement;
    if (h.isNull(parentItem)) {
        return null;
    }
    let parentElement = getParentElement(parentItem, className, conditions);

    return parentElement;
}

function getParentThing(element, conditions) {
    let className = "krThing";
    return getParentElement(element, className, conditions);
}
function getParentProperty(element, conditions) {
    let className = "krProperty";
    return getParentElement(element, className, conditions);
}
function getParentValue(element, conditions) {
    let className = "krValue";
    return getParentElement(element, className, conditions);
}

// -----------------------------------------------------
//  Top
// -----------------------------------------------------

function getTopElement(element, className, conditions) {
    /**
     * Returns most top parent element containing class name
     * OCnditions contains attributes to match
     */
    let item = element;
    let topElement = null;
    while (item) {
        if (
            item.classList.contains(className) &&
            h.element.meetsConditions(item, conditions)
        ) {
            topElement = item;
        }
        item = item.parentElement;
    }
    return topElement;
}

function getTopThing(element, conditions) {
    let className = "krThing";
    return getTopElement(element, className, conditions);
}
function getTopProperty(element, conditions) {
    let className = "krProperty";
    return getTopElement(element, className, conditions);
}
function getTopValue(element, conditions) {
    let className = "krValue";
    return getTopElement(element, className, conditions);
}

// -----------------------------------------------------
//  Children
// -----------------------------------------------------

function getChildrenElements(element, classToGet, classesToStop, conditions) {
    let results = [];
    if (!Array.isArray(classesToStop)) {
        classesToStop = [classesToStop];
    }

    for (let i of element.children) {
        let skip = false;
        for (let classToStop of classesToStop) {
            if (i.classList.contains(classToStop)) {
                skip = true;
            }
        }
        if (skip == true) {
            continue;
        }

        if (
            i.classList.contains(classToGet) &&
            h.element.meetsConditions(i, conditions)
        ) {
            results.push(i);
        }

        let v = getChildrenElements(i, classToGet, classesToStop, conditions);
        if (v.length > 0) {
            results = results.concat(v);
        }
    }

    return results;
}

function getChildrenThings(element, conditions) {
    let classToGet = "krThing";
    let classToStop = ["krProperty", "krValue"];
    return getChildrenElements(element, classToGet, classToStop, conditions);
}

function getChildrenProperties(element, conditions) {
    let classToGet = "krProperty";
    let classToStop = ["krThing", "krValue"];
    return getChildrenElements(element, classToGet, classToStop, conditions);
}

function getChildrenValues(element, conditions) {
    let classToGet = "krValue";
    let classToStop = ["krThing", "krProperty"];
    return getChildrenElements(element, classToGet, classToStop, conditions);
}

// -----------------------------------------------------
//  Children  - All
// -----------------------------------------------------

function getChildrenElementsAll(
    element,
    classToGet,
    classesToStop,
    conditions,
) {
    let results = getChildrenElements(
        element,
        classToGet,
        classesToStop,
        conditions,
    );
    let childResults = [];

    for (let r of results) {
        childResults = childResults.concat(
            getChildrenElementsAll(r, classToGet, classesToStop, conditions),
        );
    }
    results = results.concat(childResults);

    return results;
}

function getChildrenThingsAll(element, conditions) {
    let classToGet = "krThing";
    let classToStop = ["krProperty", "krValue"];
    return getChildrenElementsAll(element, classToGet, classToStop, conditions);
}

function getChildrenPropertiesAll(element, conditions) {
    let classToGet = "krProperty";
    let classToStop = ["krThing", "krValue"];
    return getChildrenElementsAll(element, classToGet, classToStop, conditions);
}

function getChildrenValuesAll(element, conditions) {
    let classToGet = "krValue";
    let classToStop = ["krThing", "krProperty"];
    return getChildrenElementsAll(element, classToGet, classToStop, conditions);
}

// -----------------------------------------------------
//  Element components
// -----------------------------------------------------

function getHeaderOfElement(element) {
    let elementType = getElementType(element);
    let classToGet = elementType + "Header";
    let classesToStop = "kr" + elementType;
    let bodies = getChildrenElements(element, classToGet, classesToStop);
    if (bodies.length > 0) {
        return bodies[0];
    }
    return null;
}

function getBodyOfElement(element) {
    /**
     * Returns child element containing krThingBody, krPropertyBody, etc.
     */
    let elementType = getElementType(element);
    let classToGet
    if ((elementType = "property")) {
        classToGet = "krPropertyBody";
    } else {
        classToGet = "kr" + elementType + "Body";
    }
    let classesToStop = "no stop";
    let bodies = getChildrenElements(element, classToGet, classesToStop);
    if (bodies.length > 0) {
        return bodies[0];
    }
    return null;
}

function addBodyToElement(element) {
    if (getElementType(element) != "property") {
        return;
    }
    let body = getBodyOfElement(element);

    if (h.isNotNull(body)) {
        return;
    }

    let classToGet
    if ((getElementType(element) == "property")) {
        classToGet = "krPropertyBody";
    } else {
        classToGet = "kr" + getElementType(element)  + "Body";
    }

    
    let newBodyElement = document.createElement("span");
    newBodyElement.classList.add("krPropertyBody" );

    h.element.insert.below(newBodyElement, element);

    return;
}

function getFooterOfElement(element) {
    let elementType = getElementType(element);
    let classToGet = elementType + "Footer";
    let classesToStop = "kr" + elementType;
    let bodies = getChildrenElements(element, classToGet, classesToStop);
    if (bodies.length > 0) {
        return bodies[0];
    }
    return null;
}
