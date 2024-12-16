

import { krakenBaseHelpers as h} from '../base/krakenBaseHelpers.js'



/**
 *
 * classes:
 *     - krThing: thing
 *     - krProperty: property
 *     - krValue: value
 *     - 
 */

// Classes constants
let thingClass = 'krThing'
let propertyClass = 'krProperty'
let valueClass = 'krValue'


export const krakenElementHelpers = {
    /**
     * current: returns the element that composes the current record
     * parent: returns element parent of 
     */

    isValid: isValid,
    toString: toString,
    
    record_type: getRecordType,
    record_id: getRecordId,
    ref: getRef,
    recordType: getRecordType,
    recordId: getRecordId,
    type: getRecordType,
    id: getRecordId,
    getId: getIdOfElement,
    setId: setIdToElement,
    meetsConditions: meetsConditions,
    insert: {
        above: insertElementAbove,
        below: insertElementBelow
    },
    remove: removeElement,
    content: {
        get: getContentOfElement,
        set: setContentOfElement
    },
    active:{
        set: setActive,
        unset: unsetActive,
        toggle: toggleActive
    },
    selected: {
        get: getSelectedElement,
        set: setSelectedElement,
        unset: unsetSelectedElement,
        toggle: toggleSelectedElement
    },
    dragging: {
        get: getDraggingElement,
        set: setDraggingElement,
        unset: unsetDraggingElement,
        toggle: toggleDraggingElement
    },
    class: {
        get: getClassElement,
        set: setClassElement,
        unset: unsetClassElement,
        toggle: toggleClassElement
    },
    traversal: {
        commonParent: findCommonParentOfElements
    },

    // Array
    filter: filter,
    
    
}


// -----------------------------------------------------
//  Generic 
// -----------------------------------------------------

function isValid(element){
    /**
     * Returns true if element is valid
     * @param {Object} element
     * @returns {Boolean}
     */
    if(element && element.nodeType){
        return true
    }
    return false
}

function toString(element){

    return `${getI(element)} ${getRcordId(element)}`
    
}

function getIdOfElement(element){
    /**
     * Returns the id of the element
     * @param {Object} element
     * @returns {String}
     */

    return element?.id || null
    
}

function setIdToElement(element, id){
    /**
     * Sets the id of the element
     * @param {Object} element
     * @param {String} id Uses uuid if null
     */


    if(h.isNull(element)){ return null }
    
    if(h.isNotNull(element.getAttribute('id'))){
        return 
    }

    let newID = 'element_' + h.uuid.new()
    
    element.setAttribute('id', newID)
    
}


function getRecordType(element){
    /**
     * Returns the record type of the element
     * @param {Object} element
     * @returns {String} The record type
     */

    let record_type = element.getAttribute('data-record-type')
    return record_type
  
}function getRecordId(element){

    let record_id = element.getAttribute('data-record-id')
    return record_id

}


function getRef(element){
    /**
     * Returns the ref of the element
     * @param {Object} element
     * @returns {String} The ref
     * 
     */


    let ref = {
        "@type": getRecordType(element),
        "@id": getRecordId(element)
    }

    if(h.isNotNull(ref?.['@type']) || h.isNotNull(ref?.['@id'])){
        return ref
    }
    return null
    
}


// -----------------------------------------------------
//  Operations (insert, delete) 
// -----------------------------------------------------

function insertElementBelow(newElement, parent){
    /**
     * Inserts a new element between a parent and its chldren
     * @param {Object} newElement to insert
     * @param {Object} parent
     * @returns {Object} The new element
     */

    while(parent.firstElementChild){
        newElement.appendChild(parent.firstElementChild)
    }
    parent.appendChild(newElement)
    return newElement
}

function insertElementAbove(newElement, children){
    /**
     * Inserts a new element between an element and its parent
     * @param {Object} newElement to insert
     * @param {Object} children
     * @returns {Object} The new element
     */

    
    children.after(newElement)
    newElement.appendChild(children)
    //parent.appendChild(newElement)
    return newElement
}

function removeElement(element){
    /**
     * Removes an element
     * @param {Object} element
     * @returns {Object} The new element
     * 
     */

    if(!isValid(element)){ return false}

    element.remove()

    return

    
}

// -----------------------------------------------------
//  Element content 
// -----------------------------------------------------


function getContentOfElement(element){
    /**
     * Returns the content of the element
     * @param {Object} element
     * @returns {String} The content
     */

    // Error handling
    if(h.isNull(element)){ return null }

    // Get content
    let content = element.innerHTML

    return content
    
}

