import { krakenHelpers as h } from "../../../krakenHelpers/krakenHelpers.js";

import { KrCache} from '../krakenCache.js'




describe("KrCache", () => {

    
    test("Set / get / delete", () => {

        let t1 = h.base.test.getThing(1)
        let t2 = h.base.test.getThing(2)
        let t3 = h.base.test.getThing(3)
        
        
        let cache = new KrCache()

        // Set 
        cache.set([t1, t2, t3])

        expect(cache.length()).toEqual(3)

        // Get

        let newT1 = cache.get(t1['@type'], t1['@id'])

        expect(newT1).toEqual(t1)

        // Delete
        cache.delete(t1['@type'], t1['@id'])
        expect(cache.length()).toEqual(2)
        
        
    });


    test("Max length", () => {

        let cache = new KrCache(20)

        for(let i=0; i < 30; i++){
            console.log(i)
            cache.set(h.base.test.getThing(i))
        }

        expect(cache.length()).toEqual(20)
    });
    
})
