
import { krakenHelpers as h} from '../../krakenHelpers/krakenHelpers.js'



import { krakenClasses } from '../../krakenClasses/krakenClasses.js'


// Create a class for the element
export class KrElementEngine extends HTMLElement {
    constructor() {
        super()
        this._engine = null
    }


    init(){

        this._engine = new krakenClasses.KrElementEngine();
        this._engine.init(this);
        
    }


    get(record_or_record_type, record_id){
    return this._engine.get(record_or_record_type, record_id)
    }

    set(value){

        return this._engine.set(value)
        
    }
    
    

    connectedCallback() {
        this.init()
    }

    disconnectedCallback() {}

    adoptedCallback() {}

    attributeChangedCallback(name, oldValue, newValue) {}
}

customElements.define("kr-engine", KrElementEngine);


