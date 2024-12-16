
import { krakenHelpers as h} from '../../../krakenHelpers/krakenHelpers.js'

import { krakenClasses } from '../../../krakenClasses/krakenClasses.js'



// Create a class for the element
export class KrElementBase extends HTMLElement {
    constructor() {
        super();


        this._thing = null
        this._template = ''

        this._content = ''

        // Attributes
        this._record_type = null
        this._record_id = null
        this._propertyID = null
        this._valueID = null
        this._label = null
        this._things = null
        this._templateID = null

        // Flags
        this.thingInitialized = false

        
    }


    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------

    async init(){

        // Wait for engine to be initialized
        await this._initEngine()

        // Init thing
        this._initThing()

        // Render
        await this.render()
        

        return
        
    }

    async _initEngine(){
        /**
         * Wait for engine to be initialized
         */

        let engine = this.things
        while(engine?.initialized != true){
            await new Promise(r => setTimeout(r, 2000));
        }

        
    }

    _initThing(){
        /**
         * Init thing, creating it if not exists
         */

        // If initialzied, skip
        if(this.thingInitialized == true){
            return 
        }

        // If no type and id, skip
        if(h.isNull(this.record_type) || h.isNull(this.record_id)){
            return 
        }

        let thing = this.thing

        // If thing is blank, create new thing
        if(h.isNull(thing)){
            let thingRecord = this.ref
            this.things.set(thingRecord)
            thing = this.thing
        }

        // Add event listener
        this.thing.addEventListener('all', this.thingUpdated.bind(this))

        this.thingInitialized = true
        
    }

    
    // -----------------------------------------------------
    //  Attributes 
    // -----------------------------------------------------


    getClosestAttribute(attributeName){
        let item = this
        while(h.isNotNull(item)){
            let v = item.getAttribute(attributeName)
            if(h.isNotNull(v)){
                return v
            }
            item = item.parentElement

        }
        return null
    }


    get template(){
        return this._template
    }

    set template(value){
        this._template = value
    }
    
    
    get record_type(){
        if(h.isNotNull(this._record_type)){
            return this._record_type
        }
        this._record_type =  this.getClosestAttribute('data-record-type')
        return this._record_type
    }

    set record_type(value){
        this._record_type = value
        this.setAttribute('data-record-type', value)
    }

    get record_id(){
        if(h.isNotNull(this._record_id)){
            return this._record_id
        }
        this._record_id =  this.getClosestAttribute('data-record-id')
        return this._record_id
    }

    set record_id(value){
        this._record_id = value
        this.setAttribute('data-record-id', value)
    }

    get ref(){
        return {
            '@type': this.record_type,
            '@id': this.record_id
        }
    }

    set ref(value){
        this.record_type = value?.record_type || value?.['@type'] || null
        this.record_id = value?.record_id || value?.['@id'] || null
    }
    
    get propertyID(){
        if(h.isNotNull(this._propertyID)){
            return this._propertyID
        }
        this._propertyID = this.getClosestAttribute('data-propertyID')
        return this._propertyID
    }

    set propertyID(value){
        this._propertyID = value
        this.setAttribute('data-propertyID', value)
    }

    get valueID(){
        if(h.isNotNull(this._valueID)){
            return this._valueID
        }
        this._valueID = this.getClosestAttribute('data-valueID')
        return this._valueID
    }

    set valueID(value){
        this._valueID = value
        this.setAttribute('data-valueID', value)
    }

    get templateID(){
        if(h.isNotNull(this._templateID)){
            return this._templateID
        }
        this._templateID = this.getClosestAttribute('data-templateID')
        return this._templateID
    }

    set templateID(value){
        this._templateID = value
        this.setAttribute('data-templateID', value)
    }
    get label(){
        if(h.isNotNull(this._label)){
            return this._label
        }
        this._label = this.getClosestAttribute('data-label')
        return this._label
    }

    set label(value){
        this._label = value
        this.setAttribute('data-label', value)
    }


    get value(){
        if(h.isNotNull(this.propertyID)){
            return this.thing.record?.[this.propertyID]
        } else {
            return this.thing.record
        }
        
    }

    // -----------------------------------------------------
    //  Events 
    // -----------------------------------------------------


    thingUpdated(){
        /**
         * Fired when the thing is updated
         * 
         */

        this.render()
        
    }

    
    // -----------------------------------------------------
    //  Methods 
    // -----------------------------------------------------

    

    async render(){
        /**
         * Renders the element for the first time
         * @returns {void}
         */

        let record = this.record
        record = h.base.heading.addHeadings(record)

        if(h.isNotNull(record)){
            let newContent = h.base.template.render(this.template, record)
            if (newContent != this._content){
                this._content = newContent
                this.innerHTML = newContent
            } else {
                await this.update()

            }
        }
        return
        
    }

    async update(){
        /**
         * Updates the children elements
         * 
         */

        

        
    }
    // -----------------------------------------------------
    //  Things 
    // -----------------------------------------------------

        

    get(record_or_record_type, record_id){

        return this.things.get(record_or_record_type, record_id)
    }

    set(thing){

        this.things.set(thing)

    }


    get things(){

        if(h.isNotNull(this._things)){
            return this._things
        }
        this._things = this.closest('kr-engine')
        return this._things
    }

    get thing(){
        /**
         * Gets the thing
         * @returns {Object}
         */
        if(h.isNotNull(this._thing)){
            return this._thing
        }
        this._thing = this.things.get(this.ref)
        
        return this._thing

    }

    set thing(value){
        /**
         * Sets the thing
         * @param {Object} value
         * @returns {void}
         */
        this.things.set(value)
        this.ref = value
        this._thing = this.things.get(value)
        this._initThing()
        
    }
    
    get record(){
        /**
         * Gets the record
         * @returns {Object}
         */
        return this.thing?.record || null
        
    }
    
    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------


    connectedCallback() {

        this.init()

    }

    disconnectedCallback() {}

    adoptedCallback() {}

    attributeChangedCallback(name, oldValue, newValue) {

    }
}

customElements.define("kr-base", KrElementBase);
