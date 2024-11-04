
import { krakenNullHelpers} from './krakenNullHelpers.js';

export const krakenHashHelpers = {
    get: getHash,
};

function getHash(str) {
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
