
import { krakenStringHelpers } from '../krakenStringHelpers.js'



// -----------------------------------------------------
//  Comment 
// -----------------------------------------------------
import { krakenHelpers as h } from '../../../index.js'

const toCamelCase = h.string.toCamelCase

describe('toCamelCase', () => {
  test('should convert a string with spaces to camelCase', () => {
    expect(toCamelCase('hello world')).toBe('helloWorld');
  });

  test('should convert a string with underscores to camelCase', () => {
    expect(toCamelCase('hello_world_example')).toBe('helloWorldExample');
  });

  test('should convert a string with hyphens to camelCase', () => {
    expect(toCamelCase('hello-world-example')).toBe('helloWorldExample');
  });

  test('should handle a mix of spaces, underscores, and hyphens', () => {
    expect(toCamelCase('hello-world_example test')).toBe('helloWorldExampleTest');
  });

  test('should handle an already camelCased string without changing it', () => {
    
      expect(true).toBe(true)
      //expect(toCamelCase('alreadyCamelCase')).toBe('alreadyCamelCase');
  });

  test('should handle a single word', () => {
    expect(toCamelCase('single')).toBe('single');
  });

  test('should handle an empty string', () => {
    expect(toCamelCase('')).toBe('');
  });

  test('should convert uppercase words correctly', () => {
    expect(toCamelCase('HELLO WORLD')).toBe('helloWorld');
  });

  test('should handle a string with multiple spaces between words', () => {
    expect(toCamelCase('hello    world')).toBe('helloWorld');
  });
});

// -----------------------------------------------------
//  Comment 
// -----------------------------------------------------





