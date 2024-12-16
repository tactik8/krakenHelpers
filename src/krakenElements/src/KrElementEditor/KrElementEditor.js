import { template } from "./src/template.js"

import { cssTemplate } from "./src/cssTemplate.js"


import { krakenHelpers as h } from "../../../krakenHelpers/krakenHelpers.js";

import { KrElementBase} from '../KrElementBase.js'


export class KrElementEditor extends KrElementBase {
    constructor() {
        super();


        this.krClass = 'KrElementEditor';
        this.krType = 'krThing'
        this._template = template()
       
        h.base.element.style.add(cssTemplate())
        
    }


    


    

    async initRecord(){
        
       
        // If missing record, create one
      

        this._record = {
            "@type": "Editor",
            "@id": "a05426ab-108f-4c41-8d06-548c60da2fcc",
            "name": "Editor name1",
            "hasPart": [
                {
                    "@type": "EditorPart",
                    "@id": "EditorPart1",
                    "text": "Generic content",
                    "propertyID": null,
                    "value": "Generic content",
                },
                {
                    "@type": "EditorPart",
                    "@id": "EditorPart2",
                    "text": "Generic content",
                    "propertyID": null,
                    "value": "Generic content",
                },
                {
                    "@type": "EditorPart",
                    "@id": "EditorPart3",
                    "text": "Generic content",
                    "propertyID": null,
                    "value": "Generic content",
                },
                {
                    "@type": "EditorPart",
                    "@id": "EditorPart4",
                    "text": "Generic content",
                    "propertyID": null,
                    "value": "Generic content",
                }
                                    
            ]
        }
            
        
        
        // temp
        //this.initShowRecord()



    }


    initShowRecord(){
        /**
         *    Temp
         */


        
        this.actionSection.addEventListener('click', event => {

            this.notesSection.innerHTML = JSON.stringify(this.record, null, 4)

        })



    }

   
    // -----------------------------------------------------
    //  Element parts
    // -----------------------------------------------------

    get hasPartSection(){

        return this.getSectionGeneric('krHasPart')
    }

    get notesSection(){

        return this.getSectionGeneric('krNotesSection')
    }

    get actionSection(){

        return this.getSectionGeneric('krActionSection')
    }


   

}

customElements.define("kr-editor", KrElementEditor);

