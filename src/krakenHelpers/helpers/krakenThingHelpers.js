

import { krakenHelpersLight as h} from '../krakenHelpersLight.js'

import { krakenHeadingsHelpers } from './krakenHeadingsHelpers.js'

export const krakenThingHelpers = {

    isValid: validateThing,
    isThing: validateThing,
    isEqual: isEqual,
    validateThing: validateThing,
    getRefRecord: getRefRecord,
    type: getRecordType,
    id: getRecordId,
    ref: getRefRecord,
    toText: toText,
    extractThings: extractThings,
    record_type: getRecordType,
    record_id: getRecordId,
    recordType: getRecordType,
    recordId: getRecordId,
   
    
}


function validateThing(value){

    if(h.isNull(value)){ return false }
    if(h.isNull(getRecordType(value))){ return false }
    if(h.isNull(getRecordId(value))){ return false }
   
    return true
}

function getRefRecord(value){

    if(validateThing(value) == false ) { return undefined }
    
    let result = {
        "@type": getRecordType(value),
        "@id": getRecordId(value)
    }

    return result
    
}

function toText(value){

    if(validateThing(value) == false ) { return undefined }


    return h.headings.heading1(value)

    
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

    if(h.array.isArray(record)){

        for(let r of record){
            let values = extractThings(r)
            if(values.length > 0){
                results = results.concat(values)
            }
        }
    } else if(h.object.isObject(record)){

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

function getRecordType(value){

    let record_type = value?.['@type'] || value?.record_type || null
    return record_type
}

function getRecordId(value){

    let record_type = value?.['@id'] || value?.record_id || null
    return record_type
}


function isEqual(thing1, thing2){

    if(h.isNull(thing1) && h.isNull(thing2)){ return true }
    if(h.isNull(thing1) && h.isNotNull(thing2)){ return false }
    if(h.isNotNull(thing1) && h.isNull(thing2)){ return false }
    
    let record1 = thing1?.record || thing1
    let record2 = thing2?.record || thing2

    try {
        if(JSON.stringify(record1) == JSON.stringify(record2)){
            return true
        } else {
            return false
        }
    
    } catch (error) {
        return false
    }
    
}