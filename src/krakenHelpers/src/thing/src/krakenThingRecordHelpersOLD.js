import { krakenBaseHelpers as h} from '../base/krakenBaseHelpers.js'



export const krakenThingRecordHelpers = {

    // Base
    isValid: isValid,
    toString: toString,
    isEmpty: isEmpty,
    
    // Properties

    record_type: {
        get: getRecordType,
        set: setRecordType,
    },
    record_id: {
        get: getRecordId,
        set: setRecordId,
    },
    ref: {
        get: getRef,
        set: setRef,
    },
    keys: getKeys,
    value: {
        get: getValue,
        set: setValue,
    },
    values: {
        get: getValues,
        set: setValues,
    },

    children: extractChildrenFromRecord,
    flatten: flattenRecord,
    
    
    // Comparison
    isSame: isSameRecord,
    isNotSame: isNotSameRecord,
    eq: isEqualRecord,
    ne: isNotEqualRecord,
    lt: lt,
    gt: gt,
    validate: recordMeetConditions,

    // Operations
    replace: replaceValueInRecord,
    merge: mergeRecords,
    replaceChildren: replaceChildrenWithRef,
    update: updateRecordsToLatest,
    addIds: assignMissingIds,
    
    // Lists
    length: getLengthOfRecordList,
    get: getRecordFromRecordList,
    push: addRecordToRecordList,
    delete: deleteRecordFromRecordList,
    dedupe: dedupeRecords,
    sort: sortRecordList,
    filter: filterRecordList,
    
};


// -----------------------------------------------------
//  Base
// -----------------------------------------------------


function isValid(value) {
    /**
     * Checks if a value is a valid record
     * @param {Object} value
     * @returns {Boolean}
     * 
     */
    if (h.isNull(value)) {
        return false;
    }

    if (h.object.isValid(value) == false) {
        return false;
    }

    if (h.isNull(getRecordTypeFromRecord(value))) {
        return false;
    }

    //if(h.isNull(getRecordIdFromRecord(value))){ return false }

    return true;
}



function toString(value) {
    if (isValid(value) == false) {
        return '';
    }

    return h.headings.heading1(value);
}


function isEmpty(record){

    // error handling
    if(!isValid(record)){ return false }

    // check if empty
    for(let k of Object.keys(record)){
        if(k.startsWith('@')){
            continue
        }
        if(h.isNotNull(record?.[k])){
            return false
        }
    }
    return true
}


// -----------------------------------------------------
//  Properties
// -----------------------------------------------------

function getRecordType(record_or_record_type, record_id) {
    let value =
        record_or_record_type?.["@type"] ||
        record_or_record_type?.record_type ||
        record_or_record_type;


    if(h.array.isArray(value)){
        value = value?.[0] || null
    }
    
    if (typeof value != "string") {
        return null;
    }

    return value;
}

function setRecordType(record, value){
    /**
     * Sets the record type
     * @param {Object} record
     * @param {String} value
     * @returns {Object} The record
     */

    record['@type'] = value;
    return record;
    
}


function getRecordId(record_or_record_type, record_id) {
    let value =
        record_or_record_type?.["@id"] ||
        record_or_record_type?.record_id ||
        record_id;

    if(h.array.isArray(value)){
        value = value?.[0] || null
    }
    
    if (typeof value != "string") {
        return null;
    }

    return value;
}

function setRecordId(record, value){
    /**
     * Sets the record id
     * @param {Object} record
     * @param {String} value
     * @returns {Object} The record
     */
    record['@id'] = value;
    return record;
}

function getRef(record_or_record_type, record_id) {
    
    let record_type = getRecordTypeFromRecord(record_or_record_type, record_id)
    record_id = getRecordIdFromRecord(record_or_record_type, record_id)
    
    if (h.isNull(record_type)){ return null }
    if (h.isNull(record_id)){ return null }

    let result = {
        "@type": record_type, 
        "@id": record_id
    };

    return result;
}

function setRef(record, record_or_record_type, record_id){
    /**
     * Sets the record ref
     * @param {Object} record
     * @param {String} record_or_record_type
     * @param {String} record_id
     * @returns {Object} The record
     */

    record["@type"] = getRecordType(record_or_record_type, record_id)
    record["@id"] = getRecordId(record_or_record_type, record_id)
    return record;
    
}

function getKeys(record){
    /**
     * Returns the property ids from a record
     * @param {Object} record
     * @returns {Array} The property ids
     * 
     */

    record = JSON.parse(JSON.stringify(record))


    
    /**
     * Return propertyIDs without those starting with _
     */
    // Error handling
    if (h.isNull(record)) { return null }
    if(h.object.isValid(record) == false){ return null }

    // Get propertyIDs    
    let results = []
    for(let k of Object.keys(record)){

        if(!k.startsWith('_') && !k.startsWith('@')){
            results.push(k)
        }
    }

    results = results.sort()
    
    return results

}


