import { KrElementBase } from "../krakenElementBase/krakenElementBase.js";

import { krakenHelpers as h } from "../../../krakenHelpers/krakenHelpers.js";

import { krakenClasses } from "../../../krakenClasses/krakenClasses.js";

// Create a class for the element
export class KrElementForm extends KrElementBase {
    constructor() {
        super();

        this._template = null;
        this._keys = null
        this._labels = null
    }

    async init() {
        await super.init();
    }


    get keys(){
        let v =  this.getClosestAttribute('data-keys')
        if(h.isNotNull(v)){
            v = v.replaceAll("'", '"')
            console.log(v)
            this._keys = JSON.parse(v)
        }
        return this._keys
        
    }

    get labels(){
        let v =  this.getClosestAttribute('data-labels')
        if(h.isNotNull(v)){
            console.log(v)
            v = v.replaceAll("'", '"')
            this._labels = JSON.parse(v)
        }
        return this._labels

    }

    
    get template(){

        let keys = this.keys
        let labels = this.labels || keys
        
        let innerTemplate = ''

        for(let i=0; i< keys.length; i++){
            
            innerTemplate += `
            
                <div class="mb-3"">
                    <kr-input data-propertyID="${keys[i]}" data-label="${labels[i]}">
                    </kr-input>
                </div>
                `
        }

        let template = `

            <form>
              <div class="mb-3">
                ${innerTemplate}
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        
        `
        return template
        
    }
    // -----------------------------------------------------
    //  Comment
    // -----------------------------------------------------
}

customElements.define("kr-form", KrElementForm);
