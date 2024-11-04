import { krakenThingPropertyValueHelpers as h } from "../krakenThingPropertyValueHelpers.js";

// h

describe("templateHelpers", () => {
    test("base - isSame", () => {
        let pv1 = h.new.add("name", "name1", { credibility: 0.5 });

        let pv2 = h.new.add("name", "name1", { credibility: 0.5 });

        let result = h.isSame(pv1, pv2);

        let expectedResult = true;

        expect(result).toBe(expectedResult);
    });

    test("Unit test fn override add", () => {
        let input1 = { credibility: 0.5 };
        let input2 = { credibility: 0.4 };

        let pv1 = h.new.replace("name", "name1", input1);
        let pv2 = h.new.add("name", "name1", input2);

        expect(h.override(pv1, pv2)).toBe(true);
        expect(h.override(pv2, pv1)).toBe(false);
    });

    test("Unit test fn override replace", () => {
        let input1 = { credibility: 0.5 };
        let input2 = { credibility: 0.4 };

        let pv1 = h.new.replace("name", "name1", input1);
        let pv2 = h.new.replace("name", "name1", input2);

        expect(h.override(pv1, pv2)).toBe(true);
        expect(h.override(pv2, pv1)).toBe(false);
    });

    test("Unit test fn override date", () => {
        let input1 = { observationDate: new Date(2022, 1, 1) };
        let input2 = { observationDate: new Date(2021, 1, 1) };

        let pv1 = h.new.add("name", "name1", input1);
        let pv2 = h.new.add("name", "name1", input2);

        expect(h.override(pv1, pv2)).toBe(false);
        expect(h.override(pv2, pv1)).toBe(false);
    });

    test("Unit test fn override date", () => {
        let input1 = { observationDate: new Date(2022, 1, 1) };
        let input2 = { observationDate: new Date(2021, 1, 1) };

        let pv1 = h.new.replace("name", "name1", input1);
        let pv2 = h.new.add("name", "name1", input2);

        expect(h.override(pv1, pv2)).toBe(true);
        expect(h.override(pv2, pv1)).toBe(false);
    });
});
