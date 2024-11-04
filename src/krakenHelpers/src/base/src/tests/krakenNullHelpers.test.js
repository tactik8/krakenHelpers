import { krakenNullHelpers  } from '../krakenNullHelpers.js'

let isNull = krakenNullHelpers.isNull



describe('isNull function', () => {
    test('returns true for undefined', () => {
        expect(isNull(undefined)).toBe(true);
    });

    test('returns true for null', () => {
        expect(isNull(null)).toBe(true);
    });

    test('returns false for 0', () => {
        expect(isNull(0)).toBe(false);
    });

    test('returns true for an empty array', () => {
        expect(isNull([])).toBe(true);
    });

    test('returns false for a non-empty array', () => {
        expect(isNull([1, 2, 3])).toBe(false);
    });

    test('returns true for an array with all nulls', () => {
        expect(isNull([null, undefined, null])).toBe(true);
    });

    test('returns false for an array with at least one non-null element', () => {
        expect(isNull([null, 1, undefined])).toBe(false);
    });

    test('returns true for an empty object', () => {
        expect(isNull({})).toBe(true);
    });

    test('returns false for an object with keys', () => {
        expect(isNull({ key: 'value' })).toBe(false);
    });

    test('returns false for a string', () => {
        expect(isNull('test')).toBe(false);
    });

    test('returns false for a number other than 0', () => {
        expect(isNull(5)).toBe(false);
    });

    test('returns false for a boolean true', () => {
        expect(isNull(true)).toBe(false);
    });

    test('returns false for a boolean false', () => {
        expect(isNull(false)).toBe(false);
    });
});
