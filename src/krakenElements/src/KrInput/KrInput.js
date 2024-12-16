import { krakenHelpers as h } from "../../../krakenHelpers/krakenHelpers.js";
import { krakenThingPropertyValueHelpers } from "../../../krakenHelpers/src/thing/src/krakenThingPropertyValueHelpers.js";

import { KrElementBase} from '../KrElementBase.js'



import { setupEventListener } from './src/events.js'


// Create a class for the element
export class KrInput extends KrElementBase {
    constructor() {
        super();

        this.classList.add('krElement')
        this.classList.add('krProperty')
        this.classList.remove('krThing')
        this.krClass = 'KrElementInput';
        this.krType = 'krProperty'
        
        this.initFlag = false;
        this._template = ''
        this.id = h.base.uuid.new()

        this.debounceTimer = null
        this.debounceInProgress = false

    }


    init(){

        super.init()

        this.inputElementID = 'element_' + h.base.uuid.new()
        this.cursorElementID = 'element_' + h.base.uuid.new()

        
        

        this.innerHTML = `

        <div class="row">
             <div class="col border">
                <div id="${this.inputElementID}" contenteditable="true" class="container border"> 
                </div>
            </div>
            <div id="${this.cursorElementID}" class="col col-1 border">
            </div>
        </div>
        `

        
        //setupEventListener(this.inputElement, this.callbackFn.bind(this))

        h.dom.thingObserver.set(this.inputElement, this.callbackFn.bind(this))
        
        
    }

    get value(){
        return this.inputElement.innerHTML
    }

    set value(value){
        this.inputElement.innerHTML = value
    }

    get inputElement(){

        return this.querySelector('#' + this.inputElementID)
        
    }

    get cursorPositionElement(){

        return this.querySelector('#' + this.cursorElementID)

    }

    get cursorPosition(){
        return h.dom.cursor.get(this.inputElement)
    }

    set cursorPosition(value){
        h.dom.cursor.set(this.inputElement, value)
    }

    callbackFn(action){




        if(action?.['@type'] == 'ReplaceAction'){
            this.saveValueToEngine()
        }

        
        this.cursorPositionElement.innerHTML = this.cursorPosition
        
    }

    


    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------


    setDebounceTimer(){

        this.debounceTimer = new Date()
        
    }

    async waitDebounce(){



        let duration = 0
        let now

        while(duration < 3){

            now = new Date()
            duration = (now.getTime() - this.debounceTimer.getTime()) / 1000;
            await h.wait(1)
            
        }
        
       
        return
        
      
    }
    
    async saveValueToEngine(){

        // Handle debounce
        if(this.debounceInProgress == true){
            this.setDebounceTimer()
            return
        } else {
            this.setDebounceTimer()
            this.debounceInProgress = true
        }


        await this.waitDebounce()

        
        let record = await this.record
        record.set(this.propertyID, this.value)

        this.debounceInProgress = false
    }


    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------

    
    async render(){


        let record = await this.record
        let value = h.thing.value.get(record, this.propertyID)


        if(value == this.value){
            return 
        }
        
        if(h.isNotNull(value)){
            this.value = value
        } else {
            this.value = ''
        }
        
    }
    

}

customElements.define("kr-input", KrInput);
