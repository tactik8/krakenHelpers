
import { KrElementBase} from '../krakenElementBase/krakenElementBase.js'



import { krakenHelpers as h} from '../../../krakenHelpers/krakenHelpers.js'

import { krakenClasses } from '../../../krakenClasses/krakenClasses.js'



// Create a class for the element
export class KrElementLine extends KrElementBase {
    constructor() {
        super();

        this._template = h.html.line()
        

    }



    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------


}

customElements.define("kr-line", KrElementLine);
