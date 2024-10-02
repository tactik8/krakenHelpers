const $c945f2bbf7fa7d9d$export$f8c0f914c8a0ee10 = {
    isNull: $c945f2bbf7fa7d9d$var$isNull,
    isNUll: $c945f2bbf7fa7d9d$var$isNull,
    isNotNull: $c945f2bbf7fa7d9d$var$isNotNull,
    isNotNUll: $c945f2bbf7fa7d9d$var$isNotNull,
    isEqual: $c945f2bbf7fa7d9d$var$isEqual,
    isNotEqual: $c945f2bbf7fa7d9d$var$isNotEqual,
    isEven: $c945f2bbf7fa7d9d$var$isEven,
    isOdd: $c945f2bbf7fa7d9d$var$isOdd,
    isOdd: $c945f2bbf7fa7d9d$var$isOdd
};
function $c945f2bbf7fa7d9d$var$isNotNull(value1) {
    return !$c945f2bbf7fa7d9d$var$isNull(value1);
}
function $c945f2bbf7fa7d9d$var$isNull(value1) {
    if (value1 === 0) return false;
    if (value1 === undefined) return true;
    if (value1 === null) return true;
    if (value1 === "") return true;
    try {
        if (value1 instanceof HTMLElement) return false;
    } catch  {}
    // Check if date
    try {
        let v = value1.getTime();
        if (!isNaN(v)) return false;
    } catch  {}
    // If array, removes null values then check if length == 0
    if (Array.isArray(value1)) {
        value1 = value1.filter((x)=>$c945f2bbf7fa7d9d$var$isNull(x) == false);
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
function $c945f2bbf7fa7d9d$var$isNotEqual(value1, value2) {
    return !$c945f2bbf7fa7d9d$var$isEqual(value1, value2);
}
function $c945f2bbf7fa7d9d$var$isEqual(value1, value2) {
    // if nulls
    if ($c945f2bbf7fa7d9d$var$isNull(value1) && $c945f2bbf7fa7d9d$var$isNull(value2)) return true;
    if ($c945f2bbf7fa7d9d$var$isNull(value1) && $c945f2bbf7fa7d9d$var$isNotNull(value2)) return false;
    if ($c945f2bbf7fa7d9d$var$isNotNull(value1) && $c945f2bbf7fa7d9d$var$isNull(value2)) return false;
    // Equality for others
    try {
        if (value == value2) return true;
    } catch  {}
    // Equality for Thing
    let v1_record_type = value1?.record_type || value1?.["@type"];
    let v2_record_type = value2?.record_type || value2?.["@type"];
    let v1_record_id = value1?.record_id || value1?.["@id"];
    let v2_record_id = value2?.record_id || value2?.["@id"];
    if ($c945f2bbf7fa7d9d$var$isNull(v1_record_type) && $c945f2bbf7fa7d9d$var$isNotNull(v2_record_type)) return false;
    if ($c945f2bbf7fa7d9d$var$isNotNull(v1_record_type) && $c945f2bbf7fa7d9d$var$isNull(v2_record_type)) return false;
    if ($c945f2bbf7fa7d9d$var$isNull(v1_record_id) && $c945f2bbf7fa7d9d$var$isNotNull(v2_record_id)) return false;
    if ($c945f2bbf7fa7d9d$var$isNotNull(v1_record_id) && $c945f2bbf7fa7d9d$var$isNull(v2_record_id)) return false;
    if ($c945f2bbf7fa7d9d$var$isNotNull(v1_record_type) && $c945f2bbf7fa7d9d$var$isNotNull(v2_record_type)) {
        if ($c945f2bbf7fa7d9d$var$isNotNull(v1_record_id) && $c945f2bbf7fa7d9d$var$isNotNull(v2_record_id)) {
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
function $c945f2bbf7fa7d9d$var$isEven(value1) {
    try {
        if (value1 % 2 == 1) return false;
        else return true;
    } catch  {
        return false;
    }
}
function $c945f2bbf7fa7d9d$var$isOdd(value1) {
    try {
        if (value1 % 2 == 0) return false;
        else return true;
    } catch  {
        return false;
    }
}



const $135f0c356f6f593e$export$96be39e8128f5891 = {
    isNumber: $135f0c356f6f593e$var$isNumber,
    toNumber: $135f0c356f6f593e$var$toNumber,
    toText: $135f0c356f6f593e$var$toText
};
function $135f0c356f6f593e$var$isNumber(value) {
    return typeof value === "number";
}
function $135f0c356f6f593e$var$toNumber(value) {
    if (typeof value === "number") return value;
    try {
        value = Number(value);
        return value;
    } catch  {}
    return undefined;
}
function $135f0c356f6f593e$var$toText(value, rounding) {
    value = $135f0c356f6f593e$var$toNumber(value);
    if ((!value || value == null) && value != 0) return undefined;
    if (rounding | rounding != null) value = Math.round(value);
    return String(value);
}




const $2865c5ce12fd7c9f$var$h = {
    null: (0, $c945f2bbf7fa7d9d$export$f8c0f914c8a0ee10),
    isNull: (0, $c945f2bbf7fa7d9d$export$f8c0f914c8a0ee10).isNull,
    isNotNull: (0, $c945f2bbf7fa7d9d$export$f8c0f914c8a0ee10).isNotNull
};
const $2865c5ce12fd7c9f$export$fe5b3308000496d5 = {
    get: $2865c5ce12fd7c9f$var$getPropertyValueFromDot,
    set: $2865c5ce12fd7c9f$var$setPropertyValueFromDot,
    add: $2865c5ce12fd7c9f$var$addPropertyValueFromDot,
    toDot: $2865c5ce12fd7c9f$var$convertToDotNotation,
    fromDot: $2865c5ce12fd7c9f$var$convertFromDotNotation,
    getValue: $2865c5ce12fd7c9f$var$getPropertyValueFromDot,
    setValue: $2865c5ce12fd7c9f$var$setPropertyValueFromDot,
    addValue: $2865c5ce12fd7c9f$var$addPropertyValueFromDot
};
function $2865c5ce12fd7c9f$var$setPropertyValueFromDot(record, key, value) {
    function _recursiveSet(record, key, value) {
        // Set record
        if ($2865c5ce12fd7c9f$var$h.isNull(record)) record = {};
        // Get property and position from first item of key path
        let property1 = $2865c5ce12fd7c9f$var$getCurrentKey(key);
        let position1 = $2865c5ce12fd7c9f$var$getCurrentPosition(key);
        // Get value from property
        let value1 = record?.[property1];
        // If value is array but position not given, assume first item is modified (position 0)
        if ((0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).isArray(value1)) position1 = 0;
        // Get value from position
        if ($2865c5ce12fd7c9f$var$h.isNotNull(position1)) value1 = value1?.[position1];
        // Check if done, else recurse
        let newKey = $2865c5ce12fd7c9f$var$getNextDotKey(key);
        if ($2865c5ce12fd7c9f$var$h.isNotNull(newKey)) {
            if ($2865c5ce12fd7c9f$var$h.isNull(position1)) record[property1] = _recursiveSet(value1, newKey, value);
            else {
                record[property1] = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).toArray(record[property1]);
                record[property1][position1] = _recursiveSet(value1, newKey, value);
            }
        } else if ($2865c5ce12fd7c9f$var$h.isNull(position1)) record[property1] = value;
        else {
            record[property1] = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).toArray(record[property1]);
            record[property1][position1] = value;
        }
        return record;
    }
    return _recursiveSet(record, key, value);
}
function $2865c5ce12fd7c9f$var$addPropertyValueFromDot(record, key, value) {
    /**
     * Add a value to the current set of values 
     */ let currentValue = $2865c5ce12fd7c9f$var$getPropertyValueFromDot(key, record);
    if ($2865c5ce12fd7c9f$var$h.isNull(currentValue)) return $2865c5ce12fd7c9f$var$setPropertyValueFromDot(record, key, value);
    else {
        let newValue = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).mergeUnique(currentValue, value);
        return $2865c5ce12fd7c9f$var$setPropertyValueFromDot(record, key, newValue);
    }
    return true;
}
function $2865c5ce12fd7c9f$var$getPropertyValueFromDot(key, record) {
    // Retrieves value by following dot notation
    // Swap values if mistake done (inverted parameters)
    if (typeof record == "string" && typeof key != "string") {
        let tkey = key;
        let trecord = record;
        key = trecord;
        record = tkey;
    }
    function _recursive(key, record) {
        // if record is an array of one, convert to object
        if ((0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).isArray(record) && record.length == 1) record[0];
        // if record is null, return null
        if ($2865c5ce12fd7c9f$var$h.isNull(record)) return null;
        // Get property
        let property1 = $2865c5ce12fd7c9f$var$getCurrentKey(key);
        let position1 = $2865c5ce12fd7c9f$var$getCurrentPosition(key);
        let value1;
        // Get value from property
        value1 = record?.[property1];
        // Convert value to array if position is defined
        if ($2865c5ce12fd7c9f$var$h.isNotNull(position1)) {
            value1 = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).toArray(value1);
            value1 = value1?.[position1] || null;
        }
        // Check if done, else recurse
        let newKey = $2865c5ce12fd7c9f$var$getNextDotKey(key);
        if ($2865c5ce12fd7c9f$var$h.isNotNull(newKey)) {
            // If value is array but position not defined, return first item
            if ($2865c5ce12fd7c9f$var$h.isNull(position1) && (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).isArray(value1)) value1 = value1?.[0] || null;
            return _recursive(newKey, value1);
        } else return value1;
    }
    return _recursive(key, record);
}
function $2865c5ce12fd7c9f$var$convertToDotNotation(obj, parentKey = "", result = {}) {
    for(let key in obj)if (obj.hasOwnProperty(key)) {
        const newKey = parentKey ? `${parentKey}.${key}` : key; // Combine parent key with current key
        if (typeof obj[key] === "object" && !Array.isArray(obj[key])) // If it's a nested object (not an array), recurse
        $2865c5ce12fd7c9f$var$convertToDotNotation(obj[key], newKey, result);
        else if (Array.isArray(obj[key])) // If it's an array, iterate over array elements and include index
        obj[key].forEach((item, index)=>{
            const arrayKey = `${newKey}[${index}]`;
            if (typeof item === "object") // Recurse for array elements that are objects
            $2865c5ce12fd7c9f$var$convertToDotNotation(item, arrayKey, result);
            else // Directly add non-object array elements
            result[arrayKey] = item;
        });
        else // If it's a primitive value, add it to the result
        result[newKey] = obj[key];
    }
    return result;
}
function $2865c5ce12fd7c9f$var$convertFromDotNotation(dotNotationObj) {
    const result = {};
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
function $2865c5ce12fd7c9f$var$getCurrentKey(dotKey) {
    if ($2865c5ce12fd7c9f$var$h.isNull(dotKey)) return null;
    // Get property
    let keyItems = dotKey.split(".");
    let keyItem1 = keyItems?.[0];
    let property1 = keyItem1.split("[")[0];
    let position1 = keyItem1.split("[")[1] || null;
    return property1;
}
function $2865c5ce12fd7c9f$var$getCurrentPosition(dotKey) {
    try {
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
function $2865c5ce12fd7c9f$var$getNextDotKey(dotKey) {
    let keyItems = dotKey.split(".");
    if (keyItems.length > 1) {
        let newKeys = keyItems.slice(1);
        let newKey = newKeys.join(".");
        return newKey;
    } else return null;
}


let $9fc8b212f324f9e3$var$h = {
    number: (0, $135f0c356f6f593e$export$96be39e8128f5891),
    null: null,
    isNull: (0, $c945f2bbf7fa7d9d$export$f8c0f914c8a0ee10).isNull,
    isNotNull: (0, $c945f2bbf7fa7d9d$export$f8c0f914c8a0ee10).isNotNull
};
const $9fc8b212f324f9e3$export$4736c2d1b0001d00 = {
    toText: $9fc8b212f324f9e3$var$toText,
    isArray: $9fc8b212f324f9e3$var$validateArray,
    validateArray: $9fc8b212f324f9e3$var$validateArray,
    toArray: $9fc8b212f324f9e3$var$ensureArray,
    ensureArray: $9fc8b212f324f9e3$var$ensureArray,
    getKeys: $9fc8b212f324f9e3$var$getKeys,
    keys: $9fc8b212f324f9e3$var$getKeys,
    getValuesForKey: $9fc8b212f324f9e3$var$getValuesForKey,
    getNumbersForKey: $9fc8b212f324f9e3$var$getNumbersForKey,
    merge: $9fc8b212f324f9e3$var$merge,
    mergeUnique: $9fc8b212f324f9e3$var$mergeUnique
};
// -----------------------------------------------------
//  Validation 
// -----------------------------------------------------
function $9fc8b212f324f9e3$var$validateArray(value) {
    if (Array.isArray(value)) return true;
    return false;
}
// -----------------------------------------------------
//  Transformation 
// -----------------------------------------------------
function $9fc8b212f324f9e3$var$ensureArray(value) {
    if ($9fc8b212f324f9e3$var$h.isNull(value)) return [];
    if ($9fc8b212f324f9e3$var$validateArray(value)) return value;
    else return [
        value
    ];
}
function $9fc8b212f324f9e3$var$toText(value) {
    if ($9fc8b212f324f9e3$var$validateArray(value) == false) return undefined;
    let result = `[${value.length}]`;
    return result;
}
// -----------------------------------------------------
//  Query 
// -----------------------------------------------------
function $9fc8b212f324f9e3$var$getKeys(value) {
    if ($9fc8b212f324f9e3$var$validateArray(value) == false) return undefined;
    let keys = [];
    for (let v of value){
        for (let k of Object.keys(v))if (!keys.includes(k)) keys.push(k);
    }
    keys.sort();
    return keys;
}
function $9fc8b212f324f9e3$var$getValuesForKey(value, key) {
    value = $9fc8b212f324f9e3$var$ensureArray(value);
    if ($9fc8b212f324f9e3$var$validateArray(value) == false) return undefined;
    let results = [];
    for (let v of value){
        let v1 = (0, $2865c5ce12fd7c9f$export$fe5b3308000496d5).getValue(key, v) //v?.[key] 
        ;
        if (v1) results.push(v1);
    }
    return results;
}
function $9fc8b212f324f9e3$var$getNumbersForKey(value, key) {
    // Returns array of numbers only for a given k
    value = $9fc8b212f324f9e3$var$ensureArray(value);
    let items = $9fc8b212f324f9e3$var$getValuesForKey(value, key);
    let results = [];
    for (let item of items){
        let newItem = $9fc8b212f324f9e3$var$h.number.toNumber(item);
        if ($9fc8b212f324f9e3$var$h.number.isNumber(newItem) == true) results.push(newItem);
        if (item?.["@type"] && item?.["@type"] == "QuantitativeValue") {
            let quantItem = $9fc8b212f324f9e3$var$h.number.toNumber(item?.value);
            if ($9fc8b212f324f9e3$var$h.number.isNumber(quantItem) == true) results.push(quantItem);
        }
    }
    return results;
}
function $9fc8b212f324f9e3$var$getUnitCodesForKey(value, key) {
    // Returns array of numbers only for a given k
    let items = $9fc8b212f324f9e3$var$getValuesForKey(value, key);
    let results = [];
    for (let item of items)if (item?.["@type"] && item?.["@type"] == "QuantitativeValue") results.push(item.unitCode);
    return results;
}
function $9fc8b212f324f9e3$var$merge(value1, value2) {
    let v1 = $9fc8b212f324f9e3$var$ensureArray(value1);
    let v2 = $9fc8b212f324f9e3$var$ensureArray(value2);
    if ($9fc8b212f324f9e3$var$h.isNull(v1) && $9fc8b212f324f9e3$var$h.isNull(v2)) return [];
    if ($9fc8b212f324f9e3$var$h.isNull(v1) && $9fc8b212f324f9e3$var$h.isNotNull(v2)) return v2;
    if ($9fc8b212f324f9e3$var$h.isNotNull(v1) && $9fc8b212f324f9e3$var$h.isNull(v2)) return v1;
    let newValue = v1.concat(v2);
    return newValue;
}
function $9fc8b212f324f9e3$var$mergeUnique(value1, value2) {
    let values = $9fc8b212f324f9e3$var$merge(value1, value2);
    let uniqueValues = [];
    for (let v of values)if (!uniqueValues.includes(v)) uniqueValues.push(v);
    return uniqueValues;
}





const $18d56086b081e2cc$var$h = {
    null: (0, $c945f2bbf7fa7d9d$export$f8c0f914c8a0ee10),
    array: (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00),
    isNull: (0, $c945f2bbf7fa7d9d$export$f8c0f914c8a0ee10).isNull,
    isNotNull: (0, $c945f2bbf7fa7d9d$export$f8c0f914c8a0ee10).isNotNull,
    toArray: (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).toArray
};
const $18d56086b081e2cc$export$15c85b69ec02b47c = {
    // Base
    isDate: $18d56086b081e2cc$var$validateDate,
    isTextDate: $18d56086b081e2cc$var$validateTextDate,
    getDuration: $18d56086b081e2cc$var$getDuration,
    getDurationRecord: $18d56086b081e2cc$var$getDurationRecord,
    toDate: $18d56086b081e2cc$var$toDate,
    toText: $18d56086b081e2cc$var$toText,
    human: {
        duration: $18d56086b081e2cc$var$getHumanReadableDuration,
        date: $18d56086b081e2cc$var$getHumanReadableDate
    },
    iso: {
        getIsoDurationFromDates: $18d56086b081e2cc$var$toISODurationFromDates,
        getTextFromIsoDuration: $18d56086b081e2cc$var$convertISODurationToEnglish,
        getIsoDurationFromText: $18d56086b081e2cc$var$convertEnglishToISODuration
    },
    now: $18d56086b081e2cc$var$getCurrentDateObject,
    // Shortcuts
    validateDate: $18d56086b081e2cc$var$validateDate,
    getDate: $18d56086b081e2cc$var$toDate,
    duration: $18d56086b081e2cc$var$getDuration,
    durationRecord: $18d56086b081e2cc$var$getDurationRecord
};
/**
 * Returns true if value if a Date object
 * @param {String | Date | object} value
 * @return {bool} isDate True if date object
 */ function $18d56086b081e2cc$var$validateDate(value) {
    if (value instanceof Date) return true;
    return false;
}
function $18d56086b081e2cc$var$validateTextDate(value) {
    if (value instanceof Date) return true;
    value = $18d56086b081e2cc$var$toDate(value);
    if (value instanceof Date) return true;
    return false;
}
function $18d56086b081e2cc$var$toText(value) {
    if ($18d56086b081e2cc$var$validateDate(value) == false) {
        value = $18d56086b081e2cc$var$toDate(value);
        if ($18d56086b081e2cc$var$validateDate(value) == false) return "";
    }
    let formattedDate = value.toLocaleString();
    return formattedDate;
}
function $18d56086b081e2cc$var$toDate(value) {
    if ($18d56086b081e2cc$var$validateDate(value) == true) return value;
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
function $18d56086b081e2cc$var$getDuration(date1, date2) {
    date1 = $18d56086b081e2cc$var$toDate(date1);
    date2 = $18d56086b081e2cc$var$toDate(date2);
    if ($18d56086b081e2cc$var$validateDate(date1) == false) return undefined;
    if ($18d56086b081e2cc$var$validateDate(date2) == false) return undefined;
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
function $18d56086b081e2cc$var$getDurationRecord(date1, date2) {
    let duration = $18d56086b081e2cc$var$getDuration(date1, date2);
    let result = {
        "@type": "QuantitativeValue",
        "@id": String(crypto.randomUUID()),
        "unitCode": "SEC",
        "unitText": "s",
        "value": duration
    };
    return result;
}
function $18d56086b081e2cc$var$getCurrentDateObject() {
    let now = new Date();
    return now;
}
// -----------------------------------------------------
//  Human readable  
// -----------------------------------------------------
function $18d56086b081e2cc$var$getHumanReadableDate(date) {
    // If not date 2, assume date 2 is now
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
function $18d56086b081e2cc$var$getHumanReadableDuration(startDate, endDate) {
    startDate = $18d56086b081e2cc$var$toDate(startDate);
    endDate = $18d56086b081e2cc$var$toDate(endDate);
    if ($18d56086b081e2cc$var$h.isNull(startDate)) return "";
    if ($18d56086b081e2cc$var$h.isNull(endDate)) return "";
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
function $18d56086b081e2cc$var$toISODurationFromDates(startDate, endDate) {
    const start = new Date(startDate);
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
function $18d56086b081e2cc$var$convertISODurationToEnglish(duration) {
    const isoDurationRegex = /^P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/;
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
function $18d56086b081e2cc$var$convertEnglishToISODuration(englishDuration) {
    const timeUnits = {
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







const $44c18bf8d2147863$var$h = {
    null: (0, $c945f2bbf7fa7d9d$export$f8c0f914c8a0ee10),
    array: (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00),
    isNull: (0, $c945f2bbf7fa7d9d$export$f8c0f914c8a0ee10).isNull,
    isNotNull: (0, $c945f2bbf7fa7d9d$export$f8c0f914c8a0ee10).isNotNull,
    toArray: (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00)
};
/**
 *
 * classes:
 *     - krThing: thing
 *     - krProperty: property
 *     - krValue: value
 *     - 
 */ // Classes constants
let $44c18bf8d2147863$var$thingClass = "krThing";
let $44c18bf8d2147863$var$propertyClass = "krProperty";
let $44c18bf8d2147863$var$valueClass = "krValue";
const $44c18bf8d2147863$export$e0169ab077dc0819 = {
    /**
     * current: returns the element that composes the current record
     * parent: returns element parent of 
     */ record_type: $44c18bf8d2147863$var$getRecordType,
    record_id: $44c18bf8d2147863$var$getRecordId,
    recordType: $44c18bf8d2147863$var$getRecordType,
    recordId: $44c18bf8d2147863$var$getRecordId,
    type: $44c18bf8d2147863$var$getRecordType,
    id: $44c18bf8d2147863$var$getRecordId,
    setId: $44c18bf8d2147863$var$setIdToElement,
    meetsConditions: $44c18bf8d2147863$var$meetsConditions,
    insert: {
        above: $44c18bf8d2147863$var$insertElementAbove,
        below: $44c18bf8d2147863$var$insertElementBelow
    },
    content: {
        set: $44c18bf8d2147863$var$setContentOfElement
    },
    active: {
        set: $44c18bf8d2147863$var$setActive,
        unset: $44c18bf8d2147863$var$unsetActive,
        toggle: $44c18bf8d2147863$var$toggleActive
    },
    selected: {
        get: $44c18bf8d2147863$var$getSelectedElement,
        set: $44c18bf8d2147863$var$setSelectedElement,
        unset: $44c18bf8d2147863$var$unsetSelectedElement,
        toggle: $44c18bf8d2147863$var$toggleSelectedElement
    },
    traversal: {
        commonParent: $44c18bf8d2147863$var$findCommonParentOfElements
    }
};
// -----------------------------------------------------
//  Generic 
// -----------------------------------------------------
function $44c18bf8d2147863$var$setIdToElement(element) {
    if ($44c18bf8d2147863$var$h.isNotNull(element.getAttribute("id"))) return;
    element.setAttribute("id", String(crypto.randomUUID()));
    return;
}
function $44c18bf8d2147863$var$getRecordType(element) {
    let record_type = element.getAttribute("data-record-type");
    return record_type;
}
function $44c18bf8d2147863$var$getRecordId(element) {
    let record_id = element.getAttribute("data-record-id");
    return record_id;
}
// -----------------------------------------------------
//  Operations (insert, delete) 
// -----------------------------------------------------
function $44c18bf8d2147863$var$insertElementBelow(newElement, parent) {
    while(parent.firstElementChild)newElement.appendChild(parent.firstElementChild);
    parent.appendChild(newElement);
    return;
}
function $44c18bf8d2147863$var$insertElementAbove(newElement, children) {
    let parent = children.parentElement;
    newElement.appendChild(children);
    parent.appendChild(newElement);
    return;
}
// -----------------------------------------------------
//  Element content 
// -----------------------------------------------------
function $44c18bf8d2147863$var$setContentOfElement(element, content) {
    if (typeof content == "string") element.innerHTML = content;
    if (Array.isArray(content)) {
        for (let c of content)$44c18bf8d2147863$var$setContentOfElement(element, c);
        return;
    }
    if (content instanceof HTMLElement) element.appendChild(content);
    return;
}
// -----------------------------------------------------
//  Comparisons 
// -----------------------------------------------------
function $44c18bf8d2147863$var$meetsConditions(element, conditions) {
    /**
     * Returns true if an element attributes meets conditions.
     * Conditions with 
     */ if ($44c18bf8d2147863$var$h.isNull(conditions)) return true;
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
function $44c18bf8d2147863$var$findCommonParentOfElements(elements) {
    if (!elements || elements.length === 0) return null;
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
function $44c18bf8d2147863$var$getActive(element, conditions) {
    /**
     * Returns elements with 'krActive' class under element.
     * Uses document if element is missing
     */ element = element || document;
    let activeElements = element.querySelectorAll(".krActive");
    activeElements = activeElements.filter((x)=>$44c18bf8d2147863$var$meetsConditions(x, conditions));
    return activeElements;
}
function $44c18bf8d2147863$var$setActive(element, conditions) {
    element.classList.add("krActive");
}
function $44c18bf8d2147863$var$unsetActive(element, conditions) {
    element.classList.remove("krActive");
}
function $44c18bf8d2147863$var$toggleActive(element, conditions) {
    element.classList.toggle("krActive");
}
// -----------------------------------------------------
//  Selected 
// -----------------------------------------------------
function $44c18bf8d2147863$var$getSelectedElement(element, conditions) {
    /**
     * Returns elements with 'krSelected' class under element.
     * Uses document if element is missing
     */ element = element || document;
    let selectedElements = element.querySelectorAll(".krSelected");
    selectedElements = selectedElements.filter((x)=>$44c18bf8d2147863$var$meetsConditions(x, conditions));
    return selectedElements;
}
function $44c18bf8d2147863$var$setSelectedElement(element, conditions) {
    element.classList.add("krSelected");
}
function $44c18bf8d2147863$var$unsetSelectedElement(element, conditions) {
    element.classList.remove("krSelected");
}
function $44c18bf8d2147863$var$toggleSelectedElement(element, conditions) {
    element.classList.toggle("krSelected");
}


const $92413447c3a75377$export$bac8020bbb4f7950 = {
    isEmail: $92413447c3a75377$var$isValidEmail
};
function $92413447c3a75377$var$isValidEmail(email) {
    if (typeof email !== "string") throw new TypeError("The provided value must be a string.");
    // Regular expression to validate email addresses
    const emailRegex = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    return emailRegex.test(email);
}


const $03899943a5d4eab2$export$94a70d284fcdf065 = {
    get: $03899943a5d4eab2$var$getPropertyValueFromDot,
    getPropertyValueFromDot: $03899943a5d4eab2$var$getPropertyValueFromDot,
    isJson: $03899943a5d4eab2$var$isJson,
    set: $03899943a5d4eab2$var$setPropertyValueFromDot,
    setPropertyValueFromDot: $03899943a5d4eab2$var$setPropertyValueFromDot,
    flatten: $03899943a5d4eab2$var$objectToDotNotation,
    objectToDotNotation: $03899943a5d4eab2$var$objectToDotNotation,
    simplify: $03899943a5d4eab2$var$simplify,
    toPropertiesList: $03899943a5d4eab2$var$jsonToPropertiesSingle,
    toPropertiesSingle: $03899943a5d4eab2$var$jsonToPropertiesList
};
function $03899943a5d4eab2$var$isJson(value) {
    try {
        let l = JSON.parse(value);
        return true;
    } catch  {
        return false;
    }
}
function $03899943a5d4eab2$var$getPropertyValueFromDot(key, value) {
    // Retrieves value by following dot notation
    var items = key.split(".");
    for(let t = 0; t < items.length; t++)value = value[items[t]];
    return value;
}
function $03899943a5d4eab2$var$setPropertyValueFromDot(key, record, value) {
    // Retrieves value by following dot notation
    var items = key.split(".");
    let item = items[0];
    if (items.length > 1) {
        if (!record[item]) record[item] = {};
        $03899943a5d4eab2$var$setPropertyValueFromDot(items.slice(1).join("."), record[item], value);
    } else record[item] = value;
    return record;
}
function $03899943a5d4eab2$var$objectToDotNotation(obj, parentPrefix = "") {
    let result = {};
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
function $03899943a5d4eab2$var$simplify(data) {
    // Remove arrays of 1
    if (Array.isArray(data)) {
        // If the array has exactly one element, return that element
        if (data.length === 1) return $03899943a5d4eab2$var$simplify(data[0]);
        else // Otherwise, process each element in the array
        return data.map($03899943a5d4eab2$var$simplify);
    } else if (data !== null && typeof data === "object") {
        // If the data is an object, process each key
        const newData = {};
        for(const key in data)if (data.hasOwnProperty(key)) newData[key] = $03899943a5d4eab2$var$simplify(data[key]);
        return newData;
    } else // If the data is neither an array nor an object, return it as is
    return data;
}
function $03899943a5d4eab2$var$jsonToPropertiesSingle(record) {
    // Converts lists to single item(the first item)
    if (Array.isArray(record)) {
        if (record.length == 0) return null;
        record = record[0];
    }
    if (Object.keys(record)) for (let k of Object.jeys(record))record[k] = jsonWithoutList(record[k]);
    return record;
}
function $03899943a5d4eab2$var$jsonToPropertiesList(record) {
    // Converts single items to lists
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



const $1fd01b1ecffa6019$export$42f247ccf9267abd = {
    isObject: $1fd01b1ecffa6019$var$isObject,
    getKeys: $1fd01b1ecffa6019$var$getKeys,
    keys: $1fd01b1ecffa6019$var$getKeys,
    toText: $1fd01b1ecffa6019$var$toText
};
function $1fd01b1ecffa6019$var$isObject(value) {
    return typeof value === "object" && !Array.isArray(value) && value !== null;
}
function $1fd01b1ecffa6019$var$getKeys(value) {
    if ($1fd01b1ecffa6019$var$isObject(value) == false) return undefined;
    let keys = Object.keys(value);
    keys.sort();
    return keys;
}
function $1fd01b1ecffa6019$var$toText(value) {
    if ($1fd01b1ecffa6019$var$isObject(value) == false) return undefined;
    if (value["@type"]) return `${value["@type"]}/${value["@id"]}`;
    else {
        let keys = Object.keys(value);
        if (keys.length == 0) return "{}";
        return `{"${keys[0]}": "${value[keys[0]]}", ... }`;
    }
}




const $6955f32358295148$export$efeacd8e2fafd6a1 = {
    toCamelCase: $6955f32358295148$var$toCamelCase,
    fromCamelCase: $6955f32358295148$var$fromCamelCase,
    capitalize: $6955f32358295148$var$capitalizeWords,
    clean: $6955f32358295148$var$cleanString
};
function $6955f32358295148$var$cleanString(str) {
    /**
     * Clean up string by removing spaces and non standard charcters
     */ let string = str;
    // Remove html codes
    string = string.replace(/<\/?[^>]+(>|$)/g, "");
    // Remove next lines
    string = string.replace("\n", "");
    // remove spaces
    string = string.trim();
    return string;
}
function $6955f32358295148$var$toCamelCase(str) {
    return str// Split the string by spaces, underscores, or hyphens
    .split(/[-_\s]+/)// Convert the first word to lowercase and capitalize the first letter of the following words
    .map((word, index)=>index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())// Join them back into a single string
    .join("");
}
function $6955f32358295148$var$fromCamelCase(str) {
    return str// Insert a space before every uppercase letter and convert the whole string to lowercase
    .replace(/([A-Z])/g, " $1").toLowerCase().trim();
}
function $6955f32358295148$var$capitalizeWords(input) {
    // Error checking: input should be a string
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


const $2974f6a85c45961a$export$b881b526c33ee854 = {
    getDomain: $2974f6a85c45961a$var$getDomain,
    domain: $2974f6a85c45961a$var$getDomain,
    getUrl: $2974f6a85c45961a$var$getUrl,
    toUrl: $2974f6a85c45961a$var$getUrl
};
function $2974f6a85c45961a$var$isUrl(value) {
    if (!value || value == null) return false;
    if (value instanceof URL) return true;
}
/**
 * Returns url string with path and params
 */ function $2974f6a85c45961a$var$getUrl(baseUrl, path, params) {
    // Returns url string
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
function $2974f6a85c45961a$var$getDomain(value) {
    try {
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


const $7c87d17e86e85a38$export$2cc083be586441bb = {
    array: (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00),
    date: (0, $18d56086b081e2cc$export$15c85b69ec02b47c),
    dot: (0, $2865c5ce12fd7c9f$export$fe5b3308000496d5),
    element: (0, $44c18bf8d2147863$export$e0169ab077dc0819),
    email: (0, $92413447c3a75377$export$bac8020bbb4f7950),
    json: (0, $03899943a5d4eab2$export$94a70d284fcdf065),
    null: (0, $c945f2bbf7fa7d9d$export$f8c0f914c8a0ee10),
    object: (0, $1fd01b1ecffa6019$export$42f247ccf9267abd),
    string: (0, $6955f32358295148$export$efeacd8e2fafd6a1),
    url: (0, $2974f6a85c45961a$export$b881b526c33ee854),
    isNull: (0, $c945f2bbf7fa7d9d$export$f8c0f914c8a0ee10).isNull,
    isNotNull: (0, $c945f2bbf7fa7d9d$export$f8c0f914c8a0ee10).isNotNull,
    isEqual: (0, $c945f2bbf7fa7d9d$export$f8c0f914c8a0ee10).isEqual,
    isNotEqual: (0, $c945f2bbf7fa7d9d$export$f8c0f914c8a0ee10).isNotEqual,
    toArray: (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).toArray
};




const $f5e690043496127e$export$36b1aac33f5f1b68 = {
    record: $f5e690043496127e$var$getHeadingRecord,
    heading1: $f5e690043496127e$var$_getHeading1,
    heading2: $f5e690043496127e$var$_getHeading2,
    headingDescription: $f5e690043496127e$var$_getHeadingDescription,
    headingDate: $f5e690043496127e$var$_getHeadingDate,
    headingStatus: $f5e690043496127e$var$_getHeadingStatus,
    headingImage: $f5e690043496127e$var$_getHeadingImage
};
function $f5e690043496127e$var$getHeadingRecord(record) {
    record._heading1 = $f5e690043496127e$var$_getHeading1(record);
    record._heading2 = $f5e690043496127e$var$_getHeading2(record);
    record._headingDescription = $f5e690043496127e$var$_getHeadingDescription(record);
    record._headingDate = $f5e690043496127e$var$_getHeadingDate(record);
    record._headingStatus = $f5e690043496127e$var$_getHeadingStatus(record);
    record._headingImage = $f5e690043496127e$var$_getHeadingImage(record);
    return record;
}
function $f5e690043496127e$var$_getHeading1(record) {
    let heading = "heading1";
    return $f5e690043496127e$var$_getHeadingX(record, heading);
}
function $f5e690043496127e$var$_getHeading2(record) {
    let heading = "heading2";
    return $f5e690043496127e$var$_getHeadingX(record, heading);
}
function $f5e690043496127e$var$_getHeadingDescription(record) {
    let heading = "headingDescription";
    return $f5e690043496127e$var$_getHeadingX(record, heading);
}
function $f5e690043496127e$var$_getHeadingDate(record) {
    let heading = "headingDate";
    return $f5e690043496127e$var$_getHeadingX(record, heading);
}
function $f5e690043496127e$var$_getHeadingStatus(record) {
    let heading = "headingStatus";
    return $f5e690043496127e$var$_getHeadingX(record, heading);
}
function $f5e690043496127e$var$_getHeadingImage(record) {
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(record?.contentUrl)) return record?.contentUrl;
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(record?.image?.contentUrl)) return record?.image?.contentUrl;
    return null;
}
function $f5e690043496127e$var$_getHeadingX(record, heading) {
    let record_type = record["@type"];
    let config = $f5e690043496127e$var$getConfig();
    let headingPossibilities = config?.[record_type]?.[heading];
    console.log("p", headingPossibilities);
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(headingPossibilities)) headingPossibilities = config?.["Thing"]?.[heading];
    let headingValue = null;
    for (let hp of (0, $7c87d17e86e85a38$export$2cc083be586441bb).toArray(headingPossibilities)){
        headingValue = $f5e690043496127e$var$_getValue(record, heading, hp);
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(headingValue)) break;
    }
    return headingValue;
}
function $f5e690043496127e$var$_getValue(record, heading, keys) {
    keys = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).ensureArray(keys);
    console.log("get value", keys);
    let values = [];
    for (let k of keys){
        let value = record[k];
        if (Array.isArray(value)) value = value[0];
        // Handle object as values (when listItem references item for example )
        if (value?.["@type"]) value = $f5e690043496127e$var$_getHeadingX(value, "heading1");
        if (value && value != null) values.push(value);
    }
    if (values.length == 0) return null;
    // Assemble values
    let headingValue = values.join(" ");
    return headingValue;
}
function $f5e690043496127e$var$getConfig() {
    let record = {
        Thing: {
            heading1: [
                "name",
                "url",
                "@id"
            ],
            heading2: [
                "name",
                "url",
                "@id"
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
                "@id"
            ],
            heading2: [
                "title",
                "email",
                "url",
                "@id"
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
                "@id"
            ],
            heading2: [
                "item",
                "url",
                "@id"
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
        PostalAddress: {
            heading1: [
                "streetAddress",
                "name",
                "@id"
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
        }
    };
    return record;
}


const $9a2a3d97de4234f5$export$c24b4489b93ad8cb = {
    isValid: $9a2a3d97de4234f5$var$validateThing,
    isThing: $9a2a3d97de4234f5$var$validateThing,
    isEqual: $9a2a3d97de4234f5$var$isEqual,
    validateThing: $9a2a3d97de4234f5$var$validateThing,
    getRefRecord: $9a2a3d97de4234f5$var$getRefRecord,
    type: $9a2a3d97de4234f5$var$getRecordType,
    id: $9a2a3d97de4234f5$var$getRecordId,
    ref: $9a2a3d97de4234f5$var$getRefRecord,
    toText: $9a2a3d97de4234f5$var$toText,
    extractThings: $9a2a3d97de4234f5$var$extractThings,
    record_type: $9a2a3d97de4234f5$var$getRecordType,
    record_id: $9a2a3d97de4234f5$var$getRecordId,
    recordType: $9a2a3d97de4234f5$var$getRecordType,
    recordId: $9a2a3d97de4234f5$var$getRecordId
};
function $9a2a3d97de4234f5$var$validateThing(value) {
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(value)) return false;
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull($9a2a3d97de4234f5$var$getRecordType(value))) return false;
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull($9a2a3d97de4234f5$var$getRecordId(value))) return false;
    return true;
}
function $9a2a3d97de4234f5$var$getRefRecord(value) {
    if ($9a2a3d97de4234f5$var$validateThing(value) == false) return undefined;
    let result = {
        "@type": $9a2a3d97de4234f5$var$getRecordType(value),
        "@id": $9a2a3d97de4234f5$var$getRecordId(value)
    };
    return result;
}
function $9a2a3d97de4234f5$var$toText(value) {
    if ($9a2a3d97de4234f5$var$validateThing(value) == false) return undefined;
    var x;
    return (0, $7c87d17e86e85a38$export$2cc083be586441bb).headings.heading1(value);
}
function $9a2a3d97de4234f5$var$extractThings(record) {
    /**
     * Returns all child things in record
     */ let results = [];
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).array.isArray(record)) for (let r of record){
        let values = $9a2a3d97de4234f5$var$extractThings(r);
        if (values.length > 0) results = results.concat(values);
    }
    else if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).object.isObject(record)) {
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(record?.["@type"]) || (0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(record?.record_type)) results.push(record);
        for (let k of Object.keys(record)){
            let v = record[k];
            let values = $9a2a3d97de4234f5$var$extractThings(v);
            if (values.length > 0) results = results.concat(values);
        }
    }
    return results;
}
function $9a2a3d97de4234f5$var$getRecordType(value) {
    let record_type = value?.["@type"] || value?.record_type || null;
    return record_type;
}
function $9a2a3d97de4234f5$var$getRecordId(value) {
    let record_type = value?.["@id"] || value?.record_id || null;
    return record_type;
}
function $9a2a3d97de4234f5$var$isEqual(thing1, thing2) {
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(thing1) && (0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(thing2)) return true;
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(thing1) && (0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(thing2)) return false;
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(thing1) && (0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(thing2)) return false;
    let record1 = thing1?.record || thing1;
    let record2 = thing2?.record || thing2;
    try {
        if (JSON.stringify(record1) == JSON.stringify(record2)) return true;
        else return false;
    } catch (error) {
        return false;
    }
}






const $5abff2bf4ee17cbb$export$da17952f31714a6e = {
    toText: $5abff2bf4ee17cbb$var$toText,
    getType: $5abff2bf4ee17cbb$var$getType,
    getTypeSchemaOrg: $5abff2bf4ee17cbb$var$getTypeSchemaOrg,
    innerValuesToText: $5abff2bf4ee17cbb$var$innerValuesToText,
    valuesToText: $5abff2bf4ee17cbb$var$innerValuesToText
};
function $5abff2bf4ee17cbb$var$toText(value) {
    if (value !== 0 && value === undefined) return "";
    if (value !== 0 && value === null) return "";
    if (value !== 0 && value == "") return "";
    if (value !== 0 && Array.isArray(value) && value.length == 0) return "";
    if (value !== 0 && value == {}) return "";
    if (value !== 0 && value == "undefined") return "";
    if ((0, $9a2a3d97de4234f5$export$c24b4489b93ad8cb).isThing(value)) return (0, $9a2a3d97de4234f5$export$c24b4489b93ad8cb).toText(value);
    else if ((0, $18d56086b081e2cc$export$15c85b69ec02b47c).isDate(value)) return (0, $18d56086b081e2cc$export$15c85b69ec02b47c).toText(value);
    else if ((0, $18d56086b081e2cc$export$15c85b69ec02b47c).isTextDate(value)) return (0, $18d56086b081e2cc$export$15c85b69ec02b47c).toText(value);
    else if ((0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).isArray(value)) return (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).toText(value);
    else if ((0, $135f0c356f6f593e$export$96be39e8128f5891).isNumber(value)) return (0, $135f0c356f6f593e$export$96be39e8128f5891).toText(value);
    else if ((0, $1fd01b1ecffa6019$export$42f247ccf9267abd).isObject(value)) return (0, $1fd01b1ecffa6019$export$42f247ccf9267abd).toText(value);
    else {
        value = String(value);
        value = value.replace("ActionStatus", "");
        value = value.replace("undefined", "");
        value = (0, $6955f32358295148$export$efeacd8e2fafd6a1).fromCamelCase(value);
        return value;
    }
}
function $5abff2bf4ee17cbb$var$innerValuesToText(value) {
    if ((0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).isArray(value)) {
        let result = [];
        for (let v of value)result.push($5abff2bf4ee17cbb$var$innerValuesToText(v));
        return result;
    }
    if ((0, $1fd01b1ecffa6019$export$42f247ccf9267abd).isObject(value)) {
        let result = {};
        for (let k of (0, $1fd01b1ecffa6019$export$42f247ccf9267abd).keys(value))result[k] = $5abff2bf4ee17cbb$var$toText(value[k]);
        return result;
    }
    return $5abff2bf4ee17cbb$var$toText(value);
}
function $5abff2bf4ee17cbb$var$getType(value) {
    if ((0, $9a2a3d97de4234f5$export$c24b4489b93ad8cb).isThing(value)) return "thing";
    else if ((0, $18d56086b081e2cc$export$15c85b69ec02b47c).isDate(value)) return "datetime";
    else if ((0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).isArray(value)) return "array";
    else if ((0, $135f0c356f6f593e$export$96be39e8128f5891).isNumber(value)) return "number";
    else return "string";
}
function $5abff2bf4ee17cbb$var$getTypeSchemaOrg(value) {
    let t = $5abff2bf4ee17cbb$var$getType(value);
    if (t == "thing") return value["@type"];
    if (t == "string") {
        if ((0, $2974f6a85c45961a$export$b881b526c33ee854).toUrl(value)) return "url";
    }
    return t;
}


const $336c234775b67d62$var$h = {
    null: (0, $c945f2bbf7fa7d9d$export$f8c0f914c8a0ee10),
    array: (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00),
    isNull: (0, $c945f2bbf7fa7d9d$export$f8c0f914c8a0ee10).isNull,
    isNotNull: (0, $c945f2bbf7fa7d9d$export$f8c0f914c8a0ee10).isNotNull,
    toArray: (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00),
    value: (0, $5abff2bf4ee17cbb$export$da17952f31714a6e)
};
const $336c234775b67d62$export$35d3dd03f0194c3a = {
    analyzeValues: $336c234775b67d62$var$analyzeValues,
    analyze: $336c234775b67d62$var$analyze,
    max: $336c234775b67d62$var$getMax,
    min: $336c234775b67d62$var$getMin,
    n: $336c234775b67d62$var$getN,
    sum: $336c234775b67d62$var$getSum,
    avg: $336c234775b67d62$var$getAverage,
    stdev: $336c234775b67d62$var$getStandardDeviation,
    first: $336c234775b67d62$var$getFirst,
    last: $336c234775b67d62$var$getLast
};
function $336c234775b67d62$var$analyze(value) {
    value = $336c234775b67d62$var$h.toArray(value);
    let keys = $336c234775b67d62$var$h.array.getKeys(value);
    let analysis = {};
    for (let k of keys)analysis[k] = $336c234775b67d62$var$analyzeValues(value, k);
    return analysis;
}
function $336c234775b67d62$var$analyzeValues(value, key) {
    let analysis = {
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
    let values = $336c234775b67d62$var$h.array.getValuesForKey(value, key);
    for (let v of values){
        // Get type
        let t = $336c234775b67d62$var$h.value.getType(v);
        analysis.types[t] = (analysis.types[t] || 0) + 1;
        if (t && t != null) {
            let s = analysis.type;
            if (s && s != null && s != t) analysis.type = "na";
            else analysis.type = t;
        }
        // Get schema type
        let tt = $336c234775b67d62$var$h.value.getTypeSchemaOrg(v);
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
        analysis.N = $336c234775b67d62$var$getN(value, key);
        analysis.nullN = $336c234775b67d62$var$getNull(value, key);
        analysis.uniqueN = $336c234775b67d62$var$h.array.getUniqueN(value, key);
        analysis.min = $336c234775b67d62$var$getMin(value, key);
        analysis.max = $336c234775b67d62$var$getMax(value, key);
        analysis.stddev = $336c234775b67d62$var$getStandardDeviation(value, key);
    }
    return analysis;
}
function $336c234775b67d62$var$getFirst(value, key) {
    value = $336c234775b67d62$var$h.array.ensureArray(value);
    if ($336c234775b67d62$var$h.array.validateArray(value) == false) return undefined;
    let items = $336c234775b67d62$var$h.array.getValuesForKey(value, key);
    items = $336c234775b67d62$var$h.array.ensureArray(items);
    let [result] = items.slice(0);
    return result;
}
function $336c234775b67d62$var$getLast(value, key) {
    value = $336c234775b67d62$var$h.array.ensureArray(value);
    if ($336c234775b67d62$var$h.array.validateArray(value) == false) return undefined;
    let items = $336c234775b67d62$var$h.array.getValuesForKey(value, key);
    items = $336c234775b67d62$var$h.array.ensureArray(items);
    let [result] = items.slice(-1);
    return result;
}
function $336c234775b67d62$var$getMax(value, key) {
    value = $336c234775b67d62$var$h.array.ensureArray(value);
    if ($336c234775b67d62$var$h.array.validateArray(value) == false) return undefined;
    let items = $336c234775b67d62$var$h.array.getNumbersForKey(value, key);
    let result = Math.max(...items);
    return result;
}
function $336c234775b67d62$var$getMaxRecord(value, key) {
    value = $336c234775b67d62$var$h.array.ensureArray(value);
    if ($336c234775b67d62$var$h.array.validateArray(value) == false) return undefined;
    let result = $336c234775b67d62$var$getMax(value, key);
    let unitCode = $336c234775b67d62$var$h.array.getUnitCodesForKey(value, key);
    return $336c234775b67d62$var$getStatsRecord("maxValue", key, result, unitCode);
//count, median, marginOfError, maxValue, minValue
}
function $336c234775b67d62$var$getMin(value, key) {
    value = $336c234775b67d62$var$h.array.ensureArray(value);
    if ($336c234775b67d62$var$h.array.validateArray(value) == false) return undefined;
    let items = $336c234775b67d62$var$h.array.getNumbersForKey(value, key);
    let result = Math.min(...items);
    return result;
}
function $336c234775b67d62$var$getMinRecord(value, key) {
    value = $336c234775b67d62$var$h.array.ensureArray(value);
    if ($336c234775b67d62$var$h.array.validateArray(value) == false) return undefined;
    let result = $336c234775b67d62$var$getMin(value, key);
    let unitCode = $336c234775b67d62$var$h.array.getUnitCodesForKey(value, key);
    return $336c234775b67d62$var$getStatsRecord("minValue", key, result, unitCode);
//count, median, marginOfError, maxValue, minValue
}
function $336c234775b67d62$var$getN(value, key) {
    value = $336c234775b67d62$var$h.array.ensureArray(value);
    if ($336c234775b67d62$var$h.array.validateArray(value) == false) return undefined;
    let items = $336c234775b67d62$var$h.array.getNumbersForKey(value, key);
    let result = items.length;
    return result;
}
function $336c234775b67d62$var$getNRecord(value, key) {
    value = $336c234775b67d62$var$h.array.ensureArray(value);
    if ($336c234775b67d62$var$h.array.validateArray(value) == false) return undefined;
    let result = $336c234775b67d62$var$getN(value, key);
    let unitCode = $336c234775b67d62$var$h.array.getUnitCodesForKey(value, key);
    return $336c234775b67d62$var$getStatsRecord("count", key, result, unitCode);
//count, median, marginOfError, maxValue, minValue
}
function $336c234775b67d62$var$getSum(value, key) {
    value = $336c234775b67d62$var$h.array.ensureArray(value);
    if ($336c234775b67d62$var$h.array.validateArray(value) == false) return undefined;
    let items = $336c234775b67d62$var$h.array.getNumbersForKey(value, key);
    let result = items.reduce((partialSum, a)=>partialSum + a, 0);
    return result;
}
function $336c234775b67d62$var$getSumRecord(value, key) {
    value = $336c234775b67d62$var$h.array.ensureArray(value);
    if ($336c234775b67d62$var$h.array.validateArray(value) == false) return undefined;
    let result = $336c234775b67d62$var$getSum(value, key);
    let unitCode = $336c234775b67d62$var$h.array.getUnitCodesForKey(value, key);
    return $336c234775b67d62$var$getStatsRecord("sum", key, result, unitCode);
//count, median, marginOfError, maxValue, minValue
}
function $336c234775b67d62$var$getAverage(value, key) {
    value = $336c234775b67d62$var$h.array.ensureArray(value);
    if ($336c234775b67d62$var$h.array.validateArray(value) == false) return undefined;
    let items = $336c234775b67d62$var$h.array.getNumbersForKey(value, key);
    if (items.length == 0) return 0;
    let sumAll = items.reduce((partialSum, a)=>partialSum + a, 0);
    let result = sumAll / items.length;
    return result;
}
function $336c234775b67d62$var$getAverageRecord(value, key) {
    value = $336c234775b67d62$var$h.array.ensureArray(value);
    if ($336c234775b67d62$var$h.array.validateArray(value) == false) return undefined;
    let result = $336c234775b67d62$var$getAverage(value, key);
    let unitCode = $336c234775b67d62$var$h.array.getUnitCodesForKey(value, key);
    return $336c234775b67d62$var$getStatsRecord("average", key, result, unitCode);
//count, median, marginOfError, maxValue, minValue
}
function $336c234775b67d62$var$getStandardDeviation(value, key) {
    value = $336c234775b67d62$var$h.array.ensureArray(value);
    if ($336c234775b67d62$var$h.array.validateArray(value) == false) return undefined;
    let items = $336c234775b67d62$var$h.array.getNumbersForKey(value, key);
    if (items.length == 0) return 0;
    let n = items.length;
    let mean = items.reduce((a, b)=>a + b) / n;
    let result = Math.sqrt(items.map((x)=>Math.pow(x - mean, 2)).reduce((a, b)=>a + b) / n);
    return result;
}
function $336c234775b67d62$var$getStandardDeviationRecord(value, key) {
    value = $336c234775b67d62$var$h.array.ensureArray(value);
    if ($336c234775b67d62$var$h.array.validateArray(value) == false) return undefined;
    let result = $336c234775b67d62$var$getStandardDeviation(value, key);
    let unitCode = $336c234775b67d62$var$h.array.getUnitCodesForKey(value, key);
    return $336c234775b67d62$var$getStatsRecord("marginOfError", key, result, unitCode);
}
function $336c234775b67d62$var$getNull(value, key) {
    value = $336c234775b67d62$var$h.array.ensureArray(value);
    if ($336c234775b67d62$var$h.array.validateArray(value) == false) return undefined;
    let nullValues = 0;
    for (let v of value)if ((!v || v == null || v == "" || v == {} || v == []) && v !== 0) nullValues;
    return nullValues;
}
function $336c234775b67d62$var$getUniqueN(value, key) {
    value = $336c234775b67d62$var$h.array.ensureArray(value);
    if ($336c234775b67d62$var$h.array.validateArray(value) == false) return undefined;
    let uniqueValues = [
        ...new Set(value)
    ];
    let result = uniqueValues.length;
    return result;
}
// -----------------------------------------------------
//  Statistical record 
// -----------------------------------------------------
function $336c234775b67d62$var$getStatsRecord(statType, property, value, unitCode) {
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




const $6a48e11209e06b9f$var$h = {
    null: (0, $c945f2bbf7fa7d9d$export$f8c0f914c8a0ee10),
    array: (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00),
    isNull: (0, $c945f2bbf7fa7d9d$export$f8c0f914c8a0ee10).isNull,
    isNotNull: (0, $c945f2bbf7fa7d9d$export$f8c0f914c8a0ee10).isNotNull,
    toArray: (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00)
};
const $6a48e11209e06b9f$export$57abcc0c7c9e66d0 = {
    get: $6a48e11209e06b9f$var$getApi,
    post: $6a48e11209e06b9f$var$postApi,
    delete: $6a48e11209e06b9f$var$deleteApi,
    postFile: $6a48e11209e06b9f$var$postApiFile,
    getFile: $6a48e11209e06b9f$var$getApiFile
};
async function $6a48e11209e06b9f$var$getApi(baseUrl, urlPath, params) {
    const requestOptionsGet = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };
    let url;
    if ($6a48e11209e06b9f$var$h.isNotNull(urlPath)) url = new URL(String(urlPath), String(baseUrl));
    else url = new URL(String(baseUrl));
    url.search = new URLSearchParams(params);
    const response1 = await fetch(url, requestOptionsGet);
    if (response1.status != 200 && response1.status != 201 && response1.status && 202) throw new Error(String(response1.status) + " " + response1.statusText);
    let results = await response1.json();
    return results;
}
async function $6a48e11209e06b9f$var$postApi(baseUrl, urlPath, records) {
    //Post 
    let requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(records)
    };
    let url;
    if ($6a48e11209e06b9f$var$h.isNotNull(urlPath)) url = new URL(String(urlPath), String(baseUrl));
    else url = new URL(String(baseUrl));
    const response1 = await fetch(url, requestOptions);
    if (response1.status != 200 && response1.status != 201 && response1.status != 202) throw new Error(String(response1.status) + " " + response1.statusText);
    return response1;
}
async function $6a48e11209e06b9f$var$getApiFile(filename, baseUrl, urlPath) {
    if ($6a48e11209e06b9f$var$h.isNull(filename)) {
        let parts = filename = baseUrl.split("/");
        filename = parts[parts.length - 1];
    }
    try {
        let url;
        if ($6a48e11209e06b9f$var$h.isNotNull(urlPath)) url = new URL(String(urlPath), String(baseUrl));
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
async function $6a48e11209e06b9f$var$postApiFile(baseUrl, urlPath, file) {
    //Post 
    let url;
    if ($6a48e11209e06b9f$var$h.isNotNull(urlPath)) url = new URL(String(urlPath), String(baseUrl));
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
async function $6a48e11209e06b9f$var$deleteApi(baseUrl, urlPath, params) {
    const requestOptionsGet = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    };
    let url;
    if ($6a48e11209e06b9f$var$h.isNotNull(urlPath)) url = new URL(String(urlPath), String(baseUrl));
    else url = new URL(String(baseUrl));
    url.search = new URLSearchParams(params);
    const response1 = await fetch(url, requestOptionsGet);
    if (response1.status != 200 && response1.status != 201 && response1.status != 202) throw new Error(String(response1.status) + " " + response1.statusText);
    return true;
}












const $b3b3f9f783dfff72$export$4fd911443ac649b8 = {
    getPreview: $b3b3f9f783dfff72$var$getPreviewElementFromFile,
    getRecord: $b3b3f9f783dfff72$var$getRecordFromFile
};
// -----------------------------------------------------
//  Record
// -----------------------------------------------------
async function $b3b3f9f783dfff72$var$getRecordFromFile(file) {
    console.log("--- width", file.width);
    let record = {};
    record["@type"] = $b3b3f9f783dfff72$var$_getRecordTypeFromFile(file);
    record.contentSize = file.size;
    record.dateModified = file.lastModifiedDate;
    record.encodingFormat = file.type;
    record.name = file.type;
    return record;
}
function $b3b3f9f783dfff72$var$_getRecordTypeFromFile(file) {
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
async function $b3b3f9f783dfff72$var$getPreviewElementFromFile(file) {
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


let $5f4f35b6ef9ecbdf$var$DB = [];
let $5f4f35b6ef9ecbdf$var$CDN_URL = "https://cdn.krknapi.com";
let $5f4f35b6ef9ecbdf$var$CDN_COLLECTION = "testCdn";
class $5f4f35b6ef9ecbdf$export$1dd6e8119d1f29dd {
    constructor(record_type_or_record, record_id){
        this._record = {};
        if (record_type_or_record?.["@type"]) this._record = record_type_or_record;
        else {
            this._record["@type"] = record_type_or_record;
            this._record["@id"] = record_id;
        }
        $5f4f35b6ef9ecbdf$var$DB.push(this);
    }
    // -----------------------------------------------------
    //  Core
    // -----------------------------------------------------
    toString() {
        return `${this.record_type} ${this.record_id}`;
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
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(this._record?.["@id"])) this._record["@id"], String(crypto.randomUUID());
        return this._record?.["@id"];
    }
    set record_id(value) {
        this._record["@id"] = value;
    }
    // -----------------------------------------------------
    //  Shortcut Attributes
    // -----------------------------------------------------
    get name() {
        return this._record?.name;
    }
    set name(value) {
        return this._record.name = value;
    }
    get url() {
        return this._record?.url;
    }
    set url(value) {
        return this._record.url = value;
    }
}
class $5f4f35b6ef9ecbdf$export$2fddb5f9f1c2375e extends $5f4f35b6ef9ecbdf$export$1dd6e8119d1f29dd {
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
    toString() {
        return `${(0, $18d56086b081e2cc$export$15c85b69ec02b47c).date.toText(this.startTime)} ${this.name} ${this.status}`;
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
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(this.endTime) && (0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(other.endTime)) return false;
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(this.endTime) && (0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(other.endTime)) return false;
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(this.endTime) && (0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(other.endTime)) return true;
        if (this.endTime < other.endTime) return true;
        if (this.endTime > other.endTime) return false;
        return false;
    }
    gt(other) {
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(this.endTime) && (0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(other.endTime)) return false;
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(this.endTime) && (0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(other.endTime)) return false;
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(this.endTime) && (0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(other.endTime)) return true;
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
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(value)) value = value.replace("ActionStatus", "");
        return value;
    }
    get object() {
        return this._record?.object;
    }
    set object(value) {
        this._record.object = value;
    }
    get instrument() {
        return this._record?.instrument;
    }
    set instrument(value) {
        this._record.instrument = value;
    }
    get result() {
        return this._record?.result;
    }
    set result(value) {
        this._record.result = value;
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(value)) {
            this.actionStatus = "CompletedActionStatus";
            this.endTime = new Date();
        }
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
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(value)) {
            this.actionStatus = "FailedActionStatus";
            this.endTime = new Date();
        }
    }
    get duration() {
        return (0, $18d56086b081e2cc$export$15c85b69ec02b47c).date.duration(this.startTime, this.endTime);
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
    // -----------------------------------------------------
    //  Comment
    // -----------------------------------------------------
    getHumanRecord() {
        let humanRecord = (0, $5abff2bf4ee17cbb$export$da17952f31714a6e).innerValuesToText(this.record);
        humanRecord.duration = (0, $7c87d17e86e85a38$export$2cc083be586441bb).date.human.duration(this.startTime, this.endTime);
        return humanRecord;
    }
}
class $5f4f35b6ef9ecbdf$export$71a7fdb1c21218ad extends $5f4f35b6ef9ecbdf$export$1dd6e8119d1f29dd {
    constructor(file){
        super("DigitalDocument");
        this._file = null;
        this.file = file;
    }
    get file() {
        return this._file;
    }
    set file(file) {
        if (!(file instanceof File)) return;
        this._file = file;
        this._record = {
            ...this._record,
            ...(0, $b3b3f9f783dfff72$export$4fd911443ac649b8).getRecord(file)
        };
    }
    async apiGet() {
        this.file = await (0, $6a48e11209e06b9f$export$57abcc0c7c9e66d0).getFile(null, this._record.contentUrl);
    }
    async apiPost() {
        let result = await (0, $6a48e11209e06b9f$export$57abcc0c7c9e66d0).postFile($5f4f35b6ef9ecbdf$var$CDN_URL, "files/" + $5f4f35b6ef9ecbdf$var$CDN_COLLECTION, this._file);
        this._record.contentUrl = result[0].contentUrl;
    }
    async getPreview() {
        return await (0, $b3b3f9f783dfff72$export$4fd911443ac649b8).getPreview(this.file);
    }
}
const $5f4f35b6ef9ecbdf$export$76d497fdd9c60660 = {
    Thing: $5f4f35b6ef9ecbdf$export$1dd6e8119d1f29dd,
    Action: $5f4f35b6ef9ecbdf$export$2fddb5f9f1c2375e,
    File: $5f4f35b6ef9ecbdf$export$71a7fdb1c21218ad
};


const $3f2669e52939febe$export$631b1a0163af1868 = {
    dragDrop: {
        setDraggable: $3f2669e52939febe$var$setDragDropDraggableElement,
        setDropzone: $3f2669e52939febe$var$setDragDropDropzoneElement
    },
    generic: {
        setDraggable: $3f2669e52939febe$var$setDraggableGenericElement,
        setDropzone: $3f2669e52939febe$var$setDropzoneGenericElement
    },
    click: {
        set: $3f2669e52939febe$var$setClickableElement
    }
};
// -----------------------------------------------------
//  Drag drop
// -----------------------------------------------------
function $3f2669e52939febe$var$setDragDropDraggableElement(element, callbackFn) {
    element.draggable = true;
    element.addEventListener("dragstart", (event)=>{
        event.dataTransfer.setData("text/plain", element.id);
    });
}
function $3f2669e52939febe$var$setDragDropDropzoneElement(element, callbackFn) {
    element.addEventListener("dragover", (event)=>{
        event.preventDefault();
        event.stopPropagation();
    });
    element.addEventListener("drop", (event)=>{
        event.preventDefault();
        event.stopPropagation();
        let draggedElementID = event.dataTransfer.getData("text/plain");
        let dropzoneElementID = event.currentTarget?.id;
        let action = new (0, $5f4f35b6ef9ecbdf$export$2fddb5f9f1c2375e)("Dragdrop - drop");
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
        callbackFn(action, event);
    });
}
// -----------------------------------------------------
//  Click
// -----------------------------------------------------
function $3f2669e52939febe$var$setClickableElement(element, callbackFn) {
    element.addEventListener("click", (event)=>{
        let element = event.currentTarget;
        let elementID = element.id;
        let action = new (0, $5f4f35b6ef9ecbdf$export$2fddb5f9f1c2375e)("Click element");
        action.object = {
            "@type": "WebPageElement",
            "@id": elementID,
            name: "Clickable element"
        };
        action.setCompleted();
        callbackFn(action, event);
    });
}
// -----------------------------------------------------
//  Set draggable generic
// -----------------------------------------------------
function $3f2669e52939febe$var$setDraggableGenericElement(element, content) {
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
function $3f2669e52939febe$var$setDropzoneGenericElement(element, callbackFn) {
    /**
     * Assigns content to draggable element
     */ element.draggable = true;
    element.addEventListener("dragover", (event)=>{
        event.preventDefault();
        event.stopPropagation();
    });
    element.addEventListener("drop", async (event)=>{
        event.preventDefault();
        let action = new (0, $5f4f35b6ef9ecbdf$export$2fddb5f9f1c2375e)("Generic Drop event");
        action.instrument = {
            "@type": "WebPageElement",
            "@id": event.currentTarget.id,
            name: "Clickable element"
        };
        action.object = [];
        action.setCompleted();
        for (const item of event.dataTransfer.items){
            if (item.kind === "string" && item.type.match(/^text\/plain/)) {
                // This 
                let object = {
                    "@type": "CreativeWork",
                    name: "Text content",
                    text: event.dataTransfer.getData(item.type)
                };
                action.object.push(object);
            } else if (item.kind === "string" && item.type.match(/^text\/html/)) {
                // Drag data item is HTML
                let object = {
                    "@type": "WebPageElement",
                    name: "HTML content",
                    text: event.dataTransfer.getData(item.type)
                };
                action.object.push(object);
            } else if (item.kind === "string" && item.type.match(/^text\/uri-list/)) {
                // Drag data item is URI
                let object = {
                    "@type": "WebPage",
                    url: event.dataTransfer.getData(item.type)
                };
                action.object.push(object);
            } else if (item.kind === "file") {
                // Drag data item is a file
                let object = new (0, $5f4f35b6ef9ecbdf$export$71a7fdb1c21218ad)(item.getAsFile());
                action.object.push(object);
            }
        }
        callbackFn(action, event);
    });
}





const $4d0a524c00de5acb$export$8c687dc43f8deb28 = {
    get: $4d0a524c00de5acb$var$renderTemplate,
    replacePlaceholders: $4d0a524c00de5acb$var$renderTemplate,
    render: $4d0a524c00de5acb$var$renderTemplate
};
function $4d0a524c00de5acb$var$renderTemplate(template) {
    template = $4d0a524c00de5acb$var$prepareTemplate(template);
    let renderedTemplate1 = $4d0a524c00de5acb$var$_renderTemplate(template);
    return renderedTemplate1;
}
function $4d0a524c00de5acb$var$_renderTemplate(template) {
    /**
     * beforeContent: the content before the opening tag
     * afterContent: the content after the closing tag
     * templateContent: the content in between the tags
     * valueContent: the content replacing the templateContent with actual values
     */ let content = template;
    // Handle iterations
    let tag = $4d0a524c00de5acb$var$getIterationTag(content);
    while((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(tag)){
        let valueContent = "";
        let items = tag.propertyID.split(".");
        for (let item of items)valueContent += `<span class="krProperty" data-propertyID="${item}">`;
        valueContent += tag.contentWithin;
        for (let item of items)valueContent += `</span>`;
        content = String(tag.contentBefore) + String(valueContent) + String(tag.contentAfter);
        tag = $4d0a524c00de5acb$var$getIterationTag(content);
    }
    // Handle placeholders 
    tag = $4d0a524c00de5acb$var$getPlaceholderTag(content);
    while((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(tag)){
        let valueContent = "";
        let items = tag.propertyID.split(".");
        for (let item of items)valueContent += `<span class="krProperty" data-propertyID="${item}">`;
        for (let item of items)valueContent += `</span>`;
        content = String(tag.contentBefore) + String(valueContent) + String(tag.contentAfter);
        tag = $4d0a524c00de5acb$var$getPlaceholderTag(content);
    }
    return content;
}
function $4d0a524c00de5acb$var$prepareTemplate(template) {
    while(template.includes("{{ "))template = template.replaceAll("{{ ", "{{");
    while(template.includes(" }}"))template = template.replaceAll(" }}", "}}");
    return template;
}
function $4d0a524c00de5acb$var$getIterationTag(template) {
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(template)) return null;
    if (!template.includes("{{#")) return null;
    if (!template.includes("{{/")) return null;
    let result = {
        "type": "iteration",
        "propertyID": null,
        "contentBefore": "",
        "contentWithin": "",
        "contentAfter": ""
    };
    let tagStartPositionStart = template.lastIndexOf("{{#");
    let tagStartPositionEnd = template.indexOf("}}", tagStartPositionStart);
    let tagEndPositionStart = template.indexOf("{{/", tagStartPositionEnd);
    let tagEndPositionEnd = template.indexOf("}}", tagEndPositionStart);
    if (tagStartPositionStart == -1 || tagStartPositionEnd == -1 || tagEndPositionStart == -1 || tagEndPositionEnd == -1) return null;
    result.propertyID = template.slice(tagStartPositionStart + 3, tagStartPositionEnd);
    result.contentBefore = template.slice(0, tagStartPositionStart);
    result.contentAfter = template.slice(tagEndPositionEnd + 2);
    result.contentWithin = template.slice(tagStartPositionEnd + 2, tagEndPositionStart - 1);
    return result;
}
function $4d0a524c00de5acb$var$getPlaceholderTag(template) {
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(template)) return null;
    if (!template.includes("{{")) return null;
    if (!template.includes("}}")) return null;
    let result = {
        "type": "placeholder",
        "propertyID": null,
        "contentBefore": "",
        "contentWithin": "",
        "contentAfter": "",
        "commandName": null,
        "commandPropertyID": null
    };
    let tagPositionStart = template.lastIndexOf("{{");
    let tagPositionEnd = template.indexOf("}}", tagPositionStart);
    if (tagPositionStart == -1 || tagPositionEnd == -1) return null;
    result.propertyID = template.slice(tagPositionStart + 2, tagPositionEnd);
    result.contentBefore = template.slice(0, tagPositionStart);
    result.contentAfter = template.slice(tagPositionEnd + 2);
    // Separate commands from property ID
    let propertyString = result.propertyID;
    propertyString.replaceAll("||", "|");
    let commandNameStartPosition = propertyString.indexOf("|");
    let commandPropertyIDPosition = result.propertyID.indexOf(":", commandNameStartPosition + 1);
    if (commandNameStartPosition == -1) return result;
    result.propertyID = propertyString.slice(0, commandNameStartPosition);
    result.commandName = propertyString.slice(commandNameStartPosition + 1, commandPropertyIDPosition);
    result.commandPropertyID = propertyString.slice(commandPropertyIDPosition + 1);
    result.propertyID = result.propertyID.trim();
    result.commandName = result.commandName.trim();
    result.commandPropertyID = result.commandPropertyID.trim();
    return result;
}


const $c5218498de30ec17$export$b64d8dba83c7ded7 = {
    /**
     * current: returns the element that composes the current record
     * parent: returns element parent of
     */ record_type: $c5218498de30ec17$var$getRecordType,
    record_id: $c5218498de30ec17$var$getRecordId,
    ref: $c5218498de30ec17$var$getRef,
    init: $c5218498de30ec17$var$initThingElementAll,
    compile: $c5218498de30ec17$var$replacePlaceholders,
    record: {
        get: $c5218498de30ec17$var$getRecordFromElement,
        set: $c5218498de30ec17$var$setRecordToElement,
        delete: $c5218498de30ec17$var$deleteRecordFromElement
    },
    current: {
        thing: $c5218498de30ec17$var$getCurrentThing,
        property: $c5218498de30ec17$var$getCurrentProperty,
        value: $c5218498de30ec17$var$getCurrentValue,
        get: $c5218498de30ec17$var$getCurrentElement
    },
    parent: {
        thing: $c5218498de30ec17$var$getParentThing,
        property: $c5218498de30ec17$var$getParentProperty,
        value: $c5218498de30ec17$var$getParentValue,
        get: $c5218498de30ec17$var$getParentElement
    },
    top: {
        thing: $c5218498de30ec17$var$getTopThing,
        property: $c5218498de30ec17$var$getTopProperty,
        value: $c5218498de30ec17$var$getTopValue,
        get: $c5218498de30ec17$var$getTopElement
    },
    children: {
        things: $c5218498de30ec17$var$getChildrenThings,
        properties: $c5218498de30ec17$var$getChildrenProperties,
        values: $c5218498de30ec17$var$getChildrenValues,
        get: $c5218498de30ec17$var$getChildrenElements
    },
    childrenAll: {
        things: $c5218498de30ec17$var$getChildrenThingsAll,
        properties: $c5218498de30ec17$var$getChildrenPropertiesAll,
        values: $c5218498de30ec17$var$getChildrenValuesAll,
        get: $c5218498de30ec17$var$getChildrenElementsAll
    },
    type: {
        get: $c5218498de30ec17$var$getElementType,
        getNext: $c5218498de30ec17$var$getNextElementType,
        set: $c5218498de30ec17$var$setElementType,
        delete: $c5218498de30ec17$var$deleteElementType,
        setAsThing: $c5218498de30ec17$var$setElementTypeThing,
        setAsProperty: $c5218498de30ec17$var$setElementTypeProperty,
        setAsValue: $c5218498de30ec17$var$setElementTypeValue
    },
    parts: {
        header: {
            get: $c5218498de30ec17$var$getHeaderOfElement
        },
        body: {
            get: $c5218498de30ec17$var$getBodyOfElement,
            add: $c5218498de30ec17$var$addBodyToElement
        },
        footer: {
            get: $c5218498de30ec17$var$getFooterOfElement
        }
    },
    update: {
        record: $c5218498de30ec17$var$updateThing,
        thing: $c5218498de30ec17$var$updateThingElement,
        property: $c5218498de30ec17$var$updatePropertyElement
    },
    format: $c5218498de30ec17$var$replacePlaceholders
};
// -----------------------------------------------------
//  Attributes
// -----------------------------------------------------
function $c5218498de30ec17$var$getRecordType(element) {
    let record_type = element.getAttribute("data-record-type");
    return record_type;
}
function $c5218498de30ec17$var$getRecordId(element) {
    let record_id = element.getAttribute("data-record-id");
    return record_id;
}
function $c5218498de30ec17$var$getRef(element) {
    let record_type = $c5218498de30ec17$var$getRecordType(element);
    let record_id = $c5218498de30ec17$var$getRecordId(element);
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(record_type)) return null;
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(record_id)) return null;
    let ref = {
        "@type": record_type,
        "@id": record_id
    };
    return ref;
}
// -----------------------------------------------------
//  Initialize
// -----------------------------------------------------
function $c5218498de30ec17$var$initThingElementAll(element) {
    $c5218498de30ec17$var$initThingElement(element);
    let item = element.firstElementChild;
    while(item){
        let nextItem = item.nextElementSibling;
        $c5218498de30ec17$var$initThingElementAll(item);
        item = nextItem;
    }
    $c5218498de30ec17$var$initThingElement(element);
    return;
}
function $c5218498de30ec17$var$initThingElement(element) {
    /**
     * Initialize thing, property and value elements
     */ if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(element)) return;
    // Placeholders
    //replacePlaceholders(element);
    // Add missing classes
    $c5218498de30ec17$var$addMissingClasses(element);
    //
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull($c5218498de30ec17$var$getElementType(element))) return;
    // Set id
    (0, $7c87d17e86e85a38$export$2cc083be586441bb).element.setId(element);
    // Add parent thing if required
    $c5218498de30ec17$var$addThingToProperty(element);
    // Add body if missing
    $c5218498de30ec17$var$addBodyToElement(element);
}
// -----------------------------------------------------
//  Things
// -----------------------------------------------------
function $c5218498de30ec17$var$getThingElements(element, record_type, record_id) {
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(element)) element = document;
    let conditions;
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(record_type)) conditions = {
        "data-record-type": record_type,
        "data-record-id": record_id
    };
    let things = $c5218498de30ec17$var$getChildrenThingsAll(element, conditions);
    return things;
}
// -----------------------------------------------------
//  Updating elements
// -----------------------------------------------------
function $c5218498de30ec17$var$updateThing(record) {
    let thingElements = $c5218498de30ec17$var$getThingElements(document, record["@type"], record["@id"]);
    for (let t of thingElements)$c5218498de30ec17$var$updateThingElement(t, record);
}
function $c5218498de30ec17$var$updateThingElement(element, value) {
    let thingElement = $c5218498de30ec17$var$getCurrentThing(element);
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(thingElement)) return;
    thingElement.setAttribute("data-record-type", value?.["@type"]);
    thingElement.setAttribute("data-record-id", value?.["@id"]);
    let propertyElements = $c5218498de30ec17$var$getChildrenProperties(thingElement);
    for (let p of propertyElements){
        let propertyID = p.getAttribute("data-propertyID");
        $c5218498de30ec17$var$updatePropertyElement(p, value?.[propertyID]);
    }
}
function $c5218498de30ec17$var$updatePropertyElement(element, value, template1) {
    // Delete value elements
    let propertyBodyElement = $c5218498de30ec17$var$getBodyOfElement(element);
    propertyBodyElement.innerHTML = "";
    //
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(value)) return;
    if (!Array.isArray(value)) value = [
        value
    ];
    // Add value elements
    let propertyID = element.getAttribute("data-propertyID");
    let item = null;
    for (let v of value){
        let ve = $c5218498de30ec17$var$newValueElement(v, template1, propertyID);
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(item)) item.after(ve);
        else propertyBodyElement.appendChild(ve);
        item = ve;
    }
}
function $c5218498de30ec17$var$newValueElement(value, template1, propertyID) {
    let newValueElement = document.createElement("span");
    $c5218498de30ec17$var$setElementTypeValue(newValueElement);
    newValueElement.classList.add("krValue");
    newValueElement.setAttribute("data-property-vID", propertyID);
    newValueElement.setAttribute("data-value", JSON.stringify(value));
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(template1)) newValueElement.textContent = value;
    else newValueElement.innerHTML = template1;
    $c5218498de30ec17$var$initThingElementAll(newValueElement);
    for (let t of $c5218498de30ec17$var$getChildrenThings(newValueElement)){
        t.setAttribute("data-record-type", value?.["@type"]);
        t.setAttribute("data-record-id", value?.["@id"]);
    }
    return newValueElement;
}
function $c5218498de30ec17$var$updatePropertyElement_WITH_THING(element, thing) {
    let propertyID = element.getAttribute("data-propertyID");
    let property = thing.p.get(propertyID);
    let pvs = property.propertyValues;
    let pvsID = pvs.map((x)=>x.record_id);
    // Delete value elements
    let valueElements = $c5218498de30ec17$var$getChildrenValues(element);
    for (let v of valueElements)if (!pvsID.includes(v.id)) v.remove();
    // Add value elements
    let propertyBodyElement = $c5218498de30ec17$var$getBodyOfElement(element);
    let item = null;
    for (let pv of pvs){
        // Search if element already exists and reorder
        let filteredValueElements = valueElements.filter((x)=>x.getAttribute("data-valueID") == pv.record_id);
        if (filteredValueElements.length > 0) for (let i1 of filteredValueElements){
            if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(item)) item.after(i1);
            else propertyBodyElement.appendchild(i1);
            item = i1;
        }
        else {
            // Creates new element if not already exist
            let newValueElement = newValueElement(propertyValue, template);
            if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(item)) item.after(i);
            else propertyBodyElement.appendchild(i);
            item = i;
        }
    }
}
function $c5218498de30ec17$var$newValueElement_WITH_THING(propertyValue1, template1) {
    let newValueElement = document.createElement("span");
    $c5218498de30ec17$var$setElementTypeValue(newValueElement);
    newValueElement.setAttribute("data-valueID", propertyValue1.record_id);
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(template1)) newValueElement.textContent = propertyValue1.value;
    else {
        newValueElement.innerHTML = propertyValue1.value;
        $c5218498de30ec17$var$initThingElementAll(newValueElement);
        let childThingElements = $c5218498de30ec17$var$getChildrenThings(newValueElement);
        for (let c of childThingElements){
            c.setAttribute("data-record-type", propertyValue1.value?.["@type"]);
            c.setAttribute("data-record-id", propertyValue1.value?.["@id"]);
            $c5218498de30ec17$var$updateThingElement(c, propertyValue1.value);
        }
    }
    return newValueElement;
}
// -----------------------------------------------------
//  Placeholders
// -----------------------------------------------------
function $c5218498de30ec17$var$replacePlaceholders(element) {
    // Replace references in {{ }} like {{ name }} or {{ item.name }} with properties
    // Get text nodes
    let textNodes = [];
    for (let node of element.childNodes)if (node.nodeType == 3) textNodes.push(node);
    for (let node of textNodes){
        let nodeContent = node.nodeValue;
        if (nodeContent && nodeContent.includes("{{")) {
            console.log("has content");
            let content = (0, $4d0a524c00de5acb$export$8c687dc43f8deb28).get(node.nodeValue);
            if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(content)) {
                let newNode = document.createElement("span");
                newNode.innerHTML = content;
                node.nodeValue = "";
                node.after(newNode);
            }
        }
    }
}
// -----------------------------------------------------
//  Element structure - initialization
// -----------------------------------------------------
function $c5218498de30ec17$var$addThingToProperty(element) {
    /**
     * If a property element doens't have a parent thing, adds one
     */ if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(element.getAttribute("data-propertyID"))) return;
    let propertyElement = element;
    let thingElement = null;
    let item = element.parentElement;
    while(item){
        if (item.classList.contains("krThing")) {
            thingElement = item;
            break;
        }
        if (item.classList.contains("krProperty")) break;
        item = item.parentElement;
    }
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(thingElement)) return;
    let newThingElement = document.createElement("span");
    newThingElement.classList.add("Addedthing");
    $c5218498de30ec17$var$setElementTypeThing(newThingElement);
    newThingElement.setAttribute("data-record-type", element.getAttribute("data-record-type"));
    newThingElement.setAttribute("data-record-id", element.getAttribute("data-record-id"));
    (0, $7c87d17e86e85a38$export$2cc083be586441bb).element.insert.above(newThingElement, element);
}
function $c5218498de30ec17$var$addMissingClasses(element) {
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
}
// -----------------------------------------------------
//  Record
// -----------------------------------------------------
function $c5218498de30ec17$var$getRecordFromElement(element) {
    /**
     * Retrieves record from elements attributes and values
     */ let record = {};
    let thingElement = $c5218498de30ec17$var$getCurrentThing(element);
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(thingElement)) return null;
    record["@type"] = thingElement.getAttribute("data-record-type");
    record["@id"] = thingElement.getAttribute("data-record-id");
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(record?.["@type"])) return null;
    // Get properties
    let propertyElements = $c5218498de30ec17$var$getChildrenProperties(thingElement);
    for (let p of propertyElements){
        let propertyID = p.getAttribute("data-propertyID");
        record[propertyID] = [];
        // Get values
        let valueElements = $c5218498de30ec17$var$getChildrenValues(p);
        for (let v of valueElements){
            let value = $c5218498de30ec17$var$getValueFromElement(v);
            if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(value)) record[propertyID].push(value);
        }
    }
    record = (0, $7c87d17e86e85a38$export$2cc083be586441bb).json.simplify(record);
    return record;
}
function $c5218498de30ec17$var$getValueFromElement(element) {
    /**
     * Returns the value contained in an element
     */ // If input
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(element?.value)) return element.value;
    // If value is contained in value attribute
    let v = element.getAttribute("value");
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(v)) return v;
    // If thing
    let childrenThingElements = $c5218498de30ec17$var$getChildrenThings(element);
    if (childrenThingElements.length > 0) return childrenThingElements[0];
    // html content
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(element.innerHTML)) {
        let content = element.textContent;
        content = (0, $7c87d17e86e85a38$export$2cc083be586441bb).string.clean(content);
        return content;
    }
    return null;
}
function $c5218498de30ec17$var$setRecordToElement(element, record_type, record_id) {
    record_id = record_type?.record_id || record_type?.["@id"] || record_id;
    record_type = record_type?.record_type || record_type?.["@type"] || record_type;
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(record_type)) return;
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(record_id)) return;
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(element)) return;
    // Set type and id
    let elements = [];
    // Retrieve thing
    let currentThing = $c5218498de30ec17$var$getCurrentThing(element);
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(currentThing)) return null;
    elements.push(currentThing);
    // Retrieve properties
    let propertyElements = $c5218498de30ec17$var$getChildrenProperties(currentThing);
    elements = elements.concat(propertyElements);
    // Retrieve values
    for (let p of propertyElements){
        let valueElements = $c5218498de30ec17$var$getChildrenValues(p);
        elements = elements.concat(valueElements);
    }
    // Assign type and id for all elements
    for (let i1 of elements){
        i1.setAttribute("data-record-type", record_type);
        i1.setAttribute("data-record-id", record_id);
    }
    return;
}
function $c5218498de30ec17$var$deleteRecordFromElement(element) {
    let elements = [];
    // Retrieve thing
    let currentThing = (0, $7c87d17e86e85a38$export$2cc083be586441bb).element.getCurrentThing(element);
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(currentThing)) return null;
    elements.push(currentThing);
    // Retrieve properties
    let propertyElements = $c5218498de30ec17$var$getChildrenProperties(currentThing);
    elements = elements.concat(propertyElements);
    // Retrieve values
    for (let p of propertyElements){
        let valueElements = $c5218498de30ec17$var$getChildrenValues(p);
        elements = elements.concat(valueElements);
    }
    // Assign type and id for all elements
    for (let i1 of elements){
        i1.setAttribute("data-record-type", "");
        i1.setAttribute("data-record-id", "");
    }
    return;
}
// -----------------------------------------------------
//  Type
// -----------------------------------------------------
function $c5218498de30ec17$var$getElementType(element) {
    if (element.classList.contains("krThing")) return "thing";
    if (element.classList.contains("krProperty")) return "property";
    if (element.classList.contains("krValue")) return "value";
    return null;
}
function $c5218498de30ec17$var$getNextElementType(element) {
    let type = $c5218498de30ec17$var$getElementType(element);
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
function $c5218498de30ec17$var$setElementType(element, elementType) {
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(element)) return;
    $c5218498de30ec17$var$deleteElementType(element);
    element.classList.add(elementType);
}
function $c5218498de30ec17$var$deleteElementType(element) {
    let classes = [
        "krThing",
        "krProperty",
        "krValue"
    ];
    for (let c of classes)element.classList.remove(c);
    return;
}
function $c5218498de30ec17$var$setElementTypeThing(element) {
    let elementType = "krThing";
    return $c5218498de30ec17$var$setElementType(element, elementType);
}
function $c5218498de30ec17$var$setElementTypeProperty(element) {
    let elementType = "krProperty";
    return $c5218498de30ec17$var$setElementType(element, elementType);
}
function $c5218498de30ec17$var$setElementTypeValue(element) {
    let elementType = "krValue";
    return $c5218498de30ec17$var$setElementType(element, elementType);
}
// -----------------------------------------------------
//  Current
// -----------------------------------------------------
function $c5218498de30ec17$var$getCurrentElement(element, className, conditions) {
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(element)) return undefined;
    let item = element;
    while(item){
        if (item.classList && item.classList.contains(className) && (0, $7c87d17e86e85a38$export$2cc083be586441bb).element.meetsConditions(item)) return item;
        item = item.parentElement;
    }
    return null;
}
function $c5218498de30ec17$var$getCurrentThing(element, conditions) {
    let className = "krThing";
    return $c5218498de30ec17$var$getCurrentElement(element, className, conditions);
}
function $c5218498de30ec17$var$getCurrentProperty(element, conditions) {
    let className = "krProperty";
    return $c5218498de30ec17$var$getCurrentElement(element, className, conditions);
}
function $c5218498de30ec17$var$getCurrentValue(element, conditions) {
    let className = "krValue";
    return $c5218498de30ec17$var$getCurrentElement(element, className, conditions);
}
// -----------------------------------------------------
//  Parent
// -----------------------------------------------------
function $c5218498de30ec17$var$getParentElement(element, className, conditions) {
    if (!element || element == null) return undefined;
    let currentElement = $c5218498de30ec17$var$getCurrentElement(element, className, conditions);
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(currentElement)) return;
    let parentItem = currentElement.parentElement;
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(parentItem)) return null;
    let parentElement = $c5218498de30ec17$var$getParentElement(parentItem, className, conditions);
    return parentElement;
}
function $c5218498de30ec17$var$getParentThing(element, conditions) {
    let className = "krThing";
    return $c5218498de30ec17$var$getParentElement(element, className, conditions);
}
function $c5218498de30ec17$var$getParentProperty(element, conditions) {
    let className = "krProperty";
    return $c5218498de30ec17$var$getParentElement(element, className, conditions);
}
function $c5218498de30ec17$var$getParentValue(element, conditions) {
    let className = "krValue";
    return $c5218498de30ec17$var$getParentElement(element, className, conditions);
}
// -----------------------------------------------------
//  Top
// -----------------------------------------------------
function $c5218498de30ec17$var$getTopElement(element, className, conditions) {
    /**
     * Returns most top parent element containing class name
     * OCnditions contains attributes to match
     */ let item = element;
    let topElement = null;
    while(item){
        if (item.classList.contains(className) && (0, $7c87d17e86e85a38$export$2cc083be586441bb).element.meetsConditions(item, conditions)) topElement = item;
        item = item.parentElement;
    }
    return topElement;
}
function $c5218498de30ec17$var$getTopThing(element, conditions) {
    let className = "krThing";
    return $c5218498de30ec17$var$getTopElement(element, className, conditions);
}
function $c5218498de30ec17$var$getTopProperty(element, conditions) {
    let className = "krProperty";
    return $c5218498de30ec17$var$getTopElement(element, className, conditions);
}
function $c5218498de30ec17$var$getTopValue(element, conditions) {
    let className = "krValue";
    return $c5218498de30ec17$var$getTopElement(element, className, conditions);
}
// -----------------------------------------------------
//  Children
// -----------------------------------------------------
function $c5218498de30ec17$var$getChildrenElements(element, classToGet, classesToStop, conditions) {
    let results = [];
    if (!Array.isArray(classesToStop)) classesToStop = [
        classesToStop
    ];
    for (let i1 of element.children){
        let skip = false;
        for (let classToStop of classesToStop)if (i1.classList.contains(classToStop)) skip = true;
        if (skip == true) continue;
        if (i1.classList.contains(classToGet) && (0, $7c87d17e86e85a38$export$2cc083be586441bb).element.meetsConditions(i1, conditions)) results.push(i1);
        let v = $c5218498de30ec17$var$getChildrenElements(i1, classToGet, classesToStop, conditions);
        if (v.length > 0) results = results.concat(v);
    }
    return results;
}
function $c5218498de30ec17$var$getChildrenThings(element, conditions) {
    let classToGet = "krThing";
    let classToStop = [
        "krProperty",
        "krValue"
    ];
    return $c5218498de30ec17$var$getChildrenElements(element, classToGet, classToStop, conditions);
}
function $c5218498de30ec17$var$getChildrenProperties(element, conditions) {
    let classToGet = "krProperty";
    let classToStop = [
        "krThing",
        "krValue"
    ];
    return $c5218498de30ec17$var$getChildrenElements(element, classToGet, classToStop, conditions);
}
function $c5218498de30ec17$var$getChildrenValues(element, conditions) {
    let classToGet = "krValue";
    let classToStop = [
        "krThing",
        "krProperty"
    ];
    return $c5218498de30ec17$var$getChildrenElements(element, classToGet, classToStop, conditions);
}
// -----------------------------------------------------
//  Children  - All
// -----------------------------------------------------
function $c5218498de30ec17$var$getChildrenElementsAll(element, classToGet, classesToStop, conditions) {
    let results = $c5218498de30ec17$var$getChildrenElements(element, classToGet, classesToStop, conditions);
    let childResults = [];
    for (let r of results)childResults = childResults.concat($c5218498de30ec17$var$getChildrenElementsAll(r, classToGet, classesToStop, conditions));
    results = results.concat(childResults);
    return results;
}
function $c5218498de30ec17$var$getChildrenThingsAll(element, conditions) {
    let classToGet = "krThing";
    let classToStop = [
        "krProperty",
        "krValue"
    ];
    return $c5218498de30ec17$var$getChildrenElementsAll(element, classToGet, classToStop, conditions);
}
function $c5218498de30ec17$var$getChildrenPropertiesAll(element, conditions) {
    let classToGet = "krProperty";
    let classToStop = [
        "krThing",
        "krValue"
    ];
    return $c5218498de30ec17$var$getChildrenElementsAll(element, classToGet, classToStop, conditions);
}
function $c5218498de30ec17$var$getChildrenValuesAll(element, conditions) {
    let classToGet = "krValue";
    let classToStop = [
        "krThing",
        "krProperty"
    ];
    return $c5218498de30ec17$var$getChildrenElementsAll(element, classToGet, classToStop, conditions);
}
// -----------------------------------------------------
//  Element components
// -----------------------------------------------------
function $c5218498de30ec17$var$getHeaderOfElement(element) {
    let elementType = $c5218498de30ec17$var$getElementType(element);
    let classToGet = elementType + "Header";
    let classesToStop = "kr" + elementType;
    let bodies = $c5218498de30ec17$var$getChildrenElements(element, classToGet, classesToStop);
    if (bodies.length > 0) return bodies[0];
    return null;
}
function $c5218498de30ec17$var$getBodyOfElement(element) {
    /**
     * Returns child element containing krThingBody, krPropertyBody, etc.
     */ let elementType = $c5218498de30ec17$var$getElementType(element);
    let classToGet;
    elementType = "property";
    classToGet = "krPropertyBody";
    let classesToStop = "no stop";
    let bodies = $c5218498de30ec17$var$getChildrenElements(element, classToGet, classesToStop);
    if (bodies.length > 0) return bodies[0];
    return null;
}
function $c5218498de30ec17$var$addBodyToElement(element) {
    if ($c5218498de30ec17$var$getElementType(element) != "property") return;
    let body = $c5218498de30ec17$var$getBodyOfElement(element);
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(body)) return;
    let classToGet;
    if ($c5218498de30ec17$var$getElementType(element) == "property") classToGet = "krPropertyBody";
    else classToGet = "kr" + $c5218498de30ec17$var$getElementType(element) + "Body";
    let newBodyElement = document.createElement("span");
    newBodyElement.classList.add("krPropertyBody");
    (0, $7c87d17e86e85a38$export$2cc083be586441bb).element.insert.below(newBodyElement, element);
    return;
}
function $c5218498de30ec17$var$getFooterOfElement(element) {
    let elementType = $c5218498de30ec17$var$getElementType(element);
    let classToGet = elementType + "Footer";
    let classesToStop = "kr" + elementType;
    let bodies = $c5218498de30ec17$var$getChildrenElements(element, classToGet, classesToStop);
    if (bodies.length > 0) return bodies[0];
    return null;
}





