
import { KrElementBase} from '../krakenElementBase/krakenElementBase.js'



import { krakenHelpers as h} from '../../../krakenHelpers/krakenHelpers.js'

import { krakenClasses } from '../../../krakenClasses/krakenClasses.js'



// Create a class for the element
export class KrElementGeneric extends KrElementBase {
    constructor() {
        super();

        this._template = null

    }


    async init(){

      this._initTemplate()
      await super.init()
      
    }

  _initTemplate(){
    /**
     * Take actual content as template
     * 
     */

    if(h.isNotNull(this.templateID)){
      this.template = h.html[this.templateID]()
    } else {
      this._template = this.innerHTML
    }
    
    this.innerHTML = ''
    
  }

    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------


}

customElements.define("kr-generic", KrElementGeneric);
