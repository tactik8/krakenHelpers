import { krakenDateHelpers } from "../krakenDateHelpers.js";

// -----------------------------------------------------
//  Comment
// -----------------------------------------------------

const toDate = krakenDateHelpers.toDate;

describe("toDate", () => {
    test("should validate date", () => {
        expect(toDate("2022-01-01")).toStrictEqual(new Date("2022-01-01"));
    });

    test("should validate date", () => {
        expect(toDate("2022-13-01")).toStrictEqual(undefined);
    });

    test("should validate date", () => {
        expect(toDate("11/22/24")).toStrictEqual(new Date("2024-11-22"));
    });

    test("should validate date", () => {
        expect(toDate(undefined)).toStrictEqual(undefined);
    });

    test("should validate date", () => {
        expect(toDate(null)).toStrictEqual(undefined);
    });

});
