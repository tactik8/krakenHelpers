
import { KrElementBase} from '../krakenElementBase/krakenElementBase.js'



import { krakenHelpers as h} from '../../../krakenHelpers/krakenHelpers.js'

import { krakenClasses } from '../../../krakenClasses/krakenClasses.js'



// Create a class for the element
export class KrElementStarInput extends KrElementBase {
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
        <div class="rating">
                <input type="radio" id="star5" name="rating" value="5">
				<label for="star5">&#9733;</label>
				<input type="radio" id="star4" name="rating" value="4">
				<label for="star4">&#9733;</label>
				<input type="radio" id="star3" name="rating" value="3">
				<label for="star3">&#9733;</label>
				<input type="radio" id="star2" name="rating" value="2">
				<label for="star2">&#9733;</label>
				<input type="radio" id="star1" name="rating" value="1">
				<label for="star1">&#9733;</label>
        </div>
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
           
            return 
        }

        for(let inputElement of inputElements){
                
            inputElement.addEventListener('change', (event) =>{
    
                this.thing.set(this.propertyID, event.target.value)
    
            })
        }

    }

    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------


    async update(){

        let inputElements = this.querySelectorAll('input')

        let value = this.record?.[this.propertyID] || 0

        for(let inputElement of inputElements){

            if(inputElement.value == value){
                inputElement.checked = true
            } else {
                inputElement.checked = false
            }

            
            
        }
        

    }

}

customElements.define("kr-star-input", KrElementStarInput);