const $51552dec6bec6edd$export$f886cb3e488af9cc = {
    extractMentions: $51552dec6bec6edd$var$extractMentions,
    extractNames: $51552dec6bec6edd$var$extractNames,
    extractValueAndUnit: $51552dec6bec6edd$var$extractValueAndUnit,
    extractUrls: $51552dec6bec6edd$var$extractUrls,
    extractNumbers: $51552dec6bec6edd$var$extractNumbers,
    extractPhoneNumbers: $51552dec6bec6edd$var$extractPhoneNumbers,
    extractDates: $51552dec6bec6edd$var$extractDates,
    extractEmails: $51552dec6bec6edd$var$extractEmails
};
function $51552dec6bec6edd$var$extractMentions(text) {
    // Error handling for invalid input
    if (typeof text !== "string") throw new Error("Input must be a string");
    // Regular expression to match mentions
    const mentionRegex = /\B@\w+/g;
    const mentions = text.match(mentionRegex);
    // Return an empty array if no mentions found
    return mentions ? mentions : [];
}
function $51552dec6bec6edd$var$extractNames(inputString) {
    if (typeof inputString !== "string") throw new TypeError("Input must be a string");
    const namePattern = /\b[A-Z][a-z]*\b/g;
    const names = inputString.match(namePattern);
    return names || [];
}
function $51552dec6bec6edd$var$extractValueAndUnit(input) {
    if (typeof input !== "string") throw new Error("Input must be a string");
    const regex = /(-?\d+\.?\d*)\s*([a-zA-Z]+)/;
    const match = input.match(regex);
    if (!match) throw new Error("No value and unit found in the input string");
    const value = parseFloat(match[1]);
    const unit = match[2];
    return {
        value: value,
        unit: unit
    };
}
function $51552dec6bec6edd$var$extractNumbers(input) {
    if (typeof input !== "string") throw new Error("Input must be a string");
    const numbers = input.match(/\d+/g);
    if (numbers === null) return [];
    return numbers.map(Number);
}
function $51552dec6bec6edd$var$extractPhoneNumbers(input) {
    // Error handling: check if input is a string
    if (typeof input !== "string") throw new Error("Input must be a string");
    // Regular expression to match different telephone number formats
    //const phoneRegex = /(\+?\d{1,2}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}/g;
    const phoneRegex = /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g;
    // Extract phone numbers
    const phoneNumbers = input.match(phoneRegex);
    // If no phone numbers are found, return an empty array
    if (!phoneNumbers) return [];
    return phoneNumbers;
}
function $51552dec6bec6edd$var$extractDates(input) {
    try {
        if (typeof input !== "string") return [];
        // Regular expression to match dates in YYYY-MM-DD, DD/MM/YYYY, or MM-DD-YYYY format
        const datePattern = /\b(\d{4}-\d{2}-\d{2}|\d{2}\/\d{2}\/\d{4}|\d{2}-\d{2}-\d{4})\b/g;
        const dates = input.match(datePattern);
        if (!dates) return [];
        let validDates = [];
        for (let date of dates){
            let d = (0, $18d56086b081e2cc$export$15c85b69ec02b47c).toDate(date);
            if (d && d != null) validDates.push(d);
        }
        return validDates;
    } catch (error) {
        return [];
    }
}
function $51552dec6bec6edd$var$extractEmails(text) {
    try {
        // Check if the input is a string
        if (typeof text !== "string") throw new Error("Input must be a string");
        // Regular expression for matching email addresses
        const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/g;
        const emails = text.match(emailRegex);
        // Check if any emails were found
        if (emails === null) throw new Error("No email addresses found");
        return emails;
    } catch (error) {
        return `Error: ${error.message}`;
    }
}
function $51552dec6bec6edd$var$extractUrls(text) {
    try {
        if (typeof text !== "string") throw new Error("Input must be a string");
        const urlRegex = /https?:\/\/[^\s/$.?#].[^\s]*/g;
        const urls = text.match(urlRegex);
        if (!urls) return [];
        return urls;
    } catch (error) {
        console.error("An error occurred:", error.message);
        return [];
    }
}









let $c34dce0368b8abc6$var$MAX_WIDTH = 30;
function $c34dce0368b8abc6$export$7642ec6da7b10b(records, keys, headers) {
    let content = "";
    // Duplicate records
    records = JSON.parse(JSON.stringify(records));
    // If record, convert properties to array
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).array.isArray(records) == false) {
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).object.isObject(records) == true) {
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
    // Build keys from records keys if missing
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(keys)) keys = (0, $7c87d17e86e85a38$export$2cc083be586441bb).array.getKeys(records);
    // Build headers from keys if missing
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(headers)) headers = keys;
    // Convert values
    records = (0, $5abff2bf4ee17cbb$export$da17952f31714a6e).innerValuesToText(records);
    // Get max length for each keys
    let keysLength = {};
    let totalLength = 0;
    for(let i = 0; i < keys.length; i++){
        let key = keys[i];
        let header = headers[i];
        let values = (0, $7c87d17e86e85a38$export$2cc083be586441bb).array.getValuesForKey(records, key);
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
            if (c.length > $c34dce0368b8abc6$var$MAX_WIDTH) c = c.slice(0, $c34dce0368b8abc6$var$MAX_WIDTH - 3) + "... ";
            c = c.padEnd(keysLength[key] + 2, " ");
            content += `${c}`;
        }
        content += "\n";
    }
    content += `${"".padEnd(totalLength, "-")}`;
    content += "\n";
    return content;
}


