import { krakenNullHelpers} from './krakenNullHelpers.js'
import { krakenArrayHelpers } from './krakenArrayHelpers.js'
const h = {
    null: krakenNullHelpers,
    isNull: krakenNullHelpers.isNull,
    isNotNull: krakenNullHelpers.isNotNull,
}


export const krakenDotNotationHelpers = {
    get: getPropertyValueFromDot,
    set: setPropertyValueFromDot,
    add: addPropertyValueFromDot,
    toDot: convertToDotNotation,
    fromDot: convertFromDotNotation,
    getValue: getPropertyValueFromDot,
    setValue: setPropertyValueFromDot,
    addValue: addPropertyValueFromDot,
}




function setPropertyValueFromDot(record, key, value){
    
    function _recursiveSet(record, key, value){

        // Set record
        if(h.isNull(record)){
            record = {}
        }
        
        // Get property and position from first item of key path
        let property1 = getCurrentKey(key)
        let position1 = getCurrentPosition(key)
        
        // Get value from property
        let value1 = record?.[property1]

        
        // If value is array but position not given, assume first item is modified (position 0)
        if(krakenArrayHelpers.isArray(value1)){
            position1 = 0
        }

        // Get value from position
        if(h.isNotNull(position1)){
            value1 = value1?.[position1]
        }

        // Check if done, else recurse
        let newKey = getNextDotKey(key)

        if(h.isNotNull(newKey)){

            if(h.isNull(position1)){
                record[property1] = _recursiveSet(value1, newKey, value)
            } else {
                record[property1] = krakenArrayHelpers.toArray(record[property1])
                record[property1][position1] = _recursiveSet(value1, newKey, value)
            }
        } else {
            if(h.isNull(position1)){
                record[property1] = value
            } else {
                record[property1] = krakenArrayHelpers.toArray(record[property1])
                record[property1][position1] = value
            }
        }
        return record
    }
    return _recursiveSet(record, key, value);
}


function addPropertyValueFromDot(record, key, value){
    /**
     * Add a value to the current set of values 
     */
    let currentValue = getPropertyValueFromDot(key, record)
    if(h.isNull(currentValue)){
        return setPropertyValueFromDot(record, key, value)
    } else {
        let newValue = krakenArrayHelpers.mergeUnique(currentValue, value)
        return setPropertyValueFromDot(record, key, newValue)
    }
    return true
    
}


function getPropertyValueFromDot(key, record){
    // Retrieves value by following dot notation


    // Swap values if mistake done (inverted parameters)
    if(typeof record == 'string' && typeof key != 'string'){

        let tkey = key
        let trecord = record
        key = trecord
        record= tkey
    }
    

    function _recursive(key, record){


        // if record is an array of one, convert to object
        if(krakenArrayHelpers.isArray(record) && record.length == 1){
            record == record[0]
        }

        // if record is null, return null
        if(h.isNull(record)){
            return null
        }
        
        // Get property
        let property1 = getCurrentKey(key)
        let position1 = getCurrentPosition(key)
        
        
        let value1 

        // Get value from property
        value1 = record?.[property1]

        // Convert value to array if position is defined
        if(h.isNotNull(position1)){
            value1 = krakenArrayHelpers.toArray(value1)
            value1 = value1?.[position1] || null
        } 

        


        // Check if done, else recurse
        let newKey = getNextDotKey(key)
        if(h.isNotNull(newKey)){
            // If value is array but position not defined, return first item
            if(h.isNull(position1) && krakenArrayHelpers.isArray(value1)){
                value1 = value1?.[0] || null
            } 
            return _recursive(newKey, value1)
        } else {
            return value1
        }        
    }

    return _recursive(key, record);
    
}




function convertToDotNotation(obj, parentKey = '', result = {}) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            const newKey = parentKey ? `${parentKey}.${key}` : key; // Combine parent key with current key

            if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
                // If it's a nested object (not an array), recurse
                convertToDotNotation(obj[key], newKey, result);
            } else if (Array.isArray(obj[key])) {
                // If it's an array, iterate over array elements and include index
                obj[key].forEach((item, index) => {
                    const arrayKey = `${newKey}[${index}]`;
                    if (typeof item === 'object') {
                        // Recurse for array elements that are objects
                        convertToDotNotation(item, arrayKey, result);
                    } else {
                        // Directly add non-object array elements
                        result[arrayKey] = item;
                    }
                });
            } else {
                // If it's a primitive value, add it to the result
                result[newKey] = obj[key];
            }
        }
    }
    return result;
}



function convertFromDotNotation(dotNotationObj) {
    const result = {};

    for (let key in dotNotationObj) {
        if (dotNotationObj.hasOwnProperty(key)) {
            const value = dotNotationObj[key];
            const keys = key.split('.'); // Split the key by dots
            let current = result;

            for (let i = 0; i < keys.length; i++) {
                const part = keys[i];

                // Check if the part contains array notation, e.g., "contacts[0]"
                const arrayMatch = part.match(/^(\w+)\[(\d+)\]$/);

                if (arrayMatch) {
                    const arrayKey = arrayMatch[1];
                    const arrayIndex = parseInt(arrayMatch[2], 10);

                    // Ensure the array exists at this key
                    if (!current[arrayKey]) {
                        current[arrayKey] = [];
                    }

                    // Ensure the specific index in the array exists
                    if (!current[arrayKey][arrayIndex]) {
                        current[arrayKey][arrayIndex] = (i === keys.length - 1) ? value : {};
                    }

                    // Move the reference to the current array item
                    current = current[arrayKey][arrayIndex];
                } else {
                    // Regular object key (no array notation)
                    if (!current[part]) {
                        current[part] = (i === keys.length - 1) ? value : {};
                    }

                    // Move the reference to the next nested level
                    current = current[part];
                }
            }
        }
    }

    return result;
}

function getCurrentKey(dotKey){

    if(h.isNull(dotKey)){ return null }

    // Get property
    let keyItems = dotKey.split('.')
    let keyItem1 = keyItems?.[0]

    let property1 = keyItem1.split('[')[0]
    let position1 = keyItem1.split('[')[1] || null


    return property1

}
function getCurrentPosition(dotKey){

    try{
        // Get property
        let keyItems = dotKey.split('.')
        let keyItem1 = keyItems?.[0]

        let property1 = keyItem1.split('[')[0]
        let position1 = keyItem1.split('[')[1] || null

        position1 = position1.replace(']', '')
        position1 = position1.trim()
        position1 = Number(position1)

        return position1
    } catch { return null }

}

function getNextDotKey(dotKey){

    let keyItems = dotKey.split('.')
    if(keyItems.length > 1){
        let newKeys = keyItems.slice(1)
        let newKey = newKeys.join('.')
        return newKey
    } else {
        return null
    }


}