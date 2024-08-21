
import { KrCache } from "../krakenCache.js";



describe("Cache", () => {
    
    test("Store retrieve value", () => {
        let value = 'abc'
        let c = new KrCache()

        c.set('path1', 'path2', value)

        let result = c.get('path1', 'path2')
        expect(result).toStrictEqual(value);
        
    });


    test("Store retrieve value multiple paths", () => {
        let value = 'abc'
        let c = new KrCache()

        c.set('path1', 'path2', 'path3', 'path4', value)

        let result = c.get('path1', 'path2', 'path3', 'path4')
        expect(result).toStrictEqual(value);

    });


    

    test("Get all values", () => {
        
        let c = new KrCache()

        c.set('path1', 'path2', 'abc')
        c.set('path1', 'path3', 'def')

        let result = c.getAll()
        expect(result).toStrictEqual(['abc', 'def']);

    });
    
    

});


