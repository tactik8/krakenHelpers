// krakenNumberHelpers.test.js

import { krakenNumberHelpers } from '../krakenNumberHelpers';

describe('krakenNumberHelpers', () => {

  describe('isValid', () => {
    test('should return true for valid numbers', () => {
      expect(krakenNumberHelpers.isValid(1)).toBe(true);
      expect(krakenNumberHelpers.isValid(0)).toBe(true);
    });

    test('should return false for non-numbers', () => {
      expect(krakenNumberHelpers.isValid('string')).toBe(false);
      expect(krakenNumberHelpers.isValid(null)).toBe(false);
    });
  });

  describe('toNumber', () => {
    test('should convert valid strings to numbers', () => {
      expect(krakenNumberHelpers.toNumber('1')).toBe(1);
      expect(krakenNumberHelpers.toNumber('0.5')).toBe(0.5);
    });

    test('should return null for invalid strings', () => {
      expect(krakenNumberHelpers.toNumber('string')).toBe(null);
    });
  });

  describe('toString', () => {
    test('should convert numbers to strings without rounding by default', () => {
      expect(krakenNumberHelpers.toString(1.25)).toBe('1.25');
    });

    test('should convert numbers to rounded strings when a rounding factor is provided', () => {
      expect(krakenNumberHelpers.toString(1.255, 2)).toBe('1');
    });

    test('should return undefined for null or undefined', () => {
      expect(krakenNumberHelpers.toString(null)).toBe('');
    });
  });

  describe('round', () => {
    test('should round numbers to the nearest integer when no decimal places are specified', () => {
      expect(krakenNumberHelpers.round(1.6)).toBe(2);
    });

    test('should round numbers to specified decimal places', () => {
      expect(krakenNumberHelpers.round(1.2345, 2)).toBe(1.23);
    });
  });

});