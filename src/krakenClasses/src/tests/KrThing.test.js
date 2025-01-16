

import { KrThing } from "../KrThing.js";


describe("KrThing", () => {


  describe("Base", () => {

    test("test Base", () => {


        let record_type1 = 'Thing'
        let record_id1 = 'thing1'
     
        let record = {
            "@type": record_type1,
            "@id": record_id1,
            name: "thing1"
        };

        let t = new KrThing(record)

        expect(t.record_type).toBe(record_type1);
        expect(t.record_id).toBe(record_id1);
        expect(t.children.length).toBe(0);
        

    });

      test("test Compound", () => {


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

          let t = new KrThing(record)

          expect(t.record_type).toBe(record_type1);
          expect(t.record_id).toBe(record_id1);
          expect(t.children.length).toBe(1);
          


      });


  })




})
