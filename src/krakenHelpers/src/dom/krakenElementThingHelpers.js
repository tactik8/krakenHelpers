import { krakenBaseHelpers as h} from '../base/krakenBaseHelpers.js'
import { krakenElementHelpers as eh} from './krakenElementHelpers.js'

import { krakenElementThingInitHelpers } from "./krakenElementThingInitHelpers.js"
import { krakenElementThingObserverHelpers } from "./krakenElementThingObserverHelpers.js"
import { krakenElementThingPartHelpers } from "./krakenElementThingPartHelpers.js"
import { krakenElementThingPropertyHelpers } from "./krakenElementThingPropertyHelpers.js"
import { krakenElementThingRecordHelpers } from "./krakenElementThingRecordHelpers.js"
import { krakenElementThingRenderHelpers } from "./krakenElementThingRenderHelpers.js"
import { krakenElementThingRenderSystemHelpers } from "./krakenElementThingRenderSystemHelpers.js"
import { krakenElementThingTraverseHelpers } from "./krakenElementThingTraverseHelpers.js"
import { krakenElementThingEventHelpers } from "./krakenElementThingEventHelpers.js"

let TEMPLATEDB = {}



export const krakenElementThingHelpers = {
    /**
     * current: returns the element that composes the current record
     * parent: returns element parent of
     *
     * How to use:
     *
     * Scenario 1: html template with placeholders
     *     - select top element of template
     *     - 
     */

    // Base 

    isValid: isValid,
    set: set,
   

    // Initialization
    init: init,

    // Properties
    property: krakenElementThingPropertyHelpers,
    
    // Record manipulation
    record: krakenElementThingRecordHelpers,
    
    // Elements sections
    parts: krakenElementThingPartHelpers,

    // Rendering
    render: render,
    renderSystem: renderSystem,

    // Getting elements
    traverse: krakenElementThingTraverseHelpers,

    // events
    event: krakenElementThingEventHelpers
    
};



// -----------------------------------------------------
//  Base 
// -----------------------------------------------------

function isValid(element){
    /**
     * Checks if a element is valid (element and has type)
     * @param {Object} value
     * @returns {Boolean}
     */

    if(!eh.isValid(element)) { return false}

    if(h.isNotNull(getElementType(element))){ return true }

    return false
    
}

function init(element){
    /**
     * Initializes an element
     * @param {Object} element
     * @returns {Object} The element
     */

    return krakenElementThingInitHelpers.init(element, TEMPLATEDB)
    
}

function set(element, record, conditions){
    /**
     * Sets the record of an element
     * @param {Object} element
     * @param {Object} record
     * @returns {Object} The element
     */

    return krakenElementThingRenderHelpers.render(element, record, conditions, TEMPLATEDB)

    
}
function render(element, record, conditions){
    /**
     * Sets the record of an element
     * @param {Object} element
     * @param {Object} record
     * @returns {Object} The element
     */

    return krakenElementThingRenderHelpers.render(element, record, conditions, TEMPLATEDB)


}


function renderSystem(element, record, conditions){
    /**
     * Sets the record of an element
     * @param {Object} element
     * @param {Object} record
     * @returns {Object} The element
     */

    return krakenElementThingRenderSystemHelpers.render(element, record, conditions, TEMPLATEDB)


}
