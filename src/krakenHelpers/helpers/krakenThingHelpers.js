

import { krakenArrayHelpers } from './krakenArrayHelpers.js'
import { krakenObjectHelpers } from './krakenObjectHelpers.js'



export const krakenThingHelpers = {

    isValid: validateThing,
    isThing: validateThing,
    validateThing: validateThing,
    getRefRecord: getRefRecord,
    ref: getRefRecord,
    toText: toText,
    extractThings: extractThings
    
}


function validateThing(value){

    if(!value['@type']){ return false }
    return true
}

function getRefRecord(value){

    if(validateThing(value) == false ) { return undefined }
    
    let result = {
        "@type": value['@type'],
        "@id": value['@id']
    }
    return result
    
}

function toText(value){

    if(validateThing(value) == false ) { return undefined }

    let record_type = value['@type']
    let record_id = value['@id']

    
    if(record_type == 'QuantitativeValue'){
        
        let result = `${value['value']} ${value['unitText'] || value['unitCode'] || ''}`
        return result
    }

    if(record_type == "DefinedTerm"){

        if(value.name && value.name != null){ return value.name }
        if(value.termCode && value.termCode != null){ return value.termCode }
        
    }

    if(record_type == 'Person'){

        if(value['givenName'] && value['familyName']){
            return `${value['givenName']} ${value['familyName']}`
        }
    }

    if(record_type == 'PostalAddress'){

        
    }
    
    
    let result = `${value['@type']}/${value['@id']}`
      
    return result

}


function extractThings(record){

    
    let results = []

    if(krakenArrayHelpers.isArray(record)){

        for(let r of record){
            let values = extractThings(r)
            if(values.length > 0){
                results = results.concat(values)
            }
        }
    } else if(krakenObjectHelpers.isObject(record)){

        if(record?.['@type'] && record?.['@type'] != null){
            results.push(record)
        }
        
        for(let k of Object.keys(record)){
            let v = record[k]
            let values = extractThings(v)
            if(values.length > 0){
                results = results.concat(values)
            }
        }

    } else {
    }

 
    
    return results
    
    
}