

import { krakenHelpers as h} from '../../krakenHelpers/krakenHelpers.js'





// Create a class for the element
export class KrElementInput extends HTMLElement {
    constructor() {
        super();
        this._thing = null
        this._record = null
        
        this.record = {
            "@type": "CreativeWork",
            "@id": String(crypto.randomUUID()),
            "headline": '',
            "text": 'aaa',
            "hasPart": [
                {
                    "@type": "CreativeWork",
                    "@id": String(crypto.randomUUID()),
                    "headline": '',
                    "text": 'bbb',
                    "hasPart": [],
                },
                {
                    "@type": "CreativeWork",
                    "@id": String(crypto.randomUUID()),
                    "headline": '',
                    "text": 'ccc',
                    "hasPart": [],
                }
                
            ]
        }



    }




    // -----------------------------------------------------
    //  Draw 
    // -----------------------------------------------------

    init(){


       
        this.classList.add('krThing')


        this.innerHTML = `
        

         
            <div>
                <div>
                {{ text }}
               </div>

                <div>
                    {{# hasPart}}
                        <div contenteditable="true">
                           <kr-line></kr-line>
                        </div>
                        
                    {{/hasPart}}
                </div>

            </div>
        
        `

        
        

        
        h.dom.thing.init(this)
        
        //let headingrecord = krakenLocalizationHelpers.headings.record.get(this.record);
        console.log(this.record)
        h.dom.thing.render(this, this.record)

    }



    // -----------------------------------------------------
    //  Properties 
    // -----------------------------------------------------


    get record_type(){
        return this.getAttribute("data-record-type")
    }

    set record_type(value){
        return this.setAttribute("data-record-type", value)
    }

    get record_id(){
        return this.getAttribute("data-record-id")
    }

    set record_id(value){
        return this.setAttribute("data-record-id", value)
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
        
        return this._record
    }

    set record(value){
        this.ref = value
        this._record = value
    }

    get thing(){
        return this._thing
    }

    set thing(value){
        return this._thing = value
    }



    connectedCallback() {
        this.init()
    }

    disconnectedCallback() {}

    adoptedCallback() {}

    attributeChangedCallback(name, oldValue, newValue) {}
}

customElements.define("kr-input", KrElementInput);

