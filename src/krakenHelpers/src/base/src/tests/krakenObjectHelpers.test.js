import { krakenObjectHelpers } from '../krakenObjectHelpers';


describe('krakenObjectHelpers', () => {

  describe('isValid', () => {
    test('should return true for valid objects', () => {
      expect(krakenObjectHelpers.isValid({ key: 'value' })).toBe(true);
    });
    test('should return false for invalid objects', () => {
      expect(krakenObjectHelpers.isValid(null)).toBe(false);
      expect(krakenObjectHelpers.isValid(undefined)).toBe(false);
    });
  });
  describe('keys', () => {
    test('should return keys of the object', () => {
      const obj = { key1: 'value1', key2: 'value2' };
      expect(krakenObjectHelpers.keys(obj)).toEqual(['key1', 'key2']);
    });
    test('should return empty array for non-object inputs', () => {
      expect(krakenObjectHelpers.keys(null)).toEqual([]);
      expect(krakenObjectHelpers.keys(123)).toEqual([]);
    });
  });
  describe('merge', () => {
    test('should correctly merge two objects', () => {
      const obj1 = { key1: 'value1' };
      const obj2 = { key2: 'value2' };
      expect(krakenObjectHelpers.merge(obj1, obj2)).toEqual({ key1: 'value1', key2: 'value2' });
    });

    test('should not mutate the original objects', () => {
      const obj1 = { key1: 'value1' };
      const obj2 = { key2: 'value2' };
      krakenObjectHelpers.merge(obj1, obj2);
      expect(obj1).toEqual({ key1: 'value1' });
      expect(obj2).toEqual({ key2: 'value2' });
    });
  });
});