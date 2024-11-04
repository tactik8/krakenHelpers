import { krakenThingListItemHelpers as lih } from "../krakenThingListItemHelpers.js";

import { krakenThingSystemHelpers as system } from "../krakenThingSystemHelpers.js";

// h

describe("krakenThingListItemHelpers", () => {
    let thing = {
        "@context": "https://schema.org/",
        "@type": "Thing",
        "@id": "thing1",
        name: "thing1",
    };

    thing = system.toThing(thing);

    let listItemEmpty = {
        "@type": "ListItem",
        "@id": "ListItemEmpty",
        name: "ListItemEmpty",
        position: 0,
        previousItem: null,
        nextItem: {
            "@type": "ListItem",
            "@id": "ListItem1",
        },
    };
    listItemEmpty = system.toThing(listItemEmpty);

    let listItem1 = {
        "@type": "ListItem",
        "@id": "ListItem0",
        name: "ListItem0",
        position: 0,
        previousItem: null,
        nextItem: {
            "@type": "ListItem",
            "@id": "ListItem1",
        },
        item: {
            "@type": "Thing",
            "@id": "Thing0",
            name: "Thing0",
            url: "https://www.test.com/thing0",
        },
    };

    listItem1 = system.toThing(listItem1);
    let listItem2 = {
        "@type": "ListItem",
        "@id": "ListItem1",
        name: "ListItem1",
        position: 1,
        previousItem: {
            "@type": "ListItem",
            "@id": "ListItem0",
        },
        nextItem: null,
        item: {
            "@type": "Thing",
            "@id": "Thing2",
            name: "Thing2",
            url: "https://www.test.com/thing1",
        },
    };
    listItem2 = system.toThing(listItem2);

    test("clone", () => {
        let li1 = lih.clone(listItem1);

        expect(li1?.["@type"]).toEqual(listItem1?.["@type"]);
        expect(li1?.["@id"]).not.toEqual(listItem1?.["@id"]);

        expect(li1?.["item"]).toStrictEqual(listItem1?.["item"]);
        
    });

    test("isValid", () => {
        // Valid

        let li1 = JSON.parse(JSON.stringify(listItem1))
        let li2 = JSON.parse(JSON.stringify(listItem2))

        let t1 = JSON.parse(JSON.stringify(thing))
        
        expect(lih.isValid(li1)).toBe(true);
        expect(lih.isValid(t1)).toBe(false);
    });

    test("isEmpty", () => {
        let li1 = JSON.parse(JSON.stringify(listItem1))
        let li2 = JSON.parse(JSON.stringify(listItem2))
        let liEmpty = JSON.parse(JSON.stringify(listItemEmpty))
       

        // Empty
        expect(lih.isEmpty(li1)).toBe(false);
        expect(lih.isEmpty(liEmpty)).toBe(true);
        
    });

    test("position", () => {
        let li1 = JSON.parse(JSON.stringify(listItem1))
        let li2 = JSON.parse(JSON.stringify(listItem2))

        expect(lih.position.get(li1)).toBe(0);
        expect(lih.position.get(li2)).toBe(1);

        lih.position.set(li1, 5)
        expect(lih.position.get(li1)).toBe(5);
        expect(lih.position.get(li2)).toBe(1);
    });


    test("sort", () => {
        let li1 = JSON.parse(JSON.stringify(listItem1))
        let li2 = JSON.parse(JSON.stringify(listItem2))

        expect(lih.sort([li2, li1])?.[0]?.['name']).toEqual('ListItem0')
       

    });


    test("filter", () => {
        let li1 = JSON.parse(JSON.stringify(listItem1))
        let li2 = JSON.parse(JSON.stringify(listItem2))

        let elements = [li1, li2]
        let conditions = {
            "item.name": "Thing0"
        }
        
        expect(lih.filter(elements, conditions).length).toEqual(1)
        
    });

    test("first", () => {
        let li1 = JSON.parse(JSON.stringify(listItem1))
        let li2 = JSON.parse(JSON.stringify(listItem2))

        let elements = [li1, li2]
        

        expect(lih.first(elements)?.name).toEqual('ListItem0')

    });

    test("last", () => {
        let li1 = JSON.parse(JSON.stringify(listItem1))
        let li2 = JSON.parse(JSON.stringify(listItem2))

        let elements = [li1, li2]


        expect(lih.last(elements)?.name).toEqual('ListItem1')

    });
    
    
});
