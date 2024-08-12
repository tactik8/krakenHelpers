import { krakenJsonHelpers } from "../krakenJsonHelpers.js";



const isValidJson = krakenJsonHelpers.isJson


describe('isValidJson', () => {
    test('returns true for a valid JSON string', () => {
        const jsonString = '{"name": "John", "age": 30}';
        expect(isValidJson(jsonString)).toBe(true);
    });

    test('returns false for an invalid JSON string', () => {
        const jsonString = '{"name": "John", "age": 30';
        expect(isValidJson(jsonString)).toBe(false);
    });

    test('returns false for a non-JSON string', () => {
        const nonJsonString = 'Hello, world!';
        expect(isValidJson(nonJsonString)).toBe(false);
    });

    test('returns true for a valid JSON array', () => {
        const jsonArray = '[1, 2, 3, 4]';
        expect(isValidJson(jsonArray)).toBe(true);
    });

    test('returns true for a valid JSON object with nested structure', () => {
        const nestedJson = '{"name": "John", "address": {"city": "New York", "zipcode": "10001"}}';
        expect(isValidJson(nestedJson)).toBe(true);
    });

    test('returns false for an empty string', () => {
        const emptyString = '';
        expect(isValidJson(emptyString)).toBe(false);
    });

    test('returns false for a string with only whitespace', () => {
        const whiteSpaceString = '   ';
        expect(isValidJson(whiteSpaceString)).toBe(false);
    });
});
