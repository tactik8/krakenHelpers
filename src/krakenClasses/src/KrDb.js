
import { krakenHelpers as h} from '../../krakenHelpers/krakenHelpers.js'


export class KrDb {

    constructor(){

        this._db = []
        
    }


    length(){
        /**
         * Returns the length of the db
         */
        return this._db.length
        
    }

    
    get(filter_or_record_type, record_id){
        /**
         * Gets a thing
         */


        // Get filter
        let filter = KrDb._getFilter(filter_or_record_type, record_id)

        
        // Return all records if no filters provided
        if(h.isNull(filter)){
            return this._db
        }

        // Get things
        let results = h.thing.filter(this._db, filter)

        // 
        if(h.isNotNull(h.record_id(filter))){
            return results?.[0] || null
        } else {
            return results || []
        }
        
        
        
    }

    set(record, overWrite=true){
        /**
         * Sets a thing
         * @param {Object} record The record
         * @param {Boolean} overWrite Overwrite existing record (default=true)
         */

        // Handle lists
        if(h.base.isArray(record)){
            for(let r of record){
                this.set(r)
            }
        }
        
        // Error handling
        if(h.isNull(record) || !(h.base.isObject(record))){
            return false
        }

        // Check if record already exists
        let currentThing = this.get(h.thing.ref(record))

        if(h.isNull(currentThing)){
            this._db.push(record)
        }
        
    }

    delete(filter_or_record_type, record_id){
        /**
         * Deletes a thing
         * @param {Object} filter_or_record_type The filter or record type
         * @param {String} record_id The record id
         */


        // Delete none if null
        if(h.isNull(filter_or_record_type) && h.isNull(record_id)){
            return false
        }

        // Get filter
        let filter = KrDb._getFilter(filter_or_record_type, record_id)

        // Get records
        let records = this.get(filter)

        // Delete records
        for(let record of records){
            this._db = h.thing.delete(this._db, h.ref(record))
        }

        // Return
        return true
       
    }

    drop(){
        /**
         * Drops the db
         * 
         */
        this._db = []

        return true
    }




    // -----------------------------------------------------
    //  Static helpers 
    // -----------------------------------------------------

    static _getFilter(filter_or_record_type, record_id){
        /**
         * Return a filter from a filter_or_record_type and record_id
         */

        // Return all records if no filters provided
        if(h.isNull(filter_or_record_type) && h.isNull(record_id)){
            return null
        }

        // Assign
        let filter = filter_or_record_type

        // Add @type to filter if filter_or_record_type is a string
        if(!(h.base.isObject(filter_or_record_type))){
            filter = {
                '@type': filter_or_record_type
            }
        }

        // Add record_id to filter is not null
        if(h.isNotNull(record_id)){
            filter['@id'] = record_id
        }

        return filter
    }

    
}



export const krakenDb = {
    KrDb: KrDb
}