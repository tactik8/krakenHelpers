import { krakenHelpers as h } from "./src/krakenHelpers/krakenHelpers.js";

import { krakenClasses as kc } from "./src/krakenClasses/krakenClasses.js";

import { krakenTools as tools } from "./src/krakenTools/krakenTools.js";

import { krakenElements as el } from "./src/krakenElements/krakenElements.js"





function testEngine() {
    //let engine = new kc.KrElementEngine();
    //engine.init();
    let record = h.base.test.getItemList(4);


    let engine = document.getElementsByTagName('kr-engine')?.[0] || null
    console.log('emg', engine)
    engine.set(record);

    let k = engine.get("ItemList", "ItemList0");
   

    let newItem = {
        "@context": "https://schema.org/",
        "@type": "Thing",
        "@id": "thing11",
        name: "thing11",
    };

    let tt = new kc.KrThing(newItem);

    k.insert(tt);



    let record2= {
        "@context": "https://schema.org/",
        "@type": "Thing",
        "@id": "thing1",
        name: "thing1",
        other: [
            {
                "@context": "https://schema.org/",
                "@type": "Thing",
                "@id": "thing11",
                name: "thing11",
            },
            {
                "@context": "https://schema.org/",
                "@type": "Thing",
                "@id": "thing12",
                name: "thing12",
            },
        ],
    };
    let gg = engine.set(record2)
    console.log('gg', gg)


}
//testEngine()

function test2() {



    let timer = new tools.KrTimer();

    
    let record = {
        "@type": "WebSite",
        "@id": "1097b881-2df7-4ef8-913b-86dda5c8d012-00-2xmikvgantf3e.janeway.replit.dev",
        additionalProperty: [
            {
                "@type": "PropertyValue",
                "@id": "acb9cb85-0ef7-43c2-a253-50e840d4ccd8",
                "name": "Google analytics",
                "propertyID": "Google analytics",
                "value": "UA-XXXXX-Y",
            }
        ],
        name: "Test Website",
        organization: {
            "@context": "https://schema.org/",
            "@type": "Organization",
            "@id": "abc123",
            legalName: "Test Organization 1 Inc.",
            name: "Test Organization 1",
            url: "https://1097b881-2df7-4ef8-913b-86dda5c8d012-00-2xmikvgantf3e.janeway.replit.dev/",
            brand: {
                "@type": "Brand",
                name: "Test Organization 1",
                logo: {
                    "@context": "https://schema.org/",
                    "@type": "ImageObject",
                    "@id": "image1",
                    name: "image_1",
                    contentUrl: "https://placehold.co/600x400",
                },
                additionalProperty: [
                    {
                        "@type": "PropertyValue",
                        "propertyID": "colorPalettePrimary",
                        "value": "970747"
                    },
                    {
                        "@type": "PropertyValue",
                        "propertyID": "colorPaletteSecondary",
                        "value": "efc3d7"
                    },
                    {
                        "@type": "PropertyValue",
                        "propertyID": "colorPaletteNeutral",
                        "value": "fff"
                    },
                    {
                        "@type": "PropertyValue",
                        "propertyID": "colorPaletteDark",
                        "value": "000000"
                    },
                    {
                        "@type": "PropertyValue",
                        "propertyID": "colorPaletteLight",
                        "value": "f2f2f2"
                    },
                ]
            },
        },
        hasPart: [
            {
                "@type": "WPHeader",
                name: "Conform IT Header",
                hasPart: [
                    {
                        "@type": "WebPage",
                        name: "Solution",
                        url: "#solution",
                    },
                    {
                        "@type": "WebPage",
                        name: "Prix",
                        url: "#prix",
                    },
                    {
                        "@type": "WebPage",
                        name: "Contact",
                        url: "#contact",
                    },
                    {
                        "@type": "WebPage",
                        name: "A propos",
                        url: "/a_propos",
                    },
                ],
            },
            {
                "@type": "WPFooter",
                name: "Kraken API",
                hasPart: [
                    {
                        "@type": "WebPage",
                        name: "Politique de confidentialité",
                        url: "/confidentialite",
                    },
                    {
                        "@type": "WebPage",
                        name: "Politique d'utilisation",
                        url: "/utilisation",
                    },
                ],
            },
        ],
    };


    
    timer.start('toThing')
    
    let t = h.thing.toThing(record);
    timer.stop('toThing')


    timer.start('headings')

    t = h.base.heading.addHeadings(t)
    timer.stop('headings')

    timer.logAllDurations()

    console.log(t)

   
}
//test2();




async function test3(){




    let messages = [
        {
            "role": "assistant",
            "content": "I own a company called conformité.ca. The company provides turn-key solutions to help companies comply with Quebec law 25 regarding personal information. "
        },
        {
            "role": "assistant",
            "content": "The main service we provide is called conformité plus. It is a turn-key service that is payable month to month and manages the requirements of the law 25 for the organizations, eliminating the need for them to develop their own inventories and processes. The main value proposition of this service is that there is no up-front cost or commitment, no internal efforts are required, and that we handle everything."
        },
        {
            "role": "user",
            "content": "Write persuasive Google Ads copy for a campaign targeting small-businesses, focusing on our conformité plus service."
        }
      
    ]


    
  

    let c = new tools.KrChatGPT()

    let r = await c.ask(messages)

    console.log('r', r)
}


//test3()