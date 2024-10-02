import { krakenHelpers as h } from '../../../index.js'


let convertFromDotNotation = h.dot.fromDot
let convertToDotNotation = h.dot.toDot



describe('convertToDotNotation', () => {

  test('should handle simple object with no arrays', () => {
    const input = {
      "name": "John",
      "address": {
        "street": "123 Main St",
        "city": "New York"
      }
    };

    const expectedOutput = {
      "name": "John",
      "address.street": "123 Main St",
      "address.city": "New York"
    };

    expect(convertToDotNotation(input)).toEqual(expectedOutput);
  });

  test('should handle nested objects with multiple levels', () => {
    const input = {
      "address": {
        "postalCode": {
          "code": "10001",
          "suffix": "1234"
        }
      }
    };

    const expectedOutput = {
      "address.postalCode.code": "10001",
      "address.postalCode.suffix": "1234"
    };

    expect(convertToDotNotation(input)).toEqual(expectedOutput);
  });

  test('should handle arrays with simple values', () => {
    const input = {
      "tags": ["tag1", "tag2"]
    };

    const expectedOutput = {
      "tags[0]": "tag1",
      "tags[1]": "tag2"
    };

    expect(convertToDotNotation(input)).toEqual(expectedOutput);
  });

  test('should handle arrays with nested objects', () => {
    const input = {
      "contacts": [
        { "type": "email", "value": "john@example.com" },
        { "type": "phone", "value": "123-456-7890" }
      ]
    };

    const expectedOutput = {
      "contacts[0].type": "email",
      "contacts[0].value": "john@example.com",
      "contacts[1].type": "phone",
      "contacts[1].value": "123-456-7890"
    };

    expect(convertToDotNotation(input)).toEqual(expectedOutput);
  });

  test('should handle complex object with both nested objects and arrays', () => {
    const input = {
      "name": "John",
      "address": {
        "street": "123 Main St",
        "city": "New York"
      },
      "contacts": [
        { "type": "email", "value": "john@example.com" },
        { "type": "phone", "value": "123-456-7890" }
      ]
    };

    const expectedOutput = {
      "name": "John",
      "address.street": "123 Main St",
      "address.city": "New York",
      "contacts[0].type": "email",
      "contacts[0].value": "john@example.com",
      "contacts[1].type": "phone",
      "contacts[1].value": "123-456-7890"
    };

    expect(convertToDotNotation(input)).toEqual(expectedOutput);
  });

  test('should handle empty input object', () => {
    const input = {};
    const expectedOutput = {};
    expect(convertToDotNotation(input)).toEqual(expectedOutput);
  });

  test('should handle empty arrays', () => {
    const input = {
      "items": []
    };

    const expectedOutput = {
      
    };

    expect(convertToDotNotation(input)).toEqual(expectedOutput);
  });

  test('should handle arrays with multiple indices', () => {
    const input = {
      "items": ["apple", "banana", "cherry"]
    };

    const expectedOutput = {
      "items[0]": "apple",
      "items[1]": "banana",
      "items[2]": "cherry"
    };

    expect(convertToDotNotation(input)).toEqual(expectedOutput);
  });

  test('should handle deeply nested arrays and objects', () => {
    const input = {
      "users": [
        {
          "name": "Alice",
          "contacts": [
            { "type": "email", "value": "alice@example.com" }
          ]
        },
        {
          "name": "Bob",
          "contacts": [
            { "type": "phone", "value": "123-456-7890" }
          ]
        }
      ]
    };

    const expectedOutput = {
      "users[0].name": "Alice",
      "users[0].contacts[0].type": "email",
      "users[0].contacts[0].value": "alice@example.com",
      "users[1].name": "Bob",
      "users[1].contacts[0].type": "phone",
      "users[1].contacts[0].value": "123-456-7890"
    };

    expect(convertToDotNotation(input)).toEqual(expectedOutput);
  });

});