function setContentOfElement(element, content){
    /**
     * Sets the content of an element
     * @param {Object} element
     * @param {Element|String} content to set (element or string))
     * @returns {Object} The element
     */


    // Error handling
    if(h.isNull(element)){ return null }

    // 
    if(typeof content == 'string'){
        element.innerHTML = content
    }
    
    if(Array.isArray(content)){
        for(let c of content){
            setContentOfElement(element, c)
        }
        return
    }
    
    if(content instanceof HTMLElement){
        element.appendChild(content)
    }

    return element
}


// -----------------------------------------------------
//  Comparisons 
// -----------------------------------------------------

function meetsConditions(element, conditions){
    /**
     * Returns true if an element attributes meets conditions.
     * @param {Object} element
     * @param {Object} conditions
     * @returns {Boolean}
     */
    
    if(h.isNull(conditions)){ return true }

    for(let key of Object.keys(conditions)){

        // If key is class
        if(key.startsWith('.')){
            if(!element.classList.contains(conditions[key])){
                return false
            }
        } else {
            // If key is attribute
            if(element.getAttribute(key) != conditions[key]){
                return false
            }
        }
    }
    return true
}


// -----------------------------------------------------
//  DOM Traversal 
// -----------------------------------------------------

function findCommonParentOfElements(elements, conditions) {
    /**
     * Returns the common parent of different elements
     * @param {Array} elements
     * @returns {Object} The common parent
     */
    
    if (!elements || elements.length === 0) return null;

    // Helper function to get all parents of an element
    function getParents(element) {
        let parents = [];
        while (element) {
            parents.push(element);
            element = element.parentElement;
        }
        return parents;
    }

    // Get the list of parents for the first element
    let commonParents = getParents(elements[0]);

    // Traverse the list of elements and keep finding common parents
    for (let i = 1; i < elements.length; i++) {
        const elementParents = getParents(elements[i]);
        // Update commonParents to be only those in both lists
        commonParents = commonParents.filter(parent => elementParents.includes(parent));

        // If no common parent is found, return null
        if (commonParents.length === 0) return null;
    }

    // Return the first common parent, which is the closest common ancestor
    return commonParents[0];
}




// -----------------------------------------------------
//  Active 
// -----------------------------------------------------

function getActive(element, conditions){
    /**
     * Returns elements with 'krActive' class under element.
     * Uses document if element is missing
     * @param {Object} element
     * @param {Object} conditions needing to be met (optional))
     * @returns {Array} The active elements
     */
    
    element = element || document

    let activeElements = element.querySelectorAll('.krActive')
    activeElements = activeElements.filter(x => meetsConditions(x, conditions))

    return activeElements
}

function setActive(element, conditions){
    /**
     * Sets 'krActive' class to elements with 'krActive' class under element.
     * @param {Object} element
     * @param {Object} conditions needing to be met (optional))
     * @returns {Object|Array} The elements
     */

    let e = h.toArray(element)
    e = e.filter(x => meetsConditions(x, conditions))
    e.map(x => x.classList.add('krActive'))
    return element
    
}
function unsetActive(element, conditions){
    /**
     * Unset the 'krActive' class on element
     * @param {Object} element
     * @param {Object} conditions needing to be met (optional))
     * @returns {Object|Array} The elements
     */
    let e = h.toArray(element)
    e = e.filter(x => meetsConditions(x, conditions))
    e.map(x => x.classList.remove('krActive'))
    return element
}

function toggleActive(element, conditions){
    /**
     * Toggles the 'krActive' class on element
     * @param {Object} element
     * @param {Object} conditions needing to be met (optional))
     * @returns {Object|Array} The elements
     */
    let e = h.toArray(element)
    e = e.filter(x => meetsConditions(x, conditions))
    e.map(x => x.classList.toggle('krActive'))
    return element
}

// -----------------------------------------------------
//  Selected 
// -----------------------------------------------------

function getSelectedElement(element, conditions){
    /**
     * Returns elements with 'krSelected' class under element.
     * Uses document if element is missing
     * @param {Object} element
     * @param {Object} conditions needing to be met (optional))
     * @returns {Array} The selected elements
     */
    element = element || document

    let selectedElements = element.querySelectorAll('.krSelected')
    selectedElements = selectedElements.filter(x => meetsConditions(x, conditions))

    return selectedElements
}