class $1cc9ca26baaa23b8$var$KrakenLog {
    /**
     * KrakenLog
     * Class containing a series of logs (actions)
     * Attributes:
     * -
     * Methods:
     *  - log(content, error): addns a new action with given content as name, sets tatus to Completed, unless error then Failed
     *  - get(filter): provided a json acting as filter, returns actions matching criteria
     *  - getLactAction(filter): provides last action with given filter
     */ constructor(collection){
        this.collection = collection;
        this.agent = null;
        this.instrument = null;
        this.object = null;
        this.actions = [];
    }
    // -----------------------------------------------------
    //  System methods
    // -----------------------------------------------------
    toString() {
        let records = this.actions.map((x)=>x.getHumanRecord());
        let keys = [
            "startTime",
            "endTime",
            "duration",
            "name",
            "actionStatus"
        ];
        return (0, $c34dce0368b8abc6$export$7642ec6da7b10b)(records, keys, keys);
    }
    get length() {
        return this.actions.length;
    }
    // -----------------------------------------------------
    //  Attributes 
    // -----------------------------------------------------
    get first() {
        return this._getFirstAction();
    }
    get last() {
        return this._getLastAction();
    }
    // -----------------------------------------------------
    //  Methods 
    // -----------------------------------------------------
    get(filter) {
        return this._getActions(filter);
    }
    getFirst(filter) {
        return this._getFirstAction(filter);
    }
    getLast(filter) {
        return this._getLastAction(filter);
    }
    log(content, error) {
        return this._addNewLog(content, error);
    }
    // -----------------------------------------------------
    //  System methods
    // -----------------------------------------------------
    _getNewAction() {
        let action = new (0, $5f4f35b6ef9ecbdf$export$2fddb5f9f1c2375e)("log");
        this.actions.push(action);
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(this.agent)) action.agent = this.agent;
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(this.instrument)) action.instrument = this.instrument;
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(this.object)) action.object = this.object;
        return action;
    }
    _addNewLog(content, error) {
        let action = this._getNewAction();
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(error)) action.error = error;
        else action.setCompleted();
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(content)) action.name = content;
        return action;
    }
    _getActions(filter) {
        function sortActions(a, b) {
            if (a.lt(b)) return 1;
            else if (a.gt(b)) return -1;
            else return 0;
        }
        let actions = this.actions;
        actions.sort(sortActions);
        //
        if (filter) for (let k of Object.keys(filter))actions = actions.filter((x)=>x?.[k] == filter[k]);
        return actions;
    }
    _getFirstAction(filter) {
        let actions = this._getActions(filter);
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(actions)) return actions[0];
        return null;
    }
    _getLastAction(filter) {
        let actions = this._getActions(filter);
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(actions)) return actions[actions.length - 1];
        return null;
    }
}
const $1cc9ca26baaa23b8$export$b276217a9ee3e8fa = $1cc9ca26baaa23b8$var$KrakenLog;





