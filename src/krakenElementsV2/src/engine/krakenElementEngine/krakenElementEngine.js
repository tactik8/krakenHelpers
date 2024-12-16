
import { krakenHelpers as h} from '../../../krakenHelpers/krakenHelpers.js'

import { krakenClasses } from '../../../krakenClasses/krakenClasses.js'



// Create a class for the element
export class KrElementEngine extends HTMLElement {
    constructor() {
        super();
        this.initialized = false
        this.things = new krakenClasses.KrThings()

    }



    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------

    init(){

        this.initialized = true
        
    }
    


    // -----------------------------------------------------
    //  CRUD 
    // -----------------------------------------------------


    get(record_or_record_type, record_id){

        return this.things.get(record_or_record_type, record_id)
    }
    
    set(thing){

        this.things.set(thing)
        
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

customElements.define("kr-engine", KrElementEngine);
