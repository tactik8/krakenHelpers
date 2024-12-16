
import { krakenHelpers as h } from "../../src/krakenHelpers/krakenHelpers.js";

import { krakenClasses as kc } from "../../src/krakenClasses/krakenClasses.js";

import { krakenTools as tools } from "../../src/krakenTools/krakenTools.js";

import { krakenElements as el } from "../../src/krakenElements/krakenElements.js"





function test() {

    let engine = new kc.KrElementEngine()
    engine.init()

    let itemlist0 = h.base.test.getItemList(5,0)

    let itemlist1 = h.base.test.getItemList(5, 1)

    engine.set(itemlist0)
    engine.set(itemlist1)
    
    h.element.event.dragdrop.addCss()   
    h.element.event.dragdrop.draggable.set(engine)   
    h.element.event.dragdrop.dropzone.set(engine)   

    
    

    
}
test()
