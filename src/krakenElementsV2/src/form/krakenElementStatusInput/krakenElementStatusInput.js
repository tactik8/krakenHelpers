
import { KrElementBase} from '../krakenElementBase/krakenElementBase.js'



import { krakenHelpers as h} from '../../../krakenHelpers/krakenHelpers.js'

import { krakenClasses } from '../../../krakenClasses/krakenClasses.js'



// Create a class for the element
export class KrElementStatusInput extends KrElementBase {
    constructor() {
        super();

        this._template = `

        <style>
            .rating {
                margin-bottom: 20px;
                display: flex;
                flex-direction: row-reverse;
                justify-content: flex-end;
            }

            .rating input {
                display: none;
            }

            .rating label {
                font-size: 24px;
                cursor: pointer;
            }

            .rating label:hover,
            .rating label:hover ~ label {
                color: orange;
            }

            .rating input:checked ~ label {
                color: orange;
            }

        </style>
        
                <input type="checkbox" >
               
      
        `

    }


    async init(){

        await super.init()
        this._initInputValue()
        await this._initInputListener()
    }

    _initInputValue(){

         this.update()

    }

    async _initInputListener(){

        let inputElements = this.querySelectorAll('input')


        if(h.isNull(inputElements)){
            console.log('NOTHING TO INITIALIZE')
            console.log(this.innerHTML)
            return 
        }

        for(let inputElement of inputElements){

            inputElement.addEventListener('change', (event) =>{

                let actionStatus
                if(event.target.checked == true){
                    actionStatus = 'CompletedActionStatus'
                }
                if(event.target.checked == false && event.target.indeterminate == true){
                    actionStatus = 'PotentialActionStatus'
                }

                if(event.target.checked == false && event.target.indeterminate == false){
                    actionStatus = 'ActiveActionStatus'
                }
                

                
             
                console.log('change', event.target.checked)
               
                this.thing.set(this.propertyID, actionStatus)

            })
        }

    }

    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------


    async update(){

        let inputElement = this.querySelector('input')

        let value = this.record?.[this.propertyID] || 0

        if(h.isNull(value) || value == "PotentialActionStatus"){
            inputElement.checked = false
            inputElement.indeterminate = true
        }

        if( value == "ActiveActionStatus"){
            inputElement.checked = false
            inputElement.indeterminate = false
        }

        if( value == "CompletedActionStatus"){
            inputElement.checked = true
            inputElement.indeterminate = false
        }

        if( value == "FailedActionStatus"){
            inputElement.checked = false
            inputElement.indeterminate = true
        }

        
        

    }

}

customElements.define("kr-status-input", KrElementStatusInput);