const $8ad58fa1a655a0ff$export$99f0d4ee82e9706 = {
    card: $8ad58fa1a655a0ff$var$getHtmlCard,
    line: $8ad58fa1a655a0ff$var$getHtmlLine
};
function $8ad58fa1a655a0ff$var$getHtmlCard() {
    let content = `
        <div class="card" style="width: 18rem;">
         
            <img src="{{image.contentUrl}}" class="card-img-top" alt="..." onerror="this.style.display='none'">
           
            <div class="card-body">
                <h5 class="card-title">{{ name }}</h5>
                <p class="card-text">{{ text }}</p>
                {{#potentialAction}}
                    <a href="{{ potentialAction.url}}" class="btn btn-primary">{{ potentialAction.name}}</a>
                {{/potentialAction}}
            </div>
        </div>
    
    `;
    return content;
}
function $8ad58fa1a655a0ff$var$getHtmlLine() {
    let content = `
        <div class="row align-items-center" >

            <div class="col-sm-1 ">
               
                <img src="{{_headingImage}}" class="img-fluid" alt="..." onerror="this.style.display='none'">
               
            </div>

            <div class="col-sm-10">

                    <div class="row">
                        <div class="col-sm-12 col-md-4">
                            {{ _heading1 }}
                        </div>
            
                        <div class="col-sm-12 col-md-3 text-truncate">
                            {{ _heading2 }}
                        </div>
            
                        <div class="col-sm-12 col-md-3">
                            {{ _headingStatus }}
                        </div>
            
                        <div class="col-sm-12 col-md-2 text-truncate">
                            <a href="{{ url }}">Link</a>
                        </div>
                    </div>
    
            </div> 
            <div class="col-sm-1">
                <div class="dropdown">
                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg>
                    </button>
                    <ul class="dropdown-menu">
                        {{#potentialAction}}
                        <li><a class="dropdown-item" href="{{potentialAction.url}}">{{potentialAction.name}}</a></li>
                        {{/potentialAction}}
                    </ul>
                </div>
            </div>

            
        </div>

    `;
    return content;
}






