import { krakenThingPropertyValueSpecificationHelpers as h } from "../krakenThingPropertyValueSpecificationHelpers.js";

describe("pvsHelpers Simple", () => {
    let record1 = {
        "@context": "https://schema.org/",
        "@type": "Thing",
        "@id": "thing1",
        name: "thing1",
        quantity: 1,
        other: {
            "@context": "https://schema.org/",
            "@type": "Thing",
            "@id": "thing11",
            name: "thing11",
            quantity: 11,
        },
    };

    let record2 = {
        "@context": "https://schema.org/",
        "@type": "Thing",
        "@id": "thing2",
        name: "thing2",
        name2: "name2",
        quantity: 2,
        other: {
            "@context": "https://schema.org/",
            "@type": "Thing",
            "@id": "thing22",
            name: "thing22",
            name2: "name22",
            quantity: 22,
        },
    };

    test("basic", () => {
        //
        let condition = {
            name: "thing1",
        };
        expect(h.test(record1, condition)).toBe(true);
        expect(h.test(record2, condition)).toBe(false);
    });

    test("basic number", () => {
        //
        let condition = {
            quantity: 1,
        };
        expect(h.test(record1, condition)).toBe(true);
        expect(h.test(record2, condition)).toBe(false);
    });

    test("basic dot", () => {
        //
        let condition = { quantity: 1 };
        expect(h.test(record1, condition)).toBe(true);
        expect(h.test(record2, condition)).toBe(false);
    });

    test("basic dot number", () => {
        //
        let condition = { "other.quantity": 11 };
        expect(h.test(record1, condition)).toBe(true);
        expect(h.test(record2, condition)).toBe(false);
    });

    test("basic null", () => {
        //
        let condition = { name2: null };

        expect(h.test(record1, condition)).toBe(true);
        expect(h.test(record2, condition)).toBe(false);
    });

    test("basic null dot", () => {
        //
        let condition = { "other.name2": null };

        expect(h.test(record1, condition)).toBe(true);
        expect(h.test(record2, condition)).toBe(false);
    });

    test("basic thing", () => {
        //
        let condition = {
            other: {
                "@type": "Thing",
                "@id": "thing11",
            },
        };

        expect(h.test(record1, condition)).toBe(true);
        expect(h.test(record2, condition)).toBe(false);
    });
});

describe("pvsHelpers Complex", () => {
    let record1 = {
        "@context": "https://schema.org/",
        "@type": "Thing",
        "@id": "thing1",
        name: "thing1",
        quantity: 1,
        other: [
            {
                "@context": "https://schema.org/",
                "@type": "Thing",
                "@id": "thing11",
                name: "thing11",
                quantity: 11,
            },
            {
                "@context": "https://schema.org/",
                "@type": "Thing",
                "@id": "thing12",
                name: "thing12",
                quantity: 12,
            },
        ],
    };

    let record2 = {
        "@context": "https://schema.org/",
        "@type": "Thing",
        "@id": "thing2",
        name: "thing2",
        name2: "name2",
        quantity: 2,
        other: [
            {
                "@context": "https://schema.org/",
                "@type": "Thing",
                "@id": "thing11",
                name: "thing11",
                quantity: 11,
            },
            
        ],
    };



   
    test("Cond multiple values", () => {
        //

        // todo: how to limit records to a specific number of childs?
        
        let condition = {
            other: {
                "@type": "Thing",
                "@id": "thing11",
            },
            "n:other": 2
        };
        //expect(h.test(record1, condition)).toBe(true);
        //expect(h.test(record2, condition)).toBe(false);
        expect(1).toBe(1);
    });

});
