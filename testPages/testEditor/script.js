import { krakenHelpers as h } from "../../src/krakenHelpers/krakenHelpers.js";

import { krakenClasses as kc } from "../../src/krakenClasses/krakenClasses.js";

import { krakenTools as tools } from "../../src/krakenTools/krakenTools.js";

import { krakenElements } from "../../src/krakenElementsV3/krakenElements.js";
import { krakenThing } from "../../src/krakenClasses/src/KrThing.js";

function test() {
    let engine = new krakenElements.KrElementEngine();

    engine.init();

    let record = {
        "@type": "ItemList",
        "@id": "itemlist0",
        name: "itemlist0",
        other: {
                "@context": "https://schema.org/",
                "@type": "Thing",
                "@id": "otherthing",
                "name": "otherthing"
            },
        itemListElement: [
            {
                "@type": "ListItem",
                "@id": "listitem0",
                name: "ListItem0",
                position: 0,
                previousItem: null,
                nextItem: {
                    "@type": "ListItem",
                    "@id": "ListItem1",
                },
                item: {
                    "@type": "Article",
                    "@id": "article0",
                    name: "article0",
                    description: "Article 0",
                    url: "https://www.test.com/article0",
                },
            },
            {
                "@type": "ListItem",
                "@id": "listitem1",
                name: "ListItem1",
                position: 1,
                previousItem: {
                    "@type": "ListItem",
                    "@id": "ListItem0",
                },
                nextItem: {
                    "@type": "ListItem",
                    "@id": "ListItem2",
                },
                item: {
                    "@type": "Article",
                    "@id": "article1",
                    name: "article1",
                    description: "Article 1",
                    url: "https://www.test.com/article1",
                },
            },
            {
                "@type": "ListItem",
                "@id": "listitem2",
                name: "ListItem2",
                position: 2,
                previousItem: {
                    "@type": "ListItem",
                    "@id": "ListItem1",
                },
                nextItem: {
                    "@type": "ListItem",
                    "@id": "ListItem3",
                },
                item: {
                    "@type": "Article",
                    "@id": "article2",
                    name: "article2",
                    description: "Article 2",
                    url: "https://www.test.com/article2",
                },
            },
            {
                "@type": "ListItem",
                "@id": "listitem3",
                name: "ListItem3",
                position: 3,
                previousItem: {
                    "@type": "ListItem",
                    "@id": "ListItem2",
                },
                nextItem: null,
                item: {
                    "@type": "Article",
                    "@id": "article3",
                    name: "article3",
                    description: "Article 3",
                    url: "https://www.test.com/article3",
                },
            },
        ],
    };
    engine.record.set(record);

    console.log("done");

    let t = engine.getThing(record);

    let newItem = {
        "@type": "ListItem",
        "@id": "listitem10",
        name: "listitem" + String(10),
        item: {
            "@context": "https://schema.org/",
            "@type": "Article",
            "@id": "article10",
            name: "article10",
            description: "article10",
        },
    };

    t.insert(newItem, 0);

   

    //
    let button = document.getElementById("testbutton");
    let count = 20;
    button.addEventListener("click", (event) => {
        event.preventDefault();

        console.log('*********** Click ************ ')
        let newItem = {
            "@type": "ListItem",
            "@id": "listitem" + String(count),
            name: "listitem" + String(count),
            item: {
                "@context": "https://schema.org/",
                "@type": "Article",
                "@id": "article" + String(count),
                description: "article" + String(count),
                name: "article" + String(count),
            },
        };
        let t = engine.getThing(record);
        t.insert(newItem);
        count += 1;
    });
}

test();
