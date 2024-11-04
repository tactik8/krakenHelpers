

export const krakenUuidHelpers = {
    /**
     * UUID helpers
     * 
     */

    isValid: isValid,
    toString: toString,
    new: getNew,
    
}


// -----------------------------------------------------
//  Constructor 
// -----------------------------------------------------

function getNew(){
    /**
     * Returns a new uuid
     * @returns {String} The uuid
     */

    let value = String(crypto.randomUUID())
    return value
    
}


// -----------------------------------------------------
//  Base 
// -----------------------------------------------------

function isValid(value){
    /**
     * Check if value is a valid UUID
     * @param {String} value
     * @returns {Boolean}
     */
    return h.isString(value) && h.isUuid(value)
}



function toString(value){
    /**
     * Returns a string representation of the UUID
     * @param {String} value
     * @returns {String}
     */

    return String(value)
}