function getValue(record, propertyID) {
    /**
     * Returns the value of a property
     * @param {Object} record
     * @param {String} propertyID
     * @returns {Object} The value
     * 
     */
    
    // Returns value of thing or record with specifid propertyID. Works with dot notation
    
    if (h.isNull(record)) {
        return null;
    }

    if (h.isNull(propertyID)) {
        return null;
    }

    let values = getValues(record, propertyID);

    return values?.[0] || null;
}


function setValue(record, propertyID, value) {
    /**
     * Sets the record values
     * @param {Object} record
     * @param {String} propertyID
     * @param {Array} values
     * @returns {Object} The record
     */

    // Get value 
    record = h.dot.set(record, propertyID, value);

    return record;
}




function getValues(record, propertyID, db) {
    /**
     * Returns the values of a propertyID
     * @param {Object} record
     * @param {String} propertyID
     * @returns {Array} The values
     * 
     */
    
    // Get value 

    let propertyPaths = propertyID.split('.');

    let value = record

    // Iterate for each dot notation path to get latest version of value everytime
    for(let p of propertyPaths){

        // Get value from first dot notation path
        value = h.dot.get(record, p)

        // Retrieve latest version of thing from db (if db provided)
        if(h.isArray(value)){
            value = value.map(x => getRecordFromRecordList(db, x) || x)
        } else {
            value = getRecordFromRecordList(db, value) || value
        }
    }

    // Convert to array
    values = h.toArray(values);

    // Return
    return values;
}

function setValues(record, propertyID, values){
    /**
     * Sets the record values
     * @param {Object} record
     * @param {String} propertyID
     * @param {Array} values
     * @returns {Object} The record
     */

    // Get value 
    record = h.dot.set(record, propertyID, values);

    return record;
}



function extractChildrenFromRecord(record) {
    /**
     * Extracts the children from a record
     * @param {Object} record
     * @returns {Array} The children
     * 
     */
    
    // Error handling
    if (h.isNull(record)) {
        return [];
    }

    // Get child things
    let childThings = [];
    for (let k of Object.keys(record)) {
        for (let value of h.toArray(record[k])) {
            if (isValid(value)) {
                childThings.push(value);
                childThings = childThings.concat(
                    extractChildrenFromRecord(value),
                );
            }
        }
    }

    childThings = childThings.filter(x => h.isNotNull(x))

    
    // Dedupe child things
    childThings = dedupeRecords(childThings);

    return childThings;
}





function flattenRecord(record){

    record = JSON.parse(JSON.stringify(record))

    
    if (h.isNull(record)) {
        return null;
    }
    
    let results = [record]

    // Get children
    results = results.concat(extractChildrenFromRecord(record))

    // Replace children with refs
    results = results.map(x => replaceChildrenWithRef(x))

    // Dedupe
    results = dedupeRecords(results)

    // Return
    return results
    
}

// -----------------------------------------------------
//  Comparisons
// -----------------------------------------------------

function isSameRecord(thing1, thing2) {
    /**
     * Checks if two records are the same (type and id)
     * @param {Object} thing1
     * @param {Object} thing2
     * @returns {Boolean} True if the records are the same
     */
    if (h.isNull(getRecordTypeFromRecord(thing1))) {
        return false;
    }
    if (h.isNull(getRecordIdFromRecord(thing1))) {
        return false;
    }

    if (getRecordTypeFromRecord(thing1) != getRecordTypeFromRecord(thing2)) {
        return false;
    }
    if (getRecordIdFromRecord(thing1) != getRecordIdFromRecord(thing2)) {
        return false;
    }

    return true;
}

function isNotSameRecord(thing1, thing2){
    /**
     * Checks if two records are not the same (type and id)
     * @param {Object} thing1
     * @param {Object} thing2
     * @returns {Boolean} True if the records are not the same
     */
    
    if (h.isNull(getRecordTypeFromRecord(thing1))) {
        return false;
    }
    return !isSameRecord(thing1, thing2) 
    
}


function isEqualRecord(thing1, thing2) {
    /**
     * Checks if two records are equal (type, id and values)
     * @param {Object} thing1
     * @param {Object} thing2
     * @returns {Boolean} True if the records are equal
     * 
     */
    if (h.isNull(thing1) && h.isNull(thing2)) {
        return true;
    }
    if (h.isNull(thing1) && h.isNotNull(thing2)) {
        return false;
    }
    if (h.isNotNull(thing1) && h.isNull(thing2)) {
        return false;
    }

    let record1 = thing1?.record || thing1;
    let record2 = thing2?.record || thing2;

    try {
        if (JSON.stringify(record1) == JSON.stringify(record2)) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        return false;
    }
}

