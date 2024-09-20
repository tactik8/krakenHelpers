

export const krakenDotNotationHelpers = {
    toDot: convertToDotNotation,
    fromDot: convertFromDotNotation,
    getValue: getPropertyValueFromDot
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


function getPropertyValueFromDot(key, value){
    // Retrieves value by following dot notation

    var items =key.split('.');

    for (let t=0; t<items.length; t++){
        value = value[items[t]];
    };


    return value;
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
