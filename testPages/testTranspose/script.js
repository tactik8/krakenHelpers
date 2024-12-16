
import { krakenHelpers as h } from "../../src/krakenHelpers/krakenHelpers.js";

import { krakenClasses as kc } from "../../src/krakenClasses/krakenClasses.js";

import { krakenTools as tools } from "../../src/krakenTools/krakenTools.js";

import { krakenElements as el } from "../../src/krakenElements/krakenElements.js"





function test() {


    let record = h.base.test.potentialAction()

    record = h.base.heading.addHeadings(record)

    console.log('r', record)
    let template = h.html.form(record)

    let element = document.getElementById('test1')
    let content = h.base.template.get(template, record)
    element.innerHTML = content
    



}
test()
