
import { krakenHelpers as h } from "../../src/krakenHelpers/krakenHelpers.js";

import { krakenClasses as kc } from "../../src/krakenClasses/krakenClasses.js";

import { krakenTools as tools } from "../../src/krakenTools/krakenTools.js";

import { krakenElements as el } from "../../src/krakenElements/krakenElements.js"





function test() {


    let record1 = {
        "@context": "https://schema.org/",
        "@type": "Thing",
        "@id": "thing1",
        "name": "thing1"
    }

    let record2 = {
            "@context": "https://schema.org/",
            "@type": "Thing",
            "@id": "thing2",
            "name": "thing2"
        }

    let record3 = {
            "@context": "https://schema.org/",
            "@type": "ListItem",
            "@id": "ListItem1",
            "name": "ListItem1"
        }



    record1 = h.thing.toThing(record1)
    record2 = h.thing.toThing(record2)
    record3 = h.thing.toThing(record3)

    let engine = document.getElementsByTagName('kr-engine')?.[0]

    let canvas1 = document.getElementById('canvas1')
    engine.set(record1)
    engine.set(record2)
    engine.set(record3)



    //let edge1 = document.getElementById('edge1')

   // canvas1.appendChild(edge1)

   // edge1.linkFromElement = document.getElementById('node1')

   // edge1.linkToElement = document.getElementById('node2')



}

test()
