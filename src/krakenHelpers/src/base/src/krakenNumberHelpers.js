
import { krakenNullHelpers} from './krakenNullHelpers.js'

export const krakenNumberHelpers = {

    isValid: isValid,
    isvalid: isValid,
    toNumber: toNumber,
    toString: toString,
    round: round,
    round0: round0,
    round2: round2,
    round4: round4,
    isEven: isEven,
    isOdd: isOdd,
    
}


function isValid(value){
    /**
     * Checks if a value is a number
     * @param {Number} value
     * @returns {Boolean}
     */
    
    return typeof value === 'number';
    
}

function toNumber(value){
    /**
     * Converts a value to a number
     * @param {Number} value
     * @returns {Number}
     */

    if(typeof value === 'number') { return value }
    
    try { 
        value = Number(value)
        if(!isNaN(value)){ return value }
        
    } catch {

    }

    return null
}


function toString(value, rounding){
    /**
     * Converts a value to a string
     * @param {Number} value
     * @param {Number} rounding
     * @returns {String}
     */

    
    if(krakenNullHelpers.isNull(value)) { return '' }
    
    value = toNumber(value)

    

    if(krakenNullHelpers.isNotNull(rounding)){
        value = Math.round(value)
    }

    return String(value)
    
}

function round(number, decimalPlaces=0){
    /**
     * Rounds a number to a certain decimal place
     * @param {Number} number
     * @param {Number} decimalPlaces
     * @returns {Number}
     */

     const factor = Math.pow(10, decimalPlaces);
    return Math.round(number * factor) / factor;
}

function round0(number, decimalPlaces=0){

     const factor = Math.pow(10, decimalPlaces);
    return Math.round(number * factor) / factor;
}

function round2(number, decimalPlaces=2){

     const factor = Math.pow(10, decimalPlaces);
    return Math.round(number * factor) / factor;
}
function round4(number, decimalPlaces=4){

     const factor = Math.pow(10, decimalPlaces);
    return Math.round(number * factor) / factor;
}


function isEven(value){
    /**
     * Checks if a value is even
     * @param {Number} value
     * @returns {Boolean}
     */

    try{
        if(value % 2 == 1){
            return false
        } else {
            return true
        }

    } catch { return false }

}

function isOdd(value){
    /**
     * Checks if a value is odd
     * @param {Number} value
     * @returns {Boolean}
     */

    try{
        if(value % 2 == 0){
            return false
        } else {
            return true
        }

    } catch { return false }

}