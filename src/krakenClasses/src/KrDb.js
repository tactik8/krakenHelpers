
import { krakenHelpers as h} from '../../krakenHelpers/krakenHelpers.js'


export class KrDb {

    constructor(){

        this._db = {}
        
    }




    // -----------------------------------------------------
    //  Internal methods 
    // -----------------------------------------------------


    _getAll(){
        /**
         * Returns all records
         */
        let records = []
        for(let t in this._db){
            for(let i in this._db[t]){
                records.push(this._db[t][i])
            }
        }
        return records
    }

    
    // -----------------------------------------------------
    //  Base methods 
    // -----------------------------------------------------

    get length(){
        /**
         * Returns the length of the db
         */
        return this._getAll().length
        
    }


    // -----------------------------------------------------
    //  CRUD 
    // -----------------------------------------------------

    
    
    get(filter_or_record_type, record_id){
        /**
         * Gets a thing
         */



        // Get filter
        let filter = KrDb._getFilter(filter_or_record_type, record_id)

        
        // Return all records if no filters provided
        if(h.isNull(filter)){
            return this._getAll()
        }

        // Get item directly if type and id provided
        if(h.isNotNull(h.record_type(filter) && h.isNotNull(h.record_id(filter)))){
            return this._db?.[h.record_type(filter)]?.[h.record_id(filter)]
        }

        
        // Get things
        let records = this._getAll()
        let results = h.thing.filter(records, filter)



        // Remove null values
        results = results.filter(x => h.isNotNull(x))
        
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
        
        
        // Get record type and id
        let record_type = h.record_type(record)
        let record_id = h.record_id(record)

        // Error handling
        if(h.isNull(record_type) || h.isNull(record_id)){
            return false
        }

        //
        this._db[record_type] = this._db?.[record_type] || {}
        
        
        // Check if record already exists
        let currentThing = this._db?.[record_type]?.[record_id]

        if(h.isNull(currentThing)){
            this._db[record_type][record_id] = record
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

        // Return if no records match
        if(h.isNull(records)){
            return 
        }
        
        // Delete records
        for(let record of h.base.toArray(records)){
            let record_type = h.record_type(record)
            let record_id = h.record_id(record)

            if(h.isNull(this._db?.[record_type])){
                continue
            }

            delete this?._db[record_type]?.[record_id]
            
        }

        // Return
        return true
       
    }

    drop(){
        /**
         * Drops the db
         * 
         */
        this._db = {}

        return true
    }




    // -----------------------------------------------------
    //  Static helpers 
    // -----------------------------------------------------

    static _getFilter(filter_or_record_type, record_id){
        /**
         * Return a filter from a filter_or_record_type and record_id
         */

        // Return 
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


