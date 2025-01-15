
import { krakenHelpers as h } from '../../src/krakenHelpers/krakenHelpers.js'

import { krakenClasses as kc } from "../../src/krakenClasses/krakenClasses.js";

import { krakenTools as tools } from "../../src/krakenTools/krakenTools.js";

import { krakenElements  } from "../../src/krakenElementsV3/krakenElements.js"




function test() {

    let engine = new krakenElements.KrElementEngine()


    engine.init()
    
    let record = {
            "@context": "https://schema.org/",
            "@type": "Thing",
            "@id": "thing1",
            "name": "thing1",
            "description": "Placeholder text",
            "image": {
                    "@context": "https://schema.org/",
                    "@type": "ImageObject",
                    "@id": "image1",
                    "name": "image_1",
                    "contentUrl": "https://placehold.co/600x400"
                }
        }
    engine.record.set(record)

    console.log('done')



}

test()