const $23c99379dceee5e4$export$cc74e2e6d445aa47 = {
    get: $23c99379dceee5e4$var$renderTemplate,
    replacePlaceholders: $23c99379dceee5e4$var$renderTemplate,
    render: $23c99379dceee5e4$var$renderTemplate
};
function $23c99379dceee5e4$var$renderTemplate(template, record) {
    template = $23c99379dceee5e4$var$prepareTemplate(template);
    let renderedTemplate1 = $23c99379dceee5e4$var$_renderTemplate(template, record);
    return renderedTemplate1;
}
function $23c99379dceee5e4$var$_renderTemplate(template, record) {
    /**
     * beforeContent: the content before the opening tag
     * afterContent: the content after the closing tag
     * templateContent: the content in between the tags
     * valueContent: the content replacing the templateContent with actual values
     */ let content = template;
    // Handle iterations
    let tag = $23c99379dceee5e4$var$getIterationTag(content);
    while((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(tag)){
        let valueContent = "";
        let values = (0, $7c87d17e86e85a38$export$2cc083be586441bb).dot.get(tag.propertyID, record);
        for (let value of (0, $7c87d17e86e85a38$export$2cc083be586441bb).toArray(values)){
            let tempRecord = JSON.parse(JSON.stringify(record));
            (0, $7c87d17e86e85a38$export$2cc083be586441bb).dot.set(tempRecord, tag.propertyID, value);
            valueContent += $23c99379dceee5e4$var$_renderTemplate(tag.contentWithin, tempRecord);
        }
        content = String(tag.contentBefore) + String(valueContent) + String(tag.contentAfter);
        tag = $23c99379dceee5e4$var$getIterationTag(content);
    }
    // Handle placeholders 
    tag = $23c99379dceee5e4$var$getPlaceholderTag(content);
    while((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(tag)){
        let value = (0, $7c87d17e86e85a38$export$2cc083be586441bb).dot.get(tag.propertyID, record);
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(tag.commandName) && (0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(tag.commandPropertyID)) value = (0, $336c234775b67d62$export$35d3dd03f0194c3a)?.[tag.commandName](value, tag.commandPropertyID);
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(value)) value = "";
        content = String(tag.contentBefore) + String(value) + String(tag.contentAfter);
        tag = $23c99379dceee5e4$var$getPlaceholderTag(content);
    }
    return content;
}
function $23c99379dceee5e4$var$prepareTemplate(template) {
    while(template.includes("{{ "))template = template.replaceAll("{{ ", "{{");
    while(template.includes(" }}"))template = template.replaceAll(" }}", "}}");
    return template;
}
function $23c99379dceee5e4$var$getIterationTag(template) {
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(template)) return null;
    if (!template.includes("{{#")) return null;
    if (!template.includes("{{/")) return null;
    let result = {
        "type": "iteration",
        "propertyID": null,
        "contentBefore": "",
        "contentWithin": "",
        "contentAfter": ""
    };
    let tagStartPositionStart = template.lastIndexOf("{{#");
    let tagStartPositionEnd = template.indexOf("}}", tagStartPositionStart);
    let tagEndPositionStart = template.indexOf("{{/", tagStartPositionEnd);
    let tagEndPositionEnd = template.indexOf("}}", tagEndPositionStart);
    if (tagStartPositionStart == -1 || tagStartPositionEnd == -1 || tagEndPositionStart == -1 || tagEndPositionEnd == -1) return null;
    result.propertyID = template.slice(tagStartPositionStart + 3, tagStartPositionEnd);
    result.contentBefore = template.slice(0, tagStartPositionStart);
    result.contentAfter = template.slice(tagEndPositionEnd + 2);
    result.contentWithin = template.slice(tagStartPositionEnd + 2, tagEndPositionStart - 1);
    return result;
}
function $23c99379dceee5e4$var$getPlaceholderTag(template) {
    if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(template)) return null;
    if (!template.includes("{{")) return null;
    if (!template.includes("}}")) return null;
    let result = {
        "type": "placeholder",
        "propertyID": null,
        "contentBefore": "",
        "contentWithin": "",
        "contentAfter": "",
        "commandName": null,
        "commandPropertyID": null
    };
    let tagPositionStart = template.lastIndexOf("{{");
    let tagPositionEnd = template.indexOf("}}", tagPositionStart);
    if (tagPositionStart == -1 || tagPositionEnd == -1) return null;
    result.propertyID = template.slice(tagPositionStart + 2, tagPositionEnd);
    result.contentBefore = template.slice(0, tagPositionStart);
    result.contentAfter = template.slice(tagPositionEnd + 2);
    // Separate commands from property ID
    let propertyString = result.propertyID;
    propertyString.replaceAll("||", "|");
    let commandNameStartPosition = propertyString.indexOf("|");
    let commandPropertyIDPosition = result.propertyID.indexOf(":", commandNameStartPosition + 1);
    if (commandNameStartPosition == -1) return result;
    result.propertyID = propertyString.slice(0, commandNameStartPosition);
    result.commandName = propertyString.slice(commandNameStartPosition + 1, commandPropertyIDPosition);
    result.commandPropertyID = propertyString.slice(commandPropertyIDPosition + 1);
    result.propertyID = result.propertyID.trim();
    result.commandName = result.commandName.trim();
    result.commandPropertyID = result.commandPropertyID.trim();
    return result;
}







