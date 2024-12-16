

import { template } from './src/template.js'
import { krakenHelpers as h } from "../../../krakenHelpers/krakenHelpers.js";

import { KrElementBase} from '../KrElementBase.js'

import { makeDraggable} from './src/dragEvent.js'

import { makeLinkFrom } from './src/linkEvent.js'


export class KrElementNode extends KrElementBase {
    constructor() {
        super();


        this.krClass = 'KrNode';
        this.krType = 'krThing'
        this._template = template()
        this.style.position='absolute'

    }



    async init(){

        await super.init()
        makeDraggable(this, this.middleSection)
        makeLinkFrom(this.rightSection)
        
        
    }


    get leftSection(){
        return this.getSectionGeneric('krLeftSection')
    }

    get middleSection(){
        return this.getSectionGeneric('krMiddleSection')
    }
    
    get rightSection(){
        return this.getSectionGeneric('krRightSection')
    }


}

customElements.define("kr-node", KrElementNode);

