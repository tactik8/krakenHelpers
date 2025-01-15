
import { krakenNullHelpers} from './krakenNullHelpers.js';

export const krakenHashHelpers = {
    get: getHash,
};





function getHash(str) {

    let value = str

    if(krakenNullHelpers.isNull(value)){
        value = 'null'
    }

    try {
        value = JSON.stringify(str)
    } catch {
        return null
    }

    let input = value
    
    const prime1 = 31; // A small prime number
    const prime2 = 37; // Another small prime number
    const seed = 0xabcdef; // Initial seed value
    let hash1 = seed;
    let hash2 = seed;

    for (let i = 0; i < input.length; i++) {
        const charCode = input.charCodeAt(i);
        hash1 = (hash1 * prime1) ^ charCode; // Mixing with prime1
        hash2 = (hash2 * prime2) ^ charCode; // Mixing with prime2
    }

    // Combine the two hashes into a pseudo 256-bit hash
    let combinedHash = ((hash1 & 0xffffffff) >>> 0).toString(16).padStart(8, '0') +
                       ((hash2 & 0xffffffff) >>> 0).toString(16).padStart(8, '0');

    // Repeat the process to generate a 64-character hash
    while (combinedHash.length < 64) {
        combinedHash += combinedHash; // Repeat pattern
    }

    return combinedHash.slice(0, 64); // Trim to 256 bits (64 hex chars)
}



function getHashOLD(str) {
    /**
     * Get a hash value
     * @param {Object} hash The hash
     * @returns {String} The hash value
     *
     */

    let value = str

    if(krakenNullHelpers.isNull(value)){
        value = 'null'
    }
    
    try {
        value = JSON.stringify(str)
    } catch {
        return null
    }

    
    let seed = 5;

    let h1 = 0xdeadbeef ^ seed,
        h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < value.length; i++) {
        ch = value.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
    h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
    h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);

    let hashValue = 4294967296 * (2097151 & h2) + (h1 >>> 0);

    return hashValue;
}
