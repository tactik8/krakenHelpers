import { krakenEmailHelpers } from "../krakenEmailHelpers.js";



const isValid = krakenEmailHelpers.isValid

describe('isValid', () => {
    test('should return true for valid email addresses', () => {
        expect(isValid('test@example.com')).toBe(true);
        expect(isValid('user.name@domain.co')).toBe(true);
        expect(isValid('user_name@sub.domain.com')).toBe(true);
    });

    test('should return false for invalid email addresses', () => {
        expect(isValid('plainaddress')).toBe(false);
        expect(isValid('@missingusername.com')).toBe(false);
        expect(isValid('username@.com')).toBe(false);
        expect(isValid('username@domain..com')).toBe(false);
        expect(isValid('username@domain,com')).toBe(false);
        expect(isValid('username@domain')).toBe(false);
    });

    test('should throw a TypeError for non-string input', () => {
        expect(() => isValid(12345)).toThrow(TypeError);
        expect(() => isValid(null)).toThrow(TypeError);
        expect(() => isValid(undefined)).toThrow(TypeError);
        expect(() => isValid({})).toThrow(TypeError);
        expect(() => isValid([])).toThrow(TypeError);
    });
});
