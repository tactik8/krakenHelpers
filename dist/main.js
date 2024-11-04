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


const $8e7de55ecf14d868$var$h = {
    null: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10),
    array: (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00),
    isNull: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNull,
    isNotNull: (0, $41e9b357c493982e$export$f8c0f914c8a0ee10).isNotNull,
    toArray: (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00).toArray,
    isArray: (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00).isArray,
    dot: (0, $2cf68f4048a6f85f$export$fe5b3308000496d5),
    number: (0, $44ebc265e2335159$export$96be39e8128f5891),
    json: (0, $409d3194b75b4893$export$94a70d284fcdf065)
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
    getValues: $8e7de55ecf14d868$var$getValues
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
        for(let c in conditions)if ($8e7de55ecf14d868$var$h.dot.get(c, v) != conditions[c]) {
            passes = false;
            break;
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
        if ($8e7de55ecf14d868$var$h.number.isNumber(value1) && $8e7de55ecf14d868$var$h.number.isNumber(value2)) {
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
    let duration = $2969a9bd2c7ad243$var$h.date.human.duration(date);
    return duration;
}
function $2969a9bd2c7ad243$var$_getHeadingDateSince(record) {
    let date = $2969a9bd2c7ad243$var$_getHeadingDate(record);
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
    if (!configStr.includes("=")) return null;
    // Split the config string by ','
    let configParts = configStr.split(",");
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
    if (propertyID.includes("=")) return null;
    propertyID = $91ff8b8350f98bed$var$_cleanString(propertyID);
    // Check if commas 
    if (propertyID.includes(",")) {
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
            $a762e458f5ffc61b$var$h.dot.set(tempRecord, propertyID, value);
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
        content = String(tag.contentBefore) + String(value) + String(tag.contentAfter);
        tag = $a762e458f5ffc61b$var$getPlaceholderTag(content);
    }
    return content;
}
function $a762e458f5ffc61b$var$prepareTemplate(template) {
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
    getPropertyValue: $5f18a9d192f60010$var$getPropertyValue
};
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
        "@id": `ItemList${n0}`,
        "name": `ItemList${n0}`,
        "itemListElement": []
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
        "name": `ListItem${n0}`,
        "position": n,
        "item": $5f18a9d192f60010$var$getThing(n)
    };
    return record;
}
function $5f18a9d192f60010$var$getPerson(n = 0) {
    let n0 = String(n);
    let record = {
        "@type": "Person",
        "@id": `person${n0}`,
        "givenName": `givenName${n0}`,
        "familyName": `familyName${n0}`,
        "email": `givenName${n0}_familyName${n0}@organization${n0}.com`,
        "telephone": `1-514-111-222${n0}`,
        "hasOccupation": {
            "@type": "Occupation",
            "@id": `occupation${n0}`,
            "name": `occupation${n0}`
        },
        "worksfor": $5f18a9d192f60010$var$getOrganization(n)
    };
    return record;
}
function $5f18a9d192f60010$var$getOrganization(n) {
    let n0 = String(n);
    let record = {
        "@type": "Organization",
        "@id": `testOrganization${n0}`,
        "name": `testOrganization${n0}`,
        "url": `https:\/\/www.testOrganization${n0}.com`
    };
    return record;
}
function $5f18a9d192f60010$var$getAction(n) {
    let n0 = String(n);
    let record = {
        "@type": "action",
        "@id": `action${n0}`,
        "name": `action${n0}`,
        "actionStatus": "ActiveActionStatus",
        "startTime": "",
        "endTime": "",
        "object": "",
        "result": "",
        "instrument": ""
    };
    return record;
}
function $5f18a9d192f60010$var$getSystemRecord() {
    let record = {
        "@type": "Thing",
        "@id": "thing1",
        "_id": "567e0725-a4b7-4a15-a5e5-39a2751bc09f",
        "_version": "2.0",
        "_dbCollection": null,
        "_dbId": null,
        "_record_type": "Thing",
        "_record_id": "thing1",
        "_headings": [],
        "_refs": [],
        "_propertyValues": [
            {
                "@type": "ReplaceAction",
                "@id": "67120ec1-89ce-4644-ba45-e5f534cf2570",
                "actionStatus": "CompletedActionStatus",
                "valid": true,
                "object": {
                    "@type": "PropertyValue",
                    "propertyID": "@type",
                    "value": "Thing"
                },
                "metadata": {
                    "createdDate": new Date(),
                    "position": 5
                }
            },
            {
                "@type": "ReplaceAction",
                "@id": "8a363b93-46ac-4fe1-a4ed-c74b9fa890cc",
                "actionStatus": "CompletedActionStatus",
                "valid": true,
                "object": {
                    "@type": "PropertyValue",
                    "propertyID": "@id",
                    "value": "thing1"
                },
                "metadata": {
                    "createdDate": new Date(),
                    "position": 7
                }
            },
            {
                "@type": "ReplaceAction",
                "@id": "71c07e54-506d-49d2-a273-6d6a9e8ed1bd",
                "actionStatus": "CompletedActionStatus",
                "valid": true,
                "object": {
                    "@type": "PropertyValue",
                    "propertyID": "name",
                    "value": "thing1"
                },
                "metadata": {
                    "createdDate": new Date(),
                    "position": 9
                }
            }
        ],
        "_createdDate": new Date(),
        "name": "thing1"
    };
    return record;
}
function $5f18a9d192f60010$var$getPropertyValue(propertyID, value) {
    /**
     * Returns a property value
     */ let record = {
        "@type": "ReplaceAction",
        "@id": `propertyValue${propertyID}`,
        "actionStatus": "CompletedActionStatus",
        "valid": true,
        "object": {
            "@type": "PropertyValue",
            "@id": `pv_${propertyID}_1`,
            "propertyID": propertyID,
            "value": `${value}`
        },
        "metadata": {
            "createdDate": new Date(),
            "position": 9
        }
    };
    return record;
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



const $2fa9c1db583d4d31$export$439bf78a2cc516f5 = {
    analysis: (0, $8e7de55ecf14d868$export$35d3dd03f0194c3a),
    array: (0, $2092c12a98cb2c2e$export$4736c2d1b0001d00),
    classes: (0, $7043b2674c61d7a1$export$168f34c82020a71),
    date: (0, $535b3f5b0bcb555a$export$15c85b69ec02b47c),
    dot: (0, $2cf68f4048a6f85f$export$fe5b3308000496d5),
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
    isNumber: (0, $44ebc265e2335159$export$96be39e8128f5891).isValid
};



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
    element.setAttribute("id", (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).uuid.new());
    return;
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
     */ element.draggable = true;
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
    element.setAttribute("data-record-type", record_id);
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
    let bodies = (0, $6ab83f37dcb687d8$export$ffaccbdd67f021cd).children.elements.get(element, classToGet, "kr" + nextElementType);
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


const $0c0a864fcee6a66f$export$b8f607a8a10bde0a = {
    init: $0c0a864fcee6a66f$var$initThingElementAll
};
function $0c0a864fcee6a66f$var$initThingElementAll(element, TEMPLATEDB) {
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
        action.instrument = element.map((x)=>$0c0a864fcee6a66f$var$initThingElementAll(x, TEMPLATEDB));
        action.close();
        return action;
    }
    // Placeholders
    //replacePlaceholders(element)
    // Replace class 
    let elements = element.getElementsByTagName("*");
    for (let e of elements)$0c0a864fcee6a66f$var$addMissingClasses(e);
    // Init element
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull((0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7).type.get(element))) action.instrument = $0c0a864fcee6a66f$var$initThingElement(element, TEMPLATEDB);
    // Init childrens
    let item = element.firstElementChild;
    while(item){
        let nextItem = item.nextElementSibling;
        action.instrument = $0c0a864fcee6a66f$var$initThingElementAll(item, TEMPLATEDB);
        item = nextItem;
    }
    action.close();
    return action;
}
function $0c0a864fcee6a66f$var$initThingElement(element, TEMPLATEDB) {
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
    //
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull((0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7).type.get(element))) {
        action.close();
        return action;
    }
    // Set id
    (0, $c8b0dc629c726d48$export$e0169ab077dc0819).setId(element);
    // Add part main and template if missing. Copy content as template
    if ((0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7).type.get(element) == "property" || (0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7).type.get(element) == "thing") {
        //action.instrument = addMainIfMissing(element, TEMPLATEDB)
        action.instrument = $0c0a864fcee6a66f$var$retrieveAndSaveTemplate(element, TEMPLATEDB);
        action.instrument = $0c0a864fcee6a66f$var$retrieveInnerContentAsTemplate(element, TEMPLATEDB);
        let mainPart = (0, $2ad812101d8ee679$export$9ccd701369bc6cde).main.get(element);
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(mainPart)) mainPart.innerHTML = "";
    }
    // Return     
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
    // Skip if template already exists
    if (!(0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(TEMPLATEDB?.[element.getAttribute("data-templateID")])) {
        action.setCompleted();
        return action;
    }
    // Get templates
    let preTemplateParts = element.querySelectorAll("TEMPLATE") //getTemplateOfElement(element)
    ;
    let templateParts = [];
    for (let t of preTemplateParts){
        let className = "kr" + (0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7).type.get(element).slice(0, 1).toUpperCase() + (0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7).type.get(element).slice(1).toLowerCase();
        if ((0, $6ab83f37dcb687d8$export$ffaccbdd67f021cd).current.get(t, className).id == element.id) templateParts.push(t);
    }
    action.result = templateParts;
    // Add template parts to TEMPLATEDB
    if (templateParts.length > 0) {
        let templateID = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).uuid.new();
        element.setAttribute("data-templateID", templateID);
        for (let t of templateParts){
            TEMPLATEDB[templateID] = (TEMPLATEDB?.[templateID] || "") + t.innerHTML;
            TEMPLATEDB[templateID] = TEMPLATEDB[templateID].trim();
            (0, $72773900747a3863$export$dc9f39fafadf3ccd).set(templateID, TEMPLATEDB?.[templateID]);
        }
    }
    action.close();
    return action;
}
function $0c0a864fcee6a66f$var$retrieveInnerContentAsTemplate(element, TEMPLATEDB) {
    /**
     * If no template, retrieves inner content to be used as template
     * @param {Object} element
     * @returns {Object} The element
     * 
     */ let action = new (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).classes.Action(`retrieveInnerContentAsTemplate ${(0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7).type.get(element)} element ${element?.id}`);
    action.object = element;
    // Skip if template already exists
    if (!(0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(TEMPLATEDB[element.id])) {
        action.setCompleted();
        return action;
    }
    let templateID = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).uuid.new();
    element.setAttribute("data-templateID", templateID);
    if ((0, $a635fab3621c72fd$export$c3cc9c4e77b9c8d7).type.get(element) == "property" && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull((0, $2ad812101d8ee679$export$9ccd701369bc6cde).main.get(element))) {
        TEMPLATEDB[templateID] = (0, $2ad812101d8ee679$export$9ccd701369bc6cde).main.get(element).innerHTML;
        (0, $72773900747a3863$export$dc9f39fafadf3ccd).set(templateID, TEMPLATEDB?.[templateID]);
    } else {
        TEMPLATEDB[templateID] = element.innerHTML;
        (0, $72773900747a3863$export$dc9f39fafadf3ccd).set(templateID, TEMPLATEDB?.[templateID]);
    }
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
    // Get parent thing element
    let currentThingElement = (0, $6ab83f37dcb687d8$export$ffaccbdd67f021cd).current.thing.get(element);
    // Return if already has a parent
    if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(currentThingElement)) {
        action.close();
        return action;
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
            if (mutation.type === "childList") console.log("A child node has been added or removed.");
            else if (mutation.type === "attributes") console.log(`The ${mutation.attributeName} attribute was modified.`);
        }
    };
    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);
    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);
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
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(value1) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(value2)) result = false;
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(value1) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(value2)) result = true;
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(value1) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(value2) && value1 != value2) result = value1 > value2;
        if (result) return result;
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
    for (let propertyID of propertyIDs){
        let value1 = pv1?.metadata?.[propertyID];
        let value2 = pv2?.metadata?.[propertyID];
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(value1) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(value2)) continue;
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(value1) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(value2)) return true;
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(value1) && (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(value2)) return false;
        if (value1 < value2) return true;
        if (value1 > value2) return false;
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
            "createdDate": (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).date.toDate(metadata?.createdDate) || new Date(),
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
        let c2 = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull(pv1?.replacee);
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
    if (values.length == 0) return null;
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
     */ return $7bb8d4569e1a97bb$var$replacePropertyValue(thing, propertyID, value, metadata);
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
     */ let pvs = $7bb8d4569e1a97bb$var$getPropertyValues(thing, propertyID);
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
     * @returns {Array} Array of values in system format
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
        if (propertyID == "itemListElement") pvs.sort((a, b)=>{
            if (($7bb8d4569e1a97bb$var$getValue(a?.object?.value, "position") || 0) < ($7bb8d4569e1a97bb$var$getValue(b?.object?.value, "position") || 0)) return -1;
            else if (($7bb8d4569e1a97bb$var$getValue(a?.object?.value, "position") || 0) < ($7bb8d4569e1a97bb$var$getValue(b?.object?.value, "position") || 0)) return 1;
            else return 0;
        });
        // Get values from pvs
        result = pvs.map((pv)=>pv?.object?.value);
        // Retrieve content of values from things db
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(db)) result = result.map((x)=>$7bb8d4569e1a97bb$var$find(db, x) || x);
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
    if ($7bb8d4569e1a97bb$var$isThingClass(thing)) return thing?.system;
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
     */ if (!$444f5d32a598f4dd$var$isValid(value)) return null;
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
     */ let listItems = (0, $7bb8d4569e1a97bb$export$1ef237150243f225).values.get(itemList, "itemListElement");
    listItems = (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).toArray(listItems);
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
    console.log("listItems", listItems);
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
     */ let listItems = $5f93a651ba787782$var$getListItems(itemList);
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
        temp = listItems.filter((x)=>x["id"] == temp?.["@id"])?.[0] || null;
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNotNull(temp)) {
            if ((0, $444f5d32a598f4dd$export$4bb05bd0559c698f).position.get(temp) != p) (0, $444f5d32a598f4dd$export$4bb05bd0559c698f).position.set(temp, p);
            temp = (0, $444f5d32a598f4dd$export$4bb05bd0559c698f).nextItem.get(temp);
            p += 1;
        }
    }
    return itemList;
}


