import { krakenHelpers as h } from "../../../krakenHelpers/krakenHelpers.js";
import { krakenThingPropertyValueHelpers } from "../../../krakenHelpers/src/thing/src/krakenThingPropertyValueHelpers.js";

import { KrElementBase} from '../KrElementBase.js'





// Create a class for the element
export class KrElementColorInput extends KrElementBase {
    constructor() {
        super();

        this.classList.add('krElement')
        this.krClass = 'KrElementColorInput';
        this.krType = 'krValue'

        this.initFlag = false;
        this._template = ''



    }


    init(){

        super.init()



    }



    async render(){

        let record = await this.record
        record = record.record || record
        this.innerHTML = h.html.record(record)
    }


}

customElements.define("kr-color-input", KrElementColorInput);
