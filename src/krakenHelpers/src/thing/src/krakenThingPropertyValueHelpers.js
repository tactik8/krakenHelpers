
import { krakenBaseHelpers as h} from '../../base/krakenBaseHelpers.js'




import { krakenThingPropertyValueSpecificationHelpers as pvs } from './krakenThingPropertyValueSpecificationHelpers.js'


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


export const krakenThingPropertyValueHelpers = {

    isValid: isValid,
    toString: toString,
    hash: hash,

    // Comparison
    isSame: isSame,
    isNotSame: isNotSame,
    eq: eq,
    ne: ne,
    lt: lt,
    gt: gt,

    // Methods
    clone: clone,
    override: override,
    compile: compile,
    system: {
        get: getSystemRecord
    },

    
    // PVs
    new: {
        add: getAddPV,
        delete: getDeletePV,
        update: getUpdatePV,
        replace: getReplacePV,
    },
    
    sort: sort,
    filter: filter,
    dedupe: dedupe,
    concat: concat

}

function isValid(record){


    try {
        if(h.isNull(getRecordType(record))) { return false}
        if(h.isNull(getRecordId(record))) { return false }
        if(h.isNull(record?.metadata)) { return false }
        if(h.isNull(record?.object)) { return false }
        if(h.isNull(record?.object?.propertyID)) { return false }
        return true
    } catch {
        return false
    }
    
}


function toString(record){

    if(h.array.isArray(record)){


        let records = JSON.parse(JSON.stringify(record))

        let validRecord = compile(records)


        let newRecords = []
        for(let r of records){
            if(r.object.propertyID.startsWith('@')){
                
            } else 
            if(validRecord.includes(r)){
                r.active = 'true'
                newRecords.push(r)
            } else {
                r.active = 'false'
                newRecords.push(r)
            }
        }
        records = newRecords

        records = sort(records, 'position')

        
        let keys = ['@type', 'object.propertyID', 'object.value', 'active', 'metadata.credibility', 'metadata.observationDate', 'metadata.createdDate', 'metadata.position']
        let headings = ['@type', 'propertyID', 'value', 'active', 'credibility', 'observationDate', 'createdDate', 'position']
        return h.textTable(records, keys, headings)
    }

    
    return `${record?.["@type"] || ''} ${record?.object?.propertyID || ''} ${record?.object?.value?.['@type'] || record?.object?.value || ''} ${record?.object?.value?.['@id'] || ''}`

}


function clone(value){
    /**
     * Clones a record
     * @param {Object} record The record
     * @returns {Object} The cloned record
     * 
     */

    let clone = {}

    for(let k of Object.keys(value)){
        clone[k] = value[k]
    }
    
    
    clone['@id'] = h.uuid.new()

    clone.object =  {
        "@type": "PropertyValue",
        propertyID: value?.object?.propertyID,
        value: value?.object?.value
    }
    clone.metadata =  JSON.parse(JSON.stringify(value.metadata))

    
    return clone 
    
}


function getRecordType(record_or_record_type, record_id){

    let value = record_or_record_type?.['@type'] || record_or_record_type?.record_type || record_or_record_type
    return value

}

function getRecordId(record_or_record_type, record_id){

    let value = record_or_record_type?.['@id'] || record_or_record_type?.record_id || record_id
    return value

}



function hash(pv){
    /**
     * Hash to compare if two PV are equivalent. For same, user @id
     * @param {PropertyValueSpecification} pv
     * @returns {string}
     * Creates a has with everything but createdDate and position
     * 
     *
     *
     */


    
    // Error handling
    if(h.isNull(pv)){
        throw new Error('Value provided is not pv');
    }

    if(!isValid(pv)){
        throw new Error('Value provided is not pv');
    }

    // Make copy of pv
    let newPV = clone(pv)
    

    if(h.isNotNull(getRecordType(newPV.object.value))){
        newPV.object.value = h.thing.ref.get(newPV.object.value)
    }
    
    //let value = JSON.parse(JSON.stringify(pv))
    let value = newPV
    
    // Remove createdDate and position
    if(h.isNotNull(value?.metadata)){
        delete value['@id']
        delete value.metadata.createdDate
        delete value.metadata.position
    }

    // Convert to string
    let hashValue = h.hash.get(value)

    // Return hash
    return hashValue
   
}

