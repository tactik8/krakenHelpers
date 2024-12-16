
import { KrElementBase} from '../krakenElementBase/krakenElementBase.js'



import { krakenHelpers as h} from '../../../krakenHelpers/krakenHelpers.js'

import { krakenClasses } from '../../../krakenClasses/krakenClasses.js'



// Create a class for the element
export class KrElementValue extends KrElementBase {
    /**
     * Displays value as an object
     */
    constructor() {
        super();

       

    }


    // -----------------------------------------------------
    //  Override render 
    // -----------------------------------------------------

    render(){

        let propertyID = this.propertyID
        let valueID = this.valueID

        if(h.isNull(propertyID)){
            return
        }

        if(h.isNull(valueID)){
            return
        }
        
        let propertyValues = this.thing.getPropertyValues(propertyID)

        let propertyValue = propertyValues.filter(x => (x.object.propertyID == propertyID) && (x?.['@id'] == this.valueID))?.[0]


        if(h.isNull(propertyValue)){
            this.innerHTML = ''
        }

      
        if(h.isObject(propertyValue?.object?.value)){

            this.renderObject(propertyValue)

            
        } else {
        
            this.renderString(propertyValue)
        }
    }


    renderObject(propertyValue){
        /**
         * Displays value as an object
         */


        let value = propertyValue?.object?.value
        let record_type = value?.record_type || value?.['@type'] || ''
        let record_id = value?.record_id || value?.['@id'] || ''
        this.innerHTML = `<kr-generic data-templateID="cardHorizontal" data-record-type="${record_type}" data-record-id="${record_id}"></kr-generic>`

    }

    renderString(propertyValue){
        /**
         * Displays value as a string
         */

        let propertyID = this.propertyID
        let value = propertyValue?.object?.value

        let content = String(value)
        
        if(propertyID.includes('url') || propertyID.includes('Url')){
            content = `<a href="${value}">${value}</a>`
        }
        
        this.innerHTML = content
        
    }


    
}

customElements.define("kr-value", KrElementValue);
