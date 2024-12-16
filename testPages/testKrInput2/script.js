
import { krakenHelpers as h } from "../../src/krakenHelpers/krakenHelpers.js";

import { krakenClasses as kc } from "../../src/krakenClasses/krakenClasses.js";

import { krakenTools as tools } from "../../src/krakenTools/krakenTools.js";

import { krakenElements as el } from "../../src/krakenElements/krakenElements.js"





function test() {


    let record = {
            "@context": "https://schema.org/",
            "@type": "Thing",
            "@id": "thing1",
            "name": "thing1"
        }


    record = h.thing.toThing(record)


    let engine = document.getElementsByTagName('kr-engine')?.[0]

    console.log('XXX')
    engine.set(record)
    console.log('yyy')


}

test()
