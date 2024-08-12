import { krakenEmailHelpers } from "../krakenEmailHelpers.js";



const isValidEmail = krakenEmailHelpers.isEmail

describe('isValidEmail', () => {
    test('should return true for valid email addresses', () => {
        expect(isValidEmail('test@example.com')).toBe(true);
        expect(isValidEmail('user.name@domain.co')).toBe(true);
        expect(isValidEmail('user_name@sub.domain.com')).toBe(true);
    });

    test('should return false for invalid email addresses', () => {
        expect(isValidEmail('plainaddress')).toBe(false);
        expect(isValidEmail('@missingusername.com')).toBe(false);
        expect(isValidEmail('username@.com')).toBe(false);
        expect(isValidEmail('username@domain..com')).toBe(false);
        expect(isValidEmail('username@domain,com')).toBe(false);
        expect(isValidEmail('username@domain')).toBe(false);
    });

    test('should throw a TypeError for non-string input', () => {
        expect(() => isValidEmail(12345)).toThrow(TypeError);
        expect(() => isValidEmail(null)).toThrow(TypeError);
        expect(() => isValidEmail(undefined)).toThrow(TypeError);
        expect(() => isValidEmail({})).toThrow(TypeError);
        expect(() => isValidEmail([])).toThrow(TypeError);
    });
});
