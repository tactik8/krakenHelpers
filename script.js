
import { krakenHelpers as h } from "./src/krakenHelpers/krakenHelpers.js"

import { krakenClasses } from "./src/krakenClasses/krakenClasses.js"




function test(){


    let things = new krakenClasses.KrThings()
    
    
    let itemlist = h.base.test.itemList(4)

    let record = h.base.test.thing(10)
    
    let actionRecord = {
            "@type": "InsertAction",
            "@id": "action_1",
            "name": "action_1",
            "object": record, 
            "targetCollection": itemlist
        }


   

    things.set(itemlist)


    let t = things.get(itemlist)
  
    

    let ile = t.get('itemListElement')

    console.log('t', ile.length)

    let t1 = ile[0]
    t = h.thing.list.delete(t, ile[0])

    
    ile = t.get('itemListElement')
    console.log('t', ile.length)

    t = h.thing.list.insert(t, t1, 0)
    ile = t.get('itemListElement')
    console.log('t', ile.length)

}

test()