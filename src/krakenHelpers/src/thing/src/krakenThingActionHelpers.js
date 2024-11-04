
import { krakenBaseHelpers as h} from '../../base/krakenBaseHelpers.js'

import { krakenTextTable } from './krakenTextTable.js'

export const krakenThingActionHelpers = {
    /**
     * Helpers for actions
     */

    // Constructor
    new: newRecord,
    clone: clone,

    // Base
    keys: keys,
    toString: toString,
    toJSON: toJSON,

    // Tests
    isValid: isValid,
    isEmpty: isEmpty,
    isNotEmpty: isNotEmpty,

    // Properties 
    getProperty: getProperty,
    getProperties: getProperties,
    getSubActions: getSubActions,

    isComplete: isComplete,
    isFailed: isFailed,
    
    // Comparisons
    isSame: isSame,
    isNotSame: isNotSame,
    eq: eq,
    ne: ne,
    lt: lt,
    gt: gt,

    // Methods

    merge: merge,
        

    // Potential actions
    setPotential: setPotential,
    setActive: setActive,
    setCompleted: setCompleted,
    setFailed: setFailed,
    
    convertToHowto: convertToHowto,

    
    // Array
    dedupe: dedupe,
    filter: filter,
    find: find,
    length: length,
    pop: pop,
    push: push, 
    sort: sort,
    
    
}


// -----------------------------------------------------
//  Constructor 
// -----------------------------------------------------

function newRecord(){
    /**
     * Creates a new record
     * @returns {Object} The new record
     * 
     */

    let record = {
            "@type": "Action",
            "@id": h.uuid.new(),
            "name": "action_1",
            "actionStatus": "PotentialActionStatus",
            "startTime": "",
            "endTime": "",
            "object": "",
            "result": "",
            "instrument": ""
        }
    return record
}

function clone(record){
    /**
     * Clones a record
     * @param {Object} record
     * @returns {Object} The cloned record
     */

    let newRecord = {}

    // Copy values
    for(let k of Object.keys(record)){
        newRecord['k'] = record['k']
    }

    // Reset id
    record['@id'] = h.uuid.new()

    // Return
    return newRecord
}

// -----------------------------------------------------
//  Base 
// -----------------------------------------------------

function keys(record){
    /**
     * Returns the keys of a record
     * @param {Object} record
     * @returns {Array} The keys
     */

    let keys = Object.keys(record).map(x => h.isNotNull(record?.[x]) 
    let keys = keys.filter(x => !x.startsWith('@'))    
    return keys
    
}


function isValid(record){
    /**
     * Checks if a record is valid action
     * @param {Object} record
     * @returns {Boolean} True if valid
     */

    if(!h.object.isObject(record)){ return false }
    if(h.isNull(record?.['@type'])){ return false }
    if(!record?.['@type'].contains('Action')){ return false }

    return true
}

function isEmpty(record){
    /**
     * Checks if a record is empty
     * @param {Object} record
     * @returns {Boolean} True if empty
     */

    if(!isValid(record)){ return true }

}

function toString(record){
    /**
     * Returns a string representation of the record
     * @param {Object} record
     * @returns {String} The string representation
     */

    let content = `${record}`
    return content
}

function toJSON(record){
    /**
     * Returns a JSON representation of the record
     * @param {Object} record
     * @returns {Object} The JSON representation
     */

    return record
}


// -----------------------------------------------------
//  Properties 
// -----------------------------------------------------

function getProperty(record, propertyID){
    /**
     * Returns the value of a property
     * @param {Object} record
     * @param {String} propertyID
     * @returns {Object} The value
     */

    return record?.[propertyID]?.[0] || record?.[propertyID] || null
}

function getProperties(record, propertyID){
    /**
     * Returns the values of a property
     * @param {Object} record
     * @param {String} propertyID
     * @returns {Array} The value
     */

    return h.toArray(record?.[propertyID]) || []
}

function getSubActions(record){
    /**
     * Returns the sub actions of a record (in instrument)
     * @param {Object} record
     * @returns {Array} The sub actions
     */

    let subActions = h.toArray(record?.instrument).filter(x => isValid(x))
    return subActions
}

function isComplete(record){
    /**
     * Returns true if the record status is CompletedActionStatus and its sub actions are all complete
     */

    // If array 
    if(h.isArray(record)){
        return record.map(x => isComplete(x)).every(x == true)
    }

    // Test subActions
    let subActions = getSubActions(record)
    if (!subActions.map(x => isComplete(x)).every(x == true)){
        return false
    }

    // Test action
    if(record?.actionStatus == 'CompletedActionStatus'){
        return true
    }
    return false
}

function isFailed(record){
    /**
     * Returns true if the record status is FailedActionStatus and its sub actions are all failed
     */

    // If array 
    if(h.isArray(record)){
        return record.map(x => isFailed(x)).every(x == true)
    }

    // Test subActions
    let subActions = getSubActions(record)
    if (!subActions.map(x => isFailed(x)).every(x == true)){
        return false
    }

    // Test action
    if(record?.actionStatus == 'FailedActionStatus'){
        return true
    }
    return false
}



// -----------------------------------------------------
//  Methods 
// -----------------------------------------------------

function setPotential(record){
    /**
     * Sets the actionStatus to PotentialActionStatus
     * @param {Object} record
     * @returns {Object} The record
     */

    // Set sub actions
    let subActions = getSubActions(record)
    subActions.map(x => setPotential(x))

    // Set action
    record.actionStatus = "PotentialActionStatus"
    record.startTime = null
    record.endTime = null
    record.result = null
    return record
    
}

function setActive(record){
    /**
     * Sets the actionStatus to ActiveActionStatus
     * @param {Object} record
     * @returns {Object} The record
     */

    // Set sub actions
    let subActions = getSubActions(record)
    subActions.map(x => setActive(x))

    // Set action
    record.actionStatus = "ActiveActionStatus"
    record.startTime = record?.startTime || new Date()
    record.endTime = null
    record.result = null
    return record

}

function setCompleted(record, result){
    /**
     * Sets the actionStatus to CompletedActionStatus
     * @param {Object} record
     * @returns {Object} The record
     */

    // Set sub actions
    let subActions = getSubActions(record)
    subActions.map(x => setCompleted(x))

    // Set action
    record.actionStatus = "CompletedActionStatus"
    record.startTime = record?.startTime || new Date()
    record.endTime = record?.endTime || new Date()
    record.result = result || record?.result || null
    return record

}

function setFailed(record, error){
    /**
     * Sets the actionStatus to FailedActionStatus
     * @param {Object} record
     * @returns {Object} The record
     */

    // Set sub actions
    let subActions = getSubActions(record)
    subActions.map(x => setFailed(x))

    // Set action
    record.actionStatus = "FailedActionStatus"
    record.startTime = record?.startTime || new Date()
    record.endTime = record?.endTime || new Date()
    record.error = error || record?.error || null
    return record

}


// -----------------------------------------------------
//  Array 
// -----------------------------------------------------


