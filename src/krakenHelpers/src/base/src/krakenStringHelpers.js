import { krakenDateHelpers } from "./krakenDateHelpers.js";
import { krakenNullHelpers} from './krakenNullHelpers.js'
import { krakenDotNotationHelpers } from "./krakenDotNotationHelpers.js";

export const krakenStringHelpers = {
    isValid: isValid,
    toString: toString,
    toCamelCase: toCamelCase,
    fromCamelCase: fromCamelCase,
    capitalize: capitalizeWords,
    clean: cleanString
    
};


function isValid(str){
    /**
     * Checks if a string is valid
     * @param {String} str
     * @returns {Boolean}
     * 
     */

    if(typeof str == 'string'){
        return true
    }
    return false
    
}

function toString(value){
    /**
     * Converts a value to a string
     * @param {Object} value
     * @returns {String}
     */

    if(krakenNullHelpers.isNull(value)){ return ''}
    
    try {
        return value.toString() 
    } catch {
         return String(value)
    }
    
    
}


function cleanString(str){
    /**
     * Clean up string by removing spaces and non standard charcters
     * @param {String} str
     * @returns {String}
     */
    let string = str

    // Remove html codes
    string =  string.replace(/<\/?[^>]+(>|$)/g, "");

    // Remove next lines
    string = string.replace('\n', '')

    // remove spaces
    string = string.trim()


    return string
}



function toCamelCase(str) {
    /**
     * Converts a string to camel case
     * @param {String} str
     * @returns {String}
     */
    
    return (
        str
            // Split the string by spaces, underscores, or hyphens
            .split(/[-_\s]+/)
            // Convert the first word to lowercase and capitalize the first letter of the following words
            .map((word, index) =>
                index === 0
                    ? word.toLowerCase()
                    : word.charAt(0).toUpperCase() +
                      word.slice(1).toLowerCase(),
            )
            // Join them back into a single string
            .join("")
    );
}

function fromCamelCase(str) {
    /**
     * Converts a string from camel case
     * @param {String} str
     * @returns {String}
     */

    
    return (
        str
            // Insert a space before every uppercase letter and convert the whole string to lowercase
            .replace(/([A-Z])/g, " $1")
            .toLowerCase()
            .trim()
    );
}



function capitalizeWords(input) {
    /**
     * Capitalize the first letter of each word in a string
     * @param {String} input
     * @returns {String}
     */

    
    // Error checking: input should be a string
    if (typeof input !== 'string') {
        return input
    }
    try{

        // Split the string into an array of words, capitalize the first letter of each word, then join them back into a single string
        return input.split(' ').map(word => {
            if (word.length > 0) {
                return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
            return word; // Handles cases where there might be multiple spaces
        }).join(' ');
    } catch (error){ return input}
}


// -----------------------------------------------------
//  Comment 
// -----------------------------------------------------

