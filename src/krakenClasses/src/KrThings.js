import { krakenHelpers as h} from '../../krakenHelpers/krakenHelpers.js'
import { krakenThing } from './KrThing.js'


let KrThing = krakenThing.KrThing




class KrThings {
    /**
     * Database of things or thing records
     * Maintain integrity of first record input in database by merging additional to the first one.
     */
    constructor(toThing=true){

        this._toThing = toThing

        
        this._thingDB = {} // _db of things 


        // Replaces local cache of thing objects
        this._systemDB = {} //  db of system records for things
        this._eventRecordCache = {}
        this._callbacks = {}
        
    }




    // -----------------------------------------------------
    //  Helpers methods for thing objects  
    // -----------------------------------------------------


    registerThing(thing){
        /**
         * Registers a thing in the database
         */


        // Skip if not thing object
        if(thing?.instanceof != 'KrThing'){
            return 
        }
        
        // Skip if already done
        if(h.isNotNull(thing?.thingsDb)){
            return
        }

        
        let record_type = thing.record_type
        let record_id = thing.record_id

        // Retrieve local caches
        this.systemSet(thing.system)
        this.eventRecordCacheSet(thing.eventRecordCache)
        this.callbacksSet(record_type, record_id, thing.callbacks)

        // Add thingsDB to thing
        thing.thingsDB = this

        // Add thing to thingsDB
        this.thingSet(thing)
        
        
    }


    thingGet(record_or_record_type, record_id){
        /**
         * Gets a thing from the database
         */
     

        let record_type = record_or_record_type?.record_type || record_or_record_type?.['@type'] || record_or_record_type
        record_id = record_or_record_type?.record_id || record_or_record_type?.['@id'] || record_id

        return this._thingDB?.[record_type]?.[record_id]

        
        
    }

    thingSet(record, overWrite = false){
        /**
         * Sets thing
         */

        let record_type = record?.record_type || record?.['@type'] 
        let record_id = record?.record_id || record?.['@id']

        this._thingDB[record_type] = this._thingDB?.[record_type] || {}

        // Merge with existing record if one present
        if(overWrite == false){
            if(h.isNotNull(this.thingGet(record_type, record_id))){
                record = h.thing.merge(this.thingGet(record_type, record_id), record)
            }
        }

        this._thingDB[record_type][record_id] = record

        return 

    }

    
    systemGet(record_or_record_type, record_id){
        /**
         * Returns the official system record of a thing, overrides the local cache of a thing
         */

        let record_type = record_or_record_type?.record_type || record_or_record_type?.['@type'] || record_or_record_type
        record_id = record_or_record_type?.record_id || record_or_record_type?.['@id'] || record_id
        
        return this._systemDB?.[record_type]?.[record_id]
        
    }

    systemSet(record, overWrite = false){
        /**
         * Sets the official system record of a thing
         */

        let record_type = record?.record_type || record?.['@type'] 
        let record_id = record?.record_id || record?.['@id']

        this._systemDB[record_type] = this._systemDB?.[record_type] || {}

        // Merge with existing record if one present
        if(overWrite == false){
            if(h.isNotNull(this.systemGet(record_type, record_id))){
                record = h.thing.merge(this.systemGet(record_type, record_id), record)
            }
        }
        
        this._systemDB[record_type][record_id] = record
        
        return 

    }

    eventRecordCacheGet(record_or_record_type, record_id){
        /**
         * Returns the official system record of a thing, overrides the local cache of a thing
         */

        let record_type = record_or_record_type?.record_type || record_or_record_type?.['@type'] || record_or_record_type
        record_id = record_or_record_type?.record_id || record_or_record_type?.['@id'] || record_id

        return this._eventRecordCache?.[record_type]?.[record_id]

    }

    eventRecordCacheSet(record){
        /**
         * Sets the official system record of a thing
         */

        let record_type = record?.record_type || record?.['@type'] 
        let record_id = record?.record_id || record?.['@id']

        this._eventRecordCache[record_type] = this._eventRecordCache?.[record_type] || {}

        this._eventRecordCache[record_type][record_id] = record

        return 

    }

