

import { krakenNullHelpers} from './krakenNullHelpers.js'


const h = {
    isNull: krakenNullHelpers.isNull,
    null: krakenNullHelpers
}


export const krakenStorageHelpers = {
    /**
     * Local storage helpers
     * Sets things records in local storage
     *
     * 
     */

    
    get: getRecord,
    getAll: getAllRecords,
    set: setRecord
}



function getRecord(record_or_record_type, record_id){
    /**
     * Gets a record from storage
     * @param {Object} record_or_record_type
     * @param {String} record_id
     * @returns {Object} The record
     */

    let record_type = record_or_record_type?.['@type'] || record_or_record_type?.record_type || record_or_record_type
    record_id = record_or_record_type?.['@id'] || record_or_record_type?.record_id || record_id
    
    if(h.isNull(record_type)){
        throw new Error('Invalid record type')
    }

    if(h.isNull(record_id)){
        throw new Error('Invalid record id')
    }
    

    let db = JSON.parse(localStorage.getItem("things"));

    return db?.[record_type]?.[record_id] || null

}

function getAllRecords(){
    /**
     * Gets records from storage
     * @param {Object} record_or_record_type
     * @param {String} record_id
     * @returns {Object} The record
     */


    let db = JSON.parse(localStorage.getItem("things"));

    let records = []
    for(let record_type in db){
        for(let record_id in db[record_type]){
            records.push(db[record_type][record_id])
        }
    }

    return records

}


function setRecord(record){
    /**
     * Sets a record in storage
     * @param {Object} record
     * @returns {Object} The record
     */

    let db = JSON.parse(localStorage.getItem("things"));

    db = db || {}


    let record_type = record?.['@type'] || record?.record_type || null
    let record_id = record?.['@id'] || record?.record_id || null

    if(h.isNull(record_type)){
        return false
    }

    if(h.isNull(record_id)){
        return false
    }
    

    db[record_type] = db?.[record_type] || {}
    
    db[record_type][record_id] = record
    localStorage.setItem("things", JSON.stringify(db))

    
    return true
    
}

