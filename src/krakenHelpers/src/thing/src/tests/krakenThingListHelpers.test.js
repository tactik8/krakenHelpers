import { krakenThingListHelpers as h } from "../krakenThingListHelpers.js";

import { krakenThingSystemHelpers as system } from "../krakenThingSystemHelpers.js";

describe("krakenThingListHelpers", () => {


    
    
    let itemlist = {
        "@type": "ItemList",
        "@id": "ItemList0",
        "name": "ItemList0",
        "itemListElement": [
            {
                "@type": "ListItem",
                "@id": "ListItem0",
                "name": "ListItem0",
                "position": 0,
                "previousItem": null,
                "nextItem": {
                    "@type": "ListItem",
                    "@id": "ListItem1"
                },
                "item": {
                    "@type": "Thing",
                    "@id": "Thing0",
                    "name": "Thing0",
                    "url": "https://www.test.com/thing0"
                }
            },
            {
                "@type": "ListItem",
                "@id": "ListItem1",
                "name": "ListItem1",
                "position": 1,
                "previousItem":  {
                    "@type": "ListItem",
                    "@id": "ListItem0"
                },
                "nextItem": {
                    "@type": "ListItem",
                    "@id": "ListItem2"
                },
                "item": {
                    "@type": "Thing",
                    "@id": "Thing1",
                    "name": "Thing1",
                    "url": "https://www.test.com/thing1"
                }
            },
            {
                "@type": "ListItem",
                "@id": "ListItem2",
                "name": "ListItem2",
                "position": 2,
                "previousItem":  {
                    "@type": "ListItem",
                    "@id": "ListItem1"
                },
                "nextItem": {
                    "@type": "ListItem",
                    "@id": "ListItem3"
                },
                "item": {
                    "@type": "Thing",
                    "@id": "Thing2",
                    "name": "Thing2",
                    "url": "https://www.test.com/thing2"
                }
            },
            {
                "@type": "ListItem",
                "@id": "ListItem3",
                "name": "ListItem3",
                "position": 3,
                "previousItem":  {
                    "@type": "ListItem",
                    "@id": "ListItem2"
                },
                "nextItem": null,
                "item": {
                    "@type": "Thing",
                    "@id": "Thing3",
                    "name": "Thing3",
                    "url": "https://www.test.com/thing3"
                }
            }
        ]
    }

    let record = system.toThing(itemlist)



    test("is valid", () => {

        expect(h.isValid(record)).toBe(true);

        expect(h.isEmpty(record)).toBe(false);

        expect(h.length(record)).toBe(4);

    })

    test("clone", () => {

        
        let il1 = h.clone(record)

        expect(h.isSame(il1, record)).not.toBe(true);
        
        expect(h.isValid(il1)).toBe(true);

        expect(h.isEmpty(il1)).toBe(false);

        expect(h.length(il1)).toBe(4);
        
        expect(h.length(record)).toBe(4);

        il1 = h.delete(il1, {
            "name": "ListItem0"
        })

        expect(h.length(il1)).toBe(3);
        expect(h.length(record)).toBe(4);
        
    })
    
    
    test("basic", () => {


        let il1 = h.clone(record)

        let item = {
                "@context": "https://schema.org/",
                "@type": "Thing",
                "@id": "thing4",
                "name": "thing4"
            }

        il1 = h.insert(il1, item)
        
        expect(h.isValid(il1)).toBe(true);

        expect(h.isEmpty(il1)).toBe(false);

        expect(h.length(il1)).toBe(5);
    
        
        il1 = h.delete(il1, {item: {'@type': "Thing", '@id': "Thing0"}})

        expect(h.isValid(il1)).toBe(true);

        expect(h.isEmpty(il1)).toBe(false);

        expect(h.length(il1)).toBe(4);

   });

});



