
import { krakenStringHelpers } from '../krakenStringHelpers.js'



// -----------------------------------------------------
//  Comment 
// -----------------------------------------------------

const extractMentions = krakenStringHelpers.extractMentions

describe('extractMentions', () => {
    test('extracts single mention', () => {
        expect(extractMentions('Hello @user')).toEqual(['@user']);
    });

    test('extracts multiple mentions', () => {
        expect(extractMentions('Hello @user1 and @user2')).toEqual(['@user1', '@user2']);
    });

    test('returns an empty array when no mentions are present', () => {
        expect(extractMentions('Hello world')).toEqual([]);
    });

    test('handles empty string input', () => {
        expect(extractMentions('')).toEqual([]);
    });

    test('throws error for non-string input', () => {
        expect(() => extractMentions(123)).toThrow('Input must be a string');
        expect(() => extractMentions(null)).toThrow('Input must be a string');
        expect(() => extractMentions(undefined)).toThrow('Input must be a string');
        expect(() => extractMentions({})).toThrow('Input must be a string');
    });

    test('ignores mentions within words', () => {
        expect(extractMentions('this is a @test case')).toEqual(['@test']);
        expect(extractMentions('email@example.com @user')).toEqual(['@user']);
    });
});

// -----------------------------------------------------
//  Comment 
// -----------------------------------------------------

const extractNames = krakenStringHelpers.extractNames

describe('extractNames', () => {
    test('should extract names from a string', () => {
        const input = 'Alice and Bob are going to the party.';
        const expected = ['Alice', 'Bob'];
        expect(extractNames(input)).toEqual(expected);
    });

    test('should return an empty array if no names are found', () => {
        const input = 'there are no proper names here.';
        const expected = [];
        expect(extractNames(input)).toEqual(expected);
    });

    test('should handle mixed content properly', () => {
        const input = 'Alice, Bob, and Charlie went to the 123 party.';
        const expected = ['Alice', 'Bob', 'Charlie'];
        expect(extractNames(input)).toEqual(expected);
    });

    test('should throw an error if input is not a string', () => {
        const input = 12345;
        expect(() => extractNames(input)).toThrow(TypeError);
    });

    test('should return an empty array if the string is empty', () => {
        const input = '';
        const expected = [];
        expect(extractNames(input)).toEqual(expected);
    });
});


// -----------------------------------------------------
//  Comment 
// -----------------------------------------------------


const extractValueAndUnit = krakenStringHelpers.extractValueAndUnit

describe('extractValueAndUnit', () => {
    test('should extract value and unit from a valid input string', () => {
        expect(extractValueAndUnit('12px')).toEqual({ value: 12, unit: 'px' });
        expect(extractValueAndUnit('5.5 kg')).toEqual({ value: 5.5, unit: 'kg' });
        expect(extractValueAndUnit('-42.8m')).toEqual({ value: -42.8, unit: 'm' });
    });

    test('should handle input with spaces', () => {
        expect(extractValueAndUnit('  100  cm  ')).toEqual({ value: 100, unit: 'cm' });
    });

    test('should throw an error for non-string input', () => {
        expect(() => extractValueAndUnit(123)).toThrow('Input must be a string');
        expect(() => extractValueAndUnit(null)).toThrow('Input must be a string');
        expect(() => extractValueAndUnit({})).toThrow('Input must be a string');
    });

    test('should throw an error for strings without value and unit', () => {
        expect(() => extractValueAndUnit('abc')).toThrow('No value and unit found in the input string');
        expect(() => extractValueAndUnit('123')).toThrow('No value and unit found in the input string');
        expect(() => extractValueAndUnit('cm')).toThrow('No value and unit found in the input string');
    });

    /*
    test('should handle scientific notation', () => {
        expect(extractValueAndUnit('1.23e4 m')).toEqual({ value: 1.23e4, unit: 'm' });
        expect(extractValueAndUnit('-2.5E-3g')).toEqual({ value: -2.5e-3, unit: 'g' });
    });
    */
});


// -----------------------------------------------------
//  Comment 
// -----------------------------------------------------

const extractNumbers = krakenStringHelpers.extractNumbers

test('extracts numbers from a string', () => {
    expect(extractNumbers("abc123xyz")).toEqual([123]);
    expect(extractNumbers("1a2b3c")).toEqual([1, 2, 3]);
    expect(extractNumbers("abc")).toEqual([]);
    expect(extractNumbers("")).toEqual([]);
});

