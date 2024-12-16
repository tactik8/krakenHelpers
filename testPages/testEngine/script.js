import { krakenHelpers as h } from "../../src/krakenHelpers/krakenHelpers.js";

import { krakenClasses as kc, krakenClasses } from "../../src/krakenClasses/krakenClasses.js";

import { krakenTools as tools } from "../../src/krakenTools/krakenTools.js";

import { krakenElements as el } from "../../src/krakenElements/krakenElements.js";

function test() {
    let record = {
        "@type": "Thing",
        "@id": "thing1",
        name: "thing1",
        name2: "thing1_name2",
        other: [
            {
                "@type": "Thing",
                "@id": "thing21",
                name: "thing21",
                other: [
                    {
                        "@type": "Thing",
                        "@id": "thing121",
                        name: "thing121",
                    },
                    {
                        "@type": "Thing",
                        "@id": "thing122",
                        name: "thing122",
                    },
                ],
            },
            {
                "@type": "Thing",
                "@id": "thing22",
                name: "thing22",
                other: [
                    {
                        "@type": "Thing",
                        "@id": "thing221",
                        name: "thing221",
                    },
                    {
                        "@type": "Thing",
                        "@id": "thing222",
                        name: "thing222",
                    },
                ],
            },
        ],
    };

    //let engine = new krakenClasses.KrElementEngine()

    let engine = document.getElementsByTagName('kr-engine')?.[0]

    
    let element1 = document.getElementById("thing1")

    let element2 = document.getElementById("thing2")


    let t = `<div class="krProperty" data-propertyID="name2"></div>`
    console.log('zz')
    engine.addTemplate('template2', t)
    console.log('xx')

    console.log(engine._engine._templateDB)
    engine.set(record)


    return
    console.log('--- template ---')
    console.log(engine._engine._templateDB?.['template2'])

    
    
    console.log('--- template ---')
    console.log(JSON.stringify(engine._templateDB, null, 4))

    
    record.name = 'thing_revised_1'
    engine.set(record)

    record.other[0].name = 'thing21_revised'
    engine.set(record)

    record.other.push({
        "@type": "Thing",
        "@id": "thing23",
        name: "thing23",
    })
    engine.set(record)
    
    //let engine = document.getElementsByTagName("kr-engine")?.[0];

    //engine.set(record);

    //console.log(JSON.stringify(engine._engine, null, 4))
    
}

test();