function isSame(pv1, pv2){
    /**
     * Compare two PV for same
     * @param {PropertyValueSpecification} pv1
     * @param {PropertyValueSpecification} pv2
     * @returns {boolean}
     */

    if(h.isNull(pv1)){
        return false
    }

    if(h.isNull(pv2)){
        return false
    }
    
    return hash(pv1) == hash(pv2)    
}

function isNotSame(pv1, pv2){
    /**
     * Compare two PV for not same
     * @param {PropertyValueSpecification} pv1
     * @param {PropertyValueSpecification} pv2
     * @returns {boolean}
     */
    return hash(pv1) != hash(pv2)    
}


function eq(pv1, pv2){
    /**
     * Compare two PV for equal
     * @param {PropertyValueSpecification} pv1
     * @param {PropertyValueSpecification} pv2
     * @returns {boolean}
     */

    // Error handling
    if(h.isNull(pv1)){
        throw new Error('Value provided is not pv');
    }

    if(!isValid(pv1)){
        throw new Error('Value provided is not pv');
    }

    // Error handling
    if(h.isNull(pv2)){
        throw new Error('Value provided is not pv');
    }

    if(!isValid(pv2)){
        throw new Error('Value provided is not pv');
    }


    

    // Error handling
    if(h.isNull(pv1) && h.isNull(pv2)){ return true }
    if(h.isNull(pv1) || h.isNull(pv2)){ return false }
    
    if(getRecordType(pv1) != getRecordType(pv2)) { return false }
    if(getRecordId(pv1) != getRecordId(pv2)) { return false }

    return true
    
}



function ne(pv1, pv2){


    // Error handling
    if(h.isNull(pv1)){
        throw new Error('Value provided is not pv');
    }

    if(!isValid(pv1)){
        throw new Error('Value provided is not pv');
    }

    // Error handling
    if(h.isNull(pv2)){
        throw new Error('Value provided is not pv');
    }

    if(!isValid(pv2)){
        throw new Error('Value provided is not pv');
    }

    
    
    // Error handling
    if(h.isNull(pv1) && h.isNull(pv2)){ return false }
    if(h.isNull(pv1) || h.isNull(pv2)){ return true }

    if(getRecordType(pv1) != getRecordType(pv2)) { return true }

    if(getRecordId(pv1) != getRecordId(pv2)) { return true }

    return false

}


function gt(pv1, pv2){
    /**
     * Compare two PV for greater than
     * @param {PropertyValueSpecification} pv1
     * @param {PropertyValueSpecification} pv2
     * @returns {boolean}
     */

    // Error handling
    if(h.isNull(pv1)){
        throw new Error('Value provided is not pv');
    }

    if(!isValid(pv1)){
        throw new Error('Value provided is not pv');
    }
    if(h.isNull(pv2)){
        throw new Error('Value provided is not pv');
    }

    if(!isValid(pv2)){
        throw new Error('Value provided is not pv');
    }

    
    


    let propertyIDs = ['credibility', 'observationDate', 'createdDate', 'position']

    let result

   
    for(let propertyID of propertyIDs){

        
        let value1 = pv1?.metadata?.[propertyID]
        let value2 = pv2?.metadata?.[propertyID]
        
        if(h.isNull(value1) && h.isNotNull(value2)) { result = false }
        if(h.isNotNull(value1) && h.isNull(value2)) { result = true }

        if(h.isNotNull(value1) && h.isNotNull(value2) && value1 != value2){
            result = value1 > value2 
        }

        if(result){ return result }
       
    }
    return false

}

function lt(pv1, pv2){
    /**
     * Compare two PV for less than
     * @param {PropertyValueSpecification} pv1
     * @param {PropertyValueSpecification} pv2
     * @returns {boolean}
     */

    // Error handling
    if(h.isNull(pv1)){
        throw new Error('Value provided is not pv');
    }

    if(!isValid(pv1)){
        throw new Error('Value provided is not pv');
    }
    // Error handling
    if(h.isNull(pv2)){
        throw new Error('Value provided is not pv');
    }

    if(!isValid(pv2)){
        throw new Error('Value provided is not pv');
    }




    let propertyIDs = ['credibility', 'observationDate', 'createdDate', 'position']


    for(let propertyID of propertyIDs){

        let value1 = pv1?.metadata?.[propertyID]
        let value2 = pv2?.metadata?.[propertyID]

        if(h.isNull(value1) && h.isNull(value2)) { continue }
        if(h.isNull(value1) && h.isNotNull(value2)) { return true }
        if(h.isNotNull(value1) && h.isNull(value2)) { return false }

        if(value1 < value2){ return true }
        if(value1 > value2){ return false }
    }
    return false

}


