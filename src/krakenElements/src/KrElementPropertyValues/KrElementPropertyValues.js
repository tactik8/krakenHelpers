import { krakenHelpers as h } from "../../../krakenHelpers/krakenHelpers.js";
import { krakenThingPropertyValueHelpers } from "../../../krakenHelpers/src/thing/src/krakenThingPropertyValueHelpers.js";

import { KrElementBase} from '../KrElementBase.js'





// Create a class for the element
export class KrElementPropertyValues extends KrElementBase {
    constructor() {
        super();

        this.classList.add('krElement')
        this.krClass = 'KrElementRecord';
        this.krType = 'krThing'

        this.initFlag = false;
        this._template = ''



    }


    init(){

        super.init()



    }



    async render(){

        let record = await this.record
        record = record.system || record
        this.innerHTML = h.html.propertyValues(record)
    }


}

customElements.define("kr-property-values", KrElementPropertyValues);