class $9be01ebda65f7f50$export$f5bc5036afac6116 {
    constructor(){
        this._db = {};
        this._maxArgsLength = 0;
    }
    getAll(argsLength) {
        // Retrieves all values from cache
        function getValues(db, maxArgsLength, l = 0) {
            let results = [];
            // Stop if reached depth
            if (l == maxArgsLength) {
                results.push(db);
                return results;
            }
            // Iterate through paths
            for (let k of Object.keys(db))results = results.concat(getValues(db[k], maxArgsLength, l + 1));
            return results;
        }
        argsLength = argsLength || this._maxArgsLength;
        let results = getValues(this._db, argsLength);
        return results;
    }
    set(args) {
        // Set a value in cache. First arguments is the path,  Last argument is the actual value
        let path = this._db;
        let i;
        let a = arguments.length - 1;
        for(i = 0; i < arguments.length - 2; i++){
            if (!path[arguments[i]]) path[arguments[i]] = {};
            path = path[arguments[i]];
        }
        if (this._maxArgsLength < a) this._maxArgsLength = a;
        path[arguments[a - 1]] = arguments[a];
        return;
    }
    get(args) {
        // Get a value in cache.
        let a = arguments.length - 1;
        let i;
        let path = this._db;
        for(i = 0; i < arguments.length - 1; i++){
            path = path?.[arguments[i]];
            if (!path) return null;
        }
        return path[arguments[a]];
    }
}



