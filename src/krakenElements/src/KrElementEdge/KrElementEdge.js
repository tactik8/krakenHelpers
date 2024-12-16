


import { krakenHelpers as h } from "../../../krakenHelpers/krakenHelpers.js";

import { KrElementBase} from '../KrElementBase.js'
import { linkElements} from './src/link.js'

export class KrElementEdge extends KrElementBase {
    constructor() {
        super();


        this.krClass = 'KrEdge';
        this.krType = 'krThing'
        this._template = ''

        this.linkFromElement = null
        this.linkToElement = null

        this.linkFromThing = null
        this.linkToThing = null

    }


    get linkFrom(){
        
    }

    set linkFrom(element){
        this.linkFromElement = element

    }

    get linkTo(){

    }

    set linkTo(element){
        this.linkToElement = element
       // linkElements(this.linkFromElement, this.linkToElement)
        
    }




}

customElements.define("kr-edge", KrElementEdge);

