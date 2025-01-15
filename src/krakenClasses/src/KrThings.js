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


        
        // Callbacks
        this._callbacks = {}

        // Broadcast
        this._broadcastPausedFlag = false
        this._events = []

        // Replaces local cache of thing objects
        this._systemDB = {} //  db of system records for things
        this._eventRecordCache = {}
        this._callbacksCache = {}
        
    }




    // -----------------------------------------------------
    //  Helpers methods for thing objects  
    // -----------------------------------------------------




    thingGet(record_or_record_type, record_id){
        /**
         * Gets a thing from the database
         */
     

        let record_type = record_or_record_type?.record_type || record_or_record_type?.['@type'] || record_or_record_type
        record_id = record_or_record_type?.record_id || record_or_record_type?.['@id'] || record_id

        return this._thingDB?.[record_type]?.[record_id]

        
        
    }

    thingSet(thing, overWrite = false){
        /**
         * Sets thing in database
         * @param {KrThing} thing
         * @param {Boolean} overWrite if true will replace current value, else will merge
         * 
         */

        if(h.isArray(thing)){
            return thing.map(x => this.thingSet(x))
        }
        
        let broadcastAddFlag = false
        let broadcastEditFlag = false
        
        let record_type = thing?.record_type || thing?.['@type'] 
        let record_id = thing?.record_id || thing?.['@id'] 

        
        
        // Ensure it is a thing object
        if(!(thing instanceof KrThing )){
            thing = KrThing.toThing(thing)
        }

        
        // Add to db if nbot already in or not the same
        let currentT = this.thingGet(thing)

        // Add if doesnt exist
        if(h.isNull(currentT)){
            
            // Set system record, will merge with existing if exists
            this.systemSet(thing?.system || thing, overWrite)

            // Add db to thing object
            thing.thingsDB = this
            
            // Set eventRecordCache
            this.eventRecordCacheSet(thing._eventRecordCache)

            // Subscribe to event listener
            thing.addEventListener('all', this.processThingBroadcast.bind(this))
            
            // Set thing in db
            this._thingDB[record_type] = this._thingDB?.[record_type] || {}
            this._thingDB[record_type][record_id] = thing
            
            // Broadcast new thing 
            broadcastAddFlag = true
            
        }  

        // Add data to existing if exists
        if(h.isNotNull(currentT) && currentT?.id != thing?.id){

            //console.log('exists')
            // Set broadcast edit flag
            if(JSON.stringify(thing?.record) != JSON.stringify(currentT?.record)){
                broadcastEditFlag = true
            }

            // Set system record, will merge with existing if exists
            this.systemSet(thing?.system || thing, overWrite)

            // Add listener to thing
            thing.addEventListener('all', this.processThingBroadcast.bind(this))


            // Copy eventListeners
            for(let k in thing._eventRecordCache){
                currentT[k] = currentT?.[k] || []
                for(let e of thing._eventRecordCache[k]){
                    if(!currentT[k].includes(e)){
                        currentT[k].push(e)
                    }
                }
            }
            
            // Add db to thing object
            thing.thingsDB = this

            // Add callbacks from non primary thing
            for(let callbackType in thing._callbacks){
                for(let callback of thing._callbacks[callbackType]){
                    this.callbacksSet(record_type, record_id, callback, callbackType)
                }
            }
            
            thing = currentT
        }

        
        // Add children
        let children = thing.children
        if(h.isNotNull(children)){
            this.thingSet(children)
        }
        
        // Replace children with version from db
        thing.replaceChildren(this.getAll())

       
        // Broadcast event
        if(broadcastAddFlag == true){
            this.broadcastEvent(record_type, record_id, "AddAction")
        }
        if(broadcastEditFlag == true){
            this.broadcastEvent(record_type, record_id, "UpdateAction")
        }

        
        // Return thing from db
        return this._thingDB[record_type][record_id]

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
            let currentRecord = this.systemGet(record_type, record_id) 
            if(h.isNotNull(currentRecord)){
                record = h.thing.merge(record, currentRecord)
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

    eventRecordCacheSet(record_type, record_id, value){
        /**
         * Sets the official system record of a thing
         */

      

        this._eventRecordCache[record_type] = this._eventRecordCache?.[record_type] || {}

        this._eventRecordCache[record_type][record_id] = value

        return 

    }

    callbacksGet(record_or_record_type, record_id, callbackType){
        /**
         * Returns the official system record of a thing, overrides the local cache of a thing
         */

        let record_type = record_or_record_type?.record_type || record_or_record_type?.['@type'] || record_or_record_type
        record_id = record_or_record_type?.record_id || record_or_record_type?.['@id'] || record_id

        return this._callbacksCache?.[record_type]?.[record_id]?.[callbackType]

    }

    callbacksSet(record_type, record_id, callback, callbackType){
        /**
         * Sets the official system record of a thing
         */

        if(h.isArray(callback)){
            callback.map(x => this.callbacksSet(record_type, record_id, x))
            return
        }


        this._callbacksCache[record_type] = this._callbacksCache[record_type] || {}

         this._callbacksCache[record_type][record_id] =  this._callbacksCache[record_type]?.[record_id] || {}

        this._callbacksCache[record_type][record_id][callbackType] =  this._callbacksCache[record_type]?.[record_id]?.[callbackType] || []

        
        this._callbacksCache[record_type][record_id][callbackType].push(callback) 

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

    set(record, overwrite=false, depth=0){
        /**
         * Sets a record
         * @param {Object} record_or_record_type The record or record
         * @param {String} record_id The record id
         * @returns {Object} The record
         */


        return this.thingSet(record, overwrite, depth)
       
        
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

        //console.log('processThingBroadcast', record_type, record_id)
        // Add children things to db
        for(let t of thing.children){
            this.thingSet(t)
        
         }
        
        return this.broadcastEvent(record_type, record_id, "UpdateAction")

        
    }

    
    addEventListener(record_or_record_type, record_id, callback){
        /**
         * Adds an event listener for a specific thing
         * @param {Object} record_or_record_type The record or record
         * 
         */
        let record_type = record_or_record_type?.record_type || record_or_record_type?.['@type'] || record_or_record_type
        record_id = record_or_record_type?.record_id || record_or_record_type?.['@id'] || record_id

        if(h.isNull(record_type) || h.isNull(record_id)){
            return false
        }

        this._callbacks = this._callbacks || {}
        this._callbacks[record_type] = this._callbacks[record_type] || {}
        this._callbacks[record_type][record_id] = this._callbacks[record_type][record_id] || []
        this._callbacks[record_type][record_id].push(callback)
        
        return true

        
    }


    pauseBroadcast(){
        /**
         * Pauses the broadcast, accumulate in cache
         */

        this._broadcastPausedFlag = true
        
    }

    resumeBroadcast(){
        /**
         * Resumes the broadcast
         */
        this._broadcastPausedFlag = false
    }


    // -----------------------------------------------------
    //  Event 
    // -----------------------------------------------------

    
    addEvent(eventType, objectRef){
        /**
         * 
         */
        
        let event = {
            "@type": eventType,
            "@id": h.uuid.new(),
            object: objectRef,
        } 

        if(!this._broadcastQueue.contains(event)){
            this._broadcastQueue.push(event)
        }
        
        return 
    }

    getEvent(eventType, objectRef){
        /**
         * Get an event 
         */
        let record_type = h.record_type(record_or_record_type)
        record_id = h.record_id(record_or_record_type, record_id)

        let events = []
        
        for(let event of this._events){
            if(h.record_type(event.object) == h.record_type(objectRef)){
                if(h.record_id(event.object) == h.record_id(objectRef)){
                    if(h.record_type(event) == eventType || h.isNull(eventType)){
                        events.push(event)
                    }
                }
            }
        }

        return events
        
    }

    getEvents(filter){
        /**
         * 
         */
        
        return this._events
    }


    deleteEvent(record_or_record_type, record_id, eventType){
        /**
         * Delete an event
         */
        
    }

    get event(){
        /**
         * 
         */
        return {
            'get': this.getEvent.bind(this),
            'getAll': this.getEvents.bind(this),
            'set': this.addEvent.bind(this),
            'delete': this.deleteEvent.bind(this),
        }
    }
    
    

    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------

    

    broadcastEvent(record_or_record_type, record_id, eventType){
        /**
         * Broadcasts an event to all listeners
         * @param {String} event The event
         * @param {Object} message The message
         * @returns {Object} The record
         */

        let record_type = record_or_record_type?.record_type || record_or_record_type?.['@type'] || record_or_record_type
        record_id = record_or_record_type?.record_id || record_or_record_type?.['@id'] || record_id


        // If paused, add to queue

        if(this._broadcastPausedFlag== true){
            this._broadcastQueue.push()
        }


        // 

        
        let record = this.getRecord(record_type, record_id)
        
        let event = {
            "@type": eventType,
            "@id": h.uuid.new(),
            object: record,
            name: 'Record updated'
        }


        let callbacks = this._callbacks?.[record_type]?.[record_id] || []

        // Execute callbacks
        for(let callback of callbacks){
            callback(event)
        }

        return



    }

    
}



export const krakenThings = {
    KrThings: KrThings
}
