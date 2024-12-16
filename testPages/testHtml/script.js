

import { krakenHelpers as h } from '../../src/krakenHelpers/krakenHelpers.js'

import { krakenClasses as kc } from "../../src/krakenClasses/krakenClasses.js";

import { krakenTools as tools } from "../../src/krakenTools/krakenTools.js";

import { krakenElements as el } from "../../src/krakenElements/krakenElements.js"




function test() {

    let elementID
    let element 
    let record
    let template
    let content


    // Test 1

    elementID = 'test1'
    element = document.getElementById(elementID)
    record = h.base.test.article()
    record = h.base.heading.addHeadings(record)
    template = h.html.article()
    content = h.base.template.get(template, record)
    element.innerHTML = content



    // Test 2

    elementID = 'test2'
    element = document.getElementById(elementID)
    record = h.base.test.getPerson()
    record = h.base.heading.addHeadings(record)
    template = h.html.card()
    content = h.base.template.get(template, record)
    element.innerHTML = content


    // Test 3

    elementID = 'test3'
    element = document.getElementById(elementID)
    record = h.base.test.product()
    record = h.base.heading.addHeadings(record)
    template = h.html.features()
    content = h.base.template.get(template, record)
    element.innerHTML = content


    // Test 4

    elementID = 'test4'
    element = document.getElementById(elementID)
    record = h.base.test.creativeWork()
    record = h.base.heading.addHeadings(record)
    template = h.html.hero()
    content = h.base.template.get(template, record)
    element.innerHTML = content


    // Test 5

    elementID = 'test5'
    element = document.getElementById(elementID)
    record = h.base.test.howTo()
    record = h.base.heading.addHeadings(record)
    template = h.html.howTo()
    content = h.base.template.get(template, record)
    element.innerHTML = content

    // Test 6

    elementID = 'test6'
    element = document.getElementById(elementID)
    record = h.base.test.offerCatalog()
    record = h.base.heading.addHeadings(record)
    template = h.html.pricing()
    content = h.base.template.get(template, record)
    element.innerHTML = content


    // Test 7

    elementID = 'test7'
    element = document.getElementById(elementID)
    record = h.base.test.potentialAction()
    record = h.base.heading.addHeadings(record)
    template = h.html.callToAction()
    content = h.base.template.get(template, record)
    element.innerHTML = content

    
}

test()
