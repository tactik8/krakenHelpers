
import { KrElementBase} from '../krakenElementBase/krakenElementBase.js'



import { krakenHelpers as h} from '../../../krakenHelpers/krakenHelpers.js'

import { krakenClasses } from '../../../krakenClasses/krakenClasses.js'



// Create a class for the element
export class KrElementList extends KrElementBase {
    constructor() {
        super();

        this._template = getTemplate()


    }



    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------


}

customElements.define("kr-list", KrElementList);





function getTemplate(){

    return `

        <div class="container checkboxParent">

            <div class="row border-top border-bottom align-items-center" >


                <div class="col col-auto ">
                    <div class="form-check justify-content-center text-center">
                        <input 
                        class="form-check-input" 
                        type="checkbox" 
                        value="" 
                        onClick="console.log('click'); for(let i of this.closest('.checkboxParent').parentElement.querySelectorAll('.checkboxes')){i.checked = this.checked};"
                        >
                    </div>

                </div>

                <div class="col col-auto ">
                    {{name}}
                </div>

                <div class="col col-auto ms-auto">
                    <!-- action menu -->
                </div>

            </div>


            {{ #itemListElement }}


                   <kr-list-item 
                   data-record-type="{{itemListElement.@type}}" 
                   data-record-id="{{itemListElement.@id}}"
                   >
                   
                   </kr-list-item>


            {{ /itemListElement }}


            <div class="row mt-2 mb-2 border-bottom align-items-center">

            </div>

        </div>


    `

}