function isNotEqualRecord(thing1, thing2) {
    return !isEqualRecord(thing1, thing2);
}

function lt(thisThing, otherThing) {
    if (thisThing.record_type < otherThing.record_type) {
        return true;
    }
    if (thisThing.record_type > otherThing.record_type) {
        return false;
    }

    if (thisThing.record_id < otherThing.record_id) {
        return true;
    }
    if (thisThing.record_id > otherThing.record_id) {
        return false;
    }

    return false;
}


function gt(thisThing, otherThing) {
    if (thisThing.record_type > otherThing.record_type) {
        return true;
    }
    if (thisThing.record_type < otherThing.record_type) {
        return false;
    }

    if (thisThing.record_id > otherThing.record_id) {
        return true;
    }
    if (thisThing.record_id < otherThing.record_id) {
        return false;
    }
    return false;
}

function recordMeetConditions(record, conditions) {
    /**
     * Checks if a record meets the conditions
     * @param {Object} record
     * @param {Object} conditions
     * @returns {Boolean} True if the record meets the conditions
     * 
     */

    // Handle if conditions in the form of uri
    for (let k of Object.keys(conditions)) {
        if(  
            !(
                (h.toArray(record[k]) != h.toArray(conditions?.[k])) ||
                (h.toArray(record[k])).includes(conditions?.[k])
            )
           ){
            return false
        }    
    }
    return true;
}


    
// -----------------------------------------------------
//  Operations 
// -----------------------------------------------------


function assignMissingIds(record){
    /**
     * Assigns missing ids to a record and its values
     * @param {Object} record
     * @returns {Object} The record
     * 
     */

    record = JSON.parse(JSON.stringify(record))

    
    if(h.isNull(record)){
        return null
    }
    
    if(h.array.isArray(record)){
        return record.map(x => assignMissingIds(x))
    }

    if(!h.object.isValid(record)){
        return record
    }
    
    if(h.isNull(record?.['@id'])){
        record['@id'] = String(crypto.randomUUID())
    }

    for(let k of Object.keys(record)){
        let values = h.toArray(record[k])
        let newValues = []
        for(let value of values){
            value = assignMissingIds(value)
            newValues.push(value)
        }
        record[k] = newValues
    }

    record = h.json.simplify(record)
    
    return record
}

function replaceChildrenWithRef(record){
    /**
     * Replaces values that are things with refs
     * @param {Object} record
     * @returns {Object} The record
     * 
     */

    record = JSON.parse(JSON.stringify(record))

    
        // Error handling
        if (h.isNull(record)) {
            return null;
        }

    for(let k of Object.keys(record)){

        let values = h.toArray(record[k])

        let newValues = []
        for(let v of values){
            if(isValid(v)){
                v = getRefFromRecord(v)
            }
            newValues.push(v)
        }
    }
    return record
}


function replaceValueInRecord(record, oldValue, newValue) {
    /**
     * Replaces all instances of a value in a record
     * @param {Object} record
     * @param {Object} oldValue
     * @param {Object} newValue
     * @returns {Object} The record
     */

    record = JSON.parse(JSON.stringify(record))

    
    // Error handling
    if (h.isNull(oldValue)) {
        return null;
    }

    // Handle array
    if(h.array.isArray(record)){
        return record.map(x => replaceValueInRecord(x, oldValue, newValue))
    }

    // Handle non object
    if(!h.object.isValid(record)){
        return record
    }

    // Handle object
    

    // Replace value
    for (let k of Object.keys(record)) {
        let newValues = [];
        for (let value of h.toArray(record[k])) {
            // Replace if equal
            if (value == oldValue) {
                newValues.push(newValue);
            // Replace if same
            } else if (isSameRecord(oldValue, value)) {
                newValues.push(newValue);
            } else {
                newValues.push(value);
            }
            
        }
        record[k] = newValues;
    }

    // Recurse for sub values
    for (let k of Object.keys(record)) {
        let newValues = [];
        for (let value of h.toArray(record[k])) {
            newValues.push(replaceValueInRecord(value, oldValue, newValue));
        }
        record[k] = newValues;
    }

    // Simplify record
    record = h.json.simplify(record);

    // Return
    return record;
}

function mergeRecords(record1, record2) {
    /**
     * Merges two records
     * @param {Object} record1
     * @param {Object} record2
     * @returns {Object} The merged record
     */

    record1 = JSON.parse(JSON.stringify(record1))
    record2 = JSON.parse(JSON.stringify(record2))

    
    // Error handling
    if (h.isNull(record1)) {
        return null;
    }

    // Merge
    for (let k of Object.keys(record2)) {
        let newValues = h.toArray(record1[k]).concat(h.toArray(record2[k]));
        newValues = [...new Set(newValues)];
        record1[k] = newValues;
    }

    
    // Simplify record
    record1 = h.json.simplify(record1);

    // Return
    return record1;
}



