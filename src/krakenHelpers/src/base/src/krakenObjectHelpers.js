

export const krakenObjectHelpers = {

    isObject: isObject,
    isValid: isObject,
    getKeys: getKeys,
    keys: getKeys,
    toString: toString,
    toStirng: toString,
    merge: merge
    
}


function isObject(value){

    return typeof value === 'object' && !Array.isArray(value) && value !== null
}

function getKeys(value){

    if(isObject(value) == false) { return [] }

    let keys = Object.keys(value)
    keys.sort()
    return keys
}


function toString(value){

    if(isObject(value) == false) { return [] }

    if(value['@type']){

        return `${value["@type"]}/${value['@id']}`
    } else {

        let keys = Object.keys(value)
        if(keys.length == 0){ return '{}'}

        return `{"${keys[0]}": "${value[keys[0]]}", ... }`
        
    }

    
}

function merge(target, source){
    /**
     * Merges two objects together
     * @param {Object} target
     * @param {Object} source
     * @returns {Object} The merged object
     * 
     */
    if(isObject(target) == false) { return null }
    if(isObject(source) == false) { return target }

    let result = { ...target, ...source}

    return result
}

