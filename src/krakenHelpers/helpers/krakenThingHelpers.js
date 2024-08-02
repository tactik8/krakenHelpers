

export const krakenThingHelpers = {

    isValid: validateThing,
    isThing: validateThing,
    validateThing: validateThing,
    getRefRecord: getRefRecord,
    ref: getRefRecord,
    toText: toText
    
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