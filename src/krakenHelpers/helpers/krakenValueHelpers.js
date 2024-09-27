import { krakenArrayHelpers } from './krakenArrayHelpers.js'

import { krakenDateHelpers } from './krakenDateHelpers.js'
import { krakenThingHelpers } from './krakenThingHelpers.js'
import { krakenNumberHelpers } from './krakenNumberHelpers.js'
import { krakenObjectHelpers } from './krakenObjectHelpers.js'
import { krakenUrlHelpers } from './krakenUrlHelpers.js'
import { krakenStringHelpers } from './krakenStringHelpers.js'


export const krakenValueHelpers = {

    toText: toText,
    getType: getType,
    getTypeSchemaOrg: getTypeSchemaOrg,
    innerValuesToText: innerValuesToText,
    valuesToText: innerValuesToText
}

function toText(value) {
    
    if(value !== 0 && value === undefined){ return ''}
    if(value !== 0 && value === null){ return ''}
    if(value !== 0 && value == ''){ return ''}
    if(value !== 0 && Array.isArray(value) && value.length == 0 ){ return ''}
    if(value !== 0 && value == {}){ return ''}
    if(value !== 0 && value == 'undefined'){ return ''}
    
    if (krakenThingHelpers.isThing(value)) {
        return krakenThingHelpers.toText(value)
    } else if (krakenDateHelpers.isDate(value)) {
        return krakenDateHelpers.toText(value)
    } else if (krakenDateHelpers.isTextDate(value)) {
        return krakenDateHelpers.toText(value)
    } else if (krakenArrayHelpers.isArray(value)) {
        return krakenArrayHelpers.toText(value)
    } else if (krakenNumberHelpers.isNumber(value)) {
        return krakenNumberHelpers.toText(value)
    } else if (krakenObjectHelpers.isObject(value)) {
        return krakenObjectHelpers.toText(value)
    } else {
        value = String(value)
        value = value.replace('ActionStatus', '')
        value = value.replace('undefined', '')
        value = krakenStringHelpers.fromCamelCase(value)
        return value
    }
}


function innerValuesToText(value){
    
    if (krakenArrayHelpers.isArray(value)) {
        let result = []
        for(let v of value){
            result.push(innerValuesToText(v))
        }
        return result
    } 

    if(krakenObjectHelpers.isObject(value)){

        let result = {}
        for(let k of krakenObjectHelpers.keys(value)){
            result[k] = toText(value[k])
        }
        return result 
    }
    
    return toText(value)
}


function getType(value) {

    if (krakenThingHelpers.isThing(value)) {
        return 'thing'
    } else if (krakenDateHelpers.isDate(value)) {
        return 'datetime'
    } else if (krakenArrayHelpers.isArray(value)) {
        return 'array'
    } else if (krakenNumberHelpers.isNumber(value)) {
        return 'number'
    } else {
        return 'string'
    }

}


function getTypeSchemaOrg(value){

    let t = getType(value)


    if(t == "thing"){
        return value['@type']
    }
    
    if(t == "string"){
        if(krakenUrlHelpers.toUrl(value)){
            return 'url'
        }
        
    }

    return t

    
}

