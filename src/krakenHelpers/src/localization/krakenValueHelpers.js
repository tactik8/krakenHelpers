

import { krakenBaseHelpers as h} from '../base/krakenBaseHelpers.js'


export const krakenValueHelpers = {

    toString: toString,
    getType: getType,
    getTypeSchemaOrg: getTypeSchemaOrg,
    innerValuesToText: innerValuesToText,
    valuesToText: innerValuesToText
}


function isValid(value){
    /**
     * Checks if a value is valid
     * @param {Object} value
     * @returns {Boolean}
     */

    return true
    
}


function toString(value) {
    /**
     * Converts a value to a string
     * @param {Object} value The value
     * @returns {String} The string
     * 
     */
    
    if(value !== 0 && value === undefined){ return ''}
    if(value !== 0 && value === null){ return ''}
    if(value !== 0 && value == ''){ return ''}
    if(value !== 0 && h.array.isValid(value) && value.length == 0 ){ return ''}
    if(value !== 0 && value == {}){ return ''}
    if(value !== 0 && value == 'undefined'){ return ''}
    
    if (h.thing.isValid(value)) {
        return h.thing.toString(value)
    } else if (h.date.isValid(value)) {
        return h.date.toString(value)
    } else if (h.date.isValidText(value)) {
        return h.date.toString(value)
    } else if (h.array.isValid(value)) {
        return h.array.toString(value)
    } else if (h.number.isValid(value)) {
        return h.number.toString(value)
    } else if (h.object.isObject(value)) {
        return h.object.toString(value)
    } else {
        value = String(value)
        value = value.replace('ActionStatus', '')
        value = value.replace('undefined', '')
        value = h.string.fromCamelCase(value)
        return value
    }
}


function innerValuesToText(value){
    /**
     * Convertsthe values of a dict to a string
     * @param {Object} value The value
     * @returns {String} The string
     */
    
    if (h.array.isValid(value)) {
        let result = []
        for(let v of value){
            result.push(innerValuesToText(v))
        }
        return result
    } 

    if(h.object.isObject(value)){

        let result = {}
        for(let k of h.object.keys(value)){
            result[k] = toString(value[k])
        }
        return result 
    }
    
    return toString(value)
}


function getType(value) {
    /**
     * Returns the type of a value
     * @param {Object} value The value
     * @returns {String} The type (thing, datetime, array, number, string)
     * 
     */

    if (h.thing.isThing(value)) {
        return 'thing'
    } else if (h.date.isValid(value)) {
        return 'datetime'
    } else if (h.array.isValid(value)) {
        return 'array'
    } else if (h.number.isNumber(value)) {
        return 'number'
    } else {
        return 'string'
    }

}


function getTypeSchemaOrg(value){
    /**
     * Returns the schema.org type of a value 
     * @param {Object} value The value
     * @returns {String} The type (thing, datetime, array, number
     */

    let t = getType(value)


    if(t == "thing"){
        return value['@type']
    }
    
    if(t == "string"){
        if(h.url.toUrl(value)){
            return 'url'
        }
        
    }

    return t

    
}

