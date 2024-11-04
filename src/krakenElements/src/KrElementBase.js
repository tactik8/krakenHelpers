
import { krakenHelpers as h} from '../../krakenHelpers/krakenHelpers.js'




// Create a class for the element
export class KrElementBase extends HTMLElement {
    constructor() {
        super();
        this._thing = null
        this._record = null

        this._template = h.html.itemlist()
        
        
        
    }




    // -----------------------------------------------------
    //  Draw 
    // -----------------------------------------------------

    init(){

        
        
        
        this.classList.add('krThing')
        
        this.innerHTML = this._template

        
        //h.dom.thing.init(this)

        //let headingrecord = h.localization.headings.record.get(this.record);

        //h.dom.thing.render(this, headingrecord)
        
    }


    
    // -----------------------------------------------------
    //  Properties 
    // -----------------------------------------------------


    get thingElement(){

        console.log('thingElement')
         return h.dom.thing.traverse.current.thing.get(this)
    }

    
    get record_type(){
        return h.dom.thing.property.record_type.get(this.thingElement)
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
        return getRecord()
        return this._record
    }

    set record(value){
        this.ref = value
        return this._record = value
    }

    get thing(){
        return this._thing
    }

    set thing(value){
        return this._thing = value
    }

    render(){


        if(h.isNull(this.record_type) || h.isNull(this.record_id)){
            return
        }

        console.log('element render')
        let db = this.closest('kr-engine')

        let systemRecord = db.get(this.record_type, this.record_id)

        let simpleRecord = h.thing.record.get(systemRecord)

        console.log('ss', simpleRecord)
        let headingRecord = h.base.heading.addHeadings(simpleRecord)

        let content = h.base.template.get(this._template, headingRecord)

        console.log(content)
        
        this.innerHTML = content
        
    }

    
    connectedCallback() {
        this.init()
        this.render()
    }

    disconnectedCallback() {}

    adoptedCallback() {}

    attributeChangedCallback(name, oldValue, newValue) {

        if(name == 'data-record-type'){
            this.render()
            
        }

        if(name == 'data-record-id'){
            this.render()
        }
        
    }
}

customElements.define("kr-base", KrElementBase);
