import { krakenBaseHelpers as h } from "../base/krakenBaseHelpers.js";

import { krakenElementHelpers as eh } from "./krakenElementHelpers.js";

import { krakenElementTemplateHelpers } from "./krakenElementTemplateHelpers.js";

export const krakenElementThingTraverseHelpers = {
    
    things: {
        get: getThingElements,
    },
    current: {
        element: {
            get: getCurrentElement,
        },
        thing: {
            get: getCurrentThing,
        },
        property: {
            get: getCurrentProperty,
        },
        value: {
            get: getCurrentValue,
        },
    },
    parent: {
        element: {
            get: getParentElement,
        },
        thing: {
            get: getParentThing,
        },
        property: {
            get: getParentProperty,
        },
        value: {
            get: getParentValue,
        },
    },
    top: {
        element: {
            get: getTopElement,
        },
        thing: {
            get: getTopThing,
        },
        property: {
            get: getTopProperty,
        },
        value: {
            get: getTopValue,
        },
    },
    children: {
        elements: {
            get: getChildrenElements,
        },
        things: {
            get: getChildrenThings,
        },
        properties: {
            get: getChildrenProperties,
        },
        values: {
            get: getChildrenValues,
        },
    },
    childrenAll: {
        elements: {
            get: getChildrenElementsAll,
        },
        things: {
            get: getChildrenThingsAll,
        },
        properties: {
            get: getChildrenPropertiesAll,
        },
        values: {
            get: getChildrenValuesAll,
        },
    },
};





// -----------------------------------------------------
//  All the things 
// -----------------------------------------------------



function getThingElements(element, record_or_record_type, record_id) {
    /**
     * Returns all thing elements under element (or document if null)
     * @param {Object} element
     * @param {Object|String} record_or_record_type
     * @param {String} record_id
     * @returns {Array} The thing elements
     */

    // Error handling
    if (h.isNull(element)) {
        element = document;
    }

    // 
    let record_type = record_or_record_type?.['@type'] || record_or_record_type?.record_type || record_or_record_type
    record_id = record_or_record_type?.['@id'] || record_or_record_type?.record_id || record_id

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
//  Retrieving elements - Current
// -----------------------------------------------------
function getCurrentElement(element, className, conditions) {
    /**
     * Returns closest parent element with className and conditions
     * @param {Object} element
     * @param {Object} className
     * @param {Object} conditions
     */

    // Error handling
    if (h.isNull(element)) {
        return undefined;
    }

    //
    let item = element;
    while (item) {
        if (
            item.classList &&
            item.classList.contains(className) &&
            eh.meetsConditions(item, conditions)
        ) {
            return item;
        }
        item = item.parentElement;
    }
    return null;
}

function getCurrentThing(element, conditions) {
    /**
     * Returns current thing with conditions
     * @param {Object} element
     * @param {Object} conditions
     */

    let className = "krThing";
    return getCurrentElement(element, className, conditions);
}

function getCurrentProperty(element, conditions) {
    /**
     * Returns current property with conditions
     * @param {Object} element
     * @param {Object} conditions
     */

    let className = "krProperty";
    return getCurrentElement(element, className, conditions);
}

function getCurrentValue(element, conditions) {
    /**
     * Returns current value with conditions
     * @param {Object} element
     * @param {Object} conditions
     */

    let className = "krValue";
    return getCurrentElement(element, className, conditions);
}

// -----------------------------------------------------
//  Retrieving elements - Parent
// -----------------------------------------------------

function getParentElement(element, className, conditions) {
    /**
     * Returns closest parent element with className and conditions
     * @param {Object} element
     * @param {Object} className
     * @param {Object} conditions
     */

    // Error handling
    if (h.isNull(element)) {
        return undefined;
    }

    //
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
    /**
     * Returns parent thing with conditions
     * @param {Object} element
     * @param {Object} conditions
     * @returns {Object} The parent thing
     */

    let className = "krThing";
    return getParentElement(element, className, conditions);
}
function getParentProperty(element, conditions) {
    /**
     * Returns parent thing with conditions
     * @param {Object} element
     * @param {Object} conditions
     * @returns {Object} The parent thing
     */

    let className = "krProperty";
    return getParentElement(element, className, conditions);
}
function getParentValue(element, conditions) {
    /**
     * Returns parent thing with conditions
     * @param {Object} element
     * @param {Object} conditions
     * @returns {Object} The parent thing
     */

    let className = "krValue";
    return getParentElement(element, className, conditions);
}

// -----------------------------------------------------
//  Retrieving elements - Top
// -----------------------------------------------------

function getTopElement(element, className, conditions) {
    /**
     * Returns most top parent element containing class name
     * @param {Object} element
     * @param {Object} className
     * @param {Object} conditions
     * @returns {Object} The top element
     *
     */

    // Error handling
    if (h.isNull(element)) {
        return undefined;
    }

    //
    let item = element;
    let topElement = null;
    while (item) {
        if (
            item.classList.contains(className) &&
            eh.meetsConditions(item, conditions)
        ) {
            topElement = item;
        }
        item = item.parentElement;
    }
    return topElement;
}

function getTopThing(element, conditions) {
    /**
     * Returns most top parent thing containing class name
     * @param {Object} element
     * @param {Object} conditions
     * @returns {Object} The parent thing
     */

    let className = "krThing";
    return getTopElement(element, className, conditions);
}
function getTopProperty(element, conditions) {
    /**
     * Returns most top parent property containing class name
     * @param {Object} element
     * @param {Object} conditions
     * @returns {Object} The parent thing
     */
    let className = "krProperty";
    return getTopElement(element, className, conditions);
}
function getTopValue(element, conditions) {
    /**
     * Returns most top parent value containing class name
     * @param {Object} element
     * @param {Object} conditions
     * @returns {Object} The parent thing
     */
    let className = "krValue";
    return getTopElement(element, className, conditions);
}

// -----------------------------------------------------
//  Retrieving elements - Children
// -----------------------------------------------------

function getChildrenElements(element, classToGet, classesToStop, conditions) {
    /**
     * Returns all direct children elements with classToGet and conditions
     * @param {Object} element
     * @param {Object} classToGet
     * @param {Object} classesToStop
     * @param {Object} conditions
     */

    // Error handling
    if (h.isNull(element)) {
        return undefined;
    }

    //

    let results = [];
    if (!Array.isArray(classesToStop)) {
        classesToStop = [classesToStop];
    }

    if (!element.children) {
        return [];
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
            eh.meetsConditions(i, conditions)
        ) {
            results.push(i);
        }

        let v = getChildrenElements(i, classToGet, classesToStop, conditions);
        if (v && v.length > 0) {
            results = results.concat(v);
        }
    }

    return results;
}

