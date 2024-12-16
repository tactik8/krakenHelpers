
import { krakenHelpers as h } from "../../../krakenHelpers/krakenHelpers.js";



// Create a class for the element
export class KrElementInput extends HTMLElement {
    constructor() {
        super();

        this.id = String(crypto.randomUUID())
        this._template = `

            <label for="lname">Last name:</label>
            <input type="text" id="lname" name="lname"><br><br>
          
        `

    }




    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------

    init(){

        this._initContent()
        this._initValueListener()


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


    connectedCallback() {


        this.init()


    }

    disconnectedCallback() {}

    adoptedCallback() {}

    attributeChangedCallback(name, oldValue, newValue) {

    }
}

customElements.define("kr-input2", KrElementInput);