function create(actionType, propertyID, value, metadata, replacee){

    /**
     * Action types:
     * - AddAction
     * - ReplaceAction
     * - DeleteAction
     * - 
     */

    
    let record = {
            "@type": actionType,
            "@id": String(crypto.randomUUID()),
            "actionStatus": "CompletedActionStatus",
            "valid": true,
            "replacee": replacee, 
            "object": {
                "@type": "PropertyValue",
                "propertyID": propertyID,
                "value": value
            },
            "metadata": {
                "createdDate": h.date.toDate(metadata?.createdDate) || new Date(),
                "position": h.number.toNumber(metadata?.position)  || null,
                "credibility": h.number.toNumber(metadata?.credibility)  || null,
                "observationDate": h.date.toDate(metadata?.observationDate)  || null,
                "validFrom": h.date.toDate(metadata?.validFrom)  || null,
                "validThrough": h.date.toDate(metadata?.validThrough)  || null,
                "object": metadata?.object  || null,
                "instrument": metadata?.instrument  || null,
                "agent": metadata?.agent  || null
            }
        }

    
    // Clean up record
    record = h.json.simplify(record)


    
    //throw new Error('Parameter is not a number!');
    // Return record
    return record
    
}


// -----------------------------------------------------
//  Comment 
// -----------------------------------------------------

function getSystemRecord(pv){

    // Error handling
    if(h.isNull(pv)){
        throw new Error('Value provided is not pv');
    }

    if(!isValid(pv)){
        throw new Error('Value provided is not pv');
    }

    

    // Handle class propertyValue
    if(h.isNotNull(pv?._record)){

        pv = pv._record
        pv.metadata = pv.metadata?._record 
        
    }

    return pv
    
}



// -----------------------------------------------------
//  Compile value 
// -----------------------------------------------------

function override(pv1, pv2){
    /**
     * Returns true if pv1 override pv2
     */


    // Error handling
    if(h.isNull(pv1)){
        throw new Error('Value provided is not pv');
    }

    if(!isValid(pv1)){
        throw new Error('Value provided is not pv');
    }

    // Error handling
    if(h.isNull(pv2)){
        throw new Error('Value provided is not pv');
    }

    if(!isValid(pv2)){
        throw new Error('Value provided is not pv');
    }



    // Error handling
    if(h.isNull(pv1) || h.isNull(pv2)){ return false }

    // Get record type
    let recordType1 = getRecordType(pv1).toLowerCase()
    let recordType2 = getRecordType(pv2).toLowerCase()

    
    // Get record id
    if(recordType1 == 'replaceaction'){
        let c1 = gt(pv1, pv2)
        let c2 = h.isNull(pv1?.replacee)
        let c3 = pv1?.replacee == pv2?.object?.value         
        let c4 = h.isNotNull(pv1?.object?.value?.['@type'] )
        let c5 = h.isNotNull(pv1?.object?.value?.['@id'] )
        let c6 =  pv1?.object?.value?.['@type'] == pv2?.object?.value?.['@type']
        let c7 =  pv1?.object?.value?.['@id'] == pv2?.object?.value?.['@id']
        return c1 && (c2 || c3 || (c4 && c5 && c6 && c7))
    }

    if(recordType1 == 'deleteaction'){
        
        let c1 = gt(pv1, pv2)
        let c2 = h.isNull(pv1?.object?.value)
        let c3 = pv1?.object?.value == pv2?.object?.value
        let c4 = h.isNotNull(pv1?.object?.value?.['@type'] )
        let c5 = h.isNotNull(pv1?.object?.value?.['@id'] )
        let c6 =  pv1?.object?.value?.['@type'] == pv2?.object?.value?.['@type']
        let c7 =  pv1?.object?.value?.['@id'] == pv2?.object?.value?.['@id']

        let result =  c1 && (c2 || c3 || (c4 && c5 && c6 && c7))
        
        return result
    }
    return false
}


