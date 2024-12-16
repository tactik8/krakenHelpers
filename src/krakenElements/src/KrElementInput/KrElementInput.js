
import { krakenHelpers as h } from "../../../krakenHelpers/krakenHelpers.js";

import { KrElementBase} from '../KrElementBase.js'


// Create a class for the element
export class KrElementInput extends KrElementBase {
    constructor() {
        super();
        this.classList.add('krElement')
        this.classList.add('krProperty')
        this.classList.remove('krThing')
        this.krClass = 'KrElementInput';
        this.krType = 'krProperty'

        this.initFlag = false;
      
        this.id = h.base.uuid.new()

        this.debounceTimer = null
        this.debounceInProgress = false
        
        
        this._template = `

        
            <label for="lname">Last name:</label>
           
            <input type="text" id="lname" name="lname" value="{{name}}">
        
            <br><br>
          
        `

    }




    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------

    init(){

        super.init()
        //this._initContent()
        //this._initValueListener()


    }


    _initContent(){

        this.innerHTML = this._template
        
    }

    _initValueListener(){

        this.inputElement.addEventListener('change',  event => {

            let value = this.value
            
            
        })
        
        
        
    }
    
    // -----------------------------------------------------
    //  Properties 
    // -----------------------------------------------------


    get value(){

        return this.inputElement.value
        
    }

    set value(value){
        if(this.inputElement.value != value){
            this.inputElement.value = value
        }

        
    }

    
    // -----------------------------------------------------
    //  Sections 
    // -----------------------------------------------------

    
    get inputElement(){

        return this.querySelector('input')
        
    }



    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------


    
}

customElements.define("kr-input2", KrElementInput);
