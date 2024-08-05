
import { krakenUrlHelpers } from '../krakenUrlHelpers.js'


const extractDomain = krakenUrlHelpers.getDomain

describe('extractDomain', () => {
  test('should extract domain from a valid URL', () => {
    expect(extractDomain('https://www.example.com/path')).toBe('example.com');
    expect(extractDomain('http://example.com')).toBe('example.com');
    expect(extractDomain('https://subdomain.example.co.uk/path')).toBe('subdomain.example.co.uk');
  });

  test('should handle invalid URLs', () => {
    expect(extractDomain('not a url')).toStrictEqual(undefined);
    expect(extractDomain('htp://wrong.protocol')).toStrictEqual(undefined);
    expect(extractDomain('')).toBe(undefined);
    expect(extractDomain(null)).toBe(undefined);
    expect(extractDomain(undefined)).toBe(undefined);
  });

  test('should handle URLs without protocol', () => {
    expect(extractDomain('www.example.com/path')).toBe(undefined);
  });
});


// -----------------------------------------------------
//  Comment 
// -----------------------------------------------------

const buildUrl = krakenUrlHelpers.getUrl

describe('buildUrl', () => {
    test('should build a URL with base URL, path, and params', () => {
        const baseUrl = 'https://example.com';
        const path = '/api/resource';
        const params = { id: 123, name: 'test' };
        const expectedUrl = 'https://example.com/api/resource?id=123&name=test';
        expect(buildUrl(baseUrl, path, params)).toBe(expectedUrl)
    });

    test('should build a URL without params', () => {
        const baseUrl = 'https://example.com';
        const path = '/api/resource';
        const expectedUrl = 'https://example.com/api/resource';
        expect(buildUrl(baseUrl, path)).toBe(expectedUrl);
    });

    test('should build a URL with empty params', () => {
        const baseUrl = 'https://example.com';
        const path = '/api/resource';
        const params = {};
        const expectedUrl = 'https://example.com/api/resource';
        expect(buildUrl(baseUrl, path, params)).toBe(expectedUrl);
    });

    test('should handle null and undefined params', () => {
        const baseUrl = 'https://example.com';
        const path = '/api/resource';
        const params = { id: null, name: undefined };
        const expectedUrl = 'https://example.com/api/resource';
        expect(buildUrl(baseUrl, path, params)).toBe(expectedUrl);
    });

    test('should return null for invalid base URL', () => {
        const path = '/api/resource';
        const params = { id: 123, name: 'test' };
        expect(buildUrl(null, path, params)).toBeNull();
        expect(buildUrl(123, path, params)).toBeNull();
    });

    test('should return null for invalid path', () => {
        const baseUrl = 'https://example.com';
        const params = { id: 123, name: 'test' };
        expect(buildUrl(baseUrl, null, params)).toBeNull();
        expect(buildUrl(baseUrl, 123, params)).toBeNull();
    });

    test('should return null for invalid params', () => {
        const baseUrl = 'https://example.com';
        const path = '/api/resource';
        expect(buildUrl(baseUrl, path, 'invalid')).toBeNull();
    });
});