function compile(pvs){
    /**
     * Returns the propertyValues that are valid
     */

    
    // Sort by order 
    pvs = sort(pvs)

    let results = pvs;

    // Remove pvs canceled by this pv
    for(let pv of pvs){
        results = results.filter(x => (override(pv, x) == false))
    }

    // Remove delete pvs
    results = results.filter(x => (getRecordType(x).toLowerCase() != 'deleteaction'))
    
    // Return results
    return results

}


function getUpdatePV(propertyID, value, metadata){
    return create('UpdateAction', propertyID, value, metadata)
}



function getAddPV(propertyID, value, metadata){
    return create('AddAction', propertyID, value, metadata)
}



function getDeletePV(propertyID, value, metadata){
    return create('DeleteAction', propertyID, value, metadata)
}



function getReplacePV(propertyID, value, metadata, replacee){
    return create('ReplaceAction', propertyID, value, metadata, replacee)
}




// -----------------------------------------------------
//  Array 
// -----------------------------------------------------


function length(pvs){

    pvs = h.toArray(pvs)
    return pvs.length
    
}

function pop(pvs, pv){

    // Error handling
    if(h.isNull(pvs)){ return [] }
    if(h.isNull(pv)){ return pvs }

    // copy list to avoid changing original
    pvs = [...pvs]

    
    // Remove all pvs same as pvs
    let i = 0
    while(i < pvs.length -1){
        if(isSame(pv, pvs[i])){
            pvs.splice(i, 1)
        }
        i += 1
    }
    return pvs
}
  
function search(pvs, pv){

    // Error handling
    if(h.isNull(pvs)){ return [] }
    if(h.isNull(pv)){ return [] }
    pvs = h.toArray(pvs)

    // Return all pvs same as pv
    let results = pvs.filter(x => (isSame(x, pv))) 

    // Return results
    return results

}

function min(pvs){

    // Error handling
    pvs = h.toArray(pvs)
    if(h.isNull(pvs)){ return null }

    let pv = pvs.reduce((maxItem, item) => lt(maxItem, item) ? maxItem : item);

    return pv

    
}

function max(pvs){

    // Error handling
    pvs = h.toArray(pvs)
    if(h.isNull(pvs)){ return null }

    let pv = pvs.reduce((maxItem, item) => gt(maxItem, item) ? maxItem : item);

    return pv
}


function sort(pvs){
    /**
     * Sort property values 
     */

    // Ensure it is array
    pvs = h.toArray(pvs)

    // Error handling
    if (h.isNull(pvs)) { return [] }

    // Generate create list to not change original one
     pvs = pvs.map(x => x)

    // Sort function
    function sortFn(v1, v2){
        if(gt(v1, v2)){
            return -1
        } else if (lt(v1, v2)){
            return 1
        } else {
            return 0
        }

    }

    // Sort
    let result = pvs.sort(sortFn)

    // Return result    
    return result
}

function meetCondition(pv, conditions){

    return pvs.test(pv, conditions) || false
    
}

function filter(pvs, condition){
    /**
     * Sort property values 
     */

    // Ensure it is array
    pvs = h.toArray(pvs)

    // Error handling
    if (h.isNull(pvs)) { return [] }

    // Generate create list to not change original one
    pvs = pvs.filter(x => meetCondition(x, condition))

    // Sort
    let result = sort(pvs)

    // Return result    
    return result
}


function concat(pvs1, pvs2){
    /**
     * Concatenates two property values
     * @param {PropertyValueSpecification[]} pvs1
     * @param {PropertyValueSpecification[]} pvs2
     * @returns {PropertyValueSpecification[]}
     */


    pvs1 = h.toArray(pvs1)
    pvs2 = h.toArray(pvs2)    

    let pvs = pvs1.concat(pvs2)

    return dedupe(pvs)
    
}
function dedupe(pvs){
    /**
     * Dedupe property values if same and next to one another
     */

    // Ensure it is array
    pvs = h.toArray(pvs)

    // Error handling
    if (h.isNull(pvs)) { return [] }

    // Generate create list to not change original one
     pvs = pvs.map(x => x)

    // Dedupe on id
    //pvs = [...new Set(pvs.map((x) => x?.['@id'] || x?.id ))];

    
    // Sort 
    pvs = sort(pvs)

    
    // Dedupe on isSame
    let i = 0
    while( i < pvs.length -2){
        while(isSame(pvs?.[i], pvs?.[i+1])){
            pvs = pvs.toSpliced(i+1, 1)
        }        
        i += 1
    }


    return pvs

}
