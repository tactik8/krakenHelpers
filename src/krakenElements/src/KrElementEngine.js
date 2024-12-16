
import { krakenHelpers as h} from '../../krakenHelpers/krakenHelpers.js'



import { krakenClasses } from '../../krakenClasses/krakenClasses.js'


// Create a class for the element
export class KrElementEngine extends HTMLElement {
    constructor() {
        super()
        this._engine = null
        this.isInitialized = false
    }


    init(){

        if(this.isInitialized == true){
            return 
        }
                
        this._engine = new krakenClasses.KrElementEngine();
        this._engine.init(this);

        this.isInitialized = true
        
    }

    async initAsync(){

        
        
    }

    async waitInitialized(){

        while(this.isInitialized != true){
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        return
    }

    
    addTemplate(templateID, template, elementKrType="krThing"){
        this.addTemplateAsync(templateID, template, elementKrType)
    }

    async addTemplateAsync(templateID, template){

        let t = await this.waitInitialized()

        this._engine.addTemplate(templateID, template)

        return
        
    }
   
    renderThing(record_or_record_type, record_id){
        return this.renderThingAsync(record_or_record_type, record_id)
    }

    async renderThingAsync(record_or_record_type, record_id){
        let t = await this.waitInitialized()
        this._engine.renderThing(record_or_record_type, record_id)
        return 
    }

    get(record_or_record_type, record_id){
        return this._engine.get(record_or_record_type, record_id)
    }

    set(value){

        this.setRecordAsync(value)
        
    }

   

    async setRecordAsync(value){

        let t = await this.waitInitialized()
        await this._engine.set(value)
        console.log('record set completed')
        return 
        
    }
    

    connectedCallback() {
        
        this.init()
        
    }

    disconnectedCallback() {}

    adoptedCallback() {}

    attributeChangedCallback(name, oldValue, newValue) {}
}

customElements.define("kr-engine", KrElementEngine);


