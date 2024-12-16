import { krakenHelpers as h} from '../../krakenHelpers/krakenHelpers.js'
import { KrThing} from './KrThing.js'

export class KrThings {
    /**
     * Database of things or thing records
     * Maintain integrity of first record input in database by merging additional to the first one.
     */
    constructor(toThing=true){

        this._toThing = toThing
        this._db = []
    }


    get(record_or_record_type, record_id){
        /**
         * Gets a record
         * @param {Object} record_or_record_type The record or record
         * @param {String} record_id The record id
         * @returns {Object} The record
         */

        return h.thing.get(this._db, record_or_record_type, record_id)
    }

    getAll(){
        /**
         * Gets all records
         * @returns {Array} The records
         * 
         */
        return this._db
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

        // Add to db and get version in db
        this._db = h.thing.push(this._db, record)

        
        record = h.thing.get(this._db, record)

        // Add children to db
        let children = h.thing.children.get(record)  

        
        // change to records
        if(h.isNotNull(children)){

            if(this._toThing==true){
                children = children.map(x => KrThing.toThing(x))
            }

            this._db = h.thing.push(this._db, children)

            
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

    executeAction(action){
        /**
         * Executes an action
         */

        

        
    }

    
}