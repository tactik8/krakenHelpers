
import { krakenHelpers as h } from "../../src/krakenHelpers/krakenHelpers.js";

import { krakenClasses as kc } from "../../src/krakenClasses/krakenClasses.js";

import { krakenTools as tools } from "../../src/krakenTools/krakenTools.js";

import { krakenElements as el } from "../../src/krakenElements/krakenElements.js"





function test() {


    let element = document.getElementById('test1')


    
    
    let records = []
    records.push(h.base.test.creativeWork())
    records.push(h.base.test.offerCatalog())
    records.push(h.base.test.product())
    records.push(h.base.test.howTo())
    records.push(h.base.test.offerCatalog())
    records.push(h.base.test.potentialAction())
    
    element.innerHTML = h.html.landingPage(records)

}

test()
