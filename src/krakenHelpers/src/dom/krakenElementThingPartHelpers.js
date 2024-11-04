import { krakenBaseHelpers as h } from "../base/krakenBaseHelpers.js";

import { krakenElementThingPropertyHelpers } from "./krakenElementThingPropertyHelpers.js";

import { krakenElementThingTraverseHelpers as traverse } from "./krakenElementThingTraverseHelpers.js";

import { krakenElementHelpers as eh } from "./krakenElementHelpers.js";

// -----------------------------------------------------
//  Element components
// -----------------------------------------------------
/*
    Basd on semantic web
    Each element type (thing, property, value) has the same structure:
        - header:
            - Contains stuff before data
        - main
            - Contains the actual data
        - footer
            - Contains stuff after data
        - actions
            - Contains potentialActions
        - select
            - Contains elements for selecting thing


*/

export const krakenElementThingPartHelpers = {
    get: getPartsOfElement,
    add: addPartToElement,
    header: {
        get: getHeaderOfElement,
    },
    main: {
        get: getMainOfElement,
    },
    footer: {
        get: getFooterOfElement,
    },
    nav: {
        get: getNavOfElement,
    },
    aside: {
        get: getAsideOfElement,
    },
    sections: {
        get: getSectionsOfElement,
    },
    template: {
        get: getTemplateOfElement,
    },
};

function getPartsOfElement(element, partName) {
    /**
     * Returns the header portion of an element (class header)
     * @param {Object} element
     * @param {Object} section section to retrieve (header, main, footer, etc.)
     * @returns {Object} The header element
     */

    // Error handling
    if (h.isNull(element)) {
        return null;
    }

    if (h.isNull(partName)) {
        return null;
    }

    //
    let nextElementType =
        krakenElementThingPropertyHelpers.type.getNext(element);

    //

    // Add kr to partname if missing
    let classToGet = partName;
    if (!classToGet.startsWith("kr")) {
        classToGet =
            "kr" +
            classToGet.charAt(0).toUpperCase() +
            classToGet.slice(1).toLowerCase();
    }

    // Retrieve elements
    let bodies = traverse.children.elements.get(
        element,
        classToGet,
        'kr' + nextElementType,
    );

    // Return
    return bodies;
}

function addPartToElement(element, partName) {
    /**
     * Adds a body to an element if missing
     * @param {Object} element
     * @returns {Object} The new part
     */

    // Error handling
    if (h.isNull(element)) {
        return null;
    }

    // Check if part already exists, return if so
    let part = getPartsOfElement(element, partName);
    if (h.isNotNull(part)) {
        return part;
    }

    // Add kr to partname if missing
    let className = partName;
    if (!className.startsWith("kr")) {
        className =
            "kr" +
            className.charAt(0).toUpperCase() +
            className.slice(1).toLowerCase();
    }

    // Create new span element, template if part template
    let elementType = "span";
    let newBodyElement = document.createElement(elementType);
    newBodyElement.classList.add(className);

    // If class is main, insert betweeen, else add as children
    if (className == "krMain") {
        eh.insert.below(newBodyElement, element);
    } else {
        element.appendChild(newBodyElement);
    }

    // return
    return newBodyElement;
}

function getHeaderOfElement(element) {
    /**
     * Returns the header portion of an element (class header)
     * @param {Object} element
     * @returns {Object} The header element
     *
     */

    return getPartsOfElement(element, "header")?.[0] || null;
}

function getMainOfElement(element) {
    /**
     * Returns child element containing krMain class.
     * @param {Object} element
     * @returns {Object} The body element
     *
     */

    return getPartsOfElement(element, "main")?.[0] || null;
}

function getFooterOfElement(element) {
    /**
     * Returns the footer portion of an element
     * @param {Object} element
     * @returns {Object} The footer
     */

    return getPartsOfElement(element, "footer")?.[0] || null;
}

function getNavOfElement(element) {
    /**
     * Returns the footer portion of an element
     * @param {Object} element
     * @returns {Object} The footer
     */

    return getPartsOfElement(element, "nav")?.[0] || null;
}

function getAsideOfElement(element) {
    /**
     * Returns the footer portion of an element
     * @param {Object} element
     * @returns {Object} The footer
     */

    return getPartsOfElement(element, "aside")?.[0] || null;
}

function getTemplateOfElement(element) {
    /**
     * Returns the footer portion of an element
     * @param {Object} element
     * @returns {Object} The footer
     */

    return (
        traverse.children.elements.get(element, "krTemplate", "krValue")?.[0] ||
        null
    );
}

function getSectionsOfElement(element) {
    /**
     * Returns the footer portion of an element
     * @param {Object} element
     * @returns {Object} The footer
     */

    return getPartsOfElement(element, "section");
}
