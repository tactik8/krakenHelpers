import { krakenHelpers as h } from "./src/krakenHelpers/krakenHelpers.js";

import { krakenClasses as kc } from "./src/krakenClasses/krakenClasses.js";




import { krakenElements } from "./src/krakenElements/krakenElements.js";




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
testEngine()

function test2() {
    let record = {
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

    let t = h.thing.toThing(record);

    let element = document.getElementById("testNew");

    h.dom.thing.init(element);

    h.dom.thing.renderSystem(element, t);

    h.thing.value.delete(t, "other", { "@type": "Thing", "@id": "thing11" });

    h.dom.thing.renderSystem(element, t);
}
//test2();
