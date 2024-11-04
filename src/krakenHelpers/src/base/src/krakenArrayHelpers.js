import { krakenNullHelpers} from "./krakenNullHelpers.js";
import { krakenNumberHelpers} from "./krakenNumberHelpers.js";

let h = {
    number: krakenNumberHelpers,
    null: null,
    isNull: krakenNullHelpers.isNull,
    isNotNull: krakenNullHelpers.isNotNull,
    
}


import { krakenDotNotationHelpers } from './krakenDotNotationHelpers.js'


export const krakenArrayHelpers = {

    toString: toString,
    toString: toString,
    isValid: isValid,
    isArray: isValid,
    isValid: isValid,
    toArray: toArray,
    toArray: toArray,
    keys: keys,
    keys: keys,
    getValuesForKey: getValuesForKey,
    getNumbersForKey: getNumbersForKey,
    merge: merge,
    mergeUnique: mergeUnique,
    
}


// -----------------------------------------------------
//  Validation 
// -----------------------------------------------------


function isValid(value){
    /**
     * Checks if a value is valid
     * @param {Object} value
     * @returns {Boolean}
     * 
     */

    if(typeof value == 'string'){ return false }

    
    if(Array.isArray(value)){ return true }
    return false
    
}


// -----------------------------------------------------
//  Transformation 
// -----------------------------------------------------

function toArray(value) {
    /**
     * Converts a value to an array
     * @param {Object} value
     * @returns {Array}
     */
    
    if(h.isNull(value)){ return [] }

    if(typeof value == 'string'){
        return [value]
    }

    
    if (isValid(value)) {
        return value;
    } else {
        return [value];
    }
}

function toString(value) {
    /**
     * Converts a value to a string
     * @param {Object} value
     * @returns {String}
     */

    if(isValid(value) == false){ return undefined }

    let result = `[${value.length}]`
    return result
    
}



// -----------------------------------------------------
//  Query 
// -----------------------------------------------------



function keys(value){
    /**
     * Returns the keys of an object
     * @param {Object} value
     * @returns {Array}
     */
    
    if(isValid(value) == false){ return undefined }

    let keys = []
    for(let v of value){
        for(let k of Object.keys(v)){
            if(!keys.includes(k)){
                keys.push(k)
            }
        }
    }
    keys.sort()
    return keys
}

function getValuesForKey(value, key){
    /**
     * Returns the values for a key
     * @param {Object} value
     * @param {String} key
     * @returns {Array}
     */

    // If not key, return value
    if(h.isNull(key)){ return value }

    
    value = toArray(value)
    if(isValid(value) == false){ return undefined }

    let results = []
    for(let v of value){
        let v1 = krakenDotNotationHelpers.getValue(key, v) //v?.[key] 
        if(v1){
            results.push(v1)
        }
    }
    return results
    
}

function getNumbersForKey(value, key){
    /**
     * Returns the numbers for a key
     * @param {Object} value
     * @param {String} key
     * @returns {Array}
     */
    // Returns array of numbers only for a given k

    value = toArray(value)
    
    let items = getValuesForKey(value, key)
    let results = []
    for(let item of items){
        let newItem = h.number.toNumber(item)
        if(h.number.isValid(newItem) == true){
            results.push(newItem)
        }
        if(item?.['@type'] && item?.['@type'] == 'QuantitativeValue'){
            let quantItem = h.number.toNumber(item?.value)
            if(h.number.isValid(quantItem) == true){
                results.push(quantItem)
            }
        }
    }
    return results    
}

function getUnitCodesForKey(value, key){
    // Returns array of numbers only for a given k

    let items = getValuesForKey(value, key)
    let results = []
    for(let item of items){
        if(item?.['@type'] && item?.['@type'] == 'QuantitativeValue'){
            results.push(item.unitCode)
        }
    }
    return results    
}


function merge(value1, value2){
    /**
     * Merges two arrays
     * @param {Object} value1
     * @param {Object} value2
     * @returns {Object}
     */
    
    let v1 = toArray(value1)
    let v2 = toArray(value2)   

    if(h.isNull(v1) && h.isNull(v2)){ return [] }
    if(h.isNull(v1) && h.isNotNull(v2)){ return v2 }
    if(h.isNotNull(v1) && h.isNull(v2)){ return v1 }

    let newValue = v1.concat(v2)
    return newValue
}

function mergeUnique(value1, value2){
    /**
     * Merges two arrays
     * @param {Object} value1
     * @param {Object} value2
     * @returns {Object}
     */

    let values = merge(value1, value2)
    let uniqueValues = []
    for(let v of values){
        if(!uniqueValues.includes(v)){
            uniqueValues.push(v)
        }
    }
    return uniqueValues
    
}