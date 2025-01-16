

import { KrDb } from "../KrDb.js";


describe("KrDb", () => {


  describe("Base", () => {

    test("test CRUD", () => {


        let record_type1 = "Thing"
        let record_id1 = 'thing1'
        let record1 = {
              "@type": record_type1,
              "@id": record_id1,
              "name": "thing1"
        }
        
        let updatedRecord1 = {
              "@type": record_type1,
              "@id": record_id1,
              "name": "thing1 updated"
        }

        let record_type2 = "Thing"
        let record_id2 = 'thing1'
        let record2 = {
                  "@type": record_type2,
                  "@id": record_id2,
                  "name": "thing2"
            }

        let updatedRecord2 = {
              "@type": record_type2,
              "@id": record_id2,
              "name": "thing2 updated"
        }

        let db = new KrDb()

        // Length
        expect(db.length).toBe(0)

        // Add
        db.set(record1)
        expect(db.length).toBe(1)

        // Get
        let r1 = db.get(record_type1, record_id1)
        expect(JSON.stringify(r1) == JSON.stringify(record1))
        expect(db.length).toBe(1)


        // Update
        db.set(updatedRecord1)
        let r1_updated = db.get(record_type1, record_id1)
        expect(db.length).toBe(1)
        expect(JSON.stringify(r1_updated) == JSON.stringify(record1))
        
        // Delete
        db.delete(record_type1, record_id1)
        expect(db.length).toBe(0)
        let r3 = db.get(record_type1, record_id1)
        expect(r3 == null)
        
        
    });


   test("test many", () => {

         function getRecord(n){

                 let record = {
                     "@context": "https://schema.org/",
                     "@type": "Thing",
                     "@id": "thing" + String(n),
                     "name": "thing" + String(n)
                 }
                 return record
             }


         let db = new KrDb()

         // Seed db
         for(let i = 0; i < 100; i++){
               let r = getRecord(i)
               db.set(r)
         }

         // 
         expect(db.length).toBe(100)

         

         // 
         for(let i = 0; i < 10; i++){
                  let r = getRecord(i)
                  db.delete(r["@type"], r["@id"])
            }
          expect(db.length).toBe(90)
         
   })


  })




})
