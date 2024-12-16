import { KrElementBase } from "../krakenElementBase/krakenElementBase.js";

import { krakenHelpers as h } from "../../../krakenHelpers/krakenHelpers.js";

import { krakenClasses } from "../../../krakenClasses/krakenClasses.js";

// Create a class for the element
export class KrElementActionButton extends KrElementBase {
    constructor() {
        super();


        let prefix = ''

        
        this._template = `


            <form>
            
                <input 
                type="hidden" 
                id="@type" 
                name="item.@type" 
                value="{{${prefix}item.@type}}"
                >
                
                <input 
                type="hidden" 
                id="@id" 
                name="@id" 
                value="{{${prefix}item.@id}}"
                >
        

        
                <button 
                type="submit" 
                class="btn "
                >

                    {{#image}}
                        <span>
                            <img src="{{_headingImage}}" class="" alt="..." style="max-width:22px">
                        </span>
                    {{/image}}

                    <span class="ms-3">
                        {{name}}
                    </span>
                        
                </button>
            
            </form>


    `;
    }


    // -----------------------------------------------------
    //  init 
    // -----------------------------------------------------

    async init(){

        await super.init()
        this._initFormSubmitEvent()
        
        
    }


    _initFormSubmitEvent(){

        let form = this.querySelector('form')
        form.addEventListener('submit', async (event) =>{

            event.preventDefault();
            //window.history.back();
            console.log('submit')
           
       
        })
        
    }
    

    // -----------------------------------------------------
    //  Comment
    // -----------------------------------------------------
}

customElements.define("kr-action-button", KrElementActionButton);
