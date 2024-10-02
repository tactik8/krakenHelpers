import { krakenNullHelpers} from "./krakenNullHelpers.js";
import { krakenArrayHelpers} from "./krakenArrayHelpers.js";

const h = {
    null: krakenNullHelpers,
    array: krakenArrayHelpers,
    isNull: krakenNullHelpers.isNull,
    isNotNull: krakenNullHelpers.isNotNull,
    toArray: krakenArrayHelpers
}



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

    record_type: getRecordType,
    record_id: getRecordId,
    recordType: getRecordType,
    recordId: getRecordId,
    type: getRecordType,
    id: getRecordId,
    setId: setIdToElement,
    meetsConditions: meetsConditions,
    insert: {
        above: insertElementAbove,
        below: insertElementBelow
    },
    content: {
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
    traversal: {
        commonParent: findCommonParentOfElements
    }
    
}


// -----------------------------------------------------
//  Generic 
// -----------------------------------------------------

function setIdToElement(element){

    if(h.isNotNull(element.getAttribute('id'))){
        return 
    }

    element.setAttribute('id', String(crypto.randomUUID()))
    return
    
}


function getRecordType(element){

    let record_type = element.getAttribute('data-record-type')
    return record_type
  
}function getRecordId(element){

    let record_id = element.getAttribute('data-record-id')
    return record_id

}



// -----------------------------------------------------
//  Operations (insert, delete) 
// -----------------------------------------------------

function insertElementBelow(newElement, parent){

    while(parent.firstElementChild){
        newElement.appendChild(parent.firstElementChild)
    }
    parent.appendChild(newElement)
    return
}

function insertElementAbove(newElement, children){

    let parent = children.parentElement
    newElement.appendChild(children)
    parent.appendChild(newElement)
    return
}








// -----------------------------------------------------
//  Element content 
// -----------------------------------------------------

function setContentOfElement(element, content){

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

    return
}




// -----------------------------------------------------
//  Comparisons 
// -----------------------------------------------------

function meetsConditions(element, conditions){
    /**
     * Returns true if an element attributes meets conditions.
     * Conditions with 
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

function findCommonParentOfElements(elements) {
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
     */
    element = element || document

    let activeElements = element.querySelectorAll('.krActive')
    activeElements = activeElements.filter(x => meetsConditions(x, conditions))

    return activeElements
}

function setActive(element, conditions){
    element.classList.add('krActive')
}
function unsetActive(element, conditions){
    element.classList.remove('krActive')
}

function toggleActive(element, conditions){
    element.classList.toggle('krActive')
}

// -----------------------------------------------------
//  Selected 
// -----------------------------------------------------

function getSelectedElement(element, conditions){
    /**
     * Returns elements with 'krSelected' class under element.
     * Uses document if element is missing
     */
    element = element || document

    let selectedElements = element.querySelectorAll('.krSelected')
    selectedElements = selectedElements.filter(x => meetsConditions(x, conditions))

    return selectedElements
}

function setSelectedElement(element, conditions){
    element.classList.add('krSelected')
}
function unsetSelectedElement(element, conditions){
    element.classList.remove('krSelected')
}

function toggleSelectedElement(element, conditions){
    element.classList.toggle('krSelected')
}
