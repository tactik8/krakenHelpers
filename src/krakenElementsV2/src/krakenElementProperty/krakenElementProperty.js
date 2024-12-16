
import { KrElementBase} from '../krakenElementBase/krakenElementBase.js'



import { krakenHelpers as h} from '../../../krakenHelpers/krakenHelpers.js'

import { krakenClasses } from '../../../krakenClasses/krakenClasses.js'



// Create a class for the element
export class KrElementProperty extends KrElementBase {
    constructor() {
        super();

        this._templates = `
            <div class="container">
                {{# ${this.propertyID} }}
                    {{ ${this.propertyID} }}
                {{/ ${this.propertyID} }}
            </div>
            
        `

    }


    // -----------------------------------------------------
    //  Override render 
    // -----------------------------------------------------

    render(){

        let propertyID = this.propertyID

        let thing = this.thing

        if(h.isNull(thing)){
            return
        }
        
        let propertyValues = this.thing.getPropertyValues(propertyID)

        let innerContent = ''

        for(let pv of propertyValues){
            innerContent += `
    
                    <div>
                        <kr-value data-valueID="${pv?.['@id']}" data-propertyID="${propertyID}"></kr-value>
                    </div>
            `
        }

        let content = `
        
            <div class="container">
                ${innerContent}
            </div>
            
            `

        this.innerHTML = content
        
    }
    
    

    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------


}

customElements.define("kr-property", KrElementProperty);
