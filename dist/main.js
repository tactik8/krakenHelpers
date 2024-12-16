const $41e9b357c493982e$export$f8c0f914c8a0ee10 = {
    isNull: $41e9b357c493982e$var$isNull,
    isNUll: $41e9b357c493982e$var$isNull,
    isNotNull: $41e9b357c493982e$var$isNotNull,
    isNotNUll: $41e9b357c493982e$var$isNotNull,
    isEqual: $41e9b357c493982e$var$isEqual,
    isNotEqual: $41e9b357c493982e$var$isNotEqual
};
function $41e9b357c493982e$var$isNotNull(value1) {
    /**
     * Returns true if value is not null
     * @param {Object} value
     * @returns {Boolean}
     */ return !$41e9b357c493982e$var$isNull(value1);
}
function $41e9b357c493982e$var$isNull(value1) {
    /**
     * Returns true if value is null
     * @param {*} value
     * @returns {boolean}
     * 
     */ if (value1 === 0) return false;
    if (value1 === undefined) return true;
    if (value1 === null) return true;
    if (value1 === "") return true;
    if (Number.isNaN(value1)) return true;
    try {
        if (value1 instanceof HTMLElement) return false;
    } catch  {}
    // Check if date
    try {
        if (value1 instanceof Date) return false;
    } catch (error) {}
    // If array, removes null values then check if length == 0
    if (Array.isArray(value1)) {
        value1 = value1.filter((x)=>$41e9b357c493982e$var$isNull(x) == false);
        if (value1.length == 0) return true;
        else return false;
    }
    // If object, check if it has keys
    if (typeof value1 === "object" && !Array.isArray(value1) && value1 !== null) {
        if (Object.keys(value1).length == 0) return true;
        else return false;
    }
    // Catch all
    return false;
}
function $41e9b357c493982e$var$isNotEqual(value1, value2) {
    /**
     * Returns true if value1 is not equal to value2
     * @param {*} value1
     * @param {*} value2
     * @returns {boolean}
     */ return !$41e9b357c493982e$var$isEqual(value1, value2);
}
function $41e9b357c493982e$var$isEqual(value1, value2) {
    /**
     * Returns true if value1 is equal to value2
     * @param {*} value1
     * @param {*} value2
     * @returns {boolean}
     */ // if nulls
    if ($41e9b357c493982e$var$isNull(value1) && $41e9b357c493982e$var$isNull(value2)) return true;
    if ($41e9b357c493982e$var$isNull(value1) && $41e9b357c493982e$var$isNotNull(value2)) return false;
    if ($41e9b357c493982e$var$isNotNull(value1) && $41e9b357c493982e$var$isNull(value2)) return false;
    // Equality for others
    try {
        if (value == value2) return true;
    } catch  {}
    // Equality for Thing
    let v1_record_type = value1?.record_type || value1?.["@type"];
    let v2_record_type = value2?.record_type || value2?.["@type"];
    let v1_record_id = value1?.record_id || value1?.["@id"];
    let v2_record_id = value2?.record_id || value2?.["@id"];
    if ($41e9b357c493982e$var$isNull(v1_record_type) && $41e9b357c493982e$var$isNotNull(v2_record_type)) return false;
    if ($41e9b357c493982e$var$isNotNull(v1_record_type) && $41e9b357c493982e$var$isNull(v2_record_type)) return false;
    if ($41e9b357c493982e$var$isNull(v1_record_id) && $41e9b357c493982e$var$isNotNull(v2_record_id)) return false;
    if ($41e9b357c493982e$var$isNotNull(v1_record_id) && $41e9b357c493982e$var$isNull(v2_record_id)) return false;
    if ($41e9b357c493982e$var$isNotNull(v1_record_type) && $41e9b357c493982e$var$isNotNull(v2_record_type)) {
        if ($41e9b357c493982e$var$isNotNull(v1_record_id) && $41e9b357c493982e$var$isNotNull(v2_record_id)) {
            if (v1_record_type == v2_record_type && v1_record_id == v2_record_id) return true;
            else return false;
        }
    }
    // Equality for objects
    try {
        if (JSON.stringify(value1) == JSON.stringify(value2)) return true;
    } catch  {}
    return false;
}




const $44ebc265e2335159$export$96be39e8128f5891 = {
    isValid: $44ebc265e2335159$var$isValid,
    isvalid: $44ebc265e2335159$var$isValid,
    toNumber: $44ebc265e2335159$var$toNumber,
    toString: $44ebc265e2335159$var$toString,
    round: $44ebc265e2335159$var$round,
    round0: $44ebc265e2335159$var$round0,
    round2: $44ebc265e2335159$var$round2,
    round4: $44ebc265e2335159$var$round4,
    isEven: $44ebc265e2335159$var$isEven,
    isOdd: $44ebc265e2335159$var$isOdd
};
function $44ebc265e2335159$var$isValid(value) {
    /**
     * Checks if a value is a number
     * @param {Number} value
     * @returns {Boolean}
     */ return typeof value === "number";
}
function $44ebc265e2335159$var$toNumber(value) {
    /**
     * Converts a value to a number
     * @param {Number} value
     * @returns {Number}
     */ if (typeof value === "number") return value;
    try {
        value = Number(value);
        if (!isNaN(value)) return value;
    } catch  {}
    return null;
}
function $44ebc265e2335159$var$toString(value, rounding) {
    /**
     * Converts a value to a string
     * @param {Number} value
     * @param {Number} rounding
     * @returns {String}
     */ if ((0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNull(value)) return "";
    value = $44ebc265e2335159$var$toNumber(value);
    if ((0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNotNull(rounding)) value = Math.round(value);
    return String(value);
}
function $44ebc265e2335159$var$round(number, decimalPlaces = 0) {
    /**
     * Rounds a number to a certain decimal place
     * @param {Number} number
     * @param {Number} decimalPlaces
     * @returns {Number}
     */ const factor = Math.pow(10, decimalPlaces);
    return Math.round(number * factor) / factor;
}
function $44ebc265e2335159$var$round0(number, decimalPlaces = 0) {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(number * factor) / factor;
}
function $44ebc265e2335159$var$round2(number, decimalPlaces = 2) {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(number * factor) / factor;
}
function $44ebc265e2335159$var$round4(number, decimalPlaces = 4) {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(number * factor) / factor;
}
function $44ebc265e2335159$var$isEven(value) {
    /**
     * Checks if a value is even
     * @param {Number} value
     * @returns {Boolean}
     */ try {
        if (value % 2 == 1) return false;
        else return true;
    } catch  {
        return false;
    }
}
function $44ebc265e2335159$var$isOdd(value) {
    /**
     * Checks if a value is odd
     * @param {Number} value
     * @returns {Boolean}
     */ try {
        if (value % 2 == 0) return false;
        else return true;
    } catch  {
        return false;
    }
}




const $2cf68f4048a6f85f$var$h = {
    null: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10),
    isNull: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNull,
    isNotNull: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNotNull
};
const $2cf68f4048a6f85f$export$fe5b3308000496d5 = {
    get: $2cf68f4048a6f85f$var$getPropertyValueFromDot,
    set: $2cf68f4048a6f85f$var$setPropertyValueFromDot,
    add: $2cf68f4048a6f85f$var$addPropertyValueFromDot,
    toDot: $2cf68f4048a6f85f$var$convertToDotNotation,
    fromDot: $2cf68f4048a6f85f$var$convertFromDotNotation,
    getValue: $2cf68f4048a6f85f$var$getPropertyValueFromDot,
    setValue: $2cf68f4048a6f85f$var$setPropertyValueFromDot,
    addValue: $2cf68f4048a6f85f$var$addPropertyValueFromDot,
    propertyPath: {
        getCurrentKey: $2cf68f4048a6f85f$var$getCurrentKey,
        getCurrentPosition: $2cf68f4048a6f85f$var$getCurrentPosition,
        getNextItems: $2cf68f4048a6f85f$var$getNextDotKey
    }
};
function $2cf68f4048a6f85f$var$setPropertyValueFromDot(record, key, value) {
    /**
     * Sets a property value from a dot notation path
     * @param {Object} record
     * @param {String} key
     * @param {Object} value
     * @returns {Object} The record
     */ if ($2cf68f4048a6f85f$var$h.isNull(record)) return null;
    if ($2cf68f4048a6f85f$var$h.isNull(key)) return null;
    function _recursiveSet(record, key, value) {
        // Set record
        if ($2cf68f4048a6f85f$var$h.isNull(record)) record = {};
        // Get property and position from first item of key path
        let property1 = $2cf68f4048a6f85f$var$getCurrentKey(key);
        let position1 = $2cf68f4048a6f85f$var$getCurrentPosition(key);
        // Get value from property
        let value1 = record?.[property1];
        // If value is array but position not given, assume first item is modified (position 0)
        (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00).isArray(value1);
        // Get value from position
        if ($2cf68f4048a6f85f$var$h.isNotNull(position1)) value1 = value1?.[position1];
        // Check if done, else recurse
        let newKey = $2cf68f4048a6f85f$var$getNextDotKey(key);
        if ($2cf68f4048a6f85f$var$h.isNotNull(newKey)) {
            if ($2cf68f4048a6f85f$var$h.isNull(position1)) record[property1] = _recursiveSet(value1, newKey, value);
            else {
                record[property1] = (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00).toArray(record[property1]);
                record[property1][position1] = _recursiveSet(value1, newKey, value);
            }
        } else if ($2cf68f4048a6f85f$var$h.isNull(position1)) record[property1] = value;
        else {
            record[property1] = (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00).toArray(record[property1]);
            record[property1][position1] = value;
        }
        return record;
    }
    return _recursiveSet(record, key, value);
}
function $2cf68f4048a6f85f$var$addPropertyValueFromDot(record, key, value) {
    /**
     * Add a value to the current set of values
     * @param {Object} record
     * @param {String} key
     * @param {Object} value
     * @returns {Object} The record
     */ let currentValue = $2cf68f4048a6f85f$var$getPropertyValueFromDot(key, record);
    if ($2cf68f4048a6f85f$var$h.isNull(currentValue)) return $2cf68f4048a6f85f$var$setPropertyValueFromDot(record, key, value);
    else {
        let newValue = (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00).mergeUnique(currentValue, value);
        return $2cf68f4048a6f85f$var$setPropertyValueFromDot(record, key, newValue);
    }
    return true;
}
function $2cf68f4048a6f85f$var$getPropertyValueFromDot(key, record) {
    /**
     * Gets a property value from a dot notation path
     * @param {String} key
     * @param {Object} record
     * @returns {Object} The value
     * 
     */ // Retrieves value by following dot notation
    // Swap values if mistake done (inverted parameters)
    if (typeof record == "string" && typeof key != "string") [key, record] = [
        record,
        key
    ];
    // Shortcut if no dot or [] present
    if (!key.includes(".") && !key.includes("[")) return record?.[key] || null;
    //
    function _recursive(key, record) {
        // if record is an array of one, convert to object
        if ((0, $2092c12a98cb2c2e$export$4736c2d1b0001d00).isArray(record) && record.length == 1) record[0];
        // if record is null, return null
        if ($2cf68f4048a6f85f$var$h.isNull(record)) return null;
        // Get property
        let property1 = $2cf68f4048a6f85f$var$getCurrentKey(key);
        let position1 = $2cf68f4048a6f85f$var$getCurrentPosition(key);
        let value1;
        // Get value from property
        value1 = record?.[property1];
        // Convert value to array if position is defined
        if ($2cf68f4048a6f85f$var$h.isNotNull(position1)) {
            value1 = (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00).toArray(value1);
            value1 = value1?.[position1] || null;
        }
        // Check if done, else recurse
        let newKey = $2cf68f4048a6f85f$var$getNextDotKey(key);
        if ($2cf68f4048a6f85f$var$h.isNotNull(newKey)) {
            // If value is array but position not defined, return first item
            if ($2cf68f4048a6f85f$var$h.isNull(position1) && (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00).isArray(value1)) value1 = value1?.[0] || null;
            return _recursive(newKey, value1);
        } else return value1;
    }
    return _recursive(key, record);
}
function $2cf68f4048a6f85f$var$convertToDotNotation(obj, parentKey = "", result = {}) {
    /**
     * Converts an object to dot notation
     * @param {Object} obj
     * @param {String} parentKey
     * @param {Object} result
     * @returns {Object} The converted object
     */ for(let key in obj)if (obj.hasOwnProperty(key)) {
        const newKey = parentKey ? `${parentKey}.${key}` : key; // Combine parent key with current key
        if (typeof obj[key] === "object" && !Array.isArray(obj[key])) // If it's a nested object (not an array), recurse
        $2cf68f4048a6f85f$var$convertToDotNotation(obj[key], newKey, result);
        else if (Array.isArray(obj[key])) // If it's an array, iterate over array elements and include index
        obj[key].forEach((item, index)=>{
            const arrayKey = `${newKey}[${index}]`;
            if (typeof item === "object") // Recurse for array elements that are objects
            $2cf68f4048a6f85f$var$convertToDotNotation(item, arrayKey, result);
            else // Directly add non-object array elements
            result[arrayKey] = item;
        });
        else // If it's a primitive value, add it to the result
        result[newKey] = obj[key];
    }
    return result;
}
function $2cf68f4048a6f85f$var$convertFromDotNotation(dotNotationObj) {
    /**
     * Converts a dot notation object to a regular object
     * @param {Object} dotNotationObj
     * @returns {Object} The converted object
     * 
     */ const result = {};
    for(let key in dotNotationObj)if (dotNotationObj.hasOwnProperty(key)) {
        const value = dotNotationObj[key];
        const keys = key.split("."); // Split the key by dots
        let current = result;
        for(let i = 0; i < keys.length; i++){
            const part = keys[i];
            // Check if the part contains array notation, e.g., "contacts[0]"
            const arrayMatch = part.match(/^(\w+)\[(\d+)\]$/);
            if (arrayMatch) {
                const arrayKey = arrayMatch[1];
                const arrayIndex = parseInt(arrayMatch[2], 10);
                // Ensure the array exists at this key
                if (!current[arrayKey]) current[arrayKey] = [];
                // Ensure the specific index in the array exists
                if (!current[arrayKey][arrayIndex]) current[arrayKey][arrayIndex] = i === keys.length - 1 ? value : {};
                // Move the reference to the current array item
                current = current[arrayKey][arrayIndex];
            } else {
                // Regular object key (no array notation)
                if (!current[part]) current[part] = i === keys.length - 1 ? value : {};
                // Move the reference to the next nested level
                current = current[part];
            }
        }
    }
    return result;
}
function $2cf68f4048a6f85f$var$getCurrentKey(dotKey) {
    /**
     * Gets the first key from a dot notation path
     * @param {String} dotKey
     * @returns {String} The current key
     * 
     */ if ($2cf68f4048a6f85f$var$h.isNull(dotKey)) return null;
    // Get property
    let keyItems = dotKey.split(".");
    let keyItem1 = keyItems?.[0];
    let property1 = keyItem1.split("[")[0];
    let position1 = keyItem1.split("[")[1] || null;
    return property1;
}
function $2cf68f4048a6f85f$var$getCurrentPosition(dotKey) {
    /**
     * Gets the first position from a dot notation path
     * @param {String} dotKey
     * @returns {String} The current position
     */ try {
        // Get property
        let keyItems = dotKey.split(".");
        let keyItem1 = keyItems?.[0];
        let property1 = keyItem1.split("[")[0];
        let position1 = keyItem1.split("[")[1] || null;
        position1 = position1.replace("]", "");
        position1 = position1.trim();
        position1 = Number(position1);
        return position1;
    } catch  {
        return null;
    }
}
function $2cf68f4048a6f85f$var$getNextDotKey(dotKey) {
    /**
     * Gets the remaining keys / values from a dot notation path
     * @param {String} dotKey
     * @returns {String} The next key
     */ let keyItems = dotKey.split(".");
    if (keyItems.length > 1) {
        let newKeys = keyItems.slice(1);
        let newKey = newKeys.join(".");
        return newKey;
    } else return null;
}


let $2092c12a98cb2c2e$var$h = {
    number: (0, $44ebc265e2335159$export$96be39e8128f5891),
    null: null,
    isNull: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNull,
    isNotNull: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNotNull
};
const $2092c12a98cb2c2e$export$4736c2d1b0001d00 = {
    toString: $2092c12a98cb2c2e$var$toString,
    toString: $2092c12a98cb2c2e$var$toString,
    isValid: $2092c12a98cb2c2e$var$isValid,
    isArray: $2092c12a98cb2c2e$var$isValid,
    isValid: $2092c12a98cb2c2e$var$isValid,
    toArray: $2092c12a98cb2c2e$var$toArray,
    toArray: $2092c12a98cb2c2e$var$toArray,
    keys: $2092c12a98cb2c2e$var$keys,
    keys: $2092c12a98cb2c2e$var$keys,
    getValuesForKey: $2092c12a98cb2c2e$var$getValuesForKey,
    getNumbersForKey: $2092c12a98cb2c2e$var$getNumbersForKey,
    merge: $2092c12a98cb2c2e$var$merge,
    mergeUnique: $2092c12a98cb2c2e$var$mergeUnique
};
// -----------------------------------------------------
//  Validation 
// -----------------------------------------------------
function $2092c12a98cb2c2e$var$isValid(value) {
    /**
     * Checks if a value is valid
     * @param {Object} value
     * @returns {Boolean}
     * 
     */ if (typeof value == "string") return false;
    if (Array.isArray(value)) return true;
    return false;
}
// -----------------------------------------------------
//  Transformation 
// -----------------------------------------------------
function $2092c12a98cb2c2e$var$toArray(value) {
    /**
     * Converts a value to an array
     * @param {Object} value
     * @returns {Array}
     */ if ($2092c12a98cb2c2e$var$h.isNull(value)) return [];
    if (typeof value == "string") return [
        value
    ];
    if ($2092c12a98cb2c2e$var$isValid(value)) return value;
    else return [
        value
    ];
}
function $2092c12a98cb2c2e$var$toString(value) {
    /**
     * Converts a value to a string
     * @param {Object} value
     * @returns {String}
     */ if ($2092c12a98cb2c2e$var$isValid(value) == false) return undefined;
    let result = `[${value.length}]`;
    return result;
}
// -----------------------------------------------------
//  Query 
// -----------------------------------------------------
function $2092c12a98cb2c2e$var$keys(value) {
    /**
     * Returns the keys of an object
     * @param {Object} value
     * @returns {Array}
     */ if ($2092c12a98cb2c2e$var$isValid(value) == false) return undefined;
    let keys = [];
    for (let v of value){
        for (let k of Object.keys(v))if (!keys.includes(k)) keys.push(k);
    }
    keys.sort();
    return keys;
}
function $2092c12a98cb2c2e$var$getValuesForKey(value, key) {
    /**
     * Returns the values for a key
     * @param {Object} value
     * @param {String} key
     * @returns {Array}
     */ // If not key, return value
    if ($2092c12a98cb2c2e$var$h.isNull(key)) return value;
    value = $2092c12a98cb2c2e$var$toArray(value);
    if ($2092c12a98cb2c2e$var$isValid(value) == false) return undefined;
    let results = [];
    for (let v of value){
        let v1 = (0, $2cf68f4048a6f85f$export$fe5b3308000496d5).getValue(key, v) //v?.[key] 
        ;
        if (v1) results.push(v1);
    }
    return results;
}
function $2092c12a98cb2c2e$var$getNumbersForKey(value, key) {
    /**
     * Returns the numbers for a key
     * @param {Object} value
     * @param {String} key
     * @returns {Array}
     */ // Returns array of numbers only for a given k
    value = $2092c12a98cb2c2e$var$toArray(value);
    let items = $2092c12a98cb2c2e$var$getValuesForKey(value, key);
    let results = [];
    for (let item of items){
        let newItem = $2092c12a98cb2c2e$var$h.number.toNumber(item);
        if ($2092c12a98cb2c2e$var$h.number.isValid(newItem) == true) results.push(newItem);
        if (item?.["@type"] && item?.["@type"] == "QuantitativeValue") {
            let quantItem = $2092c12a98cb2c2e$var$h.number.toNumber(item?.value);
            if ($2092c12a98cb2c2e$var$h.number.isValid(quantItem) == true) results.push(quantItem);
        }
    }
    return results;
}
function $2092c12a98cb2c2e$var$getUnitCodesForKey(value, key) {
    // Returns array of numbers only for a given k
    let items = $2092c12a98cb2c2e$var$getValuesForKey(value, key);
    let results = [];
    for (let item of items)if (item?.["@type"] && item?.["@type"] == "QuantitativeValue") results.push(item.unitCode);
    return results;
}
function $2092c12a98cb2c2e$var$merge(value1, value2) {
    /**
     * Merges two arrays
     * @param {Object} value1
     * @param {Object} value2
     * @returns {Object}
     */ let v1 = $2092c12a98cb2c2e$var$toArray(value1);
    let v2 = $2092c12a98cb2c2e$var$toArray(value2);
    if ($2092c12a98cb2c2e$var$h.isNull(v1) && $2092c12a98cb2c2e$var$h.isNull(v2)) return [];
    if ($2092c12a98cb2c2e$var$h.isNull(v1) && $2092c12a98cb2c2e$var$h.isNotNull(v2)) return v2;
    if ($2092c12a98cb2c2e$var$h.isNotNull(v1) && $2092c12a98cb2c2e$var$h.isNull(v2)) return v1;
    let newValue = v1.concat(v2);
    return newValue;
}
function $2092c12a98cb2c2e$var$mergeUnique(value1, value2) {
    /**
     * Merges two arrays
     * @param {Object} value1
     * @param {Object} value2
     * @returns {Object}
     */ let values = $2092c12a98cb2c2e$var$merge(value1, value2);
    let uniqueValues = [];
    for (let v of values)if (!uniqueValues.includes(v)) uniqueValues.push(v);
    return uniqueValues;
}





const $409d3194b75b4893$export$94a70d284fcdf065 = {
    isValid: $409d3194b75b4893$var$isValid,
    flatten: $409d3194b75b4893$var$objectToDotNotation,
    objectToDotNotation: $409d3194b75b4893$var$objectToDotNotation,
    simplify: $409d3194b75b4893$var$simplify,
    toPropertiesList: $409d3194b75b4893$var$jsonToPropertiesSingle,
    toPropertiesSingle: $409d3194b75b4893$var$jsonToPropertiesList
};
function $409d3194b75b4893$var$isValid(value) {
    /**
     * Checks if a value is a valid JSON string
     * @param {String} value
     * @returns {Boolean}
     * 
     */ try {
        let l = JSON.parse(value);
        return true;
    } catch  {
        return false;
    }
}
function $409d3194b75b4893$var$simplify(data) {
    /**
     * Simplify a json object
     * @param {Object} data The data
     * @returns {Object} The simplified data
     * 
     */ if ((0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNull(data)) return null;
    // Remove arrays of 1
    if (Array.isArray(data) && typeof data != "string") {
        // If the array has exactly one element, return that element
        if (data.length === 1) return $409d3194b75b4893$var$simplify(data[0]);
        else // Otherwise, process each element in the array
        return data.map($409d3194b75b4893$var$simplify);
    } else if (data !== null && typeof data === "object" && Object.keys(data).length > 0) {
        // Skip if thing class object
        if (data.record_type) return data;
        // Sort keys
        let keys = Object.keys(data).sort();
        for (const key of keys){
            let value = $409d3194b75b4893$var$simplify(data[key]);
            if (value === 0 || value !== null && value !== undefined) data[key] = value;
            else delete data[key];
        }
        return data;
    } else return data;
}
function $409d3194b75b4893$var$jsonToPropertiesSingle(record) {
    /**
     * Converts a json object to a list of properties
     * @param {Object} record The record
     * @returns {Array} The list of properties
     * 
     */ // Converts lists to single item(the first item)
    if (Array.isArray(record)) {
        if (record.length == 0) return null;
        record = record[0];
    }
    if (Object.keys(record)) for (let k of Object.jeys(record))record[k] = jsonWithoutList(record[k]);
    return record;
}
function $409d3194b75b4893$var$jsonToPropertiesList(record) {
    /**
     * Converts a json object to a list of properties
     * @param {Object} record The record
     * @returns {Array} The list of properties
     * 
     */ // Converts single items to lists
    if (Array.isArray(record)) {
        let newArray = [];
        for (let r of record)newArray.push(jsonToLists(r));
        record = newArray;
    }
    if (Object.keys(record)) for (let k of Object.jeys(record))record[k] = [
        record[k]
    ];
    return record;
}
function $409d3194b75b4893$var$getPropertyValueFromDot(key, value) {
    // Retrieves value by following dot notation
    var items = key.split(".");
    for(let t = 0; t < items.length; t++)value = value[items[t]];
    return value;
}
function $409d3194b75b4893$var$setPropertyValueFromDot(key, record, value) {
    // Retrieves value by following dot notation
    var items = key.split(".");
    let item = items[0];
    if (items.length > 1) {
        if (!record[item]) record[item] = {};
        $409d3194b75b4893$var$setPropertyValueFromDot(items.slice(1).join("."), record[item], value);
    } else record[item] = value;
    return record;
}
function $409d3194b75b4893$var$objectToDotNotation(obj, parentPrefix = "") {
    /**
     * Converts an object to a dot notation object
     * @param {Object} obj The object
     * @param {String} parentPrefix The parent prefix
     * @returns {Object} The dot notation object
     * 
     */ let result = {};
    // Helper function to handle recursion and path building
    function recurse(o, path) {
        for(let key in o)if (o.hasOwnProperty(key)) {
            const newPath = path ? `${path}.${key}` : key;
            // If the property is an object or array, recurse further
            if (typeof o[key] === "object" && o[key] !== null) recurse(o[key], newPath);
            else // Otherwise, add the property to the result
            result[newPath] = o[key];
        }
    }
    recurse(obj, parentPrefix);
    return result;
}


const $a7df578a06d5a361$export$9694b2d66de56464 = {
    /**
     * UUID helpers
     * 
     */ isValid: $a7df578a06d5a361$var$isValid,
    toString: $a7df578a06d5a361$var$toString,
    new: $a7df578a06d5a361$var$getNew
};
// -----------------------------------------------------
//  Constructor 
// -----------------------------------------------------
function $a7df578a06d5a361$var$getNew() {
    /**
     * Returns a new uuid
     * @returns {String} The uuid
     */ let value = String(crypto.randomUUID());
    return value;
}
// -----------------------------------------------------
//  Base 
// -----------------------------------------------------
function $a7df578a06d5a361$var$isValid(value) {
    /**
     * Check if value is a valid UUID
     * @param {String} value
     * @returns {Boolean}
     */ return h.isString(value) && h.isUuid(value);
}
function $a7df578a06d5a361$var$toString(value) {
    /**
     * Returns a string representation of the UUID
     * @param {String} value
     * @returns {String}
     */ return String(value);
}


const $e787032c49c8ddee$export$42f247ccf9267abd = {
    isObject: $e787032c49c8ddee$var$isObject,
    isValid: $e787032c49c8ddee$var$isObject,
    getKeys: $e787032c49c8ddee$var$getKeys,
    keys: $e787032c49c8ddee$var$getKeys,
    toString: $e787032c49c8ddee$var$toString,
    toStirng: $e787032c49c8ddee$var$toString,
    merge: $e787032c49c8ddee$var$merge
};
function $e787032c49c8ddee$var$isObject(value) {
    return typeof value === "object" && !Array.isArray(value) && value !== null;
}
function $e787032c49c8ddee$var$getKeys(value) {
    if ($e787032c49c8ddee$var$isObject(value) == false) return [];
    let keys = Object.keys(value);
    keys.sort();
    return keys;
}
function $e787032c49c8ddee$var$toString(value) {
    if ($e787032c49c8ddee$var$isObject(value) == false) return [];
    if (value["@type"]) return `${value["@type"]}/${value["@id"]}`;
    else {
        let keys = Object.keys(value);
        if (keys.length == 0) return "{}";
        return `{"${keys[0]}": "${value[keys[0]]}", ... }`;
    }
}
function $e787032c49c8ddee$var$merge(target, source) {
    /**
     * Merges two objects together
     * @param {Object} target
     * @param {Object} source
     * @returns {Object} The merged object
     * 
     */ if ($e787032c49c8ddee$var$isObject(target) == false) return null;
    if ($e787032c49c8ddee$var$isObject(source) == false) return target;
    let result = {
        ...target,
        ...source
    };
    return result;
}


const $8e7de55ecf14d868$var$h = {
    null: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10),
    array: (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00),
    isNull: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNull,
    isNotNull: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNotNull,
    toArray: (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00).toArray,
    isArray: (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00).isArray,
    dot: (0, $2cf68f4048a6f85f$export$fe5b3308000496d5),
    number: (0, $44ebc265e2335159$export$96be39e8128f5891),
    json: (0, $409d3194b75b4893$export$94a70d284fcdf065),
    object: (0, $e787032c49c8ddee$export$42f247ccf9267abd),
    isObject: (0, $e787032c49c8ddee$export$42f247ccf9267abd).isValid,
    uuid: (0, $a7df578a06d5a361$export$9694b2d66de56464)
};
const $8e7de55ecf14d868$export$35d3dd03f0194c3a = {
    analyzeValues: $8e7de55ecf14d868$var$analyzeValues,
    analyze: $8e7de55ecf14d868$var$analyze,
    max: $8e7de55ecf14d868$var$getMax,
    min: $8e7de55ecf14d868$var$getMin,
    n: $8e7de55ecf14d868$var$getN,
    sum: $8e7de55ecf14d868$var$getSum,
    sumProduct: $8e7de55ecf14d868$var$getSumProduct,
    avg: $8e7de55ecf14d868$var$getAverage,
    stdev: $8e7de55ecf14d868$var$getStandardDeviation,
    first: $8e7de55ecf14d868$var$getFirst,
    last: $8e7de55ecf14d868$var$getLast,
    filter: $8e7de55ecf14d868$var$filter,
    getValues: $8e7de55ecf14d868$var$getValues,
    transpose: $8e7de55ecf14d868$var$transpose
};
function $8e7de55ecf14d868$var$analyze(value) {
    /**
     * Analyzes a series of records
     * @param {Object} value
     * @returns {Object} The analyzed value
     * 
     */ value = $8e7de55ecf14d868$var$h.toArray(value);
    let keys = $8e7de55ecf14d868$var$h.array.getKeys(value);
    let analysis = {};
    for (let k of keys)analysis[k] = $8e7de55ecf14d868$var$analyzeValues(value, k);
    return analysis;
}
function $8e7de55ecf14d868$var$analyzeValues(value, key) {
    /**
     * Analyzes a series of records
     * @param {Object} value
     * @param {String} key
     * @returns {Object} The analyzed value
     */ let analysis = {
        type: null,
        types: {},
        typeSchemaOrg: null,
        typesSchemaOrg: {},
        values: {},
        N: null,
        nullN: null,
        uniqueN: null,
        min: null,
        max: null,
        stddev: null
    };
    let values = $8e7de55ecf14d868$var$h.array.getValuesForKey(value, key);
    for (let v of values){
        // Get type
        let t = $8e7de55ecf14d868$var$h.value.getType(v);
        analysis.types[t] = (analysis.types[t] || 0) + 1;
        if (t && t != null) {
            let s = analysis.type;
            if (s && s != null && s != t) analysis.type = "na";
            else analysis.type = t;
        }
        // Get schema type
        let tt = $8e7de55ecf14d868$var$h.value.getTypeSchemaOrg(v);
        analysis.typesSchemaOrg[tt] = (analysis.typesSchemaOrg[tt] || 0) + 1;
        if (tt && tt != null) {
            let s = analysis.typeSchemaOrg;
            if (s && s != null && s != tt) analysis.typeSchemaOrg = "na";
            else analysis.typeSchemaOrg = tt;
        }
        // Get value
        let newV = v;
        if (newV["@type"]) newV = `${newV["@type"]}/${newV["@id"]}`;
        analysis.values[newV] = (analysis.values[newV] || 0) + 1;
        // get min / max
        analysis.N = $8e7de55ecf14d868$var$getN(value, key);
        analysis.nullN = $8e7de55ecf14d868$var$getNull(value, key);
        analysis.uniqueN = $8e7de55ecf14d868$var$h.array.getUniqueN(value, key);
        analysis.min = $8e7de55ecf14d868$var$getMin(value, key);
        analysis.max = $8e7de55ecf14d868$var$getMax(value, key);
        analysis.stddev = $8e7de55ecf14d868$var$getStandardDeviation(value, key);
    }
    return analysis;
}
// -----------------------------------------------------
//  Comment 
// -----------------------------------------------------
function $8e7de55ecf14d868$var$getValues(value, key) {
    /**
     * Returns values from list of records
     * 
     */ if ($8e7de55ecf14d868$var$h.isArray(value)) return value.map((x)=>$8e7de55ecf14d868$var$getValues(x, key));
    if ($8e7de55ecf14d868$var$h.isNull(key)) return value;
    if ($8e7de55ecf14d868$var$h.isNull(value)) return null;
    let result = $8e7de55ecf14d868$var$h.dot.get(key, value);
    return result;
}
function $8e7de55ecf14d868$var$transpose(record, key) {
    /**
     * Converts a record to list of PVs
     * 
     */ if ($8e7de55ecf14d868$var$h.isArray(record)) return record.map((x)=>$8e7de55ecf14d868$var$transpose(x));
    record = JSON.parse(JSON.stringify(record));
    if ($8e7de55ecf14d868$var$h.isNull(key)) return $8e7de55ecf14d868$var$recordToPropertyValue(record);
    let v = $8e7de55ecf14d868$var$getValues(record, key);
    let pvs = $8e7de55ecf14d868$var$recordToPropertyValue(v);
    let result = $8e7de55ecf14d868$var$h.dot.set(record, key, pvs);
    return result;
}
function $8e7de55ecf14d868$var$recordToPropertyValue(record) {
    /**
     * Convert record to list of pv
     * 
     */ if ($8e7de55ecf14d868$var$h.isArray(record)) return record.map((x)=>$8e7de55ecf14d868$var$recordToPropertyValue(x));
    if (!$8e7de55ecf14d868$var$h.isObject(record)) {
        console.log("ERROR - not an object", record);
        return record;
    }
    let pvs = [];
    for(let k in record){
        let pv = {
            "@type": "PropertyValue",
            "@id": $8e7de55ecf14d868$var$h.uuid.new(),
            "propertyID": k,
            "value": record[k]
        };
        pvs.push(pv);
    }
    return pvs;
}
function $8e7de55ecf14d868$var$filter(value, conditions) {
    /**
     * Filters a series of records
     * @param {Object} value
     * @param {Object} conditions
     * @returns {Object} The filtered value
     * 
     */ // Convert string to conditions (key=bob1 -> {'key': 'bob1'})
    if (typeof conditions == "string") {
        let newConditions = {};
        newConditions[conditions.split("=")?.[0]] = conditions.split("=")?.[1];
        conditions = newConditions;
    }
    let filteredItems = [];
    for (let v of $8e7de55ecf14d868$var$h.array.toArray(value)){
        let passes = true;
        for(let c in conditions){
            let v1 = $8e7de55ecf14d868$var$h.dot.get(c, v);
            let c1 = conditions[c];
            let operation = "eq";
            if (c1.split(" ")?.[0] == "ne") {
                c1 = c1.slice(3);
                operation = "ne";
            }
            if (c1.split(" ")?.[0] == "gt") {
                c1 = c1.slice(3);
                operation = "gt";
            }
            if (c1.split(" ")?.[0] == "lt") {
                c1 = c1.slice(3);
                operation = "lt";
            }
            if (c1.split(" ")?.[0] == "ge") {
                c1 = c1.slice(3);
                operation = "ge";
            }
            if (c1.split(" ")?.[0] == "le") {
                c1 = c1.slice(3);
                operation = "le";
            }
            if (c1.split(" ")?.[0] == "isNull") {
                c1 = c1.slice(7);
                operation = "isNull";
            }
            if (c1.split(" ")?.[0] == "notNull") {
                c1 = c1.slice(7);
                operation = "notNull";
            }
            if (operation == "eq") {
                if (v1 == c1 == false) {
                    passes = false;
                    break;
                }
            }
            if (operation == "ne") {
                if (v1 != c1 == false) {
                    passes = false;
                    break;
                }
            }
            if (operation == "gt") {
                if (!(v1 > c1)) {
                    passes = false;
                    break;
                }
            }
            if (operation == "lt") {
                if (!(v1 < c1)) {
                    passes = false;
                    break;
                }
            }
            if (operation == "ge") {
                if (!(v1 >= c1)) {
                    passes = false;
                    break;
                }
            }
            if (operation == "le") {
                if (!(v1 <= c1)) {
                    passes = false;
                    break;
                }
            }
            if (operation == "notNull") {
                if (!$8e7de55ecf14d868$var$h.isNotnull(v1)) {
                    passes = false;
                    break;
                }
            }
            if (operation == "isNull") {
                if (!$8e7de55ecf14d868$var$h.isNull(v1)) {
                    passes = false;
                    break;
                }
            }
        }
        if (passes) filteredItems.push(v);
    }
    return filteredItems;
}
function $8e7de55ecf14d868$var$getFirst(value, key) {
    value = $8e7de55ecf14d868$var$h.array.toArray(value);
    if ($8e7de55ecf14d868$var$h.array.isArray(value) == false) return undefined;
    let items = $8e7de55ecf14d868$var$h.array.getValuesForKey(value, key);
    items = $8e7de55ecf14d868$var$h.array.toArray(items);
    let [result] = items.slice(0);
    return result;
}
function $8e7de55ecf14d868$var$getLast(value, key) {
    value = $8e7de55ecf14d868$var$h.array.toArray(value);
    if ($8e7de55ecf14d868$var$h.array.isArray(value) == false) return undefined;
    let items = $8e7de55ecf14d868$var$h.array.getValuesForKey(value, key);
    items = $8e7de55ecf14d868$var$h.array.toArray(items);
    let [result] = items.slice(-1);
    return result;
}
function $8e7de55ecf14d868$var$getMax(value, key) {
    value = $8e7de55ecf14d868$var$h.array.toArray(value);
    if ($8e7de55ecf14d868$var$h.array.isArray(value) == false) return undefined;
    let items = $8e7de55ecf14d868$var$h.array.getNumbersForKey(value, key);
    let result = Math.max(...items);
    return result;
}
function $8e7de55ecf14d868$var$getMaxRecord(value, key) {
    value = $8e7de55ecf14d868$var$h.array.toArray(value);
    if ($8e7de55ecf14d868$var$h.array.isArray(value) == false) return undefined;
    let result = $8e7de55ecf14d868$var$getMax(value, key);
    let unitCode = $8e7de55ecf14d868$var$h.array.getUnitCodesForKey(value, key);
    return $8e7de55ecf14d868$var$getStatsRecord("maxValue", key, result, unitCode);
//count, median, marginOfError, maxValue, minValue
}
function $8e7de55ecf14d868$var$getMin(value, key) {
    value = $8e7de55ecf14d868$var$h.array.toArray(value);
    if ($8e7de55ecf14d868$var$h.array.isArray(value) == false) return undefined;
    let items = $8e7de55ecf14d868$var$h.array.getNumbersForKey(value, key);
    let result = Math.min(...items);
    return result;
}
function $8e7de55ecf14d868$var$getMinRecord(value, key) {
    value = $8e7de55ecf14d868$var$h.array.toArray(value);
    if ($8e7de55ecf14d868$var$h.array.isArray(value) == false) return undefined;
    let result = $8e7de55ecf14d868$var$getMin(value, key);
    let unitCode = $8e7de55ecf14d868$var$h.array.getUnitCodesForKey(value, key);
    return $8e7de55ecf14d868$var$getStatsRecord("minValue", key, result, unitCode);
//count, median, marginOfError, maxValue, minValue
}
function $8e7de55ecf14d868$var$getN(value, key) {
    value = $8e7de55ecf14d868$var$h.array.toArray(value);
    if ($8e7de55ecf14d868$var$h.array.isArray(value) == false) return undefined;
    let items = $8e7de55ecf14d868$var$h.array.getValuesForKey(value, key);
    let result = items.length;
    return result;
}
function $8e7de55ecf14d868$var$getNRecord(value, key) {
    value = $8e7de55ecf14d868$var$h.array.toArray(value);
    if ($8e7de55ecf14d868$var$h.array.isArray(value) == false) return undefined;
    let result = $8e7de55ecf14d868$var$getN(value, key);
    let unitCode = $8e7de55ecf14d868$var$h.array.getUnitCodesForKey(value, key);
    return $8e7de55ecf14d868$var$getStatsRecord("count", key, result, unitCode);
//count, median, marginOfError, maxValue, minValue
}
function $8e7de55ecf14d868$var$getSum(value, key) {
    value = $8e7de55ecf14d868$var$h.array.toArray(value);
    if ($8e7de55ecf14d868$var$h.array.isArray(value) == false) return undefined;
    let items = $8e7de55ecf14d868$var$h.array.getNumbersForKey(value, key);
    let result = items.reduce((partialSum, a)=>partialSum + a, 0);
    return result;
}
function $8e7de55ecf14d868$var$getSumProduct(value, key1, key2, sigFig = 2) {
    /**
     * key 2 is defined from key 1 if absent
     */ if ($8e7de55ecf14d868$var$h.isNull(key2)) {
        key2 = key1.split("_")[1];
        key1 = key1.split("_")[0];
    }
    value = $8e7de55ecf14d868$var$h.array.toArray(value);
    if ($8e7de55ecf14d868$var$h.array.isArray(value) == false) return undefined;
    let result = 0;
    for(let i = 0; i < value.length; i++){
        let value1 = $8e7de55ecf14d868$var$h.dot.get(value[i], key1);
        let value2 = $8e7de55ecf14d868$var$h.dot.get(value[i], key2);
        if ($8e7de55ecf14d868$var$h.number.isValid(value1) && $8e7de55ecf14d868$var$h.number.isValid(value2)) {
            let v = value1 * value2;
            result += $8e7de55ecf14d868$var$h.number.round(v, sigFig);
        }
    }
    return result;
}
function $8e7de55ecf14d868$var$getSumRecord(value, key) {
    value = $8e7de55ecf14d868$var$h.array.toArray(value);
    if ($8e7de55ecf14d868$var$h.array.isArray(value) == false) return undefined;
    let result = $8e7de55ecf14d868$var$getSum(value, key);
    let unitCode = $8e7de55ecf14d868$var$h.array.getUnitCodesForKey(value, key);
    return $8e7de55ecf14d868$var$getStatsRecord("sum", key, result, unitCode);
//count, median, marginOfError, maxValue, minValue
}
function $8e7de55ecf14d868$var$getAverage(value, key) {
    value = $8e7de55ecf14d868$var$h.array.toArray(value);
    if ($8e7de55ecf14d868$var$h.array.isArray(value) == false) return undefined;
    let items = $8e7de55ecf14d868$var$h.array.getNumbersForKey(value, key);
    if (items.length == 0) return 0;
    let sumAll = items.reduce((partialSum, a)=>partialSum + a, 0);
    let result = sumAll / items.length;
    return result;
}
function $8e7de55ecf14d868$var$getAverageRecord(value, key) {
    value = $8e7de55ecf14d868$var$h.array.toArray(value);
    if ($8e7de55ecf14d868$var$h.array.isArray(value) == false) return undefined;
    let result = $8e7de55ecf14d868$var$getAverage(value, key);
    let unitCode = $8e7de55ecf14d868$var$h.array.getUnitCodesForKey(value, key);
    return $8e7de55ecf14d868$var$getStatsRecord("average", key, result, unitCode);
//count, median, marginOfError, maxValue, minValue
}
function $8e7de55ecf14d868$var$getStandardDeviation(value, key) {
    value = $8e7de55ecf14d868$var$h.array.toArray(value);
    if ($8e7de55ecf14d868$var$h.array.isArray(value) == false) return undefined;
    let items = $8e7de55ecf14d868$var$h.array.getNumbersForKey(value, key);
    if (items.length == 0) return 0;
    let n = items.length;
    let mean = items.reduce((a, b)=>a + b) / n;
    let result = Math.sqrt(items.map((x)=>Math.pow(x - mean, 2)).reduce((a, b)=>a + b) / n);
    return result;
}
function $8e7de55ecf14d868$var$getStandardDeviationRecord(value, key) {
    value = $8e7de55ecf14d868$var$h.array.toArray(value);
    if ($8e7de55ecf14d868$var$h.array.isArray(value) == false) return undefined;
    let result = $8e7de55ecf14d868$var$getStandardDeviation(value, key);
    let unitCode = $8e7de55ecf14d868$var$h.array.getUnitCodesForKey(value, key);
    return $8e7de55ecf14d868$var$getStatsRecord("marginOfError", key, result, unitCode);
}
function $8e7de55ecf14d868$var$getNull(value, key) {
    value = $8e7de55ecf14d868$var$h.array.toArray(value);
    if ($8e7de55ecf14d868$var$h.array.isArray(value) == false) return undefined;
    let nullValues = 0;
    for (let v of value)if ((!v || v == null || v == "" || v == {} || v == []) && v !== 0) nullValues;
    return nullValues;
}
function $8e7de55ecf14d868$var$getUniqueN(value, key) {
    value = $8e7de55ecf14d868$var$h.array.toArray(value);
    if ($8e7de55ecf14d868$var$h.array.isArray(value) == false) return undefined;
    let uniqueValues = [
        ...new Set(value)
    ];
    let result = uniqueValues.length;
    return result;
}
// -----------------------------------------------------
//  Statistical record 
// -----------------------------------------------------
function $8e7de55ecf14d868$var$getStatsRecord(statType, property, value, unitCode) {
    let record = {
        "@context": "https://schema.org/",
        "@id": "Observation_Median_Age_Person_Female_SanAntonio_TX_2014",
        "@type": "Observation",
        "name": name,
        "variableMeasured": {
            "@context": "https://schema.org/",
            "@type": "StatisticalVariable",
            "@id": "Median_Height_Person_Female",
            "name": statType,
            "measuredProperty": {
                "@id": property
            },
            "statType": {
                "@id": statType
            },
            "constrainingProperty": []
        },
        "observationAbout": {},
        "value": value,
        "unitCode": unit
    };
    return record;
}









const $5e269851126f2bb1$var$h = {
    null: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10),
    array: (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00),
    isNull: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNull,
    isNotNull: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNotNull,
    toArray: (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00),
    dot: (0, $2cf68f4048a6f85f$export$fe5b3308000496d5),
    number: (0, $44ebc265e2335159$export$96be39e8128f5891),
    object: (0, $e787032c49c8ddee$export$42f247ccf9267abd)
};
const $5e269851126f2bb1$export$b28abe9e4076f605 = {
    // Base
    isValid: $5e269851126f2bb1$var$isValid,
    toString: $5e269851126f2bb1$var$toString,
    isEmpty: $5e269851126f2bb1$var$isEmpty,
    clone: $5e269851126f2bb1$var$clone,
    // Properties
    record_type: {
        get: $5e269851126f2bb1$var$getRecordType,
        set: $5e269851126f2bb1$var$setRecordType
    },
    record_id: {
        get: $5e269851126f2bb1$var$getRecordId,
        set: $5e269851126f2bb1$var$setRecordId
    },
    ref: {
        get: $5e269851126f2bb1$var$getRef,
        set: $5e269851126f2bb1$var$setRef
    },
    keys: $5e269851126f2bb1$var$getKeys,
    value: {
        get: $5e269851126f2bb1$var$getValue,
        set: $5e269851126f2bb1$var$setValue
    },
    values: {
        get: $5e269851126f2bb1$var$getValues,
        set: $5e269851126f2bb1$var$setValues
    },
    children: $5e269851126f2bb1$var$extractChildrenFromRecord,
    flatten: $5e269851126f2bb1$var$flattenRecord,
    // Comparison
    isSame: $5e269851126f2bb1$var$isSameRecord,
    isNotSame: $5e269851126f2bb1$var$isNotSameRecord,
    eq: $5e269851126f2bb1$var$isEqualRecord,
    ne: $5e269851126f2bb1$var$isNotEqualRecord,
    lt: $5e269851126f2bb1$var$lt,
    gt: $5e269851126f2bb1$var$gt,
    validate: $5e269851126f2bb1$var$recordMeetConditions,
    // Operations
    replace: $5e269851126f2bb1$var$replaceValueInRecord,
    merge: $5e269851126f2bb1$var$mergeRecords,
    replaceChildren: $5e269851126f2bb1$var$replaceChildrenWithRef,
    update: $5e269851126f2bb1$var$updateRecordsToLatest,
    addIds: $5e269851126f2bb1$var$assignMissingIds,
    // Lists
    length: $5e269851126f2bb1$var$getLengthOfRecordList,
    get: $5e269851126f2bb1$var$getRecordFromRecordList,
    push: $5e269851126f2bb1$var$addRecordToRecordList,
    delete: $5e269851126f2bb1$var$deleteRecordFromRecordList,
    dedupe: $5e269851126f2bb1$var$dedupeRecords,
    sort: $5e269851126f2bb1$var$sortRecordList,
    filter: $5e269851126f2bb1$var$filterRecordList
};
// -----------------------------------------------------
//  Base
// -----------------------------------------------------
function $5e269851126f2bb1$var$isValid(value) {
    /**
     * Checks if a value is a valid record
     * @param {Object} value
     * @returns {Boolean}
     * 
     */ if ($5e269851126f2bb1$var$h.isNull(value)) return false;
    if ($5e269851126f2bb1$var$h.object.isValid(value) == false) return false;
    if ($5e269851126f2bb1$var$h.isNull($5e269851126f2bb1$var$getRecordType(value))) return false;
    //if(h.isNull(getRecordId(value))){ return false }
    return true;
}
function $5e269851126f2bb1$var$toString(value) {
    /**
     * Converts a value to a string
     * @param {Object} value
     * @returns {String}
     * 
     */ if ($5e269851126f2bb1$var$isValid(value) == false) return "";
    return `${$5e269851126f2bb1$var$getRecordType(value)} ${$5e269851126f2bb1$var$getRecordId(value)}`;
}
function $5e269851126f2bb1$var$isEmpty(record) {
    /**
     * Checks if a record is empty (type, id but nothing else)
     * @param {Object} record
     * @returns {Boolean}
     * 
     */ // error handling
    if (!$5e269851126f2bb1$var$isValid(record)) return true;
    // check if empty
    for (let k of Object.keys(record)){
        if (k.startsWith("@")) continue;
        if ($5e269851126f2bb1$var$h.isNotNull(record?.[k])) return false;
    }
    return true;
}
function $5e269851126f2bb1$var$clone(record) {
    /**
     * Clones a record
     * @param {Object} record
     * @returns {Object}
     * 
     */ let newRecord = {};
    for (let k of Object.keys(record))newRecord[k] = record[k];
    newRecord["@id"] = (0, $a7df578a06d5a361$export$9694b2d66de56464).new();
    return newRecord;
}
// -----------------------------------------------------
//  Properties
// -----------------------------------------------------
function $5e269851126f2bb1$var$getRecordType(record_or_record_type, record_id) {
    /**
     * Gets the record type
     * @param {Object} record_or_record_type
     * @param {String} record_id
     * @returns {String}
     */ let value = record_or_record_type?.["@type"] || record_or_record_type?.record_type || record_or_record_type;
    if ($5e269851126f2bb1$var$h.array.isArray(value)) value = value?.[0] || null;
    if (typeof value != "string") return null;
    return value;
}
function $5e269851126f2bb1$var$setRecordType(record, value) {
    /**
     * Sets the record type
     * @param {Object} record
     * @param {String} value
     * @returns {Object} The record
     */ record["@type"] = value;
    return record;
}
function $5e269851126f2bb1$var$getRecordId(record_or_record_type, record_id) {
    /**
     * Gets the record id
     * @param {Object} record_or_record_type
     * @param {String} record_id
     * @returns {String}
     */ let value = record_or_record_type?.["@id"] || record_or_record_type?.record_id || record_id;
    if ($5e269851126f2bb1$var$h.array.isArray(value)) value = value?.[0] || null;
    if (typeof value != "string") return null;
    return value;
}
function $5e269851126f2bb1$var$setRecordId(record, value) {
    /**
     * Sets the record id
     * @param {Object} record
     * @param {String} value
     * @returns {Object} The record
     */ record["@id"] = value;
    return record;
}
function $5e269851126f2bb1$var$getRef(record_or_record_type, record_id) {
    /**
     * Gets the record ref
     * @param {Object} record_or_record_type
     * @param {String} record_id
     * @returns {String}
     */ let record_type = $5e269851126f2bb1$var$getRecordType(record_or_record_type, record_id);
    record_id = $5e269851126f2bb1$var$getRecordId(record_or_record_type, record_id);
    if ($5e269851126f2bb1$var$h.isNull(record_type)) return null;
    if ($5e269851126f2bb1$var$h.isNull(record_id)) return null;
    let result = {
        "@type": record_type,
        "@id": record_id
    };
    return result;
}
function $5e269851126f2bb1$var$setRef(record, record_or_record_type, record_id) {
    /**
     * Sets the record ref
     * @param {Object} record
     * @param {String} record_or_record_type
     * @param {String} record_id
     * @returns {Object} The record
     */ record["@type"] = $5e269851126f2bb1$var$getRecordType(record_or_record_type, record_id);
    record["@id"] = $5e269851126f2bb1$var$getRecordId(record_or_record_type, record_id);
    return record;
}
function $5e269851126f2bb1$var$getKeys(record) {
    /**
     * Returns the property ids from a record
     * @param {Object} record
     * @returns {Array} The property ids
     * 
     */ record = JSON.parse(JSON.stringify(record));
    /**
     * Return propertyIDs without those starting with _
     */ // Error handling
    if ($5e269851126f2bb1$var$h.isNull(record)) return null;
    if ($5e269851126f2bb1$var$h.object.isValid(record) == false) return null;
    // Get propertyIDs    
    let results = [];
    for (let k of Object.keys(record))if (!k.startsWith("_") && !k.startsWith("@")) results.push(k);
    results = results.sort();
    return results;
}
function $5e269851126f2bb1$var$getValue(record, propertyID) {
    /**
     * Returns the value of a property
     * @param {Object} record
     * @param {String} propertyID
     * @returns {Object} The value
     * 
     */ // Returns value of thing or record with specifid propertyID. Works with dot notation
    if ($5e269851126f2bb1$var$h.isNull(record)) return null;
    if ($5e269851126f2bb1$var$h.isNull(propertyID)) return null;
    let values = $5e269851126f2bb1$var$getValues(record, propertyID);
    return values?.[0] || null;
}
function $5e269851126f2bb1$var$setValue(record, propertyID, value) {
    /**
     * Sets the record values
     * @param {Object} record
     * @param {String} propertyID
     * @param {Array} values
     * @returns {Object} The record
     */ // Get value 
    record = $5e269851126f2bb1$var$h.dot.set(record, propertyID, value);
    return record;
}
function $5e269851126f2bb1$var$getValues(record, propertyID, db) {
    /**
     * Returns the values of a propertyID
     * @param {Object} record
     * @param {String} propertyID
     * @returns {Array} The values
     * 
     */ // Get value 
    let propertyPaths = propertyID.split(".");
    let values = record;
    // Iterate for each dot notation path to get latest version of value everytime
    for (let p of propertyPaths){
        // Get value from first dot notation path
        values = $5e269851126f2bb1$var$h.dot.get(record, p);
        // Retrieve latest version of thing from db (if db provided)
        if ($5e269851126f2bb1$var$h.isArray(values)) values = values.map((x)=>$5e269851126f2bb1$var$getRecordFromRecordList(db, x) || x);
        else values = $5e269851126f2bb1$var$getRecordFromRecordList(db, values) || values;
    }
    // Convert to array
    values = $5e269851126f2bb1$var$h.toArray(values);
    // Return
    return values;
}
function $5e269851126f2bb1$var$setValues(record, propertyID, values) {
    /**
     * Sets the record values
     * @param {Object} record
     * @param {String} propertyID
     * @param {Array} values
     * @returns {Object} The record
     */ // Get value 
    record = $5e269851126f2bb1$var$h.dot.set(record, propertyID, values);
    return record;
}
function $5e269851126f2bb1$var$extractChildrenFromRecord(record) {
    /**
     * Extracts the children from a record
     * @param {Object} record
     * @returns {Array} The children
     * 
     */ // Error handling
    if ($5e269851126f2bb1$var$h.isNull(record)) return [];
    // Get child things
    let childThings = [];
    for (let k of Object.keys(record)){
        for (let value of $5e269851126f2bb1$var$h.toArray(record[k]))if ($5e269851126f2bb1$var$isValid(value)) {
            childThings.push(value);
            childThings = childThings.concat($5e269851126f2bb1$var$extractChildrenFromRecord(value));
        }
    }
    childThings = childThings.filter((x)=>$5e269851126f2bb1$var$h.isNotNull(x));
    // Dedupe child things
    childThings = $5e269851126f2bb1$var$dedupeRecords(childThings);
    return childThings;
}
function $5e269851126f2bb1$var$flattenRecord(record) {
    record = JSON.parse(JSON.stringify(record));
    if ($5e269851126f2bb1$var$h.isNull(record)) return null;
    let results = [
        record
    ];
    // Get children
    results = results.concat($5e269851126f2bb1$var$extractChildrenFromRecord(record));
    // Replace children with refs
    results = results.map((x)=>$5e269851126f2bb1$var$replaceChildrenWithRef(x));
    // Dedupe
    results = $5e269851126f2bb1$var$dedupeRecords(results);
    // Return
    return results;
}
// -----------------------------------------------------
//  Comparisons
// -----------------------------------------------------
function $5e269851126f2bb1$var$isSameRecord(thing1, thing2) {
    /**
     * Checks if two records are the same (type and id)
     * @param {Object} thing1
     * @param {Object} thing2
     * @returns {Boolean} True if the records are the same
     */ if ($5e269851126f2bb1$var$h.isNull($5e269851126f2bb1$var$getRecordType(thing1))) return false;
    if ($5e269851126f2bb1$var$h.isNull($5e269851126f2bb1$var$getRecordId(thing1))) return false;
    if ($5e269851126f2bb1$var$getRecordType(thing1) != $5e269851126f2bb1$var$getRecordType(thing2)) return false;
    if ($5e269851126f2bb1$var$getRecordId(thing1) != $5e269851126f2bb1$var$getRecordId(thing2)) return false;
    return true;
}
function $5e269851126f2bb1$var$isNotSameRecord(thing1, thing2) {
    /**
     * Checks if two records are not the same (type and id)
     * @param {Object} thing1
     * @param {Object} thing2
     * @returns {Boolean} True if the records are not the same
     */ if ($5e269851126f2bb1$var$h.isNull($5e269851126f2bb1$var$getRecordType(thing1))) return false;
    return !$5e269851126f2bb1$var$isSameRecord(thing1, thing2);
}
function $5e269851126f2bb1$var$isEqualRecord(thing1, thing2) {
    /**
     * Checks if two records are equal (type, id and values)
     * @param {Object} thing1
     * @param {Object} thing2
     * @returns {Boolean} True if the records are equal
     * 
     */ if ($5e269851126f2bb1$var$h.isNull(thing1) && $5e269851126f2bb1$var$h.isNull(thing2)) return true;
    if ($5e269851126f2bb1$var$h.isNull(thing1) && $5e269851126f2bb1$var$h.isNotNull(thing2)) return false;
    if ($5e269851126f2bb1$var$h.isNotNull(thing1) && $5e269851126f2bb1$var$h.isNull(thing2)) return false;
    let record1 = thing1?.record || thing1;
    let record2 = thing2?.record || thing2;
    try {
        if (JSON.stringify(record1) == JSON.stringify(record2)) return true;
        else return false;
    } catch (error) {
        return false;
    }
}
function $5e269851126f2bb1$var$isNotEqualRecord(thing1, thing2) {
    return !$5e269851126f2bb1$var$isEqualRecord(thing1, thing2);
}
function $5e269851126f2bb1$var$lt(thisThing, otherThing) {
    if (thisThing.record_type < otherThing.record_type) return true;
    if (thisThing.record_type > otherThing.record_type) return false;
    if (thisThing.record_id < otherThing.record_id) return true;
    if (thisThing.record_id > otherThing.record_id) return false;
    return false;
}
function $5e269851126f2bb1$var$gt(thisThing, otherThing) {
    if (thisThing.record_type > otherThing.record_type) return true;
    if (thisThing.record_type < otherThing.record_type) return false;
    if (thisThing.record_id > otherThing.record_id) return true;
    if (thisThing.record_id < otherThing.record_id) return false;
    return false;
}
function $5e269851126f2bb1$var$recordMeetConditions(record, conditions) {
    /**
     * Checks if a record meets the conditions
     * @param {Object} record
     * @param {Object} conditions
     * @returns {Boolean} True if the record meets the conditions
     * 
     */ // Handle if conditions in the form of uri
    for (let k of Object.keys(conditions)){
        if (!($5e269851126f2bb1$var$h.toArray(record[k]) != $5e269851126f2bb1$var$h.toArray(conditions?.[k]) || $5e269851126f2bb1$var$h.toArray(record[k]).includes(conditions?.[k]))) return false;
    }
    return true;
}
// -----------------------------------------------------
//  Operations 
// -----------------------------------------------------
function $5e269851126f2bb1$var$assignMissingIds(record) {
    /**
     * Assigns missing ids to a record and its values
     * @param {Object} record
     * @returns {Object} The record
     * 
     */ record = JSON.parse(JSON.stringify(record));
    if ($5e269851126f2bb1$var$h.isNull(record)) return null;
    if ($5e269851126f2bb1$var$h.array.isArray(record)) return record.map((x)=>$5e269851126f2bb1$var$assignMissingIds(x));
    if (!$5e269851126f2bb1$var$h.object.isValid(record)) return record;
    if ($5e269851126f2bb1$var$h.isNull(record?.["@id"])) record["@id"] = (0, $a7df578a06d5a361$export$9694b2d66de56464).new();
    for (let k of Object.keys(record)){
        let values = $5e269851126f2bb1$var$h.toArray(record[k]);
        let newValues = [];
        for (let value of values){
            value = $5e269851126f2bb1$var$assignMissingIds(value);
            newValues.push(value);
        }
        record[k] = newValues;
    }
    record = $5e269851126f2bb1$var$h.json.simplify(record);
    return record;
}
function $5e269851126f2bb1$var$replaceChildrenWithRef(record) {
    /**
     * Replaces values that are things with refs
     * @param {Object} record
     * @returns {Object} The record
     * 
     */ record = JSON.parse(JSON.stringify(record));
    // Error handling
    if ($5e269851126f2bb1$var$h.isNull(record)) return null;
    for (let k of Object.keys(record)){
        let values = $5e269851126f2bb1$var$h.toArray(record[k]);
        let newValues = [];
        for (let v of values){
            if ($5e269851126f2bb1$var$isValid(v)) v = getRefFromRecord(v);
            newValues.push(v);
        }
    }
    return record;
}
function $5e269851126f2bb1$var$replaceValueInRecord(record, oldValue, newValue) {
    /**
     * Replaces all instances of a value in a record
     * @param {Object} record
     * @param {Object} oldValue
     * @param {Object} newValue
     * @returns {Object} The record
     */ record = JSON.parse(JSON.stringify(record));
    // Error handling
    if ($5e269851126f2bb1$var$h.isNull(oldValue)) return null;
    // Handle array
    if ($5e269851126f2bb1$var$h.array.isArray(record)) return record.map((x)=>$5e269851126f2bb1$var$replaceValueInRecord(x, oldValue, newValue));
    // Handle non object
    if (!$5e269851126f2bb1$var$h.object.isValid(record)) return record;
    // Handle object
    // Replace value
    for (let k of Object.keys(record)){
        let newValues = [];
        for (let value of $5e269851126f2bb1$var$h.toArray(record[k])){
            // Replace if equal
            if (value == oldValue) newValues.push(newValue);
            else if ($5e269851126f2bb1$var$isSameRecord(oldValue, value)) newValues.push(newValue);
            else newValues.push(value);
        }
        record[k] = newValues;
    }
    // Recurse for sub values
    for (let k of Object.keys(record)){
        let newValues = [];
        for (let value of $5e269851126f2bb1$var$h.toArray(record[k]))newValues.push($5e269851126f2bb1$var$replaceValueInRecord(value, oldValue, newValue));
        record[k] = newValues;
    }
    // Simplify record
    record = $5e269851126f2bb1$var$h.json.simplify(record);
    // Return
    return record;
}
function $5e269851126f2bb1$var$mergeRecords(record1, record2) {
    /**
     * Merges two records
     * @param {Object} record1
     * @param {Object} record2
     * @returns {Object} The merged record
     */ record1 = JSON.parse(JSON.stringify(record1));
    record2 = JSON.parse(JSON.stringify(record2));
    // Error handling
    if ($5e269851126f2bb1$var$h.isNull(record1)) return null;
    // Merge
    for (let k of Object.keys(record2)){
        let newValues = $5e269851126f2bb1$var$h.toArray(record1[k]).concat($5e269851126f2bb1$var$h.toArray(record2[k]));
        newValues = [
            ...new Set(newValues)
        ];
        record1[k] = newValues;
    }
    // Simplify record
    record1 = $5e269851126f2bb1$var$h.json.simplify(record1);
    // Return
    return record1;
}
function $5e269851126f2bb1$var$updateRecordsToLatest(record, db) {
    /**
     * Updates all records or references to a record from latest version in the db
     * @param {Object} record
     * @param {Object} db
     * @returns {Object} The record
     * 
     */ record = JSON.parse(JSON.stringify(record));
    record = $5e269851126f2bb1$var$getRecordFromRecordList(db, record) || record;
    for (let k of Object.keys(record)){
        let values = $5e269851126f2bb1$var$h.toArray(record[k]);
        let newValues = [];
        for (let v of values){
            if ($5e269851126f2bb1$var$isValid(v)) v = $5e269851126f2bb1$var$getRecordFromRecordList(db, v) || v;
            newValues.push(v);
        }
        record[k] = newValues;
    }
    return record;
}
// -----------------------------------------------------
//  Arrays 
// -----------------------------------------------------
function $5e269851126f2bb1$var$getLengthOfRecordList(records) {
    /**
     * Returns the length of a record list
     * @param {Array} records
     * @returns {Number} The length
     * 
     */ // Error handling
    if ($5e269851126f2bb1$var$h.isNull(records)) return 0;
    records = $5e269851126f2bb1$var$h.toArray(records);
    return records.length;
}
function $5e269851126f2bb1$var$getRecordFromRecordList(records, record_or_record_type, record_id) {
    /**
     * Returns a record from a record list
     * @param {Array} records
     * @param {Object} record_or_record_type
     * @param {String} record_id
     * @returns {Object} The record
     * 
     */ let filteredRecords = $5e269851126f2bb1$var$filterRecordList(records, getRefFromRecord(record_or_record_type, record_id));
    let result = filteredRecords?.[0] || null;
    return result;
}
function $5e269851126f2bb1$var$addRecordToRecordList(records, record) {
    /**
     * Add a record to array. If exists, merge the records
     * @param {Array} records
     * @param {Object} record
     * @returns {Array} The records
     */ records = JSON.parse(JSON.stringify(records));
    // Error handling
    records = $5e269851126f2bb1$var$h.toArray(records);
    if ($5e269851126f2bb1$var$h.isNull(record)) return records;
    // List handling
    if ($5e269851126f2bb1$var$h.array.isArray(record)) {
        for (let r of record)records = $5e269851126f2bb1$var$addRecordToRecordList(records, r);
        return records;
    }
    // Retrieve current records same as new record from array
    let currentRecords = $5e269851126f2bb1$var$filterRecordList(records, getRefFromRecord(record));
    // Remove currentRecords from array
    for (let r of currentRecords)records = $5e269851126f2bb1$var$deleteRecordFromRecordList(records, r);
    // Merge current records and new record
    for (let r of currentRecords)record = $5e269851126f2bb1$var$mergeRecords(record, r);
    // Add new record to array
    records.push(record);
    // Return
    return records;
}
function $5e269851126f2bb1$var$deleteRecordFromRecordList(records, record) {
    /**
     * Deletes a record from a record list
     * @param {Array} records
     * @param {Object} record
     * @returns {Array} The records
     */ records = JSON.parse(JSON.stringify(records));
    for(let i = 0; i < records.length; i++)if ($5e269851126f2bb1$var$isSameRecord(records[i], getRefFromRecord(record))) records = records.splice(i, 1);
    return records;
}
function $5e269851126f2bb1$var$dedupeRecords(records) {
    /**
     * Dedupes a record list by merging ame records (type and id)
     * @param {Array} records
     * @returns {Array} The records
     * 
     */ // Error handling
    if ($5e269851126f2bb1$var$h.isNull(records)) return [];
    let results = [];
    for (let r of records)results = $5e269851126f2bb1$var$addRecordToRecordList(results, r);
    return results;
}
function $5e269851126f2bb1$var$sortRecordList(records, sortBy, sortOrder) {
    /**
     * Sorts a record list
     * @param {Array} records
     * @param {String} sortBy
     * @param {String} sortOrder
     * @returns {Array} The records
     * 
     */ records = JSON.parse(JSON.stringify(records));
    // Error handling
    if ($5e269851126f2bb1$var$h.isNull(records)) return null;
    // Sort
    records = $5e269851126f2bb1$var$h.toArray(records);
    function sortFunction(a, b) {
        let aValue = getValueFromRecord(a, sortBy);
        let bValue = getValueFromRecord(b, sortBy);
        if (aValue == bValue) return 0;
        if (sortOrder == "asc") return aValue < bValue ? -1 : 1;
        if (sortOrder == "desc") return aValue > bValue ? -1 : 1;
    }
    records = records.sort(sortFunction);
    return records;
}
function $5e269851126f2bb1$var$filterRecordList(records, conditions) {
    /**
     * Filters a record list
     * @param {Array} records
     * @param {Object} conditions
     * @returns {Array} The records
     * 
     */ records = JSON.parse(JSON.stringify(records));
    // Error handling
    if ($5e269851126f2bb1$var$h.isNull(records)) return [];
    records = $5e269851126f2bb1$var$h.toArray(records);
    // Error handling
    if ($5e269851126f2bb1$var$h.isNull(conditions)) return records;
    let results = [];
    for (let r of records)if ($5e269851126f2bb1$var$recordMeetConditions(r, conditions)) results.push(r);
    return results;
}



const $b5f9b848b00b349e$export$b4c3eca70a61f421 = {
    hexToRgb: $b5f9b848b00b349e$var$hexToRgb,
    rgbToHex: $b5f9b848b00b349e$var$rgbToHex,
    hexToHsl: $b5f9b848b00b349e$var$hexToHsl,
    hslToHex: $b5f9b848b00b349e$var$hslToHex,
    palette: {
        complementary: $b5f9b848b00b349e$var$complementaryColor,
        lighter: $b5f9b848b00b349e$var$lighterColor,
        darker: $b5f9b848b00b349e$var$darkerColor
    }
};
function $b5f9b848b00b349e$var$hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
function $b5f9b848b00b349e$var$componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function $b5f9b848b00b349e$var$rgbToHex(r, g, b) {
    /**
     * Convert an RGB color value to HEX
     * @param {Number| String} r The red color value or the entire color string
     * @param {Number} g The green color value
     * @param {Number} b The blue color value
     * @returns {String} The corresponding HEX color value
     */ if ((0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNull(g) && (0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNull(b) && r.includes(",")) {
        r = r.replace("(", "");
        r = r.replace(")", "");
        let rgb = r.split(",");
        r = Number(rgb[0].trim());
        g = Number(rgb[1].trim());
        b = Number(rgb[2].trim());
    }
    return "#" + $b5f9b848b00b349e$var$componentToHex(r) + $b5f9b848b00b349e$var$componentToHex(g) + $b5f9b848b00b349e$var$componentToHex(b);
}
function $b5f9b848b00b349e$var$hexToHsl(hex) {
    hex = hex.replace("#", "");
    let r = parseInt(hex.substring(0, 2), 16) / 255;
    let g = parseInt(hex.substring(2, 4), 16) / 255;
    let b = parseInt(hex.substring(4, 6), 16) / 255;
    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    if (max === min) h = s = 0; // achromatic
    else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h *= 60;
    }
    return [
        Math.round(h),
        Math.round(s * 100),
        Math.round(l * 100)
    ];
}
function $b5f9b848b00b349e$var$hslToHex(h, s, l) {
    s /= 100;
    l /= 100;
    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs(h / 60 % 2 - 1));
    let m = l - c / 2;
    let r = 0, g = 0, b = 0;
    if (h >= 0 && h < 60) {
        r = c;
        g = x;
        b = 0;
    } else if (h >= 60 && h < 120) {
        r = x;
        g = c;
        b = 0;
    } else if (h >= 120 && h < 180) {
        r = 0;
        g = c;
        b = x;
    } else if (h >= 180 && h < 240) {
        r = 0;
        g = x;
        b = c;
    } else if (h >= 240 && h < 300) {
        r = x;
        g = 0;
        b = c;
    } else if (h >= 300 && h < 360) {
        r = c;
        g = 0;
        b = x;
    }
    r = Math.round((r + m) * 255).toString(16).padStart(2, "0");
    g = Math.round((g + m) * 255).toString(16).padStart(2, "0");
    b = Math.round((b + m) * 255).toString(16).padStart(2, "0");
    return `#${r}${g}${b}`;
}
function $b5f9b848b00b349e$var$complementaryColor(hexColor) {
    /**
     * Returns complementary color of a given hex color
     * @param {String} hexColor Hex color
     * @returns {String} Complementary color
     */ const [h, s, l] = $b5f9b848b00b349e$var$hexToHsl(hexColor);
    const complementary = $b5f9b848b00b349e$var$hslToHex((h + 180) % 360, s, l);
    return complementary;
}
function $b5f9b848b00b349e$var$lighterColor(hexColor, increment) {
    /**
     * Returns lighter color of a given hex color
     * @param {String} hexColor Hex color
     * @param {Number} increment Increment
     * @returns {String} Lighter color
     */ const [h, s, l] = $b5f9b848b00b349e$var$hexToHsl(hexColor);
    let newColor = $b5f9b848b00b349e$var$hslToHex(h, s, Math.min(l + increment * 10, 100));
    return newColor;
}
function $b5f9b848b00b349e$var$darkerColor(hexColor, increment) {
    /**
     * Returns lighter color of a given hex color
     * @param {String} hexColor Hex color
     * @param {Number} increment Increment
     * @returns {String} Lighter color
     */ const [h, s, l] = $b5f9b848b00b349e$var$hexToHsl(hexColor);
    let newColor = $b5f9b848b00b349e$var$hslToHex(h, s, Math.min(l - increment * 10, 100));
    return newColor;
}




const $535b3f5b0bcb555a$var$h = {
    null: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10),
    array: (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00),
    isNull: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNull,
    isNotNull: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNotNull,
    toArray: (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00).toArray
};
const $535b3f5b0bcb555a$export$15c85b69ec02b47c = {
    // Base
    isDate: $535b3f5b0bcb555a$var$isValid,
    isValid: $535b3f5b0bcb555a$var$isValid,
    isValidText: $535b3f5b0bcb555a$var$isValidText,
    eq: $535b3f5b0bcb555a$var$eq,
    lt: $535b3f5b0bcb555a$var$lt,
    gt: $535b3f5b0bcb555a$var$gt,
    getDuration: $535b3f5b0bcb555a$var$getDuration,
    duration: $535b3f5b0bcb555a$var$getDuration,
    getDurationRecord: $535b3f5b0bcb555a$var$getDurationRecord,
    toDate: $535b3f5b0bcb555a$var$toDate,
    toString: $535b3f5b0bcb555a$var$toString,
    human: {
        duration: $535b3f5b0bcb555a$var$getHumanReadableDuration,
        date: $535b3f5b0bcb555a$var$getHumanReadableDate
    },
    iso: {
        getIsoDurationFromDates: $535b3f5b0bcb555a$var$toISODurationFromDates,
        getTextFromIsoDuration: $535b3f5b0bcb555a$var$convertISODurationToEnglish,
        getIsoDurationFromText: $535b3f5b0bcb555a$var$convertEnglishToISODuration
    },
    now: $535b3f5b0bcb555a$var$getCurrentDateObject
};
/**
 * Returns true if value if a Date object
 * @param {String | Date | object} value
 * @return {bool} isDate True if date object
 */ function $535b3f5b0bcb555a$var$isValid(value) {
    if (value instanceof Date) return true;
    return false;
}
function $535b3f5b0bcb555a$var$isValidText(value) {
    if (value instanceof Date) return true;
    value = $535b3f5b0bcb555a$var$toDate(value);
    if (value instanceof Date) return true;
    return false;
}
function $535b3f5b0bcb555a$var$toString(value) {
    /**
     * Converts a value (string, etc.) to Date
     * @param {String | Date | object} value
     * @return {Date} date
     */ if ($535b3f5b0bcb555a$var$isValid(value) == false) {
        value = $535b3f5b0bcb555a$var$toDate(value);
        if ($535b3f5b0bcb555a$var$isValid(value) == false) return "";
    }
    let formattedDate = value.toLocaleString();
    return formattedDate;
}
function $535b3f5b0bcb555a$var$toDate(value) {
    /**
     * Converts a value (string, etc.) to Date
     * @param {String | Date | object} value
     * @return {Date} date
     */ if ($535b3f5b0bcb555a$var$isValid(value) == true) return value;
    if (typeof value !== "string") return undefined;
    // Native conversion
    try {
        const date = new Date(value);
        if (!isNaN(date.getTime())) return date;
    } catch (error) {}
    // Convert from different formats
    const formatMap = {
        "YYYY-MM-DD": /(\d{4})-(\d{2})-(\d{2})/,
        "MM/DD/YYYY": /(\d{2})\/(\d{2})\/(\d{4})/,
        "DD-MM-YYYY": /(\d{2})-(\d{2})-(\d{4})/,
        "YYYY/MM/DD": /(\d{4})\/(\d{2})\/(\d{2})/
    };
    for (let format of Object.keys(formatMap)){
        const regex = formatMap[format];
        const match = value.match(regex);
        if (!match) continue;
        let year, month, day;
        switch(format){
            case "YYYY-MM-DD":
            case "YYYY/MM/DD":
                year = match[1];
                month = match[2] - 1; // JS months are 0-based
                day = match[3];
                break;
            case "MM/DD/YYYY":
                month = match[1] - 1;
                day = match[2];
                year = match[3];
                break;
            case "DD-MM-YYYY":
                day = match[1];
                month = match[2] - 1;
                year = match[3];
                break;
            default:
                break;
        }
        const date = new Date(year, month, day);
        // Check if the date is valid
        try {
            if (!isNaN(date.getTime())) return date;
        } catch  {}
    }
    return null;
}
function $535b3f5b0bcb555a$var$eq(date1, date2) {
    /**
     * Returns true if two dates are equal
     * @param {Date} date1
     * @param {Date} date2
     * @return {bool} isEqual
     */ if (!date1 || !date2) return false;
    if (date1 == null || date2 == null) return false;
    if (date1.getTime() == date2.getTime()) return true;
    return false;
}
function $535b3f5b0bcb555a$var$lt(date1, date2) {
    /**
     * Returns true if date1 is greater than date2
     * @param {Date} date1
     * @param {Date} date2
     * @return {bool} isGreater
     */ if (!$535b3f5b0bcb555a$var$isValid(date1) || !$535b3f5b0bcb555a$var$isValid(date2)) return false;
    return date1 < date2;
}
function $535b3f5b0bcb555a$var$gt(date1, date2) {
    /**
     * Returns true if date1 is greater than date2
     * @param {Date} date1
     * @param {Date} date2
     * @return {bool} isGreater
     */ if (!$535b3f5b0bcb555a$var$isValid(date1) || !$535b3f5b0bcb555a$var$isValid(date2)) return false;
    return date1 > date2;
}
function $535b3f5b0bcb555a$var$getDuration(date1, date2) {
    /**
     * Returns duration between two dates
     * @param {Date} date1
     * @param {Date} date2
     * @return {Number} duration
     */ date1 = $535b3f5b0bcb555a$var$toDate(date1);
    date2 = $535b3f5b0bcb555a$var$toDate(date2);
    if ($535b3f5b0bcb555a$var$isValid(date1) == false) return undefined;
    if ($535b3f5b0bcb555a$var$isValid(date2) == false) return undefined;
    let startDate;
    let endDate;
    if (date1 < date2) {
        startDate = date1;
        endDate = date2;
    } else {
        startDate = date2;
        endDate = date1;
    }
    let duration = (endDate - startDate) / 1000;
    return duration;
}
function $535b3f5b0bcb555a$var$getDurationRecord(date1, date2) {
    /**
     * Returns duration between two dates
     * @param {Date} date1
     * @param {Date} date2
     * @return {Number} duration
     */ let duration = $535b3f5b0bcb555a$var$getDuration(date1, date2);
    let result = {
        "@type": "QuantitativeValue",
        "@id": String(crypto.randomUUID()),
        "unitCode": "SEC",
        "unitText": "s",
        "value": duration
    };
    return result;
}
function $535b3f5b0bcb555a$var$getCurrentDateObject() {
    /**
     * Returns current date object
     * @return {Date} date
     * 
     */ let now = new Date();
    return now;
}
// -----------------------------------------------------
//  Human readable  
// -----------------------------------------------------
function $535b3f5b0bcb555a$var$getHumanReadableDate(date) {
    /**
     * Returns human readable date
     * @param {Date} date
     * @return {String} date
     * 
     */ // If not date 2, assume date 2 is now
    const now = new Date();
    const targetDate = new Date(date);
    const diff = Math.abs(now - targetDate); // difference in milliseconds
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30); // approximation for months
    const years = Math.floor(days / 365); // approximation for years
    if (years > 0) return years === 1 ? "1 year ago" : `${years} years ago`;
    else if (months > 0) return months === 1 ? "1 month ago" : `${months} months ago`;
    else if (days > 0) return days === 1 ? "1 day ago" : `${days} days ago`;
    else if (hours > 0) return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
    else if (minutes > 0) return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
    else return seconds === 1 ? "1 second ago" : `${seconds} seconds ago`;
}
function $535b3f5b0bcb555a$var$getHumanReadableDuration(startDate, endDate) {
    /**
     * Returns human readable duration
     * @param {Date} startDate
     * @param {Date} endDate
     * @return {String} duration
     */ startDate = $535b3f5b0bcb555a$var$toDate(startDate);
    endDate = $535b3f5b0bcb555a$var$toDate(endDate);
    if ($535b3f5b0bcb555a$var$h.isNull(startDate)) return "";
    if ($535b3f5b0bcb555a$var$h.isNull(endDate)) return "";
    const diffInMilliseconds = Math.abs(endDate - startDate);
    const millisecondsInSecond = 1000;
    const millisecondsInMinute = millisecondsInSecond * 60;
    const millisecondsInHour = millisecondsInMinute * 60;
    const millisecondsInDay = millisecondsInHour * 24;
    const millisecondsInMonth = millisecondsInDay * 30.44; // Approximate value for a month
    const millisecondsInYear = millisecondsInDay * 365.25; // Account for leap years
    const years = Math.floor(diffInMilliseconds / millisecondsInYear);
    const months = Math.floor(diffInMilliseconds % millisecondsInYear / millisecondsInMonth);
    const days = Math.floor(diffInMilliseconds % millisecondsInMonth / millisecondsInDay);
    const hours = Math.floor(diffInMilliseconds % millisecondsInDay / millisecondsInHour);
    const minutes = Math.floor(diffInMilliseconds % millisecondsInHour / millisecondsInMinute);
    const seconds = Math.floor(diffInMilliseconds % millisecondsInMinute / millisecondsInSecond);
    let duration = [];
    if (years) return `${years} year${years > 1 ? "s" : ""}`;
    if (months) return `${months} month${months > 1 ? "s" : ""}`;
    if (days) return `${days} day${days > 1 ? "s" : ""}`;
    if (hours) return `${hours} hour${hours > 1 ? "s" : ""}`;
    if (minutes) return `${minutes} minute${minutes > 1 ? "s" : ""}`;
    if (seconds) return `${seconds} second${seconds >= 0 ? "s" : ""}`;
    return "";
}
// -----------------------------------------------------
//  ISO 
// -----------------------------------------------------
function $535b3f5b0bcb555a$var$toISODurationFromDates(startDate, endDate) {
    /**
     * Returns ISO duration from dates
     * @param {Date} startDate
     * @param {Date} endDate
     * @return {String} duration
     */ const start = new Date(startDate);
    const end = new Date(endDate);
    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();
    let hours = end.getHours() - start.getHours();
    let minutes = end.getMinutes() - start.getMinutes();
    let seconds = end.getSeconds() - start.getSeconds();
    // Handle negative values by adjusting the larger units
    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        const daysInPreviousMonth = new Date(end.getFullYear(), end.getMonth(), 0).getDate();
        days += daysInPreviousMonth;
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }
    // Construct ISO 8601 duration string
    let duration = "P";
    if (years > 0) duration += `${years}Y`;
    if (months > 0) duration += `${months}M`;
    if (days > 0) duration += `${days}D`;
    if (hours > 0 || minutes > 0 || seconds > 0) {
        duration += "T"; // Time part separator
        if (hours > 0) duration += `${hours}H`;
        if (minutes > 0) duration += `${minutes}M`;
        if (seconds > 0) duration += `${seconds}S`;
    }
    return duration;
}
function $535b3f5b0bcb555a$var$convertISODurationToEnglish(duration) {
    /**
     * Converts ISO duration to english
     * @param {String} duration
     * @return {String} duration
     * 
     */ const isoDurationRegex = /^P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/;
    const matches = duration.match(isoDurationRegex);
    if (!matches) return "Invalid ISO 8601 duration";
    const years = matches[1] ? `${matches[1]} year${matches[1] > 1 ? "s" : ""}` : "";
    const months = matches[2] ? `${matches[2]} month${matches[2] > 1 ? "s" : ""}` : "";
    const days = matches[3] ? `${matches[3]} day${matches[3] > 1 ? "s" : ""}` : "";
    const hours = matches[4] ? `${matches[4]} hour${matches[4] > 1 ? "s" : ""}` : "";
    const minutes = matches[5] ? `${matches[5]} minute${matches[5] > 1 ? "s" : ""}` : "";
    const seconds = matches[6] ? `${matches[6]} second${matches[6] > 1 ? "s" : ""}` : "";
    const parts = [
        years,
        months,
        days,
        hours,
        minutes,
        seconds
    ].filter(Boolean);
    if (parts.length === 0) return "No duration specified";
    return parts.join(", ");
}
function $535b3f5b0bcb555a$var$convertEnglishToISODuration(englishDuration) {
    /**
     * Converts english duration to ISO duration
     * @param {String} englishDuration
     * @return {String} duration
     * 
     */ const timeUnits = {
        year: "Y",
        years: "Y",
        month: "M",
        months: "M",
        day: "D",
        days: "D",
        hour: "H",
        hours: "H",
        minute: "M",
        minutes: "M",
        second: "S",
        seconds: "S"
    };
    let years = 0, months = 0, days = 0, hours = 0, minutes = 0, seconds = 0;
    // Split the input into parts (e.g., ["2 years", "6 months"])
    const parts = englishDuration.split(",").map((part)=>part.trim());
    parts.forEach((part)=>{
        const [value, unit] = part.split(" ");
        const number = parseInt(value, 10);
        if (isNaN(number) || !timeUnits[unit.toLowerCase()]) throw new Error("Invalid duration format");
        switch(unit.toLowerCase()){
            case "year":
            case "years":
                years = number;
                break;
            case "month":
            case "months":
                months = number;
                break;
            case "day":
            case "days":
                days = number;
                break;
            case "hour":
            case "hours":
                hours = number;
                break;
            case "minute":
            case "minutes":
                minutes = number;
                break;
            case "second":
            case "seconds":
                seconds = number;
                break;
        }
    });
    // Construct ISO 8601 duration string
    let isoDuration = "P";
    if (years) isoDuration += `${years}Y`;
    if (months) isoDuration += `${months}M`;
    if (days) isoDuration += `${days}D`;
    if (hours || minutes || seconds) {
        isoDuration += "T";
        if (hours) isoDuration += `${hours}H`;
        if (minutes) isoDuration += `${minutes}M`;
        if (seconds) isoDuration += `${seconds}S`;
    }
    return isoDuration || "P0D"; // Return P0D for no duration
}



const $72ab74e9bdfc8a51$export$bac8020bbb4f7950 = {
    isValid: $72ab74e9bdfc8a51$var$isValid,
    getDomain: $72ab74e9bdfc8a51$var$getDomain,
    getUsername: $72ab74e9bdfc8a51$var$getUsername
};
function $72ab74e9bdfc8a51$var$isValid(email) {
    /**
     * Checks if an email is valid
     * @param {String} email
     * @returns {Boolean}
     * 
     */ if (typeof email !== "string") throw new TypeError("The provided value must be a string.");
    // Regular expression to validate email addresses
    const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    return emailRegex.test(email);
}
function $72ab74e9bdfc8a51$var$getUsername(email) {
    /**
     * Returns the username of an email address
     * @param {String} email
     * @returns {String} The domain
     * 
     */ if (!$72ab74e9bdfc8a51$var$isValid(email)) return null;
    return email.split("@")[0];
}
function $72ab74e9bdfc8a51$var$getUsernamePattern(email) {
    /**
     * Returns the pattern of the username of an email address
     * todo: complete
     */ if (!$72ab74e9bdfc8a51$var$isValid(email)) return null;
    let username = $72ab74e9bdfc8a51$var$getUsername(email);
    return;
}
function $72ab74e9bdfc8a51$var$getDomain(email) {
    /**
     * Returns the domain of an email address
     * @param {String} email
     * @returns {String} The domain
     * 
     */ if (!$72ab74e9bdfc8a51$var$isValid(email)) return null;
    return email.split("@")[1];
}



const $650a87c2d2146f16$export$c43cb89937ee8d5c = {
    get: $650a87c2d2146f16$var$getHash
};
function $650a87c2d2146f16$var$getHash(str) {
    /**
     * Get a hash value
     * @param {Object} hash The hash
     * @returns {String} The hash value
     *
     */ let value = str;
    if ((0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNull(value)) value = "null";
    try {
        value = JSON.stringify(str);
    } catch  {
        return null;
    }
    let seed = 5;
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for(let i = 0, ch; i < value.length; i++){
        ch = value.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507);
    h1 ^= Math.imul(h2 ^ h2 >>> 13, 3266489909);
    h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507);
    h2 ^= Math.imul(h1 ^ h1 >>> 13, 3266489909);
    let hashValue = 4294967296 * (2097151 & h2) + (h1 >>> 0);
    return hashValue;
}










const $2969a9bd2c7ad243$var$h = {
    null: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10),
    array: (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00),
    date: (0, $535b3f5b0bcb555a$export$15c85b69ec02b47c),
    isNull: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNull,
    isNotNull: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNotNull,
    toArray: (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00).toArray,
    isArray: (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00).isArray,
    dot: (0, $2cf68f4048a6f85f$export$fe5b3308000496d5),
    number: (0, $44ebc265e2335159$export$96be39e8128f5891),
    json: (0, $409d3194b75b4893$export$94a70d284fcdf065),
    isObject: (0, $e787032c49c8ddee$export$42f247ccf9267abd).isObject,
    object: (0, $e787032c49c8ddee$export$42f247ccf9267abd),
    thing: (0, $5e269851126f2bb1$export$b28abe9e4076f605)
};
const $2969a9bd2c7ad243$export$2e72560dcbb9783c = {
    record: {
        get: $2969a9bd2c7ad243$var$getHeadingRecord
    },
    oneLiner: {
        get: $2969a9bd2c7ad243$var$getHeadingOneLiner
    },
    heading1: $2969a9bd2c7ad243$var$_getHeading1,
    heading2: $2969a9bd2c7ad243$var$_getHeading2,
    headingDescription: $2969a9bd2c7ad243$var$_getHeadingDescription,
    headingDate: $2969a9bd2c7ad243$var$_getHeadingDate,
    headingDateSince: $2969a9bd2c7ad243$var$_getHeadingDateSince,
    headingDuration: $2969a9bd2c7ad243$var$_getHeadingDuration,
    headingStatus: $2969a9bd2c7ad243$var$_getHeadingStatus,
    headingImage: $2969a9bd2c7ad243$var$_getHeadingImage,
    headingStars: $2969a9bd2c7ad243$var$_getHeadingStars,
    headingTotal: $2969a9bd2c7ad243$var$_getHeadingTotal,
    addHeadings: $2969a9bd2c7ad243$var$addHeadingstoRecord
};
function $2969a9bd2c7ad243$var$addHeadingstoRecord(record) {
    /**
     * Adds heading to record
     * @param {Object} record
     * @returns {Object} The record
     */ let headings = $2969a9bd2c7ad243$var$getHeadingRecord(record);
    for(let k in headings)record[k] = headings[k];
    // Recurse
    for(let k in record){
        if ($2969a9bd2c7ad243$var$h.isArray(record[k])) {
            for(let i = 0; i < record[k].length; i++)if ($2969a9bd2c7ad243$var$h.thing.isValid(record[k][i])) record[k][i] = $2969a9bd2c7ad243$var$addHeadingstoRecord(record[k][i]);
        }
        if ($2969a9bd2c7ad243$var$h.thing.isValid(record[k])) record[k] = $2969a9bd2c7ad243$var$addHeadingstoRecord(record[k]);
    }
    return record;
}
function $2969a9bd2c7ad243$var$getHeadingRecord(record, locale) {
    /**
     * Returns the heading record
     * @param {Object} record
     * @returns {Object} The heading record
     */ // Array
    if ($2969a9bd2c7ad243$var$h.isArray(record)) return record.map((x)=>$2969a9bd2c7ad243$var$getHeadingRecord(x, locale));
    // Handle non object
    if (!$2969a9bd2c7ad243$var$h.isObject(record)) return record;
    // return non thing
    if ($2969a9bd2c7ad243$var$h.isNull(record?.["@type"])) return record;
    // Copy record
    record = JSON.parse(JSON.stringify(record));
    record._heading1 = $2969a9bd2c7ad243$var$_getHeading1(record);
    record._heading2 = $2969a9bd2c7ad243$var$_getHeading2(record);
    record._headingDescription = $2969a9bd2c7ad243$var$_getHeadingDescription(record);
    record._headingDate = $2969a9bd2c7ad243$var$_getHeadingDate(record);
    record._headingDateSince = $2969a9bd2c7ad243$var$_getHeadingDateSince(record);
    record._headingStatus = $2969a9bd2c7ad243$var$_getHeadingStatus(record);
    record._headingImage = $2969a9bd2c7ad243$var$_getHeadingImage(record);
    record._headingDuration = $2969a9bd2c7ad243$var$_getHeadingDuration(record);
    record._headingStars = $2969a9bd2c7ad243$var$_getHeadingStars(record);
    record._headingPrice = $2969a9bd2c7ad243$var$_getHeadingPrice(record);
    record._headingPriceUnit = $2969a9bd2c7ad243$var$_getHeadingPriceUnit(record);
    record._headingHtmlInputType = $2969a9bd2c7ad243$var$getHtmlInputType(record);
    // Recurse for sub records
    for (let k of Object.keys(record))record[k] = $2969a9bd2c7ad243$var$getHeadingRecord(record[k], locale);
    record = (0, $409d3194b75b4893$export$94a70d284fcdf065).simplify(record);
    // Return
    return record;
}
function $2969a9bd2c7ad243$var$getHeadingOneLiner(record, locale) {
    /**
     * Returns the heading one liner
     * @param {Object} record
     * @returns {str} The heading one liner
     */ let elements = [];
    elements.push($2969a9bd2c7ad243$var$_getHeadingDate(record));
    elements.push($2969a9bd2c7ad243$var$_getHeading1(record));
    elements.push($2969a9bd2c7ad243$var$_getHeadingStatus(record));
    elements = elements.filter((x)=>!$2969a9bd2c7ad243$var$h.isNull(x));
    return elements.join(" ");
}
function $2969a9bd2c7ad243$var$_getHeading1(record) {
    let heading = "heading1";
    return $2969a9bd2c7ad243$var$_getHeadingX(record, heading);
}
function $2969a9bd2c7ad243$var$_getHeading2(record) {
    let heading = "heading2";
    return $2969a9bd2c7ad243$var$_getHeadingX(record, heading);
}
function $2969a9bd2c7ad243$var$_getHeadingDescription(record) {
    let heading = "headingDescription";
    return $2969a9bd2c7ad243$var$_getHeadingX(record, heading);
}
function $2969a9bd2c7ad243$var$_getHeadingDate(record) {
    let heading = "headingDate";
    return $2969a9bd2c7ad243$var$_getHeadingX(record, heading);
}
function $2969a9bd2c7ad243$var$_getHeadingStatus(record) {
    let heading = "headingStatus";
    return $2969a9bd2c7ad243$var$_getHeadingX(record, heading);
}
function $2969a9bd2c7ad243$var$_getHeadingImage(record) {
    if ($2969a9bd2c7ad243$var$h.isNotNull(record?.contentUrl)) return record?.contentUrl;
    if ($2969a9bd2c7ad243$var$h.isNotNull(record?.image?.contentUrl)) return record?.image?.contentUrl;
    return null;
}
function $2969a9bd2c7ad243$var$_getHeadingDuration(record) {
    let date = $2969a9bd2c7ad243$var$_getHeadingDate(record);
    if ($2969a9bd2c7ad243$var$h.isNull(date)) return null;
    let duration = $2969a9bd2c7ad243$var$h.date.human.duration(date);
    return duration;
}
function $2969a9bd2c7ad243$var$_getHeadingDateSince(record) {
    let date = $2969a9bd2c7ad243$var$_getHeadingDate(record);
    if ($2969a9bd2c7ad243$var$h.isNull(date)) return null;
    let duration = $2969a9bd2c7ad243$var$h.date.human.duration(date);
    return duration;
}
function $2969a9bd2c7ad243$var$_getHeadingStars(record) {
    let score = record?.ratingValue;
    if ($2969a9bd2c7ad243$var$h.isNull(score)) return null;
    let runningScore = 0;
    let content = "";
    while(runningScore < score){
        content += $2969a9bd2c7ad243$var$fullStar();
        runningScore += 1;
    }
    if (score > runningScore && score < runningScore + 1) content += $2969a9bd2c7ad243$var$halfStar();
    while(runningScore < (score?.bestRating || 5)){
        content += $2969a9bd2c7ad243$var$emptyStar();
        runningScore += 1;
    }
    return content;
}
function $2969a9bd2c7ad243$var$_getHeadingPrice(record) {
    if ($2969a9bd2c7ad243$var$h.isNull(record?.priceSpecification)) return null;
    let ps = record?.priceSpecification?.[0] || record?.priceSpecification;
    let price = ps?.price;
    let priceCurrency = ps?.priceCurrency;
    let content = "";
    if (priceCurrency == "CAD" || priceCurrency == "USD") content = "$";
    if ($2969a9bd2c7ad243$var$h.number.isValid($2969a9bd2c7ad243$var$h.number.toNumber(ps?.price))) content += String(ps.price);
    if (content == "") content = null;
    return content;
}
function $2969a9bd2c7ad243$var$_getHeadingPriceUnit(record) {
    if ($2969a9bd2c7ad243$var$h.isNull(record?.priceSpecification)) return null;
    let ps = record?.priceSpecification?.[0] || record?.priceSpecification;
    let content = null;
    if ($2969a9bd2c7ad243$var$h.isNotNull(ps?.referenceQuantity?.unitCode)) {
        content = ps?.referenceQuantity?.unitCode;
        if ($2969a9bd2c7ad243$var$h.isNotNull(content)) content = content.toLowerCase();
    }
    return content;
}
function $2969a9bd2c7ad243$var$getHtmlInputType(record) {
    if (record?.["@type"] != "PropertyValueSpecification") return;
    if (record?.minValue == 0 && record.maxValue == 1) return "checkbox";
    if ($2969a9bd2c7ad243$var$h.isNotNull(record?.minValue)) return "number";
    if ($2969a9bd2c7ad243$var$h.isNotNull(record?.maxValue)) return "number";
    if ($2969a9bd2c7ad243$var$h.isNotNull(record?.valueName) && record?.valueName.includes("Date")) return "datetime-local";
    if ($2969a9bd2c7ad243$var$h.isNotNull(record?.valueName) && record?.valueName.includes("Time")) return "datetime-local";
    if ($2969a9bd2c7ad243$var$h.isNotNull(record?.valueName) && record?.valueName.toLowerCase().includes("email")) return "email";
    if ($2969a9bd2c7ad243$var$h.isNotNull(record?.valueName) && record?.valueName.toLowerCase().endsWith("url")) return "url";
    if ($2969a9bd2c7ad243$var$h.isNotNull(record?.valueName) && record?.valueName.toLowerCase().includes("phone")) return "phone";
}
function $2969a9bd2c7ad243$var$_getHeadingTotal(record) {}
function $2969a9bd2c7ad243$var$_getHeadingX(record, heading) {
    /**
     * Returns the heading for a given record
     * @param {Object} record
     * @param {String} heading
     * @returns {String} The heading
     */ let headingValue = "";
    try {
        let record_type = record["@type"];
        let config = $2969a9bd2c7ad243$var$getConfig();
        let headingPossibilities = config?.[record_type]?.[heading];
        // Revert to thing if null
        if ($2969a9bd2c7ad243$var$h.isNull(headingPossibilities)) headingPossibilities = config?.["Thing"]?.[heading];
        headingValue = null;
        // if heading2, ensures that it is not equal to heading1
        let comparaison = null;
        if (heading === "heading2") comparaison = $2969a9bd2c7ad243$var$_getHeadingX(record, "heading1");
        // Iterate through possibilities until a non null value is found
        for (let hp of $2969a9bd2c7ad243$var$h.toArray(headingPossibilities)){
            headingValue = $2969a9bd2c7ad243$var$_getValue(record, heading, hp);
            if ($2969a9bd2c7ad243$var$h.isNotNull(headingValue)) {
                if (heading == "heading2") {
                    if (comparaison != headingValue) break;
                } else break;
            }
        }
    } catch  {
        headingValue = record?.["@id"];
    }
    return headingValue;
}
function $2969a9bd2c7ad243$var$_getValue(record, heading, keys) {
    keys = $2969a9bd2c7ad243$var$h.toArray(keys);
    let values = [];
    for (let k of keys){
        let value = record[k];
        if (Array.isArray(value)) value = value[0];
        // Handle object as values (when listItem references item for example )
        if (value?.["@type"]) value = $2969a9bd2c7ad243$var$_getHeadingX(value, "heading1");
        if (value && value != null) values.push(value);
    }
    if (values.length == 0) return null;
    // Assemble values
    let headingValue = values.join(" ");
    return headingValue;
}
function $2969a9bd2c7ad243$var$getConfig() {
    let record = {
        Thing: {
            heading1: [
                "headline",
                "name",
                "url",
                [
                    "@type",
                    "@id"
                ]
            ],
            heading2: [
                "url",
                [
                    "@type",
                    "@id"
                ]
            ],
            headingDescription: [
                "text",
                "description"
            ],
            headingDate: [
                ""
            ]
        },
        Article: {
            heading1: [
                "headline",
                "name",
                "url",
                "@id"
            ],
            heading2: [
                "author",
                "url",
                "@id"
            ],
            headingDescription: [
                "articleBody",
                "text",
                "description"
            ],
            headingDate: [
                "datePublished",
                "dateCreated"
            ]
        },
        Action: {
            heading1: [
                "name",
                "url",
                [
                    "@type",
                    "@id"
                ]
            ],
            heading2: [
                "author",
                "url",
                [
                    "@type",
                    "@id"
                ]
            ],
            headingDescription: [
                "articleBody",
                "text",
                "description"
            ],
            headingDate: [
                "datePublished",
                "dateCreated"
            ],
            headingStatus: [
                "actionStatus"
            ]
        },
        EditorPart: {
            heading1: [
                "propertyID"
            ],
            heading2: [
                "value"
            ],
            headingDescription: [
                "value"
            ]
        },
        Person: {
            heading1: [
                [
                    "givenName",
                    "familyName"
                ],
                "name",
                "url",
                [
                    "@type",
                    "@id"
                ]
            ],
            heading2: [
                "title",
                "email",
                "url",
                [
                    "@type",
                    "@id"
                ]
            ],
            headingDescription: [
                "text",
                "description"
            ],
            headingDate: [
                "datePublished",
                "dateCreated"
            ],
            headingStatus: [
                "actionStatus"
            ]
        },
        ListItem: {
            heading1: [
                "item",
                "name",
                "url",
                [
                    "@type",
                    "@id"
                ]
            ],
            heading2: [
                "item",
                "url",
                [
                    "@type",
                    "@id"
                ]
            ],
            headingDescription: [
                "text",
                "description"
            ],
            headingDate: [
                "datePublished",
                "dateCreated"
            ],
            headingStatus: [
                "actionStatus"
            ]
        },
        CreativeWork: {
            heading1: [
                "headline",
                "name",
                "url",
                [
                    "@type",
                    "@id"
                ]
            ],
            heading2: [
                "author",
                "url",
                [
                    "@type",
                    "@id"
                ]
            ],
            headingDescription: [
                "articleBody",
                "text",
                "description"
            ],
            headingDate: [
                "datePublished",
                "dateCreated"
            ]
        },
        HowTo: {
            heading1: [
                "headline",
                "name",
                "url",
                [
                    "@type",
                    "@id"
                ]
            ],
            heading2: [
                "author",
                "url",
                [
                    "@type",
                    "@id"
                ]
            ],
            headingDescription: [
                "articleBody",
                "text",
                "description"
            ],
            headingDate: [
                "datePublished",
                "dateCreated"
            ]
        },
        HowToSection: {
            heading1: [
                "headline",
                "name",
                "url",
                [
                    "@type",
                    "@id"
                ]
            ],
            heading2: [
                "author",
                "url",
                [
                    "@type",
                    "@id"
                ]
            ],
            headingDescription: [
                "articleBody",
                "text",
                "description"
            ],
            headingDate: [
                "datePublished",
                "dateCreated"
            ]
        },
        HowToStep: {
            heading1: [
                "headline",
                "name",
                "url",
                [
                    "@type",
                    "@id"
                ]
            ],
            heading2: [
                "author",
                "url",
                [
                    "@type",
                    "@id"
                ]
            ],
            headingDescription: [
                "articleBody",
                "text",
                "description"
            ],
            headingDate: [
                "datePublished",
                "dateCreated"
            ]
        },
        HowToDirection: {
            heading1: [
                "headline",
                "name",
                "url",
                [
                    "@type",
                    "@id"
                ]
            ],
            heading2: [
                "author",
                "url",
                [
                    "@type",
                    "@id"
                ]
            ],
            headingDescription: [
                "articleBody",
                "text",
                "description"
            ],
            headingDate: [
                "datePublished",
                "dateCreated"
            ]
        },
        PostalAddress: {
            heading1: [
                "streetAddress",
                "name",
                [
                    "@type",
                    "@id"
                ]
            ],
            heading2: [
                [
                    "addressLocality",
                    "addressRegion",
                    "postalCode",
                    "addressCountry"
                ]
            ],
            headingDescription: [
                "text",
                "name",
                "description"
            ],
            headingDate: [
                "datePublished",
                "dateCreated"
            ]
        },
        QuantitativeValue: {
            heading1: [
                [
                    "value",
                    "unitText"
                ],
                [
                    "value",
                    "unitCode"
                ],
                "@id"
            ]
        },
        Order: {}
    };
    return record;
}
function $2969a9bd2c7ad243$var$fullStar() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>`;
}
function $2969a9bd2c7ad243$var$halfStar() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
          <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"/>
        </svg>`;
}
function $2969a9bd2c7ad243$var$emptyStar() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>`;
}






const $448dba5b2b5f8b84$export$7fbed440f12ae0cb = {
    isValid: $448dba5b2b5f8b84$var$isValid,
    regexFromString: $448dba5b2b5f8b84$var$regexFromString,
    test: $448dba5b2b5f8b84$var$testRegex,
    match: $448dba5b2b5f8b84$var$matchRegex
};
function $448dba5b2b5f8b84$var$isValid(str) {
    /**
     * Checks if a regex is valid
     * @param {String} str
     * @returns {Boolean}
     */ try {
        let result = $448dba5b2b5f8b84$var$regexFromString(str);
        return true;
    } catch  {
        return false;
    }
}
function $448dba5b2b5f8b84$var$regexFromString(str) {
    const match = str.match(/^([\/~@;%#'])(.*?)\1([gimsuy]*)$/);
    return match ? new RegExp(match[2], match[3]// Filter redundant flags, to avoid exceptions
    .split("").filter((char, pos, flagArr)=>flagArr.indexOf(char) === pos).join("")) : new RegExp(str);
}
function $448dba5b2b5f8b84$var$testRegex(str, regex) {
    if (typeof regex == "string") regex = $448dba5b2b5f8b84$var$regexFromString(regex);
    return regex.test(str);
}
function $448dba5b2b5f8b84$var$matchRegex(str, regex) {}








const $29b4af06eeffbd86$var$h = {
    null: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10),
    array: (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00),
    isNull: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNull,
    isNotNull: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNotNull,
    toArray: (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00).toArray,
    isArray: (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00).isArray,
    dot: (0, $2cf68f4048a6f85f$export$fe5b3308000496d5),
    number: (0, $44ebc265e2335159$export$96be39e8128f5891),
    json: (0, $409d3194b75b4893$export$94a70d284fcdf065),
    object: (0, $e787032c49c8ddee$export$42f247ccf9267abd)
};
const $29b4af06eeffbd86$export$da17952f31714a6e = {
    toString: $29b4af06eeffbd86$var$toString,
    getType: $29b4af06eeffbd86$var$getType,
    getTypeSchemaOrg: $29b4af06eeffbd86$var$getTypeSchemaOrg,
    innerValuesToText: $29b4af06eeffbd86$var$innerValuesToText,
    valuesToText: $29b4af06eeffbd86$var$innerValuesToText
};
function $29b4af06eeffbd86$var$isValid(value) {
    /**
     * Checks if a value is valid
     * @param {Object} value
     * @returns {Boolean}
     */ return true;
}
function $29b4af06eeffbd86$var$toString(value) {
    /**
     * Converts a value to a string
     * @param {Object} value The value
     * @returns {String} The string
     * 
     */ if (value !== 0 && value === undefined) return "";
    if (value !== 0 && value === null) return "";
    if (value !== 0 && value == "") return "";
    if (value !== 0 && $29b4af06eeffbd86$var$h.array.isValid(value) && value.length == 0) return "";
    if (value !== 0 && value == {}) return "";
    if (value !== 0 && value == "undefined") return "";
    if ($29b4af06eeffbd86$var$h.thing.isValid(value)) return $29b4af06eeffbd86$var$h.thing.toString(value);
    else if ($29b4af06eeffbd86$var$h.date.isValid(value)) return $29b4af06eeffbd86$var$h.date.toString(value);
    else if ($29b4af06eeffbd86$var$h.date.isValidText(value)) return $29b4af06eeffbd86$var$h.date.toString(value);
    else if ($29b4af06eeffbd86$var$h.array.isValid(value)) return $29b4af06eeffbd86$var$h.array.toString(value);
    else if ($29b4af06eeffbd86$var$h.number.isValid(value)) return $29b4af06eeffbd86$var$h.number.toString(value);
    else if ($29b4af06eeffbd86$var$h.object.isObject(value)) return $29b4af06eeffbd86$var$h.object.toString(value);
    else {
        value = String(value);
        value = value.replace("ActionStatus", "");
        value = value.replace("undefined", "");
        value = $29b4af06eeffbd86$var$h.string.fromCamelCase(value);
        return value;
    }
}
function $29b4af06eeffbd86$var$innerValuesToText(value) {
    /**
     * Convertsthe values of a dict to a string
     * @param {Object} value The value
     * @returns {String} The string
     */ if ($29b4af06eeffbd86$var$h.array.isValid(value)) {
        let result = [];
        for (let v of value)result.push($29b4af06eeffbd86$var$innerValuesToText(v));
        return result;
    }
    if ($29b4af06eeffbd86$var$h.object.isObject(value)) {
        let result = {};
        for (let k of $29b4af06eeffbd86$var$h.object.keys(value))result[k] = $29b4af06eeffbd86$var$toString(value[k]);
        return result;
    }
    return $29b4af06eeffbd86$var$toString(value);
}
function $29b4af06eeffbd86$var$getType(value) {
    /**
     * Returns the type of a value
     * @param {Object} value The value
     * @returns {String} The type (thing, datetime, array, number, string)
     * 
     */ if ($29b4af06eeffbd86$var$h.thing.isThing(value)) return "thing";
    else if ($29b4af06eeffbd86$var$h.date.isValid(value)) return "datetime";
    else if ($29b4af06eeffbd86$var$h.array.isValid(value)) return "array";
    else if ($29b4af06eeffbd86$var$h.number.isNumber(value)) return "number";
    else return "string";
}
function $29b4af06eeffbd86$var$getTypeSchemaOrg(value) {
    /**
     * Returns the schema.org type of a value 
     * @param {Object} value The value
     * @returns {String} The type (thing, datetime, array, number
     */ let t = $29b4af06eeffbd86$var$getType(value);
    if (t == "thing") return value["@type"];
    if (t == "string") {
        if ($29b4af06eeffbd86$var$h.url.toUrl(value)) return "url";
    }
    return t;
}


const $d377c17755cdcb6b$export$4fd911443ac649b8 = {
    getPreview: $d377c17755cdcb6b$var$getPreviewElementFromFile,
    getRecord: $d377c17755cdcb6b$var$getRecordFromFile
};
// -----------------------------------------------------
//  Record
// -----------------------------------------------------
async function $d377c17755cdcb6b$var$getRecordFromFile(file) {
    console.log("--- width", file.width);
    let record = {};
    record["@type"] = $d377c17755cdcb6b$var$_getRecordTypeFromFile(file);
    record.contentSize = file.size;
    record.dateModified = file.lastModifiedDate;
    record.encodingFormat = file.type;
    record.name = file.name;
    return record;
}
function $d377c17755cdcb6b$var$_getRecordTypeFromFile(file) {
    let record_type = null;
    if (file.type.startsWith("image/")) record_type = "ImageObject";
    else if (file.type.startsWith("video/")) record_type = "VideoObject";
    else if (file.type.startsWith("audio/")) fileType = "AudioObject";
    else if (file.type.startsWith("application/")) record_type = "SoftwareApplication";
    else if (file.type.startsWith("text/")) record_type = "DigitalDocument";
    return record_type;
}
// -----------------------------------------------------
//  Elements
// -----------------------------------------------------
async function $d377c17755cdcb6b$var$getPreviewElementFromFile(file) {
    /**
     * Given a file object, returns an element with preview of the file
     */ let previewContainer = document.createElement("span");
    if (file) {
        const reader = new FileReader(); // Create a FileReader
        const fileType1 = file.type;
        // Image file
        if (fileType1.startsWith("image/")) {
            reader.onload = function(e) {
                const img = document.createElement("img");
                img.src = e.target.result;
                img.style.maxWidth = "300px";
                img.style.maxHeight = "300px";
                previewContainer.appendChild(img);
            };
            reader.readAsDataURL(file);
        } else if (fileType1.startsWith("text/")) {
            reader.onload = function(e) {
                const text = document.createElement("pre");
                text.textContent = e.target.result;
                previewContainer.appendChild(text);
            };
            reader.readAsText(file);
        } else if (fileType1.startsWith("video/")) {
            reader.onload = function(e) {
                const video = document.createElement("video");
                video.src = e.target.result;
                video.controls = true;
                video.style.maxWidth = "300px";
                video.style.maxHeight = "300px";
                previewContainer.appendChild(video);
            };
            reader.readAsDataURL(file);
        } else if (fileType1.startsWith("audio/")) {
            reader.onload = function(e) {
                const audio = document.createElement("audio");
                audio.src = e.target.result;
                audio.controls = true;
                previewContainer.appendChild(audio);
            };
            reader.readAsDataURL(file);
        } else if (fileType1 === "application/pdf") {
            reader.onload = function(e) {
                const object = document.createElement("object");
                object.data = e.target.result;
                object.type = "application/pdf";
                object.style.width = "100%";
                object.style.height = "500px";
                previewContainer.appendChild(object);
            };
            reader.readAsDataURL(file);
        } else previewContainer.textContent = "File type not supported for preview.";
    }
    return previewContainer;
}








const $7043b2674c61d7a1$var$h = {
    null: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10),
    array: (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00),
    isNull: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNull,
    isNotNull: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNotNull,
    toArray: (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00).toArray,
    isArray: (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00).isArray,
    dot: (0, $2cf68f4048a6f85f$export$fe5b3308000496d5),
    number: (0, $44ebc265e2335159$export$96be39e8128f5891),
    json: (0, $409d3194b75b4893$export$94a70d284fcdf065),
    date: (0, $535b3f5b0bcb555a$export$15c85b69ec02b47c)
};
class $7043b2674c61d7a1$export$1dd6e8119d1f29dd {
    constructor(record_type_or_record, record_id){
        this._record = {};
        if (record_type_or_record?.["@type"]) this._record = record_type_or_record;
        else {
            this._record["@type"] = record_type_or_record;
            this._record["@id"] = record_id;
        }
    }
    // -----------------------------------------------------
    //  Core
    // -----------------------------------------------------
    toString() {
        let content = `${headingRecord?._headingDate || ""} ${headingRecord?._heading1} ${headingRecord?._heading2}`;
        return content;
    }
    toJSON() {
        return this.record;
    }
    get json() {
        return JSON.stringify(this.record, null, 4);
    }
    new() {
        let newObject = new Thing_simple();
        newObject.record = this.record;
    }
    clone() {
        let newObject = new Thing_simple();
        newObject.record = this.record;
    }
    // -----------------------------------------------------
    //  Attributes
    // -----------------------------------------------------
    get record() {
        return JSON.parse(JSON.stringify(this._record));
    }
    set record(value) {
        this._record = JSON.parse(JSON.stringify(value));
    }
    get record_type() {
        return this._record?.["@type"];
    }
    set record_type(value) {
        this._record["@type"] = value;
    }
    get record_id() {
        if ($7043b2674c61d7a1$var$h.isNull(this._record?.["@id"])) this._record["@id"], String(crypto.randomUUID());
        return this._record?.["@id"];
    }
    set record_id(value) {
        this._record["@id"] = value;
    }
    // -----------------------------------------------------
    //  Shortcut Attributes
    // -----------------------------------------------------
    get name() {
        return this._record.name;
    }
    set name(value) {
        this._record.name = value;
    }
    get url() {
        return this._record?.url;
    }
    set url(value) {
        this._record.url = value;
    }
}
class $7043b2674c61d7a1$export$2fddb5f9f1c2375e extends $7043b2674c61d7a1$export$1dd6e8119d1f29dd {
    constructor(name, object){
        super("Action");
        this.setActive();
        this._record.error = null;
        this.name = name;
        this.object = object;
    }
    // -----------------------------------------------------
    //  Base
    // -----------------------------------------------------
    toString(indent = 0) {
        let content = `${" ".repeat(indent)}- ${$7043b2674c61d7a1$var$h.date.toString(this.startTime)} o:${$7043b2674c61d7a1$var$h.toArray(this.object).length} i:${$7043b2674c61d7a1$var$h.toArray(this.instrument).length} r:${$7043b2674c61d7a1$var$h.toArray(this.result).length} ${this.status} ${this.name} ${this.error || ""}\n`;
        if ($7043b2674c61d7a1$var$h.isNotNull(this.instrument)) {
            for (let i of $7043b2674c61d7a1$var$h.toArray(this.instrument))if (i?.record_type == "Action") content += i.toString(indent + 4);
        }
        return content;
    }
    new() {
        let newObject = new Action_simple();
        newObject.record = this.record;
    }
    clone() {
        let newObject = new Action_simple();
        newObject.record = this.record;
    }
    lt(other) {
        if ($7043b2674c61d7a1$var$h.isNull(this.endTime) && $7043b2674c61d7a1$var$h.isNull(other.endTime)) return false;
        if ($7043b2674c61d7a1$var$h.isNull(this.endTime) && $7043b2674c61d7a1$var$h.isNotNull(other.endTime)) return false;
        if ($7043b2674c61d7a1$var$h.isNotNull(this.endTime) && $7043b2674c61d7a1$var$h.isNull(other.endTime)) return true;
        if (this.endTime < other.endTime) return true;
        if (this.endTime > other.endTime) return false;
        return false;
    }
    gt(other) {
        if ($7043b2674c61d7a1$var$h.isNull(this.endTime) && $7043b2674c61d7a1$var$h.isNull(other.endTime)) return false;
        if ($7043b2674c61d7a1$var$h.isNull(this.endTime) && $7043b2674c61d7a1$var$h.isNotNull(other.endTime)) return false;
        if ($7043b2674c61d7a1$var$h.isNotNull(this.endTime) && $7043b2674c61d7a1$var$h.isNull(other.endTime)) return true;
        if (this.endTime > other.endTime) return true;
        if (this.endTime < other.endTime) return false;
        return false;
    }
    // -----------------------------------------------------
    //  Action attributes
    // -----------------------------------------------------
    get actionStatus() {
        return this._record?.actionStatus;
    }
    set actionStatus(value) {
        this._record.actionStatus = value;
    }
    get status() {
        let value = this.actionStatus || "";
        if ($7043b2674c61d7a1$var$h.isNotNull(value)) value = value.replace("ActionStatus", "");
        return value;
    }
    get object() {
        return this._record?.object;
    }
    set object(value) {
        this._record.object = $7043b2674c61d7a1$var$h.toArray(this._record.object).concat($7043b2674c61d7a1$var$h.toArray(value));
    }
    get instrument() {
        return this._record?.instrument;
    }
    set instrument(value) {
        this._record.instrument = $7043b2674c61d7a1$var$h.toArray(this._record.instrument).concat($7043b2674c61d7a1$var$h.toArray(value));
    }
    get result() {
        return this._record?.result;
    }
    set result(value) {
        this._record.result = $7043b2674c61d7a1$var$h.toArray(this._record.result).concat($7043b2674c61d7a1$var$h.toArray(value));
    }
    get startTime() {
        return this._record?.startTime;
    }
    set startTime(value) {
        this._record.startTime = value;
    }
    get endTime() {
        return this._record?.endTime;
    }
    set endTime(value) {
        this._record.endTime = value;
    }
    get error() {
        return this._record?.error;
    }
    set error(value) {
        this._record.error = value;
        if ($7043b2674c61d7a1$var$h.isNotNull(value)) {
            this.actionStatus = "FailedActionStatus";
            this.endTime = new Date();
        }
    }
    get duration() {
        return $7043b2674c61d7a1$var$h.date.duration(this.startTime, this.endTime);
    }
    isSuccess() {
        return this.actionStatus == "CompletedActionStatus";
    }
    // -----------------------------------------------------
    //  Action methods
    // -----------------------------------------------------
    setPotential(error) {
        this.actionStatus = "PotentialActionStatus";
        this.error = String(error);
        this.startTime = null;
        this.endTime = null;
    }
    setActive(error) {
        this.actionStatus = "ActiveActionStatus";
        this.error = String(error);
        this.startTime = new Date();
    }
    setCompleted() {
        this.actionStatus = "CompletedActionStatus";
        this.endTime = new Date();
    }
    setFailed(error) {
        this.actionStatus = "FailedActionStatus";
        this.error = String(error);
        this.endTime = new Date();
    }
    close() {
        for (let i of $7043b2674c61d7a1$var$h.toArray(this.instrument))if (i?.actionStatus == "FailedActionStatus") {
            this.setFailed(i.error);
            return;
        }
        this.setCompleted();
    }
    // -----------------------------------------------------
    //  Comment
    // -----------------------------------------------------
    getHumanRecord() {
        let humanRecord = (0, $29b4af06eeffbd86$export$da17952f31714a6e).innerValuesToText(this.record);
        humanRecord.duration = $7043b2674c61d7a1$var$h.date.human.duration(this.startTime, this.endTime);
        return humanRecord;
    }
}
class $7043b2674c61d7a1$export$71a7fdb1c21218ad extends $7043b2674c61d7a1$export$1dd6e8119d1f29dd {
    constructor(file){
        super("DigitalObject");
        this._file = null;
    }
    // -----------------------------------------------------
    //  Base
    // -----------------------------------------------------
    toString() {
        return `${$7043b2674c61d7a1$var$h.date.toText(this.startTime)} ${this.name} ${this.status}`;
    }
    new() {
        let newObject = new Action_simple();
        newObject.record = this.record;
    }
    clone() {
        let newObject = new Action_simple();
        newObject.record = this.record;
    }
    lt(other) {
        if ($7043b2674c61d7a1$var$h.isNull(this.endTime) && $7043b2674c61d7a1$var$h.isNull(other.endTime)) return false;
        if ($7043b2674c61d7a1$var$h.isNull(this.endTime) && $7043b2674c61d7a1$var$h.isNotNull(other.endTime)) return false;
        if ($7043b2674c61d7a1$var$h.isNotNull(this.endTime) && $7043b2674c61d7a1$var$h.isNull(other.endTime)) return true;
        if (this.endTime < other.endTime) return true;
        if (this.endTime > other.endTime) return false;
        return false;
    }
    gt(other) {
        if ($7043b2674c61d7a1$var$h.isNull(this.endTime) && $7043b2674c61d7a1$var$h.isNull(other.endTime)) return false;
        if ($7043b2674c61d7a1$var$h.isNull(this.endTime) && $7043b2674c61d7a1$var$h.isNotNull(other.endTime)) return false;
        if ($7043b2674c61d7a1$var$h.isNotNull(this.endTime) && $7043b2674c61d7a1$var$h.isNull(other.endTime)) return true;
        if (this.endTime > other.endTime) return true;
        if (this.endTime < other.endTime) return false;
        return false;
    }
    // -----------------------------------------------------
    //  File methods
    // -----------------------------------------------------
    get file() {
        return this._file;
    }
    set file(value) {
        this.setFile(value);
    }
    async setFile(value) {
        this._file = value;
        this._record = await (0, $d377c17755cdcb6b$export$4fd911443ac649b8).getRecord(value);
    }
    // -----------------------------------------------------
    //  Comment
    // -----------------------------------------------------
    getHumanRecord() {
        let humanRecord = (0, $29b4af06eeffbd86$export$da17952f31714a6e).innerValuesToText(this.record);
        humanRecord.duration = $7043b2674c61d7a1$var$h.date.human.duration(this.startTime, this.endTime);
        return humanRecord;
    }
}
class $7043b2674c61d7a1$var$KrSimpleCache {
    constructor(){
        this._db = {};
    }
    set(thing) {
        /**
         * Store a thing in cache
         * @param {KrSimpleThing} thing
         * 
         */ let record_type = thing.record_type || thing?.["@type"] || null;
        let record_id = thing.record_id || thing?.["@id"] || null;
        if ($7043b2674c61d7a1$var$h.isNull(record_type) || $7043b2674c61d7a1$var$h.isNull(record_id)) throw new Error("Invalid record type or id");
        this._db[record_type] = this._db?.[record_type] || {};
        this._db[record_type][record_id] = thing;
    }
    get(record_or_record_type, record_id) {
        /**
         * Get a thing from cache
         * @param {KrSimpleThing} record_or_record_type
         * @param {String} record_id
         * 
         */ let record_type = record_or_record_type.record_type || record_or_record_type?.["@type"] || record_or_record_type;
        record_id = record_or_record_type.record_id || record_or_record_type?.["@id"] || record_id;
        if ($7043b2674c61d7a1$var$h.isNull(record_type) || $7043b2674c61d7a1$var$h.isNull(record_id)) throw new Error("Invalid record type or id");
        return this._db?.[record_type]?.[record_id] || null;
    }
    getAll() {
        /**
         * Get all things from cache
         * @param {KrSimpleThing} record_or_record_type
         * @param {String} record_id
         * 
         */ let results = [];
        for(let t in this._db)for(let i in this._db[t])results.push(this._db[t][i]);
        return results;
    }
}
const $7043b2674c61d7a1$export$168f34c82020a71 = {
    Thing: $7043b2674c61d7a1$export$1dd6e8119d1f29dd,
    Action: $7043b2674c61d7a1$export$2fddb5f9f1c2375e,
    File: $7043b2674c61d7a1$export$71a7fdb1c21218ad,
    Cache: $7043b2674c61d7a1$var$KrSimpleCache
};



const $5c03a8201fa97223$var$h = {
    isNull: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNull,
    null: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10)
};
const $5c03a8201fa97223$export$5b644e91f13bb3b0 = {
    /**
     * Local storage helpers
     * Sets things records in local storage
     *
     * 
     */ get: $5c03a8201fa97223$var$getRecord,
    getAll: $5c03a8201fa97223$var$getAllRecords,
    set: $5c03a8201fa97223$var$setRecord
};
function $5c03a8201fa97223$var$getRecord(record_or_record_type, record_id) {
    /**
     * Gets a record from storage
     * @param {Object} record_or_record_type
     * @param {String} record_id
     * @returns {Object} The record
     */ let record_type = record_or_record_type?.["@type"] || record_or_record_type?.record_type || record_or_record_type;
    record_id = record_or_record_type?.["@id"] || record_or_record_type?.record_id || record_id;
    if ($5c03a8201fa97223$var$h.isNull(record_type)) throw new Error("Invalid record type");
    if ($5c03a8201fa97223$var$h.isNull(record_id)) throw new Error("Invalid record id");
    let db = JSON.parse(localStorage.getItem("things"));
    return db?.[record_type]?.[record_id] || null;
}
function $5c03a8201fa97223$var$getAllRecords() {
    /**
     * Gets records from storage
     * @param {Object} record_or_record_type
     * @param {String} record_id
     * @returns {Object} The record
     */ let db = JSON.parse(localStorage.getItem("things"));
    let records = [];
    for(let record_type in db)for(let record_id in db[record_type])records.push(db[record_type][record_id]);
    return records;
}
function $5c03a8201fa97223$var$setRecord(record) {
    /**
     * Sets a record in storage
     * @param {Object} record
     * @returns {Object} The record
     */ let db = JSON.parse(localStorage.getItem("things"));
    db = db || {};
    let record_type = record?.["@type"] || record?.record_type || null;
    let record_id = record?.["@id"] || record?.record_id || null;
    if ($5c03a8201fa97223$var$h.isNull(record_type)) return false;
    if ($5c03a8201fa97223$var$h.isNull(record_id)) return false;
    db[record_type] = db?.[record_type] || {};
    db[record_type][record_id] = record;
    localStorage.setItem("things", JSON.stringify(db));
    return true;
}





const $9133dd066da6fc7c$export$efeacd8e2fafd6a1 = {
    isValid: $9133dd066da6fc7c$var$isValid,
    toString: $9133dd066da6fc7c$var$toString,
    toCamelCase: $9133dd066da6fc7c$var$toCamelCase,
    fromCamelCase: $9133dd066da6fc7c$var$fromCamelCase,
    capitalize: $9133dd066da6fc7c$var$capitalizeWords,
    clean: $9133dd066da6fc7c$var$cleanString
};
function $9133dd066da6fc7c$var$isValid(str) {
    /**
     * Checks if a string is valid
     * @param {String} str
     * @returns {Boolean}
     * 
     */ if (typeof str == "string") return true;
    return false;
}
function $9133dd066da6fc7c$var$toString(value) {
    /**
     * Converts a value to a string
     * @param {Object} value
     * @returns {String}
     */ if ((0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNull(value)) return "";
    try {
        return value.toString();
    } catch  {
        return String(value);
    }
}
function $9133dd066da6fc7c$var$cleanString(str) {
    /**
     * Clean up string by removing spaces and non standard charcters
     * @param {String} str
     * @returns {String}
     */ let string = str;
    // Remove html codes
    string = string.replace(/<\/?[^>]+(>|$)/g, "");
    // Remove next lines
    string = string.replace("\n", "");
    // remove spaces
    string = string.trim();
    return string;
}
function $9133dd066da6fc7c$var$toCamelCase(str) {
    /**
     * Converts a string to camel case
     * @param {String} str
     * @returns {String}
     */ return str// Split the string by spaces, underscores, or hyphens
    .split(/[-_\s]+/)// Convert the first word to lowercase and capitalize the first letter of the following words
    .map((word, index)=>index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())// Join them back into a single string
    .join("");
}
function $9133dd066da6fc7c$var$fromCamelCase(str) {
    /**
     * Converts a string from camel case
     * @param {String} str
     * @returns {String}
     */ return str// Insert a space before every uppercase letter and convert the whole string to lowercase
    .replace(/([A-Z])/g, " $1").toLowerCase().trim();
}
function $9133dd066da6fc7c$var$capitalizeWords(input) {
    /**
     * Capitalize the first letter of each word in a string
     * @param {String} input
     * @returns {String}
     */ // Error checking: input should be a string
    if (typeof input !== "string") return input;
    try {
        // Split the string into an array of words, capitalize the first letter of each word, then join them back into a single string
        return input.split(" ").map((word)=>{
            if (word.length > 0) return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            return word; // Handles cases where there might be multiple spaces
        }).join(" ");
    } catch (error) {
        return input;
    }
} // -----------------------------------------------------
 //  Comment 
 // -----------------------------------------------------




const $91ff8b8350f98bed$var$h = {
    null: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10),
    isNull: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNull,
    isNotNull: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNotNull,
    analysis: (0, $8e7de55ecf14d868$export$35d3dd03f0194c3a)
};
const $91ff8b8350f98bed$export$d6addebc9e19c4be = {
    get: $91ff8b8350f98bed$var$getOperations,
    getOperations: $91ff8b8350f98bed$var$getOperations,
    execute: $91ff8b8350f98bed$var$executeOperations
};
function $91ff8b8350f98bed$var$executeOperations(records, operations) {
    /**
     * Executes the operations on the records
     * @param {Array} records
     * @param {Array} operations
     * @returns {Array|Object|str} The records
     * 
     */ // Error handling
    if ($91ff8b8350f98bed$var$h.isNull(records)) return null;
    if ($91ff8b8350f98bed$var$h.isNull(operations)) return records;
    if (typeof operations == "string") operations = $91ff8b8350f98bed$var$getOperations(operations);
    let values = records;
    for (let o of operations)values = $91ff8b8350f98bed$var$executeOperation(values, o);
    return values;
}
function $91ff8b8350f98bed$var$executeOperation(records, operation) {
    /**
     * Executes the operation on the records
     * @param {Object} record
     * @param {Object} operation
     * @returns {Object|str} The record
     */ // Error handling
    if ($91ff8b8350f98bed$var$h.isNull(records)) return null;
    if ($91ff8b8350f98bed$var$h.isNull(operation)) return records;
    if ($91ff8b8350f98bed$var$h.isNull(operation.operator)) return $91ff8b8350f98bed$var$h.analysis.getValues(records, operation?.propertyID);
    if (operation.operator == "filter") return $91ff8b8350f98bed$var$h.analysis.filter(records, operation?.config);
    if (operation.operator == "sumProduct") return $91ff8b8350f98bed$var$h.analysis.sumProduct(records, operation.propertyID?.[0], operation.propertyID?.[1]);
    if (operation.operator == "n") return $91ff8b8350f98bed$var$h.analysis.n(records, operation.propertyID);
    if (operation.operator == "sum") return $91ff8b8350f98bed$var$h.analysis.sum(records, operation.propertyID);
    if (operation.operator == "min") return $91ff8b8350f98bed$var$h.analysis.min(records, operation.propertyID);
    if (operation.operator == "max") return $91ff8b8350f98bed$var$h.analysis.max(records, operation.propertyID);
    if (operation.operator == "avg") return $91ff8b8350f98bed$var$h.analysis.avg(records, operation.propertyID);
    if (operation.operator == "first") return $91ff8b8350f98bed$var$h.analysis.first(records, operation.propertyID);
    if (operation.operator == "last") return $91ff8b8350f98bed$var$h.analysis.last(records, operation.propertyID);
    if (operation.operator == "stdev") return $91ff8b8350f98bed$var$h.analysis.stdev(records, operation.propertyID);
    if (operation.operator == "transpose") return $91ff8b8350f98bed$var$h.analysis.transpose(records, operation.propertyID);
    if (operation.operator == "with") return $91ff8b8350f98bed$var$h.analysis.getValues(records, operation.propertyID);
    return records;
}
function $91ff8b8350f98bed$var$getOperations(str) {
    /**
     * return all operations from a string
     * @param {String} str
     * @returns {Array}
     * 
     */ let parts = $91ff8b8350f98bed$var$_getOperationParts(str);
    let records = [];
    for(let i = 0; i < parts.length; i++)records.push($91ff8b8350f98bed$var$getOperationRecord(parts[i], i));
    // return records
    return records;
}
function $91ff8b8350f98bed$var$getOperationRecord(part, no) {
    /**
     * return the record associated with an operation
     * @param {String} part
     * @returns {Object}
     */ let record = {
        "no": no,
        "propertyID": $91ff8b8350f98bed$var$_getOperationPropertyID(part),
        "operator": $91ff8b8350f98bed$var$_getOperationOperator(part),
        "config": $91ff8b8350f98bed$var$_getOperationConfig(part)
    };
    return record;
}
function $91ff8b8350f98bed$var$_getOperationConfig(part) {
    /**
     * Gets the operation config
     * @param {String} part The part
     * @returns {Object} The operation config
     * 
     */ // Error handling
    if ($91ff8b8350f98bed$var$h.isNull(part)) return [];
    if (typeof part != "string") return [];
    // If no command, assumes entire thing is propertyID
    if (!part.includes(":")) return null;
    let configStr = part.split(":")?.[1] || null;
    // if contains ==, assume it is not command
    if ($91ff8b8350f98bed$var$h.isNotNull(configStr) && !configStr.includes("=")) return null;
    // Split the config string by ','
    let configParts = [];
    if ($91ff8b8350f98bed$var$h.isNotNull(configStr)) configParts = configStr.split(",");
    // Build config record 
    let configRecord = {};
    for (let c of configParts){
        let config = c.split("=");
        let configKey = $91ff8b8350f98bed$var$_cleanString(config?.[0]);
        let configValue = $91ff8b8350f98bed$var$_cleanString(config?.[1]);
        if ($91ff8b8350f98bed$var$h.isNull(configKey) || $91ff8b8350f98bed$var$h.isNull(configValue)) continue;
        configRecord[configKey] = configValue;
    }
    return configRecord;
}
function $91ff8b8350f98bed$var$_getOperationPropertyID(part) {
    /**
     * Gets the propertyID from a part
     * @param {Object} part The part
     * @returns {String} The propertyID
     *
     * returns an array of propertyIDs of commas present
     */ // Error handling
    if ($91ff8b8350f98bed$var$h.isNull(part)) return [];
    if (typeof part != "string") return [];
    // If no command, assumes entire thing is propertyID
    let propertyID;
    if (!part.includes(":")) propertyID = part;
    else propertyID = part.split(":")?.[1] || null;
    // if contains =, assume it is not poropertyID
    if ($91ff8b8350f98bed$var$h.isNotNull(propertyID) && propertyID.includes("=")) return null;
    propertyID = $91ff8b8350f98bed$var$_cleanString(propertyID);
    // Check if commas 
    if ($91ff8b8350f98bed$var$h.isNotNull(propertyID) && propertyID.includes(",")) {
        propertyID = propertyID.split(",");
        propertyID = propertyID.map((x)=>$91ff8b8350f98bed$var$_cleanString(x));
    }
    return propertyID;
}
function $91ff8b8350f98bed$var$_getOperationOperator(part) {
    /**
     * Returns the command part of an operation
     * @param {Object} part The part of the operation
     * @returns {String} The command
     */ // Error handling
    if ($91ff8b8350f98bed$var$h.isNull(part)) return [];
    if (typeof part != "string") return [];
    if (!part.includes(":")) return null;
    //
    let operator = part.split(":")?.[0] || null;
    operator = $91ff8b8350f98bed$var$_cleanString(operator);
    return operator;
}
function $91ff8b8350f98bed$var$_getOperationParts(str) {
    /**
     * Gets the parts of a string that are operators (between | )
     * @param {String} str
     * @returns {Array}
     * 
     */ // Error handling
    if ($91ff8b8350f98bed$var$h.isNull(str)) return [];
    if (typeof str != "string") return [];
    // Get the parts
    let parts = str.split("|");
    return parts;
}
function $91ff8b8350f98bed$var$_cleanString(str) {
    /**
     * Cleans a string
     * @param {String} str
     * @returns {String}
     * 
     */ // Error handling
    if ($91ff8b8350f98bed$var$h.isNull(str)) return null;
    try {
        str = str.trim();
    } catch (error) {
        return null;
    }
    return str;
}





const $60acc9b7f6444d63$var$h = {
    isNull: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNull,
    null: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10)
};
const $60acc9b7f6444d63$export$6a650295aabcd627 = {
    get: $60acc9b7f6444d63$var$getTag
};
function $60acc9b7f6444d63$var$getTag(str) {
    /**
     * Returns first top level tag
     * @param {String} str
     * @returns {Object}
     * 
     * 
     */ str = $60acc9b7f6444d63$var$prepareTemplate(str);
    return $60acc9b7f6444d63$var$getIterationTag(str) || $60acc9b7f6444d63$var$getPlaceholderTag(str) || null;
}
function $60acc9b7f6444d63$var$getIterationTag(template) {
    /**
     * Retrieve iteration tags ({{#xxx}} ... {/xxx}} ) from string
     */ if ($60acc9b7f6444d63$var$h.isNull(template)) return null;
    if (!template.includes("{{#")) return null;
    if (!template.includes("{{/")) return null;
    let result = {
        "content": {
            "before": "",
            "between": "",
            "after": ""
        },
        "type": null,
        "value": null
    };
    // Find first opening tag
    let tagStartPositionStart = template.indexOf("{{#");
    let tagStartPositionEnd = template.indexOf("}}", tagStartPositionStart);
    // Iterate through opening and closing tags to find related closing tag
    let lastPositionStart = tagStartPositionEnd;
    let nextOpeningPositionStart;
    let nextOpeningPositionEnd;
    let tagEndPositionStart;
    let tagEndPositionEnd;
    let openingTags = 1;
    while(openingTags > 0){
        nextOpeningPositionStart = template.indexOf("{{#", lastPositionStart);
        nextOpeningPositionEnd = template.indexOf("}}", nextOpeningPositionStart);
        tagEndPositionStart = template.indexOf("{{/", lastPositionStart);
        tagEndPositionEnd = template.indexOf("}}", tagEndPositionStart);
        // Case: No closing tags
        if (tagEndPositionStart == -1) return null;
        else // Case: no more opening tags
        if (nextOpeningPositionStart == -1) {
            openingTags = openingTags - 1;
            lastPositionStart = tagEndPositionEnd;
        } else // Case: closing tag before next opening tag
        if (tagEndPositionStart < nextOpeningPositionStart) {
            openingTags = openingTags - 1;
            lastPositionStart = tagEndPositionEnd;
        } else // Case: opening tag before next closing tag
        if (tagEndPositionStart > nextOpeningPositionStart) {
            openingTags = openingTags + 1;
            lastPositionStart = nextOpeningPositionEnd;
        }
    }
    // 
    // Find matching closing tag
    //let tagEndPositionStart = template.indexOf('{{/', tagStartPositionEnd)
    //let tagEndPositionEnd = template.indexOf('}}', tagEndPositionStart)
    if (tagStartPositionStart == -1 || tagStartPositionEnd == -1 || tagEndPositionStart == -1 || tagEndPositionEnd == -1) return null;
    result.value = template.slice(tagStartPositionStart + 3, tagStartPositionEnd);
    result.content.before = template.slice(0, tagStartPositionStart);
    result.content.after = template.slice(tagEndPositionEnd + 2);
    result.content.between = template.slice(tagStartPositionEnd + 2, tagEndPositionStart - 1);
    result.type = "iterator";
    return result;
}
function $60acc9b7f6444d63$var$getPlaceholderTag(template) {
    /**
     * Retrieves tags ({{ xxx }} ) from within string
     * 
     */ if ($60acc9b7f6444d63$var$h.isNull(template)) return null;
    if (!template.includes("{{")) return null;
    if (!template.includes("}}")) return null;
    let result = {
        "content": {
            "before": "",
            "between": "",
            "after": ""
        },
        "type": null,
        "value": null
    };
    let tagPositionStart = template.lastIndexOf("{{");
    let tagPositionEnd = template.indexOf("}}", tagPositionStart);
    if (tagPositionStart == -1 || tagPositionEnd == -1) return null;
    result.content.before = template.slice(0, tagPositionStart);
    result.content.after = template.slice(tagPositionEnd + 2);
    result.content.between = null;
    result.value = template.slice(tagPositionStart + 2, tagPositionEnd);
    result.type = "value";
    return result;
}
function $60acc9b7f6444d63$var$prepareTemplate(template) {
    while(template.includes("{{ "))template = template.replaceAll("{{ ", "{{");
    while(template.includes(" }}"))template = template.replaceAll(" }}", "}}");
    while(template.includes("{{# "))template = template.replaceAll("{{# ", "{{#");
    while(template.includes("{{/ "))template = template.replaceAll("{{/ ", "{{/");
    return template;
}









const $a762e458f5ffc61b$var$h = {
    null: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10),
    array: (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00),
    object: (0, $e787032c49c8ddee$export$42f247ccf9267abd),
    isNull: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNull,
    isNotNull: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNotNull,
    toArray: (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00).toArray,
    isArray: (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00).isArray,
    dot: (0, $2cf68f4048a6f85f$export$fe5b3308000496d5),
    number: (0, $44ebc265e2335159$export$96be39e8128f5891),
    json: (0, $409d3194b75b4893$export$94a70d284fcdf065),
    stringOperation: (0, $91ff8b8350f98bed$export$d6addebc9e19c4be)
};
const $a762e458f5ffc61b$export$cc74e2e6d445aa47 = {
    get: $a762e458f5ffc61b$var$renderTemplate,
    replacePlaceholders: $a762e458f5ffc61b$var$renderTemplate,
    render: $a762e458f5ffc61b$var$renderTemplate
};
function $a762e458f5ffc61b$var$renderTemplate(template, record) {
    template = $a762e458f5ffc61b$var$prepareTemplate(template);
    let renderedTemplate1 = $a762e458f5ffc61b$var$_renderTemplate(template, record);
    return renderedTemplate1;
}
function $a762e458f5ffc61b$var$_renderTemplate(template, record, depth = 0) {
    /**
     * beforeContent: the content before the opening tag
     * afterContent: the content after the closing tag
     * templateContent: the content in between the tags
     * valueContent: the content replacing the templateContent with actual values
     */ let content = template;
    let values = record;
    // Handle iterations
    let tag = $a762e458f5ffc61b$var$getIterationTag(content);
    while($a762e458f5ffc61b$var$h.isNotNull(tag)){
        let valueContent = "";
        //let values = h.dot.get(tag.propertyID, record)
        //let propertyID = tag.contentTag.split('|')
        //values = h.analysis.runOperations(record, tag.contentTag )
        let propertyID = $a762e458f5ffc61b$var$h.stringOperation.get(tag.contentTag)?.[0]?.propertyID || null;
        values = $a762e458f5ffc61b$var$h.stringOperation.execute(record, tag.contentTag);
        // If record has many values, iterate through each ones
        for (let value of $a762e458f5ffc61b$var$h.toArray(values)){
            let tempRecord = JSON.parse(JSON.stringify(record));
            if ($a762e458f5ffc61b$var$h.isNotNull(propertyID)) $a762e458f5ffc61b$var$h.dot.set(tempRecord, propertyID, value);
            else tempRecord = value;
            //h.dot.set(tempRecord, propertyID, value)
            valueContent += $a762e458f5ffc61b$var$_renderTemplate(tag.contentWithin, tempRecord, depth += 1);
        }
        content = String(tag.contentBefore) + String(valueContent) + String(tag.contentAfter);
        tag = $a762e458f5ffc61b$var$getIterationTag(content);
    }
    // Handle placeholders 
    tag = $a762e458f5ffc61b$var$getPlaceholderTag(content);
    while($a762e458f5ffc61b$var$h.isNotNull(tag)){
        let value = $a762e458f5ffc61b$var$h.stringOperation.execute(record, tag.contentTag);
        if ($a762e458f5ffc61b$var$h.isNull(value)) value = "";
        // Convert to json if array or object
        if ($a762e458f5ffc61b$var$h.isArray(value) || $a762e458f5ffc61b$var$h.object.isValid(value)) value = JSON.stringify(value);
        content = String(tag.contentBefore) + String(value) + String(tag.contentAfter);
        tag = $a762e458f5ffc61b$var$getPlaceholderTag(content);
    }
    return content;
}
function $a762e458f5ffc61b$var$prepareTemplate(template) {
    if ($a762e458f5ffc61b$var$h.isNull(template)) return "";
    while(template.includes("{{ "))template = template.replaceAll("{{ ", "{{");
    while(template.includes(" }}"))template = template.replaceAll(" }}", "}}");
    return template;
}
function $a762e458f5ffc61b$var$getIterationTag(template) {
    /**
     * Retrieve iteration tags ({{#xxx}} ... {/xxx}} ) from string
     */ if ($a762e458f5ffc61b$var$h.isNull(template)) return null;
    if (!template.includes("{{#")) return null;
    if (!template.includes("{{/")) return null;
    let result = {
        "type": "iteration",
        "contentBefore": "",
        "contentWithin": "",
        "contentAfter": "",
        "contentTag": ""
    };
    // Find first opening tag
    let tagStartPositionStart = template.indexOf("{{#");
    let tagStartPositionEnd = template.indexOf("}}", tagStartPositionStart);
    // Iterate through opening and closing tags to find related closing tag
    let lastPositionStart = tagStartPositionEnd;
    let nextOpeningPositionStart;
    let nextOpeningPositionEnd;
    let tagEndPositionStart;
    let tagEndPositionEnd;
    let openingTags = 1;
    while(openingTags > 0){
        nextOpeningPositionStart = template.indexOf("{{#", lastPositionStart);
        nextOpeningPositionEnd = template.indexOf("}}", nextOpeningPositionStart);
        tagEndPositionStart = template.indexOf("{{/", lastPositionStart);
        tagEndPositionEnd = template.indexOf("}}", tagEndPositionStart);
        // Case: No closing tags
        if (tagEndPositionStart == -1) return null;
        else // Case: no more opening tags
        if (nextOpeningPositionStart == -1) {
            openingTags = openingTags - 1;
            lastPositionStart = tagEndPositionEnd;
        } else // Case: closing tag before next opening tag
        if (tagEndPositionStart < nextOpeningPositionStart) {
            openingTags = openingTags - 1;
            lastPositionStart = tagEndPositionEnd;
        } else // Case: opening tag before next closing tag
        if (tagEndPositionStart > nextOpeningPositionStart) {
            openingTags = openingTags + 1;
            lastPositionStart = nextOpeningPositionEnd;
        }
    }
    // 
    // Find matching closing tag
    //let tagEndPositionStart = template.indexOf('{{/', tagStartPositionEnd)
    //let tagEndPositionEnd = template.indexOf('}}', tagEndPositionStart)
    if (tagStartPositionStart == -1 || tagStartPositionEnd == -1 || tagEndPositionStart == -1 || tagEndPositionEnd == -1) return null;
    result.contentTag = template.slice(tagStartPositionStart + 3, tagStartPositionEnd);
    result.contentBefore = template.slice(0, tagStartPositionStart);
    result.contentAfter = template.slice(tagEndPositionEnd + 2);
    result.contentWithin = template.slice(tagStartPositionEnd + 2, tagEndPositionStart - 1);
    return result;
}
function $a762e458f5ffc61b$var$getPlaceholderTag(template) {
    /**
     * Retrieves tags ({{ xxx }} ) from within string
     * 
     */ if ($a762e458f5ffc61b$var$h.isNull(template)) return null;
    if (!template.includes("{{")) return null;
    if (!template.includes("}}")) return null;
    let result = {
        "type": "placeholder",
        "propertyID": null,
        "contentBefore": "",
        "contentTag": "",
        "contentAfter": "",
        "commandName": null,
        "commandPropertyID": null
    };
    let tagPositionStart = template.lastIndexOf("{{");
    let tagPositionEnd = template.indexOf("}}", tagPositionStart);
    if (tagPositionStart == -1 || tagPositionEnd == -1) return null;
    result.contentTag = template.slice(tagPositionStart + 2, tagPositionEnd);
    result.contentBefore = template.slice(0, tagPositionStart);
    result.contentAfter = template.slice(tagPositionEnd + 2);
    return result;
}


const $5f18a9d192f60010$export$dc6226f18ea4e006 = {
    getThing: $5f18a9d192f60010$var$getThing,
    getListItem: $5f18a9d192f60010$var$getListItem,
    getItemList: $5f18a9d192f60010$var$getItemList,
    getList: $5f18a9d192f60010$var$getItemList,
    getPerson: $5f18a9d192f60010$var$getPerson,
    getOrganization: $5f18a9d192f60010$var$getOrganization,
    getAction: $5f18a9d192f60010$var$getAction,
    getSystemRecord: $5f18a9d192f60010$var$getSystemRecord,
    getPropertyValue: $5f18a9d192f60010$var$getPropertyValue,
    action: $5f18a9d192f60010$var$getAction,
    article: $5f18a9d192f60010$var$getArticle,
    creativeWork: $5f18a9d192f60010$var$creativeWork,
    howTo: $5f18a9d192f60010$var$howTo,
    itemList: $5f18a9d192f60010$var$getItemList,
    list: $5f18a9d192f60010$var$getItemList,
    listItem: $5f18a9d192f60010$var$getListItem,
    offer: $5f18a9d192f60010$var$offer,
    offerCatalog: $5f18a9d192f60010$var$offerCatalog,
    organization: $5f18a9d192f60010$var$getOrganization,
    person: $5f18a9d192f60010$var$getPerson,
    potentialAction: $5f18a9d192f60010$var$potentialAction,
    product: $5f18a9d192f60010$var$product,
    propertyValue: $5f18a9d192f60010$var$getPropertyValue,
    thing: $5f18a9d192f60010$var$getThing
};
function $5f18a9d192f60010$var$creativeWork(n) {
    return {
        "@type": "CreativeWork",
        "@id": "CreativeWork_" + String(n),
        headline: "Headline - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        text: "Text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: {
            "@context": "https://schema.org/",
            "@type": "ImageObject",
            "@id": "image1",
            name: "image_1",
            contentUrl: "https://placehold.co/600x400"
        },
        potentialAction: [
            {
                "@type": "action",
                "@id": "action_1",
                name: "action_1_name",
                url: "#"
            }
        ]
    };
}
function $5f18a9d192f60010$var$offer(n = 0) {
    return {
        "@type": "Offer",
        "@id": "Offer_" + String(n),
        additionalProperty: [
            {
                "@type": "Propertyvalue",
                "@id": "PropertyValue_1_" + String(n),
                "propertyID": "PropertyValue_1",
                "value": "Additional offer property 1_" + String(n)
            },
            {
                "@type": "Propertyvalue",
                "@id": "PropertyValue_2_" + String(n),
                "propertyID": "PropertyValue_2",
                "value": "Additional offer property 2_" + String(n)
            },
            {
                "@type": "Propertyvalue",
                "@id": "PropertyValue_3_" + String(n),
                "propertyID": "PropertyValue_3",
                "value": "Additional offer property 3_" + String(n)
            },
            {
                "@type": "Propertyvalue",
                "@id": "PropertyValue_4_" + String(n),
                "propertyID": "PropertyValue_4",
                "value": "Additional offer property 4_" + String(n)
            }
        ],
        name: "Offer_per_month_" + String(n),
        itemOffered: {
            "@type": "Service",
            "@id": "Service_" + String(n),
            name: "Service_" + String(n)
        },
        offeredBy: {
            "@type": "Organization",
            "@id": "organization_" + String(n),
            name: "organization_" + String(n)
        },
        priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "25",
            priceCurrency: "USD",
            referenceQuantity: {
                "@type": "QuantitativeValue",
                value: "1",
                unitCode: "MON"
            }
        },
        potentialAction: [
            {
                "@type": "Action",
                "@id": "action_1_" + String(n),
                "name": "Buy now",
                "url": "https://www.test.com"
            }
        ]
    };
}
function $5f18a9d192f60010$var$offerCatalog(no = 3, n = 0) {
    let record = {
        "@type": "OfferCatalog",
        "@id": "OfferCatalog_" + String(n),
        "name": "OfferCatalog_" + String(n),
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        itemListElement: []
    };
    for(let i = 0; i < no; i++){
        let item = {
            "@type": "ListItem",
            "@id": "ListItem_" + String(n) + "_" + String(i),
            item: $5f18a9d192f60010$var$offer(i)
        };
        record.itemListElement.push(item);
    }
    return record;
}
function $5f18a9d192f60010$var$howTo(n) {
    return {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "HowTo name - Lorem ipsum dolor sit amet.",
        headline: "Headline - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        text: "Text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        estimatedCost: {
            "@type": "MonetaryAmount",
            currency: "USD",
            value: "20"
        },
        totalTime: "PT30M",
        tool: [
            {
                "@type": "HowToTool",
                name: "Tool 1"
            },
            {
                "@type": "HowToTool",
                name: "Tool 2",
                image: {
                    "@context": "https://schema.org/",
                    "@type": "ImageObject",
                    "@id": "image1",
                    name: "image_1",
                    contentUrl: "https://placehold.co/600x400"
                }
            }
        ],
        supply: {
            "@type": "HowToSupply",
            name: "Supply1",
            image: {
                "@context": "https://schema.org/",
                "@type": "ImageObject",
                "@id": "image1",
                name: "image_1",
                contentUrl: "https://placehold.co/600x400"
            }
        },
        step: [
            {
                "@type": "HowToStep",
                position: "1",
                headline: "Headline - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                text: "Text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
                image: {
                    "@context": "https://schema.org/",
                    "@type": "ImageObject",
                    "@id": "image1",
                    name: "image_1",
                    contentUrl: "https://placehold.co/600x400"
                },
                itemListElement: [
                    {
                        "@type": "HowToDirection",
                        position: "1",
                        text: "Position your wheel wedges in front of the front tires if a rear tire is flat, or behind the rear tires if a front tire is flat"
                    },
                    {
                        "@type": "HowToTip",
                        position: "2",
                        text: "You don't want the car to move while you're working on it."
                    }
                ]
            },
            {
                "@type": "HowToStep",
                position: "2",
                headline: "Headline - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                text: "Text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
                image: {
                    "@context": "https://schema.org/",
                    "@type": "ImageObject",
                    "@id": "image1",
                    name: "image_1",
                    contentUrl: "https://placehold.co/600x400"
                },
                itemListElement: [
                    {
                        "@type": "HowToDirection",
                        position: "1",
                        text: "Position your wheel wedges in front of the front tires if a rear tire is flat, or behind the rear tires if a front tire is flat"
                    },
                    {
                        "@type": "HowToTip",
                        position: "2",
                        text: "You don't want the car to move while you're working on it."
                    }
                ]
            },
            {
                "@type": "HowToStep",
                position: "3",
                headline: "Headline - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                text: "Text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
                image: {
                    "@context": "https://schema.org/",
                    "@type": "ImageObject",
                    "@id": "image1",
                    name: "image_1",
                    contentUrl: "https://placehold.co/600x400"
                },
                itemListElement: [
                    {
                        "@type": "HowToDirection",
                        position: "1",
                        text: "Position your wheel wedges in front of the front tires if a rear tire is flat, or behind the rear tires if a front tire is flat"
                    },
                    {
                        "@type": "HowToTip",
                        position: "2",
                        text: "You don't want the car to move while you're working on it."
                    }
                ]
            },
            {
                "@type": "HowToStep",
                position: "4",
                headline: "Headline - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                text: "Text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
                image: {
                    "@context": "https://schema.org/",
                    "@type": "ImageObject",
                    "@id": "image1",
                    name: "image_1",
                    contentUrl: "https://placehold.co/600x400"
                },
                itemListElement: [
                    {
                        "@type": "HowToDirection",
                        position: "1",
                        text: "Position your wheel wedges in front of the front tires if a rear tire is flat, or behind the rear tires if a front tire is flat"
                    },
                    {
                        "@type": "HowToTip",
                        position: "2",
                        text: "You don't want the car to move while you're working on it."
                    }
                ]
            },
            {
                "@type": "HowToStep",
                position: "5",
                headline: "Headline - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                text: "Text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
                image: {
                    "@context": "https://schema.org/",
                    "@type": "ImageObject",
                    "@id": "image1",
                    name: "image_1",
                    contentUrl: "https://placehold.co/600x400"
                },
                itemListElement: [
                    {
                        "@type": "HowToDirection",
                        position: "1",
                        text: "Position your wheel wedges in front of the front tires if a rear tire is flat, or behind the rear tires if a front tire is flat"
                    },
                    {
                        "@type": "HowToTip",
                        position: "2",
                        text: "You don't want the car to move while you're working on it."
                    }
                ]
            }
        ]
    };
}
function $5f18a9d192f60010$var$getThing(n) {
    let n0 = String(n);
    let record = {
        "@type": "Thing",
        "@id": `thing${n0}`,
        name: `thing${n0}`,
        other1: {
            "@type": "Thing",
            "@id": `thing${n0}-0`,
            name: `thing${n0}-0`
        },
        other2: [
            {
                "@type": "Thing",
                "@id": `thing${n0}-1`,
                name: `thing${n0}-1`
            },
            {
                "@type": "Thing",
                "@id": `thing${n0}-2`,
                name: `thing${n0}-2`
            }
        ]
    };
    return record;
}
function $5f18a9d192f60010$var$getItemList(noItems, n = 0) {
    /**
     * Returns a list of n items
     * @param {Number} n
     * @returns {Array} The list
     *
     */ let n0 = String(n);
    let record = {
        "@type": "ItemList",
        "@id": `ItemList${n}`,
        name: `ItemList${n}`,
        itemListElement: []
    };
    for(let i = 0; i < noItems; i++){
        let listItem = $5f18a9d192f60010$var$getListItem(i);
        if (n > 0) listItem.previousItem = {
            "@type": "ListItem",
            "@id": `ListItem${String(n - 1)}`
        };
        if (i < noItems - 1) listItem.nextItem = {
            "@type": "ListItem",
            "@id": `ListItem${String(n + 1)}`
        };
        record.itemListElement.push(listItem);
    }
    return record;
}
function $5f18a9d192f60010$var$getListItem(n = 0) {
    /**
     * Returns an item
     * @param {Number} n
     * @returns {Array} The list
     *
     */ let n0 = String(n);
    let record = {
        "@type": "ListItem",
        "@id": `ListItem${n0}`,
        name: `ListItem${n0}`,
        position: n,
        item: $5f18a9d192f60010$var$getThing(n)
    };
    return record;
}
function $5f18a9d192f60010$var$getPerson(n = 0) {
    let n0 = String(n);
    let record = {
        "@type": "Person",
        "@id": `person${n0}`,
        givenName: `givenName${n0}`,
        familyName: `familyName${n0}`,
        email: `givenName${n0}_familyName${n0}@organization${n0}.com`,
        telephone: `1-514-111-222${n0}`,
        hasOccupation: {
            "@type": "Occupation",
            "@id": `occupation${n0}`,
            name: `occupation${n0}`
        },
        worksfor: $5f18a9d192f60010$var$getOrganization(n)
    };
    return record;
}
function $5f18a9d192f60010$var$getOrganization(n) {
    let n0 = String(n);
    let record = {
        "@type": "Organization",
        "@id": `testOrganization${n0}`,
        name: `testOrganization${n0}`,
        url: `https:\/\/www.testOrganization${n0}.com`
    };
    return record;
}
function $5f18a9d192f60010$var$getAction(n) {
    let n0 = String(n);
    let record = {
        "@type": "action",
        "@id": `action${n0}`,
        name: `action${n0}`,
        actionStatus: "ActiveActionStatus",
        startTime: "",
        endTime: "",
        object: "",
        result: "",
        instrument: ""
    };
    return record;
}
function $5f18a9d192f60010$var$getSystemRecord() {
    let record = {
        "@type": "Thing",
        "@id": "thing1",
        _id: "567e0725-a4b7-4a15-a5e5-39a2751bc09f",
        _version: "2.0",
        _dbCollection: null,
        _dbId: null,
        _record_type: "Thing",
        _record_id: "thing1",
        _headings: [],
        _refs: [],
        _propertyValues: [
            {
                "@type": "ReplaceAction",
                "@id": "67120ec1-89ce-4644-ba45-e5f534cf2570",
                actionStatus: "CompletedActionStatus",
                valid: true,
                object: {
                    "@type": "PropertyValue",
                    propertyID: "@type",
                    value: "Thing"
                },
                metadata: {
                    createdDate: new Date(),
                    position: 5
                }
            },
            {
                "@type": "ReplaceAction",
                "@id": "8a363b93-46ac-4fe1-a4ed-c74b9fa890cc",
                actionStatus: "CompletedActionStatus",
                valid: true,
                object: {
                    "@type": "PropertyValue",
                    propertyID: "@id",
                    value: "thing1"
                },
                metadata: {
                    createdDate: new Date(),
                    position: 7
                }
            },
            {
                "@type": "ReplaceAction",
                "@id": "71c07e54-506d-49d2-a273-6d6a9e8ed1bd",
                actionStatus: "CompletedActionStatus",
                valid: true,
                object: {
                    "@type": "PropertyValue",
                    propertyID: "name",
                    value: "thing1"
                },
                metadata: {
                    createdDate: new Date(),
                    position: 9
                }
            }
        ],
        _createdDate: new Date(),
        name: "thing1"
    };
    return record;
}
function $5f18a9d192f60010$var$getPropertyValue(propertyID, value) {
    /**
     * Returns a property value
     */ let record = {
        "@type": "ReplaceAction",
        "@id": `propertyValue${propertyID}`,
        actionStatus: "CompletedActionStatus",
        valid: true,
        object: {
            "@type": "PropertyValue",
            "@id": `pv_${propertyID}_1`,
            propertyID: propertyID,
            value: `${value}`
        },
        metadata: {
            createdDate: new Date(),
            position: 9
        }
    };
    return record;
}
function $5f18a9d192f60010$var$getArticle(n) {
    return {
        "@type": "CreativeWork",
        "@id": "Article1",
        headline: "Headline 1",
        author: {
            "@type": "Person",
            "@id": "person_1",
            givenName: "givenName_1",
            familyName: "familyName_1",
            email: "test@test.com",
            telephone: "1-514-111-2222",
            jobTitle: "Job_title_1",
            hasOccupation: {
                "@type": "Occupation",
                "@id": "occupation_1",
                name: "occupation_1"
            },
            worksfor: {
                "@type": "Organization",
                "@id": "organization_1",
                name: "test_org_1",
                url: "https://www.test.com"
            }
        },
        image: {
            "@context": "https://schema.org/",
            "@type": "ImageObject",
            "@id": "image1",
            name: "image_1",
            contentUrl: "https://placehold.co/600x400"
        },
        text: "Text 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        hasPart: [
            {
                "@type": "CreativeWork",
                "@id": "SubArticle1",
                headline: "Sub headline 1",
                text: "text 1-1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            {
                "@type": "CreativeWork",
                "@id": "SubArticle2",
                headline: "Sub headline 2",
                text: "text 1-2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        ]
    };
}
function $5f18a9d192f60010$var$product(n) {
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "3.5",
            reviewCount: "11"
        },
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        name: "Product name 1",
        image: {
            "@context": "https://schema.org/",
            "@type": "ImageObject",
            "@id": "image1",
            name: "image_1",
            contentUrl: "https://placehold.co/600x400"
        },
        offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            price: "55.00",
            priceCurrency: "USD"
        },
        positiveNotes: [
            {
                "@type": "ListItem",
                "@id": "positiveNote0",
                position: 0,
                item: {
                    "@type": "CreativeWork",
                    "@id": "positiveNote0Item",
                    headline: "Positive note 1",
                    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: {
                        "@context": "https://schema.org/",
                        "@type": "ImageObject",
                        "@id": "image0",
                        name: "image_0",
                        contentUrl: "https://placehold.co/600x400"
                    }
                }
            },
            {
                "@type": "ListItem",
                "@id": "positiveNote1",
                position: 1,
                item: {
                    "@type": "CreativeWork",
                    "@id": "positiveNote1Item",
                    headline: "Positive note 1",
                    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: {
                        "@context": "https://schema.org/",
                        "@type": "ImageObject",
                        "@id": "image1",
                        name: "image_1",
                        contentUrl: "https://placehold.co/600x400"
                    }
                }
            },
            {
                "@type": "ListItem",
                "@id": "positiveNote2",
                position: 2,
                item: {
                    "@type": "CreativeWork",
                    "@id": "positiveNote2Item",
                    headline: "Positive note 3",
                    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: {
                        "@context": "https://schema.org/",
                        "@type": "ImageObject",
                        "@id": "image2",
                        name: "image_2",
                        contentUrl: "https://placehold.co/600x400"
                    }
                }
            },
            {
                "@type": "ListItem",
                "@id": "positiveNote3",
                position: 3,
                item: {
                    "@type": "CreativeWork",
                    "@id": "positiveNote3Item",
                    headline: "Positive note 3",
                    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: {
                        "@context": "https://schema.org/",
                        "@type": "ImageObject",
                        "@id": "image3",
                        name: "image_3",
                        contentUrl: "https://placehold.co/600x400"
                    }
                }
            }
        ]
    };
}
function $5f18a9d192f60010$var$potentialAction(n = 0) {
    return {
        "@type": "Action",
        "@id": "action_" + String(n),
        "name": "action_" + String(n),
        "description": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "actionStatus": "PotentialActionStatus",
        "name_input": {
            "@type": "PropertyValueSpecification",
            "valueName": "name"
        },
        "email_input": {
            "@type": "PropertyValueSpecification",
            "valueName": "email"
        },
        "approval_input": {
            "@type": "PropertyValueSpecification",
            "valueName": "approval",
            "description": "By clicking on this, you agree to give your first born child.",
            "minValue": 0,
            "maxValue": 1,
            "required": "true"
        }
    };
}








const $cdf51dc5a05f8897$var$h = {
    null: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10),
    array: (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00),
    isNull: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNull,
    isNotNull: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNotNull,
    toArray: (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00).toArray,
    isArray: (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00).isArray,
    dot: (0, $2cf68f4048a6f85f$export$fe5b3308000496d5),
    number: (0, $44ebc265e2335159$export$96be39e8128f5891),
    json: (0, $409d3194b75b4893$export$94a70d284fcdf065),
    object: (0, $e787032c49c8ddee$export$42f247ccf9267abd)
};
//import { krakenValueHelpers as v} from '../localization/krakenValueHelpers.js'
let $cdf51dc5a05f8897$var$MAX_WIDTH = 30;
function $cdf51dc5a05f8897$export$7642ec6da7b10b(records, keys, headers) {
    let content = "";
    // Duplicate records
    records = JSON.parse(JSON.stringify(records));
    // Build keys from records keys if missing
    if ($cdf51dc5a05f8897$var$h.isNull(keys)) keys = $cdf51dc5a05f8897$var$h.array.getKeys(records);
    // If record, convert properties to array
    if ($cdf51dc5a05f8897$var$h.array.isArray(records) == false) {
        if ($cdf51dc5a05f8897$var$h.object.isObject(records) == true) {
            let values = [];
            let keys = Object.keys(records);
            for (let k of keys){
                let v = records[k];
                v.propertyID = k;
                values.push(v);
            }
            records = values;
        }
    }
    // Build headers from keys if missing
    if ($cdf51dc5a05f8897$var$h.isNull(headers)) headers = keys;
    // Build new record with only selected keys and values
    let newRecords = [];
    for (let r of records){
        let newRecord = {};
        keys.map((k)=>newRecord[k] = $cdf51dc5a05f8897$var$h.dot.get(k, r));
        newRecords.push(newRecord);
    }
    records = newRecords;
    // Convert values
    //records = v.innerValuesToText(records)
    // Get max length for each keys
    let keysLength = {};
    let totalLength = 0;
    for(let i = 0; i < keys.length; i++){
        let key = keys[i];
        let header = headers[i];
        //let values = h.array.getValuesForKey(records, key)
        let values = records.map((x)=>x?.[key] || "");
        keysLength[key] = header.length;
        for (let v of values){
            let l = v.length;
            if (l > keysLength[key]) keysLength[key] = l;
        }
        totalLength += keysLength[key] + 2;
    }
    // Build table header
    // Top bar line
    content += `${"".padEnd(totalLength, "-")}`;
    content += "\n";
    // Headings
    for(let i = 0; i < keys.length; i++){
        let key = keys[i];
        let header = headers[i];
        content += `${header.padEnd(keysLength[key] + 2, " ")}`;
    }
    content += "\n";
    for (let key of keys)content += `${"".padEnd(keysLength[key] + 2, "-")}`;
    content += "\n";
    // Build table rows
    for (let record of records){
        for (let key of keys){
            let c = String(record?.[key] || "");
            if (c.length > $cdf51dc5a05f8897$var$MAX_WIDTH) c = c.slice(0, $cdf51dc5a05f8897$var$MAX_WIDTH - 3) + "... ";
            c = c.padEnd(keysLength[key] + 2, " ");
            content += `${c}`;
        }
        content += "\n";
    }
    content += `${"".padEnd(totalLength, "-")}`;
    content += "\n";
    return content;
}



const $1a629a767d5efe2d$var$h = {
    isNull: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNull,
    isNotNull: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNotNull,
    null: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10)
};
const $1a629a767d5efe2d$export$bf6c5252d3a48e2b = {
    /**
     * uri template helpers
     * Convert to from uri template
     *
     * 
     */ uriToPvs: $1a629a767d5efe2d$var$convertUriTemplateToSchema,
    pvsToUri: $1a629a767d5efe2d$var$convertSchemaToUriTemplate
};
function $1a629a767d5efe2d$var$convertSchemaToUriTemplate(record) {
    /**
     * Convert a schema to a uri template
     * 
     */ let items = [];
    let keys = Object.keys(record);
    for (let key of keys){
        let value = record[key];
        let item;
        switch(key){
            case "valueRequired":
                if (value == true) item = `required`;
                break;
            case "defaultValue":
                item = `default=${value}`;
                break;
            case "valueName":
                item = `name=${value}`;
                break;
            case "readonlyValue":
                item = `readonly=${value}`;
                break;
            case "multipleValues":
                item = `multiple=${value}`;
                break;
            case "valueMinLength":
                item = `minlength=${value}`;
                break;
            case "valueMaxLength":
                item = `maxlength=${value}`;
                break;
            case "valuePattern":
                item = `pattern=${value}`;
                break;
            case "minValue":
                item = `min=${value}`;
                break;
            case "maxValue":
                item = `max=${value}`;
                break;
            case "stepValue":
                item = `step=${value}`;
                break;
            default:
                break;
        }
        if (item) items.push(item);
    }
    // Filter empty items
    items = items.filter((x)=>x && x != null);
    // Combine items
    let uriTemplate = items.join(" ");
    return uriTemplate;
}
function $1a629a767d5efe2d$var$convertUriTemplateToSchema(uriTemplate) {
    /**
     * Converts a uri template to a schema property value specific ation
     * {
            "@type": "PropertyValueSpecification",
            "@id": "86719a5e-c87d-4d69-8920-47e7f59c3ea8",
            "defaultValue": null,
            "readonlyValue": null,
            "valueRequired": true,
            "multipleValues": false,
            "minValue": null,
            "maxValue": null,
            "valueMinLength": null,
            "valueMaxLength": null,
            "valuePattern": null,
            "stepValue": null,
            "valueName": null,
        }
        

     */ if (typeof uriTemplate !== "string") throw new TypeError("uriTemplate must be a string");
    // Extract placeholders from the URI template
    let items = uriTemplate.split(" ");
    let pvs = {
        "@type": "PropertyValueSpecification"
    };
    for (let item of items){
        let key = item.split("=")?.[0] || null;
        key = key.trim();
        key = key.toLowerCase();
        let value = item.split("=")?.[1] || null;
        value = value || "";
        value = value.trim();
        switch(key){
            case "required":
                value = Boolean(value || true);
                pvs.valueRequired = value;
                break;
            case "default":
                value = Boolean(value);
                pvs.defaultValue = value;
                break;
            case "name":
                value = value.replaceAll('"', "");
                value = value.replaceAll("'", "");
                pvs.valueName = value;
                break;
            case "readonly":
                value = Boolean(value);
                pvs.readonlyValue = value;
                break;
            case "multiple":
                value = Boolean(value);
                pvs.multipleValues = value;
                break;
            case "minlength":
                value = value.replaceAll('"', "");
                value = value.replaceAll("'", "");
                value = Number(value);
                pvs.valueMinLength = value;
                break;
            case "maxlength":
                value = value.replaceAll('"', "");
                value = value.replaceAll("'", "");
                value = Number(value);
                pvs.valueMaxLength = value;
                break;
            case "valuePattern":
                value = value.replaceAll('"', "");
                value = value.replaceAll("'", "");
                pvs.valuePattern = value;
                break;
            case "min":
                value = value.replaceAll('"', "");
                value = value.replaceAll("'", "");
                value = Number(value);
                pvs.minValue = value;
                break;
            case "max":
                value = value.replaceAll('"', "");
                value = value.replaceAll("'", "");
                value = Number(value);
                pvs.maxValue = value;
                break;
            case "step":
                value = value.replaceAll('"', "");
                value = value.replaceAll("'", "");
                value = Number(value);
                pvs.stepValue = value;
                break;
            default:
                break;
        }
    }
    // Assign entire content as default value if no value is set
    if (Object.keys(pvs).length <= 1) pvs.defaultValue = uriTemplate;
    // Return the PVS
    return pvs;
}



const $c105aeb290c96594$export$b881b526c33ee854 = {
    isValid: $c105aeb290c96594$var$isValid,
    toString: $c105aeb290c96594$var$toString,
    getDomain: $c105aeb290c96594$var$getDomain,
    domain: $c105aeb290c96594$var$getDomain,
    getUrl: $c105aeb290c96594$var$getUrl,
    toUrl: $c105aeb290c96594$var$getUrl
};
function $c105aeb290c96594$var$isValid(value) {
    /**
     * Checks if a value is a valid url
     * @param {String} value
     * @returns {Boolean}
     */ if (!value || value == null) return false;
    if (value instanceof URL) return true;
    return (0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNotNull($c105aeb290c96594$var$getUrl(value));
}
function $c105aeb290c96594$var$toString(url) {
    /**
     * Returns the url as a string
     * @param {String} url
     * @returns {String}
     */ if ($c105aeb290c96594$var$isValid(url)) return String(url);
    return null;
}
function $c105aeb290c96594$var$getUrl(baseUrl, path, params) {
    /**
     * Returns a url
     * @param {String} baseUrl
     * @param {String} path
     * @param {Object} params
     */ // Returns url string
    try {
        if (!baseUrl || typeof baseUrl !== "string") throw new Error("Invalid base URL");
        if (!path) path = "";
        if (typeof path !== "string") throw new Error("Invalid path");
        if (params && typeof params !== "object") throw new Error("Invalid params");
        let url = new URL(path, baseUrl);
        if (params) Object.keys(params).forEach((key)=>{
            if (params[key] !== undefined && params[key] !== null) url.searchParams.append(key, params[key]);
        });
        return url.toString();
    } catch (error) {
        //console.error('Error building URL:', error.message);
        return undefined;
    }
}
function $c105aeb290c96594$var$getDomain(value) {
    /**
     * Returns the domain of a url
     * @param {String} value
     * @returns {String}
     * 
     */ try {
        if (!value || value == null) return undefined;
        if (!(value instanceof URL)) {
            if (typeof value != "string") return undefined;
            value = new URL(value);
        }
        let domain = value.hostname;
        domain = domain.replace("www.", "");
        if (domain == "wrong.protocol") return undefined;
        // Use URL constructor to parse the URL
        return domain;
    } catch (error) {
        // If an error occurs, return an appropriate error message
        return undefined;
    }
}



const $6098d21b5dc1ee14$export$4f5a3571c6e0d8ae = {
    add: $6098d21b5dc1ee14$var$addStyle
};
function $6098d21b5dc1ee14$var$addStyle(content) {
    /**
     * Add style to document
     * @param {string} content
     * @returns {void}
     */ var styleSheet = document.createElement("style");
    styleSheet.textContent = content;
    document.head.appendChild(styleSheet);
}


const $2fa9c1db583d4d31$export$439bf78a2cc516f5 = {
    analysis: (0, $8e7de55ecf14d868$export$35d3dd03f0194c3a),
    array: (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00),
    classes: (0, $7043b2674c61d7a1$export$168f34c82020a71),
    color: (0, $b5f9b848b00b349e$export$b4c3eca70a61f421),
    date: (0, $535b3f5b0bcb555a$export$15c85b69ec02b47c),
    dot: (0, $2cf68f4048a6f85f$export$fe5b3308000496d5),
    element: {
        style: (0, $6098d21b5dc1ee14$export$4f5a3571c6e0d8ae)
    },
    email: (0, $72ab74e9bdfc8a51$export$bac8020bbb4f7950),
    hash: (0, $650a87c2d2146f16$export$c43cb89937ee8d5c),
    heading: (0, $2969a9bd2c7ad243$export$2e72560dcbb9783c),
    json: (0, $409d3194b75b4893$export$94a70d284fcdf065),
    null: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10),
    number: (0, $44ebc265e2335159$export$96be39e8128f5891),
    object: (0, $e787032c49c8ddee$export$42f247ccf9267abd),
    regex: (0, $448dba5b2b5f8b84$export$7fbed440f12ae0cb),
    storage: (0, $5c03a8201fa97223$export$5b644e91f13bb3b0),
    string: (0, $9133dd066da6fc7c$export$efeacd8e2fafd6a1),
    stringOperation: (0, $91ff8b8350f98bed$export$d6addebc9e19c4be),
    tag: (0, $60acc9b7f6444d63$export$6a650295aabcd627),
    template: (0, $a762e458f5ffc61b$export$cc74e2e6d445aa47),
    test: (0, $5f18a9d192f60010$export$dc6226f18ea4e006),
    textTable: (0, $cdf51dc5a05f8897$export$7642ec6da7b10b),
    thing: (0, $5e269851126f2bb1$export$b28abe9e4076f605),
    uri: (0, $1a629a767d5efe2d$export$bf6c5252d3a48e2b),
    url: (0, $c105aeb290c96594$export$b881b526c33ee854),
    uuid: (0, $a7df578a06d5a361$export$9694b2d66de56464),
    // Shortcuts
    isNull: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNull,
    isNotNull: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNotNull,
    isEqual: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isEqual,
    isNotEqual: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNotEqual,
    toArray: (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00).toArray,
    isArray: (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00).isValid,
    isObject: (0, $e787032c49c8ddee$export$42f247ccf9267abd).isValid,
    isDate: (0, $535b3f5b0bcb555a$export$15c85b69ec02b47c).isValid,
    toDate: (0, $535b3f5b0bcb555a$export$15c85b69ec02b47c).toDate,
    isNumber: (0, $44ebc265e2335159$export$96be39e8128f5891).isValid,
    wait: $2fa9c1db583d4d31$var$wait
};
function $2fa9c1db583d4d31$var$wait(seconds) {
    return new Promise((resolve)=>setTimeout(resolve, seconds * 1000));
}



/**
 *
 * classes:
 *     - krThing: thing
 *     - krProperty: property
 *     - krValue: value
 *     - 
 */ // Classes constants
let $c8b0dc629c726d48$var$thingClass = "krThing";
let $c8b0dc629c726d48$var$propertyClass = "krProperty";
let $c8b0dc629c726d48$var$valueClass = "krValue";
const $c8b0dc629c726d48$export$e0169ab077dc0819 = {
    /**
     * current: returns the element that composes the current record
     * parent: returns element parent of 
     */ isValid: $c8b0dc629c726d48$var$isValid,
    toString: $c8b0dc629c726d48$var$toString,
    record_type: $c8b0dc629c726d48$var$getRecordType,
    record_id: $c8b0dc629c726d48$var$getRecordId,
    ref: $c8b0dc629c726d48$var$getRef,
    recordType: $c8b0dc629c726d48$var$getRecordType,
    recordId: $c8b0dc629c726d48$var$getRecordId,
    type: $c8b0dc629c726d48$var$getRecordType,
    id: $c8b0dc629c726d48$var$getRecordId,
    getId: $c8b0dc629c726d48$var$getIdOfElement,
    setId: $c8b0dc629c726d48$var$setIdToElement,
    meetsConditions: $c8b0dc629c726d48$var$meetsConditions,
    insert: {
        above: $c8b0dc629c726d48$var$insertElementAbove,
        below: $c8b0dc629c726d48$var$insertElementBelow
    },
    remove: $c8b0dc629c726d48$var$removeElement,
    content: {
        get: $c8b0dc629c726d48$var$getContentOfElement,
        set: $c8b0dc629c726d48$var$setContentOfElement
    },
    active: {
        set: $c8b0dc629c726d48$var$setActive,
        unset: $c8b0dc629c726d48$var$unsetActive,
        toggle: $c8b0dc629c726d48$var$toggleActive
    },
    selected: {
        get: $c8b0dc629c726d48$var$getSelectedElement,
        set: $c8b0dc629c726d48$var$setSelectedElement,
        unset: $c8b0dc629c726d48$var$unsetSelectedElement,
        toggle: $c8b0dc629c726d48$var$toggleSelectedElement
    },
    dragging: {
        get: $c8b0dc629c726d48$var$getDraggingElement,
        set: $c8b0dc629c726d48$var$setDraggingElement,
        unset: $c8b0dc629c726d48$var$unsetDraggingElement,
        toggle: $c8b0dc629c726d48$var$toggleDraggingElement
    },
    class: {
        get: $c8b0dc629c726d48$var$getClassElement,
        set: $c8b0dc629c726d48$var$setClassElement,
        unset: $c8b0dc629c726d48$var$unsetClassElement,
        toggle: $c8b0dc629c726d48$var$toggleClassElement
    },
    traversal: {
        commonParent: $c8b0dc629c726d48$var$findCommonParentOfElements
    },
    // Array
    filter: $c8b0dc629c726d48$var$filter
};
// -----------------------------------------------------
//  Generic 
// -----------------------------------------------------
function $c8b0dc629c726d48$var$isValid(element) {
    /**
     * Returns true if element is valid
     * @param {Object} element
     * @returns {Boolean}
     */ if (element && element.nodeType) return true;
    return false;
}
function $c8b0dc629c726d48$var$toString(element) {
    return `${getI(element)} ${getRcordId(element)}`;
}
function $c8b0dc629c726d48$var$getIdOfElement(element) {
    /**
     * Returns the id of the element
     * @param {Object} element
     * @returns {String}
     */ return element?.id || null;
}
function $c8b0dc629c726d48$var$setIdToElement(element, id) {
    /**
     * Sets the id of the element
     * @param {Object} element
     * @param {String} id Uses uuid if null
     */ if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return null;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(element.getAttribute("id"))) return;
    let newID = "element_" + (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).uuid.new();
    element.setAttribute("id", newID);
}
function $c8b0dc629c726d48$var$getRecordType(element) {
    /**
     * Returns the record type of the element
     * @param {Object} element
     * @returns {String} The record type
     */ let record_type = element.getAttribute("data-record-type");
    return record_type;
}
function $c8b0dc629c726d48$var$getRecordId(element) {
    let record_id = element.getAttribute("data-record-id");
    return record_id;
}
function $c8b0dc629c726d48$var$getRef(element) {
    /**
     * Returns the ref of the element
     * @param {Object} element
     * @returns {String} The ref
     * 
     */ let ref = {
        "@type": $c8b0dc629c726d48$var$getRecordType(element),
        "@id": $c8b0dc629c726d48$var$getRecordId(element)
    };
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(ref?.["@type"]) || (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(ref?.["@id"])) return ref;
    return null;
}
// -----------------------------------------------------
//  Operations (insert, delete) 
// -----------------------------------------------------
function $c8b0dc629c726d48$var$insertElementBelow(newElement, parent) {
    /**
     * Inserts a new element between a parent and its chldren
     * @param {Object} newElement to insert
     * @param {Object} parent
     * @returns {Object} The new element
     */ while(parent.firstElementChild)newElement.appendChild(parent.firstElementChild);
    parent.appendChild(newElement);
    return newElement;
}
function $c8b0dc629c726d48$var$insertElementAbove(newElement, children) {
    /**
     * Inserts a new element between an element and its parent
     * @param {Object} newElement to insert
     * @param {Object} children
     * @returns {Object} The new element
     */ children.after(newElement);
    newElement.appendChild(children);
    //parent.appendChild(newElement)
    return newElement;
}
function $c8b0dc629c726d48$var$removeElement(element) {
    /**
     * Removes an element
     * @param {Object} element
     * @returns {Object} The new element
     * 
     */ if (!$c8b0dc629c726d48$var$isValid(element)) return false;
    element.remove();
    return;
}
// -----------------------------------------------------
//  Element content 
// -----------------------------------------------------
function $c8b0dc629c726d48$var$getContentOfElement(element) {
    /**
     * Returns the content of the element
     * @param {Object} element
     * @returns {String} The content
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return null;
    // Get content
    let content = element.innerHTML;
    return content;
}
function $c8b0dc629c726d48$var$setContentOfElement(element, content) {
    /**
     * Sets the content of an element
     * @param {Object} element
     * @param {Element|String} content to set (element or string))
     * @returns {Object} The element
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return null;
    // 
    if (typeof content == "string") element.innerHTML = content;
    if (Array.isArray(content)) {
        for (let c of content)$c8b0dc629c726d48$var$setContentOfElement(element, c);
        return;
    }
    if (content instanceof HTMLElement) element.appendChild(content);
    return element;
}
// -----------------------------------------------------
//  Comparisons 
// -----------------------------------------------------
function $c8b0dc629c726d48$var$meetsConditions(element, conditions) {
    /**
     * Returns true if an element attributes meets conditions.
     * @param {Object} element
     * @param {Object} conditions
     * @returns {Boolean}
     */ if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(conditions)) return true;
    for (let key of Object.keys(conditions))// If key is class
    if (key.startsWith(".")) {
        if (!element.classList.contains(conditions[key])) return false;
    } else {
        // If key is attribute
        if (element.getAttribute(key) != conditions[key]) return false;
    }
    return true;
}
// -----------------------------------------------------
//  DOM Traversal 
// -----------------------------------------------------
function $c8b0dc629c726d48$var$findCommonParentOfElements(elements, conditions) {
    /**
     * Returns the common parent of different elements
     * @param {Array} elements
     * @returns {Object} The common parent
     */ if (!elements || elements.length === 0) return null;
    // Helper function to get all parents of an element
    function getParents(element) {
        let parents = [];
        while(element){
            parents.push(element);
            element = element.parentElement;
        }
        return parents;
    }
    // Get the list of parents for the first element
    let commonParents = getParents(elements[0]);
    // Traverse the list of elements and keep finding common parents
    for(let i = 1; i < elements.length; i++){
        const elementParents = getParents(elements[i]);
        // Update commonParents to be only those in both lists
        commonParents = commonParents.filter((parent)=>elementParents.includes(parent));
        // If no common parent is found, return null
        if (commonParents.length === 0) return null;
    }
    // Return the first common parent, which is the closest common ancestor
    return commonParents[0];
}
// -----------------------------------------------------
//  Active 
// -----------------------------------------------------
function $c8b0dc629c726d48$var$getActive(element, conditions) {
    /**
     * Returns elements with 'krActive' class under element.
     * Uses document if element is missing
     * @param {Object} element
     * @param {Object} conditions needing to be met (optional))
     * @returns {Array} The active elements
     */ element = element || document;
    let activeElements = element.querySelectorAll(".krActive");
    activeElements = activeElements.filter((x)=>$c8b0dc629c726d48$var$meetsConditions(x, conditions));
    return activeElements;
}
function $c8b0dc629c726d48$var$setActive(element, conditions) {
    /**
     * Sets 'krActive' class to elements with 'krActive' class under element.
     * @param {Object} element
     * @param {Object} conditions needing to be met (optional))
     * @returns {Object|Array} The elements
     */ let e = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(element);
    e = e.filter((x)=>$c8b0dc629c726d48$var$meetsConditions(x, conditions));
    e.map((x)=>x.classList.add("krActive"));
    return element;
}
function $c8b0dc629c726d48$var$unsetActive(element, conditions) {
    /**
     * Unset the 'krActive' class on element
     * @param {Object} element
     * @param {Object} conditions needing to be met (optional))
     * @returns {Object|Array} The elements
     */ let e = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(element);
    e = e.filter((x)=>$c8b0dc629c726d48$var$meetsConditions(x, conditions));
    e.map((x)=>x.classList.remove("krActive"));
    return element;
}
function $c8b0dc629c726d48$var$toggleActive(element, conditions) {
    /**
     * Toggles the 'krActive' class on element
     * @param {Object} element
     * @param {Object} conditions needing to be met (optional))
     * @returns {Object|Array} The elements
     */ let e = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(element);
    e = e.filter((x)=>$c8b0dc629c726d48$var$meetsConditions(x, conditions));
    e.map((x)=>x.classList.toggle("krActive"));
    return element;
}
// -----------------------------------------------------
//  Selected 
// -----------------------------------------------------
function $c8b0dc629c726d48$var$getSelectedElement(element, conditions) {
    /**
     * Returns elements with 'krSelected' class under element.
     * Uses document if element is missing
     * @param {Object} element
     * @param {Object} conditions needing to be met (optional))
     * @returns {Array} The selected elements
     */ element = element || document;
    let selectedElements = element.querySelectorAll(".krSelected");
    selectedElements = selectedElements.filter((x)=>$c8b0dc629c726d48$var$meetsConditions(x, conditions));
    return selectedElements;
}
function $c8b0dc629c726d48$var$setSelectedElement(element, conditions) {
    /**
     * Sets the 'krSelected' class on element
     * @param {Object} element
     * @param {Object} conditions needing to be met (optional))
     * @returns {Object|Array} The selected elements
     */ let e = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(element);
    e = e.filter((x)=>$c8b0dc629c726d48$var$meetsConditions(x, conditions));
    e.map((x)=>x.classList.add("krSelected"));
    return element;
}
function $c8b0dc629c726d48$var$unsetSelectedElement(element, conditions) {
    /**
     * Unset the 'krSelected' class on element
     * @param {Object} element
     * @param {Object} conditions needing to be met (optional))
     * @returns {Object|Array} The selected elements
     */ let e = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(element);
    e = e.filter((x)=>$c8b0dc629c726d48$var$meetsConditions(x, conditions));
    e.map((x)=>x.classList.remove("krSelected"));
    return element;
}
function $c8b0dc629c726d48$var$toggleSelectedElement(element, conditions) {
    /**
     * Toggles the 'krSelected' class on element
     * @param {Object} element
     * @param {Object} conditions needing to be met (optional))
     * @returns {Object|Array} The selected elements
     */ let e = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(element);
    e = e.filter((x)=>$c8b0dc629c726d48$var$meetsConditions(x, conditions));
    e.map((x)=>x.classList.toggle("krSelected"));
    return element;
}
// -----------------------------------------------------
//  Dragging 
// -----------------------------------------------------
function $c8b0dc629c726d48$var$getDraggingElement(element, conditions) {
    /**
     * Returns elements with 'krDragging' class under element.
     * Uses document if element is missing
     * @param {Object} element
     * @param {Object} conditions needing to be met (optional))
     * @returns {Array} The active elements
     */ element = element || document;
    let activeElements = element.querySelectorAll(".krDragging");
    activeElements = activeElements.filter((x)=>$c8b0dc629c726d48$var$meetsConditions(x, conditions));
    return activeElements;
}
function $c8b0dc629c726d48$var$setDraggingElement(element, conditions) {
    /**
     * Sets 'krDragging' class to elements with 'krDragging' class under element.
     * @param {Object} element
     * @param {Object} conditions needing to be met (optional))
     * @returns {Object|Array} The elements
     */ let e = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(element);
    e = e.filter((x)=>$c8b0dc629c726d48$var$meetsConditions(x, conditions));
    e.map((x)=>x.classList.add("krDragging"));
    return element;
}
function $c8b0dc629c726d48$var$unsetDraggingElement(element, conditions) {
    /**
     * Unset the 'krDragging' class on element
     * @param {Object} element
     * @param {Object} conditions needing to be met (optional))
     * @returns {Object|Array} The elements
     */ let e = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(element);
    e = e.filter((x)=>$c8b0dc629c726d48$var$meetsConditions(x, conditions));
    e.map((x)=>x.classList.remove("krDragging"));
    return element;
}
function $c8b0dc629c726d48$var$toggleDraggingElement(element, conditions) {
    /**
     * Toggles the 'krDragging' class on element
     * @param {Object} element
     * @param {Object} conditions needing to be met (optional))
     * @returns {Object|Array} The elements
     */ let e = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(element);
    e = e.filter((x)=>$c8b0dc629c726d48$var$meetsConditions(x, conditions));
    e.map((x)=>x.classList.toggle("krDragging"));
    return element;
}
// -----------------------------------------------------
//  Class 
// -----------------------------------------------------
function $c8b0dc629c726d48$var$getClassElement(element, className, conditions) {
    /**
     * Returns elements with 'krDragging' class under element.
     * Uses document if element is missing
     * @param {Object} element
     * @param {Object} conditions needing to be met (optional))
     * @returns {Array} The active elements
     */ element = element || document;
    let activeElements = element.querySelectorAll("." + className);
    activeElements = activeElements.filter((x)=>$c8b0dc629c726d48$var$meetsConditions(x, conditions));
    return activeElements;
}
function $c8b0dc629c726d48$var$setClassElement(element, className, conditions) {
    /**
     * Sets 'className' class to elements with 'className' class under element.
     * @param {Object} element
     * @param {Object} conditions needing to be met (optional))
     * @returns {Object|Array} The elements
     */ let e = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(element);
    e = e.filter((x)=>$c8b0dc629c726d48$var$meetsConditions(x, conditions));
    e.map((x)=>x.classList.add(className));
    return element;
}
function $c8b0dc629c726d48$var$unsetClassElement(element, className, conditions) {
    /**
     * Unset the 'krDragging' class on element
     * @param {Object} element
     * @param {Object} conditions needing to be met (optional))
     * @returns {Object|Array} The elements
     */ let e = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(element);
    e = e.filter((x)=>$c8b0dc629c726d48$var$meetsConditions(x, conditions));
    e.map((x)=>x.classList.remove(className));
    return element;
}
function $c8b0dc629c726d48$var$toggleClassElement(element, className, conditions) {
    /**
     * Toggles the 'krDragging' class on element
     * @param {Object} element
     * @param {Object} conditions needing to be met (optional))
     * @returns {Object|Array} The elements
     */ let e = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(element);
    e = e.filter((x)=>$c8b0dc629c726d48$var$meetsConditions(x, conditions));
    e.map((x)=>x.classList.toggle(className));
    return element;
}
// -----------------------------------------------------
//  Array 
// -----------------------------------------------------
function $c8b0dc629c726d48$var$filter(elements, conditions) {
    /**
     * Filters an array of elements
     * @param {Array} elements
     * @param {Object} conditions
     * @returns {Array} The filtered array
     */ let e = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(elements);
    e = e.filter((x)=>$c8b0dc629c726d48$var$meetsConditions(x, conditions));
    return e;
}




const $2adfa4e445ef1d89$export$631b1a0163af1868 = {
    dragDrop: {
        setDraggable: $2adfa4e445ef1d89$var$setDragDropDraggableElement,
        setDropzone: $2adfa4e445ef1d89$var$setDragDropDropzoneElement
    },
    dragDropReordering: {
        setDraggable: $2adfa4e445ef1d89$var$setDragDropDraggableReorderingElement,
        setDropzone: $2adfa4e445ef1d89$var$setDragDropDropzoneReorderingElement
    },
    generic: {
        setDraggable: $2adfa4e445ef1d89$var$setDraggableGenericElement,
        setDropzone: $2adfa4e445ef1d89$var$setDropzoneGenericElement
    },
    click: {
        set: $2adfa4e445ef1d89$var$setClickableElement
    }
};
// -----------------------------------------------------
//  Register events 
// -----------------------------------------------------
// -----------------------------------------------------
//  Drag drop reordering
// -----------------------------------------------------
function $2adfa4e445ef1d89$var$setDragDropDraggableReorderingElement(element, elementHandle, callbackFn, params) {
    // If no handle provided, considers entire element is draggable
    console.log(elementHandle);
    elementHandle = elementHandle || element;
    //elementHandle.draggable = true;
    elementHandle.addEventListener("mousedown", (event)=>{
        //event.preventDefault();
        //event.stopPropagation();
        element.draggable = true;
        console.log("mousedown");
    });
    elementHandle.addEventListener("mouseup", (event)=>{
        //event.preventDefault();
        //event.stopPropagation();
        element.draggable = false;
    });
    element.addEventListener("dragstart", (event)=>{
        //event.preventDefault();
        event.stopPropagation();
        event.dataTransfer.setData("text/plain", element.id);
        element.style.opacity = "0.4";
    });
    element.addEventListener("dragend", (event)=>{
        //event.preventDefault();
        event.stopPropagation();
        event.dataTransfer.setData("text/plain", element.id);
        element.style.opacity = "1";
        element.draggable = false;
    });
}
function $2adfa4e445ef1d89$var$setDragDropDropzoneReorderingElement(element, callbackFn, params) {
    element.addEventListener("dragover", (event)=>{
        event.preventDefault();
    //event.stopPropagation();
    });
    element.addEventListener("dragenter", (event)=>{
        event.preventDefault();
        //event.stopPropagation();
        event.currentTarget.classList.add("dragover");
    });
    element.addEventListener("dragleave", (event)=>{
        event.preventDefault();
        //event.stopPropagation();
        event.currentTarget.classList.remove("dragover");
    });
    element.addEventListener("drop", (event)=>{
        event.preventDefault();
        event.stopPropagation();
        let draggedElementID = event.dataTransfer.getData("text/plain");
        let dropzoneElementID = event.currentTarget?.id;
        let draggedElement = document.getElementById(draggedElementID);
        let dropzoneElement = event.currentTarget;
        // Move dragged element before dropzone
        dropzoneElement.before(draggedElement);
        let action = new (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).classes.Action("Dragdrop - drop");
        action.object = {
            "@type": "WebPageElement",
            "@id": draggedElementID,
            name: "Draggable element"
        };
        action.instrument = {
            "@type": "WebPageElement",
            "@id": dropzoneElementID,
            name: "Dropzone element"
        };
        action.setCompleted();
        if (callbackFn) callbackFn(action, params);
        // Remove all dragover
        for (let e of document.querySelectorAll(".dragover"))e.classList.remove("dragover");
    });
}
// -----------------------------------------------------
//  Drag drop
// -----------------------------------------------------
function $2adfa4e445ef1d89$var$setDragDropDraggableElement(element, callbackFn, params) {
    element.draggable = true;
    element.addEventListener("dragstart", (event)=>{
        event.dataTransfer.setData("text/plain", element.id);
    });
}
function $2adfa4e445ef1d89$var$setDragDropDropzoneElement(element, callbackFn, params) {
    element.addEventListener("dragover", (event)=>{
        event.preventDefault();
        event.stopPropagation();
    });
    element.addEventListener("drop", (event)=>{
        event.preventDefault();
        event.stopPropagation();
        let draggedElementID = event.dataTransfer.getData("text/plain");
        let dropzoneElementID = event.currentTarget?.id;
        let action = new (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).classes.Action("Dragdrop - drop");
        action.object = {
            "@type": "WebPageElement",
            "@id": draggedElementID,
            name: "Draggable element"
        };
        action.instrument = {
            "@type": "WebPageElement",
            "@id": dropzoneElementID,
            name: "Dropzone element"
        };
        action.setCompleted();
        callbackFn(action, params);
    });
}
// -----------------------------------------------------
//  Click
// -----------------------------------------------------
function $2adfa4e445ef1d89$var$setClickableElement(element, callbackFn, params) {
    element.addEventListener("click", (event)=>{
        let element = event.currentTarget;
        let elementID = element.id;
        let action = new (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).classes.Action("Click element");
        action.object = {
            "@type": "WebPageElement",
            "@id": elementID,
            name: "Clickable element"
        };
        action.setCompleted();
        callbackFn(action, params);
    });
}
// -----------------------------------------------------
//  Set draggable generic
// -----------------------------------------------------
function $2adfa4e445ef1d89$var$setDraggableGenericElement(element, content, callbackFn, params) {
    /**
     * Assigns content to draggable element
     */ element.draggable = true;
    element.addEventListener("dragstart", (event)=>{
        if (typeof content == "string") event.dataTransfer.setData("text/plain", element.id);
        else for (let key of Object.keys(content))event.dataTransfer.setData(key, content?.[key]);
    });
}
// -----------------------------------------------------
//  Set dropzone generic
// -----------------------------------------------------
function $2adfa4e445ef1d89$var$setDropzoneGenericElement(element, callbackFn, params) {
    /**
     * Assigns content to draggable element
     */ //element.draggable = true;
    element.addEventListener("dragover", (event)=>{
        event.preventDefault();
        event.stopPropagation();
    });
    element.addEventListener("drop", async (event)=>{
        event.preventDefault();
        let action = new (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).classes.Action("Generic Drop event");
        action.object = {
            "@type": "WebPageElement",
            "@id": event.currentTarget.id,
            name: "Clickable element"
        };
        //action.object = event.currentTarget
        for (const item of event.dataTransfer.items){
            if (item.kind === "string" && item.type.match(/^text\/plain/)) {
                // This 
                let result = {
                    "@type": "CreativeWork",
                    name: "Text content",
                    text: event.dataTransfer.getData(item.type)
                };
                action.result = result;
            } else if (item.kind === "string" && item.type.match(/^text\/html/)) {
                // Drag data item is HTML
                let result = {
                    "@type": "WebPageElement",
                    name: "HTML content",
                    text: event.dataTransfer.getData(item.type)
                };
                action.result = result;
            } else if (item.kind === "string" && item.type.match(/^text\/uri-list/)) {
                // Drag data item is URI
                let result = {
                    "@type": "WebPage",
                    url: event.dataTransfer.getData(item.type)
                };
                action.result = result;
            } else if (item.kind === "file") {
                // Drag data item is a file
                let result = new (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).classes.File();
                await result.setFile(item.getAsFile());
                action.result = result;
            }
        }
        action.setCompleted();
        callbackFn(action, params);
    });
}







const $0f67e8fb6483c62d$export$d028bac85af6d944 = {
    get: $0f67e8fb6483c62d$var$renderTemplate,
    replacePlaceholders: $0f67e8fb6483c62d$var$renderTemplate,
    render: $0f67e8fb6483c62d$var$renderTemplate
};
function $0f67e8fb6483c62d$var$renderTemplate(template, record) {
// let renderedTemplate1 = _renderTemplate(template, record)
//return renderedTemplate1
}
function $0f67e8fb6483c62d$var$_renderTemplate(template, record) {
    /**
     * beforeContent: the content before the opening tag
     * afterContent: the content after the closing tag
     * templateContent: the content in between the tags
     * valueContent: the content replacing the templateContent with actual values
     */ let content = template;
    //
    let iterators = [];
    // -----------------------------------------------------
    //  Handle iterations 
    // -----------------------------------------------------
    let tag = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).tag.get(content);
    while((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(tag)){
        // 
        //let newContent = 
        if (tag.type == "iterator") content = `
                ${String(tag.content.before || "")} 
                    <span class="krProperty" data-propertyID="${tag.value || ""}"> 
                        ${String(tag.content.between || "")} 
                    </span> 
                ${String(tag.content.after || "")}
                `;
        else content = `
            ${String(tag.content.before || "")} 
                
                    ${(0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).stringOperation.execute(record, tag.value) || ""}
               
            ${String(tag.content.after || "")}
            `;
        console.log("tag", tag);
        tag = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).tag.get(content);
    }
    content = content.trim();
    return content;
}






const $6ab83f37dcb687d8$export$ffaccbdd67f021cd = {
    things: {
        get: $6ab83f37dcb687d8$var$getThingElements
    },
    current: {
        element: {
            get: $6ab83f37dcb687d8$var$getCurrentElement
        },
        thing: {
            get: $6ab83f37dcb687d8$var$getCurrentThing
        },
        property: {
            get: $6ab83f37dcb687d8$var$getCurrentProperty
        },
        value: {
            get: $6ab83f37dcb687d8$var$getCurrentValue
        }
    },
    parent: {
        element: {
            get: $6ab83f37dcb687d8$var$getParentElement
        },
        thing: {
            get: $6ab83f37dcb687d8$var$getParentThing
        },
        property: {
            get: $6ab83f37dcb687d8$var$getParentProperty
        },
        value: {
            get: $6ab83f37dcb687d8$var$getParentValue
        }
    },
    top: {
        element: {
            get: $6ab83f37dcb687d8$var$getTopElement
        },
        thing: {
            get: $6ab83f37dcb687d8$var$getTopThing
        },
        property: {
            get: $6ab83f37dcb687d8$var$getTopProperty
        },
        value: {
            get: $6ab83f37dcb687d8$var$getTopValue
        }
    },
    children: {
        elements: {
            get: $6ab83f37dcb687d8$var$getChildrenElements
        },
        things: {
            get: $6ab83f37dcb687d8$var$getChildrenThings
        },
        properties: {
            get: $6ab83f37dcb687d8$var$getChildrenProperties
        },
        values: {
            get: $6ab83f37dcb687d8$var$getChildrenValues
        }
    },
    childrenAll: {
        elements: {
            get: $6ab83f37dcb687d8$var$getChildrenElementsAll
        },
        things: {
            get: $6ab83f37dcb687d8$var$getChildrenThingsAll
        },
        properties: {
            get: $6ab83f37dcb687d8$var$getChildrenPropertiesAll
        },
        values: {
            get: $6ab83f37dcb687d8$var$getChildrenValuesAll
        }
    }
};
// -----------------------------------------------------
//  All the things 
// -----------------------------------------------------
function $6ab83f37dcb687d8$var$getThingElements(element, record_or_record_type, record_id) {
    /**
     * Returns all thing elements under element (or document if null)
     * @param {Object} element
     * @param {Object|String} record_or_record_type
     * @param {String} record_id
     * @returns {Array} The thing elements
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) element = document;
    // 
    let record_type = record_or_record_type?.["@type"] || record_or_record_type?.record_type || record_or_record_type;
    record_id = record_or_record_type?.["@id"] || record_or_record_type?.record_id || record_id;
    let conditions;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(record_type)) conditions = {
        "data-record-type": record_type,
        "data-record-id": record_id
    };
    let things = $6ab83f37dcb687d8$var$getChildrenThingsAll(element, conditions);
    return things;
}
// -----------------------------------------------------
//  Retrieving elements - Current
// -----------------------------------------------------
function $6ab83f37dcb687d8$var$getCurrentElement(element, className, conditions) {
    /**
     * Returns closest parent element with className and conditions
     * @param {Object} element
     * @param {Object} className
     * @param {Object} conditions
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return undefined;
    //
    let item = element;
    while(item){
        if (item.classList && item.classList.contains(className) && (0, $c8b0dc629c726d48$export$e0169ab077dc0819).meetsConditions(item, conditions)) return item;
        item = item.parentElement;
    }
    return null;
}
function $6ab83f37dcb687d8$var$getCurrentThing(element, conditions) {
    /**
     * Returns current thing with conditions
     * @param {Object} element
     * @param {Object} conditions
     */ let className = "krThing";
    return $6ab83f37dcb687d8$var$getCurrentElement(element, className, conditions);
}
function $6ab83f37dcb687d8$var$getCurrentProperty(element, conditions) {
    /**
     * Returns current property with conditions
     * @param {Object} element
     * @param {Object} conditions
     */ let className = "krProperty";
    return $6ab83f37dcb687d8$var$getCurrentElement(element, className, conditions);
}
function $6ab83f37dcb687d8$var$getCurrentValue(element, conditions) {
    /**
     * Returns current value with conditions
     * @param {Object} element
     * @param {Object} conditions
     */ let className = "krValue";
    return $6ab83f37dcb687d8$var$getCurrentElement(element, className, conditions);
}
// -----------------------------------------------------
//  Retrieving elements - Parent
// -----------------------------------------------------
function $6ab83f37dcb687d8$var$getParentElement(element, className, conditions) {
    /**
     * Returns closest parent element with className and conditions
     * @param {Object} element
     * @param {Object} className
     * @param {Object} conditions
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return undefined;
    //
    let currentElement = $6ab83f37dcb687d8$var$getCurrentElement(element, className, conditions);
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(currentElement)) return;
    let parentItem = currentElement.parentElement;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(parentItem)) return null;
    let parentElement = $6ab83f37dcb687d8$var$getParentElement(parentItem, className, conditions);
    return parentElement;
}
function $6ab83f37dcb687d8$var$getParentThing(element, conditions) {
    /**
     * Returns parent thing with conditions
     * @param {Object} element
     * @param {Object} conditions
     * @returns {Object} The parent thing
     */ let className = "krThing";
    return $6ab83f37dcb687d8$var$getParentElement(element, className, conditions);
}
function $6ab83f37dcb687d8$var$getParentProperty(element, conditions) {
    /**
     * Returns parent thing with conditions
     * @param {Object} element
     * @param {Object} conditions
     * @returns {Object} The parent thing
     */ let className = "krProperty";
    return $6ab83f37dcb687d8$var$getParentElement(element, className, conditions);
}
function $6ab83f37dcb687d8$var$getParentValue(element, conditions) {
    /**
     * Returns parent thing with conditions
     * @param {Object} element
     * @param {Object} conditions
     * @returns {Object} The parent thing
     */ let className = "krValue";
    return $6ab83f37dcb687d8$var$getParentElement(element, className, conditions);
}
// -----------------------------------------------------
//  Retrieving elements - Top
// -----------------------------------------------------
function $6ab83f37dcb687d8$var$getTopElement(element, className, conditions) {
    /**
     * Returns most top parent element containing class name
     * @param {Object} element
     * @param {Object} className
     * @param {Object} conditions
     * @returns {Object} The top element
     *
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return undefined;
    //
    let item = element;
    let topElement = null;
    while(item){
        if (item.classList.contains(className) && (0, $c8b0dc629c726d48$export$e0169ab077dc0819).meetsConditions(item, conditions)) topElement = item;
        item = item.parentElement;
    }
    return topElement;
}
function $6ab83f37dcb687d8$var$getTopThing(element, conditions) {
    /**
     * Returns most top parent thing containing class name
     * @param {Object} element
     * @param {Object} conditions
     * @returns {Object} The parent thing
     */ let className = "krThing";
    return $6ab83f37dcb687d8$var$getTopElement(element, className, conditions);
}
function $6ab83f37dcb687d8$var$getTopProperty(element, conditions) {
    /**
     * Returns most top parent property containing class name
     * @param {Object} element
     * @param {Object} conditions
     * @returns {Object} The parent thing
     */ let className = "krProperty";
    return $6ab83f37dcb687d8$var$getTopElement(element, className, conditions);
}
function $6ab83f37dcb687d8$var$getTopValue(element, conditions) {
    /**
     * Returns most top parent value containing class name
     * @param {Object} element
     * @param {Object} conditions
     * @returns {Object} The parent thing
     */ let className = "krValue";
    return $6ab83f37dcb687d8$var$getTopElement(element, className, conditions);
}
// -----------------------------------------------------
//  Retrieving elements - Children
// -----------------------------------------------------
function $6ab83f37dcb687d8$var$getChildrenElements(element, classToGet, classesToStop, conditions) {
    /**
     * Returns all direct children elements with classToGet and conditions
     * @param {Object} element
     * @param {Object} classToGet
     * @param {Object} classesToStop
     * @param {Object} conditions
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return undefined;
    //
    let results = [];
    if (!Array.isArray(classesToStop)) classesToStop = [
        classesToStop
    ];
    if (!element.children) return [];
    for (let i of element.children){
        let skip = false;
        for (let classToStop of classesToStop)if (i.classList.contains(classToStop)) skip = true;
        if (skip == true) continue;
        if (i.classList.contains(classToGet) && (0, $c8b0dc629c726d48$export$e0169ab077dc0819).meetsConditions(i, conditions)) results.push(i);
        let v = $6ab83f37dcb687d8$var$getChildrenElements(i, classToGet, classesToStop, conditions);
        if (v && v.length > 0) results = results.concat(v);
    }
    return results;
}
function $6ab83f37dcb687d8$var$getChildrenThings(element, conditions) {
    /**
     * Returns all direct children things with conditions
     * @param {Object} element
     * @param {Object} conditions
     * @returns {Object} The children things
     */ let classToGet = "krThing";
    let classToStop = [
        "krProperty",
        "krValue"
    ];
    return $6ab83f37dcb687d8$var$getChildrenElements(element, classToGet, classToStop, conditions);
}
function $6ab83f37dcb687d8$var$getChildrenProperties(element, conditions) {
    /**
     * Returns all direct children properties with conditions
     * @param {Object} element
     * @param {Object} conditions
     * @returns {Object} The children things
     */ let classToGet = "krProperty";
    let classToStop = [
        "krThing",
        "krValue"
    ];
    return $6ab83f37dcb687d8$var$getChildrenElements(element, classToGet, classToStop, conditions);
}
function $6ab83f37dcb687d8$var$getChildrenValues(element, conditions) {
    /**
     * Returns all direct children values with conditions
     * @param {Object} element
     * @param {Object} conditions
     * @returns {Object} The children things
     */ let classToGet = "krValue";
    let classToStop = [
        "krThing",
        "krProperty"
    ];
    return $6ab83f37dcb687d8$var$getChildrenElements(element, classToGet, classToStop, conditions);
}
// -----------------------------------------------------
//  Retrieving elements - Children  - All
// -----------------------------------------------------
function $6ab83f37dcb687d8$var$getChildrenElementsAll(element, classToGet, classesToStop, conditions) {
    /**
     * Get all children and grandchildren
     * @param {Object} element
     * @param {Object} classToGet
     * @param {Object} classesToStop
     * @param {Object} conditions
     * @returns {Object} The children things
     *
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return undefined;
    classesToStop = [];
    //
    let results = $6ab83f37dcb687d8$var$getChildrenElements(element, classToGet, classesToStop, conditions);
    let childResults = [];
    for (let r of results)childResults = childResults.concat($6ab83f37dcb687d8$var$getChildrenElementsAll(r, classToGet, classesToStop, conditions));
    results = results.concat(childResults);
    return results;
}
function $6ab83f37dcb687d8$var$getChildrenThingsAll(element, conditions) {
    /**
     * Returns all children and grandchildren things with conditions
     * @param {Object} element
     * @param {Object} conditions
     * @returns {Object} The children things
     *
     */ let classToGet = "krThing";
    let classToStop = [
        "krProperty",
        "krValue"
    ];
    return $6ab83f37dcb687d8$var$getChildrenElementsAll(element, classToGet, classToStop, conditions);
}
function $6ab83f37dcb687d8$var$getChildrenPropertiesAll(element, conditions) {
    /**
     * Returns all children and grandchildren properties with conditions
     * @param {Object} element
     * @param {Object} conditions
     * @returns {Object} The children things
     *
     */ let classToGet = "krProperty";
    let classToStop = [
        "krThing",
        "krValue"
    ];
    return $6ab83f37dcb687d8$var$getChildrenElementsAll(element, classToGet, classToStop, conditions);
}
function $6ab83f37dcb687d8$var$getChildrenValuesAll(element, conditions) {
    /**
     * Returns all children and grandchildren values with conditions
     * @param {Object} element
     * @param {Object} conditions
     * @returns {Object} The children things
     *
     */ let classToGet = "krValue";
    let classToStop = [
        "krThing",
        "krProperty"
    ];
    return $6ab83f37dcb687d8$var$getChildrenElementsAll(element, classToGet, classToStop, conditions);
}


const $a635fab3621c72fd$export$c3cc9c4e77b9c8d7 = {
    type: {
        get: $a635fab3621c72fd$var$getElementType,
        getNext: $a635fab3621c72fd$var$getNextElementType,
        set: $a635fab3621c72fd$var$setElementType,
        delete: $a635fab3621c72fd$var$deleteElementType,
        setAsThing: $a635fab3621c72fd$var$setElementTypeThing,
        setAsProperty: $a635fab3621c72fd$var$setElementTypeProperty,
        setAsValue: $a635fab3621c72fd$var$setElementTypeValue
    },
    record_type: {
        get: $a635fab3621c72fd$var$getRecordType,
        set: $a635fab3621c72fd$var$setRecordType
    },
    record_id: {
        get: $a635fab3621c72fd$var$getRecordId,
        set: $a635fab3621c72fd$var$setRecordId
    },
    propertyID: {
        get: $a635fab3621c72fd$var$getPropertyID,
        set: $a635fab3621c72fd$var$setPropertyID
    },
    valueID: {
        get: $a635fab3621c72fd$var$getValueID,
        set: $a635fab3621c72fd$var$setValueID
    },
    valueHash: {
        get: $a635fab3621c72fd$var$getValueHash,
        set: $a635fab3621c72fd$var$setValueHash
    },
    ref: {
        get: $a635fab3621c72fd$var$getRecordRef,
        set: $a635fab3621c72fd$var$setRecordRef
    }
};
function $a635fab3621c72fd$var$getRecordType(element) {
    /**
     * Returns the record type of the element
     * @param {Object} element
     * @returns {String} The record type
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return null;
    //
    let record_type = element.getAttribute("data-record-type");
    return record_type;
}
function $a635fab3621c72fd$var$setRecordType(element, record_type) {
    /**
     * Sets the record type of the element
     * @param {Object} element
     * @param {String|Object} record_type of record or ref
     * @returns {Object} The element
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return null;
    //
    record_type = record_type?.["@type"] || record_type?.record_type || record_type;
    element.setAttribute("data-record-type", record_type);
    return element;
}
function $a635fab3621c72fd$var$getRecordId(element) {
    /**
     * Returns the record id of the element
     * @param {Object} element
     * @returns {String} The record id
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return null;
    //
    let record_id = element.getAttribute("data-record-id");
    return record_id;
}
function $a635fab3621c72fd$var$setRecordId(element, record_id) {
    /**
     * Sets the record type of the element
     * @param {Object} element
     * @param {String|Object} record_type of record or ref
     * @returns {Object} The element
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return null;
    //
    record_id = record_id?.["@id"] || record_id?.record_id || record_id;
    element.setAttribute("data-record-id", record_id);
    return element;
}
function $a635fab3621c72fd$var$getPropertyID(element) {
    /**
     * Returns the record id of the element
     * @param {Object} element
     * @returns {String} The record id
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return null;
    //
    let record_id = element.getAttribute("data-propertyID");
    return record_id;
}
function $a635fab3621c72fd$var$setPropertyID(element, propertyID) {
    /**
     * Sets the record type of the element
     * @param {Object} element
     * @param {String|Object} record_type of record or ref
     * @returns {Object} The element
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return null;
    //
    element.setAttribute("data-propertyID", propertyID);
    return element;
}
function $a635fab3621c72fd$var$getValueID(element) {
    /**
     * Returns the record id of the element
     * @param {Object} element
     * @returns {String} The record id
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return null;
    //
    let record_id = element.getAttribute("data-valueID");
    return record_id;
}
function $a635fab3621c72fd$var$setValueID(element, valueID) {
    /**
     * Sets the record type of the element
     * @param {Object} element
     * @param {String|Object} record_type of record or ref
     * @returns {Object} The element
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return null;
    //
    element.setAttribute("data-valueID", valueID);
    return element;
}
function $a635fab3621c72fd$var$getValueHash(element) {
    /**
     * Returns the record id of the element
     * @param {Object} element
     * @returns {String} The record id
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return null;
    //
    let record_id = element.getAttribute("data-value");
    return record_id;
}
function $a635fab3621c72fd$var$setValueHash(element, value) {
    /**
     * Sets the record type of the element
     * @param {Object} element
     * @param {String|Object} record_type of record or ref
     * @returns {Object} The element
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return null;
    if (typeof value != "string" || value.length > 20) value = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).hash.get(JSON.stringify(value));
    //
    element.setAttribute("data-value", value);
    return element;
}
function $a635fab3621c72fd$var$getRecordRefAll(element) {
    /**
     * Returns all the record refs under the element
     * @param {Object} element
     * @returns {Array} The record refs
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) element = document.body;
    let thingElements = (0, $6ab83f37dcb687d8$export$ffaccbdd67f021cd).childrenAll.things.get(element);
    let refs = thingElements.map((x)=>$a635fab3621c72fd$var$getRecordRef(x));
    return refs;
}
function $a635fab3621c72fd$var$getRecordRef(element) {
    /**
     * Returns the ref of the element
     * @param {Object} element
     * @returns {Object} The ref
     */ let record_type = $a635fab3621c72fd$var$getRecordType(element);
    let record_id = $a635fab3621c72fd$var$getRecordId(element);
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(record_type)) return null;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(record_id)) return null;
    let ref = {
        "@type": record_type,
        "@id": record_id
    };
    return ref;
}
function $a635fab3621c72fd$var$setRecordRef(element, ref_or_record_type, record_id) {
    /**
     * Sets the ref of the element (type and id)
     * @param {Object} element
     * @param {Object|String} ref_or_record_type of record or ref
     * @param {String} record_id
     * @returns {Object} The element
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return null;
    //
    let record_type = ref_or_record_type?.["@type"] || ref_or_record_type?.record_type || ref_or_record_type;
    record_id = record_id?.["@id"] || record_id?.record_id || record_id;
    $a635fab3621c72fd$var$setRecordType(element, record_type);
    $a635fab3621c72fd$var$setRecordId(element, record_id);
    return element;
}
function $a635fab3621c72fd$var$getElementType(element) {
    /**
     * Returns the element type (thing, property, value)
     * @param {Object} element
     * @returns {Object} The element type
     * 
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return null;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element.classList)) return null;
    //
    if (element.classList.contains("krThing")) return "thing";
    if (element.classList.contains("krProperty")) return "property";
    if (element.classList.contains("krValue")) return "value";
    return null;
}
function $a635fab3621c72fd$var$getNextElementType(element) {
    /**
     * Returns the next element type (thing, property, value)
     * Order thing -> proeprty -> value -> thing
     * @param {Object} element
     * @returns {Object} The element type
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return null;
    //
    let type = $a635fab3621c72fd$var$getElementType(element);
    switch(type){
        case "thing":
            return "property";
        case "property":
            return "value";
        case "value":
            return "thing";
        default:
            return null;
    }
}
function $a635fab3621c72fd$var$setElementType(element, elementType) {
    /**
     * Sets the element type
     * @param {Object} element
     * @param {Object} elementType
     * @returns {Object} The element
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return;
    //
    $a635fab3621c72fd$var$deleteElementType(element);
    element.classList.add(elementType);
}
function $a635fab3621c72fd$var$deleteElementType(element) {
    /**
     * Deletes the element type (removes class)
     * @param {Object} element
     * @returns {Object} The element
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return;
    //
    let classes = [
        "krThing",
        "krProperty",
        "krValue"
    ];
    for (let c of classes)element.classList.remove(c);
    return;
}
function $a635fab3621c72fd$var$setElementTypeThing(element) {
    /**
     * Sets the element type to thing
     * @param {Object} element
     * @returns {Object} The element
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return;
    //
    let elementType = "krThing";
    return $a635fab3621c72fd$var$setElementType(element, elementType);
}
function $a635fab3621c72fd$var$setElementTypeProperty(element) {
    /**
     * Sets the element type to property
     * @param {Object} element
     * @returns {Object} The element
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return;
    //
    let elementType = "krProperty";
    return $a635fab3621c72fd$var$setElementType(element, elementType);
}
function $a635fab3621c72fd$var$setElementTypeValue(element) {
    /**
     * Sets the element type to value
     * @param {Object} element
     * @returns {Object} The element
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return;
    //
    let elementType = "krValue";
    return $a635fab3621c72fd$var$setElementType(element, elementType);
}






const $2ad812101d8ee679$export$9ccd701369bc6cde = {
    get: $2ad812101d8ee679$var$getPartsOfElement,
    add: $2ad812101d8ee679$var$addPartToElement,
    header: {
        get: $2ad812101d8ee679$var$getHeaderOfElement
    },
    main: {
        get: $2ad812101d8ee679$var$getMainOfElement
    },
    footer: {
        get: $2ad812101d8ee679$var$getFooterOfElement
    },
    nav: {
        get: $2ad812101d8ee679$var$getNavOfElement
    },
    aside: {
        get: $2ad812101d8ee679$var$getAsideOfElement
    },
    sections: {
        get: $2ad812101d8ee679$var$getSectionsOfElement
    },
    template: {
        get: $2ad812101d8ee679$var$getTemplateOfElement
    }
};
function $2ad812101d8ee679$var$getPartsOfElement(element, partName) {
    /**
     * Returns the header portion of an element (class header)
     * @param {Object} element
     * @param {Object} section section to retrieve (header, main, footer, etc.)
     * @returns {Object} The header element
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return null;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(partName)) return null;
    //
    let nextElementType = (0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7).type.getNext(element);
    //
    // Add kr to partname if missing
    let classToGet = partName;
    if (!classToGet.startsWith("kr")) classToGet = "kr" + classToGet.charAt(0).toUpperCase() + classToGet.slice(1).toLowerCase();
    // Retrieve elements
    let bodies = (0, $6ab83f37dcb687d8$export$ffaccbdd67f021cd).children.elements.get(element, classToGet, [
        "krThing",
        "krProperty",
        "krValue"
    ]);
    // Return
    return bodies;
}
function $2ad812101d8ee679$var$addPartToElement(element, partName) {
    /**
     * Adds a body to an element if missing
     * @param {Object} element
     * @returns {Object} The new part
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return null;
    // Check if part already exists, return if so
    let part = $2ad812101d8ee679$var$getPartsOfElement(element, partName);
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(part)) return part;
    // Add kr to partname if missing
    let className = partName;
    if (!className.startsWith("kr")) className = "kr" + className.charAt(0).toUpperCase() + className.slice(1).toLowerCase();
    // Create new span element, template if part template
    let elementType = "span";
    let newBodyElement = document.createElement(elementType);
    newBodyElement.classList.add(className);
    // If class is main, insert betweeen, else add as children
    if (className == "krMain") (0, $c8b0dc629c726d48$export$e0169ab077dc0819).insert.below(newBodyElement, element);
    else element.appendChild(newBodyElement);
    // return
    return newBodyElement;
}
function $2ad812101d8ee679$var$getHeaderOfElement(element) {
    /**
     * Returns the header portion of an element (class header)
     * @param {Object} element
     * @returns {Object} The header element
     *
     */ return $2ad812101d8ee679$var$getPartsOfElement(element, "header")?.[0] || null;
}
function $2ad812101d8ee679$var$getMainOfElement(element) {
    /**
     * Returns child element containing krMain class.
     * @param {Object} element
     * @returns {Object} The body element
     *
     */ return $2ad812101d8ee679$var$getPartsOfElement(element, "main")?.[0] || null;
}
function $2ad812101d8ee679$var$getFooterOfElement(element) {
    /**
     * Returns the footer portion of an element
     * @param {Object} element
     * @returns {Object} The footer
     */ return $2ad812101d8ee679$var$getPartsOfElement(element, "footer")?.[0] || null;
}
function $2ad812101d8ee679$var$getNavOfElement(element) {
    /**
     * Returns the footer portion of an element
     * @param {Object} element
     * @returns {Object} The footer
     */ return $2ad812101d8ee679$var$getPartsOfElement(element, "nav")?.[0] || null;
}
function $2ad812101d8ee679$var$getAsideOfElement(element) {
    /**
     * Returns the footer portion of an element
     * @param {Object} element
     * @returns {Object} The footer
     */ return $2ad812101d8ee679$var$getPartsOfElement(element, "aside")?.[0] || null;
}
function $2ad812101d8ee679$var$getTemplateOfElement(element) {
    /**
     * Returns the footer portion of an element
     * @param {Object} element
     * @returns {Object} The footer
     */ return (0, $6ab83f37dcb687d8$export$ffaccbdd67f021cd).children.elements.get(element, "krTemplate", "krValue")?.[0] || null;
}
function $2ad812101d8ee679$var$getSectionsOfElement(element) {
    /**
     * Returns the footer portion of an element
     * @param {Object} element
     * @returns {Object} The footer
     */ return $2ad812101d8ee679$var$getPartsOfElement(element, "section");
}



const $0c0a864fcee6a66f$export$b8f607a8a10bde0a = {
    init: $0c0a864fcee6a66f$var$initThingElementAll
};
function $0c0a864fcee6a66f$var$initThingElementAll(element, TEMPLATEDB, force = false) {
    /**
     * Initializes the element as a thing element
     * @param {Object} element (init document if not provided))
     * @returns {Object} The element
     */ // Init action
    let action = new (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).classes.Action(`Initialize All ${(0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7).type.get(element)} element ${element?.id}`);
    action.object = element;
    // Error handling
    element = element || document.body;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isArray(element)) {
        action.instrument = element.map((x)=>$0c0a864fcee6a66f$var$initThingElementAll(x, TEMPLATEDB, force));
        action.close();
        return action;
    }
    // Placeholders
    //replacePlaceholders(element)
    // Add missing classes  
    let elements = element.getElementsByTagName("*");
    for (let e of elements)$0c0a864fcee6a66f$var$addMissingClasses(e);
    // Init childrens
    let item = element.firstElementChild;
    while(item){
        let nextItem = item.nextElementSibling;
        action.instrument = $0c0a864fcee6a66f$var$initThingElementAll(item, TEMPLATEDB, force);
        item = nextItem;
    }
    // Init element
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull((0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7).type.get(element))) action.instrument = $0c0a864fcee6a66f$var$initThingElement(element, TEMPLATEDB, force);
    action.close();
    return action;
}
function $0c0a864fcee6a66f$var$initThingElement(element, TEMPLATEDB, force) {
    /**
     * Initialize thing, property and value elements
     * @param {Object} element
     * @returns {Object} The element
     */ let action = new (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).classes.Action(`Initialize ${(0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7).type.get(element)} element ${element?.id}`);
    action.object = element;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) {
        action.setFailed("Element is null");
        return action;
    }
    // Return if no type
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull((0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7).type.get(element))) {
        action.close();
        return action;
    }
    // Set element id (if missing)
    (0, $c8b0dc629c726d48$export$e0169ab077dc0819).setId(element);
    // Add thing and value element if missing
    if ((0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7).type.get(element) == "property") {
        let addThingAction = $0c0a864fcee6a66f$var$addThingToProperty(element);
        let addValueAction = $0c0a864fcee6a66f$var$addValueToProperty(element);
    }
    // Add part element if missing       
    let mainAction = $0c0a864fcee6a66f$var$addMainIfMissing(element, TEMPLATEDB);
    let mainPart = (0, $2ad812101d8ee679$export$9ccd701369bc6cde).main.get(element);
    // Set main part content as template 
    let retrieve3Action = $0c0a864fcee6a66f$var$retrieveInnerContentAsTemplate(mainPart, TEMPLATEDB, force);
    // Set content as template
    let retrieve2Action = $0c0a864fcee6a66f$var$retrieveInnerContentAsTemplate(element, TEMPLATEDB, force);
    action.close();
    return action;
}
function $0c0a864fcee6a66f$var$addMainIfMissing(element, TEMPLATEDB) {
    /**
     * Add main if missing
     * @param {Object} element
     * @returns {Object} The element
     * 
     */ let action = new (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).classes.Action(`addMainIfMissing ${(0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7).type.get(element)} element ${element?.id}`);
    action.object = element;
    let mainPart = (0, $2ad812101d8ee679$export$9ccd701369bc6cde).main.get(element);
    // Make main part if missing
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(mainPart)) {
        mainPart = (0, $2ad812101d8ee679$export$9ccd701369bc6cde).add(element, "main", "");
        action.result = mainPart;
    }
    action.close();
    return action;
}
function $0c0a864fcee6a66f$var$replacePlaceholders(element) {
    /**
     * Replaces placeholders in element with property elements {{ }}
     * @param {Object} element
     * @returns {Object} The element
     * 
     */ // Replace references in {{ }} like {{ name }} or {{ item.name }} with properties
    // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return null;
    let newContent = (0, $0f67e8fb6483c62d$export$d028bac85af6d944).get(element.innerHTML);
    if (newContent != element.innerHTML) element.innerHTML = newContent;
    return;
}
function $0c0a864fcee6a66f$var$retrieveAndSaveTemplate(element, TEMPLATEDB = {}) {
    /**
     * Retrieves the content from the element and saves it as template
     * @param {Object} element
     * @returns {Object} The element
     */ let action = new (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).classes.Action(`retrieveAndSaveTemplate ${(0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7).type.get(element)} element ${element?.id}`);
    action.object = element;
    // Skip if already has a templateID
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(element.getAttribute("data-templateID"))) {
        action.close();
        return action;
    }
    // Get templates from template
    let preTemplateParts = element.querySelectorAll("TEMPLATE") //getTemplateOfElement(element)
    ;
    // Return if no templates found
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(preTemplateParts)) {
        action.close();
        return action;
    }
    // Set template id
    let templateID = "template_" + (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).uuid.new();
    element.setAttribute("data-templateID", templateID);
    let templateParts = [];
    for (let t of preTemplateParts){
        let className = "kr" + (0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7).type.get(element).slice(0, 1).toUpperCase() + (0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7).type.get(element).slice(1).toLowerCase();
        if ((0, $6ab83f37dcb687d8$export$ffaccbdd67f021cd).current.get(t, className).id == element.id) templateParts.push(t);
    }
    action.result = templateParts;
    // Add template parts to TEMPLATEDB
    if (templateParts.length > 0) for (let t of templateParts){
        TEMPLATEDB[templateID] = (TEMPLATEDB?.[templateID] || "") + t.innerHTML;
        TEMPLATEDB[templateID] = TEMPLATEDB[templateID].trim();
    }
    action.close();
    return action;
}
function $0c0a864fcee6a66f$var$retrieveInnerContentAsTemplate(element, TEMPLATEDB, force = false) {
    /**
     * If no template, retrieves inner content to be used as template
     * @param {Object} element
     * @returns {Object} The element
     * 
     */ let action = new (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).classes.Action(`retrieveInnerContentAsTemplate ${(0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7).type.get(element)} element ${element?.id}`);
    action.object = element;
    // Skip if already has a templateID
    let templateID = element.getAttribute("data-templateID");
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(templateID) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(TEMPLATEDB?.[templateID]) && force != true) {
        action.close();
        return action;
    }
    // Create templateID
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(templateID)) {
        templateID = "template_" + (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).uuid.new();
        element.setAttribute("data-templateID", templateID);
    }
    // Get inner content
    let content = element.innerHTML || "";
    content = content.replaceAll("\n", "");
    content = content.replaceAll("  ", " ");
    TEMPLATEDB[templateID] = content;
    // Set content to null
    element.innerHTML = "";
    action.result = element.innerHTML;
    action.close();
    return action;
}
function $0c0a864fcee6a66f$var$addThingToProperty(element) {
    /**
     * If a property element doens't have a parent thing, adds one
     * @param {Object} element
     * @returns {Object} The element
     * 
     */ let action = new (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).classes.Action(`addThingToProperty ${(0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7).type.get(element)} element ${element?.id}`);
    action.object = element;
    // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) {
        action.setFailed("Element is null");
        return action;
    }
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element.getAttribute("data-propertyID"))) {
        action.setFailed("Element does not have a propertyID");
        return action;
    }
    // Verify if it has a parent thing element
    let item = element.parentElement;
    let hasNoThing = false;
    while((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(item) && hasNoThing == false){
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(item.classList) && item.classList.contains("krThing")) {
            action.close();
            return action;
        }
        if (item.classList.contains("krProperty")) hasNoThing = true;
        item = item.parentElement;
    }
    // Create new parent
    let newThingElement = document.createElement("span");
    newThingElement.classList.add("Addedthing");
    action.result = newThingElement;
    // Add parent to element
    (0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7).type.setAsThing(newThingElement);
    //setElementTypeThing(newThingElement);
    newThingElement.setAttribute("data-record-type", element.getAttribute("data-record-type"));
    newThingElement.setAttribute("data-record-id", element.getAttribute("data-record-id"));
    (0, $c8b0dc629c726d48$export$e0169ab077dc0819).insert.above(newThingElement, element);
    action.close();
    return action;
}
function $0c0a864fcee6a66f$var$addValueToProperty(element) {
    /**
     * Addd value element if missing
     * 
     */ let values = (0, $6ab83f37dcb687d8$export$ffaccbdd67f021cd).children.values.get(element);
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(values)) return;
    let valueElement = document.createElement("span");
    (0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7).type.setAsValue(valueElement);
    $0c0a864fcee6a66f$var$addMainIfMissing(element);
    let mainPart = (0, $2ad812101d8ee679$export$9ccd701369bc6cde).main.get(element);
    (0, $c8b0dc629c726d48$export$e0169ab077dc0819).insert.below(valueElement, mainPart);
    return;
}
function $0c0a864fcee6a66f$var$addMissingClasses(element) {
    /**
     * Adds missing classes to element
     * Elements with data- attributes filled in but no class
     * @param {Object} element
     * @returns {Object} The element
     * 
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return null;
    // Converts elements with proper attributes to proper class
    let record_type = element.getAttribute("data-record-type");
    let record_id = element.getAttribute("data-record-id");
    let propertyID = element.getAttribute("data-propertyID");
    let valueID = element.getAttribute("data-valueID");
    let record_type_null = !record_type || record_type == null || record_type == "";
    let record_id_null = !record_id || record_id == null || record_id == "";
    let record_propertyID_null = !propertyID || propertyID == null || propertyID == "";
    let record_valueID_null = !valueID || valueID == null || valueID == "";
    // Convert to krThing if type and id but not property
    if (record_type_null == false && record_id_null == false && record_propertyID_null == true) element.classList.add("krThing");
    // Convert to krProperty if type and id but not property
    if (record_propertyID_null == false && record_valueID_null == true) element.classList.add("krProperty");
    // Convert to krProperty if type and id but not property
    if (record_valueID_null == false) element.classList.add("krValue");
    // Convert to krTemplate if tag template
    if (element.tagName == "TEMPLATE") element.classList.add("krTemplate");
    // Return element
    return element;
}



const $21085080d3b8a3c0$export$ae576630a286260c = {
    set: $21085080d3b8a3c0$var$setObserver
};
function $21085080d3b8a3c0$var$setObserver(element, callbackFn) {
    const config = {
        attributes: true,
        childList: true,
        subtree: true,
        characterData: true
    };
    // Callback function to execute when mutations are observed
    const callback = (mutationList, observer)=>{
        for (const mutation of mutationList){
            let event = {
                "@type": "Action",
                "@id": (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).uuid.new(),
                "name": "Element mutation",
                "object": mutation.target
            };
            if (mutation.type === "childList") ;
            else if (mutation.type === "attributes") ;
            else if (mutation.type === "characterData") {
                //console.log('mutation.type', mutation)
                let action = {
                    "@type": "ReplaceAction",
                    "@id": (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).uuid.new(),
                    replacee: mutation.oldValue,
                    replacer: mutation.target.textContent
                };
                callbackFn(action);
            }
        }
    };
    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);
    // Start observing the target node for configured mutations
    observer.observe(element, config);
// Later, you can stop observing
//observer.disconnect();
}
function $21085080d3b8a3c0$var$broadcast(element, event) {}






const $ded7b0d2be5134be$export$b340c67ddc4bd41d = {
    record: {
        get: $ded7b0d2be5134be$var$getRecordFromElement,
        set: $ded7b0d2be5134be$var$setRecordToElement,
        delete: $ded7b0d2be5134be$var$deleteRecordFromElement
    },
    value: {
        get: $ded7b0d2be5134be$var$getValueFromElement
    }
};
function $ded7b0d2be5134be$var$getRecordFromElement(element) {
    /**
     * Retrieves record from elements attributes and values
     * @param {Object} element
     * @returns {Object} The record
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return null;
    // Get record
    let record = {};
    let thingElement = (0, $6ab83f37dcb687d8$export$ffaccbdd67f021cd).current.thing.get(element);
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thingElement)) return null;
    record["@type"] = thingElement.getAttribute("data-record-type");
    record["@id"] = thingElement.getAttribute("data-record-id");
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(record?.["@type"])) return null;
    // Get properties
    let propertyElements = (0, $6ab83f37dcb687d8$export$ffaccbdd67f021cd).children.properties.get(thingElement);
    for (let p of propertyElements){
        let propertyID = p.getAttribute("data-propertyID");
        record[propertyID] = [];
        // Get values
        let valueElements = (0, $6ab83f37dcb687d8$export$ffaccbdd67f021cd).children.values.get(p);
        for (let v of valueElements){
            let value = $ded7b0d2be5134be$var$getValueFromElement(v);
            if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(value)) record[propertyID].push(value);
        }
    }
    record = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).json.simplify(record);
    return record;
}
function $ded7b0d2be5134be$var$getValueFromElement(element) {
    /**
     * Returns the value contained in an element
     * @param {Object} element
     * @returns {Object} The value
     *
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return null;
    // If input
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(element?.value)) return element.value;
    // If value is contained in value attribute
    let v = element.getAttribute("value");
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(v)) return v;
    // If thing
    let childrenThingElements = (0, $6ab83f37dcb687d8$export$ffaccbdd67f021cd).children.things.get(element);
    if (childrenThingElements.length > 0) return childrenThingElements[0];
    // html content
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(element.innerHTML)) {
        let content = element.textContent;
        content = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).string.clean(content);
        return content;
    }
    return null;
}
function $ded7b0d2be5134be$var$setRecordToElement(element, record_type, record_id) {
    /**
     * Sets record to element
     * @param {Object} element
     * @param {Object} record_type
     * @param {Object} record_id
     *
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return null;
    //
    record_id = record_type?.record_id || record_type?.["@id"] || record_id;
    record_type = record_type?.record_type || record_type?.["@type"] || record_type;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(record_type)) return;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(record_id)) return;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return;
    // Set type and id
    let elements = [];
    // Retrieve thing
    let currentThing = (0, $6ab83f37dcb687d8$export$ffaccbdd67f021cd).current.thing.get(element);
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(currentThing)) return null;
    elements.push(currentThing);
    // Retrieve properties
    let propertyElements = (0, $6ab83f37dcb687d8$export$ffaccbdd67f021cd).children.things.get(currentThing);
    elements = elements.concat(propertyElements);
    // Retrieve values
    for (let p of propertyElements){
        let valueElements = (0, $6ab83f37dcb687d8$export$ffaccbdd67f021cd).children.values.get(p);
        elements = elements.concat(valueElements);
    }
    // Assign type and id for all elements
    for (let i of elements){
        i.setAttribute("data-record-type", record_type);
        i.setAttribute("data-record-id", record_id);
    }
    return;
}
function $ded7b0d2be5134be$var$deleteRecordFromElement(element) {
    /**
     * Deletes record from element
     * @param {Object} element
     * @returns {Object} The element
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) return null;
    //
    let elements = [];
    // Retrieve thing
    let currentThing = (0, $6ab83f37dcb687d8$export$ffaccbdd67f021cd).current.thing.get(element);
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(currentThing)) return null;
    elements.push(currentThing);
    // Retrieve properties
    let propertyElements = (0, $6ab83f37dcb687d8$export$ffaccbdd67f021cd).children.properties.get(currentThing);
    elements = elements.concat(propertyElements);
    // Retrieve values
    for (let p of propertyElements){
        let valueElements = (0, $6ab83f37dcb687d8$export$ffaccbdd67f021cd).children.values.get(p);
        elements = elements.concat(valueElements);
    }
    // Assign type and id for all elements
    for (let i of elements){
        i.setAttribute("data-record-type", "");
        i.setAttribute("data-record-id", "");
    }
    return;
}








let $72773900747a3863$var$DB = {};
const $72773900747a3863$export$dc9f39fafadf3ccd = {
    get: $72773900747a3863$var$get,
    set: $72773900747a3863$var$set
};
function $72773900747a3863$var$get(value) {
    return $72773900747a3863$var$DB?.[value] || null;
}
function $72773900747a3863$var$set(value, template) {
    $72773900747a3863$var$DB[value] = template;
}


const $088016ba0ae1a642$export$c1781ce783707272 = {
    render: $088016ba0ae1a642$var$renderElements,
    renderProperty: $088016ba0ae1a642$var$_renderPropertyElement,
    newValue: $088016ba0ae1a642$var$_newValueElement
};
function $088016ba0ae1a642$var$renderElements(element, record, conditions, TEMPLATEDB) {
    /**
     * Updates all elements with same type and id
     * @param {Object} record
     * @param {Object} conditions
     * @returns {Object} The elements updated
     *
     */ let action = new (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).classes.Action(`Render elements ${record?.["@type"]} ${record?.["@id"]}`);
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(record)) {
        action.setFailed("No record provided");
        return action;
    }
    element = element || document.body;
    let thingElements = (0, $6ab83f37dcb687d8$export$ffaccbdd67f021cd).things.get(element, record["@type"], record["@id"]);
    // Add given element if also meets conditions
    if ((0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7).type.get(element) == "thing" && (0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7).record_type.get(element) == record["@type"] && (0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7).record_id.get(element) == record["@id"]) thingElements.push(element);
    //
    thingElements = (0, $c8b0dc629c726d48$export$e0169ab077dc0819).filter(thingElements, conditions);
    //
    if (thingElements.length == 0) {
        action.setFailed("No elements found");
        return action;
    }
    //
    for (let t of thingElements)action.instrument = $088016ba0ae1a642$var$_renderThingElement(t, record, TEMPLATEDB);
    // Render sub things
    for (let k of Object.keys(record)){
        for (let v of (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(record[k]))if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(v?.["@type"]) || (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(v?.record_type)) action.instrument = $088016ba0ae1a642$var$renderElements(element, v, conditions, TEMPLATEDB);
    }
    //
    action.setCompleted();
    // Return
    return action;
}
function $088016ba0ae1a642$var$_renderThingElement(element, value, TEMPLATEDB) {
    /**
     * Updates the element with the value
     * @param {Object} element
     * @param {Object} value
     * @returns {Object} The element updated
     */ let action = new (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).classes.Action(`Render elements ${value?.["@type"]} ${value?.["@id"]}`);
    // Get current thing element
    let thingElement = (0, $6ab83f37dcb687d8$export$ffaccbdd67f021cd).current.thing.get(element);
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thingElement)) {
        action.setFailed("No thing element found");
        return action;
    }
    // Create main element if missing
    let propertyMainElement = (0, $2ad812101d8ee679$export$9ccd701369bc6cde).main.get(thingElement);
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(propertyMainElement)) propertyMainElement = (0, $2ad812101d8ee679$export$9ccd701369bc6cde).add(thingElement, "main", "");
    // Set type and id
    thingElement.setAttribute("data-record-type", value?.["@type"] || value?.record_type);
    thingElement.setAttribute("data-record-id", value?.["@id"] || value?.record_id);
    // Retrieve property elements
    let propertyElements = (0, $6ab83f37dcb687d8$export$ffaccbdd67f021cd).children.properties.get(thingElement);
    // Render thing from template if not already on the document
    let templateID = element.getAttribute("data-templateID");
    if (propertyElements.length == 0 && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(templateID)) {
        let mainPart = (0, $2ad812101d8ee679$export$9ccd701369bc6cde).main.get(thingElement);
        let content = (0, $72773900747a3863$export$dc9f39fafadf3ccd).get(templateID) //TEMPLATEDB?.[templateID] || "";
        ;
        content = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).template.get(content, value);
        mainPart.innerHTML = content;
        (0, $0c0a864fcee6a66f$export$b8f607a8a10bde0a).init(mainPart, TEMPLATEDB);
        propertyElements = (0, $6ab83f37dcb687d8$export$ffaccbdd67f021cd).children.properties.get(mainPart);
    }
    // Render individual properties
    for (let p of propertyElements)action.instrument = $088016ba0ae1a642$var$_renderPropertyElement(p, value, null, TEMPLATEDB);
    action.close();
    return action;
}
function $088016ba0ae1a642$var$_renderPropertyElement(element, record, template, TEMPLATEDB) {
    /**
     * Updates a property element with new value
     * @param {Object} element
     * @param {Object} value
     * @param {Object} template
     * @returns {Object} The element updated
     */ let action = new (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).classes.Action(`Render property element ${element.getAttribute("data-propertyID")} ${record?.["@type"]} ${record?.["@id"]}`);
    action.object = element;
    // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element)) {
        action.setFailed("No element provided");
        return action;
    }
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(record)) {
        action.setFailed("No record provided");
        return action;
    }
    // Get value
    let propertyID = element.getAttribute("data-propertyID");
    let value = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).dot.get(propertyID, record);
    value = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(value);
    // Get template
    let templateID = element.getAttribute("data-templateID");
    template = (0, $72773900747a3863$export$dc9f39fafadf3ccd).get(templateID) || "" //TEMPLATEDB?.[templateID] || template;
    ;
    template = template.trim();
    // Create main element if missing
    let propertyMainElement = (0, $2ad812101d8ee679$export$9ccd701369bc6cde).main.get(element);
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(propertyMainElement)) propertyMainElement = (0, $2ad812101d8ee679$export$9ccd701369bc6cde).add(element, "main", "");
    // Clear existing values
    propertyMainElement.innerHTML = "";
    //
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(value)) {
        action.close();
        return action;
    }
    // Generate value elements
    let item = null;
    for (let v of value){
        let ve;
        let newRecord = JSON.parse(JSON.stringify(record));
        newRecord = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).dot.set(newRecord, propertyID, v);
        // Prepopulate template with values (in case there are {{ }} )
        let content = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).template.get(template, newRecord);
        // Generate new value element
        ve = $088016ba0ae1a642$var$_newValueElement(newRecord, content, propertyID, TEMPLATEDB);
        // Render sub properties if any
        (0, $6ab83f37dcb687d8$export$ffaccbdd67f021cd).children.properties.get(ve).map((x)=>$088016ba0ae1a642$var$_renderPropertyElement(x, newRecord, null, TEMPLATEDB));
        // Add to element
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(item)) item.after(ve);
        else propertyMainElement.appendChild(ve);
        //
        item = ve;
    }
    action.close();
    return action;
}
function $088016ba0ae1a642$var$_newValueElement(record, template, propertyID, TEMPLATEDB) {
    /**
     * Creates a new value element
     * @param {Object} value
     * @param {Object} template
     * @param {String} propertyID
     * @returns {Object} The new value element
     */ let value = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).dot.get(propertyID, record);
    let newValueElement = document.createElement("span");
    (0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7).type.setAsValue(newValueElement);
    (0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7).propertyID.set(newValueElement, propertyID);
    (0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7).valueHash.set(newValueElement, value);
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(template)) newValueElement.textContent = value;
    else {
        newValueElement.innerHTML = template;
        let main = (0, $2ad812101d8ee679$export$9ccd701369bc6cde).main.get(newValueElement);
        if (main) main.innerHTML = value;
    }
    (0, $0c0a864fcee6a66f$export$b8f607a8a10bde0a).init(newValueElement, TEMPLATEDB);
    for (let t of (0, $6ab83f37dcb687d8$export$ffaccbdd67f021cd).children.things.get(newValueElement)){
        t.setAttribute("data-record-type", value?.["@type"]);
        t.setAttribute("data-record-id", value?.["@id"]);
    }
    return newValueElement;
}










const $a6f8f0c2e2f67514$export$4e14e39b01a79427 = {
    test: $a6f8f0c2e2f67514$var$test,
    testSimple: $a6f8f0c2e2f67514$var$testRecord,
    testDetailed: $a6f8f0c2e2f67514$var$testDetailed,
    tests: {
        valueRequired: $a6f8f0c2e2f67514$var$_testConditionValueRequired,
        multipleValue: $a6f8f0c2e2f67514$var$_testConditionMultipleValues,
        valueMinLength: $a6f8f0c2e2f67514$var$_testConditionValueMinLength,
        valueMaxLength: $a6f8f0c2e2f67514$var$_testConditionValueMaxLength,
        valuePattern: $a6f8f0c2e2f67514$var$_testConditionValuePattern,
        minValue: $a6f8f0c2e2f67514$var$_testConditionMinValue,
        maxValue: $a6f8f0c2e2f67514$var$_testConditionMaxValue,
        stepValue: $a6f8f0c2e2f67514$var$_testConditionStepValue
    },
    new: {
        eq: $a6f8f0c2e2f67514$var$newEqCondition,
        ne: $a6f8f0c2e2f67514$var$newNeCondition,
        lt: $a6f8f0c2e2f67514$var$newLtCondition,
        gt: $a6f8f0c2e2f67514$var$newGtCondition,
        minLength: $a6f8f0c2e2f67514$var$newMinLengthCondition,
        maxLength: $a6f8f0c2e2f67514$var$newMaxLengthCondition,
        required: $a6f8f0c2e2f67514$var$newRequiredCondition,
        contains: $a6f8f0c2e2f67514$var$newContainsCondition,
        notContains: $a6f8f0c2e2f67514$var$newNotContainsCondition
    },
    extract: {
        fromThing: $a6f8f0c2e2f67514$var$extractPvsFromThingRecord,
        fromFilter: $a6f8f0c2e2f67514$var$extractPvsFromFilterRecord
    },
    export: {
        toRecord: $a6f8f0c2e2f67514$var$exportPvsToRecord
    },
    record: $a6f8f0c2e2f67514$var$getSampleRecord
};
// -----------------------------------------------------
//  Test - All
// -----------------------------------------------------
function $a6f8f0c2e2f67514$var$test(record, pvs_or_filter_record, detailed = false) {
    /**
     * Test if a record meets the conditions
     * @param {Object} record
     * @param {Object} pvs_or_filter_record
     * @param {boolean} returns detailed result if true
     * @returns {boolean|Object} true/false if detailed=false, otherwise action object
     *
     */ let result = $a6f8f0c2e2f67514$var$testDetailed(record, pvs_or_filter_record);
    if (detailed == false) return result.isSuccess() || false;
    else return result;
}
function $a6f8f0c2e2f67514$var$testDetailed(record, pvs_or_filter_record) {
    /**
     * Test if a record meets the conditions
     * @param {Object} record
     * @param {Object} pvs_or_filter_record
     * @returns {Object} action object
     */ // -----------------------------------------------------
    //  Format and combine pvss
    // -----------------------------------------------------
    let pvs = $a6f8f0c2e2f67514$var$extractPvsFromFilterRecord(pvs_or_filter_record);
    // Add pvs from record itself (xxx-input)
    pvs = pvs.concat($a6f8f0c2e2f67514$var$extractPvsFromThingRecord(record)); // Get pvs from record itself
    // run tests
    return $a6f8f0c2e2f67514$var$testRecord(record, pvs);
}
function $a6f8f0c2e2f67514$var$testRecord(record, pvs) {
    // Takes in record and check if meet pvs
    let name = `Test pvs conditions for record ${record?.["@type"] || record?.record_type || ""} ${record?.["@id"] || record?.record_id || ""}`;
    let action = new (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).classes.Action(name);
    action.object = record;
    action.instrument = [];
    action.result = [];
    // -----------------------------------------------------
    //  Test pvs
    // -----------------------------------------------------
    for (let pv of (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(pvs)){
        let propertyID = pv?.valueName || null;
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(propertyID)) {
            let a = $a6f8f0c2e2f67514$var$testPropertyValue(record, propertyID, pv);
            action.instrument.push(a);
        }
    }
    // Evaluate if tests are successful
    let failedTests = action.instrument.filter((x)=>x.isSuccess() == false);
    if (failedTests.length == 0) action.setCompleted();
    if (failedTests.length == 1) action.setFailed(failedTests[0].error);
    if (failedTests.length > 1) action.setFailed(`${failedTests.length} tests failed`);
    return action;
}
function $a6f8f0c2e2f67514$var$testPropertyValue(record, propertyID, pvs) {
    /**
     * Test if record meet pvs condition
     *
     * properties followed by | treat next part as command
     */ let name = `Test pvs conditions for ${propertyID}`;
    let action = new (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).classes.Action(name);
    action.object = record;
    action.instrument = [];
    action.result = [];
    // Clean_up propertyID
    propertyID = propertyID.replace("-input", "");
    // Retrieve values. If propertyCommandString exists
    let values = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).stringOperation.execute(record, propertyID);
    // Begin tests
    let result;
    // Test if multiple values allowed
    result = $a6f8f0c2e2f67514$var$_testConditionMultipleValues(pvs, propertyID, values);
    action.instrument.push(result);
    if (result.isSuccess() == false) {
        action.setFailed();
        return action;
    }
    // Test for null
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(values)) {
        result = $a6f8f0c2e2f67514$var$_testConditionValueNull(pvs, propertyID, values);
        action.instrument.push(result);
        if (result.isSuccess() == false) {
            action.setFailed(result.error);
            return action;
        }
    }
    // Perform for each values
    for (let value of (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(values)){
        // Test if value is required - skip to next value if value null and not required
        result = $a6f8f0c2e2f67514$var$_testConditionValueRequired(pvs, propertyID, value);
        action.instrument.push(result);
        if (result.isSuccess() == true && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(value)) continue;
        // test min max
        result = $a6f8f0c2e2f67514$var$_testConditionMinValue(pvs, propertyID, value);
        action.instrument.push($a6f8f0c2e2f67514$var$_testConditionMinValue(pvs, propertyID, value));
        action.instrument.push($a6f8f0c2e2f67514$var$_testConditionMaxValue(pvs, propertyID, value));
        action.instrument.push($a6f8f0c2e2f67514$var$_testConditionStepValue(pvs, propertyID, value));
        action.instrument.push($a6f8f0c2e2f67514$var$_testConditionValueMinLength(pvs, propertyID, value));
        action.instrument.push($a6f8f0c2e2f67514$var$_testConditionValueMaxLength(pvs, propertyID, value));
        action.instrument.push($a6f8f0c2e2f67514$var$_testConditionValuePattern(pvs, propertyID, value));
    }
    // Evaluate if tests are successful
    let failedTests = action.instrument.filter((x)=>x.isSuccess() == false);
    if (failedTests.length == 0) action.setCompleted();
    if (failedTests.length == 1) action.setFailed(failedTests[0].error);
    if (failedTests.length > 1) action.setFailed(`${failedTests.length} tests failed`);
    return action;
}
// -----------------------------------------------------
//  Test - Value required
// -----------------------------------------------------
function $a6f8f0c2e2f67514$var$_testConditionValueRequired(pvs, propertyID, value) {
    // Test valueRequired
    let propertyConditionID = "valueRequired";
    let name = `PropertyValue Condition Test ${propertyConditionID} for ${propertyID}`;
    let action = new (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).classes.Action(name);
    action.object = {
        "@type": "PropertyValue",
        propertyID: propertyID,
        value: value
    };
    action.instrument = pvs;
    try {
        // Get propertyConditionValue
        let propertyConditionValue = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).dot.get(propertyConditionID, pvs);
        // Return true if property condition not set
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(propertyConditionValue)) {
            action.setCompleted();
            return action;
        }
        // Return true if property condition not mandatory
        if (propertyConditionValue == false) {
            action.setCompleted();
            return action;
        }
        // Return false if property condition is mandatory and no value
        if (propertyConditionValue == true && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(value)) {
            action.setFailed("Value required, but no value found");
            return action;
        }
        // Return true if property condition is mandatory and  value
        if (propertyConditionValue == true && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(value)) {
            action.setCompleted();
            return action;
        }
        // Catch all
        action.setFailed("Unknown property condition");
    } catch (error) {
        action.setFailed("Error - " + String(error));
        return action;
    }
}
function $a6f8f0c2e2f67514$var$_testConditionMultipleValues(pvs, propertyID, values) {
    // Test valueRequired
    let propertyConditionID = "multipleValues";
    let name = `PropertyValue Condition Test ${propertyConditionID} for ${propertyID}`;
    let action = new (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).classes.Action(name);
    action.object = {
        "@type": "PropertyValue",
        propertyID: propertyID,
        value: values
    };
    action.instrument = pvs;
    try {
        // Set values to array
        values = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(values);
        // Get propertyConditionValue
        let propertyConditionValue = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).dot.get(propertyConditionID, pvs);
        // Return true if no value
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(values)) {
            action.setCompleted();
            return action;
        }
        // Return false if property condition not set and multiple values (default false)
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(propertyConditionValue) && values.length > 1) {
            action.setFailed("Multiple values not permitted, found ${values.length}");
            return action;
        }
        // Return false if property condition false and multiple values (default false)
        if (propertyConditionValue == false && values.length > 1) {
            action.setFailed("Multiple values not permitted, found ${values.length}");
            return action;
        }
        // Return true
        action.setCompleted();
        return action;
    } catch (error) {
        action.setFailed("Error - " + String(error));
        return action;
    }
}
// -----------------------------------------------------
//  Test - Value min max step
// -----------------------------------------------------
function $a6f8f0c2e2f67514$var$_testConditionMinValue(pvs, propertyID, value) {
    let propertyConditionID = "minValue";
    let name = `PropertyValue Condition Test ${propertyConditionID} for ${propertyID}`;
    let action = new (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).classes.Action(name);
    action.object = {
        "@type": "PropertyValue",
        propertyID: propertyID,
        value: value
    };
    action.instrument = pvs;
    try {
        // Get propertyConditionValue
        let propertyConditionValue = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).dot.get(propertyConditionID, pvs);
        // Return true if property condition not set
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(propertyConditionValue)) {
            action.setCompleted();
            return action;
        }
        // Return false if propertyCondition not a number
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).number.isValid(propertyConditionValue) == false && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).date.isDate(propertyConditionValue) == false) {
            action.setFailed("Value is not a number or date");
            return action;
        }
        // Return false if no value
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(value)) {
            action.setFailed("No value");
            return action;
        }
        // Return false if value not a number
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).number.isValid(value) == false && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).date.isDate(value) == false) {
            action.setFailed("Value is not a number");
            return action;
        }
        // Return true if value meet condition
        if (value >= propertyConditionValue) {
            action.setCompleted();
            return action;
        } else {
            action.setFailed(`Value (${value}) is less than minimum ${propertyConditionValue}`);
            return action;
        }
        // Catch all
        action.setFailed("Unknown property condition");
    } catch (error) {
        action.setFailed("Error - " + String(error));
        return action;
    }
}
function $a6f8f0c2e2f67514$var$_testConditionMaxValue(pvs, propertyID, value) {
    let propertyConditionID = "maxValue";
    let name = `PropertyValue Condition Test ${propertyConditionID} for ${propertyID}`;
    let action = new (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).classes.Action(name);
    action.object = {
        "@type": "PropertyValue",
        propertyID: propertyID,
        value: value
    };
    action.instrument = pvs;
    try {
        // Get propertyConditionValue
        let propertyConditionValue = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).dot.get(propertyConditionID, pvs);
        // Return true if property condition not set
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(propertyConditionValue)) {
            action.setCompleted();
            return action;
        }
        // Return false if property condition not a number
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).number.isValid(propertyConditionValue) == false && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).date.isDate(propertyConditionValue) == false) {
            action.setFailed("Constraint is not a date or number");
            return action;
        }
        // Return false if no value
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(value)) {
            action.setFailed("No value");
            return action;
        }
        // Return false if value not a number
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).number.isValid(value) == false && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).date.isDate(value) == false) {
            action.setFailed("Value is not a number");
            return action;
        }
        // Return true if value meet condition
        if (value <= propertyConditionValue) {
            action.setCompleted();
            return action;
        } else {
            action.setFailed(`Value (${value}) is greater than maximum ${propertyConditionValue}`);
            return action;
        }
        // Catch all
        action.setFailed("Unknown property condition");
    } catch (error) {
        action.setFailed("Error - " + String(error));
        return action;
    }
}
function $a6f8f0c2e2f67514$var$_testConditionStepValue(pvs, propertyID, value) {
    let propertyConditionID = "stepValue";
    let name = `PropertyValue Condition Test ${propertyConditionID} for ${propertyID}`;
    let action = new (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).classes.Action(name);
    action.object = {
        "@type": "PropertyValue",
        propertyID: propertyID,
        value: value
    };
    action.instrument = pvs;
    try {
        // Get propertyConditionValue
        let propertyConditionValue = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).dot.get(propertyConditionID, pvs);
        // Return true if property condition not set
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(propertyConditionValue)) {
            action.setCompleted();
            return action;
        }
        // Return false if property condition not a number
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).number.isValid(propertyConditionValue) == false) {
            action.setFailed("Constraint is not a number");
            return action;
        }
        // Return true if property conditionis 0
        if (propertyConditionValue == 0) {
            action.setCompleted();
            return action;
        }
        // Return false if no value
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(value)) {
            action.setFailed("No value");
            return action;
        }
        // Return false if value not a number
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).number.isValid(value) == false) {
            action.setFailed("Value is not a number");
            return action;
        }
        // Return true if value meet condition
        if (value % propertyConditionValue == 0) {
            action.setCompleted();
            return action;
        } else {
            action.setFailed(`Value length (${value}) is not in steps of ${propertyConditionValue}`);
            return action;
        }
        // Catch all
        action.setFailed("Unknown property condition");
    } catch (error) {
        action.setFailed("Error - " + String(error));
        return action;
    }
}
// -----------------------------------------------------
//  Test - value length
// -----------------------------------------------------
function $a6f8f0c2e2f67514$var$_testConditionValueMinLength(pvs, propertyID, value) {
    let propertyConditionID = "valueMinLength";
    let name = `PropertyValue Condition Test ${propertyConditionID} for ${propertyID}`;
    let action = new (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).classes.Action(name);
    action.object = {
        "@type": "PropertyValue",
        propertyID: propertyID,
        value: value
    };
    action.instrument = pvs;
    try {
        // Get propertyConditionValue
        let propertyConditionValue = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).dot.get(propertyConditionID, pvs);
        // Return true if no property condition
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(propertyConditionValue)) {
            action.setCompleted();
            return action;
        }
        // Return false if not a number
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).number.isValid(propertyConditionValue) == false) {
            action.setFailed("Constraint is not a number");
            return action;
        }
        // Return false if no value
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(value)) {
            action.setFailed("No value");
            return action;
        }
        // Return true if value meet condition
        if (value.length >= propertyConditionValue) {
            action.setCompleted();
            return action;
        } else {
            action.setFailed(`Value length (${value}) is less than minimum ${propertyConditionValue}`);
            return action;
        }
        // Catch all
        action.setFailed("Unknown property condition");
    } catch (error) {
        action.setFailed("Error - " + String(error));
        return action;
    }
}
function $a6f8f0c2e2f67514$var$_testConditionValueMaxLength(pvs, propertyID, value) {
    let propertyConditionID = "valueMaxLength";
    let name = `PropertyValue Condition Test ${propertyConditionID} for ${propertyID}`;
    let action = new (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).classes.Action(name);
    action.object = {
        "@type": "PropertyValue",
        propertyID: propertyID,
        value: value
    };
    action.instrument = pvs;
    try {
        // Get propertyConditionValue
        let propertyConditionValue = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).dot.get(propertyConditionID, pvs);
        // Return true if property condition not set
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(propertyConditionValue)) {
            action.setCompleted();
            return action;
        }
        // Return false if property condition not a number
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).number.isValid(propertyConditionValue) == false) {
            action.setFailed("Constraint is not a number");
            return action;
        }
        // Return false if no value
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(value)) {
            action.setFailed("No value");
            return action;
        }
        // Return true if value meet condition
        if (value.length <= propertyConditionValue) {
            action.setCompleted();
            return action;
        } else {
            action.setFailed(`Value length (${value}) is greater than maximum ${propertyConditionValue}`);
            return action;
        }
        // Catch all
        action.setFailed("Unknown property condition");
    } catch (error) {
        action.setFailed("Error - " + String(error));
        return action;
    }
}
// -----------------------------------------------------
//  Test - Value pattern
// -----------------------------------------------------
function $a6f8f0c2e2f67514$var$_testConditionValueNull(pvs, propertyID, value) {
    /**
     *
     */ let propertyConditionID = "valuePattern";
    let name = `PropertyValue Condition Test ${propertyConditionID} for ${propertyID}`;
    let action = new (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).classes.Action(name);
    action.object = {
        "@type": "PropertyValue",
        propertyID: propertyID,
        value: value
    };
    action.instrument = pvs;
    // Get propertyConditionValue
    let propertyConditionValue = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).dot.get(propertyConditionID, pvs);
    if (propertyConditionValue == "null") propertyConditionValue = null;
    // Return true if property condition null
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(propertyConditionValue) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(value)) {
        action.setCompleted();
        return action;
    }
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(propertyConditionValue) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(value)) {
        action.setFailed("Value is not null");
        return action;
    }
    action.setCompleted();
    return action;
}
function $a6f8f0c2e2f67514$var$_testConditionValuePattern(pvs, propertyID, value) {
    let propertyConditionID = "valuePattern";
    let name = `PropertyValue Condition Test ${propertyConditionID} for ${propertyID}`;
    let action = new (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).classes.Action(name);
    action.object = {
        "@type": "PropertyValue",
        propertyID: propertyID,
        value: value
    };
    action.instrument = pvs;
    try {
        // Get propertyConditionValue
        let propertyConditionValue = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).dot.get(propertyConditionID, pvs);
        // Return true if property condition not set
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(propertyConditionValue)) {
            action.setCompleted();
            return action;
        }
        // Redirect to null test if propertyCondition == 'null'
        if (propertyConditionValue == "null") return $a6f8f0c2e2f67514$var$_testConditionValueNull(pvs, propertyID, value);
        // Convert both to string
        value = String(value);
        propertyConditionValue = String(propertyConditionValue);
        // Run pattern test
        // Return true if value meet condition
        value = String(value);
        const result = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).regex.test(value, propertyConditionValue);
        // Return true if value meet condition
        if (result == true) {
            action.setCompleted();
            return action;
        } else {
            action.setFailed(`Value (${value}) does not meet pattern ${propertyConditionValue}`);
            return action;
        }
        // Catch all
        action.setFailed("Unknown property condition");
    } catch (error) {
        action.setFailed("Error - " + String(error));
        return action;
    }
}
// -----------------------------------------------------
//  Extract
// -----------------------------------------------------
function $a6f8f0c2e2f67514$var$extractPvsFromThingRecord(records) {
    /**
     * Retriev all pvs (xxx-input) from records
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(records)) return [];
    // run on xxx-input
    let pvs = [];
    for (let record of (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(records)){
        // If already pvsSpecification
        if (record?.["@type"] == "PropertyValueSpecification") {
            pvs.push(record);
            continue;
        }
        // If not, retrieve from record
        for (let key of Object.keys(record))if (key.includes("-input")) {
            let propertyID = key.replace("-input", "");
            let values = record?.[key];
            for (let value of (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(values)){
                if (value?.["@type"] != "PropertyValueSpecification") value = $a6f8f0c2e2f67514$var$getSpecificationsFromString(propertyID, value);
                value.valueName = value.valueName || propertyID.replace("-input", "");
                pvs.push(value);
            }
        }
    }
    // return pvs
    return pvs;
}
function $a6f8f0c2e2f67514$var$extractPvsFromFilterRecord(record) {
    /**
     * Transform normal json record representing conditions to PVS
     * @param {Object} record
     * @returns {Array}
     *
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(record)) return [];
    if (record?.["@type"] == "PropertyValueSpecification") return record;
    // Convert record to dot notation
    let dotRecord = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).json.objectToDotNotation(record);
    // Iterate through key values and get specifications
    let pvs = [];
    for (let k of Object.keys(dotRecord)){
        let content = dotRecord[k];
        if (content == null) pvs.push($a6f8f0c2e2f67514$var$newNullCondition(k, ""));
        let newPvs = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(content).map((x)=>$a6f8f0c2e2f67514$var$getSpecificationsFromString(k, x));
        pvs = pvs.concat(newPvs);
    }
    // Return PVS
    return pvs;
}
// -----------------------------------------------------
//  Comment
// -----------------------------------------------------
function $a6f8f0c2e2f67514$var$getSpecificationsFromString(propertyID, inputContent) {
    /**
     * Get specifications from a string
     * eq, ne, gt, lt, minLength, maxLength, required, contains, notContains
     * @param {String} propertyID
     * @param {String} inputContent
     * @returns {Array}
     */ // Error handling
    //if(h.isNull(inputContent)){ return null }
    // Get specifications
    let specifications = [];
    // Pre format
    let content = String(inputContent).trim();
    let condition;
    // null
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(content)) {
        let value = content.split(condition)[1];
        value = value.trim();
        specifications.push($a6f8f0c2e2f67514$var$newNullCondition(propertyID, value));
    }
    // eq
    condition = "eq ";
    if (content.startsWith(condition)) {
        let value = content.split(condition)[1];
        value = value.trim();
        specifications.push($a6f8f0c2e2f67514$var$newMinLengthCondition(propertyID, value));
    }
    // ne
    condition = "ne ";
    if (content.startsWith(condition)) {
        let value = content.split(condition)[1];
        value = value.trim();
        specifications.push($a6f8f0c2e2f67514$var$newNeCondition(propertyID, value));
    }
    // lt
    condition = "lt ";
    if (content.startsWith(condition)) {
        let value = content.split(condition)[1];
        value = value.trim();
        specifications.push($a6f8f0c2e2f67514$var$newLtCondition(propertyID, value));
    }
    // gt
    condition = "gt ";
    if (content.startsWith(condition)) {
        let value = content.split(condition)[1];
        value = value.trim();
        specifications.push($a6f8f0c2e2f67514$var$newGtCondition(propertyID, value));
    }
    // minLength
    condition = "minLength ";
    if (content.startsWith(condition)) {
        let value = content.split(condition)[1];
        value = value.trim();
        specifications.push($a6f8f0c2e2f67514$var$newMinLengthCondition(propertyID, value));
    }
    // maxLength
    condition = "maxLength ";
    if (content.startsWith(condition)) {
        let value = content.split(condition)[1];
        value = value.trim();
        specifications.push($a6f8f0c2e2f67514$var$newMaxLengthCondition(propertyID, value));
    }
    // required
    condition = "required ";
    if (content.startsWith(condition)) {
        let value = content.split(condition)[1];
        value = value.trim();
        specifications.push($a6f8f0c2e2f67514$var$newRequiredCondition(propertyID, value));
    }
    // contains
    condition = "contains ";
    if (content.startsWith(condition)) {
        let value = content.split(condition)[1];
        value = value.trim();
        specifications.push($a6f8f0c2e2f67514$var$newContainsCondition(propertyID, value));
    }
    // notContains
    condition = "notContains ";
    if (content.startsWith(condition)) {
        let value = content.split(condition)[1];
        value = value.trim();
        specifications.push($a6f8f0c2e2f67514$var$newNotContainsCondition(propertyID, value));
    }
    // Exception - if nothing found, treat as eq
    if (specifications.length == 0 && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(content)) {
        let value = content.trim();
        specifications.push($a6f8f0c2e2f67514$var$newEqCondition(propertyID, value));
    }
    // Combine into one record
    let record = {};
    record["@type"] = "PropertyValueSpecification";
    record["@id"] = String(crypto.randomUUID());
    for (let r of specifications){
        for (let key of Object.keys(r))if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(r?.[key])) record[key] = r?.[key];
    }
    return record;
}
// -----------------------------------------------------
//  Get new conditions
// -----------------------------------------------------
function $a6f8f0c2e2f67514$var$newEqCondition(propertyID, value) {
    /**
     * Get new eq condition
     * @param {String} propertyID
     * @param {String} value
     * @returns {Object}
     */ value = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).number.toNumber(value) || value;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).number.isValid(value) == true) {
        let pv = {
            "@type": "PropertyValueSpecification",
            minValue: value,
            maxValue: value,
            valueName: propertyID
        };
        return pv;
    } else {
        let pv = {
            "@type": "PropertyValueSpecification",
            valuePattern: `/^${value}$/`,
            valueName: propertyID
        };
        return pv;
    }
}
function $a6f8f0c2e2f67514$var$newNeCondition(propertyID, value) {
    let pv = {
        "@type": "PropertyValueSpecification",
        valuePattern: `/^(?!${value}$).+/`,
        valueName: propertyID
    };
    return pv;
}
function $a6f8f0c2e2f67514$var$newLtCondition(propertyID, value) {
    // Convert value to number
    try {
        value = Number(value);
    } catch  {
        return null;
    }
    let pv = {
        "@type": "PropertyValueSpecification",
        maxValue: value,
        valueName: propertyID
    };
    return pv;
}
function $a6f8f0c2e2f67514$var$newGtCondition(propertyID, value) {
    // Convert value to number
    try {
        value = Number(value);
    } catch  {
        return null;
    }
    let pv = {
        "@type": "PropertyValueSpecification",
        minValue: value,
        valueName: propertyID
    };
    return pv;
}
function $a6f8f0c2e2f67514$var$newMinLengthCondition(propertyID, value) {
    // Convert value to number
    try {
        value = Number(value);
    } catch  {
        return null;
    }
    let pv = {
        "@type": "PropertyValueSpecification",
        valueMinLength: value,
        valueName: propertyID
    };
    return pv;
}
function $a6f8f0c2e2f67514$var$newMaxLengthCondition(propertyID, value) {
    // Convert value to number
    try {
        value = Number(value);
    } catch  {
        return null;
    }
    let pv = {
        "@type": "PropertyValueSpecification",
        valueMaxLength: value,
        valueName: propertyID
    };
    return pv;
}
function $a6f8f0c2e2f67514$var$newRequiredCondition(propertyID, value) {
    // Convert value to number
    try {
        value = Bool(value);
    } catch  {
        return null;
    }
    let pv = {
        "@type": "PropertyValueSpecification",
        valueRequired: true
    };
    return pv;
}
function $a6f8f0c2e2f67514$var$newContainsCondition(propertyID, value) {
    let pv = {
        "@type": "PropertyValueSpecification",
        valuePattern: `/${value}/`,
        valueName: propertyID
    };
    return pv;
}
function $a6f8f0c2e2f67514$var$newNotContainsCondition(propertyID, value) {
    let pv = {
        "@type": "PropertyValueSpecification",
        valuePattern: `/^(?!.*${value}).*$/`,
        valueName: propertyID
    };
    return pv;
}
function $a6f8f0c2e2f67514$var$newNullCondition(propertyID, value) {
    let pv = {
        "@type": "PropertyValueSpecification",
        valuePattern: "null",
        valueName: propertyID
    };
    return pv;
}
// -----------------------------------------------------
//  Export
// -----------------------------------------------------
function $a6f8f0c2e2f67514$var$exportPvsToRecord(pvs, record) {
    /**
     * Export pvs to record, or adds to record if provided
     */ // Concatenate in one record
    record = record || {};
    for (let s of pvs){
        let k = s?.valueName;
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(k)) {
            record[k] = record[k] || [];
            record[k].push(s);
        }
    }
    // Return pv
    return record;
}
// -----------------------------------------------------
//  Comment
// -----------------------------------------------------
function $a6f8f0c2e2f67514$var$getSampleRecord() {
    let record = {
        "@type": "PropertyValueSpecification",
        valueRequired: true,
        multipleValues: false,
        minValue: 0,
        maxValue: 100,
        valueMinLength: 0,
        valueMaxLength: 100,
        valuePattern: "sss",
        stepValue: 0,
        valueName: "q"
    };
    return record;
}




const $409aaf2b232e73d2$export$e0d9d093805b3f23 = {
    isValid: $409aaf2b232e73d2$var$isValid,
    toString: $409aaf2b232e73d2$var$toString,
    hash: $409aaf2b232e73d2$var$hash,
    // Comparison
    isSame: $409aaf2b232e73d2$var$isSame,
    isNotSame: $409aaf2b232e73d2$var$isNotSame,
    eq: $409aaf2b232e73d2$var$eq,
    ne: $409aaf2b232e73d2$var$ne,
    lt: $409aaf2b232e73d2$var$lt,
    gt: $409aaf2b232e73d2$var$gt,
    // Methods
    clone: $409aaf2b232e73d2$var$clone,
    override: $409aaf2b232e73d2$var$override,
    compile: $409aaf2b232e73d2$var$compile,
    system: {
        get: $409aaf2b232e73d2$var$getSystemRecord
    },
    // PVs
    new: {
        add: $409aaf2b232e73d2$var$getAddPV,
        delete: $409aaf2b232e73d2$var$getDeletePV,
        update: $409aaf2b232e73d2$var$getUpdatePV,
        replace: $409aaf2b232e73d2$var$getReplacePV
    },
    sort: $409aaf2b232e73d2$var$sort,
    filter: $409aaf2b232e73d2$var$filter,
    dedupe: $409aaf2b232e73d2$var$dedupe,
    concat: $409aaf2b232e73d2$var$concat
};
function $409aaf2b232e73d2$var$isValid(record) {
    try {
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull($409aaf2b232e73d2$var$getRecordType(record))) return false;
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull($409aaf2b232e73d2$var$getRecordId(record))) return false;
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(record?.metadata)) return false;
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(record?.object)) return false;
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(record?.object?.propertyID)) return false;
        return true;
    } catch  {
        return false;
    }
}
function $409aaf2b232e73d2$var$toString(record) {
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).array.isArray(record)) {
        let records = JSON.parse(JSON.stringify(record));
        let validRecord = $409aaf2b232e73d2$var$compile(records);
        let newRecords = [];
        for (let r of records){
            if (r.object.propertyID.startsWith("@")) ;
            else if (validRecord.includes(r)) {
                r.active = "true";
                newRecords.push(r);
            } else {
                r.active = "false";
                newRecords.push(r);
            }
        }
        records = newRecords;
        records = $409aaf2b232e73d2$var$sort(records, "position");
        let keys = [
            "@type",
            "object.propertyID",
            "object.value",
            "active",
            "metadata.credibility",
            "metadata.observationDate",
            "metadata.createdDate",
            "metadata.position"
        ];
        let headings = [
            "@type",
            "propertyID",
            "value",
            "active",
            "credibility",
            "observationDate",
            "createdDate",
            "position"
        ];
        return (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).textTable(records, keys, headings);
    }
    return `${record?.["@type"] || ""} ${record?.object?.propertyID || ""} ${record?.object?.value?.["@type"] || record?.object?.value || ""} ${record?.object?.value?.["@id"] || ""}`;
}
function $409aaf2b232e73d2$var$clone(value) {
    /**
     * Clones a record
     * @param {Object} record The record
     * @returns {Object} The cloned record
     * 
     */ let clone = {};
    for (let k of Object.keys(value))clone[k] = value[k];
    clone["@id"] = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).uuid.new();
    clone.object = {
        "@type": "PropertyValue",
        propertyID: value?.object?.propertyID,
        value: value?.object?.value
    };
    clone.metadata = JSON.parse(JSON.stringify(value.metadata));
    return clone;
}
function $409aaf2b232e73d2$var$getRecordType(record_or_record_type, record_id) {
    let value = record_or_record_type?.["@type"] || record_or_record_type?.record_type || record_or_record_type;
    return value;
}
function $409aaf2b232e73d2$var$getRecordId(record_or_record_type, record_id) {
    let value = record_or_record_type?.["@id"] || record_or_record_type?.record_id || record_id;
    return value;
}
function $409aaf2b232e73d2$var$hash(pv) {
    /**
     * Hash to compare if two PV are equivalent. For same, user @id
     * @param {PropertyValueSpecification} pv
     * @returns {string}
     * Creates a has with everything but createdDate and position
     * 
     *
     *
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pv)) throw new Error("Value provided is not pv");
    if (!$409aaf2b232e73d2$var$isValid(pv)) throw new Error("Value provided is not pv");
    // Make copy of pv
    let newPV = $409aaf2b232e73d2$var$clone(pv);
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull($409aaf2b232e73d2$var$getRecordType(newPV.object.value))) newPV.object.value = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).thing.ref.get(newPV.object.value);
    //let value = JSON.parse(JSON.stringify(pv))
    let value = newPV;
    // Remove createdDate and position
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(value?.metadata)) {
        delete value["@id"];
        delete value.metadata.createdDate;
        delete value.metadata.position;
    }
    // Convert to string
    let hashValue = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).hash.get(value);
    // Return hash
    return hashValue;
}
function $409aaf2b232e73d2$var$isSame(pv1, pv2) {
    /**
     * Compare two PV for same
     * @param {PropertyValueSpecification} pv1
     * @param {PropertyValueSpecification} pv2
     * @returns {boolean}
     */ if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pv1)) return false;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pv2)) return false;
    return $409aaf2b232e73d2$var$hash(pv1) == $409aaf2b232e73d2$var$hash(pv2);
}
function $409aaf2b232e73d2$var$isNotSame(pv1, pv2) {
    /**
     * Compare two PV for not same
     * @param {PropertyValueSpecification} pv1
     * @param {PropertyValueSpecification} pv2
     * @returns {boolean}
     */ return $409aaf2b232e73d2$var$hash(pv1) != $409aaf2b232e73d2$var$hash(pv2);
}
function $409aaf2b232e73d2$var$eq(pv1, pv2) {
    /**
     * Compare two PV for equal
     * @param {PropertyValueSpecification} pv1
     * @param {PropertyValueSpecification} pv2
     * @returns {boolean}
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pv1)) throw new Error("Value provided is not pv");
    if (!$409aaf2b232e73d2$var$isValid(pv1)) throw new Error("Value provided is not pv");
    // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pv2)) throw new Error("Value provided is not pv");
    if (!$409aaf2b232e73d2$var$isValid(pv2)) throw new Error("Value provided is not pv");
    // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pv1) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pv2)) return true;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pv1) || (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pv2)) return false;
    if ($409aaf2b232e73d2$var$getRecordType(pv1) != $409aaf2b232e73d2$var$getRecordType(pv2)) return false;
    if ($409aaf2b232e73d2$var$getRecordId(pv1) != $409aaf2b232e73d2$var$getRecordId(pv2)) return false;
    return true;
}
function $409aaf2b232e73d2$var$ne(pv1, pv2) {
    // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pv1)) throw new Error("Value provided is not pv");
    if (!$409aaf2b232e73d2$var$isValid(pv1)) throw new Error("Value provided is not pv");
    // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pv2)) throw new Error("Value provided is not pv");
    if (!$409aaf2b232e73d2$var$isValid(pv2)) throw new Error("Value provided is not pv");
    // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pv1) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pv2)) return false;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pv1) || (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pv2)) return true;
    if ($409aaf2b232e73d2$var$getRecordType(pv1) != $409aaf2b232e73d2$var$getRecordType(pv2)) return true;
    if ($409aaf2b232e73d2$var$getRecordId(pv1) != $409aaf2b232e73d2$var$getRecordId(pv2)) return true;
    return false;
}
function $409aaf2b232e73d2$var$gt(pv1, pv2) {
    /**
     * Compare two PV for greater than
     * @param {PropertyValueSpecification} pv1
     * @param {PropertyValueSpecification} pv2
     * @returns {boolean}
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pv1)) throw new Error("Value provided is not pv");
    if (!$409aaf2b232e73d2$var$isValid(pv1)) throw new Error("Value provided is not pv");
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pv2)) throw new Error("Value provided is not pv");
    if (!$409aaf2b232e73d2$var$isValid(pv2)) throw new Error("Value provided is not pv");
    let propertyIDs = [
        "credibility",
        "observationDate",
        "createdDate",
        "position"
    ];
    let result;
    for (let propertyID of propertyIDs){
        let value1 = pv1?.metadata?.[propertyID];
        let value2 = pv2?.metadata?.[propertyID];
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(value1) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(value2)) continue;
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(value1) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(value2)) return false;
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(value1) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(value2)) return true;
        if (propertyID.includes("Date")) {
            if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).date.isValid(value1) && !(0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).date.isValid(value2)) return true;
            if (!(0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).date.isValid(value1) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).date.isValid(value2)) return false;
            if (!(0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).date.isValid(value1) && !(0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).date.isValid(value2)) continue;
            if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).date.gt(value1, value2) == true) return true;
            if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).date.eq(value1, value2) == true) continue;
            if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).date.lt(value1, value2) == false) return false;
        } else {
            result = value1 > value2;
            if (value1 > value2) return true;
            if (value1 == value2) continue;
            if (value1 < value2) return false;
        }
    }
    return false;
}
function $409aaf2b232e73d2$var$lt(pv1, pv2) {
    /**
     * Compare two PV for less than
     * @param {PropertyValueSpecification} pv1
     * @param {PropertyValueSpecification} pv2
     * @returns {boolean}
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pv1)) throw new Error("Value provided is not pv");
    if (!$409aaf2b232e73d2$var$isValid(pv1)) throw new Error("Value provided is not pv");
    // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pv2)) throw new Error("Value provided is not pv");
    if (!$409aaf2b232e73d2$var$isValid(pv2)) throw new Error("Value provided is not pv");
    let propertyIDs = [
        "credibility",
        "observationDate",
        "createdDate",
        "position"
    ];
    let result;
    for (let propertyID of propertyIDs){
        let value1 = pv1?.metadata?.[propertyID];
        let value2 = pv2?.metadata?.[propertyID];
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(value1) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(value2)) continue;
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(value1) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(value2)) return true;
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(value1) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(value2)) return false;
        if (propertyID.includes("Date")) {
            if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).date.isValid(value1) && !(0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).date.isValid(value2)) return false;
            if (!(0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).date.isValid(value1) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).date.isValid(value2)) return true;
            if (!(0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).date.isValid(value1) && !(0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).date.isValid(value2)) continue;
            if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).date.lt(value1, value2) == true) return true;
            if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).date.eq(value1, value2) == true) continue;
            if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).date.gt(value1, value2) == false) return false;
        } else {
            if (value1 < value2) return true;
            if (value1 == value2) continue;
            if (value1 > value2) return false;
        }
    }
    return false;
}
function $409aaf2b232e73d2$var$create(actionType, propertyID, value, metadata, replacee) {
    /**
     * Action types:
     * - AddAction
     * - ReplaceAction
     * - DeleteAction
     * - 
     */ let record = {
        "@type": actionType,
        "@id": String(crypto.randomUUID()),
        "actionStatus": "CompletedActionStatus",
        "valid": true,
        "replacee": replacee,
        "object": {
            "@type": "PropertyValue",
            "propertyID": propertyID,
            "value": value
        },
        "metadata": {
            "createdDate": (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).date.toDate(metadata?.createdDate || new Date()),
            "position": (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).number.toNumber(metadata?.position) || null,
            "credibility": (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).number.toNumber(metadata?.credibility) || null,
            "observationDate": (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).date.toDate(metadata?.observationDate) || null,
            "validFrom": (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).date.toDate(metadata?.validFrom) || null,
            "validThrough": (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).date.toDate(metadata?.validThrough) || null,
            "object": metadata?.object || null,
            "instrument": metadata?.instrument || null,
            "agent": metadata?.agent || null
        }
    };
    // Clean up record
    record = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).json.simplify(record);
    //throw new Error('Parameter is not a number!');
    // Return record
    return record;
}
// -----------------------------------------------------
//  Comment 
// -----------------------------------------------------
function $409aaf2b232e73d2$var$getSystemRecord(pv) {
    // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pv)) throw new Error("Value provided is not pv");
    if (!$409aaf2b232e73d2$var$isValid(pv)) throw new Error("Value provided is not pv");
    // Handle class propertyValue
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(pv?._record)) {
        pv = pv._record;
        pv.metadata = pv.metadata?._record;
    }
    return pv;
}
// -----------------------------------------------------
//  Compile value 
// -----------------------------------------------------
function $409aaf2b232e73d2$var$override(pv1, pv2) {
    /**
     * Returns true if pv1 override pv2
     */ // Error handling
    if (pv1?.["@id"] == pv2?.["@id"]) return false;
    if (pv1?.object.propertyID != pv2?.object.propertyID) return false;
    // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pv1)) throw new Error("Value provided is not pv");
    if (!$409aaf2b232e73d2$var$isValid(pv1)) throw new Error("Value provided is not pv");
    // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pv2)) throw new Error("Value provided is not pv");
    if (!$409aaf2b232e73d2$var$isValid(pv2)) throw new Error("Value provided is not pv");
    // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pv1) || (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pv2)) return false;
    // Get record type
    let recordType1 = $409aaf2b232e73d2$var$getRecordType(pv1).toLowerCase();
    let recordType2 = $409aaf2b232e73d2$var$getRecordType(pv2).toLowerCase();
    // Get record id
    if (recordType1 == "replaceaction") {
        let c1 = $409aaf2b232e73d2$var$gt(pv1, pv2);
        let c2 = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pv1?.replacee || null);
        let c3 = pv1?.replacee == pv2?.object?.value;
        let c4 = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(pv1?.object?.value?.["@type"]);
        let c5 = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(pv1?.object?.value?.["@id"]);
        let c6 = pv1?.object?.value?.["@type"] == pv2?.object?.value?.["@type"];
        let c7 = pv1?.object?.value?.["@id"] == pv2?.object?.value?.["@id"];
        return c1 && (c2 || c3 || c4 && c5 && c6 && c7);
    }
    if (recordType1 == "deleteaction") {
        let c1 = $409aaf2b232e73d2$var$gt(pv1, pv2);
        let c2 = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pv1?.object?.value);
        let c3 = pv1?.object?.value == pv2?.object?.value;
        let c4 = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(pv1?.object?.value?.["@type"]);
        let c5 = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(pv1?.object?.value?.["@id"]);
        let c6 = pv1?.object?.value?.["@type"] == pv2?.object?.value?.["@type"];
        let c7 = pv1?.object?.value?.["@id"] == pv2?.object?.value?.["@id"];
        let result = c1 && (c2 || c3 || c4 && c5 && c6 && c7);
        return result;
    }
    return false;
}
function $409aaf2b232e73d2$var$compile(pvs) {
    /**
     * Returns the propertyValues that are valid
     */ // Sort by order 
    pvs = $409aaf2b232e73d2$var$sort(pvs);
    let results = pvs;
    // Remove pvs canceled by this pv
    for (let pv of pvs)results = results.filter((x)=>$409aaf2b232e73d2$var$override(pv, x) == false);
    // Remove delete pvs
    results = results.filter((x)=>$409aaf2b232e73d2$var$getRecordType(x).toLowerCase() != "deleteaction");
    // Return results
    return results;
}
function $409aaf2b232e73d2$var$getUpdatePV(propertyID, value, metadata) {
    return $409aaf2b232e73d2$var$create("UpdateAction", propertyID, value, metadata);
}
function $409aaf2b232e73d2$var$getAddPV(propertyID, value, metadata) {
    return $409aaf2b232e73d2$var$create("AddAction", propertyID, value, metadata);
}
function $409aaf2b232e73d2$var$getDeletePV(propertyID, value, metadata) {
    return $409aaf2b232e73d2$var$create("DeleteAction", propertyID, value, metadata);
}
function $409aaf2b232e73d2$var$getReplacePV(propertyID, value, metadata, replacee) {
    return $409aaf2b232e73d2$var$create("ReplaceAction", propertyID, value, metadata, replacee);
}
// -----------------------------------------------------
//  Array 
// -----------------------------------------------------
function $409aaf2b232e73d2$var$length(pvs) {
    pvs = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(pvs);
    return pvs.length;
}
function $409aaf2b232e73d2$var$pop(pvs, pv) {
    // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pvs)) return [];
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pv)) return pvs;
    // copy list to avoid changing original
    pvs = [
        ...pvs
    ];
    // Remove all pvs same as pvs
    let i = 0;
    while(i < pvs.length - 1){
        if ($409aaf2b232e73d2$var$isSame(pv, pvs[i])) pvs.splice(i, 1);
        i += 1;
    }
    return pvs;
}
function $409aaf2b232e73d2$var$search(pvs, pv) {
    // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pvs)) return [];
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pv)) return [];
    pvs = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(pvs);
    // Return all pvs same as pv
    let results = pvs.filter((x)=>$409aaf2b232e73d2$var$isSame(x, pv));
    // Return results
    return results;
}
function $409aaf2b232e73d2$var$min(pvs) {
    // Error handling
    pvs = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(pvs);
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pvs)) return null;
    let pv = pvs.reduce((maxItem, item)=>$409aaf2b232e73d2$var$lt(maxItem, item) ? maxItem : item);
    return pv;
}
function $409aaf2b232e73d2$var$max(pvs) {
    // Error handling
    pvs = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(pvs);
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pvs)) return null;
    let pv = pvs.reduce((maxItem, item)=>$409aaf2b232e73d2$var$gt(maxItem, item) ? maxItem : item);
    return pv;
}
function $409aaf2b232e73d2$var$sort(pvs) {
    /**
     * Sort property values 
     */ // Ensure it is array
    pvs = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(pvs);
    // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pvs)) return [];
    // Generate create list to not change original one
    pvs = pvs.map((x)=>x);
    // Sort function
    function sortFn(v1, v2) {
        if ($409aaf2b232e73d2$var$gt(v1, v2)) return -1;
        else if ($409aaf2b232e73d2$var$lt(v1, v2)) return 1;
        else return 0;
    }
    // Sort
    let result = pvs.sort(sortFn);
    // Return result    
    return result;
}
function $409aaf2b232e73d2$var$meetCondition(pv, conditions) {
    return (0, $a6f8f0c2e2f67514$export$4e14e39b01a79427).test(pv, conditions) || false;
}
function $409aaf2b232e73d2$var$filter(pvs, condition) {
    /**
     * Sort property values 
     */ // Ensure it is array
    pvs = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(pvs);
    // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pvs)) return [];
    // Generate create list to not change original one
    pvs = pvs.filter((x)=>$409aaf2b232e73d2$var$meetCondition(x, condition));
    // Sort
    let result = $409aaf2b232e73d2$var$sort(pvs);
    // Return result    
    return result;
}
function $409aaf2b232e73d2$var$concat(pvs1, pvs2) {
    /**
     * Concatenates two property values
     * @param {PropertyValueSpecification[]} pvs1
     * @param {PropertyValueSpecification[]} pvs2
     * @returns {PropertyValueSpecification[]}
     */ pvs1 = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(pvs1);
    pvs2 = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(pvs2);
    let pvs = pvs1.concat(pvs2);
    return $409aaf2b232e73d2$var$dedupe(pvs);
}
function $409aaf2b232e73d2$var$dedupe(pvs) {
    /**
     * Dedupe property values if same and next to one another
     */ // Ensure it is array
    pvs = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(pvs);
    // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pvs)) return [];
    // Generate create list to not change original one
    pvs = pvs.map((x)=>x);
    // Dedupe on id
    //pvs = [...new Set(pvs.map((x) => x?.['@id'] || x?.id ))];
    // Sort 
    pvs = $409aaf2b232e73d2$var$sort(pvs);
    // Dedupe on isSame
    let i = 0;
    while(i < pvs.length - 2){
        while($409aaf2b232e73d2$var$isSame(pvs?.[i], pvs?.[i + 1]))pvs = pvs.toSpliced(i + 1, 1);
        i += 1;
    }
    return pvs;
}



const $3766123d98edc643$export$36b1aac33f5f1b68 = {
    record: {
        get: $3766123d98edc643$var$getHeadingRecord
    },
    heading1: $3766123d98edc643$var$_getHeading1,
    heading2: $3766123d98edc643$var$_getHeading2,
    headingDescription: $3766123d98edc643$var$_getHeadingDescription,
    headingDate: $3766123d98edc643$var$_getHeadingDate,
    headingDateSince: $3766123d98edc643$var$_getHeadingDateSince,
    headingDuration: $3766123d98edc643$var$_getHeadingDuration,
    headingStatus: $3766123d98edc643$var$_getHeadingStatus,
    headingImage: $3766123d98edc643$var$_getHeadingImage,
    headingStars: $3766123d98edc643$var$_getHeadingStars,
    headingTotal: $3766123d98edc643$var$_getHeadingTotal
};
function $3766123d98edc643$var$getHeadingRecord(record, locale) {
    /**
     * Returns the heading record
     * @param {Object} record
     * @returns {Object} The heading record
     */ // Array
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isArray(record)) return record.map((x)=>$3766123d98edc643$var$getHeadingRecord(x, locale));
    // Handle non object
    if (!(0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isObject(record)) return record;
    // return non thing
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(record?.["@type"])) return record;
    // Copy record
    record = JSON.parse(JSON.stringify(record));
    record._heading1 = $3766123d98edc643$var$_getHeading1(record);
    record._heading2 = $3766123d98edc643$var$_getHeading2(record);
    record._headingDescription = $3766123d98edc643$var$_getHeadingDescription(record);
    record._headingDate = $3766123d98edc643$var$_getHeadingDate(record);
    record._headingDateSince = $3766123d98edc643$var$_getHeadingDateSince(record);
    record._headingStatus = $3766123d98edc643$var$_getHeadingStatus(record);
    record._headingImage = $3766123d98edc643$var$_getHeadingImage(record);
    record._headingDuration = $3766123d98edc643$var$_getHeadingDuration(record);
    record._headingStars = $3766123d98edc643$var$_getHeadingStars(record);
    // Recurse for sub records
    for (let k of Object.keys(record))record[k] = $3766123d98edc643$var$getHeadingRecord(record[k], locale);
    // Return
    return record;
}
function $3766123d98edc643$var$_getHeading1(record) {
    let heading = "heading1";
    return $3766123d98edc643$var$_getHeadingX(record, heading);
}
function $3766123d98edc643$var$_getHeading2(record) {
    let heading = "heading2";
    return $3766123d98edc643$var$_getHeadingX(record, heading);
}
function $3766123d98edc643$var$_getHeadingDescription(record) {
    let heading = "headingDescription";
    return $3766123d98edc643$var$_getHeadingX(record, heading);
}
function $3766123d98edc643$var$_getHeadingDate(record) {
    let heading = "headingDate";
    return $3766123d98edc643$var$_getHeadingX(record, heading);
}
function $3766123d98edc643$var$_getHeadingStatus(record) {
    let heading = "headingStatus";
    return $3766123d98edc643$var$_getHeadingX(record, heading);
}
function $3766123d98edc643$var$_getHeadingImage(record) {
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(record?.contentUrl)) return record?.contentUrl;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(record?.image?.contentUrl)) return record?.image?.contentUrl;
    return null;
}
function $3766123d98edc643$var$_getHeadingDuration(record) {
    let date = $3766123d98edc643$var$_getHeadingDate(record);
    let duration = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).date.human.duration(date);
    return duration;
}
function $3766123d98edc643$var$_getHeadingDateSince(record) {
    let date = $3766123d98edc643$var$_getHeadingDate(record);
    let duration = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).date.human.duration(date);
    return duration;
}
function $3766123d98edc643$var$_getHeadingStars(record) {
    let score = record?.ratingValue;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(score)) return null;
    let runningScore = 0;
    let content = "";
    while(runningScore < score){
        content += $3766123d98edc643$var$fullStar();
        runningScore += 1;
    }
    if (score > runningScore && score < runningScore + 1) content += $3766123d98edc643$var$halfStar();
    while(runningScore < (score?.bestRating || 5)){
        content += $3766123d98edc643$var$emptyStar();
        runningScore += 1;
    }
    return content;
}
function $3766123d98edc643$var$_getHeadingTotal(record) {}
function $3766123d98edc643$var$_getHeadingX(record, heading) {
    /**
     * Returns the heading for a given record
     * @param {Object} record
     * @param {String} heading
     * @returns {String} The heading
     */ let headingValue = "";
    try {
        let record_type = record["@type"];
        let config = $3766123d98edc643$var$getConfig();
        let headingPossibilities = config?.[record_type]?.[heading];
        // Revert to thing if null
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(headingPossibilities)) headingPossibilities = config?.["Thing"]?.[heading];
        headingValue = null;
        // if heading2, ensures that it is not equal to heading1
        let comparaison = null;
        if (heading === "heading2") comparaison = $3766123d98edc643$var$_getHeadingX(record, "heading1");
        // Iterate through possibilities until a non null value is found
        for (let hp of (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(headingPossibilities)){
            headingValue = $3766123d98edc643$var$_getValue(record, heading, hp);
            if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(headingValue)) {
                if (heading == "heading2") {
                    if (comparaison != headingValue) break;
                } else break;
            }
        }
    } catch  {
        headingValue = record?.["@id"];
    }
    return headingValue;
}
function $3766123d98edc643$var$_getValue(record, heading, keys) {
    keys = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(keys);
    let values = [];
    for (let k of keys){
        let value = record[k];
        if (Array.isArray(value)) value = value[0];
        // Handle object as values (when listItem references item for example )
        if (value?.["@type"]) value = $3766123d98edc643$var$_getHeadingX(value, "heading1");
        if (value && value != null) values.push(value);
    }
    if (values.length == 0) return null;
    // Assemble values
    let headingValue = values.join(" ");
    return headingValue;
}
function $3766123d98edc643$var$getConfig() {
    let record = {
        Thing: {
            heading1: [
                "name",
                "url",
                [
                    "@type",
                    "@id"
                ]
            ],
            heading2: [
                "url",
                [
                    "@type",
                    "@id"
                ]
            ],
            headingDescription: [
                "description"
            ],
            headingDate: [
                ""
            ]
        },
        Article: {
            heading1: [
                "headline",
                "name",
                "url",
                "@id"
            ],
            heading2: [
                "author",
                "url",
                "@id"
            ],
            headingDescription: [
                "articleBody",
                "text",
                "description"
            ],
            headingDate: [
                "datePublished",
                "dateCreated"
            ]
        },
        Action: {
            heading1: [
                "name",
                "url",
                [
                    "@type",
                    "@id"
                ]
            ],
            heading2: [
                "author",
                "url",
                [
                    "@type",
                    "@id"
                ]
            ],
            headingDescription: [
                "articleBody",
                "text",
                "description"
            ],
            headingDate: [
                "datePublished",
                "dateCreated"
            ],
            headingStatus: [
                "actionStatus"
            ]
        },
        Person: {
            heading1: [
                [
                    "givenName",
                    "familyName"
                ],
                "name",
                "url",
                [
                    "@type",
                    "@id"
                ]
            ],
            heading2: [
                "title",
                "email",
                "url",
                [
                    "@type",
                    "@id"
                ]
            ],
            headingDescription: [
                "text",
                "description"
            ],
            headingDate: [
                "datePublished",
                "dateCreated"
            ],
            headingStatus: [
                "actionStatus"
            ]
        },
        ListItem: {
            heading1: [
                "item",
                "name",
                "url",
                [
                    "@type",
                    "@id"
                ]
            ],
            heading2: [
                "item",
                "url",
                [
                    "@type",
                    "@id"
                ]
            ],
            headingDescription: [
                "text",
                "description"
            ],
            headingDate: [
                "datePublished",
                "dateCreated"
            ],
            headingStatus: [
                "actionStatus"
            ]
        },
        CreativeWork: {
            heading1: [
                "headline",
                "name",
                "url",
                [
                    "@type",
                    "@id"
                ]
            ],
            heading2: [
                "author",
                "url",
                [
                    "@type",
                    "@id"
                ]
            ],
            headingDescription: [
                "articleBody",
                "text",
                "description"
            ],
            headingDate: [
                "datePublished",
                "dateCreated"
            ]
        },
        PostalAddress: {
            heading1: [
                "streetAddress",
                "name",
                [
                    "@type",
                    "@id"
                ]
            ],
            heading2: [
                [
                    "addressLocality",
                    "addressRegion",
                    "postalCode",
                    "addressCountry"
                ]
            ],
            headingDescription: [
                "text",
                "name",
                "description"
            ],
            headingDate: [
                "datePublished",
                "dateCreated"
            ]
        },
        QuantitativeValue: {
            heading1: [
                [
                    "value",
                    "unitText"
                ],
                [
                    "value",
                    "unitCode"
                ],
                "@id"
            ]
        },
        Order: {}
    };
    return record;
}
function $3766123d98edc643$var$fullStar() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>`;
}
function $3766123d98edc643$var$halfStar() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
          <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"/>
        </svg>`;
}
function $3766123d98edc643$var$emptyStar() {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>`;
}


const $7bb8d4569e1a97bb$export$1ef237150243f225 = {
    /**@constant
     * @type {Object}
     * @property {function} isValid - True if type, id and _propertyValues
     * @property {function} isThing - True if type and id
     * @property {function} toString - String representation
     * @property {function} isEmpty - True if no properties (except type and id)
     *
     *
     */ // Base
    isValid: $7bb8d4569e1a97bb$var$isValid,
    isThing: $7bb8d4569e1a97bb$var$isThing,
    toThing: $7bb8d4569e1a97bb$var$toThing,
    toString: $7bb8d4569e1a97bb$var$toString,
    toStringDetailed: $7bb8d4569e1a97bb$var$toStringDetailed,
    toJSON: $7bb8d4569e1a97bb$var$toJSON,
    isEmpty: $7bb8d4569e1a97bb$var$isEmpty,
    keys: $7bb8d4569e1a97bb$var$keys,
    clone: $7bb8d4569e1a97bb$var$clone,
    copy: $7bb8d4569e1a97bb$var$copy,
    hash: $7bb8d4569e1a97bb$var$hash,
    // Constructor
    new: $7bb8d4569e1a97bb$var$getNew,
    // Properties
    record_type: {
        get: $7bb8d4569e1a97bb$var$getRecordType,
        set: $7bb8d4569e1a97bb$var$setRecordType
    },
    record_id: {
        get: $7bb8d4569e1a97bb$var$getRecordId,
        set: $7bb8d4569e1a97bb$var$setRecordId
    },
    ref: {
        get: $7bb8d4569e1a97bb$var$getRef,
        set: $7bb8d4569e1a97bb$var$setRef
    },
    value: {
        get: $7bb8d4569e1a97bb$var$getValue,
        set: $7bb8d4569e1a97bb$var$setValue,
        add: $7bb8d4569e1a97bb$var$addValue,
        replace: $7bb8d4569e1a97bb$var$replace,
        delete: $7bb8d4569e1a97bb$var$deletePropertyValue
    },
    values: {
        get: $7bb8d4569e1a97bb$var$getValues,
        set: $7bb8d4569e1a97bb$var$setValues,
        add: $7bb8d4569e1a97bb$var$addValues,
        replace: $7bb8d4569e1a97bb$var$replace,
        delete: $7bb8d4569e1a97bb$var$deletePropertyValue
    },
    property: {
        get: $7bb8d4569e1a97bb$var$getValue,
        set: $7bb8d4569e1a97bb$var$addValue,
        add: $7bb8d4569e1a97bb$var$addValue,
        replace: $7bb8d4569e1a97bb$var$replaceValue,
        delete: $7bb8d4569e1a97bb$var$deletePropertyValue
    },
    propertyValue: {
        get: $7bb8d4569e1a97bb$var$getPropertyValue,
        set: $7bb8d4569e1a97bb$var$setValues,
        add: $7bb8d4569e1a97bb$var$addPropertyValue,
        replace: $7bb8d4569e1a97bb$var$replacePropertyValue,
        delete: $7bb8d4569e1a97bb$var$deletePropertyValue
    },
    propertyValues: {
        get: $7bb8d4569e1a97bb$var$getPropertyValues,
        set: $7bb8d4569e1a97bb$var$replacePropertyValue,
        add: $7bb8d4569e1a97bb$var$addPropertyValue,
        replace: $7bb8d4569e1a97bb$var$replacePropertyValue,
        delete: $7bb8d4569e1a97bb$var$deletePropertyValue
    },
    record: {
        get: $7bb8d4569e1a97bb$var$getRecord,
        set: $7bb8d4569e1a97bb$var$setRecord
    },
    htmlRecord: {
        get: $7bb8d4569e1a97bb$var$getHtmlRecord
    },
    system: {
        get: $7bb8d4569e1a97bb$var$getSystem,
        set: $7bb8d4569e1a97bb$var$setSystem
    },
    children: {
        length: $7bb8d4569e1a97bb$var$countChildren,
        get: $7bb8d4569e1a97bb$var$getChildren,
        replaceWithRef: $7bb8d4569e1a97bb$var$replaceChildrenWithRefRecord,
        replaceWithRecord: $7bb8d4569e1a97bb$var$replaceChildrenRefsWithRecord
    },
    flatten: $7bb8d4569e1a97bb$var$flatten,
    // Comparisons
    isSame: $7bb8d4569e1a97bb$var$isSame,
    isNotSame: $7bb8d4569e1a97bb$var$isNotSame,
    eq: $7bb8d4569e1a97bb$var$isEqual,
    ne: $7bb8d4569e1a97bb$var$isNotEqual,
    lt: $7bb8d4569e1a97bb$var$lt,
    gt: $7bb8d4569e1a97bb$var$gt,
    validate: $7bb8d4569e1a97bb$var$meetCondition,
    // Operations
    replace: $7bb8d4569e1a97bb$var$replace,
    merge: $7bb8d4569e1a97bb$var$merge,
    compile: $7bb8d4569e1a97bb$var$compileRecord,
    // Lists
    length: $7bb8d4569e1a97bb$var$length,
    get: $7bb8d4569e1a97bb$var$find,
    push: $7bb8d4569e1a97bb$var$push,
    delete: $7bb8d4569e1a97bb$var$pop,
    dedupe: $7bb8d4569e1a97bb$var$dedupe,
    sort: $7bb8d4569e1a97bb$var$sort,
    filter: $7bb8d4569e1a97bb$var$filter,
    mergeLists: $7bb8d4569e1a97bb$var$mergeLists
};
// -----------------------------------------------------
//  Setup 
// -----------------------------------------------------
// Counter to avoid duplicate values
let $7bb8d4569e1a97bb$var$POSITION = 0;
// -----------------------------------------------------
//  Base
// -----------------------------------------------------
function $7bb8d4569e1a97bb$var$isThing(value) {
    /**
     * Check if value is a thing (has type and id)
     * @param {any} value
     * @returns {boolean}
     */ if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).object.isValid(value) == false) return false;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull($7bb8d4569e1a97bb$var$getRecordType(value))) return false;
    return true;
}
function $7bb8d4569e1a97bb$var$isThingClass(value) {
    /**
     * Check if value is a thing (has type and id)
     * @param {any} value
     * @returns {boolean}
     * 
     */ return (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(value?.instanceof) ? true : false;
}
function $7bb8d4569e1a97bb$var$isValid(value) {
    /**
     * Check if value is valid system thing (type, and _propertyValues)
     * @param {*} value
     * @returns {boolean}
     */ try {
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(value)) return false;
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).object.isValid(value) == false) return false;
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull($7bb8d4569e1a97bb$var$getRecordType(value))) return false;
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(value?._version)) return false;
        return true;
    } catch  {
        return false;
    }
}
function $7bb8d4569e1a97bb$var$isEmpty(thing) {
    /**
     * Returns true if thing is empty (except for type and id)
     * @param {Object} thing
     * @returns {Boolean}
     */ for (let pv of (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(thing?._propertyValues)){
        if (pv?.object?.propertyID.startsWith("@")) continue;
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(pv?.object?.value)) return false;
    }
    return true;
}
function $7bb8d4569e1a97bb$var$toString(value) {
    /**
     * Returns a string representation of the thing(s)
     * @param {Object} value
     * @returns {String}
     */ if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).array.isArray(value)) return (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).textTable(value, [
        "@type",
        "@id"
    ]);
    return `${value?.["@type"] || ""} ${value?.["@id"] || ""}`;
}
function $7bb8d4569e1a97bb$var$toStringDetailed(value) {
    /**
     * Returns a string representation of the thing(s)
     * @param {Object} value
     * @returns {String}
     */ let content = $7bb8d4569e1a97bb$var$toString(value) + "\n" + (0, $409aaf2b232e73d2$export$e0d9d093805b3f23).toString(value?._propertyValues);
    return content;
}
function $7bb8d4569e1a97bb$var$toJSON(value) {
    /**
     * Returns a JSON representation of the thing(s)
     * @param {Object} value
     * @returns {String}
     */ // replace previousItem and nextitem with ref
    let record = JSON.parse(JSON.stringify(value));
    record = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).json.simplify(record);
    return record;
}
function $7bb8d4569e1a97bb$var$toThing(record_or_record_type, record_id, metadata, db) {
    /**
     * Convert to thing if valid record
     * @param {Object} record_or_record_type
     * @param {String} record_id
     * @param {Object} metadata
     * @param {Object} db - db containing things to be used as value references
     * @returns {Object}
     *
     */ // Skip if thing class object
    if ($7bb8d4569e1a97bb$var$isThingClass(record_or_record_type)) return record_or_record_type;
    // Populate with record if provided
    if ($7bb8d4569e1a97bb$var$isValid(record_or_record_type)) {
        // Change values to things if required 
        for (let pv of (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(record_or_record_type?._propertyValues))if ($7bb8d4569e1a97bb$var$isThing(pv?.object?.value)) pv.object.value = $7bb8d4569e1a97bb$var$toThing(pv?.object?.value, null, metadata);
        return record_or_record_type;
    } else if ($7bb8d4569e1a97bb$var$isThing(record_or_record_type)) {
        let thing = $7bb8d4569e1a97bb$var$getNew(record_or_record_type, record_id, metadata);
        thing = $7bb8d4569e1a97bb$var$setRecord(thing, record_or_record_type, metadata);
        return thing;
    } else if (typeof record_or_record_type === "string") {
        let thing = $7bb8d4569e1a97bb$var$getNew(record_or_record_type, record_id, metadata, db);
        return thing;
    }
    throw new Error("Value provided is not thing");
}
function $7bb8d4569e1a97bb$var$hash(record) {
    /**
     * Returns a hash of the record
     * @param {Object} record
     * @returns {String}
     * 
     */ if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(record)) return null;
    // Clone pvs
    let pvs = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(record?._propertyValues).map((x)=>(0, $409aaf2b232e73d2$export$e0d9d093805b3f23).clone(x));
    // Convert values to ref if required
    for (let pv of pvs)if ($7bb8d4569e1a97bb$var$isThing(pv.object.value)) pv.object.value = $7bb8d4569e1a97bb$var$getRef(pv.object.value);
    // Calculate hash
    let hash = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).hash.get(pvs);
    return hash;
}
function $7bb8d4569e1a97bb$var$copy(value) {
    /**
     * copy a record
     * @param {Object} record
     * @returns {Object} The cloned record
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(value)) return null;
    if (!$7bb8d4569e1a97bb$var$isValid(value)) throw new Error("Value provided is not thing");
    //
    let clone = $7bb8d4569e1a97bb$var$getNew(value);
    // Copy values
    for (let i of (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(value?._propertyValues) || [])clone._propertyValues.push((0, $409aaf2b232e73d2$export$e0d9d093805b3f23).clone(i));
    clone = $7bb8d4569e1a97bb$var$compileRecord(clone);
    // Return
    return clone;
}
function $7bb8d4569e1a97bb$var$clone(value) {
    /**
     * Clones a record
     * @param {Object} record
     * @returns {Object} The cloned record
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(value)) return null;
    if (!$7bb8d4569e1a97bb$var$isValid(value)) throw new Error("Value provided is not thing");
    //
    let clone = $7bb8d4569e1a97bb$var$getNew(value);
    // Copy values
    for (let i of (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(value?._propertyValues) || [])if (i?.object?.propertyID != "@id") clone._propertyValues.push((0, $409aaf2b232e73d2$export$e0d9d093805b3f23).clone(i));
    clone = $7bb8d4569e1a97bb$var$setRecordId(clone, (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).uuid.new());
    clone = $7bb8d4569e1a97bb$var$compileRecord(clone);
    // Return
    return clone;
}
// -----------------------------------------------------
//  Constructor
// -----------------------------------------------------
function $7bb8d4569e1a97bb$var$getNew(record_or_record_type, record_id, metadata, db) {
    /**
     * Creates a new thing thing
     * @param {object|string} record_or_record_type - Either a thing or a thing type
     * @param {string} record_id - The thing id
     * @param {object} metadata - The metadata
     * @returns {object} The new thing
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(record_or_record_type)) record_or_record_type = "thing";
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(record_id)) record_id = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).uuid.new();
    // Define new thing
    let thing = {
        "@type": $7bb8d4569e1a97bb$var$getRecordType(record_or_record_type, record_id),
        "@id": $7bb8d4569e1a97bb$var$getRecordId(record_or_record_type, record_id),
        _id: (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).uuid.new(),
        _version: "2.0",
        _dbCollection: null,
        _dbId: null,
        _record_type: $7bb8d4569e1a97bb$var$getRecordType(record_or_record_type, record_id),
        _record_id: $7bb8d4569e1a97bb$var$getRecordId(record_or_record_type, record_id),
        _headings: [],
        _refs: [],
        _propertyValues: []
    };
    // Add pv for type and id
    thing = $7bb8d4569e1a97bb$var$addValue(thing, "@type", thing?.["@type"]);
    thing = $7bb8d4569e1a97bb$var$addValue(thing, "@id", thing?.["@id"]);
    // Ensure @id is populated
    thing["@id"] = thing?.["@id"] || (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).uuid.new();
    thing["_record_id"] = thing["@id"];
    // Return
    return thing;
}
// -----------------------------------------------------
//  Properties
// -----------------------------------------------------
function $7bb8d4569e1a97bb$var$getRecordType(record_or_record_type, record_id) {
    /**
     * Returns the record type of a thing
     * @param {object|string} record_or_record_type - Either a thing or a thing type
     * @param {string} record_id - The thing id
     * @returns {string} The record type
     */ let value = record_or_record_type?.["@type"] || record_or_record_type?.record_type || record_or_record_type;
    if (typeof value != "string") return null;
    return value;
}
function $7bb8d4569e1a97bb$var$setRecordType(thing, value, metadata) {
    /**
     * Sets the record type of a thing
     * @param {object} thing - The thing
     * @param {string} record_type - The record type
     * @param {object} metadata - The metadata
     * @returns {object} The thing
     */ thing["@type"] = value;
    thing = $7bb8d4569e1a97bb$var$replacePropertyValue(thing, "@type", value, metadata);
    return thing;
}
function $7bb8d4569e1a97bb$var$getRecordId(record_or_record_type, record_id) {
    /**
     * Returns the thing id
     * @param {object|string} record_or_record_type - Either a thing or a thing type
     * @param {string} record_id - The thing id
     * @returns {string} The thing id
     */ let value = record_or_record_type?.["@id"] || record_or_record_type?.record_id || record_id;
    if (typeof value != "string") return null;
    return value;
}
function $7bb8d4569e1a97bb$var$setRecordId(thing, value, metadata) {
    /**
     * Sets the record id of a thing
     * @param {object} thing - The thing
     * @param {string} record_type - The record type
     * @param {object} metadata - The metadata
     */ thing["@id"] = value;
    thing = $7bb8d4569e1a97bb$var$replacePropertyValue(thing, "@id", value, metadata);
    return thing;
}
function $7bb8d4569e1a97bb$var$getRef(record_or_record_type, record_id) {
    /**
     * Returns the ref for a thing
     * @param {object|string} record_or_record_type - Either a thing or a thing type
     * @param {string} record_id - The thing id
     * @returns {string} The ref
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(record_or_record_type)) return null;
    let ref = {
        "@type": $7bb8d4569e1a97bb$var$getRecordType(record_or_record_type, record_id),
        "@id": $7bb8d4569e1a97bb$var$getRecordId(record_or_record_type, record_id)
    };
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(ref?.["@type"]) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(ref?.["@id"])) return ref;
    return null;
}
function $7bb8d4569e1a97bb$var$setRef(thing, record_or_record_type, record_id) {
    /**
     * Setds the ref for a thing
     * @param {object|string} record_or_record_type - Either a thing or a thing type
     * @param {string} record_id - The thing id
     * @returns {string} The ref
     */ if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thing)) thing = $7bb8d4569e1a97bb$var$getNew(record_or_record_type, record_id);
    thing = $7bb8d4569e1a97bb$var$setRecordType(thing, record_or_record_type, record_id);
    thing = $7bb8d4569e1a97bb$var$setRecordId(thing, record_or_record_type, record_id);
    return thing;
}
function $7bb8d4569e1a97bb$var$countChildren(thing, deep = true) {
    /**
     * Counts the number of children
     * @param {object} thing - The thing
     * @param {boolean} deep - Whether to count children of children
     * @returns {number} The number of children
     * 
     */ return $7bb8d4569e1a97bb$var$getChildren(thing, deep).length || 0;
}
function $7bb8d4569e1a97bb$var$getChildren(thing, deep = true, parentThings = []) {
    /**
     * Returns all child things in thing (as values)
     * @param {object} thing
     * @param {boolean} deep - If true, returns all children recursively
     * @returns {object[]}
     *
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thing)) return [];
    if (!$7bb8d4569e1a97bb$var$isValid(thing)) throw new Error("Value provided is not thing");
    // Handle circular references
    if ($7bb8d4569e1a97bb$var$isThingClass(thing) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull($7bb8d4569e1a97bb$var$find(parentThings, thing))) return [];
    parentThings.push(thing);
    //
    let results = [];
    for (let pv of (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(thing?._propertyValues))if ($7bb8d4569e1a97bb$var$isThing(pv?.object?.value) && pv?.object?.propertyID != "previousItem" && pv?.object?.propertyID != "nextItem") {
        results.push(pv?.object?.value);
        if (deep == true) results = results.concat($7bb8d4569e1a97bb$var$getChildren(pv?.object?.value, deep, parentThings));
    }
    // 
    results = results.filter((x)=>(0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(x));
    // Dedupe
    results = $7bb8d4569e1a97bb$var$dedupe(results);
    return results;
}
function $7bb8d4569e1a97bb$var$keys(thing) {
    /**
     * Returns all propertyIDs in thing
     * @param {object} thing
     * @returns {string[]}
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thing)) return [];
    if (!$7bb8d4569e1a97bb$var$isValid(thing)) throw new Error("Value provided is not thing");
    let propertyIDs = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(thing?._propertyValues || []).map((pv)=>pv?.object?.propertyID);
    propertyIDs = [
        ...new Set(propertyIDs)
    ];
    propertyIDs = propertyIDs.filter((x)=>!x.startsWith("@"));
    propertyIDs = propertyIDs.sort();
    return propertyIDs;
}
// -----------------------------------------------------
//  Properties
// -----------------------------------------------------
function $7bb8d4569e1a97bb$var$getValue(thing, propertyID, db) {
    /**
     * Returns the best value of a property
     * @param {object} thing - The thing
     * @param {string} propertyID - The property id
     * @param {object} db - The database of things
     * @returns {object|string|any} The value
     */ let values = $7bb8d4569e1a97bb$var$getValues(thing, propertyID, db);
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(values) || values.length == 0) return null;
    let value = values[0];
    return value;
}
function $7bb8d4569e1a97bb$var$setValue(thing, propertyID, value, metadata) {
    /**
     * Sets the value of a property
     * @param {object} thing - The thing
     * @param {string} propertyID - The property id
     * @param {object} value - The value
     * @param {object} metadata - The metadata
     * @returns {object} The thing
     */ return $7bb8d4569e1a97bb$var$replacePropertyValue(thing, propertyID, value, metadata, null);
}
function $7bb8d4569e1a97bb$var$addValue(thing, propertyID, value, metadata) {
    /**
     * Sets the value of a property
     * @param {object} thing - The thing
     * @param {string} propertyID - The property id
     * @param {object} value - The value
     * @param {object} metadata - The metadata
     * @returns {object} The thing
     */ return $7bb8d4569e1a97bb$var$addPropertyValue(thing, propertyID, value, metadata);
}
function $7bb8d4569e1a97bb$var$replaceValue(thing, propertyID, value, metadata, replacee) {
    /**
     * Sets the value of a property
     * @param {object} thing - The thing
     * @param {string} propertyID - The property id
     * @param {object} value - The value
     * @param {object} metadata - The metadata
     * @returns {object} The thing
     */ return $7bb8d4569e1a97bb$var$replacePropertyValue(thing, propertyID, value, metadata, replacee);
}
function $7bb8d4569e1a97bb$var$deleteValue(thing, propertyID, value, metadata) {
    /**
     * Sets the value of a property
     * @param {object} thing - The thing
     * @param {string} propertyID - The property id
     * @param {object} value - The value
     * @param {object} metadata - The metadata
     * @returns {object} The thing
     */ return $7bb8d4569e1a97bb$var$deletePropertyValue(thing, propertyID, value, metadata);
}
function $7bb8d4569e1a97bb$var$getValues(thing, propertyID, db) {
    /**
     * Returns the best value of a property
     * @param {object} thing - The thing
     * @param {string} propertyID - The property id
     * @param {object} db - The database of things
     * @returns {object|string|any} The value
     */ // If not system, return normal value 
    if ($7bb8d4569e1a97bb$var$isThing(thing) && !$7bb8d4569e1a97bb$var$isValid(thing)) return (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).dot.get(propertyID, thing);
    let pvs = $7bb8d4569e1a97bb$var$getPropertyValues(thing, propertyID);
    let values = pvs.map((x)=>x?.object?.value);
    values = values.map((x)=>$7bb8d4569e1a97bb$var$isThing(x) && $7bb8d4569e1a97bb$var$isValid(x) && !$7bb8d4569e1a97bb$var$isThingClass(x) ? $7bb8d4569e1a97bb$var$getRecord(x) : x);
    return values;
}
function $7bb8d4569e1a97bb$var$setValues(thing, propertyID, values, metadata) {
    /**
     * Sets the value of a property
     * @param {object} thing - The thing
     * @param {string} propertyID - The property id
     * @param {object} value - The value
     * @param {object} metadata - The metadata
     * @returns {object} The thing
     */ return $7bb8d4569e1a97bb$var$replacePropertyValue(thing, propertyID, values, metadata);
}
function $7bb8d4569e1a97bb$var$addValues(thing, propertyID, values, metadata) {
    /**
     * Sets the value of a property
     * @param {object} thing - The thing
     * @param {string} propertyID - The property id
     * @param {object} value - The value
     * @param {object} metadata - The metadata
     * @returns {object} The thing
     */ return $7bb8d4569e1a97bb$var$addPropertyValue(thing, propertyID, values, metadata);
}
function $7bb8d4569e1a97bb$var$replaceValues(thing, propertyID, values, metadata, replacee) {
    /**
     * Replace the value of a property
     * @param {object} thing - The thing
     * @param {string} propertyID - The property id
     * @param {object} value - The value
     * @param {object} metadata - The metadata
     * @returns {object} The thing
     */ return $7bb8d4569e1a97bb$var$replacePropertyValue(thing, propertyID, values, metadata, replacee);
}
function $7bb8d4569e1a97bb$var$deleteValues(thing, propertyID, values, metadata) {
    /**
     * Sets the value of a property
     * @param {object} thing - The thing
     * @param {string} propertyID - The property id
     * @param {object} value - The value
     * @param {object} metadata - The metadata
     * @returns {object} The thing
     */ return $7bb8d4569e1a97bb$var$deletePropertyValue(thing, propertyID, values, metadata);
}
// -----------------------------------------------------
//  Property values
// -----------------------------------------------------
function $7bb8d4569e1a97bb$var$getMaxPosition(thing, metadata) {
    /**
     * Returns the max position of a thing in its parent
     * @param {object} thing - The thing
     * @returns {number} The maxposition
     */ let pvs = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(thing._propertyValues);
    if (pvs.length == 0) return 0;
    let maxItem = pvs.reduce((maxItem, item)=>maxItem.metadata.position > item.metadata.position ? maxItem : item);
    let position = maxItem.metadata.position + 1;
    position = position > $7bb8d4569e1a97bb$var$POSITION ? position : $7bb8d4569e1a97bb$var$POSITION;
    $7bb8d4569e1a97bb$var$POSITION = position + 1;
    return position;
}
function $7bb8d4569e1a97bb$var$getPropertyValue(thing, propertyID, db) {
    /**
     * Return the best property value of a property
     * @param {object} thing - The thing
     * @param {string} propertyID - The property id
     * @param {object} db - The database of things
     * @returns {object|string|any} The value
     */ let values = $7bb8d4569e1a97bb$var$getPropertyValues(thing, propertyID, db);
    return values?.[0] || [];
}
function $7bb8d4569e1a97bb$var$getPropertyValues(thing, propertyID, db) {
    /**
     * Returns all values for a propertyID
     * @param {Object} thing
     * @param {String} propertyID
     * @param {Object} db - array containing thing references
     * @param {Array} db - The array of things
     * @returns {Array} Array of propertyValues (in system format)
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thing)) return [];
    if (!$7bb8d4569e1a97bb$var$isValid(thing)) throw new Error("Value provided is not thing");
    // Initialize value
    let result;
    let propertyPath = propertyID;
    let pvs;
    // Iterate through property path (element1[0].element2[1]...)
    while((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(propertyPath)){
        // If value is array, assume first element
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).array.isArray(thing)) thing = thing[0] || [];
        // If no values, return null
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thing)) return [];
        // Get latest thing from db (if db provided)
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(db) && $7bb8d4569e1a97bb$var$isThing(thing)) thing = $7bb8d4569e1a97bb$var$find(db, thing) || thing;
        // Get first element of property path
        let propertyIDElement = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).dot.propertyPath.getCurrentKey(propertyPath);
        let position = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).dot.propertyPath.getCurrentPosition(propertyPath);
        propertyPath = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).dot.propertyPath.getNextItems(propertyPath);
        // Get pvs for propertyID
        pvs = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(thing._propertyValues || []);
        pvs = pvs.filter((pv)=>pv.object.propertyID == propertyIDElement);
        pvs = (0, $409aaf2b232e73d2$export$e0d9d093805b3f23).compile(pvs);
        if (propertyIDElement == "itemListElement") pvs.sort((a, b)=>{
            if (($7bb8d4569e1a97bb$var$getValue(a?.object?.value, "position") || 0) < ($7bb8d4569e1a97bb$var$getValue(b?.object?.value, "position") || 0)) return -1;
            else if (($7bb8d4569e1a97bb$var$getValue(a?.object?.value, "position") || 0) < ($7bb8d4569e1a97bb$var$getValue(b?.object?.value, "position") || 0)) return 1;
            else return 0;
        });
        // Get values from pvs
        result = pvs.map((pv)=>pv?.object?.value);
        // Get position if one
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(position)) {
            pvs = pvs?.[position] || null;
            result = result?.[position] || null;
        }
        // Set thing to result for next iteration
        thing = result;
    }
    // To array
    pvs = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(pvs);
    // Return
    return pvs;
}
function $7bb8d4569e1a97bb$var$replacePropertyValue(thing, propertyID, value, metadata, replacee, recompileFlag = true) {
    /**
     * Sets a value for a propertyID
     * @param {Object} thing
     * @param {String} propertyID
     * @param {string|Array|Object} value
     * @returns {Object} The thing
     *
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thing)) throw new Error("Value provided is not thing");
    if (!$7bb8d4569e1a97bb$var$isValid(thing)) throw new Error("Value provided is not thing");
    // Initialize values
    let values = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(value);
    metadata = metadata || {};
    let position = $7bb8d4569e1a97bb$var$getMaxPosition(thing, metadata);
    // Convert values to thing if required
    values = values.map((x)=>$7bb8d4569e1a97bb$var$isThing(x) ? $7bb8d4569e1a97bb$var$toThing(x, null, metadata) : x);
    // Convert value to ref if previousItem or nextItem
    propertyID == "previousItem" || propertyID;
    // First element replaces previous (replace)
    position += 1;
    metadata = JSON.parse(JSON.stringify(metadata));
    metadata.position = position;
    thing._propertyValues.push((0, $409aaf2b232e73d2$export$e0d9d093805b3f23).new.replace(propertyID, values[values.length - 1], metadata, replacee));
    // Next elements are added (add)
    let nextValues = values.slice(0, values.length - 1);
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(nextValues)) thing = $7bb8d4569e1a97bb$var$addPropertyValue(thing, propertyID, nextValues, metadata);
    // Recalculate normal record value
    if (recompileFlag == true) thing = $7bb8d4569e1a97bb$var$compileRecord(thing, propertyID);
    // Return
    return thing;
}
function $7bb8d4569e1a97bb$var$addPropertyValue(thing, propertyID, value, metadata, recompileFlag = true) {
    /**
     * Adds a value for a propertyID
     * @param {Object} thing
     * @param {String} propertyID
     * @param {string|Array|Object} value
     * @returns {Object} The thing
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thing)) throw new Error("Value provided is not thing");
    if (!$7bb8d4569e1a97bb$var$isValid(thing)) throw new Error("Value provided is not thing");
    // Initialize values
    let values = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(value);
    metadata = metadata || {};
    let position = $7bb8d4569e1a97bb$var$getMaxPosition(thing, metadata);
    thing._propertyValues = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(thing?._propertyValues);
    // Convert values to thing if required
    values = values.map((x)=>$7bb8d4569e1a97bb$var$isThing(x) ? $7bb8d4569e1a97bb$var$toThing(x, null, metadata) : x);
    // Convert value to ref if previousItem or nextItem
    propertyID == "previousItem" || propertyID;
    // add values
    for(let i = values.length - 1; i >= 0; i--){
        let v = values[i];
        position += 1;
        metadata = JSON.parse(JSON.stringify(metadata));
        metadata.position = position;
        let pv = (0, $409aaf2b232e73d2$export$e0d9d093805b3f23).new.add(propertyID, v, metadata);
        thing._propertyValues.push(pv);
    }
    // Recalculate normal record value
    if (recompileFlag == true) thing = $7bb8d4569e1a97bb$var$compileRecord(thing, propertyID);
    return thing;
}
function $7bb8d4569e1a97bb$var$deletePropertyValue(thing, propertyID, value, metadata, recompileFlag = true) {
    /**
     * Adds a value for a propertyID
     * @param {Object} thing
     * @param {String} propertyID
     * @param {string|Array|Object} value
     * @returns {Object} The thing
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thing)) throw new Error("Value provided is not thing");
    if (!$7bb8d4569e1a97bb$var$isValid(thing)) throw new Error("Value provided is not thing");
    // Initialize values
    let values = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(value);
    metadata = metadata || {};
    let position = $7bb8d4569e1a97bb$var$getMaxPosition(thing, metadata);
    thing._propertyValues = thing?._propertyValues || [];
    // Convert values to thing if required
    values = values.map((x)=>$7bb8d4569e1a97bb$var$isThing(x) ? $7bb8d4569e1a97bb$var$toThing(x, null, metadata) : x);
    // Convert value to ref if previousItem or nextItem
    propertyID == "previousItem" || propertyID;
    // Handle case where no value provided (delete everything)
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(values)) {
        position += 1;
        metadata = JSON.parse(JSON.stringify(metadata));
        metadata.position = position;
        thing._propertyValues.push((0, $409aaf2b232e73d2$export$e0d9d093805b3f23).new.delete(propertyID, null, metadata));
    }
    // add values
    for (let v of values){
        position += 1;
        metadata = JSON.parse(JSON.stringify(metadata));
        metadata.position = position;
        thing._propertyValues.push((0, $409aaf2b232e73d2$export$e0d9d093805b3f23).new.delete(propertyID, v, metadata));
    }
    // Recalculate normal record value
    if (recompileFlag == true) thing = $7bb8d4569e1a97bb$var$compileRecord(thing, propertyID);
    return thing;
}
// -----------------------------------------------------
//  Comment
// -----------------------------------------------------
function $7bb8d4569e1a97bb$var$flatten(thing) {
    /**
     * Returns a flattened thing
     * @param {Object} thing
     * @returns {Array} Array of values in system format
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thing)) return [];
    if (!$7bb8d4569e1a97bb$var$isValid(thing)) throw new Error("Value provided is not thing");
    // Get record of thing class object
    thing = thing?._systemRecord || thing;
    let results = [
        thing
    ];
    // Get children
    results = results.concat($7bb8d4569e1a97bb$var$getChildren(thing));
    // Replace children with refs
    results = results.map((x)=>$7bb8d4569e1a97bb$var$replaceChildrenWithRefRecord(x));
    // Sort
    results = $7bb8d4569e1a97bb$var$sort(results, "@id", "asc");
    results = $7bb8d4569e1a97bb$var$sort(results, "@type", "asc");
    // Dedupe
    results = $7bb8d4569e1a97bb$var$dedupe(results);
    // Return
    return results;
}
// -----------------------------------------------------
//  Comparisons
// -----------------------------------------------------
function $7bb8d4569e1a97bb$var$isSame(thing1, thing2) {
    /**
     * Returns true if two things are the same type and id
     * @param {Object} thing1
     * @param {Object} thing2
     * @returns {boolean}
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thing1)) throw new Error("Value provided is not thing");
    if (!$7bb8d4569e1a97bb$var$isThing(thing1)) return false;
    if (!$7bb8d4569e1a97bb$var$isThing(thing2)) return false;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull($7bb8d4569e1a97bb$var$getRecordType(thing1))) return false;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull($7bb8d4569e1a97bb$var$getRecordId(thing1))) return false;
    if ($7bb8d4569e1a97bb$var$getRecordType(thing1) != $7bb8d4569e1a97bb$var$getRecordType(thing2)) return false;
    if ($7bb8d4569e1a97bb$var$getRecordId(thing1) != $7bb8d4569e1a97bb$var$getRecordId(thing2)) return false;
    return true;
}
function $7bb8d4569e1a97bb$var$isNotSame(thing1, thing2) {
    /**
     * Returns true if two things are not the same type and id
     * @param {Object} thing1
     * @param {Object} thing2
     * @returns {boolean}
     */ return !$7bb8d4569e1a97bb$var$isSame(thing1, thing2);
}
function $7bb8d4569e1a97bb$var$isEqual(thing1, thing2) {
    /**
     * Returns true if two things are exactly the same
     * @param {Object} thing1
     * @param {Object} thing2
     * @returns {boolean}
     */ if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thing1) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thing2)) return true;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thing1) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(thing2)) return false;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(thing1) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thing2)) return false;
    // Ensure hash is populated
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thing1?._hash)) thing1._hash = $7bb8d4569e1a97bb$var$hash(thing1);
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thing2?._hash)) thing2._hash = $7bb8d4569e1a97bb$var$hash(thing2);
    // Test equality 
    if (thing1._hash == thing2._hash) return true;
    return false;
}
function $7bb8d4569e1a97bb$var$isNotEqual(thing1, thing2) {
    /**
     * Returns true if two things are not exactly the same
     * @param {Object} thing1
     * @param {Object} thing2
     * @returns {boolean}
     */ return !$7bb8d4569e1a97bb$var$isEqual(thing1, thing2);
}
function $7bb8d4569e1a97bb$var$lt(thing1, thing2) {
    /**
     * Returns true if thing1 is less than thing2
     * @param {Object} thing1
     * @param {Object} thing2
     * @returns {boolean}
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thing1)) throw new Error("Value provided is not thing");
    if (!$7bb8d4569e1a97bb$var$isValid(thing1)) throw new Error("Value provided is not thing");
    // Start with position if exist
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(thing1?.position) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thing2?.position)) return true;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thing1?.position) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(thing2?.position)) return false;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(thing1?.position) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(thing2?.position)) {
        if (thing1?.position < thing2?.position) return true;
        if (thing1?.position > thing2?.position) return false;
    }
    // record type
    if ($7bb8d4569e1a97bb$var$getRecordType(thing1) < $7bb8d4569e1a97bb$var$getRecordType(thing2)) return true;
    if ($7bb8d4569e1a97bb$var$getRecordType(thing1) > $7bb8d4569e1a97bb$var$getRecordType(thing2)) return false;
    // Record id
    if ($7bb8d4569e1a97bb$var$getRecordId(thing1) < $7bb8d4569e1a97bb$var$getRecordId(thing2)) return true;
    if ($7bb8d4569e1a97bb$var$getRecordId(thing1) > $7bb8d4569e1a97bb$var$getRecordId(thing2)) return false;
    return false;
}
function $7bb8d4569e1a97bb$var$gt(thing1, thing2) {
    /**
     * Returns true if thing1 is greater than thing2
     * @param {Object} thing1
     * @param {Object} thing2
     * @returns {boolean}
     *
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thing1)) throw new Error("Value provided is not thing");
    if (!$7bb8d4569e1a97bb$var$isValid(thing1)) throw new Error("Value provided is not thing");
    // Start with position if exist
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(thing1?.position) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thing2?.position)) return false;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thing1?.position) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(thing2?.position)) return true;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(thing1?.position) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(thing2?.position)) {
        if (thing1?.position < thing2?.position) return false;
        if (thing1?.position > thing2?.position) return true;
    }
    // Record type
    if (thing1.thing_type > thing2.thing_type) return true;
    if (thing1.thing_type < thing2.thing_type) return false;
    // Record id
    if (thing1.record_id > thing2.record_id) return true;
    if (thing1.record_id < thing2.record_id) return false;
    return false;
}
function $7bb8d4569e1a97bb$var$meetCondition(thing, conditions) {
    /**
     * Returns true if thing meets conditions
     * @param {Object} thing
     * @param {Object} conditions
     * @returns {boolean}
     *
     */ //todo: error when condition is weird
    return (0, $a6f8f0c2e2f67514$export$4e14e39b01a79427).test(thing, conditions) || false;
}
// -----------------------------------------------------
//  Record import export
// -----------------------------------------------------
function $7bb8d4569e1a97bb$var$getHtmlRecord(thing) {
    /**
     * Returns the record with headings
     * @param {Object} thing
     * @returns {Object}
     * 
     */ let record = $7bb8d4569e1a97bb$var$getRecord(thing);
    let headings = $7bb8d4569e1a97bb$var$getHeadings(thing);
    record = {
        ...headings,
        ...record
    };
    return record;
}
function $7bb8d4569e1a97bb$var$getRecord(thing, parentThings = []) {
    /**
     * Returns a record from a thing without propertyValues
     * @param {Object} thing
     * @param {Array} parentThings list of parent things to avoid circular references
     * @returns {Object}
     *
     */ // Handle arrays
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isArray(thing)) return thing.map((x)=>$7bb8d4569e1a97bb$var$getRecord(x, parentThings));
    // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thing)) return {};
    if (!$7bb8d4569e1a97bb$var$isValid(thing) && $7bb8d4569e1a97bb$var$isThing(thing)) return thing;
    if (!$7bb8d4569e1a97bb$var$isValid(thing)) throw new Error("Value provided is not thing");
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thing?._propertyValues)) return null;
    // Check if thing in parentthing, if so return ref
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull($7bb8d4569e1a97bb$var$find(parentThings, thing))) return $7bb8d4569e1a97bb$var$getRef(thing);
    // Add it self to list of parentThings
    parentThings.push(thing);
    //
    let record = {
        "@type": $7bb8d4569e1a97bb$var$getRecordType(thing),
        "@id": $7bb8d4569e1a97bb$var$getRecordId(thing)
    };
    // Get propertyIDs
    let pIDs = $7bb8d4569e1a97bb$var$keys(thing);
    // Get values
    for (let p of pIDs){
        let values = $7bb8d4569e1a97bb$var$getValues(thing, p);
        // Convert values to record if needed
        let newValues = [];
        for (let v of values){
            if ($7bb8d4569e1a97bb$var$isValid(v)) v = $7bb8d4569e1a97bb$var$getRecord(v, parentThings);
            newValues.push(v);
        }
        record[p] = newValues;
    }
    // Remove thing class objects
    record = JSON.parse(JSON.stringify(record));
    // Simplify thing
    record = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).json.simplify(record);
    // Return
    return record;
}
function $7bb8d4569e1a97bb$var$setRecord(thing, record, metadata, db) {
    /**
     * Import a record
     * @param {Object} thing
     * @param {String} propertyID
     * @param {string|Array|Object} value
     * @returns {Object} The thing
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thing)) throw new Error("Value provided is not thing");
    if (!$7bb8d4569e1a97bb$var$isValid(thing)) throw new Error("Value provided is not thing");
    // Error handling
    db = db || [];
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(record)) return thing;
    if ($7bb8d4569e1a97bb$var$isValid(record)) return $7bb8d4569e1a97bb$var$setSystem(thing, record);
    // Delete existing propertyValues
    thing._propertyValues = [];
    // Set values, recompile flag to off for performance
    metadata = metadata || {};
    metadata.position = metadata?.position || $7bb8d4569e1a97bb$var$POSITION;
    $7bb8d4569e1a97bb$var$POSITION += 1;
    for (let k of Object.keys(record))if (!k.startsWith("_")) thing = $7bb8d4569e1a97bb$var$replacePropertyValue(thing, k, record[k], metadata, null, false);
    // Recompile
    thing = $7bb8d4569e1a97bb$var$compileRecord(thing, null);
    return thing;
}
function $7bb8d4569e1a97bb$var$getSystem(thing) {
    /**
     * Returns a system record from a thing
     * @param {Object} thing
     * @returns {Object}
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thing)) return null;
    if (!(0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isValid(thing)) throw new Error("Value provided is not thing");
    // Get record of thing class object
    if ($7bb8d4569e1a97bb$var$isThingClass(thing)) return thing.system;
    return thing;
}
function $7bb8d4569e1a97bb$var$setSystem(thing, record) {
    /**
     * Import a system record, replacing existing values
     * @param {Object} thing
     * @param {String} propertyID
     * @param {string|Array|Object} value
     * @returns {Object} The thing
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thing)) throw new Error("Value provided is not thing");
    if (!$7bb8d4569e1a97bb$var$isValid(thing)) throw new Error("Value provided is not thing");
    // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(record?._propertyValues)) throw new Error("Value provided is not thing");
    if (!$7bb8d4569e1a97bb$var$isValid(record)) throw new Error("Value provided is not thing");
    // Handle arrays
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isArray(thing)) return thing.map((x)=>$7bb8d4569e1a97bb$var$getRecord(x));
    // Error handling
    if (!$7bb8d4569e1a97bb$var$isValid(record)) return $7bb8d4569e1a97bb$var$setRecord(thing, record);
    // handle thing class object
    if ($7bb8d4569e1a97bb$var$isThingClass(thing)) {
        thing.system = record;
        return thing;
    }
    // Overwrite values
    for (let k of Object.keys(record))if (k.startsWith("_")) thing[k] = record[k];
    thing._propertyValues = thing?._propertyValues || [];
    // Update values to things
    for (let p of (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(thing?._propertyValues))if ($7bb8d4569e1a97bb$var$isThing(p?.object?.value)) p.object.value = $7bb8d4569e1a97bb$var$toThing(p?.object?.value);
    // Recompile record
    thing = $7bb8d4569e1a97bb$var$compileRecord(thing);
    return thing;
}
// -----------------------------------------------------
//  Operations
// -----------------------------------------------------
function $7bb8d4569e1a97bb$var$compileRecord(thing, propertyID, includeHeadings = false) {
    /**
     * Recompiles the values base don propertyValues
     * @param {Object} thing
     * @returns {Object}
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thing)) throw new Error("Value provided is not thing");
    if (!$7bb8d4569e1a97bb$var$isValid(thing)) throw new Error("Value provided is not thing");
    let record = thing?._system || thing;
    record._propertyValues = record?._propertyValues || [];
    // Define keys, if no key provided, uses all keys
    let propertyIDs = [
        propertyID
    ];
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(propertyIDs)) propertyIDs = $7bb8d4569e1a97bb$var$keys(record);
    // Assign values
    for (let p of propertyIDs){
        let values = $7bb8d4569e1a97bb$var$getValues(record, p);
        let newValues = [];
        for (let v of values){
            if ($7bb8d4569e1a97bb$var$isValid(v)) v = $7bb8d4569e1a97bb$var$getRecord(v);
            newValues.push(v);
        }
        record[p] = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).json.simplify(newValues);
    }
    //for (let propertyID of propertyIDs) {
    //    let values = getValues(record, propertyID)
    //    record[propertyID] = h.json.simplify(values)
    //}
    // Assign type and id
    let pvs = record?._propertyValues || [];
    let oldestPv;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(pvs)) oldestPv = pvs.reduce((maxItem, item)=>maxItem?.metadata?.createdDate > item?.metadata?.createdDate ? maxItem : item);
    record["@type"] = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(record?.["@type"])?.[0] || null;
    record["@id"] = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(record?.["@id"])?.[0] || null;
    record["_record_type"] = record?.["@type"];
    record["_record_id"] = record?.["@id"];
    record["_createdDate"] = oldestPv?.metadata?.createdDate;
    //record['_hash'] = hash(record)
    if (includeHeadings == true) {
        let headings = $7bb8d4569e1a97bb$var$getHeadings(record);
        for (let k of Object.keys(headings))if (k.startsWith("_")) record[k] = headings[k];
    }
    if ($7bb8d4569e1a97bb$var$isThingClass(thing)) thing.system = record;
    else thing = record;
    return thing;
}
function $7bb8d4569e1a97bb$var$getHeadings(thing) {
    /**
     * Returns the headings from a thing
     * @param {Object} thing
     * @returns {Object}
     * 
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thing)) throw new Error("Value provided is null");
    if (!$7bb8d4569e1a97bb$var$isValid(thing)) throw new Error("Value provided is not thing");
    return (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).heading.record.get(thing);
}
function $7bb8d4569e1a97bb$var$replaceChildrenWithRefRecord(thing) {
    /**
     * Replaces all children with ref records
     * @param {Object} thing
     * @returns {Object} The thing
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thing)) throw new Error("Value provided is not thing");
    if (!$7bb8d4569e1a97bb$var$isValid(thing)) throw new Error("Value provided is not thing");
    //
    for (let pv of (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(thing?._propertyValues))if ($7bb8d4569e1a97bb$var$isValid(pv?.object?.value)) pv.object.value = $7bb8d4569e1a97bb$var$getRef(pv?.object?.value);
    thing = $7bb8d4569e1a97bb$var$compileRecord(thing);
    return thing;
}
function $7bb8d4569e1a97bb$var$replaceChildrenRefsWithRecord(thing, records) {
    /**
     * Replaces all children refs with records from list
     * @param {Object} thing
     * @returns {Object} The thing
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thing)) throw new Error("Value provided is not thing");
    if (!$7bb8d4569e1a97bb$var$isValid(thing)) throw new Error("Value provided is not thing");
    //
    for (let pv of (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(thing?._propertyValues))if ($7bb8d4569e1a97bb$var$isThing(pv?.object?.value)) {
        let dd = $7bb8d4569e1a97bb$var$find(records, pv?.object?.value) || pv.object.value;
        pv.object.value = dd;
        pv.object.propertyID != "previousItem" && pv.object.propertyID;
    }
    thing = $7bb8d4569e1a97bb$var$compileRecord(thing);
    return thing;
}
function $7bb8d4569e1a97bb$var$replace(thing, oldValue, newValue) {
    /**
     * Replaces a value by another in a system thing
     * @param {Object} thing
     * @param {Object} oldValue
     * @param {Object} newValue
     * @returns {Object} The thing with modified values
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thing)) throw new Error("Value provided is not thing");
    if (!$7bb8d4569e1a97bb$var$isValid(thing)) throw new Error("Value provided is not thing");
    //
    for (let pv of thing?._propertyValues || []){
        let value = pv?.object?.value;
        // Replace value if same 
        if ($7bb8d4569e1a97bb$var$isThing(oldValue)) {
            if ($7bb8d4569e1a97bb$var$isSame(oldValue, pv.object.value)) pv.object.value = newValue;
        } else if (value === oldValue) pv.object.value = newValue;
    }
    // Recurse on children
    for (let t of $7bb8d4569e1a97bb$var$getChildren(thing))$7bb8d4569e1a97bb$var$replace(t, oldValue, newValue);
    return thing;
}
function $7bb8d4569e1a97bb$var$merge(thing1, thing2) {
    /**
     * Merges two things, return new combined thing
     * @param {Object} thing1
     * @param {Object} thing2
     * @returns {Object} The combined thing
     */ // Error handling
    if (!$7bb8d4569e1a97bb$var$isValid(thing1) && $7bb8d4569e1a97bb$var$isThing(thing1)) thing1 = $7bb8d4569e1a97bb$var$toThing(thing1);
    if (!$7bb8d4569e1a97bb$var$isValid(thing2) && $7bb8d4569e1a97bb$var$isThing(thing2)) thing2 = $7bb8d4569e1a97bb$var$toThing(thing2);
    if (!$7bb8d4569e1a97bb$var$isValid(thing1)) throw new Error("thing1 is not a thing");
    if (!$7bb8d4569e1a97bb$var$isValid(thing2)) throw new Error("thing2 is not a thing");
    if (!$7bb8d4569e1a97bb$var$isSame(thing1, thing2)) return thing1;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(thing1?.id) && thing1.id == thing2.id) return thing1;
    // Merge and dedupe
    let pvs = (0, $409aaf2b232e73d2$export$e0d9d093805b3f23).concat(thing1?._propertyValues, thing2?._propertyValues);
    // Reassign to new thing
    thing1._propertyValues = pvs;
    // Recompile
    thing1 = $7bb8d4569e1a97bb$var$compileRecord(thing1);
    // Return
    return thing1;
}
// -----------------------------------------------------
//  Array
// -----------------------------------------------------
function $7bb8d4569e1a97bb$var$length(things) {
    // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(things)) return 0;
    things = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(things);
    return things.length;
}
function $7bb8d4569e1a97bb$var$find(things, record_or_record_type, record_id) {
    /**
     * Returns the first thing that matches type and id
     * @param {Array} things to search from
     * @param {Object|String} record_or_record_type
     * @param {String} record_id
     * @returns {Object} The thing
     */ things = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(things);
    let ref = $7bb8d4569e1a97bb$var$getRef(record_or_record_type, record_id);
    let filteredRecords = things.filter((x)=>$7bb8d4569e1a97bb$var$isSame(x, ref));
    let result = filteredRecords?.[0] || null;
    return result;
}
function $7bb8d4569e1a97bb$var$push(things, thing) {
    /**
     * Add a thing to array. If exists, merge the things
     * @param {Array} things
     * @param {Object} thing to add
     * @returns {Array} The array with the thing added
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(thing)) return things;
    things = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(things);
    // List handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).array.isArray(thing)) {
        for (let x of thing)things = $7bb8d4569e1a97bb$var$push(things, x);
        return things;
    }
    // Error
    if (!$7bb8d4569e1a97bb$var$isValid(thing)) throw new Error("thing is not a thing");
    // Retrieve same things already in array    
    let currentRecords = things.filter((x)=>$7bb8d4569e1a97bb$var$isSame(x, thing));
    // Remove same things from array
    for (let r of currentRecords)things = $7bb8d4569e1a97bb$var$pop(things, r);
    // Merge same things
    for (let r of currentRecords)thing = $7bb8d4569e1a97bb$var$merge(thing, r);
    // Add  thing to array
    things.push(thing);
    // Return
    return things;
}
function $7bb8d4569e1a97bb$var$pop(things, thing_or_record_type, record_id) {
    /**
     * Remove a Thing from an array
     * @param {Array} things
     * @param {Object|String} thing_or_record_type
     * @param {String} record_id
     * @returns {Array} The array with the thing removed
     */ let toDeleteRef = $7bb8d4569e1a97bb$var$getRef(thing_or_record_type, record_id);
    for(let i = 0; i < things.length; i++)if ($7bb8d4569e1a97bb$var$isSame(things[i], toDeleteRef)) things = things.toSpliced(i, 1);
    return things;
}
function $7bb8d4569e1a97bb$var$dedupe(things) {
    /**
     * Removes duplicates from array
     * @param {Array} things
     * @returns {Array} The array without duplicates
     */ things = things.filter((x)=>(0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(x));
    // Ensure it is array
    things = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(things);
    // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(things)) return [];
    // Generate create list to not change original one
    things = things.map((x)=>x);
    let results = [];
    for (let r of things)results = $7bb8d4569e1a97bb$var$push(results, r);
    return results;
}
function $7bb8d4569e1a97bb$var$sort(things, sortBy, sortOrder) {
    /**
     * Sorts an array of things
     * @param {Array} things
     * @param {String} sortBy
     * @param {String} sortOrder
     * @returns {Array} The sorted array
     */ // Ensure it is array
    things = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(things);
    // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(things)) return null;
    // Generate create list to not change original one
    things = things.map((x)=>x);
    // Default sortBy and sortOrder
    sortBy = sortBy || "_createdDate";
    sortOrder = sortOrder || "desc";
    // Sort function
    function sortFunction(a, b) {
        let aValue = $7bb8d4569e1a97bb$var$getValue(a, sortBy);
        let bValue = $7bb8d4569e1a97bb$var$getValue(b, sortBy);
        if (aValue == bValue) return 0;
        if (sortOrder == "asc") return aValue < bValue ? -1 : 1;
        if (sortOrder == "desc") return aValue > bValue ? -1 : 1;
    }
    things = things.sort(sortFunction);
    return things;
}
function $7bb8d4569e1a97bb$var$filter(things, conditions) {
    /**
     * Filters an array of things
     * @param {Array} things
     * @param {Object} conditions
     * @returns {Array} The filtered array
     * @example
     */ // Ensure it is array
    things = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(things);
    // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(things)) return [];
    // Generate create list to not change original one
    things = things.map((x)=>x);
    // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(conditions)) return things;
    // Filter list
    let results = [];
    for (let r of things)if ($7bb8d4569e1a97bb$var$meetCondition(r, conditions)) results.push(r);
    return results;
}
function $7bb8d4569e1a97bb$var$mergeLists(things1, things2) {
    /**
     * Merges two lists of things
     * @param {Array} things1
     * @param {Array} things2
     * @returns {Array} The merged list
     */ things1 = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(things1);
    things2 = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(things2);
    things2.map((x)=>$7bb8d4569e1a97bb$var$push(things1, x));
    return things1;
}







const $444f5d32a598f4dd$export$4bb05bd0559c698f = {
    isValid: $444f5d32a598f4dd$var$isValid,
    toString: $444f5d32a598f4dd$var$toString,
    new: $444f5d32a598f4dd$var$newListItem,
    clone: $444f5d32a598f4dd$var$clone,
    toListItem: $444f5d32a598f4dd$var$toListItem,
    isSame: $444f5d32a598f4dd$var$isSame,
    isEmpty: $444f5d32a598f4dd$var$isEmpty,
    isEmpty: $444f5d32a598f4dd$var$isEmpty,
    filter: $444f5d32a598f4dd$var$filter,
    search: $444f5d32a598f4dd$var$search,
    first: $444f5d32a598f4dd$var$getFirstItem,
    last: $444f5d32a598f4dd$var$getLastItem,
    sort: $444f5d32a598f4dd$var$sortListItems,
    position: {
        get: $444f5d32a598f4dd$var$getPosition,
        set: $444f5d32a598f4dd$var$setPosition
    },
    item: {
        get: $444f5d32a598f4dd$var$getItem,
        set: $444f5d32a598f4dd$var$setItem
    },
    previousItem: {
        get: $444f5d32a598f4dd$var$getPreviousItem,
        set: $444f5d32a598f4dd$var$setPreviousItem
    },
    nextItem: {
        get: $444f5d32a598f4dd$var$getNextItem,
        set: $444f5d32a598f4dd$var$setNextItem
    },
    neighbors: {
        set: $444f5d32a598f4dd$var$setNeighbors,
        clear: $444f5d32a598f4dd$var$clearNeighbors
    }
};
function $444f5d32a598f4dd$var$isValid(value) {
    /**
     * Checks if the thing is valid listitem
     * @param {Object} thing The thing
     * @returns {Boolean} True if the thing is valid
     */ if ((value?.["@type"] || value?.record_type) == "ListItem") return true;
    return false;
}
function $444f5d32a598f4dd$var$toString(value) {
    /**
     * Converts the thing to a string
     * @param {Object} thing The thing
     * @returns {String} The string
     */ return `Item ${value?.position} - ${value?._heading1} p:${value.previousItem?.["@id"] || "NA"} n:${value.nextItem?.["@id"] || "NA"} `;
}
function $444f5d32a598f4dd$var$newListItem(position, item, metadata) {
    /**
     * Creates a new list item
     * @returns {Object} The item list
     *     
     */ let listItem = {
        "@type": "ListItem",
        "@id": (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).uuid.new(),
        item: item || null,
        position: position || null
    };
    listItem = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).toThing(listItem, null, metadata);
    return listItem;
}
function $444f5d32a598f4dd$var$toListItem(value, metadata) {
    /**
     * Converts the thing to a list
     * @param {Object} thing The thing
     * @returns {Array} The list
     */ value = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).toThing(value, null, metadata);
    if ($444f5d32a598f4dd$var$isValid(value)) return value;
    let newValue = $444f5d32a598f4dd$var$newListItem();
    newValue = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.add(newValue, "item", value);
    return newValue;
}
function $444f5d32a598f4dd$var$isEmpty(value) {
    /**
     * Checks if the thing is null
     * @param {Object} thing The thing
     * @returns {Boolean} True if the thing is null
     */ if (!$444f5d32a598f4dd$var$isValid(value)) return true;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull($444f5d32a598f4dd$var$getItem(value))) return true;
    return false;
}
function $444f5d32a598f4dd$var$clone(value) {
    /**
     * Clones the thing
     * @param {Object} thing The thing
     * @returns {Object} The cloned thing
     * 
     */ let clone = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).clone(value);
    clone = $444f5d32a598f4dd$var$setItem(clone, $444f5d32a598f4dd$var$getItem(value));
    clone = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.delete(clone, "position");
    clone = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.delete(clone, "previousItem");
    clone = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.delete(clone, "nextItem");
    return clone;
}
// -----------------------------------------------------
//  Comment 
// -----------------------------------------------------
function $444f5d32a598f4dd$var$getPosition(value) {
    /**
     * Gets the position of the thing
     * @param {Object} thing The thing
     * @returns {Number} The position
     */ if (!$444f5d32a598f4dd$var$isValid(value)) return null;
    let result = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.get(value, "position");
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(result)) return null;
    return result;
}
function $444f5d32a598f4dd$var$setPosition(value, position) {
    /**
     * Gets the position of the thing
     * @param {Object} thing The thing
     * @returns {Number} The position
     */ if (!$444f5d32a598f4dd$var$isValid(value)) throw new Error("Invalid thing");
    return (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.set(value, "position", position);
}
function $444f5d32a598f4dd$var$getItem(value) {
    /**
     * Gets the item from the list item
     * @param {Object} listItem The list item
     * @returns {Object} The item
     */ if (!$444f5d32a598f4dd$var$isValid(value)) return null;
    return (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.get(value, "item") || null;
}
function $444f5d32a598f4dd$var$setItem(value, item) {
    /**
     * Gets the item from the list item
     * @param {Object} listItem The list item
     * @returns {Object} The item
     */ if (!$444f5d32a598f4dd$var$isValid(value)) return null;
    return (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.set(value, "item", item) || null;
}
function $444f5d32a598f4dd$var$getPreviousItem(value, previousItem) {
    /**
     * return previous item
     * @param {Object} listItem The list item
     * @returns {Object} The item
     */ if (!$444f5d32a598f4dd$var$isValid(value)) return null;
    return (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.get(value, "previousItem") || null;
}
function $444f5d32a598f4dd$var$setPreviousItem(value, item) {
    /**
     * Gets the item from the list item
     * @param {Object} listItem The list item
     * @returns {Object} The item
     */ if (!$444f5d32a598f4dd$var$isValid(value)) return null;
    return (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.set(value, "previousItem", item);
}
function $444f5d32a598f4dd$var$getNextItem(value) {
    /**
     * return previous item
     * @param {Object} listItem The list item
     * @returns {Object} The item
     */ if (!$444f5d32a598f4dd$var$isValid(value)) return null;
    return (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.get(value, "nextItem") || null;
}
function $444f5d32a598f4dd$var$setNextItem(value, item) {
    /**
     * Gets the item from the list item
     * @param {Object} listItem The list item
     * @returns {Object} The item
     */ if (!$444f5d32a598f4dd$var$isValid(value)) return null;
    return (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.set(value, "nextItem", item);
}
function $444f5d32a598f4dd$var$clearNeighbors(value) {
    /**
     * Clears the neighbors of the thing
     * @param {Object} thing The thing
     * @returns {Object} The thing
     */ let previousItem = $444f5d32a598f4dd$var$getPreviousItem(value);
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(previousItem)) (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.set(value, "previousItem", null);
    let nextItem = $444f5d32a598f4dd$var$getNextItem(value);
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(nextItem)) value = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.set(value, "nextItem", null);
    return value;
}
function $444f5d32a598f4dd$var$lt(record1, record2) {
    /**
     * Checks if the first record is less than the second
     * @param {Object} record1 The first record
     * @param {Object} record2 The second record
     * @returns {Boolean} True if the first record is less than the second
     */ // Consider position first
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(record1?.position) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(record2?.position)) return false;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(record1?.position) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(record2?.position)) return true;
    if (record1.position < record2.position) return true;
    // Consider presence absence of next items 
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(record1?.previousItem) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(record2?.previousItem)) return true;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(record1?.previousItem) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(record2?.previousItem)) return false;
    return false;
}
function $444f5d32a598f4dd$var$gt(record1, record2) {
    /**
     * Checks if the first record is greater than the second
     * @param {Object} record1 The first record
     * @param {Object} record2 The second record
     * @returns {Boolean} True if the first record is greater than the second
     */ // Consider position first
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(record1?.position) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(record2?.position)) return true;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(record1?.position) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(record2?.position)) return false;
    if (record1?.position > record2.position) return true;
    // Consider presence absence of next items 
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(record1?.nextItem) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(record2?.nextItem)) return true;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(record1?.nextItem) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(record2?.nextItem)) return false;
    return false;
}
function $444f5d32a598f4dd$var$isSame(record1, record2) {
    /**
     * Checks if two list items are the same
     * @param {Object} record1 The first record
     * @param {Object} record2 The second record
     * @returns {Boolean} True if the two records are the same
     */ return (0, $7bb8d4569e1a97bb$export$1ef237150243f225).isSame(record1, record2);
}
function $444f5d32a598f4dd$var$setNeighbors(record, previousRecord, nextRecord) {
    /**
     * Sets the neighbors of a list item
     * @param {Object} record The record
     * @param {Object} previousRecord The previous record
     * @param {Object} nextRecord The next record
     * @returns {Object} The record
     */ record.previousItem = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).ref.get(previousRecord);
    record.nextItem = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).ref.get(nextRecord);
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(previousRecord)) previousRecord.nextItem = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).ref.get(record);
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(nextRecord)) nextRecord.previousItem = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).ref.get(record);
    return record;
}
// -----------------------------------------------------
//  Array 
// -----------------------------------------------------
function $444f5d32a598f4dd$var$search(values, conditions) {
    /**
     * Searches an array of things
     * @param {Array} things The things
     * @param {Object} conditions The conditions
     * @returns {Object} Te first listItem encountered
     */ // Ensure it is array
    return $444f5d32a598f4dd$var$filter(values, conditions)?.[0] || null;
}
function $444f5d32a598f4dd$var$filter(values, conditions) {
    /**
     * Filters an array of things
     * @param {Array} things The things
     * @param {Object} conditions The conditions
     * @returns {Array} The filtered array
     */ values = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(values);
    let results = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).filter(values, conditions);
    return results;
}
function $444f5d32a598f4dd$var$sortListItems(values) {
    /**
     * Sorts an array of things
     * @param {Array} things
     * @param {String} sortBy
     * @param {String} sortOrder
     */ values = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(values);
    values = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(values).sort(function(a, b) {
        if ($444f5d32a598f4dd$var$lt(a, b)) return -1;
        if ($444f5d32a598f4dd$var$gt(a, b)) return 1;
        return 0;
    });
    return values;
}
function $444f5d32a598f4dd$var$getFirstItem(values) {
    /**
     * Gets the first item of a list
     * @param {Object} itemList The list
     * @returns {Object} The first item
     */ values = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(values);
    return $444f5d32a598f4dd$var$search(values, {
        "position": 0
    }) || $444f5d32a598f4dd$var$search(values, {
        "previousItem": null
    }) || null;
}
function $444f5d32a598f4dd$var$getLastItem(values) {
    /**
     * Gets the last item of a list
     * @param {Object} itemList The list
     * @returns {Object} The first item
     */ values = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(values);
    let maxItem = null;
    for (let i of values)if (!maxItem || $444f5d32a598f4dd$var$getPosition(i) > $444f5d32a598f4dd$var$getPosition(maxItem)) maxItem = i;
    return maxItem || null;
}


const $5f93a651ba787782$export$9fe8be205aeaa496 = {
    isValid: $5f93a651ba787782$var$isValid,
    toString: $5f93a651ba787782$var$toString,
    toStringDetailed: $5f93a651ba787782$var$toStringDetailed,
    new: $5f93a651ba787782$var$newItemList,
    clone: $5f93a651ba787782$var$clone,
    isSame: $5f93a651ba787782$var$isSame,
    isEmpty: $5f93a651ba787782$var$isEmpty,
    isEmpty: $5f93a651ba787782$var$isEmpty,
    toItemList: $5f93a651ba787782$var$toItemList,
    length: $5f93a651ba787782$var$getLength,
    insert: $5f93a651ba787782$var$insert,
    clear: $5f93a651ba787782$var$clear,
    delete: $5f93a651ba787782$var$deleteItem,
    filter: $5f93a651ba787782$var$filter,
    search: $5f93a651ba787782$var$search,
    last: $5f93a651ba787782$var$getLastListItem,
    listItems: {
        get: $5f93a651ba787782$var$getListItems,
        set: $5f93a651ba787782$var$setListItems
    },
    items: {
        get: $5f93a651ba787782$var$getItems,
        set: $5f93a651ba787782$var$setItems
    }
};
function $5f93a651ba787782$var$isValid(things) {
    /**
     * Checks if the thing is valid
     * @param {Object} thing The thing
     * @returns {Boolean} True if the thing is valid
     */ if (things?.["@type"] == "ItemList") return true;
    return false;
}
function $5f93a651ba787782$var$toString(value) {
    /**
     * Converts the thing to a string
     * @param {Object} thing The thing
     * @returns {String} The string
     */ return `${value?.name} (${$5f93a651ba787782$var$getLength(value)})`;
}
function $5f93a651ba787782$var$toStringDetailed(value) {
    /**
     * Converts the thing to a string
     * @param {Object} thing The thing
     * @returns {String} The string
     */ let content = $5f93a651ba787782$var$toString(value);
    content += "\n";
    content += "-----------------------------------------------------";
    content += "\n";
    for (let li of $5f93a651ba787782$var$getListItems(value)){
        content += (0, $444f5d32a598f4dd$export$4bb05bd0559c698f).toString(li);
        content += "\n";
    }
    content += "-----------------------------------------------------";
    return content;
}
function $5f93a651ba787782$var$isSame(thing1, thing2) {
    /**
     * Checks if the two things are the same
     * @param {Object} thing1 The first thing
     * @param {Object} thing2 The second thing
     * @returns {Boolean} True if the two things are the same
     */ return;
}
// todo: add test to see if list is valid (no errands items)
// todo: add fn to fix invalid lists (reorder items)
// todo: add fn to resort list based on condittion
function $5f93a651ba787782$var$newItemList() {
    /**
     * Creates a new item list
     * @returns {Object} The item list
     *     
     */ let itemList = {
        "@type": "ItemList",
        "@id": (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).uuid.new(),
        itemListElement: []
    };
    return itemList;
}
function $5f93a651ba787782$var$isEmpty(itemList) {
    /**
     * Checks if the thing is null
     * @param {Object} thing The thing
     * @returns {Boolean} True if the thing is null
     */ if (!$5f93a651ba787782$var$isValid(itemList)) return true;
    if ($5f93a651ba787782$var$getLength(itemList) == 0) return true;
    return false;
}
function $5f93a651ba787782$var$clone(itemList) {
    /**
     * Clones the thing
     * @param {Object} thing The thing
     * @returns {Object} The cloned thing
     * 
     */ let listItems = $5f93a651ba787782$var$getListItems(itemList);
    // Clone itemList
    let clone = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).clone(itemList);
    // Remove existing itemListelements
    clone = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.delete(clone, "itemListElement");
    // Clone items
    let newListItems = listItems.map((x)=>(0, $444f5d32a598f4dd$export$4bb05bd0559c698f).clone(x));
    // Insert back items
    clone = $5f93a651ba787782$var$insert(clone, newListItems);
    return clone;
}
function $5f93a651ba787782$var$toItemList(itemList) {
    /**
     * Converts the thing to a list
     * @param {Object} thing The thing
     * @returns {Array} The list
     */ if ($5f93a651ba787782$var$isValid(itemList)) return itemList;
    let values = itemList;
    let newItemList = newItemList();
    newItemList = $5f93a651ba787782$var$insert(newItemList, values);
    return newItemList;
}
function $5f93a651ba787782$var$getLength(itemList) {
    /**
     * Returns the length of the list
     * @param {Object} itemList The list
     * @returns {Number} The length of the list
     * 
     */ if (!$5f93a651ba787782$var$isValid(itemList)) return 0;
    let length = $5f93a651ba787782$var$getListItems(itemList).length || 0;
    return length;
}
function $5f93a651ba787782$var$getListItems(itemList) {
    /**
     * Returns the items of the list
     * @param {Object} itemList The list
     * @returns {Array} The items of the list
     */ let listItems = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).propertyValues.get(itemList, "itemListElement");
    // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(listItems)) return [];
    // Retrieve value part of pv
    listItems = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(listItems);
    listItems = listItems.map((x)=>x?.object?.value);
    listItems = listItems.filter((x)=>!(0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(x));
    listItems = (0, $444f5d32a598f4dd$export$4bb05bd0559c698f).sort(listItems);
    return listItems;
}
function $5f93a651ba787782$var$setListItems(itemList, values) {
    /**
     * Returns the items of the list
     * @param {Object} itemList The list
     * @returns {Array} The items of the list
     */ values = (0, $444f5d32a598f4dd$export$4bb05bd0559c698f).toItemList(values);
    itemList = $5f93a651ba787782$var$clear(itemList);
    let listItems = $5f93a651ba787782$var$getListItems(itemList);
    listItems = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).toArray(listItems);
    listItems = listItems.filter((x)=>!(0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(x));
    listItems = sort(listItems);
    return listItems;
}
function $5f93a651ba787782$var$getItems(itemList) {
    /**
     * Returns the items of the list
     * @param {Object} itemList The list
     * @returns {Array} The items of the list
     */ let listItems = $5f93a651ba787782$var$getListItems(itemList);
    let items = listItems.map((x)=>(0, $7bb8d4569e1a97bb$export$1ef237150243f225).values.get(x, "item"));
    items = items.filter((x)=>!(0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(x));
    return items;
}
function $5f93a651ba787782$var$setItems(itemList, items) {
    /**
     * Returns the items of the list
     * @param {Object} itemList The list
     * @returns {Array} The items of the list
     */ return $5f93a651ba787782$var$setListItems(itemList, items);
}
//todo: whybis this fn not used
function $5f93a651ba787782$var$lastListItem(itemList) {
    /**
     * Returns the last list item
     * @param {Object} itemList The list
     * @returns {Object} The last list item
     */ let lastListItem = (0, $444f5d32a598f4dd$export$4bb05bd0559c698f).last($5f93a651ba787782$var$getListItems(itemList));
    return lastListItem;
}
// -----------------------------------------------------
//  Array 
// -----------------------------------------------------
//todo: harmonize between search and find
function $5f93a651ba787782$var$search(itemList, conditions) {
    /**
     * Searches an array of things
     * @param {Array} things The things
     * @param {Object} conditions The conditions
     * @returns {Object} Te first listItem encountered
     */ // Ensure it is array
    let listItems = $5f93a651ba787782$var$getListItems(itemList);
    return (0, $444f5d32a598f4dd$export$4bb05bd0559c698f).filter(listItems, conditions)?.[0] || null;
}
function $5f93a651ba787782$var$filter(itemList, conditions) {
    /**
     * Returns a new itemList with filtered records
     * @param {Array} things The things
     * @param {Object} conditions The conditions
     * @returns {Array} The filtered array
     */ // Get listItems and filter
    let listItems = $5f93a651ba787782$var$getListItems(itemList);
    listItems = (0, $444f5d32a598f4dd$export$4bb05bd0559c698f).filter(listItems, conditions);
    // Clone,  Empty and refill itemList
    let newItemList = $5f93a651ba787782$var$clone(itemList);
    newItemList = $5f93a651ba787782$var$clear(newItemList);
    newItemList = $5f93a651ba787782$var$insert(newItemList, listItems);
    return newItemList;
}
function $5f93a651ba787782$var$clear(itemList) {
    /**
     * Returns itemList without listItems
     * @param {Object} itemList The itemList    
     * @returns {Object} The itemList without listItems
     * 
     */ // Delete values
    itemList = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).values.delete(itemList, "itemListElement");
    itemList = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).values.set(itemList, "numberOfItems", 0);
    return itemList;
}
function $5f93a651ba787782$var$getLastListItem(itemList) {
    /**
     * Returns the last item of the list
     * @param {Object} itemList The itemList
     * @returns {Object} The last item of the list
     * 
     */ return (0, $444f5d32a598f4dd$export$4bb05bd0559c698f).last($5f93a651ba787782$var$getListItems(itemList)) || null;
}
function $5f93a651ba787782$var$insert(itemList, listItem, position, metadata) {
    /**
     * Inserts a record into an array
     * @param {Array} things The array
     * @param {Object} record The record
     * @param {Number} position The position
     * @returns {Array} The array
     */ let listItems = $5f93a651ba787782$var$getListItems(itemList);
    // Default position to last item
    let lastItemFlag = false;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(position)) {
        lastItemFlag = true;
        let lastListItem = (0, $444f5d32a598f4dd$export$4bb05bd0559c698f).last(listItems);
        position = (0, $444f5d32a598f4dd$export$4bb05bd0559c698f).position.get(lastListItem) + 1 || 0;
    }
    // if array 
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isArray(listItem)) {
        for (let item of listItem){
            itemList = $5f93a651ba787782$var$insert(itemList, item, position, metadata);
            position += 1;
        }
        return itemList;
    }
    // init 
    listItem = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).toThing(listItem);
    listItem = (0, $444f5d32a598f4dd$export$4bb05bd0559c698f).toListItem(listItem);
    // Get previous and next items
    let previousItem;
    let nextItem;
    for (let l of listItems){
        if ((0, $444f5d32a598f4dd$export$4bb05bd0559c698f).position.get(l) == position - 1) previousItem = l;
        if ((0, $444f5d32a598f4dd$export$4bb05bd0559c698f).position.get(l) == position) nextItem = l;
    }
    // Set new neighbours and position
    listItem = (0, $444f5d32a598f4dd$export$4bb05bd0559c698f).previousItem.set(listItem, (0, $7bb8d4569e1a97bb$export$1ef237150243f225).ref.get(previousItem));
    listItem = (0, $444f5d32a598f4dd$export$4bb05bd0559c698f).nextItem.set(listItem, (0, $7bb8d4569e1a97bb$export$1ef237150243f225).ref.get(nextItem));
    listItem = (0, $444f5d32a598f4dd$export$4bb05bd0559c698f).position.set(listItem, position);
    // Set position
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(previousItem)) previousItem = (0, $444f5d32a598f4dd$export$4bb05bd0559c698f).nextItem.set(previousItem, (0, $7bb8d4569e1a97bb$export$1ef237150243f225).ref.get(listItem));
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(nextItem)) nextItem = (0, $444f5d32a598f4dd$export$4bb05bd0559c698f).previousItem.set(nextItem, (0, $7bb8d4569e1a97bb$export$1ef237150243f225).ref.get(listItem));
    // Add record to itemListElement
    itemList = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.add(itemList, "itemListElement", listItem, metadata);
    // Recalculate positions (skip if last item)
    if (lastItemFlag == false) itemList = $5f93a651ba787782$var$resetPositions(itemList, listItem, position, metadata);
    //
    itemList = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).values.set(itemList, "numberOfItems", listItems.length + 1);
    // return
    return itemList;
}
function $5f93a651ba787782$var$deleteItem(itemList, listItem, metadata) {
    /**
     * Deletes a record from an array
     * @param {Array} things The array
     * @param {Object} record The record
     * @returns {Array} The array
     */ console.log("xxx");
    let listItems = $5f93a651ba787782$var$getListItems(itemList);
    listItem = (0, $444f5d32a598f4dd$export$4bb05bd0559c698f).search(listItems, (0, $7bb8d4569e1a97bb$export$1ef237150243f225).ref.get(listItem));
    // Retrieve previous item
    let previousItemRef = (0, $444f5d32a598f4dd$export$4bb05bd0559c698f).previousItem.get(listItem);
    let previousItem = (0, $444f5d32a598f4dd$export$4bb05bd0559c698f).search(listItems, (0, $7bb8d4569e1a97bb$export$1ef237150243f225).ref.get(previousItemRef));
    // Retrieve next item
    let nextItemRef = (0, $444f5d32a598f4dd$export$4bb05bd0559c698f).nextItem.get(listItem);
    let nextItem = (0, $444f5d32a598f4dd$export$4bb05bd0559c698f).search(listItems, (0, $7bb8d4569e1a97bb$export$1ef237150243f225).ref.get(nextItemRef));
    // Reassign neighbours of previous and next item
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(previousItem)) previousItem = (0, $444f5d32a598f4dd$export$4bb05bd0559c698f).nextItem.set(previousItem, nextItemRef);
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(nextItem)) nextItem = (0, $444f5d32a598f4dd$export$4bb05bd0559c698f).previousItem.set(nextItem, previousItemRef);
    // Remove neighbors from listItem
    listItem = (0, $444f5d32a598f4dd$export$4bb05bd0559c698f).neighbors.clear(listItem);
    // Remove item from itemListElement
    itemList = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).values.delete(itemList, "itemListElement", (0, $7bb8d4569e1a97bb$export$1ef237150243f225).ref.get(listItem), metadata);
    // Reset positions
    itemList = $5f93a651ba787782$var$resetPositions(itemList, null, null, metadata);
    itemList = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).values.set(itemList, "numberOfItems", listItems.length - 1);
    return itemList;
}
function $5f93a651ba787782$var$resetPositions(itemList, startingItem, startingPosition, metadata) {
    /**
     * Resets the positions of the list items
     * @param {Object} itemList The item list
     * @returns {Object} The item list
     */ //
    let listItems = $5f93a651ba787782$var$getListItems(itemList);
    let position = startingPosition || 0;
    // Get first item
    let firstItem = startingItem || (0, $444f5d32a598f4dd$export$4bb05bd0559c698f).first($5f93a651ba787782$var$getListItems(itemList));
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(firstItem)) return itemList;
    // Reset positions
    let temp = firstItem;
    let p = position;
    while((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(temp)){
        temp = listItems.filter((x)=>x["@id"] == temp?.["@id"])?.[0] || null;
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(temp)) {
            if ((0, $444f5d32a598f4dd$export$4bb05bd0559c698f).position.get(temp) != p) (0, $444f5d32a598f4dd$export$4bb05bd0559c698f).position.set(temp, p);
            temp = (0, $444f5d32a598f4dd$export$4bb05bd0559c698f).nextItem.get(temp);
            p += 1;
        }
    }
    return itemList;
}






const $7273ede3c5ec638c$export$310b667869cfc49d = {
    valid: $7273ede3c5ec638c$var$checkValidity,
    execute: $7273ede3c5ec638c$var$executePotentialAction
};
function $7273ede3c5ec638c$var$executePotentialAction(action) {
    /**
     * Executes an action
     * 
     */ // Check if action is system record
    let isSystemRecordFlag = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).isValid(action);
    // Check if potential action is actionable (criteria is valid)
    action = $7273ede3c5ec638c$var$checkValidity(action);
    if (action.actionStatus == "FailedActionStatus") return action;
    // Check if action is already executed
    //if(checkIfExecuted(action) == true){
    //return null
    //}
    // Execute action (-outputs)
    action = $7273ede3c5ec638c$var$executeAction(action);
    // Execute action type (updateAction, deleteAction, ...)
    action = $7273ede3c5ec638c$var$executeActionType(action);
    // Convert from system record if required
    if (isSystemRecordFlag === false) action = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).record.get(action);
    return action;
}
function $7273ede3c5ec638c$var$checkValidity(action) {
    /**
     * Checks if action meet validity criteria
     * Validity criteria are the -input properties
     */ // Convert record to dot record
    let dotRecord = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).dot.toDot(action);
    // Iterate through keys
    let errors = [];
    for(let k in dotRecord)if (k.includes("-input")) {
        // Retrieve value
        let value = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).dot.get(k, action);
        // convert uri template to pvs
        let pvs = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).uri.uriToPvs(value);
        // If pvs has default value and nothing else, assume it is a regex valuePattern
        if (Object.keys(pvs.length <= 2)) pvs.valuePattern = pvs?.defaultValue;
        // Check if meet pvs
        let result = $7273ede3c5ec638c$var$testPVS(action, k, pvs);
        if (result == false) {
            errors.push(`${k} does not meet validity criteria ${value}`);
            action.actionStatus = "FailedActionStatus";
        }
    }
    if (action.actionStatus != "FailedActionStatus") action.actionStatus = "PotentialActionStatus";
    if (errors.length > 0) action.error = errors.join(", ");
    return action;
}
function $7273ede3c5ec638c$var$executeAction(action) {
    /**
     * Converts keys ending in '-output' by executing their value is if uri template 
     */ // Copy record
    let newAction = JSON.parse(JSON.stringify(action));
    // Convert to dot record
    let dotRecord = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).dot.toDot(action);
    // Iterate through all keys
    for (let k of Object.keys(dotRecord)){
        // Remove input
        if (k.includes("-input")) (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).dot.setValue(newAction, k, undefined);
        //
        if (k.includes("-output")) {
            // Retrieve value
            let value = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).dot.get(k, newAction);
            // Convert value to pvs
            let pvs = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).uri.uriToPvs(value);
            // Execute pvs template
            value = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).template.get(pvs?.defaultValue, action);
            // Convert if json
            try {
                value = JSON.parse(value);
            } catch (error) {}
            // Set value 
            let newK = k.replace("-output", "");
            (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).dot.setValue(newAction, newK, value);
            // Remove old output key
            (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).dot.setValue(newAction, k, undefined);
        }
    }
    // Set action to completed
    newAction.actionStatus = "CompletedActionStatus";
    return newAction;
}
function $7273ede3c5ec638c$var$testPVS(record, key, pvs) {
    /**
     *  {
    "@type": "PropertyValueSpecification",
    "@id": "8ca1b4ac-9a70-4761-ab77-8ec77512cef5",
    "defaultValue": null,
    "readonlyValue": null,
    "valueRequired": true,
    "multipleValues": false,
    "minValue": null,
    "maxValue": null,
    "valueMinLength": null,
    "valueMaxLength": null,
    "valuePattern": null,
    "stepValue": null,
    "valueName": null,
}

     */ let newKey = key.replace("-input", "");
    let value = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).dot.get(newKey, record);
    let errors = [];
    let result = true;
    // valueRequired
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(pvs.valueRequired)) try {
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(value)) {
            errors.push("valueRequired");
            result = false;
        }
    } catch (error) {
        errors.push(error);
        result = false;
    }
    // multipleValues
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(pvs.multipleValues)) try {
        if (value.length > 1) {
            errors.push("multipleValues");
            result = false;
        }
    } catch (error) {
        errors.push(error);
        result = false;
    }
    // minValue
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(pvs.minValue)) try {
        if (value < Number(pvs.minValue)) {
            errors.push("minValue");
            result = false;
        }
    } catch (error) {
        errors.push(error);
        result = false;
    }
    // valueMaxLength
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(pvs.maxValue)) try {
        if (Number(pvs.maxValue)) {
            errors.push("maxValue");
            result = false;
        }
    } catch (error) {
        errors.push(error);
        result = false;
    }
    // valueMinLength
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(pvs.valueMinLength)) try {
        if ((value?.length || "") < pvs.valueMinLength) {
            errors.push("valueMinLength");
            result = false;
        }
    } catch (error) {
        errors.push(error);
        result = false;
    }
    // valueMaxLength
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(pvs.valueMaxLength)) try {
        if ((value?.length || "") > pvs.valueMaxLength) {
            errors.push("valueMaxLength");
            result = false;
        }
    } catch (error) {
        errors.push(error);
        result = false;
    }
    // valueStep
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(pvs.stepValue)) try {
        if (value % pvs.stepValue != 0) {
            errors.push("stepValue");
            result = false;
        }
    } catch (error) {
        errors.push(error);
        result = false;
    }
    // valuePattern
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(pvs.valuePattern)) try {
        value = String(value);
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).regex.test(value, pvs.valuePattern) == false) {
            errors.push("valuePattern");
            result = false;
        }
    } catch (error) {
        errors.push(error);
        result = false;
    }
    return result;
}
function $7273ede3c5ec638c$var$executePotentialAction_OLD(action) {
    /**
     * Executes an action
     * 
     */ // Check if potential action is actionable (criteria is valid)
    //if(checkValidity(action) == false){
    //return null
    // }
    // Check if action is already executed
    //if(checkIfExecuted(action) == true){
    //return null
    //}
    // Execute action
    action = $7273ede3c5ec638c$var$executeAction(action);
    return action;
}
function $7273ede3c5ec638c$var$checkValidity_OLD(record, action) {
    /**
     * Checks if the action is valid
     */ return (0, $a6f8f0c2e2f67514$export$4e14e39b01a79427).test(record, action);
}
function $7273ede3c5ec638c$var$checkIfExecuted(record, action) {
/**
     * Checks if the action is already executed
     */ }
function $7273ede3c5ec638c$var$executeActionType(action) {
    /**
     * Executes an action
     */ let action_type = action?.record_type || action?.["@type"];
    let recordIsThingFlag = false;
    if ((0, $7bb8d4569e1a97bb$export$1ef237150243f225).isValid(action)) recordIsThingFlag = true;
    else action = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).toThing(action);
    // Init action
    action = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.set(action, "startTime", new Date());
    // Switch
    switch(action_type){
        //
        case "UpdateAction":
            action = $7273ede3c5ec638c$var$executeUpdateAction(action);
            break;
        // List actions
        case "InsertAction":
            action = $7273ede3c5ec638c$var$executeInsertAction(action);
            break;
        case "AddAction":
            action = $7273ede3c5ec638c$var$executeInsertAction(action);
            break;
        case "DeleteAction":
            action = $7273ede3c5ec638c$var$executeDeleteAction(action);
            break;
        case "ReplaceAction":
            action = $7273ede3c5ec638c$var$executeReplaceAction(action);
            break;
        case "InsertAction":
            action = $7273ede3c5ec638c$var$executeInsertAction(action);
            break;
        case "AppendAction":
            action = $7273ede3c5ec638c$var$executeAppendAction(action);
            break;
        case "PrependAction":
            action = $7273ede3c5ec638c$var$executePrependAction(action);
            break;
        case "DeleteAction":
            action = $7273ede3c5ec638c$var$executeDeleteAction(action);
            break;
        default:
            break;
    }
    // 
    action = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.set(action, "endTime", new Date());
    // Convert back to record 
    if (recordIsThingFlag == true) action = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).record.get(action);
    return action;
}
// -----------------------------------------------------
//  Record 
// -----------------------------------------------------
function $7273ede3c5ec638c$var$executeUpdateAction(action) {
    /**
     * Executes an update action
     * 
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(action.object)) {
        action = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.set(action, "actionStatus", "FailedActionStatus");
        action = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.set(action, "actionStatus", "Missing object");
        action = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.set(action, "endTime", new Date());
        return action;
    }
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(action.targetCollection)) {
        action = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.set(action, "actionStatus", "FailedActionStatus");
        action = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.set(action, "actionStatus", "Missing targetCollection");
        action = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.set(action, "endTime", new Date());
        return action;
    }
    // Execute action
    let targetCollections = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).propertyValues.get(action, "targetCollection");
    targetCollections = targetCollections.map((x)=>x.object.value);
    let objects = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).propertyValues.get(action, "object");
    objects = objects.map((x)=>x.object.value);
    let results = [];
    for (let targetCollection of targetCollections){
        let result = targetCollection;
        for (let object of objects){
            let propertyID = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.get(object, "propertyID");
            let value = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.get(object, "value");
            result = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.set(result, propertyID, value);
        }
        results.push(result);
    }
    // Execute action
    action = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.set(action, "result", results);
    // Set action status
    action = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.set(action, "actionStatus", "CompletedActionStatus");
    // Return
    return action;
}
// -----------------------------------------------------
//  Lists 
// -----------------------------------------------------
function $7273ede3c5ec638c$var$executeAddAction(action) {
    /**
     * Execute an append action adding item to the end of the list
     */ return $7273ede3c5ec638c$var$executeInsertAction(action);
}
function $7273ede3c5ec638c$var$executeAppendAction(action) {
    /**
     * Execute an append action adding item to the end of the list
     */ return $7273ede3c5ec638c$var$executeInsertAction(action, null);
}
function $7273ede3c5ec638c$var$executePrependAction(action) {
    /**
     * Execute an append action adding item to the end of the list
     */ return $7273ede3c5ec638c$var$executeInsertAction(action, 0);
}
function $7273ede3c5ec638c$var$executeInsertAction(action, toLocation) {
    /**
     * Executes an append action adding item to the end of the list
     */ // Get variables
    toLocation = toLocation || (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.get(action, "toLocation");
    let objects = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).propertyValues.get(action, "object");
    objects = objects.map((x)=>x.object.value);
    let targetCollections = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).propertyValues.get(action, "targetCollection");
    targetCollections = targetCollections.map((x)=>x.object.value);
    // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(objects)) {
        action.actionStatus = "FailedActionStatus";
        action.error = "Missing object";
        return action;
    }
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(targetCollections)) {
        action.actionStatus = "FailedActionStatus";
        action.error = "Missing targetCollection";
        return action;
    }
    // Execute action
    let results = [];
    for (let targetCollection of targetCollections){
        let result = targetCollection;
        let tempToLocation = toLocation;
        for (let object of objects){
            result = (0, $5f93a651ba787782$export$9fe8be205aeaa496).insert(result, object, tempToLocation);
            tempToLocation = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.get(object, "position") + 1;
        }
        results.push(result);
    }
    // Execute action
    action = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.set(action, "result", results);
    // Set action status
    action = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.set(action, "actionStatus", "CompletedActionStatus");
    // Return
    return action;
}
function $7273ede3c5ec638c$var$executeDeleteAction(action) {
    /**
     * Delete an item from the list
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(action.object)) {
        action.actionStatus = "FailedActionStatus";
        action.error = "Missing object";
        return action;
    }
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(action.targetCollection)) {
        action.actionStatus = "FailedActionStatus";
        action.error = "Missing targetCollection";
        return action;
    }
    // Get variables
    let objects = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).propertyValues.get(action, "object");
    objects = objects.map((x)=>x.object.value);
    let targetCollections = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).propertyValues.get(action, "targetCollection");
    targetCollections = targetCollections.map((x)=>x.object.value);
    // Execute action
    let results = [];
    for (let targetCollection of targetCollections){
        let result = targetCollection;
        for (let object of objects)result = (0, $5f93a651ba787782$export$9fe8be205aeaa496).delete(result, object);
        results.push(result);
    }
    action = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.set(action, "result", results);
    // Set action status
    action = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.set(action, "actionStatus", "CompletedActionStatus");
    // Return
    return action;
}
function $7273ede3c5ec638c$var$executeReplaceAction(action) {
    /**
     * Delete an item from the list
     */ // Error handling
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(action?.object)) {
        action.actionStatus = "FailedActionStatus";
        action.error = "Missing object";
        return action;
    }
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(action?.targetCollection)) {
        action.actionStatus = "FailedActionStatus";
        action.error = "Missing targetCollection";
        return action;
    }
    // Get 
    let replacers = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).propertyValues.get(action, "replacer");
    replacers = replacers.map((x)=>x.object.value);
    let replacees = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).propertyValues.get(action, "replacee");
    replacees = replacees.map((x)=>x.object.value);
    let targetCollections = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).propertyValues.get(action, "targetCollection");
    targetCollections = targetCollections.map((x)=>x.object.value);
    let toPosition = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.get(replacers?.[0], "toPosition");
    // Execute action
    let results = [];
    for (let targetCollection of targetCollections){
        let result = targetCollection;
        let tempToPosition = toPosition || 0;
        for (let replacee of replacees)result = (0, $5f93a651ba787782$export$9fe8be205aeaa496).delete(result, replacee);
        for (let replacer of replacers){
            result = (0, $5f93a651ba787782$export$9fe8be205aeaa496).insert(result, replacer, tempToPosition);
            tempToPosition += 1;
        }
        results.push(result);
    }
    action = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.set(action, "result", results);
    // Set action status
    action = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.set(action, "actionStatus", "CompletedActionStatus");
    // Return
    return action;
}


const $fbdfe69f48d32df8$export$c24b4489b93ad8cb = {
    pvh: (0, $409aaf2b232e73d2$export$e0d9d093805b3f23),
    list: (0, $5f93a651ba787782$export$9fe8be205aeaa496),
    pv: (0, $409aaf2b232e73d2$export$e0d9d093805b3f23),
    // Base
    isValid: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).isValid,
    isThing: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).isThing,
    toThing: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).toThing,
    toString: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).toString,
    toStringDetailed: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).toStringDetailed,
    toJSON: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).toJSON,
    isEmpty: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).isEmpty,
    keys: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).keys,
    clone: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).clone,
    copy: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).copy,
    hash: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).hash,
    // Constructor
    new: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).new,
    // Properties
    record_type: {
        get: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).record_type.get,
        set: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).record_type.set
    },
    record_id: {
        get: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).record_id.get,
        set: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).record_id.set
    },
    ref: {
        get: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).ref.get,
        set: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).ref.set
    },
    value: {
        get: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.get,
        set: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.set,
        add: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.add,
        replace: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.replace,
        delete: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).value.delete
    },
    values: {
        get: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).values.get,
        set: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).values.set,
        add: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).values.add,
        replace: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).values.replace,
        delete: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).values.delete
    },
    property: {
        get: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).property.get,
        set: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).property.set,
        add: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).property.add,
        replace: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).property.replace,
        delete: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).property.delete
    },
    propertyValue: {
        get: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).propertyValue.get,
        set: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).propertyValue.set,
        add: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).propertyValue.add,
        replace: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).propertyValue.replace,
        delete: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).propertyValue.delete
    },
    propertyValues: {
        get: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).propertyValues.get,
        set: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).propertyValues.set,
        add: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).propertyValues.add,
        replace: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).propertyValues.replace,
        delete: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).propertyValues.delete
    },
    record: {
        get: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).record.get,
        set: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).record.set
    },
    htmlRecord: {
        get: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).htmlRecord.get
    },
    system: {
        get: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).system.get,
        set: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).system.set
    },
    children: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).children,
    flatten: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).flatten,
    // Comparisons
    isSame: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).isSame,
    isNotSame: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).isNotSame,
    eq: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).eq,
    ne: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).ne,
    lt: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).lt,
    gt: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).gt,
    validate: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).validate,
    // Operations
    replace: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).replace,
    merge: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).merge,
    compile: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).compile,
    replaceChildren: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).replaceChildren,
    // Lists
    length: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).length,
    get: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).get,
    push: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).push,
    delete: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).delete,
    dedupe: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).dedupe,
    sort: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).sort,
    filter: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).filter,
    mergeLists: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).mergeLists,
    // Execution
    execute: (0, $7273ede3c5ec638c$export$310b667869cfc49d).execute
};




const $989c7a224980c1bb$var$h = {
    base: (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5),
    thing: (0, $fbdfe69f48d32df8$export$c24b4489b93ad8cb),
    dom: {
        element: (0, $c8b0dc629c726d48$export$e0169ab077dc0819),
        thing: {
            init: (0, $0c0a864fcee6a66f$export$b8f607a8a10bde0a),
            part: (0, $2ad812101d8ee679$export$9ccd701369bc6cde),
            property: (0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7),
            traverse: (0, $6ab83f37dcb687d8$export$ffaccbdd67f021cd),
            templateDB: (0, $72773900747a3863$export$dc9f39fafadf3ccd)
        }
    },
    isNull: (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull,
    isNotNull: (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull,
    isArray: (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isArray,
    toArray: (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray,
    isObject: (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isObject,
    thing: (0, $fbdfe69f48d32df8$export$c24b4489b93ad8cb)
};
const $989c7a224980c1bb$export$6ee4764c2ac4fe01 = {
    render: $989c7a224980c1bb$var$renderElements
};
function $989c7a224980c1bb$var$renderElements(element, record, conditions, TEMPLATEDB) {
    /**
     * Updates all elements with same type and id
     * @param {Object} record
     * @param {Object} conditions
     * @returns {Object} The elements updated
     *
     */ let action = new $989c7a224980c1bb$var$h.base.classes.Action(`Render elements ${record?.["@type"]} ${record?.["@id"]}`);
    if ($989c7a224980c1bb$var$h.isNull(record)) {
        action.setFailed("No record provided");
        return action;
    }
    element = element || document.body;
    let thingElements = $989c7a224980c1bb$var$h.dom.thing.traverse.things.get(element, record["@type"], record["@id"]);
    // Add given element if also meets conditions
    if ($989c7a224980c1bb$var$h.dom.thing.property.type.get(element) == "thing" && $989c7a224980c1bb$var$h.dom.thing.property.record_type.get(element) == record["@type"] && $989c7a224980c1bb$var$h.dom.thing.property.record_id.get(element) == record["@id"]) thingElements.push(element);
    //
    thingElements = $989c7a224980c1bb$var$h.dom.element.filter(thingElements, conditions);
    //
    if (thingElements.length == 0) {
        action.setFailed("No elements found");
        return action;
    }
    //
    for (let t of thingElements)action.instrument = $989c7a224980c1bb$var$_renderThingElement(t, record, TEMPLATEDB);
    // Render sub things
    for (let k of Object.keys(record)){
        for (let v of $989c7a224980c1bb$var$h.toArray(record[k]))if ($989c7a224980c1bb$var$h.isNotNull(v?.["@type"]) || $989c7a224980c1bb$var$h.isNotNull(v?.record_type)) action.instrument = $989c7a224980c1bb$var$renderElements(element, v, conditions, TEMPLATEDB);
    }
    //
    action.setCompleted();
    // Return
    return action;
}
function $989c7a224980c1bb$var$_renderThingElement(element, record, TEMPLATEDB) {
    /**
     * Updates the element with the value
     * @param {Object} element
     * @param {Object} value
     * @returns {Object} The element updated
     */ let action = new $989c7a224980c1bb$var$h.base.classes.Action(`Render elements ${record?.["@type"]} ${record?.["@id"]}`);
    // Get current thing element
    let thingElement = $989c7a224980c1bb$var$h.dom.thing.traverse.current.thing.get(element);
    if ($989c7a224980c1bb$var$h.isNull(thingElement)) {
        action.setFailed("No thing element found");
        return action;
    }
    // Use custom element render mechanism if classList contains 'krElement'
    if (element.classList.contains("krElement")) {
        element.render();
        action.setCompleted();
        return action;
    }
    // Set type and id
    thingElement.setAttribute("data-record-type", record?.["@type"] || record?.record_type);
    thingElement.setAttribute("data-record-id", record?.["@id"] || record?.record_id);
    // Retrieve property elements
    let propertyElements = $989c7a224980c1bb$var$h.dom.thing.traverse.children.properties.get(thingElement);
    // Render thing from stcratch if no propertyelements identified
    let templateID = element.getAttribute("data-templateID");
    let template = TEMPLATEDB?.[templateID] || "";
    if (propertyElements.length == 0 || template && template.includes("{{")) {
        $989c7a224980c1bb$var$_renderNonExistantThingElement(element, record, TEMPLATEDB);
        propertyElements = $989c7a224980c1bb$var$h.dom.thing.traverse.children.properties.get(element);
    }
    // Render individual property elements
    for (let p of propertyElements){
        $989c7a224980c1bb$var$h.dom.thing.property.record_type.set(p, record?.["@type"] || record.record_type);
        $989c7a224980c1bb$var$h.dom.thing.property.record_id.set(p, record?.["@id"] || record.record_id);
        action.instrument = $989c7a224980c1bb$var$_renderPropertyElement(p, record, null, TEMPLATEDB);
    }
    action.close();
    return action;
}
function $989c7a224980c1bb$var$_renderNonExistantThingElement(element, record, TEMPLATEDB) {
    /**
     * Render a thing element if not already on the document
     */ let templateID = element.getAttribute("data-templateID");
    let template = TEMPLATEDB?.[templateID] || "";
    // Get headings from record
    let headingRecord = $989c7a224980c1bb$var$h.thing.record.get(record);
    headingRecord = $989c7a224980c1bb$var$h.base.heading.addHeadings(headingRecord);
    headingRecord = $989c7a224980c1bb$var$h.base.json.simplify(headingRecord);
    // Render template and set as content
    let htmlContent = $989c7a224980c1bb$var$h.base.template.get(template, headingRecord);
    element.innerHTML = htmlContent;
    let mainPart = $989c7a224980c1bb$var$h.dom.thing.part.main.get(element);
    if ($989c7a224980c1bb$var$h.isNull(mainPart)) return;
    let mainPartTemplateID = mainPart.getAttribute("data-templateID");
    let mainPartTemplate = TEMPLATEDB?.[mainPartTemplateID] || "";
    // Render template and set as content
    mainPart.innerHTML = $989c7a224980c1bb$var$h.base.template.get(mainPartTemplate, headingRecord);
    return;
}
function $989c7a224980c1bb$var$_renderPropertyElement(element, record, template, TEMPLATEDB) {
    /**
     * Updates a property element with new value
     * @param {Object} element
     * @param {Object} value
     * @param {Object} template
     * @returns {Object} The element updated
     */ let action = new $989c7a224980c1bb$var$h.base.classes.Action(`Render property element ${element.getAttribute("data-propertyID")} ${record?.["@type"]} ${record?.["@id"]}`);
    action.object = element;
    // Error handling
    if ($989c7a224980c1bb$var$h.isNull(element)) {
        action.setFailed("No element provided");
        return action;
    }
    if ($989c7a224980c1bb$var$h.isNull(record)) {
        action.setFailed("No record provided");
        return action;
    }
    // Use custom element render mechanism if classList contains 'krElement'
    if (element.classList.contains("krElement")) {
        element.render();
        action.setCompleted();
        return action;
    }
    // Get propertyValues (pvs)
    let propertyID = element.getAttribute("data-propertyID");
    let pvs = $989c7a224980c1bb$var$h.thing.propertyValues.get(record, propertyID);
    pvs = $989c7a224980c1bb$var$h.toArray(pvs);
    // Get template 
    let templateID = element.getAttribute("data-templateID");
    template = TEMPLATEDB?.[templateID];
    // Set template if not set
    let values = $989c7a224980c1bb$var$h.dom.thing.traverse.children.values.get(element);
    if ($989c7a224980c1bb$var$h.isNull(values)) element.innerHTML = template;
    // Get value template
    let mainPart = $989c7a224980c1bb$var$h.dom.thing.part.main.get(element);
    let mainPartTemplateID = mainPart.getAttribute("data-templateID");
    let valueTemplate = TEMPLATEDB?.[mainPartTemplateID];
    // Render value template
    // Create main element if missing
    let propertyMainElement = $989c7a224980c1bb$var$h.dom.thing.part.main.get(element);
    if ($989c7a224980c1bb$var$h.isNull(propertyMainElement)) propertyMainElement = $989c7a224980c1bb$var$h.dom.thing.part.add(element, "main", "");
    // Remove value elements no longer needed
    let newPVSId = pvs.map((x)=>x["@id"]);
    let currentPVSElements = $989c7a224980c1bb$var$h.dom.thing.traverse.children.values.get(element);
    for (let e of currentPVSElements)if (!newPVSId.includes($989c7a224980c1bb$var$h.dom.element.getId(e))) e.remove();
    // Return if no no elements to add
    if ($989c7a224980c1bb$var$h.isNull(pvs)) {
        action.close();
        return action;
    }
    // Generate value elements
    let item = null;
    for (let pv of pvs){
        let ve = null;
        // Find if element already exist and if so move it to current position
        let pvElements = $989c7a224980c1bb$var$h.dom.thing.traverse.children.values.get(element, {
            "data-valueID": pv["@id"]
        });
        if (pvElements.length > 0) ve = pvElements[0];
        // Create new element if missing
        if ($989c7a224980c1bb$var$h.isNull(ve)) {
            // Generate new value element
            ve = $989c7a224980c1bb$var$_newValueElement(pv, record, valueTemplate, propertyID, TEMPLATEDB);
            // Render sub things if any
            $989c7a224980c1bb$var$h.dom.thing.traverse.children.things.get(ve).map((x)=>$989c7a224980c1bb$var$_renderThingElement(x, pv?.object?.value, TEMPLATEDB));
        }
        // Add to element
        if ($989c7a224980c1bb$var$h.isNotNull(item)) item.after(ve);
        else propertyMainElement.appendChild(ve);
        //
        item = ve;
    }
    action.close();
    return action;
}
function $989c7a224980c1bb$var$_newValueElement(pv, record, template, propertyID, TEMPLATEDB) {
    /**
     * Creates a new value element
     * @param {Object} value
     * @param {Object} template
     * @param {String} propertyID
     * @returns {Object} The new value element
     */ let value = pv;
    if ($989c7a224980c1bb$var$h.isNotNull(pv?.object?.value)) value = pv?.object?.value;
    if ($989c7a224980c1bb$var$h.isNotNull(value?._system)) value = value?._system;
    let temp = document.createElement("span");
    temp.innerHTML = $989c7a224980c1bb$var$h.base.template.render(template, record);
    // Get valueElement from template
    let newValueElement = $989c7a224980c1bb$var$h.dom.thing.traverse.children.values.get(temp)?.[0] || temp;
    $989c7a224980c1bb$var$h.dom.thing.property.type.setAsValue(newValueElement);
    $989c7a224980c1bb$var$h.dom.thing.property.record_type.set(newValueElement, record?.["@type"] || record.record_type);
    $989c7a224980c1bb$var$h.dom.thing.property.record_id.set(newValueElement, record?.["@id"] || record.record_id);
    $989c7a224980c1bb$var$h.dom.thing.property.propertyID.set(newValueElement, propertyID);
    $989c7a224980c1bb$var$h.dom.thing.property.valueID.set(newValueElement, pv?.["@id"]);
    $989c7a224980c1bb$var$h.dom.thing.property.valueHash.set(newValueElement, $989c7a224980c1bb$var$h.base.hash.get(value));
    // If value not an object, assign to main
    if (!$989c7a224980c1bb$var$h.thing.isThing(value)) {
        let mainPart = $989c7a224980c1bb$var$h.dom.thing.part.main.get(newValueElement) || newValueElement;
        mainPart.textContent = value;
        return newValueElement;
    }
    // Render template and set as content
    //newValueElement.innerHTML = h.base.template.get(template, record)
    // Get value
    let main = $989c7a224980c1bb$var$h.dom.thing.part.main.get(newValueElement) || newValueElement;
    // if children, assign value
    let c = $989c7a224980c1bb$var$h.dom.thing.traverse.children.things.get(main);
    if ($989c7a224980c1bb$var$h.isNotNull(c)) for (let t of c)$989c7a224980c1bb$var$h.dom.thing.property.ref.set(t, value);
    else main.innerHTML = value;
    return newValueElement;
}










let $2b7cd5effc340282$var$DB = {};
const $2b7cd5effc340282$export$ddce14f862b473c6 = {
    register: $2b7cd5effc340282$var$registerEvents
};
function $2b7cd5effc340282$var$registerEvents(element, db1, TEMPLATEDB) {
    /**
     * Registers events on an element
     * @param {Object} element
     * @param {Object} db: the db containing things records
     * @param {Object} TEMPLATEDB: the db containing the templates
     * @returns {Object} The element
     *
     * classes:
     *     - krDropzone:
     *     - krDraggable:
     *     - krClickable:    
     *     - krSelectable: allows an item to be selected
     */ return;
}
// -----------------------------------------------------
//  addToList
// -----------------------------------------------------
function $2b7cd5effc340282$var$addToList(action, params) {
    /**
     * Adds element to list
     * @param {Object} element
     * @param {Object} list
     * @returns {Object} The element
     */ // Retrieve database of records from params
    let db1 = params?.db || [];
    let TEMPLATEDB = params?.TEMPLATEDB || [];
    // Get element from element id in action object
    let obj = action.object?.[0] || action.object;
    let element = document.getElementById(obj?.["@id"]) || null;
    // Get itemlist record from db
    let itemList_record_type = (0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7).record_type.get(element);
    let itemList_record_id = (0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7).record_id.get(element);
    let itemList_record1 = db1.get(itemList_record_type, itemList_record_id);
    // Add items to itemList_record
    let items = action.result;
    for (let item of (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(items)){
        console.log("item", item.record || item);
        itemList_record1.insert(item.record);
    }
    let r1 = itemList_record1.record;
    console.log(JSON.stringify(r1, null, 4));
    console.log("rendering");
    console.log(TEMPLATEDB);
    let r = (0, $088016ba0ae1a642$export$c1781ce783707272).render(document.body, r1, TEMPLATEDB);
    console.log(r);
    return;
}
// -----------------------------------------------------
//  Copy value 
// -----------------------------------------------------
function $2b7cd5effc340282$var$copyValue(action, params) {
    /**
     * Copy value from element to clipboard
     * @param {Object} element
     * @param {Object} list
     * @returns {Object} The element
     */ // Retrieve database of records from params
    let db1 = params?.db || [];
    let TEMPLATEDB = params?.TEMPLATEDB || [];
    // Get element from element id in action object
    let obj = action.object?.[0] || action.object;
    let element = document.getElementById(obj?.["@id"]) || null;
    // Get record from db
    let record_type = (0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7).record_type.get(element);
    let record_id = (0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7).record_id.get(element);
    let record = db1.get(record_type, record_id);
    if ((0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7).type.get(element) == "thing") {
        let systemRecord = db1.get(record_type, record_id);
        let record = (0, $fbdfe69f48d32df8$export$c24b4489b93ad8cb).record.get(systemRecord);
        navigator.clipboard.writeText(JSON.stringify(record));
    }
    //todo: add wayt to copy values
    // Add items to itemList_record
    let items = action.result;
    for (let item of (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(items)){
        console.log("item", item.record || item);
        itemList_record.insert(item.record);
    }
    let r1 = itemList_record.record;
    console.log(JSON.stringify(r1, null, 4));
    console.log("rendering");
    console.log(TEMPLATEDB);
    let r = (0, $088016ba0ae1a642$export$c1781ce783707272).render(document.body, r1, TEMPLATEDB);
    console.log(r);
    return;
}
// -----------------------------------------------------
//  Comment
// -----------------------------------------------------
function $2b7cd5effc340282$var$registerDeleteValueEventHandler(element, config) {
    /**
     * Registers the delete value event handler
     * @param {Object} element
     * @param {Object} db
     * @returns {Object} The element
     */ element.addEventListener("click", (event)=>{
        let thingElement = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).dom.thing.traverse.current.thing.get(event.target);
        let propertyElement = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).dom.thing.traverse.current.property.get(event.target);
        let valueElement = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).dom.thing.traverse.current.value.get(event.target);
        // Get record from db
        let record_type = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).dom.thing.property.record_type.get(thingElement);
        let record_id = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).dom.thing.property.record_id.get(thingElement);
        let propertyID = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).dom.thing.property.propertyID.get(propertyElement);
        let valueHash = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).dom.thing.property.valueHash.get(valueElement);
        let value = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).dom.thing.record.value.get(valueElement);
        let record = db.filter((x)=>x?.["@type"] == record_type && x?.["@id"] == record_id)?.[0];
        let newValue = [];
        for (let v of (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(record?.[propertyID]))if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).base.hash.get(v) != valueHash && valueHash != v) newValue.push(v);
        record[propertyID] = newValue;
        console.log(record);
        let a3 = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).dom.thing.render(t, record);
    });
}


let $8ce030c78f8b39da$var$TEMPLATEDB = {};
const $8ce030c78f8b39da$export$b64d8dba83c7ded7 = {
    /**
     * current: returns the element that composes the current record
     * parent: returns element parent of
     *
     * How to use:
     *
     * Scenario 1: html template with placeholders
     *     - select top element of template
     *     - 
     */ // Base 
    isValid: $8ce030c78f8b39da$var$isValid,
    set: $8ce030c78f8b39da$var$set,
    // Initialization
    init: $8ce030c78f8b39da$var$init,
    // Properties
    property: (0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7),
    // Record manipulation
    record: (0, $ded7b0d2be5134be$export$b340c67ddc4bd41d),
    // Elements sections
    parts: (0, $2ad812101d8ee679$export$9ccd701369bc6cde),
    // Rendering
    render: $8ce030c78f8b39da$var$render,
    renderSystem: $8ce030c78f8b39da$var$renderSystem,
    // Getting elements
    traverse: (0, $6ab83f37dcb687d8$export$ffaccbdd67f021cd),
    // events
    event: (0, $2b7cd5effc340282$export$ddce14f862b473c6)
};
// -----------------------------------------------------
//  Base 
// -----------------------------------------------------
function $8ce030c78f8b39da$var$isValid(element) {
    /**
     * Checks if a element is valid (element and has type)
     * @param {Object} value
     * @returns {Boolean}
     */ if (!(0, $c8b0dc629c726d48$export$e0169ab077dc0819).isValid(element)) return false;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(getElementType(element))) return true;
    return false;
}
function $8ce030c78f8b39da$var$init(element, TEMPLATEDB, force = false) {
    /**
     * Initializes an element
     * @param {Object} element
     * @returns {Object} The element
     */ return (0, $0c0a864fcee6a66f$export$b8f607a8a10bde0a).init(element, TEMPLATEDB, force);
}
function $8ce030c78f8b39da$var$set(element, record, conditions) {
    /**
     * Sets the record of an element
     * @param {Object} element
     * @param {Object} record
     * @returns {Object} The element
     */ return (0, $088016ba0ae1a642$export$c1781ce783707272).render(element, record, conditions, $8ce030c78f8b39da$var$TEMPLATEDB);
}
function $8ce030c78f8b39da$var$render(element, record, conditions) {
    /**
     * Sets the record of an element
     * @param {Object} element
     * @param {Object} record
     * @returns {Object} The element
     */ return (0, $088016ba0ae1a642$export$c1781ce783707272).render(element, record, conditions, $8ce030c78f8b39da$var$TEMPLATEDB);
}
function $8ce030c78f8b39da$var$renderSystem(element, record, conditions, TEMPLATEDB) {
    /**
     * Sets the record of an element
     * @param {Object} element
     * @param {Object} record
     * @returns {Object} The element
     */ return (0, $989c7a224980c1bb$export$6ee4764c2ac4fe01).render(element, record, conditions, TEMPLATEDB);
}








const $d8921a44da82fdcb$export$330e2f94b19657a7 = {
    initElements: $d8921a44da82fdcb$var$initElements,
    initObserver: $d8921a44da82fdcb$var$initObserver,
    getThings: $d8921a44da82fdcb$var$getThings,
    updateThing: $d8921a44da82fdcb$var$updateThing
};
function $d8921a44da82fdcb$var$initElements(element) {
    /**
     * Initializes the orchestrator and the elements under it
     * @returns
     * 
     */ // Error handling
    element = element || document.body;
    //
    return (0, $8ce030c78f8b39da$export$b64d8dba83c7ded7).init(element);
}
function $d8921a44da82fdcb$var$initObserver(element, thingDB) {
    /**
     * Initialize observer so if new elements are added to the DOM, they are updated
     * @param {Object} element The element to observe
     * @returns {Object} The observer
     * 
     */ // Error handling
    element = element || document.body;
    const config = {
        attributes: true,
        childList: true,
        subtree: true
    };
    // Callback function to execute when mutations are observed
    const callback = (mutationList, observer)=>{
        for (const mutation of mutationList){
            if (mutation.type === "childList") for (let n of mutation.addedNodes){
                // Skip if not thing element
                if (!(0, $8ce030c78f8b39da$export$b64d8dba83c7ded7).isValid(n)) continue;
                //console.log('Observer - new element added', th.isValid(n), n.tagName)
                let ref = (0, $8ce030c78f8b39da$export$b64d8dba83c7ded7).ref.get(n);
                //console.log(ref)
                for (let t of thingDB){
                    let t_type = t?.record_type || t?.["@type"];
                    let t_id = t?.record_id || t?.["@id"];
                    if (t_type == ref?.["@type"] && t_id == ref?.["@id"]) //console.log('update thing')
                    $d8921a44da82fdcb$var$updateThing(element, t);
                }
            }
            else mutation.type;
        }
    };
    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);
    // Start observing the target node for configured mutations
    observer.observe(element, config);
// Later, you can stop observing
//observer.disconnect();
}
function $d8921a44da82fdcb$var$getThings(element) {
    /**
     * Returns the things under the orchestrator.
     * @param {Object} element The element. Uses document.body if missing
     * @returns {Array}
     */ element = element || document.body;
    let things = (0, $8ce030c78f8b39da$export$b64d8dba83c7ded7).ref.getAll(element);
    return things;
}
function $d8921a44da82fdcb$var$updateThing(element, record) {
    /**
     * Update all elements with the corresponding thing
     * @param {Object} element The element
     * @param {Object} record_or_record_type The record type
     * @param {String} record_id The record id
     * @returns {Object} The record
     */ // Error handling
    element = element || document.body;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(record)) return;
    //record = record?.record || record
    // Render elements with thing
    (0, $8ce030c78f8b39da$export$b64d8dba83c7ded7).render(element, record);
    // Return
    return;
}


const $c4455f90708ddfe2$export$1cfcdeb349d89715 = {
    get: $c4455f90708ddfe2$var$getCursorPosition,
    set: $c4455f90708ddfe2$var$setCursorPosition
};
function $c4455f90708ddfe2$var$getCursorPosition(div) {
    let cursorPosition = 0;
    // Check if the div has focus
    if (window.getSelection && document.activeElement === div) {
        const selection = window.getSelection();
        if (selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const preCursorRange = range.cloneRange();
            // Move the start of the range to the beginning of the div
            preCursorRange.selectNodeContents(div);
            preCursorRange.setEnd(range.startContainer, range.startOffset);
            // The length of preCursorRange is the cursor position within the div
            cursorPosition = preCursorRange.toString().length;
        }
    }
    return cursorPosition;
}
function $c4455f90708ddfe2$var$setCursorPosition(div, position) {
    // Ensure the div is focused
    div.focus();
    // Get the text nodes in the div
    function getTextNodes(node) {
        let textNodes = [];
        if (node.nodeType === Node.TEXT_NODE) textNodes.push(node);
        else for (let child of node.childNodes)textNodes = textNodes.concat(getTextNodes(child));
        return textNodes;
    }
    const textNodes = getTextNodes(div);
    let currentPos = 0;
    let range = document.createRange();
    let found = false;
    // Loop through the text nodes to find the right position
    for (let textNode of textNodes){
        const nodeLength = textNode.textContent.length;
        if (currentPos + nodeLength >= position) {
            range.setStart(textNode, position - currentPos);
            range.collapse(true);
            found = true;
            break;
        }
        currentPos += nodeLength;
    }
    // Set the cursor position
    if (found) {
        const selection = window.getSelection();
        selection.removeAllRanges();
        selection.addRange(range);
    } else console.warn("Position out of range");
}


const $3a31490163c9c724$export$3633c9dc515d5cf9 = {
    cursor: (0, $c4455f90708ddfe2$export$1cfcdeb349d89715),
    element: (0, $c8b0dc629c726d48$export$e0169ab077dc0819),
    event: (0, $2adfa4e445ef1d89$export$631b1a0163af1868),
    thing: (0, $8ce030c78f8b39da$export$b64d8dba83c7ded7),
    thingObserver: (0, $21085080d3b8a3c0$export$ae576630a286260c),
    template: (0, $0f67e8fb6483c62d$export$d028bac85af6d944),
    orchestrator: (0, $d8921a44da82fdcb$export$330e2f94b19657a7)
};



const $4f0e7017aa5846ec$export$a8f5b9913def03f3 = {
    headings: (0, $3766123d98edc643$export$36b1aac33f5f1b68)
};


function $1d1d7e6925c636ce$export$bba2aacf8566461b() {
    /**
     *
     *
     */ return `

<div class="container px-4 py-5">


    <div class="row  g-5 py-5">


        <!-- toc -->
        <div class="col col-md-4 order-2 sticky-top" >

            <div class="sticky-top">
                <ul class="list-unstyled">
                    {{#hasPart}}
                        <li >
                            
                           <a href="#{{hasPart.@id}}">{{hasPart._heading1}}</a>
                             
                              <ul class="list-unstyled">
                              
                                    {{#hasPart.hasPart}}
                                    
                                        <li>
                                            <a href="#{{hasPart.hasPart.@id}}">{{hasPart.hasPart._heading1}}</a>
                                        </li>
        
        
                                    {{/hasPart.hasPart}}
                              </ul>
                          
                        </li>
                        
                    {{/hasPart}}
                </ul>
            </div>
        </div>

        <!-- article -->

        <div class="col-md-8 order-1">

            <div class="container mt-4 mb-2">


                <!-- image --> 
                    {{#_headingImage}}
            
                        <img src="{{_headingImage}}" class="d-block my-5 img-fluid" alt="{{_headingImage}}" width="700" height="500" loading="lazy">
            
                    {{/_headingImage}}


                <!-- heading -->
                    {{#_heading1}}
                        <h2 class="fw-bold mt-5 text-body-emphasis mt-5">{{_heading1}}</h2>
                    {{/_heading1}}
            
                

                <!-- date -->
                    {{#_headingDate}}
                        <small>{{_headingDate}}</small>
                    {{/_headingDate}}
                    


                <!-- author -->
                    {{#author}}
                        <small>{{author._heading1}}</small>
                    {{/author}}


                <!-- Abstract -->

                    {{#abstract}}    
                        <p class="lead">
                          {{abstract}}
                        </p>
                    {{/abstract}}    

                <!-- content -->
                    {{#_headingDescription}}
                        <p class="lead mt-5">{{_headingDescription}}</p>
                    {{/_headingDescription}}


        
                <!-- article parts -->
                {{#hasPart}}
        
                    <div class="container ps-0 pe-0 mt-5 mb-1 ms-0 me-0" id="{{hasPart.@id}}">
                        {{#hasPart._headingImage}}
            
                            <img src="{{hasPart._headingImage}}" class="d-block my-5 img-fluid" alt="{{hasPart._headingImage}}" width="300" height="200" loading="lazy">
            
                        {{/hasPart._headingImage}}
            
                        {{#hasPart._heading1}}
                            <h3 class="fw-bold text-body-emphasis">{{hasPart._heading1}}</h3>
                        {{/hasPart._heading1}}
            
                        {{#hasPart._headingDescription}}
                            <p class="lead">{{hasPart._headingDescription}}</p>
                        {{/hasPart._headingDescription}}
            
            
                        <!-- article parts -->
                        {{#hasPart.hasPart}}
        
                            <div class="container mt-5 mb-1 ms-0 me-0" id="{{hasPart.hasPart.@id}}">
                                {{#_headingImage}}
                
                                    <img src="{{hasPart.hasPart._headingImage}}" class="d-block img-fluid" alt="{{hasPart.hasPart._headingImage}}" width="150" height="100" loading="lazy">
                
                                {{/hasPart.hasPart._headingImage}}
                                
                                {{#hasPart.hasPart._heading1}}
                                    <h4 class="fw-bold text-body-emphasis mt-5">{{hasPart.hasPart._heading1}}</h4>
                                {{/hasPart.hasPart._heading1}}
                
                                {{#hasPart.hasPart._headingDescription}}
                                    <p class="lead">{{hasPart.hasPart._headingDescription}}</p>
                                {{/hasPart.hasPart._headingDescription}}
            
                            </div>
                           
            
                        {{/hasPart.hasPart}}
                        
                    </div>
            
                {{/hasPart}}
            </div>
        </div>

    </div>
</div>


`;
}



function $76c1cc9e1ba74570$export$aa3e815946b80764(classes, prefixes) {
    //
    prefixes = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(prefixes) || [];
    prefixes = prefixes.filter((x)=>x !== undefined && x !== null);
    let prefix = prefixes.join(".");
    if (prefix != "") prefix = prefix + ".";
    return ` <div class="card ${(0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(classes).join(" ")}" style="width: 18rem;">
         
            <img src="{{${prefix}image.contentUrl}}" class="card-img-top" alt="..." onerror="this.style.display='none'">
           
            <div class="card-body">
            {{#${prefix}_headingPosition}}
              <h5 class="card-title">{{${prefix}_headingPosition}}</h5>
            {{/${prefix}_headingPosition}}
              <h5 class="card-title">{{${prefix}_headingStars}}</h5>
                <h5 class="card-title">{{ ${prefix}_heading1 }}</h5>
                <p class="card-text">{{ ${prefix}_heading2 }}</p>
                {{#${prefix}potentialAction}}
                    <a href="{{ potentialAction.url}}" class="btn btn-primary">{{ ${prefix}potentialAction.name}}</a>
                {{/${prefix}potentialAction}}
            </div>
        </div>
    `;
}



function $709a68bd1ec08152$export$1b08a1f3c4097168(classes, prefixes) {
    //
    prefixes = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(prefixes) || [];
    prefixes = prefixes.filter((x)=>x !== undefined && x !== null);
    let prefix = prefixes.join(".");
    if (prefix != "") prefix = prefix + ".";
    return ` 
    
        <div class="card mb-3" style="max-width: 300px;">
            <div class="row g-0">

    
               <!-- image -->
               {{#${prefix}image.contentUrl}}
                    <div class="col col-sm-4 align-self-center">
                        <a href="#" class="btn h-100" data-bs-toggle="modal" data-bs-target="#modalID">
                              <img src="{{${prefix}image.contentUrl}}" class="card-img-top" alt="..." onerror="this.style.display='none'">
                        </a>
                    </div>

                {{/${prefix}image.contentUrl}}

                <!-- content -->
                <div class="col pt-0 align-self-top">
                
                    <div class="row mt-0 me-1">
                        <span
                            class="mt-0 mb-1 align-self-end text-end justify-content-end kr-action">{{kr-action}}</span>
                    </div>
                    
                    <div class="card-body">

                        <div class="row align-self-center">
                            <h5 class="card-title mb-0">
                                <font size="-1">{{_heading1}}</font>
                            </h5>
                            <p class="card-text mt-0">
                                <font size="-1">{{_heading2}}</font>
                            </p>

                        </div>
                    </div>
                    <div class="row me-1 mt-0 text-end justify-content-end">
                        <p class="card-text"><small class="text-body-secondary">
                                <font size="-1">{{_headingStatus}}</font>
                            </small></p>
                    </div>

                </div>
            </div>
        </div>
    `;
}



function $85edee0a0611fc02$export$6210fa4921d2a466(record) {
    return `


     


            <form>
                
                <div class="mb-3">

                
                {{#transpose: }}
                    
                    {{#filter:value.@type=PropertyValueSpecification}}

                        <!-- for checkbox -->
                        {{#value | filter:_headingHtmlInputType=checkbox}}

                            <div class="form-check mt-3">
                                <input 
                                class="form-check-input " 
                                type="checkbox" value="" 
                                id="{{value.valueName}}"
                                {{#value | filter:required=true }}
                                    required 
                                {{/value}}
                                >
                                <label 
                                class="form-check-label" 
                                for="{{value.@id}}"
                                >
                                {{value._headingDescription}}
                                </label>
                            </div>
                            
                        {{/value}}


                        {{#value | filter:_headingHtmlInputType=ne checkbox}}

                            
                                <label for="exampleInputEmail1" class="form-label text-capitalize mt-3">
                                    {{value.valueName}}
                                </label>
                          
                                <input 
                                type="{{value._headingHtmlInputType}}"
                                class="form-control" 
                                
                                
                                value="{{value.defaultValue}}"
                                id="{{value.valueName}}" 
                                aria-describedby="emailHelp"
            
                                
                                {{#value | filter:multipleValues=false }}
                                    multiple
                                {{/value}}
            
                                {{#value | filter:readonlyValue=true }}
                                    readonly 
                                {{/value}}
                    
                                {{#value | filter:required=true }}
                                    required 
                                {{/value}}


                                {{#value.valuePattern}}
                                    pattern="{{value.valuePattern}}"
                                {{/value.valuePattern}}
            
                                {{#value.valueMaxLength}}
                                    maxLength="{{value.valueMaxLength}}"
                                {{/value.valueMaxLength}}
            
                                {{#value.minValue}}
                                    min="{{value.minValue}}"
                                {{/value.minValue}}
                        
                                {{#value.maxValue}}
                                    max="{{value.maxValue}}"
                                {{/value.maxValue}}
            
                                {{#value.stepValue}}
                                    max="{{value.stepValue}}"
                                {{/value.stepValue}}
                        
                                
                                >
                         {{/value}}
                    
                    {{/filter}}

                     
                {{/transpose}}

            </div>
                
            <button type="submit" class="btn btn-primary">{{name}}</button>
        
        </form>
                
                
    
    `;
}
function $85edee0a0611fc02$var$getPropertyValuesSpecifications(record) {
    let pvs;
    for(let k in record)if (k.includes("_input")) pvs = pvs.merge(history.toArray(record[k]));
    return pvs;
}


function $cc70f1201526a438$export$2416a15e4d3cccfa() {
    let formContent = (0, $85edee0a0611fc02$export$6210fa4921d2a466)();
    return `
    
    

    <div class="container col-xl-10 col-xxl-8 px-4 py-5">

        <div class="row align-items-center g-lg-5 py-5">

            <div class="col-lg-7 text-center text-lg-start">
            
                <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">{{_heading1}}</h1>
                <p class="col-lg-10 fs-4">{{_headingDescription}}</p>
                
            </div>


            <div class="col-md-10 mx-auto col-lg-5">
            
                ${formContent}
                
            </div>

        </div>

    </div>
    
    
    
    
    
    `;
}


const $a03ed131cc6a7a3f$var$hex = "#228BE6";
const $a03ed131cc6a7a3f$var$rgb = parseInt($a03ed131cc6a7a3f$var$hex.slice(1), 16);
const $a03ed131cc6a7a3f$var$r = $a03ed131cc6a7a3f$var$rgb >> 16 & 255;
const $a03ed131cc6a7a3f$var$g = $a03ed131cc6a7a3f$var$rgb >> 8 & 255;
const $a03ed131cc6a7a3f$var$b = $a03ed131cc6a7a3f$var$rgb & 255;
function $a03ed131cc6a7a3f$export$dbf350e5966cf602(palette) {
    // Add rgb colors
    for(let k in palette){
        let hex = palette[k];
        const rgb = parseInt(hex.slice(1), 16);
        const r = rgb >> 16 & 255;
        const g = rgb >> 8 & 255;
        const b = rgb & 255;
        palette[k + "_rgb"] = `${r}, ${g}, ${b}`;
    }
    return `

    <style>


    :root{

        --xx-white:      ${palette.white};

        --xx-light:      ${palette.light};
        --xx-dark:       ${palette.dark};
        --xx-primary:    ${palette.primary};
        --xx-secondary:  ${palette.secondary};
        --xx-info:       ${palette.info};
        --xx-success:    ${palette.success};
        --xx-warning:    ${palette.warning};
        --xx-danger:     ${palette.danger};


        --bs-white: var(--xx-white);
        --bs-light: var(--xx-light);
        --bs-dark: var(--xx-dark);
        --bs-primary: var(--xx-primary);
        --bs-secondary: var(--xx-secondary);
        --bs-info: var(--xx-info);
        --bs-success: var(--xx-success);
        --bs-warning: var(--xx-warning);
        --bs-danger: var(--xx-danger);

        --bs-white-rgb: ${palette.white_rgb};
        --bs-light-rgb: ${palette.light_rgb};
        --bs-dark-rgb: ${palette.dark_rgb};
        --bs-primary-rgb: ${palette.primary_rgb};
        --bs-secondary-rgb: ${palette.secondary_rgb};
        --bs-info-rgb: ${palette.info_rgb};
        --bs-success-rgb: ${palette.success_rgb};
        --bs-warning-rgb: ${palette.warning_rgb};
        --bs-danger-rgb: ${palette.danger_rgb};


        --bs-primary-color: var(--bs-dark);
        --bs-body-color: var(--bs-dark);
        --bs-link-color: var(--bs-primary);
        --bs-emphasis-color:  hsl(
            from var(--bs-dark)
                calc(h - 0.15)
                calc(s - 0.15)
                calc(l - 0.15)
                / 
                alpha
          );

        
        --bs-secondary-color: var(--bs-secondary);

        --bs-primary-hover-bg: hsl(
            from var(--bs-primary)
                calc(h - (l*0.15))
                calc(s - (s*0.15))
                calc(l - (l*0.15))
                / 
                alpha
          );

        --bs-primary-active-bg: hsl(
            from var(--bs-primary)
                calc(h - (l*0.20))
                calc(s - (s*0.20))
                calc(l - (l*0.20))
                / 
                alpha
          );

        --bs-primary-subtle-bg: hsl(
            from var(--bs-primary)
                calc(h + (l*0.20))
                calc(s + (s*0.20))
                calc(l + (l*0.20))
                / 
                alpha
          );



        --bs-secondary-hover-bg: hsl(
            from var(--bs-secondary)
                calc(h - (l*0.15))
                calc(s - (s*0.15))
                calc(l - (l*0.15))
                / 
                alpha
          );

        --bs-secondary-active-bg: hsl(
            from var(--bs-secondary)
                calc(h - (l*0.20))
                calc(s - (s*0.20))
                calc(l - (l*0.20))
                / 
                alpha
          );

        --bs-secondary-subtle-bg: hsl(
            from var(--bs-secondary)
                calc(h + (l*0.20))
                calc(s + (s*0.20))
                calc(l + (l*0.20))
                / 
                alpha
          );




        

    }




   .filter-src {
    filter: invert(48%) sepia(79%) saturate(2476%) hue-rotate(86deg) brightness(118%) contrast(119%);

   }


    button.btn-primary {
        --bs-btn-color: #fff;
        --bs-btn-bg: var(--bs-primary);
        --bs-btn-border-color: var(--bs-primary);
        --bs-btn-hover-color: #fff;
        --bs-btn-hover-bg: var(--bs-primary-hover-bg);
        --bs-btn-hover-border-color: var(--bs-primary-hover-bg);
        --bs-btn-focus-shadow-rgb: 49, 132, 253;
        --bs-btn-active-color: #fff;
        --bs-btn-active-bg: var(--bs-primary-active);
        --bs-btn-active-border-color: var(--bs-primary-active);
        --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
        --bs-btn-disabled-color: #fff;
        --bs-btn-disabled-bg: var(--bs-primary);
        --bs-btn-disabled-border-color: var(--bs-primary);
    }


    button.btn-secondary {
        --bs-btn-color: #fff;
        --bs-btn-bg: var(--bs-secondary);
        --bs-btn-border-color:var(--bs-secondary);
        --bs-btn-hover-color: #fff;
        --bs-btn-hover-bg: var(--bs-secondary-hover-bg);
        --bs-btn-hover-border-color:var(--bs-secondary-hover-bg);
        --bs-btn-focus-shadow-rgb: 130, 138, 145;
        --bs-btn-active-color: #fff;
        --bs-btn-active-bg: var(--bs-secondary-active-bg);
        --bs-btn-active-border-color:var(--bs-secondary-active-bg);
        --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
        --bs-btn-disabled-color: #fff;
        --bs-btn-disabled-bg:var(--bs-secondary);
        --bs-btn-disabled-border-color:var(--bs-secondary);
    }

    </style>
    `;
}


function $2e6f30c3f5256cba$export$606190e461fe9031() {
    /**
     *
     *
     */ return `
    
<div class="container px-4 py-5">
    
    <div class="row align-items-md-center g-5 py-5">
    
        <div class="col col-12 col-md-6 d-flex flex-column align-items-start gap-2">


            {{#_headingImage}}
                <div class="d-none d-md-block">
                    <img src="{{_headingImage}}" class="d-block mx-lg-auto img-fluid" alt="{{_headingImage}}" width="700" height="500" loading="lazy">
                </div>
            
            {{/_headingImage}}
            
            {{#_heading1}}
                <h2 class="fw-bold text-body-emphasis">{{_heading1}}</h2>
            {{/_heading1}}

            {{#_headingDescription}}
                <p class="lead">{{_headingDescription}}</p>
            {{/_headingDescription}}
            
            {{#potentialAction}}
                <a href="{{potentialAction.url}}" class="btn btn-primary btn-lg">{{potentialAction.name}}</a>
            {{/potentialAction}}
            
        </div>
            
        <div class="col">
            
            <div class="row row-cols-1 row-cols-sm-2 g-4">
            
                {{ #positiveNotes }}
                    {{#positiveNotes.item}}
                        
                        <div class="col  d-flex flex-column gap-2">
    
                            
                            {{#positiveNotes.item._headingImage}}

        
                                    <div class="row d-none d-md-block">
                                        <div class="col-md-4">
                                        
                                            <img 
                                            src="{{positiveNotes.item._headingImage}}" 
                                            class="d-block mx-lg-auto img-fluid" 
                                            alt="{{positiveNotes.item.._headingImage}}" 
                                            loading="lazy"
                                            >
                                            </div>
                                        <div class="col-md-4">
                                            </div>
                                        <div class="col-md-4">
                                            </div>
                                    </div>
                            {{/positiveNotes.item._headingImage}}
                    
                               
                            <h4 class="fw-semibold mb-0 mt-3 text-body-emphasis">{{positiveNotes.item._heading1}}</h4>
                            <p class="">{{positiveNotes.item._headingDescription}}</p>
                            
                            {{#positiveNotes.item.potentialAction}}
                                <a href="{{positiveNotes.item.potentialAction.url}}" class="btn btn-primary btn-lg">
                                    {{hasPart.potentialAction.name}}
                                </a>
                            {{/positiveNotes.item.potentialAction}}
                            
                        </div>
                    {{ /positiveNotes.item }}
                {{ /positiveNotes }}
                
            
            </div>
        </div>
    </div>
</div>


`;
}


function $c1a4b784a1c88929$export$adb608be33961c98() {
    return `
            
                <div class="container">
                    <footer 
                    class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark"
                    >
                    
                        <div class="col mb-3">
                        
                            <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                                <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
                            </a>
                            
                            <p class="text-body-secondary">\xa9 2024</p>
                        </div>

                        <div class="col mb-3">

                        </div>

                        <div class="col mb-3">
                         
                        </div>

                        <div class="col mb-3">
                            
                        </div>

                        <div class="col mb-3">
                            

                               {{ #hasPart | filter:@type=WPFooter }}

                                   <h5>{{ hasPart.name }}</h5>
                                   <ul class="nav flex-column">

                                    {{ #hasPart.hasPart }}
                                        
                                        <li class="nav-item mb-2">
                                            <a href="{{ hasPart.hasPart.url }}" class="nav-link p-0 text-body-secondary">{{ hasPart.hasPart.name }}</a>
                                        </li>

                                    {{ /hasPart.hasPart }}
                                    
                                {{ /hasPart }}

                                
                            </ul>
                        </div>
                    </footer>
                </div>
                
                `;
}



function $caaf9e564e828a9b$export$38e42c68cf43b5d4() {
    /**
         * @type {string}
         */ let content = `
        
            <header class="p-3 text-bg-dark">
                <div class="container">
                    <nav class="navbar navbar-expand-lg">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="/">{{name}}</a>
                            <button
                                class="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span class="navbar-toggler-icon"></span>
                            </button>
            
                            <div
                                class="collapse navbar-collapse"
                                id="navbarSupportedContent"
                            >
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    {{#hasPart | filter:@type=WPHeader }}
                                    {{#hasPart.hasPart}}
            
                                    <li class="nav-item">
                                        <a
                                            href="{{hasPart.hasPart.url}}"
                                            class="nav-link px-2 text-secondary"
                                            >{{hasPart.hasPart.name}}</a
                                        >
                                    </li>
            
                                    {{/hasPart.hasPart}} {{/hasPart }}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            `;
    return content;
}


function $fba729fe2c3be31b$export$124049a9e3d0d4c3() {
    return `
            
                <div class="container col-xxl-8 px-4 py-5">
                    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                         
                        <div class="d-none d-md-block col-10 col-sm-8 col-lg-6">
                         
                            {{#_headingImage}}
                               
                                <img src="{{_headingImage}}" class="d-block mx-lg-auto img-fluid filter-src" alt="{{_headingImage}}" width="700" height="500" loading="lazy" />
                               
                            {{/_headingImage}}
                            
                        </div>


                        
                        <div class="col-lg-6">

                            {{#_heading1 }}
                                <h1 class="display-5 fw-bold  lh-1 mb-3">{{_heading1}}</h1>
                            {{/_heading1 }}
                            
                            {{#_headingDescription }}
                                <p class="lead">{{_headingDescription}}</p>
                            {{/_headingDescription }}

                            {{#potentialAction}}
                                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                                    <button type="button" href="{{potentialAction.url}}" class="btn btn-primary btn-lg px-4 me-md-2">
                                        {{potentialAction.name}}
                                    </button>
                                </div>
                            {{/potentialAction}}
                            
                        </div>

                        
                    </div>
                </div>
           
                    
                    `;
}


function $69c32621a8b1cbcb$export$91392eeb01bb62de() {
    return `



      
            <div class="container col-xxl-8 px-4 py-5">
                <div class="row  align-items-center g-5 py-5">




                    <div class="col-10 col-sm-8 col-lg-6">

                        {{#_headingImage}}
                            <div class="d-none d-md-block">
                                <img src="{{_headingImage}}" class="d-block mx-lg-auto img-fluid filter-src" alt="{{_headingImage}}" width="700" height="500" loading="lazy" />
                            </div>

                        {{/_headingImage}}
                        
                        {{#_heading1 }}
                            <h1 class="display-5 fw-bold  lh-1 mb-3">{{_heading1}}</h1>
                        {{/_heading1 }}
                        
                        {{#_headingDescription }}
                            <p class="lead">{{_headingDescription}}</p>
                        {{/_headingDescription }}

                        

                    </div>



                    <div class="col-lg-6">

                        <!-- howTo step -->
                        {{#step }}
                             
                                <!-- item start -->
                                    <div class="row">
    
                                        {{#step._headingImage}}
                                            <div class="d-none d-md-block col col-3">
                                                <img 
                                                src="{{step._headingImage}}" 
                                                class="d-block mx-lg-auto img-fluid filter-src" 
                                                alt="{{step._headingImage}}" 
                                                width="700" height="500" loading="lazy" 
                                                />
                                            </div>    
                                        {{/step._headingImage}}

                                        <div class="col-2 p-0 me-5">
                                            <div class="bg-primary m-0 text-white text-center">
                                                <p class="fs-1"> {{step.position}} </p>
                                            </div>
                                        </div>
                                        <div class="col-10 d-md-none">
                                        </div>
                                        
                                        <div class="col">
                                            <h4>{{step._heading1}}</h4>
                                            <p>{{step._headingDescription}}</p>
                                        </div>
                                        
                                    </div>
                                <!-- item stop -->
                            
                        {{/step}}


                        
                        




                        

                    </div>


                </div>
            </div>
       

    
    
    
    `;
}


const $7336d3e0ff0b04a2$export$df03f54e09e486fa = {
    drag: $7336d3e0ff0b04a2$var$dragArrow,
    expandOn: $7336d3e0ff0b04a2$var$expandOn,
    expandOff: $7336d3e0ff0b04a2$var$expandOff
};
function $7336d3e0ff0b04a2$var$dragArrow() {
    /**
     * Creates a drag arrow
     */ return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrows-move" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 1.707V5.5a.5.5 0 0 1-1 0V1.707L6.354 2.854a.5.5 0 1 1-.708-.708zM8 10a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 14.293V10.5A.5.5 0 0 1 8 10M.146 8.354a.5.5 0 0 1 0-.708l2-2a.5.5 0 1 1 .708.708L1.707 7.5H5.5a.5.5 0 0 1 0 1H1.707l1.147 1.146a.5.5 0 0 1-.708.708zM10 8a.5.5 0 0 1 .5-.5h3.793l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L14.293 8.5H10.5A.5.5 0 0 1 10 8"/>
</svg>`;
}
function $7336d3e0ff0b04a2$var$expandOn() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
</svg>`;
}
function $7336d3e0ff0b04a2$var$expandOff() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
</svg>`;
}


function $2daab24e0d2386f8$export$73754b0a4e25f0a4(prefixes) {
    prefixes = prefixes || [];
    let prefix = prefixes.join(".");
    if (prefix != "") prefix = prefix + ".";
    return `

        
        <!-- Potential action menu -->
        <div class="dropdown">
        
            <a 
            class="btn" 
            href="#" 
            role="button" 
            data-bs-toggle="dropdown" 
            aria-expanded="false"
            >
            
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>

                </svg>
                
            </a>
            
            <ul class="dropdown-menu">
        
                <form method="post">

                    <input type="hidden" id="@type" name="@type" value="{{${prefix}@type}}">
                    <input type="hidden" id="@id" name="@id" value="{{${prefix}@id}}">
                    
                    {{#${prefix}potentialAction}}

                        <li>
    
                            <button 
                            type="submit" 
                            class="dropdown-item" 
                            formaction="{{${prefix}potentialAction.url}}">
                            
                                {{${prefix}potentialAction.name}}
                            
                            </button>
                        
                        </li>
    
                    {{/${prefix}potentialAction}}
            

                </form>


                <li>
                    <hr class="dropdown-divider">
                </li>


                <form method="post">

                    <input type="hidden" id="@type" name="item.@type" value="{{${prefix}item.@type}}">
                    <input type="hidden" id="@id" name="@id" value="{{${prefix}item.@id}}">
                    
                    {{#${prefix}item.potentialAction}}

                        <li>
    
                            <button 
                            type="submit" 
                            class="dropdown-item" 
                            formaction="{{${prefix}item.potentialAction.url}}">
                            
                                {{${prefix}item.potentialAction.name}}
                            
                            </button>
                        
                        </li>
    
                    {{/${prefix}item.potentialAction}}
            
                </form>
                
            </ul>
                
        </div>
        
        
        `;
}




function $f4b33ebb584657d4$export$53f1d5ea8de3d7c(prefixes = []) {
    prefixes = prefixes || [];
    let prefix = prefixes.join(".");
    if (prefix != "") prefix = prefix + ".";
    return ` <div class="row align-items-center mt-2 mb-2" >

                <div class="col col-12 col-sm-6 col-md-2">
                   
                    <img 
                    src="{{${prefix}_headingImage}}" 
                    class="img-fluid" 
                    alt{{${prefix}_headingDescription}} 
                         
                    onerror="this.style.display='none'"
                    >
                   
                </div>
                
                <div class="col col-12 col-sm-6 col-md-10">
                    <div class="row d-flex">
                        <div class="col col-md-auto">
                            {{ ${prefix}_heading1 }}
                        </div>
            
                        <div class="col col-12 col-md-auto text-truncate ">
                            {{ ${prefix}_heading2 }}
                        </div>
            
                        <div class="col col-12 col-md-auto ">
                            {{ ${prefix}_headingStatus }}
                        </div>
            
                        <div class="col col-12 col-md-auto text-truncate">
                            <a href="{{ ${prefix}url }}">Link</a>
                        </div>
                    </div>
                </div>
            
             </div>
    `;
}



function $155333d55623e825$export$f90eb7c4d1fc985e(classlist, itemContent, prefixes) {
    // Handle classes
    let classes = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(classlist).join(" ");
    // Handle prefixes
    prefixes = prefixes || [];
    let prefix = prefixes.join(".");
    if (prefix != "") prefix = prefix + ".";
    itemContent = itemContent || (0, $f4b33ebb584657d4$export$53f1d5ea8de3d7c)(prefixes.concat([
        "item"
    ]));
    return `

        <div class=" mt-1 mb-1 ${classes || ""}">
            <nav>
                <div class="row d-flex align-items-center">
    
                    <div class="col col-auto order-1 krSelected justify-content-center text-center" >
                        <div class="form-check justify-content-center text-center">
                            <input 
                            class="form-check-input checkboxes"
                            type="checkbox" 
                            value="" 
                            id="checked_{{${prefix}item.@type}}_{{${prefix}item.@id}}" 
                            name="checked_{{${prefix}item.@type}}_{{${prefix}item.@id}}" 
                            >
                        </div>
                    </div>
    
                        
                    <div class="col col-auto order-2 order-sm-3 text-center">
                        <span class="krProperty" data-propertyID="position">
                        {{ ${prefix}position }}
                        </span>
                    </div>
                    
    
                     <div class="col col-12 col-sm-1 flex-sm-grow-1 order-5 order-sm-3" >
                        
                        <span class="krProperty" data-propertyID="item">
                        <main>
                            ${itemContent}
                        </main>
                        </span>
                    </div>
                
                    
                    <div class="col col-auto order-3 order-sm-4 ms-auto text-end">
                        
                        ${(0, $2daab24e0d2386f8$export$73754b0a4e25f0a4)(prefixes)}
                    </div>
        
                </div> 
        
                <div class="row">
        
                    <div class="col col-sm-3">
                    </div>
        
                    <div class="col col-sm-3">
                    </div>
        
                    <div class="col col-sm-3">
                    </div>
        
                </div> 
            </nav>
        </div>
    
    
    `;
}



function $03cb398f5a2433c4$export$b97dc3b2d35f8775(classlist, classlistListItem, content, prefixes = []) {
    // Handle classes
    let classes = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(classlist).join(" ");
    //
    prefixes = prefixes || [];
    prefixes = prefixes.filter((x)=>x !== undefined && x !== null);
    let prefix = prefixes.join(".");
    if (prefix != "") prefix = prefix + ".";
    let id = "checkbox_" + String(crypto.randomUUID());
    let result = `

        <div class="container checkboxParent ${classes || ""}">

            <div class="row border-top border-bottom align-items-center" >


                <div class="col col-auto ">
                    <div class="form-check justify-content-center text-center">
                        <input 
                        id="${id}"
                        class="form-check-input" 
                        type="checkbox" 
                        value="" 
                        onClick="console.log('click'); for(let i of this.closest('.checkboxParent').parentElement.querySelectorAll('.checkboxes')){i.checked = this.checked};"
                        >
                    </div>

                </div>
                
                <div class="col col-auto ">
                    {{${prefix}name}}
                </div>

                <div class="col col-auto ms-auto">
                    ${(0, $2daab24e0d2386f8$export$73754b0a4e25f0a4)(prefixes)}
                </div>

            </div>

        
            {{ #itemListElement }}

                
                   ${(0, $155333d55623e825$export$f90eb7c4d1fc985e)(classlistListItem, content, prefixes.concat([
        "itemListElement"
    ]))}
              
               
            {{ /itemListElement }}

                
            <div class="row mt-2 mb-2 border-bottom align-items-center">

            </div>

        </div>

    
    `;
    return result;
}


function $b22cd3de1d812d2d$export$f8fce98513fdd41a(record) {
    /**
     * Returns the record in JSON ld format
     * 
     */ if (!record || record == null) return "";
    record["@context"] = record["@context"] || "https://schema.org/";
    return `
    
    <script type="application/ld+json">

        ${JSON.stringify(record, null, 4)}
        
    </script>

    `;
}




function $7815f8c2c6e056e7$export$58733aaf927c3bbe() {
    return `


        <nav class="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
        
            <div class="container-fluid">
            
                <a class="navbar-brand" href="#">{{name}}</a>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarNav">
                
                    <ul class="navbar-nav">
                    
                        {{ #hasPart | filter:@type=WPHeader }}

                            {{ #hasPart.hasPart }}
                                <li class="nav-item">
                                
                                    <a 
                                      class="nav-link active" 
                                      aria-current="page" 
                                      href="{{hasPart.hasPart.url}}"
                                      >
                                      
                                        {{hasPart.hasPart.name}}
                                        
                                    </a>
                                    
                                </li>
                            
                            {{/hasPart.hasPart }}
                        {{/hasPart }}
                        
                    </ul>
                </div>
            </div>
        </nav>
    
    
    `;
}


function $4e52112d33bc49e7$export$523fb3936f49e028() {
    return `<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{{title}}</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

  {{head_content}}
  
</head>

<body>

  {{content}}
  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
    crossorigin="anonymous"></script>
  <script type="module" src="script.js"></script>
</body>

</html>`;
}



function $ea78f44e9c4fdb13$export$dc6dff4b377d0f20(prefixes = []) {
    prefixes = prefixes || [];
    let prefix = prefixes.join(".");
    if (prefix != "") prefix = prefix + ".";
    return ` <div class="row align-items-center mt-2 mb-2" >

                <div class="col col-12 col-sm-6 col-md-2">

                    <img 
                    src="{{${prefix}_headingImage}}" 
                    class="img-fluid" 
                    alt{{${prefix}_headingDescription}} 

                    onerror="this.style.display='none'"
                    >

                </div>

                <div class="col col-12 col-sm-6 col-md-10">
                    <div class="row d-flex">
                        <div class="col col-md-auto">
                            {{ ${prefix}_heading1 }}
                        </div>

                        <div class="col col-12 col-md-auto text-truncate ">
                            {{ ${prefix}_heading2 }}
                        </div>

                        <div class="col col-12 col-md-auto ">
                            {{ ${prefix}_headingStatus }}
                        </div>

                        <div class="col col-12 col-md-auto text-truncate">
                            <a href="{{ ${prefix}url }}">Link</a>
                        </div>
                    </div>
                </div>

             </div>
    `;
}


function $69f4a06c5a5f7855$export$ee3212a4833dc722() {
    return `

        <div class="container">

            <div class="p-3 mt-4 pb-md-4 mx-auto text-center">
                {{#_heading1}}
                    <h2 class="display-4 fw-normal text-body-emphasis">{{_heading1}}</h2>
                {{/_heading1}}
    
                {{#_headingDescription}}
                    <p class="fs-5 text-body-secondary">{{_headingDescription}}</p>
                {{/_headingDescription}}
            </div>


            <div class="row row-cols-1 row-cols-md-3 mt-3 mb-3 text-center">
                {{#itemListElement}} {{#itemListElement.item}}
                <div class="col">
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">
                                {{itemListElement.item.itemOffered.name}}
                            </h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">
                                {{itemListElement.item.priceSpecification.price}}<small
                                    class="text-body-secondary fw-light"
                                    >/{{itemListElement.item.priceSpecification.referenceQuantity.unitCode}}</small
                                >
                            </h1>

                            <ul class="list-unstyled mt-3 mb-4">
                                {{#itemListElement.item.additionalProperty}}
                                <li>{{itemListElement.item.additionalProperty.value}}</li>
                                {{/itemListElement.item.additionalProperty}}
                            </ul>
                            {{#itemListElement.item.potentialAction}}
                            <button
                                href="{{itemListElement.item.potentialAction.url}}"
                                type="button"
                                class="w-100 btn btn-lg btn-outline-primary"
                            >
                                {{itemListElement.item.potentialAction.name}}
                            </button>
                            {{/itemListElement.item.potentialAction}}
                        </div>
                    </div>
                </div>
                {{/itemListElement.item}} {{/itemListElement}}
            </div>
        </div>


`;
}



function $31a5d99e72741423$export$e5185e241753e543(record) {
    let listRecord = {
        "@type": record["@type"],
        "@id": record["@id"],
        itemListElement: []
    };
    let innerContent = "";
    for (let k of Object.keys(record)){
        let c = ` <dt class="col-sm-3">${k}</dt>`;
        for (let v of (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(record[k])){
            if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(v?.["@type"])) v = record(v);
            c += ` <dd class="col-sm-9">${record[k]}</dd>`;
        }
        innerContent += c;
    }
    let content = `

        <dl class="row">
            ${innerContent}
        </dl>    
    
    `;
    return content;
}


function $1e883218857c7794$export$cfaa45ebb704a3b2() {
    return `

    <script src="/consent/consent.js">

        


    </script>
    
    `;
}


function $f8940d488cd7a66f$export$fa24ed99e5e77fab() {
    return `
    
    
   <!-- AOS 3.0.0-beta.6 plugin CSS (Animations) -->
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />



  

    
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">


    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
     
    
    
    `;
}


function $f1ab845195ae8ea8$export$95dc927f26875787() {
    return `
    



    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"></script>

    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
     <script>
        AOS.init();
      </script>

    
    
    `;
}



function $80fcb1b48f652599$export$9a59ac6eee85ea02(record) {
    let innerContent = "";
    for (let pv of record._propertyValues){
        let c = `
       <tr>
          <td>${pv.object.propertyID}</td>
          <td>${pv?.["@type"]}</td>
          <td>${pv.object.value}</td>
          <td>${pv.metadata.credibility}</td>
          <td>${(0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).date.human.date(pv.metadata.createdDate)}</td>
        </tr>

       `;
        innerContent += c;
    }
    let content = `

       <table class="table">
          <thead>
            <tr>
              <th scope="col">PropertyID</th>
              <th scope="col">Action</th>
              <th scope="col">Value</th>
              <th scope="col">credibility</th>
              <th scope="col">createdDate</th>
            </tr>
          </thead>
          <tbody>
            ${innerContent}
            
         </tbody>
</table>

    `;
    return content;
}




class $706f18fe777015bf$export$3138a16edeb45799 {
    constructor(record_or_record_type, record_id, metadata){
        // Property that can be used to differentiate from normal objects
        this.id = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).base.uuid.new();
        this.instanceof = "KrThing";
        this._system = null;
        this._record_type = null;
        this._record_id = null;
        if ((0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.isThing(record_or_record_type)) this.system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.toThing(record_or_record_type);
        else this.system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.new(record_or_record_type, record_id);
        this._thingsDB = [
            this
        ];
        this._callbacks = [];
        this._eventMonitoringCache = null;
        if ((0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.isThing(record_or_record_type)) this.system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.toThing(record_or_record_type, record_id, metadata);
    //this._convertChildrenThingsRecordsToThingObjects()
    }
    // -----------------------------------------------------
    //  Base 
    // -----------------------------------------------------
    toString() {
        /**
         * Returns the string representation of the thing
         * @returns {String} The string representation of the thing
         */ return this._system;
    }
    toJSON() {
        /**
         * Returns the record as object
         * @returns {Object} The record as object
         */ let record = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.record.get(this.system);
        if ((0, $53bcb33ef2023ce8$export$f936470337fdc8d0).isNotNull(record.previousItem)) record.previousItem = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.ref.get(record.previousItem);
        if ((0, $53bcb33ef2023ce8$export$f936470337fdc8d0).isNotNull(record.nextItem)) record.nextItem = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.ref.get(record.nextItem);
        return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.record.get(this.system);
    }
    get json() {
        /**
         * Returns the record as object
         * @returns {Object} The record as object
         */ return JSON.stringify(this.record, null, 4);
    }
    get _propertyValues() {
        return this.system?._propertyValues;
    }
    set _propertyValues(value) {
        this.system._propertyValues = value;
    }
    get _version() {
        return this._system._version;
    }
    get system() {
        /**
         * Provides abstraction for event handling and cleanup 
         */ //this._eventMonitoringCache = h.thing.hash(this._system)
        return this._system;
    }
    set system(value) {
        /**
         * Event monitoring
         */ this._system = value;
        this._record_type = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.record_type.get(value);
        this._record_id = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.record_id.get(value);
        this._convertChildrenThingsRecordsToThingObjects();
        if (this._eventMonitoringCache != (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.hash(this._system)) this.broadcastEvent("property", this.ref);
    }
    _convertChildrenThingsRecordsToThingObjects() {
        /**
         * Converts the children things records to thing objects
         * @returns {Object} The record
         * 
         */ // Get children things
        let children = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.children.get(this.system, false);
        children = children.filter((x)=>(0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.isNotSame(x, this._system));
        if ((0, $53bcb33ef2023ce8$export$f936470337fdc8d0).isNull(children)) return;
        // Convert children things to thing objects
        children = children.map((x)=>$706f18fe777015bf$export$3138a16edeb45799.toThing(x, null, this._thingsDB));
        // Replace values in things by equivalent class object
        if ((0, $53bcb33ef2023ce8$export$f936470337fdc8d0).isNotNull(children)) this._system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.children.replaceWithRecord(this.system, children);
        return;
    }
    // -----------------------------------------------------
    //  Properties 
    // -----------------------------------------------------
    get record_type() {
        /**
         * Returns the record type
         * @returns {String} The record type
         * 
         */ return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.record_type.get(this.system);
    }
    set record_type(value) {
        /**
         * Sets the record type
         * @param {String} value The record type
         * @returns {Object} The record
         */ this.system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.record_type.set(this.system, value);
        this._record_type = value;
    }
    get record_id() {
        /**
         * Returns the record id
         * @returns {String} The record id
         */ return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.record_id.get(this.system);
    }
    set record_id(value) {
        /**
         * Sets the record id
         * @param {String} value The record id
         * @returns {Object} The record
         */ this.system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.record_id.set(this.system, value);
        this._record_id = value;
    }
    get ref() {
        /**
         * Returns the record ref (type and id)
         * @returns {String} The record ref (type and id)
         */ return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.ref.get(this.system);
    }
    set ref(record) {
        /**
         * Sets the record ref (type and id)
         * @param {String} record_or_record_type The record ref (type and id)
         * @param {String} record_id The record ref (type and id)
         * @returns {Object} The record
         */ this.system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.ref.set(this.system, record);
    }
    get record() {
        /**
         * Returns the record without propertyValues
         * @returns {Object} The record without propertyValues
         */ return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.record.get(this.system);
    }
    set record(value) {
        /**
         * Sets the record
         * @param {Object} value The record
         * @returns {Object} The record
         */ this.system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.toThing(value);
    }
    get children() {
        /**
         * Get sub things
         * 
         */ return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.children.get(this.system);
    }
    // -----------------------------------------------------
    //  Values 
    // -----------------------------------------------------
    get(propertyID) {
        return this.getValues(propertyID);
    }
    set(propertyID, value, metadata) {
        return this.setValue(propertyID, value, metadata);
    }
    add(propertyID, value, metadata) {
        return this.addValue(propertyID, value, metadata);
    }
    delete(propertyID, value, metadata) {
        return this.deleteValue(propertyID, value, metadata);
    }
    getValues(propertyID) {
        /**
         * Returns the values for a given property
         * @param {String} propertyID The propertyID
         * @returns {Object} The record values for a given property
         */ return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.values.get(this.system, propertyID);
    }
    getValue(propertyID) {
        /**
         * Returns the value for a given property
         * @param {String} propertyID The propertyID
         * @returns {Object} The record value for a given property
         */ return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.value.get(this.system, propertyID);
    }
    setValue(propertyID, value, metadata) {
        /**
         * Sets the value for a given property
         * @param {String} propertyID The propertyID
         * @param {Object} value The record value for a given property
         * @returns {Object} The record
         */ this.system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.value.set(this.system, propertyID, value, metadata);
    }
    replaceValue(propertyID, value, metadata) {
        /**
         * Sets the value for a given property
         * @param {String} propertyID The propertyID
         * @param {Object} value The record value for a given property
         * @returns {Object} The record
         */ this.system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.value.replace(this.system, propertyID, value, metadata);
    }
    addValue(propertyID, value, metadata) {
        /**
         * Add the value for a given property
         * @param {String} propertyID The propertyID
         * @param {Object} value The record value for a given property
         * @returns {Object} The record
         */ this.system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.value.add(this.system, propertyID, value, metadata);
    }
    deleteValue(propertyID, value, metadata) {
        /**
         * Add the value for a given property
         * @param {String} propertyID The propertyID
         * @param {Object} value The record value for a given property
         * @returns {Object} The record
         */ this.system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.value.delete(this.system, propertyID, value, metadata);
    }
    getPropertyValue(propertyID) {
        /**
         * Returns the property value for a given property
         * @param {String} propertyID The propertyID
         * @returns {Object} The record value for a given property
         */ return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.propertyValue.get(this.system, propertyID);
    }
    getPropertyValues(propertyID) {
        /**
         * Returns the property value for a given property
         * @param {String} propertyID The propertyID
         * @returns {Object} The record value for a given property
         */ return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.propertyValues.get(this.system, propertyID);
    }
    // -----------------------------------------------------
    //  Comparisons 
    // -----------------------------------------------------
    isSame(other) {
        /**
         * Checks if two records are the same type and id
         * @param {Object} other The other record
         * @returns {Boolean} True if the records are the same
         */ return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.isSame(this.system, other.system);
    }
    isNotSame(other) {
        /**
         * Checks if two records are not the same type and id
         * @param {Object} other The other record
         * @returns {Boolean} True if the records are not the same
         */ return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.isNotSame(this.system, other.system);
    }
    eq(other) {
        /**
         * Checks if two records are identically the same
         * @param {Object} other The other record
         * @returns {Boolean} True if the records are the same
         */ return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.eq(this.system, other.system);
    }
    ne(other) {
        /**
         * Checks if two records are not identically the same
         * @param {Object} other The other record
         * @returns {Boolean} True if the records are not the same
         */ return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.ne(this.system, other.system);
    }
    lt(other) {
        /**
         * Checks if this record is less than the other record
         * @param {Object} other The other record
         * @returns {Boolean} True if this record is less than the other record
         */ return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.lt(this.system, other.system);
    }
    gt(other) {
        /**
         * Checks if this record is greater than the other record
         * @param {Object} other The other record
         * @returns {Boolean} True if this record is greater than the other record
         */ return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.gt(this.system, other.system);
    }
    // -----------------------------------------------------
    //  Operations 
    // -----------------------------------------------------
    merge(other) {
        /**
         * Merges the other record into this record
         * @param {Object} other The other record
         * @returns {Object} The record
         */ this.system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.merge(this.system, other.system);
    }
    mergeDeep(other) {
        /**
         * Merges the other record into this record
         * @param {Object} other The other record
         * @returns {Object} The record
         */ this.system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.mergeDeep(this.system, other.system);
    }
    // -----------------------------------------------------
    //  List operations 
    // -----------------------------------------------------
    insert(value, position) {
        /**
         * Inserts a value into the list
         * @param {Object} value The value
         *    
         */ console.log("Insert", value, position);
        this.system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.list.insert(this.system, value, position);
    }
    get position() {
        return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.value.get(this.system, "position");
    }
    set position(value) {
        return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.value.set(this.system, "position", value);
    }
    // -----------------------------------------------------
    //  Static operations 
    // -----------------------------------------------------
    static isValid(record) {
        /**
         * Checks if the record is valid
         * @param {Object} record The record
         * @returns {Boolean} True if the record is valid
         */ return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.isValid(record);
    }
    // -----------------------------------------------------
    //  Array 
    // -----------------------------------------------------
    static sort(things, orderBy, orderDirection) {
        /**
         * Sorts an array of things
         * @param {Array} things
         * @param {Object} conditions
         * @returns {Array} The sorted array
         */ return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.sort(things, orderBy, orderDirection);
    }
    static filter(things, conditions) {
        /**
         * Filters an array of things
         * @param {Array} things
         * @param {Object} conditions
         */ return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.filter(things, conditions);
    }
    static find(things, record_or_record_type, record_id) {
        /**
         * Finds a record in an array of things by type and id
         * @param {Array} things
         * @param {Object} record_or_record_type The record type
         * @param {String} record_id The record id
         * @returns {Object} The record
         */ return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.find(things, record_or_record_type, record_id);
    }
    static push(things, thing) {
        /**
         * Pushes a thing into an array of things, merge if exists
         * @param {Array} things
         * @param {Object} thing The thing
         * @returns {Array} The array of things
         */ return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.push(things, thing);
    }
    static pop(things, thing) {
        /**
         * Pops a thing from an array of things
         * @param {Array} things
         * @param {Object} thing The thing
         * @returns {Array} The array of things
         */ return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.pop(things, thing);
    }
    static dedupe(things) {
        /**
         * Dedupes an array of things
         * @param {Array} things
         * @returns {Array} The deduped array of things
         */ return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.dedupe(things);
    }
    static length(things) {
        /**
         * Returns the length of an array of things
         * @param {Array} things
         * @returns {Number} The length of the array of things
         */ return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.length(things);
    }
    // -----------------------------------------------------
    //  Event listeners
    // -----------------------------------------------------
    addEventListener(eventType, callback) {
        /**
         * Adds an event listener to the record
         * @param {String} event The event
         * @param {Function} callback The callback
         * @returns {Object} The record
         */ this._callbacks[eventType] = this._callbacks?.[eventType] || [];
        this._callbacks[eventType].push(callback);
    }
    broadcastEvent(eventType, message) {
        /**
         * Broadcasts an event to all listeners
         * @param {String} event The event
         * @param {Object} message The message
         * @returns {Object} The record
         */ let event = {
            "@type": "Action",
            "@id": (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).uuid.new(),
            object: this,
            name: message
        };
        for (let callback of (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).toArray(this._callbacks?.[eventType]))callback(event);
        for (let callback of (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).toArray(this._callbacks?.["any"]))callback(event);
        for (let callback of (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).toArray(this._callbacks?.["all"]))callback(event);
    }
    // -----------------------------------------------------
    //  Shortcuts 
    // -----------------------------------------------------
    get name() {
        return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.value.get(this.system, "name");
    }
    set name(value) {
        this.system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.value.set(this.system, "name", value);
    }
    get url() {
        return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.value.get(this.system, "url");
    }
    set url(value) {
        this.system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.value.set(this.system, "url", value);
    }
    get itemListElement() {
        return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.values.get(this.system, "itemListElement");
    }
    set itemListElement(value) {
        this.system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.values.set(this.system, "itemListElement", value);
    }
    get item() {
        return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.value.get(this.system, "item");
    }
    set item(value) {
        this.system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.value.set(this.system, "item", value);
    }
    get other() {
        return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.value.get(this.system, "other");
    }
    set other(value) {
        this.system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.value.set(this.system, "other", value);
    }
    // -----------------------------------------------------
    //  Static 
    // -----------------------------------------------------
    static toThing(record_or_record_type, record_id) {
        /**
         * Make a new thing
         * @param {Object} record_or_record_type The record type
         * @param {String} record_id The record id
         * @returns {Object} The thing
         */ // Error handling
        if (record_or_record_type instanceof $706f18fe777015bf$export$3138a16edeb45799) return record_or_record_type;
        // Convert
        let t = new $706f18fe777015bf$export$3138a16edeb45799(record_or_record_type, record_id);
        return t;
    }
    static new(record_or_record_type, record_id) {
        /**
         * Make a new thing
         * @param {Object} record_or_record_type The record type
         * @param {String} record_id The record id
         * @returns {Object} The thing
         */ if (record_or_record_type instanceof $706f18fe777015bf$export$3138a16edeb45799) return record_or_record_type;
        else return new $706f18fe777015bf$export$3138a16edeb45799(record_or_record_type, record_id);
    }
}




class $2cb32bf7096e125e$export$625c98c0044d29a6 {
    /**
     * Database of things or thing records
     * Maintain integrity of first record input in database by merging additional to the first one.
     */ constructor(toThing = true){
        this._toThing = toThing;
        this._db = [];
    }
    get(record_or_record_type, record_id) {
        /**
         * Gets a record
         * @param {Object} record_or_record_type The record or record
         * @param {String} record_id The record id
         * @returns {Object} The record
         */ return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.get(this._db, record_or_record_type, record_id);
    }
    getAll() {
        /**
         * Gets all records
         * @returns {Array} The records
         * 
         */ return this._db;
    }
    set(record, depth = 0) {
        /**
         * Sets a record
         * @param {Object} record_or_record_type The record or record
         * @param {String} record_id The record id
         * @returns {Object} The record
         */ if ((0, $53bcb33ef2023ce8$export$f936470337fdc8d0).isNull(record)) return null;
        if (depth > 10) return null;
        if ((0, $53bcb33ef2023ce8$export$f936470337fdc8d0).isArray(record)) return record.map((x)=>this.set(x, depth));
        // Transform to thing system record
        record = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.toThing(record);
        // Transform to thing if flag is true
        if (this._toThing == true) record = (0, $706f18fe777015bf$export$3138a16edeb45799).toThing(record);
        // Add to db and get version in db
        this._db = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.push(this._db, record);
        record = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.get(this._db, record);
        // Add children to db
        let children = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.children.get(record);
        // change to records
        if ((0, $53bcb33ef2023ce8$export$f936470337fdc8d0).isNotNull(children)) {
            if (this._toThing == true) children = children.map((x)=>(0, $706f18fe777015bf$export$3138a16edeb45799).toThing(x));
            this._db = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.push(this._db, children);
            //this.set(children, depth+1)
            let cc = this.getAll();
            record = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.children.replaceWithRecord(record, cc);
        }
        // Return record
        return record;
    }
    delete(record_or_record_type, record_id) {
        /**
         * Deletes a record
         * @param {Object} record_or_record_type The record or record
         * @param {String} record_id The record id
         * @returns {Object} The record
         */ this._db = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.delete(this._db, record_or_record_type, record_id);
    }
    length() {
        /**
         * Gets the length of the things
         * @returns {Number} The length
         * 
         */ return this._db.length;
    }
    clear() {
        /**
         * Clears the things
         * @returns {Array} The things
         * 
         */ this._db = {};
    }
    merge(other) {
        /**
         * Merges other db in this db
         * @param {Object} other The other things
         * @returns {Array} The things
         */ this._db = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.mergeLists(this._db, other);
    }
    filter(conditions) {
        /**
         * Filters the things
         * @param {Object} conditions The conditions
         * @returns {Array} The things
         */ return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.filter(this._db, conditions);
    }
    sort(conditions) {
        /**
         * Filters the things
         * @param {Object} conditions The conditions
         * @returns {Array} The things
         */ return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.sort(this._db, conditions);
    }
    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------
    executeAction(action) {
    /**
         * Executes an action
         */ }
}






class $ccac8dd150ebbe19$export$ca3c739adc83f458 {
    constructor(element){
        this._db = new (0, $2cb32bf7096e125e$export$625c98c0044d29a6)(true);
        this._templateDB = {
            "a": "aaa"
        };
        this.isInitialized = false;
        this._registeredThings = new (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).base.classes.Cache();
        this._element = element || document.body;
    }
    init() {
        // Initialize things
        (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).dom.thing.init(this._element, this._templateDB);
        // Initialize inputs
        this.isInitialized = true;
    }
    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------
    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------
    get(record_or_record_type, record_id) {
        /**
         * Gets a thing
         * @param {Object} record_or_record_type The record or record type
         * @param {String} record_id The record id
         * @returns {Object} The thing
         */ let thing = this._db.get(record_or_record_type, record_id);
        // Retrieve from api if missing
        if ((0, $53bcb33ef2023ce8$export$f936470337fdc8d0).isNull(thing)) {
            let record = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).base.storage.get(record);
            thing = new (0, $706f18fe777015bf$export$3138a16edeb45799)(record);
        }
        return thing;
    }
    set(record) {
        // Add to thing db (will convert to thing object if required)
        // Add thing to thing db
        let thing = this._db.set(record);
        // Add thing to storage
        (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).base.storage.set(thing.system);
        // Suscribe to thing event listener
        this.registerThing(this._db.getAll());
        // Render thing
        this.renderThing(thing);
        //
        return thing;
    }
    registerThing(thing) {
        /**
         * Registers a thing
         * @param {Object} thing The thing
         * @returns {Object} The thing
         * 
         */ if ((0, $53bcb33ef2023ce8$export$f936470337fdc8d0).isArray(thing)) {
            thing.map((x)=>this.registerThing(x));
            return;
        }
        // Skip if already registered
        if ((0, $53bcb33ef2023ce8$export$f936470337fdc8d0).isNotNull(this._registeredThings.get(thing))) return;
        // Configure event listener
        thing.addEventListener("all", this.thingEventCallback.bind(this));
        // Add as a registered thing
        this._registeredThings.set(thing);
    }
    render() {
        /**
         * Renders the thing
         * @param {Object} thing The thing
         * @returns {Object} The thing
         * 
         */ let things = this._db.getAll();
        for (let t of things)if (t) this.renderThing(t);
    }
    renderThing(record_or_record_type, record_id) {
        /**
         * Renders the thing
         * @param {Object} thing The thing
         * @returns {Object} The thing
         * 
         */ // Render thing
        let newThing = this._db.get(record_or_record_type, record_id);
        let systemRecord = newThing?.system;
        if ((0, $53bcb33ef2023ce8$export$f936470337fdc8d0).isNotNull(systemRecord)) {
            (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).dom.thing.renderSystem(this._element, systemRecord, null, this._templateDB);
            (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).dom.thing.event.register(this._element);
        }
    // Render thing childrens
    //for(let t of newThing?.children || []){
    // this.renderThing(t)
    // }
    }
    addTemplate(templateID, template, elementKrType = "krThing") {
        /**
         * Adds a template
         * @param {String} templateID The template id
         * @param {String} template The template
         */ let force = true;
        let temp = document.createElement("div");
        temp.setAttribute("data-templateID", templateID);
        temp.classList.add(elementKrType);
        temp.innerHTML = template;
        (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).dom.thing.init(temp, this._templateDB, force);
        return;
    }
    thingEventCallback(action) {
        // Store in storage
        if ((0, $53bcb33ef2023ce8$export$f936470337fdc8d0).isNotNull(action.object?.system)) (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).base.storage.set(action.object?.system);
        // Render
        this.renderThing(action.object);
    }
}


const $3044c528e2aca24b$export$4d4e92f9aafe7618 = {
    KrThing: (0, $706f18fe777015bf$export$3138a16edeb45799),
    KrThings: (0, $2cb32bf7096e125e$export$625c98c0044d29a6),
    KrElementEngine: (0, $ccac8dd150ebbe19$export$ca3c739adc83f458)
};


0, $80fcb1b48f652599$export$9a59ac6eee85ea02;
const $0c6143b014d5fc75$export$99f0d4ee82e9706 = {
    article: (0, $1d1d7e6925c636ce$export$bba2aacf8566461b),
    callToAction: (0, $cc70f1201526a438$export$2416a15e4d3cccfa),
    card: (0, $76c1cc9e1ba74570$export$aa3e815946b80764),
    cardHorizontal: (0, $709a68bd1ec08152$export$1b08a1f3c4097168),
    css: (0, $a03ed131cc6a7a3f$export$dbf350e5966cf602),
    features: (0, $2e6f30c3f5256cba$export$606190e461fe9031),
    footer: (0, $c1a4b784a1c88929$export$adb608be33961c98),
    form: (0, $85edee0a0611fc02$export$6210fa4921d2a466),
    hero: (0, $fba729fe2c3be31b$export$124049a9e3d0d4c3),
    howTo: (0, $69c32621a8b1cbcb$export$91392eeb01bb62de),
    icons: (0, $7336d3e0ff0b04a2$export$df03f54e09e486fa),
    itemlist: (0, $03cb398f5a2433c4$export$b97dc3b2d35f8775),
    jsonld: (0, $b22cd3de1d812d2d$export$f8fce98513fdd41a),
    line: (0, $f4b33ebb584657d4$export$53f1d5ea8de3d7c),
    listitem: (0, $155333d55623e825$export$f90eb7c4d1fc985e),
    navbar: (0, $7815f8c2c6e056e7$export$58733aaf927c3bbe),
    page: (0, $4e52112d33bc49e7$export$523fb3936f49e028),
    pill: (0, $ea78f44e9c4fdb13$export$dc6dff4b377d0f20),
    pricing: (0, $69f4a06c5a5f7855$export$ee3212a4833dc722),
    propertyValues: (0, $80fcb1b48f652599$export$9a59ac6eee85ea02),
    record: (0, $31a5d99e72741423$export$e5185e241753e543),
    userConsent: (0, $1e883218857c7794$export$cfaa45ebb704a3b2),
    landingPage: $0c6143b014d5fc75$var$getLandingPage,
    contentHead: (0, $f8940d488cd7a66f$export$fa24ed99e5e77fab),
    contentBody: (0, $f1ab845195ae8ea8$export$95dc927f26875787)
};
function $0c6143b014d5fc75$var$getLandingPage(records) {
    /**
     * Get elements of landing page
     */ let content = "";
    let count = 0;
    for (let r of records){
        r = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).heading.addHeadings(r);
        let krakenClasses = [];
        let partContent = "";
        switch(r?.["@type"]){
            case "Article":
                partContent += (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).template.render((0, $1d1d7e6925c636ce$export$bba2aacf8566461b)(), r);
                break;
            case "CreativeWork":
                partContent += (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).template.render((0, $fba729fe2c3be31b$export$124049a9e3d0d4c3)(), r);
                break;
            case "HowTo":
                partContent += (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).template.render((0, $69c32621a8b1cbcb$export$91392eeb01bb62de)(), r);
                break;
            case "Product":
                partContent += (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).template.render((0, $2e6f30c3f5256cba$export$606190e461fe9031)(), r);
                break;
            case "OfferCatalog":
                partContent += (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).template.render((0, $69f4a06c5a5f7855$export$ee3212a4833dc722)(), r);
                break;
            case "Action":
                partContent += (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).template.render((0, $cc70f1201526a438$export$2416a15e4d3cccfa)(), r);
                break;
        }
        // Get classes
        if (count == 0) {
            krakenClasses.push("text-bg-dark");
            krakenClasses.push("bg-gradient ");
        }
        if (count != 0 && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).number.isEven(count)) krakenClasses.push("text-bg-secondary");
        // Increment counter
        count += 1;
        // Compile content
        content += `
        <section 
        class="aos-init aos-animate ${krakenClasses.join(" ")} pt-5 pb-5"
        data-aos="fade-down"
        data-aos-offset="300"
        > 
            ${partContent} 
        </section>`;
    }
    return content;
}




const $2847cdd26445865b$export$57abcc0c7c9e66d0 = {
    get: $2847cdd26445865b$var$getApi,
    post: $2847cdd26445865b$var$postApi,
    delete: $2847cdd26445865b$var$deleteApi,
    postFile: $2847cdd26445865b$var$postApiFile,
    getFile: $2847cdd26445865b$var$getApiFile
};
async function $2847cdd26445865b$var$getApi(baseUrl, urlPath, params) {
    const requestOptionsGet = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };
    let url;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(urlPath)) url = new URL(String(urlPath), String(baseUrl));
    else url = new URL(String(baseUrl));
    url.search = new URLSearchParams(params);
    url = String(url);
    const response1 = await fetch(url, requestOptionsGet);
    if (response1.status != 200 && response1.status != 201 && response1.status && 202) throw new Error(String(response1.status) + " " + response1.statusText);
    let results = await response1.json();
    return results;
}
async function $2847cdd26445865b$var$postApi(baseUrl, urlPath, records) {
    //Post 
    let requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(records)
    };
    let url;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(urlPath)) url = new URL(String(urlPath), String(baseUrl));
    else url = new URL(String(baseUrl));
    url = String(url);
    const response1 = await fetch(url, requestOptions);
    if (response1.status != 200 && response1.status != 201 && response1.status != 202) throw new Error(String(response1.status) + " " + response1.statusText);
    return response1.json();
}
async function $2847cdd26445865b$var$getApiFile(filename, baseUrl, urlPath) {
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(filename)) {
        let parts = filename = baseUrl.split("/");
        filename = parts[parts.length - 1];
    }
    try {
        let url;
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(urlPath)) url = new URL(String(urlPath), String(baseUrl));
        else url = new URL(String(baseUrl));
        // Fetch the file from the provided URL
        const response1 = await fetch(url);
        // Check if the response is ok (status is in the range 200-299)
        if (!response1.ok) throw new Error(`Failed to fetch file: ${response1.statusText}`);
        // Convert the response data to a Blob object
        const blob = await response1.blob();
        // Create a File object from the Blob
        const file = new File([
            blob
        ], filename, {
            type: blob.type
        });
        return file;
    } catch (error) {
        console.error("Error fetching the file:", error);
        return null;
    }
}
async function $2847cdd26445865b$var$postApiFile(baseUrl, urlPath, file) {
    //Post 
    let url;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(urlPath)) url = new URL(String(urlPath), String(baseUrl));
    else url = new URL(String(baseUrl));
    const formData = new FormData();
    formData.append("file", file); // 'file' is the key expected by the API
    try {
        const response1 = await fetch(url, {
            method: "POST",
            body: formData,
            headers: {
            }
        });
        if (response1.ok) {
            const result = await response1.json();
            return result;
        }
    } catch (error) {}
    return response;
}
async function $2847cdd26445865b$var$deleteApi(baseUrl, urlPath, params) {
    const requestOptionsGet = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    };
    let url;
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(urlPath)) url = new URL(String(urlPath), String(baseUrl));
    else url = new URL(String(baseUrl));
    url.search = new URLSearchParams(params);
    const response1 = await fetch(url, requestOptionsGet);
    if (response1.status != 200 && response1.status != 201 && response1.status != 202) throw new Error(String(response1.status) + " " + response1.statusText);
    return true;
}



const $82d074b4d9acded9$export$b030493e7466de36 = {
    req: {
        record_type: $82d074b4d9acded9$var$getRecordTypeFromReq,
        record_id: $82d074b4d9acded9$var$getRecordIdFromReq,
        collection: $82d074b4d9acded9$var$getCollectionFromReq,
        records: $82d074b4d9acded9$var$getRecordsFromReq,
        record: $82d074b4d9acded9$var$getRecordsFromReq,
        params: $82d074b4d9acded9$var$getParamsFromReq,
        file: $82d074b4d9acded9$var$getFileFromReq,
        method: $82d074b4d9acded9$var$getMethodFromReq,
        query: $82d074b4d9acded9$var$getQueryFromReq,
        limit: $82d074b4d9acded9$var$getLimitFromReq,
        offset: $82d074b4d9acded9$var$getOffsetFromReq,
        orderBy: $82d074b4d9acded9$var$getOrderByFromReq,
        orderDirection: $82d074b4d9acded9$var$getOrderDirectionFromReq
    },
    record: {
        webpage: $82d074b4d9acded9$var$getWebpageRecordFromReq,
        device: $82d074b4d9acded9$var$getDeviceRecordFromReq,
        action: $82d074b4d9acded9$var$getActionRecordFromReq
    }
};
function $82d074b4d9acded9$var$getRecordsFromReq(req) {
    let records = req.body || null;
    return records;
}
function $82d074b4d9acded9$var$getRecordTypeFromReq(req) {
    let record_type;
    record_type = req.params?.record_type || record_type;
    record_type = req.params?.["@type"] || record_type;
    record_type = req.query?.record_type || record_type;
    record_type = req.query?.["@type"] || record_type;
    return record_type;
}
function $82d074b4d9acded9$var$getRecordIdFromReq(req) {
    let record_id;
    record_id = req.params?.record_id || record_id;
    record_id = req.params?.["@id"] || record_id;
    record_id = req.query?.record_id || record_id;
    record_id = req.query?.["@id"] || record_id;
    return record_id;
}
function $82d074b4d9acded9$var$getCollectionFromReq(req) {
    let collection;
    collection = req.params?.collection || collection;
    collection = req.query?.collection || collection;
    while(collection.startsWith("/"))collection = collection.slice(1, collection.length - 1);
    while(collection.endsWith("/"))collection = collection.slice(0, collection.length - 2);
    return collection;
}
function $82d074b4d9acded9$var$getParamsFromReq(req) {
    // Returns the params as an array
    let params = {};
    for(let k in req.params){
        let value = req.params?.[k];
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(value)) params[k] = value;
    }
    return params;
}
function $82d074b4d9acded9$var$getFileFromReq(req) {
    let files = [];
    for (let k of Object.keys(req.files)){
        let subFiles = req.files[k];
        if (!Array.isArray(subFiles)) subFiles = [
            subFiles
        ];
        for (let s of subFiles)files.push(s);
    }
    return files;
}
function $82d074b4d9acded9$var$getMethodFromReq(req) {
    return req.method;
}
function $82d074b4d9acded9$var$getDomainFromReq(req) {
    return req.hostname;
}
function $82d074b4d9acded9$var$getUrlFromReq(req) {
    let url = req.protocol + "://" + req.hostname + req.originalurl;
    return url;
}
function $82d074b4d9acded9$var$getQueryFromReq(req) {
    let name = "query";
    let value = req.params?.[name] || req.query?.[name] || null;
    try {
        value = JSON.parse(value);
    } catch  {}
    return value;
}
function $82d074b4d9acded9$var$getLimitFromReq(req) {
    let name = "limit";
    let value = req.params?.[name] || req.query?.[name] || null;
    return value;
}
function $82d074b4d9acded9$var$getOffsetFromReq(req) {
    let name = "offset";
    let value = req.params?.[name] || req.query?.[name] || null;
    return value;
}
function $82d074b4d9acded9$var$getOrderByFromReq(req) {
    let name = "orderBy";
    let value = req.params?.[name] || req.query?.[name] || null;
    return value;
}
function $82d074b4d9acded9$var$getOrderDirectionFromReq(req) {
    let name = "orderDirection";
    let value = req.params?.[name] || req.query?.[name] || null;
    return value;
}
function $82d074b4d9acded9$var$getActionRecordFromReq(req) {
    let action = {
        "@type": "ViewAction",
        "@id": String(crypto.randomUUID()),
        object: $82d074b4d9acded9$var$getWebpageRecordFromReq(req),
        instrument: $82d074b4d9acded9$var$getDeviceRecordFromReq(req),
        agent: $82d074b4d9acded9$var$getAgentRecordFromReq(),
        timeStart: new Date(),
        actionStatus: "CompletedActionStatus"
    };
    return action;
}
function $82d074b4d9acded9$var$getWebpageRecordFromReq(req) {
    let record = {
        "@type": "WebPage",
        "url": $82d074b4d9acded9$var$getUrlFromReq(req)
    };
    return record;
}
function $82d074b4d9acded9$var$getDeviceRecordFromReq(req) {
    let record = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Computer Device",
        "identifier": {
            "@type": "PropertyValue",
            "name": "IP Address",
            "value": "192.168.0.1"
        }
    };
    return record;
}
function $82d074b4d9acded9$var$getAgentRecordFromReq(req) {
    /**
     * Returns the agent record
     */ let record = {
        "@type": "Person",
        "@id": (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).uuid.new(),
        "knowsLanguage": req.headers["accept-language"]
    };
    return record;
}


const $5e5f0feca47925ff$export$41307516eb485fda = {
    sendData: $5e5f0feca47925ff$var$sendData
};
function $5e5f0feca47925ff$var$sendData(record) {
    /**
     * @type {string}
     *
     */ console.log("sendData start");
    console.log(record);
    const data = JSON.stringify(record);
    navigator.sendBeacon(apiUrl, data);
    console.log("sendData end");
}


const $89c05b0785d9b053$export$30704911fa9a0a07 = {
    api: (0, $2847cdd26445865b$export$57abcc0c7c9e66d0),
    express: (0, $82d074b4d9acded9$export$b030493e7466de36),
    browser: (0, $5e5f0feca47925ff$export$41307516eb485fda)
};


/**
 * @fileoverview Kraken Selectable
 * @author Simon Chapleau
 * @version 1.0.0
 *
 * Functions to add selectable functionality to elements
 *
 * Elements with class name 'krSelectable' becomes selectable when clicked on
 * When selected, class 'krSelected' is added
 * 
 * 
 */ 
const $32408525531fd7dd$export$55c553c6132a50f2 = {
    set: $32408525531fd7dd$var$makeSelectable,
    get: $32408525531fd7dd$var$getSelected,
    addCss: $32408525531fd7dd$var$addSelectedCss
};
const $32408525531fd7dd$var$selectableClass = "krSelectable";
const $32408525531fd7dd$var$selectedClass = "krSelected";
// Initialize database of already initialized elements
let $32408525531fd7dd$var$elementDB = {};
function $32408525531fd7dd$var$makeSelectable(element, allowMultiSelect = true) {
    /**
     * Make all elements with class name 'krSelectable' selectable
     * When selected, class 'krSelected' is added
     * @param element: parent element of all elements to make selectable
     * @param allowMultiSelect: allow multiple selections
     * @return void
     * 
     */ element = element || document.body;
    // Initialize parent element to deselect all other elements on click
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(element.id)) element.id = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).uuid.new();
    element.addEventListener("click", (event)=>{
        let selectedElements = element.querySelectorAll("." + $32408525531fd7dd$var$selectedClass) || [];
        for (let selectedElement of selectedElements)selectedElement.classList.remove($32408525531fd7dd$var$selectedClass);
    });
    // Initialize selectable elements under parent element
    let selectableElements = element.querySelectorAll("." + $32408525531fd7dd$var$selectableClass);
    for (let e of selectableElements){
        // Add id is missing
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(e.id)) e.id = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).uuid.new();
        // Skip if already initialized
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull($32408525531fd7dd$var$elementDB?.[element.id])) continue;
        // Add event listener on element
        e.addEventListener("click", (event)=>{
            event.preventDefault();
            event.stopPropagation();
            //If  Shift key not pressed, remove current selection
            if (!event.shiftKey || allowMultiSelect == false) {
                let selectedElements = element.querySelectorAll("." + $32408525531fd7dd$var$selectedClass) || [];
                for (let selectedElement of selectedElements)if (selectedElement != e) selectedElement.classList.remove($32408525531fd7dd$var$selectedClass);
            }
            // Toggle current element
            event.currentTarget.classList.toggle($32408525531fd7dd$var$selectedClass);
        });
    }
}
function $32408525531fd7dd$var$getSelected(element) {
    /**
     * Returns the elements selected below the input element
     * @param {HTMLElement} element
     * @returns {Array}
     * 
     */ element = element || document.body;
    let results = element.querySelectorAll("." + $32408525531fd7dd$var$selectedClass);
    results = results || [];
    return results;
}
function $32408525531fd7dd$var$addSelectedCss() {
    /**
     * Add Css necessary to make element appear selected
     * @param {HTMLElement} element
     * @returns {void}
     */ var styles = `
       
    
        .${$32408525531fd7dd$var$selectableClass}.${$32408525531fd7dd$var$selectedClass} { 
            
              outline-style: solid;
              outline-color: transparent;
              box-shadow: 0 0 0 2px #0e44af,
                          0 0 0 5px #fff;
        }
        
    `;
    var styleSheet = document.createElement("style");
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
    return;
}


/**
 * @fileoverview Kraken drag drop generic
 * @author Simon Chapleau
 * @version 1.0.0
 *
 * Functions to add generic dran and drop capabilities
 *
 * Elements with class name 'krDropzone' becomes dropzones
 * Elements with class name 'krDraggable' becomes draggable
 * 
 * 
 */ 

const $49d105fa6f31cf65$export$fa58845da60d0a9b = {
    draggable: {
        set: $49d105fa6f31cf65$var$setDraggable
    },
    dropzone: {
        set: $49d105fa6f31cf65$var$setDropzone
    },
    addCss: $49d105fa6f31cf65$var$addCss
};
const $49d105fa6f31cf65$var$dropzoneClass = "krDropzone";
const $49d105fa6f31cf65$var$dropzoneOverClass = "krDropzoneOver";
const $49d105fa6f31cf65$var$draggableClass = "krDraggable";
const $49d105fa6f31cf65$var$draggableHandleClass = "krDraggableHandle";
const $49d105fa6f31cf65$var$draggingClass = "krDragging";
const $49d105fa6f31cf65$var$krSelectedClass = "krSelected";
// Initialize database of already initialized elements
let $49d105fa6f31cf65$var$elementDB = {};
function $49d105fa6f31cf65$var$setDraggable(engine, element, allowMultiSelect = true) {
    /**
     * Make all elements with class name 'krDraggable' draggable
     * @param element: parent element of all elements to make draggable
     * @param allowMultiSelect: allow multiple selections
     * @return void
     * 
     */ element = element || document.body;
    let draggableElements = element.querySelectorAll("." + $49d105fa6f31cf65$var$draggableClass);
    for (let e of draggableElements){
        // Get grabhandle 
        let dragHandle = e.querySelector("." + $49d105fa6f31cf65$var$draggableHandleClass);
        // Default hanbdle to element if missing
        dragHandle = dragHandle || e;
        // -----------------------------------------------------
        //  Handle click make the elemtn draggable or not 
        // -----------------------------------------------------
        // On click of handle, make element draggable
        dragHandle.addEventListener("mousedown", (event)=>{
            e.draggable = true;
        });
        dragHandle.addEventListener("mouseup", (event)=>{
            e.draggable = false;
        });
        // -----------------------------------------------------
        //  Draggable fn 
        // -----------------------------------------------------
        dragHandle.addEventListener("dragstart", (event)=>{
            //event.preventDefault()
            //event.stopPropagation()
            // Get dragged element
            let draggedElement = event.currentTarget;
            // Set class of dragged element
            draggedElement.classList.add($49d105fa6f31cf65$var$draggingClass);
            // Get record from element
            let thing = engine.get((0, $3a31490163c9c724$export$3633c9dc515d5cf9).thing.property.ref.get(draggedElement));
            let record = thing?.record || null;
            // Set record as datatransfer value
            event.dataTransfer.setData("text/plain", JSON.stringify(record));
        });
        dragHandle.addEventListener("dragend", (event)=>{
            //event.preventDefault()
            //event.stopPropagation()
            // Get dragged element
            let draggedElement = event.currentTarget;
            // Remove class of dragged elements
            for (let e1 of element.querySelectorAll("." + $49d105fa6f31cf65$var$draggingClass))e1.classList.remove($49d105fa6f31cf65$var$draggingClass);
        });
    }
}
function $49d105fa6f31cf65$var$setDropzone(engine, element, allowMultiSelect = true) {
    /**
     * Make all elements with class name 'krDropzone' dropzone
     */ element = element || document.body;
    let dropzoneElements = element.querySelectorAll("." + $49d105fa6f31cf65$var$dropzoneClass);
    for (let e of dropzoneElements){
        e.addEventListener("dragover", (event)=>{
            event.preventDefault();
            event.stopPropagation();
            e.classList.add($49d105fa6f31cf65$var$dropzoneOverClass);
        });
        e.addEventListener("dragenter", (event)=>{
            event.preventDefault();
            event.stopPropagation();
            e.classList.add($49d105fa6f31cf65$var$dropzoneOverClass);
        });
        e.addEventListener("dragleave", (event)=>{
            event.preventDefault();
            event.stopPropagation();
            e.classList.remove($49d105fa6f31cf65$var$dropzoneOverClass);
        });
        e.addEventListener("drop", (event)=>{
            event.preventDefault();
            event.stopPropagation();
            // Remove all dragover class
            for (let e1 of element.querySelectorAll("." + $49d105fa6f31cf65$var$dropzoneOverClass))e1.classList.remove($49d105fa6f31cf65$var$dropzoneOverClass);
            // Retrieve record or value
            let record = JSON.parse(event.dataTransfer.getData("text/plain"));
            // Retrieve thing ref related to dropzone
            let currentElement = event.currentTarget;
            let thingElement = (0, $3a31490163c9c724$export$3633c9dc515d5cf9).thing.traverse.current.thing.get(currentElement);
            let thing = engine.get((0, $3a31490163c9c724$export$3633c9dc515d5cf9).thing.property.ref.get(thingElement));
            // Handle lists
            if (thing?.record_type == "ListItem") {
                record = record?.item;
                let parentThingElement = thingElement.parentElement.closest(".krThing");
                let parentThing = engine.get((0, $3a31490163c9c724$export$3633c9dc515d5cf9).thing.property.ref.get(parentThingElement));
                parentThing.insert(record, thing.position);
                engine.set(parentThing);
                thing = parentThing;
            }
            // Render
            engine.render(thing);
            $49d105fa6f31cf65$var$setDropzone(engine, element);
            $49d105fa6f31cf65$var$setDraggable(engine, element);
        });
    }
}
function $49d105fa6f31cf65$var$addCss() {
    /**
     * Add Css necessary to make element appear dragging
     * @param {HTMLElement} element
     * @returns {void}
     */ var styles = `


        .${$49d105fa6f31cf65$var$draggableClass}.${$49d105fa6f31cf65$var$draggingClass} { 

            opacity = '0.4';
        }

        .${$49d105fa6f31cf65$var$dropzoneClass}.${$49d105fa6f31cf65$var$dropzoneOverClass} {

           margin-top: 20px;
        
        }

    `;
    var styleSheet = document.createElement("style");
    styleSheet.textContent = styles;
    document.head.appendChild(styleSheet);
    return;
}


const $299ad19cbb68af01$export$ddce14f862b473c6 = {
    selectable: (0, $32408525531fd7dd$export$55c553c6132a50f2),
    dragdrop: (0, $49d105fa6f31cf65$export$fa58845da60d0a9b)
};


const $4a1ec78adc00c303$export$e0169ab077dc0819 = {
    event: (0, $299ad19cbb68af01$export$ddce14f862b473c6)
};


const $53bcb33ef2023ce8$export$f936470337fdc8d0 = {
    base: (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5),
    dom: (0, $3a31490163c9c724$export$3633c9dc515d5cf9),
    html: (0, $0c6143b014d5fc75$export$99f0d4ee82e9706),
    localization: (0, $4f0e7017aa5846ec$export$a8f5b9913def03f3),
    thing: (0, $fbdfe69f48d32df8$export$c24b4489b93ad8cb),
    http: (0, $89c05b0785d9b053$export$30704911fa9a0a07),
    element: (0, $4a1ec78adc00c303$export$e0169ab077dc0819),
    // shortcuts
    isNull: (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).null.isNull,
    isNotNull: (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).null.isNotNull,
    isEqual: (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).null.isEqual,
    isNotEqual: (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).null.isNotEqual,
    toArray: (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).array.toArray,
    isArray: (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).array.isArray,
    isObject: (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).object.isObject,
    isDate: (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).date.isDate,
    isNumber: (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).number.isNumber,
    uuid: (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).uuid,
    wait: (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).wait
};


class $72185a15243df046$export$1481e10980f8a723 {
    constructor(){
        this.startTimes = new Map(); // Store start times for labels
        this.endTimes = new Map(); // Store end times for labels
    }
    // Starts the timer for a specific label (default: 'default')
    start(label = "default") {
        if (this.startTimes.has(label)) {
            console.warn(`Timer for '${label}' has already been started.`);
            return;
        }
        this.startTimes.set(label, performance.now());
    }
    // Stops the timer for a specific label and calculates duration
    stop(label = "default") {
        if (!this.startTimes.has(label)) {
            console.warn(`Timer for '${label}' was not started.`);
            return;
        }
        const endTime = performance.now();
        const duration = endTime - this.startTimes.get(label);
        this.endTimes.set(label, duration);
        this.startTimes.delete(label); // Clean up after stop
        return duration; // Returns duration for convenience
    }
    // Resets all timers
    reset(label = null) {
        if (label) {
            this.startTimes.delete(label);
            this.endTimes.delete(label);
        } else {
            this.startTimes.clear();
            this.endTimes.clear();
        }
    }
    // Retrieves the duration for a specific label
    getDuration(label = "default") {
        if (!this.endTimes.has(label)) {
            console.warn(`Timer for '${label}' has not been stopped.`);
            return null;
        }
        return this.endTimes.get(label);
    }
    // Logs all durations
    logAllDurations() {
        this.endTimes.forEach((duration, label)=>{
            console.log(`Duration for '${label}': ${duration.toFixed(2)} ms`);
        });
    }
}



class $56ba4b57196189e3$export$f5bc5036afac6116 {
    constructor(maxItems = 1000, longestDuration = 600){
        /**
         * @param {Number} maxItems
         * @param {Number} longestDuration (in seconds)
         */ this._db = {};
        this._maxItems = maxItems;
        this._longestDuration = longestDuration;
        this._noOfCacherecords = 0;
    }
    length() {
        /**
         * Returns the number of items in the cache
         * @returns {Number}
         */ return this._noOfCacherecords;
    }
    get(record_or_record_type, record_id) {
        /**
         * Returns the record
         * @param {String} record_type
         * @param {String} record_id
         * @returns {Object} The record
         * 
         */ // Retrieve type and id
        let record_type = record_or_record_type?.["@type"] || record_or_record_type?.record_type || record_or_record_type;
        record_id = record_or_record_type?.["@id"] || record_or_record_type?.record_id || record_id;
        // Error handlling
        if ((0, $53bcb33ef2023ce8$export$f936470337fdc8d0).isNull(record_type) || (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).isNull(record_id)) return null;
        // Retrieve cache record
        let cacheRecord = this._db?.[record_type]?.[record_id] || null;
        // Error handling
        if ((0, $53bcb33ef2023ce8$export$f936470337fdc8d0).isNull(cacheRecord)) return null;
        // Verify duration, delete cache if over duration 
        let n = new Date();
        let duration = (n - cacheRecord.lastUpdated) / 1000;
        if (duration > this._longestDuration) {
            this.delete(record_type, record_id);
            return null;
        }
        // Set no of accesses
        cacheRecord.lastAccessed = new Date();
        cacheRecord.noAccess += 1;
        // Return 
        return this._db?.[record_type]?.[record_id]?.["value"];
    }
    getAll() {
        /**
         * Returns all records
         *
         */ let results = [];
        for(let rt in this._db)for(let ri in this._db[rt])results.push(this._db[rt][ri]?.value);
        // Return 
        return results;
    }
    set(record) {
        /**
         * Sets a record
         * 
         */ // Handle array
        if ((0, $53bcb33ef2023ce8$export$f936470337fdc8d0).isArray(record)) return record.map((x)=>this.set(x));
        // Retrieve type and id
        let record_type = record?.["@type"] || record?.record_type || null;
        let record_id = record?.["@id"] || record?.record_id || null;
        // Error handling
        if ((0, $53bcb33ef2023ce8$export$f936470337fdc8d0).isNull(record_type) || (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).isNull(record_id)) return null;
        // Retrieve current cacheRecord (if exist)
        this._db[record_type] = this._db?.[record_type] || {};
        this._db[record_type][record_id] = this._db?.[record_type]?.[record_id];
        let cacheRecord = this._db?.[record_type]?.[record_id] || null;
        // Create cacherecord if not already exist
        if ((0, $53bcb33ef2023ce8$export$f936470337fdc8d0).isNull(cacheRecord)) {
            cacheRecord = {
                date: new Date(),
                value: record,
                lastAccessed: new Date(),
                lastUpdated: new Date(),
                noAccess: 0
            };
            this._db[record_type][record_id] = cacheRecord;
        }
        // Set last Updated and value of cacheRecord
        cacheRecord.lastUpdated = new Date();
        cacheRecord.value = record;
        // Increment counter (to avoid recounting every time)
        this._noOfCacherecords += 1;
        // Verify size
        this._verifySize();
        // Return
        return;
    }
    delete(record_or_record_type, record_id) {
        /**
         * Deletes a record from the cache
         * @param {String} record_type
         * @param {String} record_id
         *
         */ // Retrieve type and id
        let record_type = record_or_record_type?.["@type"] || record_or_record_type?.record_type || record_or_record_type;
        record_id = record_or_record_type?.["@id"] || record_or_record_type?.record_id || record_id;
        // Error handling
        if ((0, $53bcb33ef2023ce8$export$f936470337fdc8d0).isNull(record_type) || (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).isNull(record_id)) return null;
        // Remove record
        this._db[record_type] = this._db?.[record_type] || {};
        this._db[record_type][record_id] = null;
        // Decrement counter (to avoid recounting every time)
        this._noOfCacherecords = this._noOfCacherecords - 1;
        // Return
        return;
    }
    clear() {
        /**
         * Clears the cache
         */ this._db = {};
        // Return
        return;
    }
    // -----------------------------------------------------
    //  Comment
    // -----------------------------------------------------
    _getAllCacheRecords() {
        /**
         * Returns all records
         *
         */ let results = [];
        for(let rt in this._db)for(let ri in this._db[rt])results.push(this._db[rt][ri]);
        results = results.filter((x)=>(0, $53bcb33ef2023ce8$export$f936470337fdc8d0).isNotNull(x));
        return results;
    }
    _getOldestCacheRecord() {
        /**
         * Returns the oldest record (accessed, or created)
         *
         */ let cacheRecords = this._getAllCacheRecords();
        if ((0, $53bcb33ef2023ce8$export$f936470337fdc8d0).isNull(cacheRecords)) return null;
        let minItem = cacheRecords.reduce((minItem, item)=>(minItem.lastAccessed || minItem.lastUpdated) < (item.lastAccessed || item.lastUpdated) ? minItem : item);
        return minItem;
    }
    _verifySize() {
        /**
         * Verifies the size of the cache
         *
         */ let max = 1000;
        let count = 0;
        while(this._noOfCacherecords > this._maxItems && count < max){
            let oldestCacheRecord = this._getOldestCacheRecord();
            this.delete(oldestCacheRecord?.value);
            count += 1;
        }
        return;
    }
}




class $d9b56bf44db9acb6$export$c739a053efdbec32 {
    /**
     * Kraken data storage
     */ constructor(collection){
        this.dataApiUrl = "https://data.krknapi.com/api";
        //this.cdnApiUrl = 'https://931bba76-1b26-4445-ad26-d2c9d201d0e2-00-lpy51ddmv2p2.janeway.replit.dev' //"https://cdn.krknapi.com/things";
        this.cdnApiUrl = "https://cdn.krknapi.com/things";
        this.collection = collection;
        this.cache = new (0, $56ba4b57196189e3$export$f5bc5036afac6116)();
    }
    get cdn() {
        return {
            get: this.cdnGet.bind(this),
            post: this.cdnPost.bind(this),
            delete: this.cdnDelete.bind(this)
        };
    }
    get data() {
        return {
            get: this.dataGet,
            post: this.dataPost,
            delete: this.dataDelete
        };
    }
    // -----------------------------------------------------
    //  CDN 
    // -----------------------------------------------------
    async cdnGet(record_or_record_type, record_id, force = false) {
        /**
         * Gets a record
         * @param {String} record_or_record_type
         * @param {String} record_id
         * @param {Boolean} force if true, will force a refresh of the record
         * @returns {Object} The record
         */ // Error handling
        // Return
        let url = this.cdnApiUrl + "/" + this.collection;
        console.log("url", url);
        return await $d9b56bf44db9acb6$var$getRecord(record_or_record_type, record_id, url, this.cache, this.force);
    }
    async cdnPost(record) {
        /**
         * Posts a record
         * @param {Object} record
         * @returns {Object} The record
         * 
         */ // Return
        let url = this.cdnApiUrl + "/" + this.collection;
        return await $d9b56bf44db9acb6$var$postRecord(record, url, this.cache);
    }
    async cdnDelete(record_or_record_type, record_id) {
        /**
         * Deletes a record
         * @param {String} record_or_record_type
         * @param {String} record_id
         * @returns {Object} The record
         */ // Error handling
        let record_type = record_or_record_type["@type"] || record_or_record_type?.record_type || record_or_record_type;
        record_id = record_or_record_type["@id"] || record_or_record_type?.record_id || record_id;
        // 
        let action = await (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).http.api.delete(this.cdnApiUrl + "/" + this.collection, null, records);
        // Remove from cache
        this.cache.delete(record_type, record_id);
        // 
        Return;
    }
    // -----------------------------------------------------
    //  Data 
    // -----------------------------------------------------
    async dataGet(record_or_record_type, record_id, force = false) {
        /**
         * Gets a system
         * @param {String} record_or_record_type
         * @param {String} record_id
         * @param {Boolean} force if true, will force a refresh of the record
         * @returns {Object} The system
         */ // Error handling
        let record_type = record_or_record_type["@type"] || record_or_record_type?.record_type || record_or_record_type;
        record_id = record_or_record_type["@id"] || record_or_record_type?.record_id || record_id;
        // Verify in cache
        let record = this.cache.get(record_type, record_id);
        if ((0, $53bcb33ef2023ce8$export$f936470337fdc8d0).isNotNull(record)) return record;
        // Define params
        let params = {
            "@type": record_type,
            "@id": record_id
        };
        // Get 
        record = await (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).http.api.get(this.dataApiUrl + "/" + this.collection, null, params);
        // Store in cache
        if ((0, $53bcb33ef2023ce8$export$f936470337fdc8d0).isNotNull(record)) // Cache main record
        this.cache.set(record);
        // Return
        return record;
    }
    async dataPost(record) {
        /**
         * Posts a system record
         * @param {Object} systemRecord
         * @returns {Object} The system record
         *
         */ // Error handling
        if ((0, $53bcb33ef2023ce8$export$f936470337fdc8d0).isNull(record)) return null;
        //
        let records1 = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).toArray(record);
        // transform to system thing
        records1 = records1.map((x)=>(0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.toThing(x));
        // Post
        //records = await h.http.api.post(this.dataApiUrl + '/' + this.collection, null, records)
        // Add records provided back to cache
        this.cache.set(records1);
        // Return
        return records1;
    }
    async dataDelete(record_or_record_type, record_id) {
        /**
         * Deletes a system record
         * @param {String} record_or_record_type
         * @param {String} record_id
         * @returns {Object} The system record
         */ // Error handling
        let record_type = record_or_record_type["@type"] || record_or_record_type?.record_type || record_or_record_type;
        record_id = record_or_record_type["@id"] || record_or_record_type?.record_id || record_id;
        // 
        let action = await (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).http.api.delete(this.dataApiUrl + "/" + this.collection, null, records);
        // Remove from cache
        this.cache.delete(record_type, record_id);
        // 
        Return;
    }
}
async function $d9b56bf44db9acb6$var$getRecord(record_or_record_type, record_id, url, cache, force) {
    // Error handling
    let record_type = record_or_record_type["@type"] || record_or_record_type?.record_type || record_or_record_type;
    record_id = record_or_record_type["@id"] || record_or_record_type?.record_id || record_id;
    // Verify in cache
    if (force != true) {
        let record = cache.get(record_type, record_id);
        if ((0, $53bcb33ef2023ce8$export$f936470337fdc8d0).isNotNull(record)) {
            console.log("get from cache");
            return record;
        }
    }
    // Define params
    let params = {
        "@type": record_type,
        "@id": record_id
    };
    // Get 
    let record;
    try {
        record = await (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).http.api.get(url, null, params);
    } catch (error) {
        //console.log(error)
        record = null;
    }
    // Store in cache
    if ((0, $53bcb33ef2023ce8$export$f936470337fdc8d0).isNotNull(record)) // Cache main record
    cache.set(record);
    // Return
    return record;
}
async function $d9b56bf44db9acb6$var$postRecord(record, url, cache) {
    /**
     * Posts a system record
     * @param {Object} systemRecord
     * @returns {Object} The system record
     *
     */ // Error handling
    if ((0, $53bcb33ef2023ce8$export$f936470337fdc8d0).isNull(record)) return null;
    //
    let records1 = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).toArray(record);
    // transform to system thing
    records1 = records1.map((x)=>(0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.toThing(x));
    // Post
    try {
        records1 = await (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).http.api.post(url, null, records1);
    } catch (error) {
        console.log(error);
        records1 = null;
    }
    // Add records provided back to cache
    cache.set(records1);
    // Return
    return records1;
}


let $3ca879967de4427f$var$apikey1 = "sk-proj-U7IWqJiLbVaTGHZ";
let $3ca879967de4427f$var$apikey2 = "3U637T3BlbkFJdXJ1xNv2W5U52d9MKijr";
let $3ca879967de4427f$var$APIKEY = $3ca879967de4427f$var$apikey1 + $3ca879967de4427f$var$apikey2;
class $3ca879967de4427f$export$e9f7c51c603ef90a {
    constructor(){}
    async ask(messages) {
        const apiKey = $3ca879967de4427f$var$APIKEY;
        const url = "https://api.openai.com/v1/chat/completions";
        const headers = {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        };
        const data = {
            model: "gpt-4o-mini",
            messages: messages
        };
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(data)
            });
            if (!response.ok) {
                console.log(response.statusText);
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const result = await response.json();
            return result.choices[0].message.content;
        } catch (error) {
            console.error("Error calling OpenAI API:", error);
            return null;
        }
    }
}


const $27aca64046765c2d$export$8ffd1228772c8ae6 = {
    KrTimer: (0, $72185a15243df046$export$1481e10980f8a723),
    KrCache: (0, $56ba4b57196189e3$export$f5bc5036afac6116),
    KrStorage: (0, $d9b56bf44db9acb6$export$c739a053efdbec32),
    KrChatGPT: (0, $3ca879967de4427f$export$e9f7c51c603ef90a)
};



const $cf838c15c8b009ba$export$f936470337fdc8d0 = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0);
const $cf838c15c8b009ba$export$8ffd1228772c8ae6 = (0, $27aca64046765c2d$export$8ffd1228772c8ae6);
const $cf838c15c8b009ba$export$4d4e92f9aafe7618 = (0, $3044c528e2aca24b$export$4d4e92f9aafe7618 //export const krakenElements = krakenElementsObject
);


export {$cf838c15c8b009ba$export$f936470337fdc8d0 as krakenHelpers, $cf838c15c8b009ba$export$8ffd1228772c8ae6 as krakenTools, $cf838c15c8b009ba$export$4d4e92f9aafe7618 as krakenClasses};
//# sourceMappingURL=main.js.map
