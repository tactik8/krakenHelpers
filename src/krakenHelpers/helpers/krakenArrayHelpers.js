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

    toText: toText,
    isArray: validateArray,
    validateArray: validateArray,
    toArray: ensureArray,
    ensureArray: ensureArray,
    getKeys: getKeys,
    keys: getKeys,
    getValuesForKey: getValuesForKey,
    getNumbersForKey: getNumbersForKey,
    merge: merge,
    mergeUnique: mergeUnique,
    
}


// -----------------------------------------------------
//  Validation 
// -----------------------------------------------------


function validateArray(value){

    if(Array.isArray(value)){ return true }
    return false
    
}


// -----------------------------------------------------
//  Transformation 
// -----------------------------------------------------

function ensureArray(value) {
    
    if(h.isNull(value)){ return [] }

    if (validateArray(value)) {
        return value;
    } else {
        return [value];
    }
}

function toText(value) {

    if(validateArray(value) == false){ return undefined }

    let result = `[${value.length}]`
    return result
    
}



// -----------------------------------------------------
//  Query 
// -----------------------------------------------------



function getKeys(value){
    if(validateArray(value) == false){ return undefined }

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

    value = ensureArray(value)
    if(validateArray(value) == false){ return undefined }

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
    // Returns array of numbers only for a given k

    value = ensureArray(value)
    
    let items = getValuesForKey(value, key)
    let results = []
    for(let item of items){
        let newItem = h.number.toNumber(item)
        if(h.number.isNumber(newItem) == true){
            results.push(newItem)
        }
        if(item?.['@type'] && item?.['@type'] == 'QuantitativeValue'){
            let quantItem = h.number.toNumber(item?.value)
            if(h.number.isNumber(quantItem) == true){
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
    let v1 = ensureArray(value1)
    let v2 = ensureArray(value2)   

    if(h.isNull(v1) && h.isNull(v2)){ return [] }
    if(h.isNull(v1) && h.isNotNull(v2)){ return v2 }
    if(h.isNotNull(v1) && h.isNull(v2)){ return v1 }

    let newValue = v1.concat(v2)
    return newValue
}

function mergeUnique(value1, value2){

    let values = merge(value1, value2)
    let uniqueValues = []
    for(let v of values){
        if(!uniqueValues.includes(v)){
            uniqueValues.push(v)
        }
    }
    return uniqueValues
    
}