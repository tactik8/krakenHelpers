import { krakenHelpers as h} from '../../krakenHelpers/krakenHelpers.js'
import { KrThing } from './KrThing.js'

import { KrBroadcast } from './KrBroadcast.js'
import { KrDb } from './KrDb.js'
import { krakenObjectHelpers } from '../../krakenHelpers/src/base/src/krakenObjectHelpers.js'






export class KrThings {
    /**
     * Database of things or thing records
     * Maintain integrity of first record input in database by merging additional to the first one.
     */
    constructor(toThing=true){

        this._toThing = toThing

        
        this._thingDB = new KrDb()     // DB of Thing objects
        this._systemDB = new KrDb()    // DB of systems records

        
        // Callbacks
        this._callbacks = {}

        //

        // Broadcast
        this._broadcast = new KrBroadcast(this)
        

        // Replaces local cache of thing objects
        //this._systemDB = {} //  db of system records for things
        this._eventRecordCache = {}
        this._callbacksCache = {}
        
    }


    // -----------------------------------------------------
    //  Broadcast 
    // -----------------------------------------------------

    get broadcast(){
        return this._broadcast
    }


    // -----------------------------------------------------
    //  Helpers methods for thing objects  
    // -----------------------------------------------------




    thingGet(record_or_record_type, record_id){
        /**
         * Gets a thing from the database
         */
     
        return this.things.get(record_or_record_type, record_id)
    }

    thingSet(thing){
        /**
         * Sets thing in database
         * @param {KrThing} thing
         * @param {Boolean} overWrite if true will replace current value, else will merge
         * 
         */

        // Handle arrays
        if(h.isArray(thing)){
            return thing.map(x => this.thingSet(x))
        }
        
        // Turn off broadcast
        let broadcastLockoutKey = this.broadcast.pauseBroadcast()

        // Get type and id
        let record_type = h.record_type(thing)
        let record_id = h.record_id(thing)
        let ref = h.ref(thing)

        
        // Ensure it is a thing object
        if(!(thing instanceof KrThing )){
            thing = KrThing.toThing(thing)
        }

        // Get current thing in db (if any)
        let currentThing = this.things.get(ref)
        
        // If not already in db
        if(h.isNull(currentThing)){
            
            // Set system record
            this.systems.set(thing?.system || null)

            // Add db to thing object
            thing.thingsDB = this
            
            // Subscribe to event listener
            thing.addEventListener(this.processThingBroadcast.bind(this))
            
            // Set thing in db
            this.things.set(thing)
            
            // Broadcast new thing 
            this.broadcast.newEventAdd(record_type, record_id)
            
        }  

        // Add data to existing if exists
        if(h.isNotNull(currentThing) && currentThing?.id != thing?.id){

            // Set system record, will merge with existing if exists
            currentThing.merge(thing)
            
            // Switch to main thing (the one from db)
            thing = currentThing

            // Broadcast new thing 
            this.broadcast.newEventUpdate(record_type, record_id)
            
        }

        
        // Add children
        let children = thing.children
        console.log('c', children.length)
        if(h.isNotNull(children)){
            this.thingSet(children)
        }
        
        // Replace children with version from db
        thing.replaceChildren(this.getAll())

       
        // Resume broadcasts
        this.broadcast.resumeBroadcast(broadcastLockoutKey)

        
        // Return thing 
        return thing

    }



    get systems(){
        return this._systemDB
    }

    get things(){
        return this._thingDB
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

        return this.things.get()
    }

    set(record, overwrite=false, depth=0){
        /**
         * Sets a record
         * @param {Object} record_or_record_type The record or record
         * @param {String} record_id The record id
         * @returns {Object} The record
         */


        return this.thingSet(record)
       
        
    }

    delete(record_or_record_type, record_id){
        /**
         * Deletes a record
         * @param {Object} record_or_record_type The record or record
         * @param {String} record_id The record id
         * @returns {Object} The record
         */

        return this.things.delete(record_or_record_type, record_id)
    }

    get length(){
        /**
         * Gets the length of the things
         * @returns {Number} The length
         * 
         */
        return this.things.length
    }

    
    clear(){
        /**
         * Clears the things
         * @returns {Array} The things
         * 
         */

        return this.things.drop()
    }

    merge(other){
        /**
         * Merges other db in this db
         * @param {Object} other The other things
         * @returns {Array} The things
         */

        for(let t of other.getAll()){
            this.set(t)
        }

        // Merge listeners
        for(let l of this.broadcast.followers.get()){
            this.broadcast.followers.set(l)
        }

        // Merge pending events
        for(let e of this.broadcast.events.get()){
            this.broadcast.events.set(e)
        }
        
    }

