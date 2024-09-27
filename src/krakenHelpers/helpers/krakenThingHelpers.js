

import { krakenArrayHelpers } from './krakenArrayHelpers.js'
import { krakenObjectHelpers } from './krakenObjectHelpers.js'
import { krakenNullHelpers as h } from './krakenNullHelpers.js'

import { krakenHeadingsHelpers } from './krakenHeadingsHelpers.js'

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

    if(h.isNotNull(value?.['@type']) || h.isNotNull(value?.record_type)){ return true }
    return false
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


    return krakenHeadingsHelpers.heading1(value)

    
    let record_type = value?.['@type'] || value?.record_type
    let record_id = value?.['@id'] || value?.record_id

    
    if(record_type == 'QuantitativeValue'){
        
        let result = `${value['value']} ${value['unitText'] || value['unitCode'] || ''}`
        return result
    }

    if(record_type == "DefinedTerm"){

        if(h.isNotNull(value?.name)){ return value.name }
        if(h.isNotNull(value?.termCode)){ return value.termCode }
        
    }

    if(record_type == 'Person'){

        let givenName = value?.['givenName']
        let familyName = value?.['familyName']


        if(h.isNotNull(givenName) && h.isNotNull(familyName)){
            return `${givenName} ${familyName}`
        }
    }

    if(record_type == 'PostalAddress'){

        let values = []
        values.push(value?.streetAddress)
        values.push(value?.addressLocality)
        values.push(value?.addressRegion)
        values.push(value?.postalCode)
        values.push(value?.addressCountry?.name || value?.addressCountry)
        values = values.filter(x => h.isNotNull(x))

        return values.join(', ')
        
    }
    
    
    let result = `${value['@type']}/${value['@id']}`
      
    return result

}


function extractThings(record){
    /**
     * Returns all child things in record
     */
    
    let results = []

    if(krakenArrayHelpers.isArray(record)){

        for(let r of record){
            let values = extractThings(r)
            if(values.length > 0){
                results = results.concat(values)
            }
        }
    } else if(krakenObjectHelpers.isObject(record)){

        if(h.isNotNull(record?.['@type']) || h.isNotNull(record?.record_type)){
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