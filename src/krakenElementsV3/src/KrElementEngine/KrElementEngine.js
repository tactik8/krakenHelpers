import { krakenClasses } from "../../../krakenClasses/krakenClasses.js"
import { krakenHelpers as h} from '../../../krakenHelpers/krakenHelpers.js'

import { KrElementController } from '../KrElementController/KrElementController.js'


export class KrElementEngine {
    constructor(element){


        // 
        this.id = 'engine_' + h.base.uuid.new()
        this._element = element || document.body
        this._engine = new krakenClasses.KrThings()
        
        // Databases
        this._controllersDB = {}
        this._templatesDB = {}

        // Flags
        this._isInitialized = false

        // Initialize
        this.init()


        // Events log
        this.events = []

        
        // Control render freeze
        this.renderAllowed = true
        this._renderCache = [] // Cache of renders during freeze
        
    }


    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------


    init(){
        /**
         * Init the engine
         */

        // Skip if already initialized
        if(this._isInitialized == true){
            return 
        }
        
        // Init elements already on page 
        this._initElements()
        
        // Init element observer (for new elements)
        this._initObserver()

        // Set flag
        this._isInitialized = true
        
        // Return
        return
    }


    _initElements(){
        /**
         * Init the elements
         */

        let elements = this._element.querySelectorAll('*')
        for(let e of elements){
            this.register(e)
        }
        return
        
    }

    
    _initObserver(){
        /**
         * Initialize a new observer that automatically registers new elements
         * 
         */

        this.observerNode = new MutationObserver(this._processMutations.bind(this));

        this.observerNode.observe(this.element, { attributes: false, childList: true, subtree: true });

    }

    _processMutations(mutations){
        /**
         * Process mutations
         */
        for(let mutation of mutations){
            for(let addedNode of mutation.addedNodes){
                this.register(addedNode)
                if(addedNode.querySelectorAll){
                    for(let child of (addedNode.querySelectorAll('*') || [])){
                        this.register(child)
                    }
                }
            }
        }
        
    }

    // -----------------------------------------------------
    //  Attributes 
    // -----------------------------------------------------

    get engine(){
        return this._engine
    }
    set engine(value){
        this._engine = value
    }

    get element(){
        return this._element
    }
    set element(value){
        this._element = value
    }
    

    // -----------------------------------------------------
    //  Methods for controllers 
    // -----------------------------------------------------


    register(element){
        /**
         * Registers an element
         * @param {Object} controller
         * @returns {Object} The controller
         */

       if(element.classList && element.classList.contains('controllerInitialized')){
           return
       }

        // Skip if class list doesn't contain a kr keyword
        if(!element.getAttribute){ return }
        let c01 = !(element.classList.contains('krThing'))
        let c02 = !(element.classList.contains('krProperty'))
        let c03 = !(element.classList.contains('krValue'))
        
        let c2 = h.isNull(element.getAttribute('data-record-type'))
        let c3 = h.isNull(element.getAttribute('data-record-id'))
        let c4 = h.isNull(element.getAttribute('data-propertyID'))
        let c5 = h.isNull(element.getAttribute('data-valueID'))
        let c6 = h.isNull(element.getAttribute('data-templateID'))
        if(c01 && c02 && c03 && c2 && c3 && c4 && c5 && c6){
            return
        }


        // Set id 
        element.id = element.id || 'controller_' + h.base.uuid.new()
        
        // Create new controller
        let controller = new KrElementController(element, this)
        
        
        // Add controller to DB
        this.controller.set(element.id, controller)

        
        // Add init class
        element.classList.add('controllerInitialized')
        

        // 
    }

    unRegister(controller){
        /** Unregisters an element */

        this.controller.set(controller.element.id, null)
        controller.element.remove()

        
    }

    
    addEventListener(record_or_record_type, record_id, callback){
        return this.engine.addEventListener(record_or_record_type, record_id, callback)
    }
    


    execute(action){
        /**
         * Executes an action
         */

        action = this.engine.execute(action)
        
        
    }
    


    setFocus(controller){
        /**
         * Sets focus on a controller
         */
        
    }

    
    // -----------------------------------------------------
    //  Element controllers 
    // -----------------------------------------------------
    
    getController(elementID){
        /**
         * Retrieves an controller from the element id
         */

        return this._controllersDB?.[elementID] || null

    }

    getAllControllers(){
        /**
         * Retrieves all controllers
         */

        let elements = []
        for(let k in this._controllersDB){
            elements.push(this._controllersDB[k])
        }

        return elements

    }

    setController(elementID, controller){
        /**
         * Set a controller base don element id
         * 
         */

        this._controllersDB[elementID] = controller

    }

    get controller(){
        return {
            get: this.getController.bind(this),
            set: this.setController.bind(this),
            add: this.setController.bind(this),
            getAll: this.getAllControllers.bind(this)
        }
    }

    // -----------------------------------------------------
    //  Templates 
    // -----------------------------------------------------
    
    getTemplate(templateID){
        /**
         * Retrieves a template from the template id
         * Retrieves from generic template list if bot found
         */

        if(h.isNull(this._templatesDB?.[templateID])){

            if(h.html?.[templateID]){
                this._templatesDB[templateID] = h.html?.[templateID]() || null
            }
        }
        
        return this._templatesDB?.[templateID] || ''

    }

    getAllTemplates(){
        /**
         * Retrieves all templates
         */

        let results = []
        for(let k in this._templatesDB){
            results.push(this._templatesDB[k])
        }

        return results

    }