    filter(conditions){
        /**
         * Filters the things
         * @param {Object} conditions The conditions
         * @returns {Array} The things
         */
        return h.thing.filter(this.things.get(), conditions)
    }

    sort(conditions){
        /**
         * Filters the things
         * @param {Object} conditions The conditions
         * @returns {Array} The things
         */
        return h.thing.sort(this.things.get(), conditions)
    }


    // -----------------------------------------------------
    //  Record attribute 
    // -----------------------------------------------------


    getRecord(record_or_record_type, record_id){
        /**
         * Gets a record
         */

        let thing = this.get(record_or_record_type, record_id)
        let record = thing?.record || null

        return record
    }

    getAllRecords(record_or_record_type, record_id){
        /**
         * Gets a record
         */

        let things = this.getAll(record_or_record_type, record_id)
        let records = things.map(x => x.record)

        return records
    }


    setRecord(value){
        /**
         * Sets a record
         * @param {Object} record
         * 
         */
        return this.set(value)
    }

    get record(){
        /**
         * Short to allow this.record.get()
         */
        return {
            get: this.getRecord.bind(this),
            getAll: this.getAllRecords.bind(this),
            set: this.setRecord.bind(this),
            add: this.setRecord.bind(this),
        }
    }

    // -----------------------------------------------------
    //  System attribute 
    // -----------------------------------------------------


    getSystemRecord(record_or_record_type, record_id){
        /**
         * Gets a record
         */

        let thing = this.get(record_or_record_type, record_id)
        let record = thing?.system || null

        return record
    }

    getAllSystemRecords(record_or_record_type, record_id){
        /**
         * Gets a record
         */

        let things = this.getAll(record_or_record_type, record_id)
        let records = things.map(x => x.system)

        return records
    }


    setSystemRecord(value){
        /**
         * Sets a record
         * @param {Object} record
         * 
         */
        return this.set(value)
    }

    get system(){
        /**
         * Short to allow this.record.get()
         */
        return {
            get: this.getSystemRecord.bind(this),
            getAll: this.getAllSystemRecords.bind(this),
            set: this.setSystemRecord.bind(this),
            add: this.setSystemRecord.bind(this),
        }
    }
    // -----------------------------------------------------
    //  Thing attribute 
    // -----------------------------------------------------

    getThing(record_or_record_type, record_id){
        /**
         * Gets a record
         */

        let thing = this.get(record_or_record_type, record_id)

        return thing
    }

    getAllThings(){
        /**
         * Gets all things
         */

        let things = this.getAll()
        return things
    }


    setThing(value){
        /**
         * Sets a record
         * @param {Object} record
         * 
         */
        return this.set(value)
    }

    get thing(){
        /**
         * Short to allow this.record.get()
         */
        return {
            get: this.getThing.bind(this),
            getAll: this.getAllThings.bind(this),
            set: this.setThing.bind(this),
            add: this.setThing.bind(this)
        }
    }


    // -----------------------------------------------------
    //  Action methods 
    // -----------------------------------------------------

    execute(action){
        /**
         * Executes an action
         */

        // Retrieve action thing
        this.set(action)
        let actionThing = this.get(action)

        
        // Get latest things
        //let things = new KrThings()
        //things.set(actionThing.system)

        //
        //for(let t of things.getAll()){
            //let originalThing = this.get(t)
            //things.set(originalThing.system)
        //}

        // 
        //actionThing = things.get(action)


        // Execute the action
        let actionRecord = h.thing.execute(actionThing)

        // Add back to engine
        if(actionRecord?.actionStatus == 'CompletedActionStatus'){
            //this.set(actionRecord, true)
        }

        
        return this.get(actionRecord)
        
    }


    
    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------

    

    
    processThingBroadcast(event){
        /**
         * Call back function used withing thing to process state change
         * 
         */

        let record_type = event?.object?.record_type || event?.object?.['@type'] 
        let record_id = event?.object?.record_id || event?.object?.['@id'] 
        let thing = this.get(record_type, record_id)

        // Add children things to db
        for(let t of thing.children){
            this.thingSet(t)
        
         }
        
        return this.broadcast.newEventUpdate(record_type, record_id)

        
    }

    
    addEventListener(callback, record_or_record_type, record_id){
        /**
         * Adds an event listener for a specific thing
         * @param {Object} record_or_record_type The record or record
         * 
         */
        this.broadcast.addEventListener(callback, record_or_record_type, record_id)

        
    }


    

}

