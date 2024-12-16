import { krakenHelpers as h } from "../../src/krakenHelpers/krakenHelpers.js";

import { krakenElementsV2 as el } from "../../src/krakenElementsV2/krakenElementsV2.js";

async function test() {
    let engine = document.getElementsByTagName("kr-engine")?.[0];

    let record = {
        "@context": "https://schema.org/",
        "@type": "Thing",
        "@id": "thing1",
        name: "thing1",
        name2: ["test1","test2"],
        text: "text1",
        ratingValue: 4,
        actionStatus: "PotentialActionStatus",
        image: {
            "@context": "https://schema.org/",
            "@type": "ImageObject",
            "@id": "image1",
            name: "image_1",
            contentUrl: "https://placehold.co/600x400",
        },
        url: "https://www.example.com/",
    };


    let action = {
            "@type": "Action",
            "@id": "action1",
            "name": "action1",
            "image": {
                    "@type": "ImageObject",
                    "@id": "image1",
                    "name": "image_1",
                    "contentUrl": "https://placehold.co/600x400"
                }
        }


    let potentialActions = {
        "@type": "Thing",
        "@id": "potentialActions",
        "name": "potentialActions",
        "potentialAction": [
            {
                "@type": "Action",
                "@id": "action0",
                "name": "action0",
                "image": {
                        "@context": "https://schema.org/",
                        "@type": "ImageObject",
                        "@id": "image1",
                        "name": "image_1",
                        "contentUrl": "https://placehold.co/600x400"
                    }
            },
            {
                "@type": "Action",
                "@id": "action1",
                "name": "action1",
                "image": {
                        "@context": "https://schema.org/",
                        "@type": "ImageObject",
                        "@id": "image1",
                        "name": "image_1",
                        "contentUrl": "https://placehold.co/600x400"
                    }
            },
            {
                "@type": "Action",
                "@id": "action2",
                "name": "action2",
                "image": {
                        "@context": "https://schema.org/",
                        "@type": "ImageObject",
                        "@id": "image1",
                        "name": "image_1",
                        "contentUrl": "https://placehold.co/600x400"
                    }
            }

            
        ]
    }


    
    
    let record2 = {
        "@context": "https://schema.org/",
        "@type": "Thing",
        "@id": "thing2",
        name: "thing2",
        name2: ["test1","test2"],
        text: "text1",
        ratingValue: 4,
        actionStatus: "PotentialActionStatus",
        other: {
                "@type": "Thing",
                "@id": "thing1",
                "name": "thing1",
                "image": {
                        "@type": "ImageObject",
                        "@id": "image11",
                        "name": "image_11",
                        "contentUrl": "https://placehold.co/600x400"
                    },
                "url": "https://www.example.com/"
            },
        image: {
            "@context": "https://schema.org/",
            "@type": "ImageObject",
            "@id": "image1",
            name: "image_1",
            contentUrl: "https://placehold.co/600x400",
        },
        url: "https://www.example.com/",
    };


    let list1 = {
            "@type": "ItemList",
            "@id": "itemlist1",
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
    let article =  {
          "@type": "CreativeWork",
          "@id": "creativeWork1",
          "headline": "Headline 1",
          "text": "text 1",
          "hasPart": [
                {
              "@type": "CreativeWork",
              "@id": "9fe74187-558e-41bc-a97b-f49873da93b7",
              "headline": "Sub headline 1",
              "text": "text 1-1"
            },
            {
              "@type": "CreativeWork",
              "@id": "29f43152-29af-4c83-a9e5-d0a07b68f92d",
              "headline": "text 1-2",
              "text": ""
            }
          ]
        }


    
    engine.set(record);
    engine.set(record2);
    engine.set(article);
    engine.set(list1)
    engine.set(action)
    engine.set(potentialActions)

    let thing = engine.get(record);

    await new Promise((r) => setTimeout(r, 2000));

    thing.name = "thing11";
}

test();