    setTemplate(templateID, template){
        /**
         * Set a template based on template id
         * 
         */
        
        let templates = KrElementEngine.flattenTemplate(templateID, template)

        for(let tID in templates){

            if(h.isNull(this._templatesDB?.[tID])){
                this._templatesDB[tID] = templates?.[tID]
            }
        }

    }

    get template(){
        return {
            get: this.getTemplate.bind(this),
            set: this.setTemplate.bind(this),
            add: this.setTemplate.bind(this),
            getAll: this.getAllTemplates.bind(this)
        }
    }


    // -----------------------------------------------------
    //  Thing 
    // -----------------------------------------------------

    getThing(record_or_record_type, record_id){
        return this.engine.thing.get(record_or_record_type, record_id)
    }
    getAllThings(){
        return this.engine.thing.getAll()
    }
    setThing(value){
        return this.engine.thing.set(value)
    }

    get thing(){
        return {
            get: this.getThing.bind(this),
            getAll: this.getAllThings.bind(this),
            set: this.setThing.bind(this),
            add: this.setThing.bind(this),
        }
    }

    

    
    // -----------------------------------------------------
    //  Record 
    // -----------------------------------------------------

    getRecord(record_or_record_type, record_id){
        return this.engine.record.get(record_or_record_type, record_id)
    }
    getAllRecords(){
        return this.engine.record.getAll()
    }
    setRecord(record){
        return this.engine.record.set(record)
    }

    get record(){
        return {
            get: this.getRecord.bind(this),
            getAll: this.getAllRecords.bind(this),
            set: this.setRecord.bind(this),
            add: this.setRecord.bind(this),
        }
    }

    // -----------------------------------------------------
    //  System record 
    // -----------------------------------------------------


    getSystemRecord(record_or_record_type, record_id){
        return this.engine.system.get(record_or_record_type, record_id)
    }
    getAllSystemRecords(){
        return this.engine.system.getAll()
    }
    setSystemRecord(record){
        return this.engine.system.set(record)
    }

    get system(){
        return {
            get: this.getSystemRecord.bind(this),
            getAll: this.getAllSystemRecords.bind(this),
            set: this.setSystemRecord.bind(this),
            add: this.setSystemRecord.bind(this),
        }
    }
    

    // -----------------------------------------------------
    //  Static 
    // -----------------------------------------------------


    static flattenTemplate(templateID, template){
        /**
         * Flatten a template
         */


        let templates = {}
        
        // Create temp element
        let temp = document.createElement('div')
        temp.innerHTML = template
        
        
        // Get set templateID
        let subElements = temp.querySelectorAll('[data-record-type]')
        for(let s of subElements){
            let tID = s.getAttribute('data-templateID')
            tID = tID || 'template_' + h.base.uuid.new()
            s.setAttribute('data-templateID', tID)
        }


        // Get content
        for(let s of subElements){
            let tID = s.getAttribute('data-templateID')
            templates[tID] = s.innerHTML
        }
        
        templates[templateID] = temp.innerHTML


        // Remove sub templates from all templates
        for(let tID in templates){
            templates[tID] = KrElementEngine.removeSubTemplates(templates[tID])
        }


        return templates
        
        
    }

    static removeSubTemplates(template){
        /**
         * Remove sub templates from a template
         */

        let temp = document.createElement('div')
        temp.innerHTML = template

        // Get sub templates
        let subTemplates = temp.querySelectorAll('[data-templateID]')

        // Remove childs of sub templates
        if(subTemplates.length > 0){
            for(let s of subTemplates){
                s.innerHTML = ''
            }
        }

        //
        // Clean template
        let content = temp.innerHTML
        content = content.replaceAll(/[\r\n]/g, '')
        content = content.replaceAll('  ', '')
        content = content.trim()
        
        
        return content
    }

    // -----------------------------------------------------
    //  Render global control 
    // -----------------------------------------------------

    freezeRender(){
        /**
         * Freeze the render
         */

        this.renderAllowed = false
    }

    unfreezeRender(){
        /**
         * Freeze the render
         */

        this.renderAllowed = true

        for(let c of this._renderCache){
            c.render()
        }
        this._renderCache = []
    }

    addRenderCache(controller){
        /**
         * Add a controller to render cache
         */
        if(!this._renderCache.includes(controller)){
            this._renderCache.push(controller)
        }
    }


    // -----------------------------------------------------
    //  Events log 
    // -----------------------------------------------------


    getEvent(eventID){
        /**
         * Retrieves an event from the event id
         */
        for(let e of this._events){
            if(e?.['@id'] == eventID){
                return e
            }
        }
        return null
    }

    getEvents(){
        /**
         * Retrieves all events
         */
        return this._events
    }

    setEvent(event){
        /**
         * Set an event
         */
        this._events.push(event)
    }

    logEvent(eventType, name, object, targetCollection){
        /**
         * Log an event
         */

        let event = {
            "@type": eventType,
            "@id": h.base.uuid.new(),
            "name": name,
            "object": object,
            "targetCollection": targetCollection,
            "startTime": new Date(),
            "endTime": new Date(),
            "actionStatus": "CompletedActionStatus"
        }

        this._events.push(event)
        
    }

    logRender(controller){
        /**
         * Log a render
         *
         */

        let object = {
            "@type": "WebPageElement",
            "@id": controller.id,
            "name": "controller_" + controller.record_type + '/' + controller.record_id
            
        }
        this.logEvent('UpdateAction', "Update controller", object)
    
    
    }

    logBroadcast(thing){
        /**
         * Log a broadcast
         */
        let object = thing.ref
        object.name = thing.id
        this.logEvent('CommunicateAction', "Thing broadcast", object)
    }
    
    
}