function setSelectedElement(element, conditions){
    /**
     * Sets the 'krSelected' class on element
     * @param {Object} element
     * @param {Object} conditions needing to be met (optional))
     * @returns {Object|Array} The selected elements
     */
    
    let e = h.toArray(element)
    e = e.filter(x => meetsConditions(x, conditions))
    e.map(x => x.classList.add('krSelected'))
    return element
}
function unsetSelectedElement(element, conditions){
    /**
     * Unset the 'krSelected' class on element
     * @param {Object} element
     * @param {Object} conditions needing to be met (optional))
     * @returns {Object|Array} The selected elements
     */
    let e = h.toArray(element)
    e = e.filter(x => meetsConditions(x, conditions))
    e.map(x => x.classList.remove('krSelected'))
    return element
}

function toggleSelectedElement(element, conditions){
    /**
     * Toggles the 'krSelected' class on element
     * @param {Object} element
     * @param {Object} conditions needing to be met (optional))
     * @returns {Object|Array} The selected elements
     */
    
    let e = h.toArray(element)
    e = e.filter(x => meetsConditions(x, conditions))
    e.map(x => x.classList.toggle('krSelected'))
    return element
}


// -----------------------------------------------------
//  Dragging 
// -----------------------------------------------------

function getDraggingElement(element, conditions){
    /**
     * Returns elements with 'krDragging' class under element.
     * Uses document if element is missing
     * @param {Object} element
     * @param {Object} conditions needing to be met (optional))
     * @returns {Array} The active elements
     */

    element = element || document

    let activeElements = element.querySelectorAll('.krDragging')
    activeElements = activeElements.filter(x => meetsConditions(x, conditions))

    return activeElements
}

function setDraggingElement(element, conditions){
    /**
     * Sets 'krDragging' class to elements with 'krDragging' class under element.
     * @param {Object} element
     * @param {Object} conditions needing to be met (optional))
     * @returns {Object|Array} The elements
     */

    let e = h.toArray(element)
    e = e.filter(x => meetsConditions(x, conditions))
    e.map(x => x.classList.add('krDragging'))
    return element

}
function unsetDraggingElement(element, conditions){
    /**
     * Unset the 'krDragging' class on element
     * @param {Object} element
     * @param {Object} conditions needing to be met (optional))
     * @returns {Object|Array} The elements
     */
    let e = h.toArray(element)
    e = e.filter(x => meetsConditions(x, conditions))
    e.map(x => x.classList.remove('krDragging'))
    return element
}

function toggleDraggingElement(element, conditions){
    /**
     * Toggles the 'krDragging' class on element
     * @param {Object} element
     * @param {Object} conditions needing to be met (optional))
     * @returns {Object|Array} The elements
     */
    let e = h.toArray(element)
    e = e.filter(x => meetsConditions(x, conditions))
    e.map(x => x.classList.toggle('krDragging'))
    return element
}




// -----------------------------------------------------
//  Class 
// -----------------------------------------------------

function getClassElement(element, className, conditions){
    /**
     * Returns elements with 'krDragging' class under element.
     * Uses document if element is missing
     * @param {Object} element
     * @param {Object} conditions needing to be met (optional))
     * @returns {Array} The active elements
     */

    element = element || document

    let activeElements = element.querySelectorAll('.' + className)
    activeElements = activeElements.filter(x => meetsConditions(x, conditions))

    return activeElements
}

function setClassElement(element, className, conditions){
    /**
     * Sets 'className' class to elements with 'className' class under element.
     * @param {Object} element
     * @param {Object} conditions needing to be met (optional))
     * @returns {Object|Array} The elements
     */

    let e = h.toArray(element)
    e = e.filter(x => meetsConditions(x, conditions))
    e.map(x => x.classList.add(className))
    return element

}
function unsetClassElement(element, className, conditions){
    /**
     * Unset the 'krDragging' class on element
     * @param {Object} element
     * @param {Object} conditions needing to be met (optional))
     * @returns {Object|Array} The elements
     */
    let e = h.toArray(element)
    e = e.filter(x => meetsConditions(x, conditions))
    e.map(x => x.classList.remove(className))
    return element
}

function toggleClassElement(element, className, conditions){
    /**
     * Toggles the 'krDragging' class on element
     * @param {Object} element
     * @param {Object} conditions needing to be met (optional))
     * @returns {Object|Array} The elements
     */
    let e = h.toArray(element)
    e = e.filter(x => meetsConditions(x, conditions))
    e.map(x => x.classList.toggle(className))
    return element
}


// -----------------------------------------------------
//  Array 
// -----------------------------------------------------

function filter(elements, conditions){
    /**
     * Filters an array of elements
     * @param {Array} elements
     * @param {Object} conditions
     * @returns {Array} The filtered array
     */

    let e = h.toArray(elements)
    e = e.filter(x => meetsConditions(x, conditions))

    return e
}