test('handles strings with no numbers', () => {
    expect(extractNumbers("no numbers here")).toEqual([]);
});

test('throws an error if input is not a string', () => {
    expect(() => extractNumbers(123)).toThrow('Input must be a string');
    expect(() => extractNumbers({})).toThrow('Input must be a string');
    expect(() => extractNumbers([])).toThrow('Input must be a string');
    expect(() => extractNumbers(null)).toThrow('Input must be a string');
    expect(() => extractNumbers(undefined)).toThrow('Input must be a string');
});

test('extracts numbers from a complex string', () => {
    expect(extractNumbers("abc 123 def 456 ghi 789")).toEqual([123, 456, 789]);
    expect(extractNumbers("00123, 0456, 789")).toEqual([123, 456, 789]);
    expect(extractNumbers("12.34, 56.78")).toEqual([12, 34, 56, 78]);
});

test('extracts numbers from a string with special characters', () => {
    expect(extractNumbers("!@#123$%^456&*()789")).toEqual([123, 456, 789]);
});


// -----------------------------------------------------
//  Comment 
// -----------------------------------------------------

const extractPhoneNumbers = krakenStringHelpers.extractPhoneNumbers

describe('extractPhoneNumbers', () => {
    test('should extract phone numbers from a string', () => {
        const inputString = "Contact us at (123) 456-7890 or 987.654.3210. Our UK number is +44 123 4567 890 .";
        const expectedOutput = ["(123) 456-7890", "987.654.3210", "+44 123 4567 890"];
        expect(extractPhoneNumbers(inputString)).toEqual(expectedOutput);
    });

    test('should return an empty array when no phone numbers are found', () => {
        const inputString = "No phone numbers here!";
        expect(extractPhoneNumbers(inputString)).toEqual([]);
    });

    test('should throw an error when the input is not a string', () => {
        expect(() => {
            extractPhoneNumbers(12345);
        }).toThrow('Input must be a string');
    });

    test('should handle empty string input', () => {
        const inputString = "";
        expect(extractPhoneNumbers(inputString)).toEqual([]);
    });

    test('should extract phone numbers with different formats', () => {
        const inputString = "My numbers are 123-456-7890, (123) 456-7890, 123.456.7890, and 123 456 7890.";
        const expectedOutput = ["123-456-7890", "(123) 456-7890", "123.456.7890", "123 456 7890"];
        expect(extractPhoneNumbers(inputString)).toEqual(expectedOutput);
    });
});


// -----------------------------------------------------
//  Comment 
// -----------------------------------------------------

const extractDates = krakenStringHelpers.extractDates

describe('extractDates', () => {
    test('should extract dates in YYYY-MM-DD format', () => {
        const input = 'The event is on 2023-08-04.';
        let d = new Date('2023-08-04')
        expect(extractDates(input)).toEqual([d]);
    });

    test('should extract dates in DD/MM/YYYY format', () => {
        const input = 'The event is on 04/08/2023.';
        let d = new Date('04/08/2023')
        expect(extractDates(input)).toEqual([d]);
    });

    test('should extract dates in MM-DD-YYYY format', () => {
        const input = 'The event is on 08-04-2023.';
        let d = new Date('08-04-2023')
        expect(extractDates(input)).toEqual([d]);
    });

    test('should extract multiple dates in different formats', () => {
        const input = 'The event is on 2023-08-04, another on 04/08/2023, and another on 08-04-2023.';
        let d1 = new Date('2023-08-04')
        let d2 = new Date('04/08/2023')
        let d3 = new Date('08-04-2023')
        expect(extractDates(input)).toEqual([d1, d2, d3]);
    });

    test('should return a message if no dates are found', () => {
        const input = 'There are no dates here.';
        expect(extractDates(input)).toStrictEqual([]);
    });

    test('should handle non-string input gracefully', () => {
        const input = 12345;
        expect(extractDates(input)).toStrictEqual([]);
    });

    test('should return a message if input is an empty string', () => {
        const input = '';
        expect(extractDates(input)).toStrictEqual([]);
    });

    test('should return a message if input is a string with no valid date formats', () => {
        const input = 'This string has dates like 32-13-2020 which are invalid.';
        expect(extractDates(input)).toStrictEqual([]);
    });
});




// -----------------------------------------------------
//  Comment 
// -----------------------------------------------------