    callbacksGet(record_or_record_type, record_id){
        /**
         * Returns the official system record of a thing, overrides the local cache of a thing
         */

        let record_type = record_or_record_type?.record_type || record_or_record_type?.['@type'] || record_or_record_type
        record_id = record_or_record_type?.record_id || record_or_record_type?.['@id'] || record_id

        return this._callbacks?.[record_type]?.[record_id]

    }

    callbacksSet(record_type, record_id, callback){
        /**
         * Sets the official system record of a thing
         */

        if(h.isArray(callback)){
            callback.map(x => this.callbacksSet(record_type, record_id, x))
            return
        }


        this._callbacks[record_type] = this._callbacks[record_type] || {}

        this._callbacks[record_type][record_id] = callback

        return 

    }


    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------

    
    
    get(record_or_record_type, record_id){
        /**
         * Gets a record
         * @param {Object} record_or_record_type The record or record
         * @param {String} record_id The record id
         * @returns {Object} The record
         */

        return this.thingGet(record_or_record_type, record_id)
    }

    getAll(){
        /**
         * Gets all things
         * @returns {Array} The records
         * 
         */

        let things = []
        for(let t of Object.keys(this._thingDB)){
            for(let i of Object.keys(this._thingDB[t])){
                things.push(this._thingDB[t][i])
            }
        }
        return things
    }

    set(record, depth=0){
        /**
         * Sets a record
         * @param {Object} record_or_record_type The record or record
         * @param {String} record_id The record id
         * @returns {Object} The record
         */


        if(h.isNull(record)){
            return null
        }
        
        if(depth > 10){
            return null
        }
       
        if(h.isArray(record)){
            return record.map(x => this.set(x, depth))
        }

        // Transform to thing system record
        record = h.thing.toThing(record)

        // Transform to thing if flag is true
        if(this._toThing==true){
            record = KrThing.toThing(record)
        }


        // Add this db to thing 
        this.registerThing(record)


        // Add to db and get version in db
        this.thingSet(record)
        

        // Add children to db
        let children = h.thing.children.get(record)  

        
        // change to records
        if(h.isNotNull(children)){

            if(this._toThing==true){
                children = children.map(x => KrThing.toThing(x))
            }

            this.set(children, depth+1)

            
            //this.set(children, depth+1)
            let cc = this.getAll()
            record = h.thing.children.replaceWithRecord(record, cc)
            
        }
        // Return record
        return record

        
    }

    delete(record_or_record_type, record_id){
        /**
         * Deletes a record
         * @param {Object} record_or_record_type The record or record
         * @param {String} record_id The record id
         * @returns {Object} The record
         */
        this._db = h.thing.delete(this._db, record_or_record_type, record_id)
    }

    length(){
        /**
         * Gets the length of the things
         * @returns {Number} The length
         * 
         */
        return this._db.length
    }

    
    clear(){
        /**
         * Clears the things
         * @returns {Array} The things
         * 
         */

        this._db = {}
    }

    merge(other){
        /**
         * Merges other db in this db
         * @param {Object} other The other things
         * @returns {Array} The things
         */
        this._db = h.thing.mergeLists(this._db, other)
        
    }

    filter(conditions){
        /**
         * Filters the things
         * @param {Object} conditions The conditions
         * @returns {Array} The things
         */
        return h.thing.filter(this._db, conditions)
    }

    sort(conditions){
        /**
         * Filters the things
         * @param {Object} conditions The conditions
         * @returns {Array} The things
         */
        return h.thing.sort(this._db, conditions)
    }




    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------

    execute(action){
        /**
         * Executes an action
         */

        // Retrieve action thing
        let actionThing = this.thingGet(action)


        // Get latest things
        let things = new KrThings()
        things.set(actionThing.system)

        //
        for(let t of things.getAll()){
            let originalThing = this.thingGet(t)
            things.set(originalThing.system)
        }

        // 
        actionThing = things.get(action)


        // Execute the action
        let actionRecord = h.thing.execute(actionThing.record)

        
        // Add back to engine
        if(actionRecord?.actionStatus == 'CompletedActionStatus'){
            this.set(actionRecord)
        }

        
        return this.get(actionRecord)
        
    }

    
}



export const krakenThings = {
    KrThings: KrThings
}
