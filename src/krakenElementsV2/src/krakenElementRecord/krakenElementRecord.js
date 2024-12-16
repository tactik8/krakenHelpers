
import { krakenHelpers as h} from '../../../krakenHelpers/krakenHelpers.js'

import { krakenClasses } from '../../../krakenClasses/krakenClasses.js'

import { KrElementBase} from '../krakenElementBase/krakenElementBase.js'


// Create a class for the element
export class KrElementRecord extends KrElementBase {
    constructor() {
        super();

        this._template = `

            {{# transpose: }}
                <dl class="row">

                    <dt class="col-sm-3">{{propertyID}}</dt>
                    {{#value}}
                        <dd class="col-sm-9">{{value}}</dt>
                    {{/value}}
                </dl>
            {{/}}
        
        `

    }

    
    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------


}

customElements.define("kr-record", KrElementRecord);
