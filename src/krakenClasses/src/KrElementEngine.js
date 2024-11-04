

import { krakenHelpers as h} from '../../krakenHelpers/krakenHelpers.js'
import { krakenElementThingRecordHelpers } from '../../krakenHelpers/src/dom/krakenElementThingRecordHelpers.js'


import { KrThings } from './KrThings.js'


export class KrElementEngine{
    constructor(element){

        this._db = new KrThings(true)

        this._templateDB = {}


        this._registeredThings = new h.base.classes.Cache()
        
        this._element = element || document.body
    }



    init(){

         h.dom.thing.init(this._element, this._templateDB)
    }


    get(record_or_record_type, record_id){
        /**
         * Gets a thing
         * @param {Object} record_or_record_type The record or record type
         * @param {String} record_id The record id
         * @returns {Object} The thing
         */
        return this._db.get(record_or_record_type, record_id)
    }

    
    
    set(record){

        // Add to thing db (will convert to thing object if required)

        // Add thing to thing db
        let thing = this._db.set(record)

        // Suscribe to thing event listener
        this.registerThing(this._db.getAll())

        // Render thing
        this.renderThing(thing)
        
        //
        return thing
        
    }

    registerThing(thing){
        /**
         * Registers a thing
         * @param {Object} thing The thing
         * @returns {Object} The thing
         * 
         */

        if(h.isArray(thing)){
            thing.map(x => this.registerThing(x))
            return
        }

        // Skip if already registered
        if(h.isNotNull(this._registeredThings.get(thing))){
            return
        }

        // Configure event listener
        thing.addEventListener('all', this.thingEventCallback.bind(this))

        // Add as a registered thing
        this._registeredThings.set(thing)

        
    }

    
    render(){
        /**
         * Renders the thing
         * @param {Object} thing The thing
         * @returns {Object} The thing
         * 
         */

        let things = this._db.getAll()

        
        for(let t of things){
            this.renderThing(t)
        }
    }

    renderThing(thing){
        /**
         * Renders the thing
         * @param {Object} thing The thing
         * @returns {Object} The thing
         * 
         */

        thing = this._db.get(thing)


        

        
        h.dom.thing.renderSystem(this._element, thing.system)
        
    }


    thingEventCallback(action){

        console.log('New callback', action.object)

        this.renderThing(action.object)
        
    }
    
}

