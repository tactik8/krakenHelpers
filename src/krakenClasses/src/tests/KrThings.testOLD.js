import { krakenThings } from "../KrThings.js";
import { krakenHelpers as h} from '../../../krakenHelpers/krakenHelpers.js'

let KrThings = krakenThings.KrThings

describe("KrThings", () => {
    test("Base", () => {

        let db = new KrThings(false);

        let r0 = h.base.test.getThing(0)
        let r1 = h.base.test.getThing(1)

        
        // Test new value with embeds
        db.set(r0)
        expect(db.length()).toBe(4);

        // Test duplicate value
        db.set(r0)
        expect(db.length()).toBe(4);

        // Test new value with embeds
        db.set(r1)
        expect(db.length()).toBe(8);

        // Test duplicate value
        db.set(r0)
        expect(db.length()).toBe(8);

        // Test get
        let r5 = db.get("Thing", "thing0")
        expect(r5?.['@type']).toBe("Thing");
        
        // Test delete
        db.delete("Thing", "thing0")
         expect(db.length()).toBe(7);
        
    });

    test("Test merge", () => {

        let db = new KrThings(false);

        let r0 = h.base.test.getThing(0)
        let r1 = h.base.test.getThing(0)

        r1.name2 = "Test2"

        db.set(r0)
        db.set(r1)

        let r2 = db.get("Thing", "thing0")

        expect(r2?.['name2']).toBe("Test2")
        expect(db.length()).toBe(4);

    })
});


describe("KrThings Class Objects", () => {
    test("Base", () => {

        let db = new KrThings(true);

        let r0 = h.base.test.getThing(0)
        let r1 = h.base.test.getThing(1)


        // Test new value with embeds
        db.set(r0)
        expect(db.length()).toBe(4);

        // Test duplicate value
        db.set(r0)
        expect(db.length()).toBe(4);

        // Test new value with embeds
        db.set(r1)
        expect(db.length()).toBe(8);

        // Test duplicate value
        db.set(r0)
        expect(db.length()).toBe(8);

        // Test get
        let r5 = db.get("Thing", "thing0")
        expect(r5.record_type).toBe("Thing");

        // Test delete
        db.delete("Thing", "thing0")
         expect(db.length()).toBe(7);

    });

    test("Test merge", () => {

        let db = new KrThings(true);

        let r0 = h.base.test.getThing(0)
        let r1 = h.base.test.getThing(0)

        r1.name2 = "Test2"

        db.set(r0)
        db.set(r1)

        let r2 = db.get("Thing", "thing0")

        expect(r2.get('name2')?.[0]).toBe("Test2")
        expect(db.length()).toBe(4);

    })
});
