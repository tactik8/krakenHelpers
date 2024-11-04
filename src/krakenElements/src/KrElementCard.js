

import { KrElementBase} from './KrElementBase.js'

import { krakenHelpers as h} from '../../krakenHelpers/krakenHelpers.js'





export class KrElementCard extends KrElementBase {
    constructor() {
        super();
        this._template = h.html.card()
    }

    

}

customElements.define("kr-card", KrElementCard);

