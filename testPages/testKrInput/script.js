
import { krakenHelpers as h } from "../../src/krakenHelpers/krakenHelpers.js";

import { krakenClasses as kc } from "../../src/krakenClasses/krakenClasses.js";

import { krakenTools as tools } from "../../src/krakenTools/krakenTools.js";

import { krakenElements as el } from "../../src/krakenElements/krakenElements.js"





function test() {


    let record =  {
        "@type": "Editor",
        "@id": "Editor1",
        "name": "Editor name1",
        "hasPart": [
            {
                "@type": "EditorPart",
                "@id": "EditorPart1",
                "text": "Generic content",
                "propertyID": 'pID1',
                "value": "Generic content",
            },
            {
                "@type": "EditorPart",
                "@id": "EditorPart2",
                "text": "Generic content",
                "propertyID": 'pID2',
                "value": "Generic content",
            },
            {
                "@type": "EditorPart",
                "@id": "EditorPart3",
                "text": "Generic content",
                "propertyID": 'pID3',
                "value": "Generic content",
            },
            {
                "@type": "EditorPart",
                "@id": "EditorPart4",
                "text": "Generic content",
                "propertyID": 'pID4',
                "value": "Generic content",
            }

        ]
    }

    record = h.thing.toThing(record)

    
    let engine = document.getElementsByTagName('kr-engine')?.[0]

    console.log('XXX')
    engine.set(record)
    console.log('yyy')


    
    //engine.renderThing(record)
    //console.log(engine._engine._templateDB)


    //let t = engine.get(record?.hasPart[2])
   

    //let r = engine._engine.renderThing(t)


}

test()
