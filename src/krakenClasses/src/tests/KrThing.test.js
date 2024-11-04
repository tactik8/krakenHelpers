import { KrThing } from "../KrThing.js";
import { krakenHelpers as h} from '../../../krakenHelpers/krakenHelpers.js'

describe("KrThing", () => {
  
  
  describe("Base", () => {
    
    test("t1", () => {

      let record = {
          "@context": "https://schema.org/",
          "@type": "Thing",
          "@id": "thing1",
          "name": "thing1"
        }

      let t = new KrThing(record)

      expect(t.name).toBe('thing1');
    });

  })


  describe("Merge", () => {

    test("t1", () => {
      
     

      let t1 = new KrThing(h.base.test.getThing(0))
      let t2 = new KrThing(h.base.test.getThing(0))

      t1.id = 'id1'
      t2.id = 'id2'

      t1.merge(t2)

      
      
      expect(t1.id).toBe('id1');
    });

  })


  

})
