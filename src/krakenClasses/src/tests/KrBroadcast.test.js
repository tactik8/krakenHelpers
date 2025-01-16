import { KrBroadcast } from "../KrBroadcast.js";

describe("KrBroadcast", () => {
    describe("Base", () => {
        test("test BASE", () => {
            let T = class BroadcastRecipient {
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

            let t = new T();

            let b = new KrBroadcast(t);

            let record = {
                "@context": "https://schema.org/",
                "@type": "Thing",
                "@id": "thing1",
                name: "thing1",
            };

            // Init
            expect(t.length).toBe(0);

            // Add listener
            b.addEventListener(t.set.bind(t), record);

            // Add event
            b.newEvent("all", record);

            // Check
            expect(t.length).toBe(1);
            expect(b.events.length).toBe(0);

            
        });

        test("test pause", () => {
            let T = class BroadcastRecipient {
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

            let t = new T();

            let b = new KrBroadcast(t);

            let record = {
                "@context": "https://schema.org/",
                "@type": "Thing",
                "@id": "thing1",
                name: "thing1",
            };

            // Init
            expect(t.length).toBe(0);

            // Add listener
            b.addEventListener(t.set.bind(t), record);

            // Add event
            b.newEvent("all", record);

            // Check
            expect(t.length).toBe(1);
            expect(b.events.length).toBe(0);
            
            // Pause
            let key1 = b.pauseBroadcast();
            let key2 = b.pauseBroadcast();


            // Add event
            b.newEvent("all", record);


            // Check
            expect(t.length).toBe(1);
            expect(b.events.length).toBe(1);

            // Add event
            b.newEvent("all", record);

            // Check
            expect(t.length).toBe(1);
            expect(b.events.length).toBe(2);
            

            // Remove lock1
            b.resumeBroadcast(key1);

            // Check
            expect(t.length).toBe(1);
            expect(b.events.length).toBe(2);

            // Remove lock 2
            b.resumeBroadcast(key2);

            // Check
            expect(t.length).toBe(2);
            expect(b.events.length).toBe(0);
            
            
            //
            
            
        });
    });
});
