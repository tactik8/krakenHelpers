
import { krakenHelpers as h } from "./src/krakenHelpers/krakenHelpers.js"

import { krakenClasses } from "./src/krakenClasses/krakenClasses.js"


function test() {


    let r1 = h.base.test.getThing(0)

    let r2 = h.base.test.getThing(0)
    r2['name2']='testname2'


    let t1 = new krakenClasses.KrThing(r1)




    
    let t2 = new krakenClasses.KrThing(r2)

  
    console.log('---')
    console.log(t1.record, t2.record)

    let things = new krakenClasses.KrThings()

    things.set(t1)

    
    things.set(t2)

    console.log('---')
    console.log(t1.record, t2.record)



    let action00 = {
        "@type": "Action",
        "@id": "action_00",
        "name": "action_00",
        "object": {
            "@type": "Thing",
            "@id": "thing0",
            "name-output": "New name"
        }
    }

    things.set(action00)


    let result = things.execute(action00)

    console.log('res', result)
    
    
}

test()