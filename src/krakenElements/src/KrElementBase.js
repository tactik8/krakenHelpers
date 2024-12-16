
import { krakenHelpers as h} from '../../krakenHelpers/krakenHelpers.js'




// Create a class for the element
export class KrElementBase extends HTMLElement {
    constructor() {
        super();

        this.isInitialized = false
        this.krClass = 'krElementBase';
        this._thing = null
        this._record = null
        this.krType = 'krThing'
        this._template = h.html.itemlist()

        this.classList.add(this.krType)
        
    }




    // -----------------------------------------------------
    //  Draw 
    // -----------------------------------------------------

    async init(){


        console.log('init element', this.krClass)
        
        this.setAttribute('data-templateID', this.krClass)

        if(h.isNull(this.record_type) || h.isNull(this.record_id)){ 
            return 
        }

        if(this.isInitialized == true){
            return 
        }

        while(this?.engine?.isInitialized != true){
            await new Promise(resolve => setTimeout(resolve, 100));
        }

        // Add template
        await this.engine.addTemplateAsync(this.krClass, this._template, this.krType)

        console.log('template completed', this.krClass)

        
        await this.render()

        
    }


    
    // -----------------------------------------------------
    //  Properties 
    // -----------------------------------------------------


    get thingElement(){

         return h.dom.thing.traverse.current.thing.get(this)
    }

    
    get record_type(){
        return h.dom.thing.property.record_type.get(this)
    }

    set record_type(value){
        return h.dom.thing.property.record_type.set(this, value)
    }

    get record_id(){
        return h.dom.thing.property.record_id.get(this)
    }

    set record_id(value){
        return h.dom.thing.property.record_id.set(this, value)
    }

    get propertyID(){
        return h.dom.thing.property.propertyID.get(this)
    }

    set propertyID(value){
        return h.dom.thing.property.propertyID.set(this, value)
    }

    get ref(){
        return {
            "@type": this.record_type,
            "@id": this.record_id
        }
    
    }
    

    set ref(value){
        this.record_type = value?.['@type'] || value?.record_type || null
        this.record_id = value?.['@id'] || value?.record_id || null
    }

    
    
    get record(){
        /**
         * Returns the record
         * @returns {Object} The record
         * 
         */

        return this.getRecord()


    }


    async getRecord(){

        if(h.isNotNull(this.engine)){

            while(this.engine.isInitialized!=true){
                await new Promise(resolve => setTimeout(resolve, 1000));
            }

            return this.engine.get(this.record_type, this.record_id)
        }

        return this._record
    }

    set record(value){
        /**
         * Sets the record
         * @param {Object} value The record
         * 
         */

        
        this.ref = value.ref || value

        if(h.isNotNull(this.engine)){
            return this.engine.set(value)
        }

        
        this._record = value
    }

    


    // -----------------------------------------------------
    //  Sections 
    // -----------------------------------------------------

    getSectionGeneric(classNameToGet, classNameToStop){
        /**
         * Returns the section with the given class name, stopping when reaching 
         */

        // Defaults to current classname
        if(h.isNull(classNameToStop)){
            classNameToStop = this.krClass
        }

        
        /* Selects .test1 but excludes elements that are inside .test2 */
        let cssSelector = `.${classNameToGet}:not(.${classNameToStop} .${classNameToGet}) `
        
        let section = this.querySelector(cssSelector)
        return section
    }


    potentialActionSection(){
        /**
         * Returns the potential action section
         * @returns {HTMLElement} The potential action section
         * @returns {null} If no potential action section is found
         */
        return this.getSectionGeneric('krPotentialAction')
        
    }


    

    // -----------------------------------------------------
    //  Neighbors 
    // -----------------------------------------------------

    get engine(){
      /**
       * Retrieves the engine element if exists
       * @returns {Object} The engine element
       */  


        return this.closest('kr-engine') || null
        
    }



    // -----------------------------------------------------
    //  Storage 
    // -----------------------------------------------------

    

    getFromStorage(){
        /**
         * Retrieves the record from storage
         * @returns {Object} The record
         */

        if(h.isNull(this.record_type) || h.isNull(this.record_id)){
            return false
        }

        this.thing = this.engine.get(this.record_type, this.record_id)
        this.record = this.thing.record
        
    }
    
    saveToStorage(){
        /**
         * Saves the record to storage
         * @returns {void}
         * 
         */

        if(h.isNotNull(this.engine)){
            return this.engine.setAttribute(this.record)
        }
        
    }
    

    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------

    

    
    async render(){

        

        if(h.isNull(this.record_type) || h.isNull(this.record_id)){
            return
        }

        await this.engine.renderThingAsync(this.ref)

        console.log('render completed', this.krClass)
        return

        
        if(h.isNotNull(this.engine)){
            

            // Wait for engine to be initialized
            while(this.engine.isInitialized != true){
                await new Promise(resolve => setTimeout(resolve, 100));
            }

            try{
            
                let systemRecord = this.engine.get(this.record_type, this.record_id)
        
                let simpleRecord = h.thing.record.get(systemRecord)
        
                let headingRecord = h.base.heading.addHeadings(simpleRecord)


                
                //h.dom.thing.renderSystem(this, headingRecord)                
                //let content = h.base.template.get(this._template, headingRecord)
                
                //this.innerHTML = content
        
            } catch(error){
            }
        }

        this.isInitialized = true
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

        this.init()
        if(name == 'data-record-type'){
            this.render()
            
        }

        if(name == 'data-record-id'){
            this.render()
        }
        
    }
}

customElements.define("kr-base", KrElementBase);
