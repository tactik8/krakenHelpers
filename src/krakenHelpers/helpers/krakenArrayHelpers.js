import { krakenNumberHelpers } from './krakenNumberHelpers.js'
import { krakenObjectHelpers } from './krakenObjectHelpers.js'



export const krakenArrayHelpers = {

    toText: toText,
    isArray: validateArray,
    validateArray: validateArray,
    toArray: ensureArray,
    ensureArray: ensureArray,
    getKeys: getKeys,
    keys: getKeys,
    getValuesForKey: getValuesForKey,
    getNumbersForKey: getNumbersForKey
    
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
    
    if(!value || value == null || value == {}){ return [] }

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
        let v1 = v?.[key] 
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
        let newItem = krakenNumberHelpers.toNumber(item)
        if(krakenNumberHelpers.isNumber(newItem) == true){
            results.push(newItem)
        }
        if(item?.['@type'] && item?.['@type'] == 'QuantitativeValue'){
            let quantItem = krakenNumberHelpers.toNumber(item?.value)
            if(krakenNumberHelpers.isNumber(quantItem) == true){
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
