
import { KrBroadcast } from "../KrBroadcast.js";
import { KrThings} from  '../KrThings.js';

class EventListener {
    constructor() {
        this.messages = [];
    }

    get length() {
        return this.messages.length;
    }

    set(event) {
        this.messages.push(event);
    }
};




describe("KrBroadcast", () => {
    describe("Base", () => {
        test("test BASE", () => {
            
    
            let record_type1 = 'Thing'
            let record_id1 = 'thing1'
            let record = {
                "@context": "https://schema.org/",
                "@type": record_type1,
                "@id": record_id1,
                name: "thing1",
            };

            // Init event listener
            let l = new EventListener();

            // Init things
            let things = new KrThings()

            // Add listener to things
            things.addEventListener(l.set.bind(l), record_type1, record_id1)


            // Baseline
            expect(l.length).toBe(0);
            expect(things.length).toBe(0);
            
            // Add record to things
            things.set(record)

            expect(l.length).toBe(1);
            expect(things.length).toBe(1);
           


        });

        test("test compound", () => {


            let record_type1 = 'Thing'
            let record_id1 = 'thing1'
            let record_type2 = 'Thing'
            let record_id2 = 'thing2'
            let record = {
                "@type": record_type1,
                "@id": record_id1,
                name: "thing1",
                other: {
                        "@type": record_type2,
                        "@id": record_id2,
                        "name": "thing2"
                    }


            };

            // Init event listener
            let l1 = new EventListener();
            let l2 = new EventListener();


            // Init things
            let things = new KrThings()

            // Add listener to things
            things.addEventListener(l1.set.bind(l1), record_type1, record_id1)
            things.addEventListener(l2.set.bind(l2), record_type2, record_id2)

            // Baseline
            expect(l1.length).toBe(0);
            expect(l2.length).toBe(0);
            expect(things.length).toBe(0);

            // Add record to things
            things.set(record)

            let t = things.get(record_type1, record_id1)

            
            expect(things.length).toBe(2);
            expect(l1.length).toBe(1);
            expect(l2.length).toBe(1);
            



        });

        
    });
});
