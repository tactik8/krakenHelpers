import { krakenHelpers as h} from '../../krakenHelpers/krakenHelpers.js'

import { KrDb } from './KrDb.js'

export class KrBroadcast {

    /**
     * Class to allow adding event listeners and broadcasting events
     *
     * Methods:
     * - addEventListener: Adds a listener. Must be abvle to receive array of events
     * - newEvent: Adds an event to the broadcast, will get broadcasted immediately unless pause is set
     * - pauseBroadcast: Pause broadcasting, return a key
     * - resumeBroadcast(key): Removes lockout with given key. Once all lockout are removed, broadcast resumes
     * - forceResumeBroadcast: Removes all lockouts and broadcast all pending events. Multiple events in one broadcast.
     * 
     */

    
    constructor(){

        this._eventsDB = new KrDb()          // DB to store events pending broadcast
 
        this._followersDB = new KrDb()      // Db to store all listeners

        this._lockOutsDB = new KrDb()        // DB to store lockouts
        
    }



    // -----------------------------------------------------
    //  Followers management 
    // -----------------------------------------------------

    addEventListener(callback, record_or_record_type, record_id){
        /**
         * Add a callback
         * @param {String} eventType The event type
         * @param {Function} callback The callback (takes event as parameter)
         */


        let followAction = {
            "@type": "FollowAction",
            "@id": h.base.uuid.new(),
            "followee": h.ref(record_or_record_type, record_id),
            "callback": callback
            
        }

        this.followers.set(followAction)

        // Return ref of the follow action created
        return h.ref(followAction)
        
    }


    get followers(){
        return this._followersDB
    }

    

    // -----------------------------------------------------
    //  Events management 
    // -----------------------------------------------------

    get events(){
        return this._eventsDB
    }



    
    
    newEvent(eventType, record_or_record_type, record_id){
        /**
         * Create a new event
         */

        let record = {
            "@type": eventType,
            "@id": h.base.uuid.new(),
            "object": h.ref(record_or_record_type, record_id),
            "actionStatus": "CompletedActionStatus",
        }

        this.events.set(record)
        this.broadcastAllEvents()
       
    }

    newEventAdd(record_or_record_type, record_id){
        /**
         * Create a new event
         */
        return this.newEvent('AddAction', record_or_record_type, record_id)
    }

    newEventUpdate(record_or_record_type, record_id){
        /**
         * Create a new event
         */
        return this.newEvent('UpdateAction', record_or_record_type, record_id)
    }
    

    // -----------------------------------------------------
    //  Lockout keys management
    // -----------------------------------------------------

    get lockouts(){
        return this._lockOutsDB
    }
    
    
    // -----------------------------------------------------
    //  Broadcast management 
    // -----------------------------------------------------

    pauseBroadcast(){
        /**
         * Pause the broadcast
         * @param {String} lockOutKey The lockout key
         * 
         */
    
        let lockOutKey = {
            "@type": "LockAction",
            "@id": h.base.uuid.new(),
        }
        
        this.lockouts.set(lockOutKey)

        return lockOutKey
        
    }

    resumeBroadcast(lockOutKey){
        /**
         * Resume the broadcast
         */

        this.lockouts.delete(lockOutKey)


        this.broadcastAllEvents()
        
    }

    forceResumeBroadcast(){
        /**
         * Force the broadcast to resume
         */
        this.lockouts.drop()
        this.broadcastAllEvents()
        
    }

    broadcastAllEvents(){
        /**
         * Broadcast all events
         */


        // Stop if lockouts are still there 

        if(this.lockouts.length > 0){
            return 
        }

        // Cycle through all events
        let events = this.events.get()

        if(h.isNull(events)){
            return
        }


        // Group events by same object type/id
        let eventsGroups = {}
        for(let event of events){
            let objectT = h.record_type(event?.object)
            let objectID = h.record_id(event?.object)
            eventsGroups[objectT] = eventsGroups?.[objectT] || {}
            eventsGroups[objectT][objectID] = eventsGroups?.[objectT]?.[objectID] || []
            eventsGroups[objectT][objectID].push(event)
        }
        

        // Broadcast events
        for(let record_type in eventsGroups){
            for(let record_id in eventsGroups[record_type]){

                let e = eventsGroups[record_type][record_id]
                
                // Get followers
                let f = {}
                f['followee'] = h.ref(record_type, record_id)

                let followers = this.followers.get(f)
    
                // Broadcast to followers
                for(let follower of followers){
                    follower.callback(e)
                }
    
                // Remove event from db
                this.events.delete(e)
                
            }
            
        }
        
        return
    }
    
    
}