function getChildrenThings(element, conditions) {
    /**
     * Returns all direct children things with conditions
     * @param {Object} element
     * @param {Object} conditions
     * @returns {Object} The children things
     */
    let classToGet = "krThing";
    let classToStop = ["krProperty", "krValue"];
    return getChildrenElements(element, classToGet, classToStop, conditions);
}

function getChildrenProperties(element, conditions) {
    /**
     * Returns all direct children properties with conditions
     * @param {Object} element
     * @param {Object} conditions
     * @returns {Object} The children things
     */
    let classToGet = "krProperty";
    let classToStop = ["krThing", "krValue"];
    return getChildrenElements(element, classToGet, classToStop, conditions);
}

function getChildrenValues(element, conditions) {
    /**
     * Returns all direct children values with conditions
     * @param {Object} element
     * @param {Object} conditions
     * @returns {Object} The children things
     */
    let classToGet = "krValue";
    let classToStop = ["krThing", "krProperty"];
    return getChildrenElements(element, classToGet, classToStop, conditions);
}

// -----------------------------------------------------
//  Retrieving elements - Children  - All
// -----------------------------------------------------

function getChildrenElementsAll(
    element,
    classToGet,
    classesToStop,
    conditions,
) {
    /**
     * Get all children and grandchildren
     * @param {Object} element
     * @param {Object} classToGet
     * @param {Object} classesToStop
     * @param {Object} conditions
     * @returns {Object} The children things
     *
     */

    // Error handling
    if (h.isNull(element)) {
        return undefined;
    }

    classesToStop = []
    //
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
    /**
     * Returns all children and grandchildren things with conditions
     * @param {Object} element
     * @param {Object} conditions
     * @returns {Object} The children things
     *
     */
    let classToGet = "krThing";
    let classToStop = ["krProperty", "krValue"];
    return getChildrenElementsAll(element, classToGet, classToStop, conditions);
}

function getChildrenPropertiesAll(element, conditions) {
    /**
     * Returns all children and grandchildren properties with conditions
     * @param {Object} element
     * @param {Object} conditions
     * @returns {Object} The children things
     *
     */
    let classToGet = "krProperty";
    let classToStop = ["krThing", "krValue"];
    return getChildrenElementsAll(element, classToGet, classToStop, conditions);
}

function getChildrenValuesAll(element, conditions) {
    /**
     * Returns all children and grandchildren values with conditions
     * @param {Object} element
     * @param {Object} conditions
     * @returns {Object} The children things
     *
     */
    let classToGet = "krValue";
    let classToStop = ["krThing", "krProperty"];
    return getChildrenElementsAll(element, classToGet, classToStop, conditions);
}
