import { krakenThingPropertyValueHelpers as h } from "../krakenThingPropertyValueHelpers.js";
// h

describe("templateHelpers", () => {
    test("basic template", () => {





        let result = true
        
        let expectedResult = true
        

        expect(result).toBe(expectedResult);

        

        

   });


    

    test("Unit test fn filter", () => {


        let pvs = []

        pvs.push(h.new.add('name', 'name1', { credibility: 0.5 }))
        pvs.push(h.new.add('name', 'name2', { credibility: 0.6 }))
        pvs.push(h.new.add('name', 'name3', { credibility: 0.7 }))
        pvs.push(h.new.add('name', 'name4', { credibility: 0.8 }))

        let specifications = { "metadata.credibility": 0.5 }

        //let specifications = { "credibility": 0.5 }

        
        pvs = h.filter(pvs, specifications)
        let expectedResult = 1
        let result = pvs.length
        expect(result).toBe(expectedResult);
        
    });
    
});




