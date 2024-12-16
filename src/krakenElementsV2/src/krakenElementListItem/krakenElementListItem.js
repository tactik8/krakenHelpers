
import { KrElementBase} from '../krakenElementBase/krakenElementBase.js'



import { krakenHelpers as h} from '../../../krakenHelpers/krakenHelpers.js'

import { krakenClasses } from '../../../krakenClasses/krakenClasses.js'



// Create a class for the element
export class KrElementListItem extends KrElementBase {
    constructor() {
        super();

        this._template = getTemplate()


    }



    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------


}

customElements.define("kr-list-item", KrElementListItem);




function getTemplate(){

    let classes = ''
    let prefix = ''

    
    return `

        <div class=" mt-1 mb-1 ${classes || ''}">
            <nav>
                <div class="row d-flex align-items-center">

                    <div class="col col-auto order-1 krSelected justify-content-center text-center" >
                        <div class="form-check justify-content-center text-center">
                            <input 
                            class="form-check-input checkboxes"
                            type="checkbox" 
                            value="" 
                            id="checked_{{${prefix}item.@type}}_{{${prefix}item.@id}}" 
                            name="checked_{{${prefix}item.@type}}_{{${prefix}item.@id}}" 
                            >
                        </div>
                    </div>


                    <div class="col col-1 order-2 order-sm-3 text-center">
                        
                        <kr-property data-propertyID="position"></kr-property>
                        
                    </div>


                     <div class="col col-12 col-sm-1 flex-sm-grow-1 order-5 order-sm-3">
                            
                            <kr-generic 
                            data-templateID="cardHorizontal"
                            data-record-type="{{${prefix}item.@type}}" 
                            data-record-id="{{${prefix}item.@id}}"
                            >
                            </kr-generic>
                         
                    </div>


                    <div class="col col-auto order-3 order-sm-4 ms-auto text-end">

                        <!-- action menu -->
                    </div>

                </div> 

                <div class="row">

                    <div class="col col-sm-3">
                    </div>

                    <div class="col col-sm-3">
                    </div>

                    <div class="col col-sm-3">
                    </div>

                </div> 
            </nav>
        </div>


    `

}