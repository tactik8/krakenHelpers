import { krakenHelpers as h} from '../../krakenHelpers/krakenHelpers.js'



class KrEvents {

    constructor(){

        this._eventsDB = []

        this._followActionsDB = []

        this._lockOuts = []
    }



    // -----------------------------------------------------
    //  Followers management 
    // -----------------------------------------------------

    addEventListener(callback, object){
        /**
         * Add a callback
         * @param {String} eventType The event type
         * @param {Function} callback The callback (takes event as parameter)
         */


        let followAction = {
            "@type": "FollowAction",
            "@id": h.base.uuid.new(),
            "followee": object,
            "callback": callback
            
        }

        this.setFollowAction(followAction)

        // Return id of the follow aciton created
        return followAction?.['@id']
        
        
    }

    getFollowAction(record_id){
        /**
         * Get the follow action
         */

        for(let followAction of this._followers){
            if(followAction['@id'] == record_id){
                return followAction
            }
        }
        return null
    }

    getFollowActions(filter){
        /**
         * Get the follow action
         */

        if(h.isNull(filter)){
            return this._followActionsDB
        }
        
        let results = h.thing.filter(this._followActionsDB, filter)
        return results
        
    }

    setFollowAction(followAction){
        /**
         * Set a follow action
         */

        let currentFollowAction = this.getFollowAction(record_id)

        if(h.isNull(currentFollowAction)){
            this._followActionsDB.push(followAction)
        }

        
    }

    deleteFollowAction(filter){
        /**
         * Delete a follow action
         */

        let followActions = this.getFollowActions(filter)
        let record_ids = followActions.map(x => x['@id'])

        this._followActionsDB = this._followActionsDB.filter(x => !record_ids.includes(x.name));
        
    }

    get follow(){
        return {
            'get': this.getFollowAction.bind(this),
            'set': this.setFollowAction.bind(this),
            'delete': this.deleteFollowAction.bind(this),
            
        }
    }

    // -----------------------------------------------------
    //  Events management 
    // -----------------------------------------------------

    newEvent(object){
        /**
         * Create a new event
         */

        for(let followAction of this._followers){
            if(followAction['@id'] == record_id){
                return followAction
            }
        }
        return null
    }

    getEvent(filter){
        /**
         * Get the follow action
         */

        if(h.isNull(filter)){
            return this._followActionsDB
        }

        let results = h.thing.filter(this._followActionsDB, filter)
        return results

    }

    setEvent(followAction){
        /**
         * Set a follow action
         */

        let currentFollowAction = this.getFollowAction(record_id)

        if(h.isNull(currentFollowAction)){
            this._followActionsDB.push(followAction)
        }


    }
    
    deleteEvent(filter){
        /**
         * Delete a follow action
         */

        let followActions = this.getFollowActions(filter)
        let record_ids = followActions.map(x => x['@id'])

        this._followActionsDB = this._followActionsDB.filter(x => !record_ids.includes(x.name));

    }

    get event(){
        return {
            'new': this.newEvent.bind(this),
            'get': this.getEvent.bind(this),
            'set': this.setEvent.bind(this),
            'delete': this.deleteEvent.bind(this),

        }
    }
    

    // -----------------------------------------------------
    //  Lockout keys management
    // -----------------------------------------------------

    
    
    // -----------------------------------------------------
    //  Broadcast management 
    // -----------------------------------------------------

    pauseBroadcast(lockOutKey){
        /**
         * Pause the broadcast
         * @param {String} lockOutKey The lockout key
         * 
         */
        lockOutKey = lockOutKey || h.base.uuid.new()
        
        
    }

    resumeBroadcast(lockOutKey){
        /**
         * Resume the broadcast
         */
        this._followActionsDB = this._followActionsDB.filter(x => !record_ids.includes(x.name));
        
    }

    
    
    
}