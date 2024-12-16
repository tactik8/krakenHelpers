import { krakenHelpers as h } from "../../../krakenHelpers/krakenHelpers.js";
import { krakenThingPropertyValueHelpers } from "../../../krakenHelpers/src/thing/src/krakenThingPropertyValueHelpers.js";

import { KrElementBase} from '../KrElementBase.js'





// Create a class for the element
export class KrElementCopyClipboard extends HTMLElement {
    constructor() {
        super();

        this.classList.add('krElement')
        this.krClass = 'KrElementColorInput';
        this.krType = 'krValue'

        this.initFlag = false;
        this._template = '<i class="bi bi-clipboard-plus krActionCopyClipboard"></i>'

        

    }


    init(){

        //super.init()
        console.log('init')
        this._initContent()
        this._initClickEvent()
        

    }

    _initContent(){
        this.innerHTML = this._template
    }

    _initClickEvent(){

        this.addEventListener('click', async event => {

            await this.copyToClipboard()

            
        })
        
    }


    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------

    async copyToClipboard(){

        this.iconElement.classList.remove('bi-clipboard-plus')
        this.iconElement.classList.add('bi-clipboard-check')

        h.dom.thing.record.value.get()
        
        let value = 'temp'
          try {
              await navigator.clipboard.writeText(value);

          } catch (err) {

          }
        await new Promise(r => setTimeout(r, 2000));
        this.iconElement.classList.add('bi-clipboard-plus')
        this.iconElement.classList.remove('bi-clipboard-check')
        
    }


    
    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------


    get iconElement(){
        return this.querySelector('.krActionCopyClipboard')
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

customElements.define("kr-action-copy-to-clipboard", KrElementCopyClipboard);