class $6e423e9502adc63f$export$7729b59bd32e7982 {
    constructor(name){
        this.name = name;
        this.milestones = [];
        this.start();
    }
    getMilestone(name) {
        for (let m of this.milestones){
            if (m.name == name) return m;
        }
        return undefined;
    }
    addMilestone(name) {
        // Adds a milestone
        if (!name || name == null) name = "break " + String(this.milestones.length);
        let milestone = {
            "@type": "Event",
            "@id": String(crypto.randomUUID()),
            "name": name,
            "endTime": new Date()
        };
        this.milestones.push(milestone);
    }
    break(name) {
        this.addMilestone(name);
    }
    start() {
        this.milestones = [];
        this.addMilestone("start");
    }
    end() {
        this.addMilestone("end");
    }
    getDuration(startMilestone, endMilestone) {
        if (!endMilestone || endMilestone == null) {
            endMilestone = startMilestone;
            startMilestone = "start";
        }
        if (!startMilestone) {
            startMilestone = "start";
            endMilestone = "end";
        }
        let startTime = this.getMilestone("start")?.endTime;
        let endTime = this.getMilestone("end")?.endTime ?? new Date();
        let duration = (endTime - startTime) / 1000;
        return duration;
    }
    get duration() {
        return this.getDuration();
    }
    getResults() {
        let results = [];
        // Set first milestone to 0
        this.milestones[0].duration = {
            "@type": "QuantitativeValue",
            "@id": String(crypto.randomUUID()),
            "unitCode": "SEC",
            "unitText": "s",
            "value": 0
        };
        for(let i = 1; i < this.milestones.length - 1; i++){
            let currentMilestone = this.milestones[i];
            let previousMilestone = this.milestones[i - 1];
            let duration = (currentMilestone.endTime - previousMilestone.endTime) / 1000;
            currentMilestone.duration = {
                "@type": "QuantitativeValue",
                "@id": String(crypto.randomUUID()),
                "unitCode": "SEC",
                "unitText": "s",
                "value": duration
            };
            results.push(currentMilestone);
        }
        // Add milestone for total
        if (this.milestones.length > 2) {
            let endMilestone = {
                "@type": "Event",
                "@id": String(crypto.randomUUID()),
                "name": "Total",
                "duration": {
                    "@type": "QuantitativeValue",
                    "@id": String(crypto.randomUUID()),
                    "unitCode": "SEC",
                    "unitText": "s",
                    "value": this.duration
                }
            };
            results.push(endMilestone);
        }
        return results;
    }
    console() {
        let results = this.getResults();
        let keys = [
            "name",
            "duration"
        ];
        let headers = [
            "Timer milestone",
            "Duration"
        ];
        let content = (0, $c34dce0368b8abc6$export$7642ec6da7b10b)(results, keys, headers);
        console.log(content);
    }
}