const $fbdfe69f48d32df8$export$c24b4489b93ad8cb = {
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
    mergeLists: (0, $7bb8d4569e1a97bb$export$1ef237150243f225).mergeLists
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
function $989c7a224980c1bb$var$_renderThingElement(element, value, TEMPLATEDB) {
    /**
     * Updates the element with the value
     * @param {Object} element
     * @param {Object} value
     * @returns {Object} The element updated
     */ let action = new $989c7a224980c1bb$var$h.base.classes.Action(`Render elements ${value?.["@type"]} ${value?.["@id"]}`);
    // Get current thing element
    let thingElement = $989c7a224980c1bb$var$h.dom.thing.traverse.current.thing.get(element);
    if ($989c7a224980c1bb$var$h.isNull(thingElement)) {
        action.setFailed("No thing element found");
        return action;
    }
    // Create main element if missing
    let propertyMainElement = $989c7a224980c1bb$var$h.dom.thing.part.main.get(thingElement);
    if ($989c7a224980c1bb$var$h.isNull(propertyMainElement)) propertyMainElement = $989c7a224980c1bb$var$h.dom.thing.part.add(thingElement, "main", "");
    // Set type and id
    thingElement.setAttribute("data-record-type", value?.["@type"] || value?.record_type);
    thingElement.setAttribute("data-record-id", value?.["@id"] || value?.record_id);
    // Retrieve property elements
    let propertyElements = $989c7a224980c1bb$var$h.dom.thing.traverse.children.properties.get(thingElement);
    // Render thing from template if not already on the document
    let templateID = element.getAttribute("data-templateID");
    // Test to see if need to render template 
    let template = thingElement?._template || $989c7a224980c1bb$var$h.dom.thing.templateDB.get(templateID);
    let mainPart = $989c7a224980c1bb$var$h.dom.thing.part.main.get(thingElement);
    let c1 = $989c7a224980c1bb$var$h.isNotNull(template) && template.includes("{{");
    let c2 = propertyElements.length == 0;
    if (c1 || c2) {
        console.log("*******");
        let mainPart = $989c7a224980c1bb$var$h.dom.thing.part.main.get(thingElement);
        // Get headings from record
        let headingRecord = $989c7a224980c1bb$var$h.thing.record.get(value);
        headingRecord = $989c7a224980c1bb$var$h.base.heading.addHeadings(headingRecord);
        headingRecord = $989c7a224980c1bb$var$h.base.json.simplify(headingRecord);
        // Render template and set as content
        let htmlContent = $989c7a224980c1bb$var$h.base.template.get(template, headingRecord);
        mainPart.innerHTML = htmlContent;
        $989c7a224980c1bb$var$h.dom.thing.init.init(mainPart, TEMPLATEDB);
        propertyElements = $989c7a224980c1bb$var$h.dom.thing.traverse.children.properties.get(mainPart);
    }
    // Render if contains {{
    mainPart = $989c7a224980c1bb$var$h.dom.thing.part.main.get(thingElement);
    if (mainPart.innerHTML.includes("{{")) {
        let headingRecord = $989c7a224980c1bb$var$h.thing.record.get(value);
        headingRecord = $989c7a224980c1bb$var$h.base.heading.addHeadings(headingRecord);
        headingRecord = $989c7a224980c1bb$var$h.base.json.simplify(headingRecord);
        mainPart.innerHTML = $989c7a224980c1bb$var$h.base.template.get(mainPart.innerHTML, headingRecord);
        $989c7a224980c1bb$var$h.dom.thing.init.init(mainPart, TEMPLATEDB);
        propertyElements = $989c7a224980c1bb$var$h.dom.thing.traverse.children.properties.get(mainPart);
    }
    // Render individual properties
    for (let p of propertyElements)action.instrument = $989c7a224980c1bb$var$_renderPropertyElement(p, value, null, TEMPLATEDB);
    action.close();
    return action;
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
    // Get propertyValues (pvs)
    let propertyID = element.getAttribute("data-propertyID");
    let pvs = $989c7a224980c1bb$var$h.thing.propertyValues.get(record, propertyID);
    pvs = $989c7a224980c1bb$var$h.toArray(pvs);
    // Get template 
    let templateID = element.getAttribute("data-templateID");
    template = $989c7a224980c1bb$var$h.dom.thing.templateDB.get(templateID) //TEMPLATEDB?.[templateID] || template;
    ;
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
            // Prepopulate template with values (in case there are {{ }} )
            let content = template //h.template.get(template, newRecord);
            ;
            // Generate new value element
            ve = $989c7a224980c1bb$var$_newValueElement(pv, record, content, propertyID, TEMPLATEDB);
            // Render sub things if any
            $989c7a224980c1bb$var$h.dom.thing.traverse.children.things.get(ve).map((x)=>$989c7a224980c1bb$var$_renderThingElement(x, pv?.object?.value, null, TEMPLATEDB));
            // Render sub properties if any
            $989c7a224980c1bb$var$h.dom.thing.traverse.children.properties.get(ve).map((x)=>$989c7a224980c1bb$var$_renderPropertyElement(x, pv?.object?.value, null, TEMPLATEDB));
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
     */ let value = pv?.object?.value || value;
    let newValueElement = document.createElement("span");
    $989c7a224980c1bb$var$h.dom.thing.property.type.setAsValue(newValueElement);
    $989c7a224980c1bb$var$h.dom.thing.property.propertyID.set(newValueElement, propertyID);
    $989c7a224980c1bb$var$h.dom.thing.property.propertyID.set(newValueElement, pv?.["@id"]);
    $989c7a224980c1bb$var$h.dom.thing.property.valueHash.set(newValueElement, value);
    template = template.trim();
    if ($989c7a224980c1bb$var$h.isNull(template)) newValueElement.textContent = value;
    else {
        newValueElement.innerHTML = template;
        let main = $989c7a224980c1bb$var$h.dom.thing.part.main.get(newValueElement);
        if (main) {
            main.innerHTML = value;
            for (let t of $989c7a224980c1bb$var$h.dom.thing.children.things.get(main))$989c7a224980c1bb$var$h.dom.thing.property.ref.set(t, value);
        }
    }
    if (newValueElement.innerHTML.includes("{{")) {
        let headingRecord = $989c7a224980c1bb$var$h.thing.record.get(value);
        headingRecord = $989c7a224980c1bb$var$h.base.heading.addHeadings(headingRecord);
        headingRecord = $989c7a224980c1bb$var$h.base.json.simplify(headingRecord);
        newValueElement.innerHTML = $989c7a224980c1bb$var$h.base.template.get(newValueElement.innerHTML, headingRecord);
    }
    $989c7a224980c1bb$var$h.dom.thing.init.init(newValueElement, TEMPLATEDB);
    for (let t of $989c7a224980c1bb$var$h.dom.thing.traverse.children.things.get(newValueElement)){
        t.setAttribute("data-record-type", value?.["@type"]);
        t.setAttribute("data-record-id", value?.["@id"]);
    }
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
     * @returns {Object} The element
     *
     * classes:
     *     - krDropzone:
     *     - krDraggable:
     *     - krClickable:
     */ let classList = {
        //Drag and drop
        krDrag: {
            eventFn: (0, $2adfa4e445ef1d89$export$631b1a0163af1868).dragDrop.setDraggable,
            callbackFn: $2b7cd5effc340282$var$addToList,
            params: {
                db: db1,
                TEMPLATEDB: TEMPLATEDB
            }
        },
        krDrop: {
            eventFn: (0, $2adfa4e445ef1d89$export$631b1a0163af1868).dragDrop.setDropzone,
            callbackFn: $2b7cd5effc340282$var$addToList,
            params: {
                db: db1,
                TEMPLATEDB: TEMPLATEDB
            }
        },
        // Generic dropzone
        krDropzone: {
            eventFn: (0, $2adfa4e445ef1d89$export$631b1a0163af1868).generic.setDropzone,
            callbackFn: $2b7cd5effc340282$var$addToList,
            params: {
                db: db1,
                TEMPLATEDB: TEMPLATEDB
            }
        },
        // Generic draggable
        krDraggable: {
            eventFn: (0, $2adfa4e445ef1d89$export$631b1a0163af1868).generic.setDraggable,
            callbackFn: $2b7cd5effc340282$var$addToList,
            params: {
                db: db1,
                TEMPLATEDB: TEMPLATEDB
            }
        },
        // Generic clickable
        krClickable: {
            eventFn: (0, $2adfa4e445ef1d89$export$631b1a0163af1868).click.set,
            callbackFn: $2b7cd5effc340282$var$addToList,
            params: {
                db: db1,
                TEMPLATEDB: TEMPLATEDB
            }
        }
    };
    // Set id to element if doesn't already have one
    (0, $c8b0dc629c726d48$export$e0169ab077dc0819).setId(element);
    // Register
    for(let k in classList){
        if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull($2b7cd5effc340282$var$DB?.[k])) {
            console.log(k);
            $2b7cd5effc340282$var$DB[k] = {};
        }
        let fn = classList?.[k]?.["eventFn"];
        let callbackFn = classList?.[k]?.["callbackFn"];
        let params = classList?.[k]?.["params"];
        let elements = element.querySelectorAll(`.${k}`);
        for (let e of elements)if ((0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).isNull($2b7cd5effc340282$var$DB?.[k]?.[e?.id])) {
            fn(e, callbackFn, params);
            $2b7cd5effc340282$var$DB[k][e.id] = true;
        }
    }
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
function $8ce030c78f8b39da$var$init(element) {
    /**
     * Initializes an element
     * @param {Object} element
     * @returns {Object} The element
     */ return (0, $0c0a864fcee6a66f$export$b8f607a8a10bde0a).init(element, $8ce030c78f8b39da$var$TEMPLATEDB);
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
function $8ce030c78f8b39da$var$renderSystem(element, record, conditions) {
    /**
     * Sets the record of an element
     * @param {Object} element
     * @param {Object} record
     * @returns {Object} The element
     */ return (0, $989c7a224980c1bb$export$6ee4764c2ac4fe01).render(element, record, conditions, $8ce030c78f8b39da$var$TEMPLATEDB);
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


const $3a31490163c9c724$export$3633c9dc515d5cf9 = {
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
    return ` <div class="row align-items-center " >

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


function $76c1cc9e1ba74570$export$aa3e815946b80764() {
    return ` <div class="card" style="width: 18rem;">
         
            <img src="{{image.contentUrl}}" class="card-img-top" alt="..." onerror="this.style.display='none'">
           
            <div class="card-body">
            {{#_headingPosition}}
              <h5 class="card-title">{{_headingPosition}}</h5>
            {{/_headingPosition}}
              <h5 class="card-title">{{_headingStars}}</h5>
                <h5 class="card-title">{{ _heading1 }}</h5>
                <p class="card-text">{{ _heading2 }}</p>
                {{#potentialAction}}
                    <a href="{{ potentialAction.url}}" class="btn btn-primary">{{ potentialAction.name}}</a>
                {{/potentialAction}}
            </div>
        </div>
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




function $155333d55623e825$export$f90eb7c4d1fc985e(itemContent, prefixes) {
    prefixes = prefixes || [];
    let prefix = prefixes.join(".");
    if (prefix != "") prefix = prefix + ".";
    itemContent = itemContent || (0, $f4b33ebb584657d4$export$53f1d5ea8de3d7c)(prefixes.concat([
        "item"
    ]));
    return `

        <div class=" mt-1 mb-1">
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
                        {{ ${prefix}position }}
                    </div>
                    
    
                     <div class="col col-12 col-sm-1 flex-sm-grow-1 order-5 order-sm-3" >
                        <main>
                            ${itemContent}
                        </main>
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




function $03cb398f5a2433c4$export$b97dc3b2d35f8775(content, prefixes = []) {
    prefixes = prefixes || [];
    prefixes = prefixes.filter((x)=>x !== undefined && x !== null);
    let prefix = prefixes.join(".");
    if (prefix != "") prefix = prefix + ".";
    let id = "checkbox_" + String(crypto.randomUUID());
    let result = `

        <div class="container checkboxParent">

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
                
                   ${(0, $155333d55623e825$export$f90eb7c4d1fc985e)(content, prefixes.concat("itemListElement"))}
               
            {{ /itemListElement }}


            <div class="row mt-2 mb-2 border-bottom align-items-center">

            </div>

        </div>

    
    `;
    return result;
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


const $0c6143b014d5fc75$export$99f0d4ee82e9706 = {
    card: (0, $76c1cc9e1ba74570$export$aa3e815946b80764),
    line: (0, $f4b33ebb584657d4$export$53f1d5ea8de3d7c),
    page: (0, $4e52112d33bc49e7$export$523fb3936f49e028),
    listitem: (0, $155333d55623e825$export$f90eb7c4d1fc985e),
    itemlist: (0, $03cb398f5a2433c4$export$b97dc3b2d35f8775),
    navbar: (0, $7815f8c2c6e056e7$export$58733aaf927c3bbe),
    footer: (0, $c1a4b784a1c88929$export$adb608be33961c98)
};



const $53bcb33ef2023ce8$export$f936470337fdc8d0 = {
    base: (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5),
    dom: (0, $3a31490163c9c724$export$3633c9dc515d5cf9),
    html: (0, $0c6143b014d5fc75$export$99f0d4ee82e9706),
    localization: (0, $4f0e7017aa5846ec$export$a8f5b9913def03f3),
    thing: (0, $fbdfe69f48d32df8$export$c24b4489b93ad8cb),
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
    uuid: (0, $2fa9c1db583d4d31$export$439bf78a2cc516f5).uuid
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


const $27aca64046765c2d$export$8ffd1228772c8ae6 = {
    KrTimer: (0, $72185a15243df046$export$1481e10980f8a723)
};



class $706f18fe777015bf$export$3138a16edeb45799 {
    constructor(record_or_record_type, record_id, metadata1){
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
        if ((0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.isThing(record_or_record_type)) this.system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.toThing(record_or_record_type, record_id, metadata1);
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
    set _propertyValues(value1) {
        this.system._propertyValues = value1;
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
    set system(value1) {
        /**
         * Event monitoring
         */ this._system = value1;
        this._record_type = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.record_type.get(value1);
        this._record_id = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.record_id.get(value1);
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
    set record_type(value1) {
        /**
         * Sets the record type
         * @param {String} value The record type
         * @returns {Object} The record
         */ this.system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.record_type.set(this.system, value1);
        this._record_type = value1;
    }
    get record_id() {
        /**
         * Returns the record id
         * @returns {String} The record id
         */ return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.record_id.get(this.system);
    }
    set record_id(value1) {
        /**
         * Sets the record id
         * @param {String} value The record id
         * @returns {Object} The record
         */ this.system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.record_id.set(this.system, value1);
        this._record_id = value1;
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
    set record(value1) {
        /**
         * Sets the record
         * @param {Object} value The record
         * @returns {Object} The record
         */ this.system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.toThing(value1);
    }
    get children() {
        /**
         * Get sub things
         * 
         */ return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.children(this.system);
    }
    // -----------------------------------------------------
    //  Values 
    // -----------------------------------------------------
    get(propertyID) {
        return this.getValues(propertyID);
    }
    set(propertyID, value1, metadata1) {
        return this.setValue(propertyID, value1, metadata1);
    }
    add(propertyID, value1, metadata1) {
        return this.addValue(propertyID, value1, metadata1);
    }
    delete(propertyID, value1, metadata1) {
        return this.deleteValue(propertyID, value1, metadata1);
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
    setValue(propertyID, value1, metadata1) {
        /**
         * Sets the value for a given property
         * @param {String} propertyID The propertyID
         * @param {Object} value The record value for a given property
         * @returns {Object} The record
         */ this.system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.value.set(this.system, propertyID, value1, metadata1);
    }
    replaceValue(propertyID, value1, metadata1) {
        /**
         * Sets the value for a given property
         * @param {String} propertyID The propertyID
         * @param {Object} value The record value for a given property
         * @returns {Object} The record
         */ this.system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.value.replace(this.system, propertyID, value1, metadata1);
    }
    addValue(propertyID, value1, metadata1) {
        /**
         * Add the value for a given property
         * @param {String} propertyID The propertyID
         * @param {Object} value The record value for a given property
         * @returns {Object} The record
         */ this.system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.value.add(this.system, propertyID, value1, metadata1);
    }
    deleteValue(propertyID, value1, metadata1) {
        /**
         * Add the value for a given property
         * @param {String} propertyID The propertyID
         * @param {Object} value The record value for a given property
         * @returns {Object} The record
         */ this.system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.value.delete(this.system, propertyID, value1, metadata1);
    }
    getPropertyValue(propertyID) {
        /**
         * Returns the property value for a given property
         * @param {String} propertyID The propertyID
         * @returns {Object} The record value for a given property
         */ return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.value.get(this.system, propertyID);
    }
    getPropertyValues(propertyID) {
        /**
         * Returns the property value for a given property
         * @param {String} propertyID The propertyID
         * @returns {Object} The record value for a given property
         */ this.system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.value.set(this.system, propertyID, value, metadata);
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
    insert(value1) {
        /**
         * Inserts a value into the list
         * @param {Object} value The value
         *    
         */ this.system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.list.insert(this.system, value1);
    }
    get position() {
        return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.value.get(this.system, "position");
    }
    set position(value1) {
        return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.value.set(this.system, "position", value1);
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
    set name(value1) {
        this.system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.value.set(this.system, "name", value1);
    }
    get url() {
        return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.value.get(this.system, "url");
    }
    set url(value1) {
        this.system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.value.set(this.system, "url", value1);
    }
    get itemListElement() {
        return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.values.get(this.system, "itemListElement");
    }
    set itemListElement(value1) {
        this.system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.values.set(this.system, "itemListElement", value1);
    }
    get item() {
        return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.value.get(this.system, "item");
    }
    set item(value1) {
        this.system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.value.set(this.system, "item", value1);
    }
    get other() {
        return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.value.get(this.system, "other");
    }
    set other(value1) {
        this.system = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.value.set(this.system, "other", value1);
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
}





class $ccac8dd150ebbe19$export$ca3c739adc83f458 {
    constructor(element){
        this._db = new (0, $2cb32bf7096e125e$export$625c98c0044d29a6)(true);
        this._templateDB = {};
        this._registeredThings = new (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).base.classes.Cache();
        this._element = element || document.body;
    }
    init() {
        (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).dom.thing.init(this._element, this._templateDB);
    }
    get(record_or_record_type, record_id) {
        /**
         * Gets a thing
         * @param {Object} record_or_record_type The record or record type
         * @param {String} record_id The record id
         * @returns {Object} The thing
         */ return this._db.get(record_or_record_type, record_id);
    }
    set(record) {
        // Add to thing db (will convert to thing object if required)
        // Add thing to thing db
        let thing = this._db.set(record);
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
        for (let t of things)this.renderThing(t);
    }
    renderThing(thing) {
        /**
         * Renders the thing
         * @param {Object} thing The thing
         * @returns {Object} The thing
         * 
         */ thing = this._db.get(thing);
        (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).dom.thing.renderSystem(this._element, thing.system);
    }
    thingEventCallback(action) {
        console.log("New callback", action.object);
        this.renderThing(action.object);
    }
}


const $3044c528e2aca24b$export$4d4e92f9aafe7618 = {
    KrThing: (0, $706f18fe777015bf$export$3138a16edeb45799),
    KrThings: (0, $2cb32bf7096e125e$export$625c98c0044d29a6),
    KrElementEngine: (0, $ccac8dd150ebbe19$export$ca3c739adc83f458)
};



class $0ef250b87a5eb9d9$export$a24f065ae97d3b9d extends HTMLElement {
    constructor(){
        super();
        this._thing = null;
        this._record = null;
    }
    // -----------------------------------------------------
    //  Draw 
    // -----------------------------------------------------
    init() {
        this.record = $0ef250b87a5eb9d9$var$getRecord();
        this.classList.add("krThing");
        this.innerHTML = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).html.itemlist();
        (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).dom.thing.init(this);
        let headingrecord = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).localization.headings.record.get(this.record);
        (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).dom.thing.render(this, headingrecord);
    }
    // -----------------------------------------------------
    //  Properties 
    // -----------------------------------------------------
    get record_type() {
        return this.getAttribute("data-record-type");
    }
    set record_type(value) {
        return this.setAttribute("data-record-type", value);
    }
    get record_id() {
        return this.getAttribute("data-record-id");
    }
    set record_id(value) {
        return this.setAttribute("data-record-id", value);
    }
    get ref() {
        return {
            "@type": this.record_type,
            "@id": this.record_id
        };
    }
    set ref(value) {
        this.record_type = value?.["@type"] || value?.record_type || null;
        this.record_id = value?.["@id"] || value?.record_id || null;
    }
    get record() {
        return $0ef250b87a5eb9d9$var$getRecord();
    }
    set record(value) {
        this.ref = value;
        return this._record = value;
    }
    get thing() {
        return this._thing;
    }
    set thing(value) {
        return this._thing = value;
    }
    connectedCallback() {
        this.init();
    }
    disconnectedCallback() {}
    adoptedCallback() {}
    attributeChangedCallback(name, oldValue, newValue) {}
}
customElements.define("kr-list", $0ef250b87a5eb9d9$export$a24f065ae97d3b9d);
function $0ef250b87a5eb9d9$var$getAction(name, no) {
    return {
        "@type": "action",
        "@id": "action_" + name + "_" + String(no),
        name: "action_" + name + "_" + String(no),
        actionStatus: "PotentialActionStatus"
    };
}
function $0ef250b87a5eb9d9$var$getRecord() {
    let record = {
        "@type": "ListItem",
        "@id": "listitem1",
        position: 4,
        item: {
            "@context": "https://schema.org/",
            "@type": "Thing",
            "@id": "thing1",
            name: "thing1",
            image: {
                "@context": "https://schema.org/",
                "@type": "ImageObject",
                "@id": "image1",
                name: "image_1",
                contentUrl: "https://placehold.co/600x400"
            },
            reviewRating: {
                "@type": "Rating",
                bestRating: "5",
                ratingValue: "4",
                worstRating: "1"
            },
            potentialAction: [
                $0ef250b87a5eb9d9$var$getAction("Thing", 0),
                $0ef250b87a5eb9d9$var$getAction("Thing", 1),
                $0ef250b87a5eb9d9$var$getAction("Thing", 2)
            ]
        },
        potentialAction: [
            $0ef250b87a5eb9d9$var$getAction("ListItem", 0),
            $0ef250b87a5eb9d9$var$getAction("ListItem", 1),
            $0ef250b87a5eb9d9$var$getAction("ListItem", 2)
        ]
    };
    let itemlist = {
        "@type": "ItemList",
        "@id": "itemlist1",
        name: "itemlist1",
        itemListElement: [
            record,
            record,
            record,
            record
        ],
        potentialAction: [
            $0ef250b87a5eb9d9$var$getAction("ItemList", 0),
            $0ef250b87a5eb9d9$var$getAction("ItemList", 1),
            $0ef250b87a5eb9d9$var$getAction("ItemList", 2)
        ]
    };
    return itemlist;
}



class $fcaceaa039140c3c$export$4d003f86c0d70530 extends HTMLElement {
    constructor(){
        super();
        this._thing = null;
        this._record = null;
        this.record = {
            "@type": "CreativeWork",
            "@id": String(crypto.randomUUID()),
            "headline": "",
            "text": "aaa",
            "hasPart": [
                {
                    "@type": "CreativeWork",
                    "@id": String(crypto.randomUUID()),
                    "headline": "",
                    "text": "bbb",
                    "hasPart": []
                },
                {
                    "@type": "CreativeWork",
                    "@id": String(crypto.randomUUID()),
                    "headline": "",
                    "text": "ccc",
                    "hasPart": []
                }
            ]
        };
    }
    // -----------------------------------------------------
    //  Draw 
    // -----------------------------------------------------
    init() {
        this.classList.add("krThing");
        this.innerHTML = `
        

         
            <div>
                <div>
                {{ text }}
               </div>

                <div>
                    {{# hasPart}}
                        <div contenteditable="true">
                           <kr-line></kr-line>
                        </div>
                        
                    {{/hasPart}}
                </div>

            </div>
        
        `;
        (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).dom.thing.init(this);
        //let headingrecord = krakenLocalizationHelpers.headings.record.get(this.record);
        console.log(this.record);
        (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).dom.thing.render(this, this.record);
    }
    // -----------------------------------------------------
    //  Properties 
    // -----------------------------------------------------
    get record_type() {
        return this.getAttribute("data-record-type");
    }
    set record_type(value) {
        return this.setAttribute("data-record-type", value);
    }
    get record_id() {
        return this.getAttribute("data-record-id");
    }
    set record_id(value) {
        return this.setAttribute("data-record-id", value);
    }
    get ref() {
        return {
            "@type": this.record_type,
            "@id": this.record_id
        };
    }
    set ref(value) {
        this.record_type = value?.["@type"] || value?.record_type || null;
        this.record_id = value?.["@id"] || value?.record_id || null;
    }
    get record() {
        return this._record;
    }
    set record(value) {
        this.ref = value;
        this._record = value;
    }
    get thing() {
        return this._thing;
    }
    set thing(value) {
        return this._thing = value;
    }
    connectedCallback() {
        this.init();
    }
    disconnectedCallback() {}
    adoptedCallback() {}
    attributeChangedCallback(name, oldValue, newValue) {}
}
customElements.define("kr-input", $fcaceaa039140c3c$export$4d003f86c0d70530);



class $c9145326ace92d33$export$acb9410cd2a7d54e extends HTMLElement {
    constructor(){
        super();
        this._thing = null;
        this._record = null;
        this._template = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).html.itemlist();
    }
    // -----------------------------------------------------
    //  Draw 
    // -----------------------------------------------------
    init() {
        this.classList.add("krThing");
        this.innerHTML = this._template;
    //h.dom.thing.init(this)
    //let headingrecord = h.localization.headings.record.get(this.record);
    //h.dom.thing.render(this, headingrecord)
    }
    // -----------------------------------------------------
    //  Properties 
    // -----------------------------------------------------
    get thingElement() {
        console.log("thingElement");
        return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).dom.thing.traverse.current.thing.get(this);
    }
    get record_type() {
        return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).dom.thing.property.record_type.get(this.thingElement);
    }
    set record_type(value) {
        return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).dom.thing.property.record_type.set(this, value);
    }
    get record_id() {
        return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).dom.thing.property.record_id.get(this);
    }
    set record_id(value) {
        return (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).dom.thing.property.record_id.set(this, value);
    }
    get ref() {
        return {
            "@type": this.record_type,
            "@id": this.record_id
        };
    }
    set ref(value) {
        this.record_type = value?.["@type"] || value?.record_type || null;
        this.record_id = value?.["@id"] || value?.record_id || null;
    }
    get record() {
        return getRecord();
    }
    set record(value) {
        this.ref = value;
        return this._record = value;
    }
    get thing() {
        return this._thing;
    }
    set thing(value) {
        return this._thing = value;
    }
    render() {
        if ((0, $53bcb33ef2023ce8$export$f936470337fdc8d0).isNull(this.record_type) || (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).isNull(this.record_id)) return;
        console.log("element render");
        let db = this.closest("kr-engine");
        let systemRecord = db.get(this.record_type, this.record_id);
        let simpleRecord = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).thing.record.get(systemRecord);
        console.log("ss", simpleRecord);
        let headingRecord = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).base.heading.addHeadings(simpleRecord);
        let content = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).base.template.get(this._template, headingRecord);
        console.log(content);
        this.innerHTML = content;
    }
    connectedCallback() {
        this.init();
        this.render();
    }
    disconnectedCallback() {}
    adoptedCallback() {}
    attributeChangedCallback(name, oldValue, newValue) {
        if (name == "data-record-type") this.render();
        if (name == "data-record-id") this.render();
    }
}
customElements.define("kr-base", $c9145326ace92d33$export$acb9410cd2a7d54e);



class $a47487796306864f$export$77c048791dedfa54 extends (0, $c9145326ace92d33$export$acb9410cd2a7d54e) {
    constructor(){
        super();
        this._template = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0).html.card();
    }
}
customElements.define("kr-card", $a47487796306864f$export$77c048791dedfa54);




class $675103532c00e15f$export$ca3c739adc83f458 extends HTMLElement {
    constructor(){
        super();
        this._engine = null;
    }
    init() {
        this._engine = new (0, $3044c528e2aca24b$export$4d4e92f9aafe7618).KrElementEngine();
        this._engine.init(this);
    }
    get(record_or_record_type, record_id) {
        return this._engine.get(record_or_record_type, record_id);
    }
    set(value) {
        return this._engine.set(value);
    }
    connectedCallback() {
        this.init();
    }
    disconnectedCallback() {}
    adoptedCallback() {}
    attributeChangedCallback(name, oldValue, newValue) {}
}
customElements.define("kr-engine", $675103532c00e15f$export$ca3c739adc83f458);


const $acbf4d89c8c34bfd$export$ab722c29c933d3f9 = {
    KrElementList: (0, $0ef250b87a5eb9d9$export$a24f065ae97d3b9d),
    KrElementInput: (0, $fcaceaa039140c3c$export$4d003f86c0d70530),
    KrElementCard: (0, $a47487796306864f$export$77c048791dedfa54),
    KrElementEngine: (0, $675103532c00e15f$export$ca3c739adc83f458)
};


const $cf838c15c8b009ba$export$f936470337fdc8d0 = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0);
const $cf838c15c8b009ba$export$8ffd1228772c8ae6 = (0, $27aca64046765c2d$export$8ffd1228772c8ae6);
const $cf838c15c8b009ba$export$4d4e92f9aafe7618 = (0, $3044c528e2aca24b$export$4d4e92f9aafe7618);
const $cf838c15c8b009ba$export$ab722c29c933d3f9 = (0, $acbf4d89c8c34bfd$export$ab722c29c933d3f9);


export {$cf838c15c8b009ba$export$f936470337fdc8d0 as krakenHelpers, $cf838c15c8b009ba$export$8ffd1228772c8ae6 as krakenTools, $cf838c15c8b009ba$export$4d4e92f9aafe7618 as krakenClasses, $cf838c15c8b009ba$export$ab722c29c933d3f9 as krakenElements};
//# sourceMappingURL=main.js.map