function updateRecordsToLatest(record, db){
    /**
     * Updates all records or references to a record from latest version in the db
     * @param {Object} record
     * @param {Object} db
     * @returns {Object} The record
     * 
     */
    record = JSON.parse(JSON.stringify(record))
    
    record = getRecordFromRecordList(db, record) || record

    for(let k of Object.keys(record)){

        let values = h.toArray(record[k])

        let newValues = []
        for(let v of values){
            if(isValid(v)){
                v = getRecordFromRecordList(db, v) || v
            }
            newValues.push(v)
        }
        record[k] = newValues
        
    }
    return record
    
}


// -----------------------------------------------------
//  Arrays 
// -----------------------------------------------------

function getLengthOfRecordList(records){
    /**
     * Returns the length of a record list
     * @param {Array} records
     * @returns {Number} The length
     * 
     */

    // Error handling
    if(h.isNull(records)){ return 0 }
    records = h.toArray(records)

    return records.length
    
}

function getRecordFromRecordList(records, record_or_record_type, record_id){
    /**
     * Returns a record from a record list
     * @param {Array} records
     * @param {Object} record_or_record_type
     * @param {String} record_id
     * @returns {Object} The record
     * 
     */

    let filteredRecords = filterRecordList(records, getRefFromRecord(record_or_record_type, record_id))

    let result = filteredRecords?.[0] || null

    return result

}


function addRecordToRecordList(records, record){
    /**
     * Add a record to array. If exists, merge the records
     * @param {Array} records
     * @param {Object} record
     * @returns {Array} The records
     */

    records = JSON.parse(JSON.stringify(records))

    // Error handling
    records = h.toArray(records)
    if(h.isNull(record)){ return records }
    

    // List handling
    if(h.array.isArray(record)){
        for(let r of record){
            records = addRecordToRecordList(records, r)
        }
        return records
    }

    
    // Retrieve current records same as new record from array
    let currentRecords = filterRecordList(records, getRefFromRecord(record))

    // Remove currentRecords from array
    for (let r of currentRecords){
        records = deleteRecordFromRecordList(records, r)
    }

    // Merge current records and new record
    for(let r of currentRecords){
        record = mergeRecords(record, r)
    }

    // Add new record to array
    records.push(record)

    // Return
    return records
    
}


function deleteRecordFromRecordList(records, record){
    /**
     * Deletes a record from a record list
     * @param {Array} records
     * @param {Object} record
     * @returns {Array} The records
     */

    records = JSON.parse(JSON.stringify(records))

    
    for(let i=0; i < records.length; i++){

      
        if(isSameRecord(records[i], getRefFromRecord(record))){
            records = records.splice(i, 1)
        }
    }

    return records

}



function dedupeRecords(records) {
    /**
     * Dedupes a record list by merging ame records (type and id)
     * @param {Array} records
     * @returns {Array} The records
     * 
     */
    // Error handling
    if (h.isNull(records)) {
        return [];
    }

    
    let results = []
    for(let r of records){
        results = addRecordToRecordList(results, r)
    }
    
    return results;
}

function sortRecordList(records, sortBy, sortOrder){
    /**
     * Sorts a record list
     * @param {Array} records
     * @param {String} sortBy
     * @param {String} sortOrder
     * @returns {Array} The records
     * 
     */

    records = JSON.parse(JSON.stringify(records))

    
    // Error handling
    if (h.isNull(records)) {
        return null;
    }

    // Sort
    records = h.toArray(records)

    function sortFunction(a, b){

        let aValue = getValueFromRecord(a, sortBy)
        let bValue = getValueFromRecord(b, sortBy)

        if(aValue == bValue){
            return 0
        }

        if(sortOrder == 'asc'){
            return aValue < bValue ? -1 : 1
        }

        if(sortOrder == 'desc'){
            return aValue > bValue ? -1 : 1
        }

    }

    records = records.sort(sortFunction);

    return records;
}


function filterRecordList(records, conditions) {
    /**
     * Filters a record list
     * @param {Array} records
     * @param {Object} conditions
     * @returns {Array} The records
     * 
     */

    records = JSON.parse(JSON.stringify(records))

    
    // Error handling
    if (h.isNull(records)) {
        return [];
    }

    records = h.toArray(records)

    // Error handling
    if (h.isNull(conditions)) {
        return records;
    }

    let results = [];
    for (let r of records) {
        if (recordMeetConditions(r, conditions)) {
            results.push(r);
        }
    }

    return results;
}
