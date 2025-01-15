
import { krakenHelpers as h } from '../../src/krakenHelpers/krakenHelpers.js'

import { krakenClasses as kc } from "../../src/krakenClasses/krakenClasses.js";

import { krakenTools as tools } from "../../src/krakenTools/krakenTools.js";

import { krakenElements  } from "../../src/krakenElementsV3/krakenElements.js"




function test() {

    //let element = document.getElementById()
    let engine = new krakenElements.KrElementEngine()

    let record = {
            "@context": "https://schema.org/",
            "@type": "Thing",
            "@id": "thing1",
            "name": "thing1",
            "image": {
                    "@context": "https://schema.org/",
                    "@type": "ImageObject",
                    "@id": "image1",
                    "name": "image_1",
                    "contentUrl": "https://placehold.co/600x400"
                }
        }
    engine.record.set(record)

    
    let itemlist = h.base.test.getItemList(5, 1)
    itemlist.potentialAction = [{
            "@type": "Action",
            "@id": "action_1",
            "name": "action_1",
            "actionStatus": "completedActionStatus"
        }]

    engine.record.set(itemlist)


    let testButton = document.getElementById('testButton')
    testButton.addEventListener('click', event =>{

        let thing = engine.thing.get('Thing', 'thing1')
        thing.set('name', thing.get('name') + ' - test')
        console.log('push')
        
    })
    

}

test()
