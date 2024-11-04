
import { krakenNullHelpers as h} from './krakenNullHelpers.js'

export const krakenJsonHelpers = {


    isValid: isValid,
    flatten: objectToDotNotation,
    objectToDotNotation: objectToDotNotation,
    simplify: simplify,
    toPropertiesList: jsonToPropertiesSingle,
    toPropertiesSingle: jsonToPropertiesList
    
}

function isValid(value){
    /**
     * Checks if a value is a valid JSON string
     * @param {String} value
     * @returns {Boolean}
     * 
     */

    try{
        let l = JSON.parse(value)
        return true
    } catch {
        return false
    }
}



function simplify(data) {
    /**
     * Simplify a json object
     * @param {Object} data The data
     * @returns {Object} The simplified data
     * 
     */

    if(h.isNull(data)){ return null }
    
    
    // Remove arrays of 1
    if (Array.isArray(data) && typeof data != 'string') {
        // If the array has exactly one element, return that element
        
        if (data.length === 1) {
            return simplify(data[0]);
        } else {
            // Otherwise, process each element in the array
            return data.map(simplify);
        }
    } else if (data !== null && typeof data === 'object' && Object.keys(data).length > 0) {


        // Skip if thing class object
        if(data.record_type){
            return data
        }
        
        // Sort keys
        let keys = Object.keys(data).sort()
        
        
        for (const key of keys) {

            
            let value = simplify(data[key]);
            if(value === 0  || (value !== null && value !== undefined)){
                data[key] = value
            } else {
                delete data[key]
            }
                
           
        }
        return data;
    } else {
        
        return data;
    }
}


function jsonToPropertiesSingle(record){
    /**
     * Converts a json object to a list of properties
     * @param {Object} record The record
     * @returns {Array} The list of properties
     * 
     */

    
    // Converts lists to single item(the first item)


    if(Array.isArray(record)){
        if(record.length == 0) { return null }
        record = record[0]
    }

    if(Object.keys(record)){
        for(let k of Object.jeys(record)){
            record[k] = jsonWithoutList(record[k])
        }
    }
    return record
}

function jsonToPropertiesList(record){
    /**
     * Converts a json object to a list of properties
     * @param {Object} record The record
     * @returns {Array} The list of properties
     * 
     */

    
    // Converts single items to lists


    if(Array.isArray(record)){
        let newArray = []
        for(let r of record){
            newArray.push(jsonToLists(r))
        }
        record = newArray
    }

    if(Object.keys(record)){
        for(let k of Object.jeys(record)){
            record[k] = [record[k]]
        }
    }
    return record
}



function getPropertyValueFromDot(key, value){
    // Retrieves value by following dot notation

    var items =key.split('.');
    for (let t=0; t<items.length; t++){
        value = value[items[t]];
    };
    return value;
}


function setPropertyValueFromDot(key, record, value){
    // Retrieves value by following dot notation

    var items = key.split('.');

    let item = items[0]


    if(items.length > 1){
        if(!record[item]){
            record[item] = {}
        }

        setPropertyValueFromDot(items.slice(1).join('.'), record[item], value)
    } else {

        record[item] = value
    }

    return record;
}



function objectToDotNotation(obj, parentPrefix = '') {
    /**
     * Converts an object to a dot notation object
     * @param {Object} obj The object
     * @param {String} parentPrefix The parent prefix
     * @returns {Object} The dot notation object
     * 
     */

    
    let result = {};

    // Helper function to handle recursion and path building
    function recurse(o, path) {
        for (let key in o) {
            if (o.hasOwnProperty(key)) {
                const newPath = path ? `${path}.${key}` : key;

                // If the property is an object or array, recurse further
                if (typeof o[key] === 'object' && o[key] !== null) {
                    recurse(o[key], newPath);
                } else {
                    // Otherwise, add the property to the result
                    result[newPath] = o[key];
                }
            }
        }
    }

    recurse(obj, parentPrefix);
    return result;
}

