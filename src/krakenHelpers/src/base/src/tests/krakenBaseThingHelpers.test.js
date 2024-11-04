// krakenBaseThingHelpers.test.js

import { krakenBaseThingHelpers } from '../krakenBaseThingHelpers';

describe('krakenBaseThingHelpers', () => {

  describe('isValid', () => {
    test('should return true for objects with @type and @id', () => {
      const validThing = { '@type': 'exampleType', '@id': 'exampleId' };
      expect(krakenBaseThingHelpers.isValid(validThing)).toBe(true);
    });

    test('should return false for objects missing @type or @id', () => {
      const invalidThing1 = { '@id': 'exampleId' }; 
      expect(krakenBaseThingHelpers.isValid(invalidThing1)).toBe(false);
    });
  });

  describe('toString', () => {
    test('should convert a thing to a string representation', () => {
      const thing = { '@type': 'exampleType', '@id': 'exampleId' };
      expect(krakenBaseThingHelpers.toString(thing)).toBe('exampleType exampleId');
    });
  });

  describe('isEmpty', () => {
    test('should return true for empty objects', () => {
      expect(krakenBaseThingHelpers.isEmpty({})).toBe(true);
    });

    test('should return false for non-empty objects', () => {
      const thing = { '@type': 'type', '@id': 'id', key: 'value' };
      expect(krakenBaseThingHelpers.isEmpty(thing)).toBe(false);
    });
  });

  describe('clone', () => {
    test('should create a deep copy of an object', () => {
      const thing = { '@type': 'type', '@id': 'id', details: { key: 'value' }};
      const clonedThing = krakenBaseThingHelpers.clone(thing);
      expect(clonedThing?.details).toEqual(thing?.details);
      expect(clonedThing?.['@id']).not.toEqual(thing?.['@id']); // Ensure it's not the same reference
    });
  });

  describe('keys', () => {
    test('should return keys of an object', () => {
      const obj = { '@type': 'type', '@id': 'id', key1: 'value1', key2: 'value2' };
      expect(krakenBaseThingHelpers.keys(obj)).toEqual(['key1', 'key2']);
    });
  });

  // Additional tests for other functions can be added here
});