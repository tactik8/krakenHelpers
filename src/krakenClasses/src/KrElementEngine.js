

import { krakenHelpers as h} from '../../krakenHelpers/krakenHelpers.js'
import { krakenElementThingRecordHelpers } from '../../krakenHelpers/src/dom/krakenElementThingRecordHelpers.js'
import { KrThing } from './KrThing.js'


import { KrThings } from './KrThings.js'


export class KrElementEngine{
    constructor(element){

        this._db = new KrThings(true)

        this._templateDB = {
            "a": "aaa"
        }
        this.isInitialized=false


        this._registeredThings = new h.base.classes.Cache()
        
        this._element = element || document.body
    }



    init(){

        // Initialize things
         h.dom.thing.init(this._element, this._templateDB)

        // Initialize inputs
        this.isInitialized=true

        
      
    }



    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------


   


    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------

    

    
    get(record_or_record_type, record_id){
        /**
         * Gets a thing
         * @param {Object} record_or_record_type The record or record type
         * @param {String} record_id The record id
         * @returns {Object} The thing
         */
        let thing =  this._db.get(record_or_record_type, record_id)


        // Retrieve from api if missing

        if(h.isNull(thing)){
            let record = h.base.storage.get(record)
            thing = new KrThing(record)
        }

        return thing
        
    }

    
    
    set(record){

        // Add to thing db (will convert to thing object if required)

        // Add thing to thing db
        let thing = this._db.set(record)

        // Add thing to storage
        h.base.storage.set(thing.system)

        
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
            if(t){
                this.renderThing(t)
            }
        }
    }

    renderThing(record_or_record_type, record_id){
        /**
         * Renders the thing
         * @param {Object} thing The thing
         * @returns {Object} The thing
         * 
         */


        // Render thing

        let newThing = this._db.get(record_or_record_type, record_id)
       
        let systemRecord = newThing?.system

        if(h.isNotNull(systemRecord)){
            h.dom.thing.renderSystem(this._element, systemRecord, null, this._templateDB)
            
            h.dom.thing.event.register(this._element)
            
        } else {
        }


        // Render thing childrens
        //for(let t of newThing?.children || []){
           // this.renderThing(t)
            
       // }

        
    }

    addTemplate(templateID, template, elementKrType="krThing"){
        /**
         * Adds a template
         * @param {String} templateID The template id
         * @param {String} template The template
         */

        let force = true
        let temp = document.createElement('div')
        temp.setAttribute('data-templateID', templateID)
        temp.classList.add(elementKrType)
        temp.innerHTML = template
        h.dom.thing.init(temp, this._templateDB, force)

        return
        
    }

    thingEventCallback(action){


        // Store in storage

        if(h.isNotNull(action.object?.system)){
            h.base.storage.set(action.object?.system)
        }

        // Render
        this.renderThing(action.object)
        
    }
    
}