class $753ee28efa9d5391$export$e49740bfcd9dec14 {
    constructor(){
        this._db_by_id = new (0, $9be01ebda65f7f50$export$f5bc5036afac6116)();
        this._db_by_record = new (0, $9be01ebda65f7f50$export$f5bc5036afac6116)();
    }
    get(elementID) {
        return this.getElement(elementID);
    }
    getElement(elementID) {
        elementID = elementID?.id || elementID;
        return this._db_by_id.get(elementID);
    }
    getElementsByRecord(record_type, record_id) {
        record_id = record_type?.record_id || record_type?.["@id"] || record_id;
        record_type = record_type?.record_type || record_type?.["@type"] || record_type;
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(record_type) || (0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(record_id)) return null;
        let elements = this._searchElements({
            "data-record-type": record_type,
            "data-record-id": record_id
        });
        return elements;
    }
    getAll() {
        return this._db_by_id.getAll();
    }
    set(element) {
        this._setElementToDbId(element);
        this._setElementToDbRecord(element);
    }
    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------
    _getElementsById(elementIDs) {
        let elements = [];
        for (let elementID of elementIDs){
            let value = this._getElemetById(elementID);
            if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(value)) elements.push(value);
        }
        return elements;
    }
    _getElemetById(elementID) {
        return this._db_by_id.get(elementID);
    }
    _searchElements(conditions) {
        let elements = this._db_by_id.getAll();
        let results = [];
        for (let e of elements){
            if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(e)) continue;
            if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).element.meetsConditions(e, conditions)) results.push(e);
        }
        return results;
    }
    _setElementToDbId(element) {
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(element)) return false;
        (0, $7c87d17e86e85a38$export$2cc083be586441bb).element.setId(element);
        this._db_by_id.set(element.id, element);
        return true;
    }
    _setElementToDbRecord(element) {
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(element)) return false;
        (0, $7c87d17e86e85a38$export$2cc083be586441bb).element.setId(element);
        let record_type = element.getAttribute("data-record-type");
        let record_id = element.getAttribute("data-record-id");
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(record_type)) return false;
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(record_id)) return false;
        let currentIds = this._db_by_record.get(record_type, record_id);
        let newIds = (0, $7c87d17e86e85a38$export$2cc083be586441bb).array.mergeUnique(currentIds, element.id);
        this._db_by_record.set(record_type, record_id, newIds);
        return true;
    }
}





class $452b555bd28df9cc$export$20c9d83c26006bcb {
    constructor(){
        this._db = new (0, $9be01ebda65f7f50$export$f5bc5036afac6116)();
    }
    get(record_type, record_id) {
        record_id = record_type?.record_id || record_type?.["@id"] || record_type?.getAttribute("data-record-id") || record_id;
        record_type = record_type?.record_type || record_type?.["@type"] || record_type?.getAttribute("data-record-type") || record_type;
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(record_type) || (0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(record_id)) return null;
        return this._db.get(record_type, record_id);
    }
    set(record) {
        let record_id = record.record_id || record?.["@id"];
        let record_type = record?.record_type || record?.["@type"];
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(record_type) || (0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(record_id)) return null;
        return this._db.set(record_type, record_id, record);
    }
    getAll() {
        return this._db.getAll();
    }
}



(0, $7c87d17e86e85a38$export$2cc083be586441bb).elementThing = (0, $c5218498de30ec17$export$b64d8dba83c7ded7);
(0, $7c87d17e86e85a38$export$2cc083be586441bb).thing = (0, $9a2a3d97de4234f5$export$c24b4489b93ad8cb);
class $6ecb364aa6ffaee7$export$909c33a444924702 {
    constructor(element){
        this._baseElement = element;
        this._elementDB = new (0, $753ee28efa9d5391$export$e49740bfcd9dec14)();
        this._recordDb = new (0, $452b555bd28df9cc$export$20c9d83c26006bcb)();
        this._HTMLtemplates = new (0, $9be01ebda65f7f50$export$f5bc5036afac6116)();
        this._initObject();
    }
    // -----------------------------------------------------
    //  Initialization 
    // -----------------------------------------------------
    _initObject() {
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(this._baseElement)) return;
        // Init element
        this._baseElement.innerHTML = (0, $4d0a524c00de5acb$export$8c687dc43f8deb28).get(this._baseElement.innerHTML);
        (0, $7c87d17e86e85a38$export$2cc083be586441bb).elementThing.init(this._baseElement);
        // Get current thing
        let currentThing = (0, $7c87d17e86e85a38$export$2cc083be586441bb).elementThing.current.thing(this._baseElement);
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(currentThing)) {
            this.setElement(currentThing);
            this._initTemplates(currentThing);
        } else {
            let elements = (0, $7c87d17e86e85a38$export$2cc083be586441bb).elementThing.children.things(this._baseElement) || [];
            for (let t of elements){
                this.setElement(t);
                this._initTemplates(t);
            }
        }
        return;
    }
    _initTemplates(element) {
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(element)) return;
        // Store property templates
        let propertyElements = (0, $7c87d17e86e85a38$export$2cc083be586441bb).elementThing.children.properties(element);
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(propertyElements)) return;
        for (let propertyElement of propertyElements){
            let body = (0, $7c87d17e86e85a38$export$2cc083be586441bb).elementThing.parts.body.get(propertyElement);
            if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(body)) return;
            let content = body.innerHTML;
            this._HTMLtemplates.set(propertyElement.id, content);
        }
    }
    // -----------------------------------------------------
    //  Attributes 
    // -----------------------------------------------------
    get baseElement() {
        return this._baseElement;
    }
    set baseElement(value) {
        this._baseElement = value;
        this._initObject();
    }
    get record() {
        return (0, $7c87d17e86e85a38$export$2cc083be586441bb).elementThing.record.get(this.element);
    }
    set record(value) {
        for (let element of this._elementDB.getAll())if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(element.getAttribute("data-record-type"))) (0, $7c87d17e86e85a38$export$2cc083be586441bb).elementThing.record.set(element, value);
        this.setRecord(value);
    }
    get records() {
        return this._recordDb.getAll();
    }
    set records(value) {
        this.setRecord(value);
    }
    get element() {
        return (0, $7c87d17e86e85a38$export$2cc083be586441bb).elementThing.top.thing(this._baseElement);
    }
    set element(value) {
        this._baseElement = value;
        this._initObject();
    }
    get elements() {
        return this._elementDB.getAll();
    }
    set elements(value) {
        this.setElement(value);
    }
    // -----------------------------------------------------
    //  Records 
    // -----------------------------------------------------
    setRecord(record) {
        let thing;
        if (record.record) {
            thing = record;
            record = thing.record;
        }
        let oldRecord = this._recordDb.get(record);
        // If record is same, don't update
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).thing.isEqual(oldRecord, record)) return;
        // Update record
        this._recordDb.set(record);
        // Update elements
        this.updateAllElementsByRecord(record);
        // Add addEventListener if appropriate
        if (thing) thing.addEventListener("all", (event)=>{
            this.updateAllElementsByRecord(thing.record);
        });
        // Add sub records
        let subRecords = (0, $7c87d17e86e85a38$export$2cc083be586441bb).thing.extractThings(record);
        for (let subRecord of subRecords)this.setRecord(subRecord);
    }
    // -----------------------------------------------------
    //  Elements 
    // -----------------------------------------------------
    setElement(element) {
        // Set element
        this._elementDB.set(element);
        // Store sub elements
        let thingElements = (0, $7c87d17e86e85a38$export$2cc083be586441bb).elementThing.children.things(element);
        for (let thingElement of thingElements)this.setElement(thingElement);
        return true;
    }
    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------
    updateAllElementsByRecord(record) {
        let elements = this._elementDB.getElementsByRecord(record);
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(elements)) return false;
        for (let element of elements)this.updateElement(element, record);
        return;
    }
    updateElement(elementID, record) {
        let element = this._elementDB.get(elementID);
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(element)) return false;
        // if not record
        if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNull(record)) {
            record = this._recordDb.get(element);
            record = record?.record || record;
        }
        // Check if properties
        let propertyElements = (0, $7c87d17e86e85a38$export$2cc083be586441bb).elementThing.children.properties(element);
        if (propertyElements.length > 0) for (let propertyElement of propertyElements)this.updatePropertyElement(propertyElement, record);
        else (0, $7c87d17e86e85a38$export$2cc083be586441bb).elementThing.update.thing(element, record);
        return true;
    }
    updatePropertyElement(propertyElement, record) {
        let template = this._HTMLtemplates.get(propertyElement.id);
        let propertyID = propertyElement.getAttribute("data-propertyID");
        (0, $7c87d17e86e85a38$export$2cc083be586441bb).elementThing.update.property(propertyElement, record?.[propertyID], template);
        // Get thing under values and update
        let childValues = (0, $7c87d17e86e85a38$export$2cc083be586441bb).elementThing.children.values(propertyElement);
        let childthings = [];
        for (let childValue of childValues){
            let t = (0, $7c87d17e86e85a38$export$2cc083be586441bb).elementThing.children.things(childValue);
            if ((0, $7c87d17e86e85a38$export$2cc083be586441bb).isNotNull(t)) childthings = childthings.concat(t);
        }
        for (let childthing of childthings){
            this.setElement(childthing);
            this.updateElement(childthing);
        }
        return;
    }
}


const $53bcb33ef2023ce8$export$f936470337fdc8d0 = {
    analysis: (0, $336c234775b67d62$export$35d3dd03f0194c3a),
    api: (0, $6a48e11209e06b9f$export$57abcc0c7c9e66d0),
    array: (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00),
    Cache: (0, $9be01ebda65f7f50$export$f5bc5036afac6116),
    date: (0, $18d56086b081e2cc$export$15c85b69ec02b47c),
    dot: (0, $2865c5ce12fd7c9f$export$fe5b3308000496d5),
    element: (0, $44c18bf8d2147863$export$e0169ab077dc0819),
    elementEvent: (0, $3f2669e52939febe$export$631b1a0163af1868),
    elementThing: (0, $c5218498de30ec17$export$b64d8dba83c7ded7),
    email: (0, $92413447c3a75377$export$bac8020bbb4f7950),
    extract: (0, $51552dec6bec6edd$export$f886cb3e488af9cc),
    file: (0, $b3b3f9f783dfff72$export$4fd911443ac649b8),
    headings: (0, $f5e690043496127e$export$36b1aac33f5f1b68),
    html: (0, $8ad58fa1a655a0ff$export$99f0d4ee82e9706),
    json: (0, $03899943a5d4eab2$export$94a70d284fcdf065),
    Logs: (0, $1cc9ca26baaa23b8$export$b276217a9ee3e8fa),
    null: (0, $c945f2bbf7fa7d9d$export$f8c0f914c8a0ee10),
    number: (0, $135f0c356f6f593e$export$96be39e8128f5891),
    object: (0, $1fd01b1ecffa6019$export$42f247ccf9267abd),
    simple: (0, $5f4f35b6ef9ecbdf$export$76d497fdd9c60660),
    string: (0, $6955f32358295148$export$efeacd8e2fafd6a1),
    template: (0, $23c99379dceee5e4$export$cc74e2e6d445aa47),
    templateLive: (0, $4d0a524c00de5acb$export$8c687dc43f8deb28),
    textTable: (0, $c34dce0368b8abc6$export$7642ec6da7b10b),
    thing: (0, $9a2a3d97de4234f5$export$c24b4489b93ad8cb),
    Timer: (0, $6e423e9502adc63f$export$7729b59bd32e7982),
    url: (0, $2974f6a85c45961a$export$b881b526c33ee854),
    value: (0, $5abff2bf4ee17cbb$export$da17952f31714a6e),
    isNull: (0, $c945f2bbf7fa7d9d$export$f8c0f914c8a0ee10).isNull,
    isNotNull: (0, $c945f2bbf7fa7d9d$export$f8c0f914c8a0ee10).isNotNull,
    isEqual: (0, $c945f2bbf7fa7d9d$export$f8c0f914c8a0ee10).isEqual,
    isNotEqual: (0, $c945f2bbf7fa7d9d$export$f8c0f914c8a0ee10).isNotEqual,
    toArray: (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).toArray,
    elementOrchestrator: (0, $6ecb364aa6ffaee7$export$909c33a444924702)
};


const $cf838c15c8b009ba$export$f936470337fdc8d0 = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0);


export {$cf838c15c8b009ba$export$f936470337fdc8d0 as krakenHelpers};
//# sourceMappingURL=main.js.map
