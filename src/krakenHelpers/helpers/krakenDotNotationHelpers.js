

export const krakenDotNotationHelpers = {
    toDot: convertToDotNotation,
    fromDot: convertFromDotNotation,
    getValue: getPropertyValueFromDot,
    setValue: setPropertyValueFromDot
}



function setPropertyValueFromDot(record, key, value){

    function _recursiveSet(record, key, value){

        // Get property
        let keyItems = key.split('.')
        let keyItem1 = keyItems?.[0]


        let property1 = keyItem1.split('[')[0]
        let position1 = keyItem1.split('[')[1] || null

        
        
        let value1 = value?.[property1]


        if(position1 && position1 != null){
           
            try{
                position1 = position1.replace(']', '')
                position1 = position1.trim()
                position1 = Number(position1)
                if(!Array.isArray(value1)){value1 = [value1]}
                value1 = value1?.[arrayPosition] || null
            } catch {

            }
        }

        // Check if done, else recurse
        if(keyItems.length > 1){
            let newKeys = keyItems.slice(1)
            let newKey = newKeys.join('.')

            if(!position1 || position1 == null){
                if(!value1){ value1 = {}}
                record[property1] = _recursiveSet(value1, newKey, value)
                return record
            } else {
                if(!value1){ value1 = []}
                record[property1][position1] = _recursiveSet(value1, newKey, value) 
                return record
            }
            
        } else {

            if(!position1 || position1 == null){
                if(!record?.[property1]){ record[property1] = {}}
                record[property1] = value
                return record
            } else {
                if(!record?.[property1]){ record[property1] = []}
                record[property1][position1] = value 
                return record
            }

        }


    }


    return _recursiveSet(record, key, value);
    
}


function getPropertyValueFromDot(key, value){
    // Retrieves value by following dot notation



    function _recursive(key, value){

        // Get property
        let keyItems = key.split('.')
        let keyItem1 = keyItems?.[0]
        

        let property1 = keyItem1.split('[')[0]
        let position1 = keyItem1.split('[')[1] || null
        
        let value1 = value?.[property1]

        
        if(position1){
            try{
                position1 = position1.replace(']', '')
                position1 = position1.trim()
                position1 = Number(position1)
                if(!Array.isArray(value1)){value1 = [value1]}
                value1 = value1?.[arrayPosition] || null
            } catch {

            }
        }
        
        // Check if done, else recurse
        if(keyItems.length > 1){
            let newKeys = keyItems.slice(1)
            let newKey = newKeys.join('.')
            return _recursive(newKey, value1)
        } else {
            return value1
        }
        
        
    }

    
    return _recursive(key, value);
    
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
