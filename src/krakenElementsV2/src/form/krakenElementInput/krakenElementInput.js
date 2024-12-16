
import { KrElementBase} from '../krakenElementBase/krakenElementBase.js'



import { krakenHelpers as h} from '../../../krakenHelpers/krakenHelpers.js'

import { krakenClasses } from '../../../krakenClasses/krakenClasses.js'



// Create a class for the element
export class KrElementInput extends KrElementBase {
    /**
     * HTML input element for properties with only one value
     * 
     */
    constructor() {
        super();



    }


    get template(){

        let label = this.label || this.propertyID
        
        let template = `
         <label for="${this.propertyID}" class="form-label text-capitalize">${label}</label>
         
            <input type="text" class="form-control" id="${this.propertyID}" value="{{${this.propertyID} }}" placeholder="">
         
        
        `
        return template
        
    }

    
    async init(){

        await super.init()
        //this._initInputValue()
        await this._initInputListener()
    }

    _initInputValue(){

        return
        let inputElement = this.querySelector('input')
        if(h.isNull(inputElement)){
            return
        }
        inputElement.value = this.record?.[this.propertyID] || ''
        
    }

    async _initInputListener(){

        let inputElement = this.querySelector('input')

        if(h.isNull(inputElement)){
    
            return 
        }
        
        inputElement.addEventListener('change', (event) =>{

            this.thing.set(this.propertyID, event.target.value)
            
        })
        
    }

    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------


    async update(){
        
        let inputElement = this.querySelector('input')
        let currentValue = inputElement.value
        let newValue = this.record?.[this.propertyID]

        if(currentValue != newValue){
            inputElement.value = newValue
        }
        
    }

}

customElements.define("kr-input", KrElementInput);