describe('convertFromDotNotation', () => {

  test('should handle simple object with no arrays', () => {
    const input = {
      "name": "John",
      "address.street": "123 Main St",
      "address.city": "New York"
    };

    const expectedOutput = {
      "name": "John",
      "address": {
        "street": "123 Main St",
        "city": "New York"
      }
    };

    expect(convertFromDotNotation(input)).toEqual(expectedOutput);
  });

  test('should handle nested objects with multiple levels', () => {
    const input = {
      "address.postalCode.code": "10001",
      "address.postalCode.suffix": "1234"
    };

    const expectedOutput = {
      "address": {
        "postalCode": {
          "code": "10001",
          "suffix": "1234"
        }
      }
    };

    expect(convertFromDotNotation(input)).toEqual(expectedOutput);
  });

  test('should handle arrays with simple values', () => {
    const input = {
      "tags[0]": "tag1",
      "tags[1]": "tag2"
    };

    const expectedOutput = {
      "tags": ["tag1", "tag2"]
    };

    expect(convertFromDotNotation(input)).toEqual(expectedOutput);
  });

  test('should handle arrays with nested objects', () => {
    const input = {
      "contacts[0].type": "email",
      "contacts[0].value": "john@example.com",
      "contacts[1].type": "phone",
      "contacts[1].value": "123-456-7890"
    };

    const expectedOutput = {
      "contacts": [
        {
          "type": "email",
          "value": "john@example.com"
        },
        {
          "type": "phone",
          "value": "123-456-7890"
        }
      ]
    };

    expect(convertFromDotNotation(input)).toEqual(expectedOutput);
  });

  test('should handle complex object with both nested objects and arrays', () => {
    const input = {
      "name": "John",
      "address.street": "123 Main St",
      "address.city": "New York",
      "contacts[0].type": "email",
      "contacts[0].value": "john@example.com",
      "contacts[1].type": "phone",
      "contacts[1].value": "123-456-7890"
    };

    const expectedOutput = {
      "name": "John",
      "address": {
        "street": "123 Main St",
        "city": "New York"
      },
      "contacts": [
        {
          "type": "email",
          "value": "john@example.com"
        },
        {
          "type": "phone",
          "value": "123-456-7890"
        }
      ]
    };

    expect(convertFromDotNotation(input)).toEqual(expectedOutput);
  });

  test('should handle empty input object', () => {
    const input = {};
    const expectedOutput = {};
    expect(convertFromDotNotation(input)).toEqual(expectedOutput);
  });

  test('should handle arrays with multiple indices', () => {
    const input = {
      "items[0]": "apple",
      "items[1]": "banana",
      "items[2]": "cherry"
    };

    const expectedOutput = {
      "items": ["apple", "banana", "cherry"]
    };

    expect(convertFromDotNotation(input)).toEqual(expectedOutput);
  });

  test('should handle deeply nested arrays and objects', () => {
    const input = {
      "users[0].name": "Alice",
      "users[0].contacts[0].type": "email",
      "users[0].contacts[0].value": "alice@example.com",
      "users[1].name": "Bob",
      "users[1].contacts[0].type": "phone",
      "users[1].contacts[0].value": "123-456-7890"
    };

    const expectedOutput = {
      "users": [
        {
          "name": "Alice",
          "contacts": [
            {
              "type": "email",
              "value": "alice@example.com"
            }
          ]
        },
        {
          "name": "Bob",
          "contacts": [
            {
              "type": "phone",
              "value": "123-456-7890"
            }
          ]
        }
      ]
    };

    expect(convertFromDotNotation(input)).toEqual(expectedOutput);
  });

  test('should handle add value', () => {
    const input = {
        "@context": "https://schema.org/",
        "@type": "Thing",
        "@id": "thing1",
        "name": "thing1"
      }

;
    const expectedOutput = {
        "@context": "https://schema.org/",
        "@type": "Thing",
        "@id": "thing1",
        "name": [
          "thing1",
          "thing2"
        ]
      }


    
    expect(h.dot.add(input, 'name', 'thing2')).toEqual(expectedOutput);
  });

  

});
