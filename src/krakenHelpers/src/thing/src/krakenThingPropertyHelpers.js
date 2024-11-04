
import { krakenBaseHelpers as h} from '../../base/krakenBaseHelpers.js'

import { krakenThingPropertyValueHelpers as pvh} from './krakenThingPropertyValueHelpers.js'


/**
 * Property Value schema:
 * {
            "@type": "replaceAction",
            "@id": "6e89c8fc-fba7-4b36-a004-638dcdaa8714",
            "actionStatus": "completedActionStatus",
            "valid": true,
            "object": {
                "@type": "propertyValue",
                "propertyID": "@context",
                "value": "https://schema.org/"
            },
            "metadata": {
                "createdDate": "2024-10-06T17:23:05.018Z",
                "position": 1
            }
        },
 */


export const krakenThingPropertyHelpers = {

    isValid: isValid,
    toText: toText,
    eq: isEqual,
    ne: isNotEqual,
    lt: isLessThan,
    gt: isGreaterThan,
    propertyIDs: getPropertyIDs
    

}

function isValid(record){

    record = record?._record || record

    try {
        if(h.isNull(getRecordType(record))) { return false}
        if(h.isNull(getRecordId(record))) { return false }
        if(h.isNull(record?.metadata)) { return false }
        if(h.isNull(record?.object)) { return false }
        if(h.isNull(record?.value)) { return false }
        return true
    } catch {
        return false
    }
    
}


function toText(record){

    record = record?._record || record
    
    if(record.record_type){
        return `${this.value.record_type}/${this.value.record_id}`
    } else {
        return String(this.value)
    }
    
}

function getRecordType(record_or_record_type, record_id){

    let value = value?.['@type'] || value?.record_type || record_or_record_type
    return value

}

function getRecordId(record_or_record_type, record_id){

    let value = record_or_record_type?.['@id'] || record_or_record_type?.record_id || record_id
    return value

}


function isEqual(pv1, pv2){

    pv1 = pv1?._record || pv1
    pv2 = pv2?._record || pv2

    
    // Error handling
    if(h.isNull(pv1) && h.isNull(pv2)){ return true }
    if(h.isNull(pv1) || h.isNull(pv2)){ return false }
    
    
    if(getRecordType(pv1) != getRecordType(pv2)) { return false }
    
    if(getRecordId(pv1) != getRecordId(pv2)) { return false }

    return true
    
}



function isNotEqual(pv1, pv2){

    pv1 = pv1?._record || pv1
    pv2 = pv2?._record || pv2
    
    // Error handling
    if(h.isNull(pv1) && h.isNull(pv2)){ return false }
    if(h.isNull(pv1) || h.isNull(pv2)){ return true }

    if(getRecordType(pv1) != getRecordType(pv2)) { return true }

    if(getRecordId(pv1) != getRecordId(pv2)) { return true }

    return false

}


function isGreaterThan(pv1, pv2){

    pv1 = pv1?._record || pv1
    pv2 = pv2?._record || pv2

    
    if (!pv1?.metadata?.credibility && pv2?.metadata?.credibility) { return false};
    if (pv1?.metadata?.credibility && !pv2?.metadata?.credibility) { return true};

    if ( pv1?.metadata?.credibility > pv2?.metadata?.credibility){ return true };
    if ( pv1?.metadata?.credibility < pv2?.metadata?.credibility){ return false };


    if (!pv1?.metadata?.observationDate && pv2?.metadata?.observationDate) { return false};
    if (pv1?.metadata?.observationDate && !pv2?.metadata?.observationDate) { return true};

    if ( pv1?.metadata?.observationDate > pv2?.metadata?.observationDate){ return true };
    if ( pv1?.metadata?.observationDate < pv2?.metadata?.observationDate){ return false };

    if (!pv1?.metadata?.createdDate && pv2?.metadata?.createdDate) { return false};
    if (pv1?.metadata?.createdDate && !pv2?.metadata?.createdDate) { return true};

    if ( pv1?.metadata?.createdDate > pv2?.metadata?.createdDate){ return true };
    if ( pv1?.metadata?.createdDate < pv2?.metadata?.createdDate){ return false };

    if (!pv1?.metadata?.position && pv2?.metadata?.position) { return false};
    if (pv1?.metadata?.position && !pv2?.metadata?.position) { return true};

    if ( pv1?.metadata?.position > pv2?.metadata?.position){ return true };
    if ( pv1?.metadata?.position < pv2?.metadata?.position){ return false };

    return false
    
}

function isLessThan(pv1, pv2){

    return !isGreaterThan(pv1, pv2)

}




// -----------------------------------------------------
//  Comment 
// -----------------------------------------------------

function getPropertyIDs(record){

    let propertyIDs = []

    // Handle thing class object
    if(h.isNotNull(record?._properties)){
        for(let p of record?._properties){
            if(propertyIDs.includes(p.propertyID) == false){
                propertyIDs.push(p.propertyID)
            }
        }
        return propertyIDs
    }

    // Handle system record
    if(h.isNotNull(record?._propertyValues)){
        for(let p of record._propertyValues){
            if(propertyIDs.includes(p.propertyID) == false){
                    propertyIDs.push(p.propertyID)
            }
        }
        return propertyIDs
    }

    // Handle record
    try{
        if(h.isNotNull(Object.keys(record))){
            for(let k of Object.keys(record)){
                propertyIDs.push(k)
            }
            return propertyIDs
        }
    } catch { return [] }

    return []

}

function getPropertyValues(record, propertyID, metadata){
    /**
     * record: the object to get property  values form (thing, system record or record)
     * propertyID: the property to get values for
     * metadata: the metadata to assign to values if missing
     */

   
    // Get propertyValues from thing
    if(h.isNotNull(record?._properties)){
        let p = record._properties.find(p => p.propertyID == propertyID)
        return h.toArray(p?._propertyValues)
    }

    // Get propertyValues from system record
    if(h.isNotNull(record?._properties)){
        let pvs = record._propertyValues.find(p => p?.object?.propertyID == propertyID)
        return h.toArray(pvs)
    }
    
    // Get propertyValues from record
    try{
        if(h.isNotNull(Object.keys(record))){
            for(let k of Object.keys(record)){
                let pv = pvh.new('AddAction', propertyID, record?.[key], metadata)
                propertyIDs.push(k)
            }
            return propertyIDs
        }
    } catch { return [] }
    
}

// -----------------------------------------------------
//  System 
// -----------------------------------------------------

