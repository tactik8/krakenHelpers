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


const $9fc8b212f324f9e3$export$4736c2d1b0001d00 = {
    toText: $9fc8b212f324f9e3$var$toText,
    isArray: $9fc8b212f324f9e3$var$validateArray,
    validateArray: $9fc8b212f324f9e3$var$validateArray,
    toArray: $9fc8b212f324f9e3$var$ensureArray,
    ensureArray: $9fc8b212f324f9e3$var$ensureArray,
    getKeys: $9fc8b212f324f9e3$var$getKeys,
    keys: $9fc8b212f324f9e3$var$getKeys,
    getValuesForKey: $9fc8b212f324f9e3$var$getValuesForKey,
    getNumbersForKey: $9fc8b212f324f9e3$var$getNumbersForKey
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
    if (!value || value == null || value == {}) return [];
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
        let v1 = v?.[key];
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
        let newItem = (0, $135f0c356f6f593e$export$96be39e8128f5891).toNumber(item);
        if ((0, $135f0c356f6f593e$export$96be39e8128f5891).isNumber(newItem) == true) results.push(newItem);
        if (item?.["@type"] && item?.["@type"] == "QuantitativeValue") {
            let quantItem = (0, $135f0c356f6f593e$export$96be39e8128f5891).toNumber(item?.value);
            if ((0, $135f0c356f6f593e$export$96be39e8128f5891).isNumber(quantItem) == true) results.push(quantItem);
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



/** @const {Object}  krakenDateHelpers
 * - isDate: Determiens if value is of type Date
 * - toDate: Converts a value (string, etc.) to Date
 * - getDuration: Returns duration between two dates
 * - getDurationRecord: Returns duration in schema.org QuantitativeValue record
 */ const $18d56086b081e2cc$export$15c85b69ec02b47c = {
    // Base
    isDate: $18d56086b081e2cc$var$validateDate,
    getDuration: $18d56086b081e2cc$var$getDuration,
    getDurationRecord: $18d56086b081e2cc$var$getDurationRecord,
    toDate: $18d56086b081e2cc$var$toDate,
    toText: $18d56086b081e2cc$var$toText,
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
function $18d56086b081e2cc$var$toText(value) {
    if ($18d56086b081e2cc$var$validateDate(value) == false) return undefined;
    let formattedDate = value.toISOString().split(".")[0];
    formattedDate.replace("T", ", ");
    return formattedDate;
}
function $18d56086b081e2cc$var$toDate(value) {
    if ($18d56086b081e2cc$var$validateDate(value) == true) return value;
    try {
        if (typeof value !== "string") return undefined;
        const date = new Date(value);
        if (isNaN(date.getTime())) return undefined;
        return date;
    } catch (error) {
        return undefined;
    }
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


const $9a2a3d97de4234f5$export$c24b4489b93ad8cb = {
    isValid: $9a2a3d97de4234f5$var$validateThing,
    isThing: $9a2a3d97de4234f5$var$validateThing,
    validateThing: $9a2a3d97de4234f5$var$validateThing,
    getRefRecord: $9a2a3d97de4234f5$var$getRefRecord,
    ref: $9a2a3d97de4234f5$var$getRefRecord,
    toText: $9a2a3d97de4234f5$var$toText
};
function $9a2a3d97de4234f5$var$validateThing(value) {
    if (!value["@type"]) return false;
    return true;
}
function $9a2a3d97de4234f5$var$getRefRecord(value) {
    if ($9a2a3d97de4234f5$var$validateThing(value) == false) return undefined;
    let result = {
        "@type": value["@type"],
        "@id": value["@id"]
    };
    return result;
}
function $9a2a3d97de4234f5$var$toText(value) {
    if ($9a2a3d97de4234f5$var$validateThing(value) == false) return undefined;
    let record_type = value["@type"];
    let record_id = value["@id"];
    if (record_type == "QuantitativeValue") {
        let result = `${value["value"]} ${value["unitText"] || value["unitCode"] || ""}`;
        return result;
    }
    if (record_type == "DefinedTerm") {
        if (value.name && value.name != null) return value.name;
        if (value.termCode && value.termCode != null) return value.termCode;
    }
    if (record_type == "Person") {
        if (value["givenName"] && value["familyName"]) return `${value["givenName"]} ${value["familyName"]}`;
    }
    record_type;
    let result = `${value["@type"]}/${value["@id"]}`;
    return result;
}




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


const $5abff2bf4ee17cbb$export$da17952f31714a6e = {
    toText: $5abff2bf4ee17cbb$var$toText,
    getType: $5abff2bf4ee17cbb$var$getType,
    getTypeSchemaOrg: $5abff2bf4ee17cbb$var$getTypeSchemaOrg,
    innerValuesToText: $5abff2bf4ee17cbb$var$innerValuesToText,
    valuesToText: $5abff2bf4ee17cbb$var$innerValuesToText
};
function $5abff2bf4ee17cbb$var$toText(value) {
    if ((!value || value == null || value == [] || value == {}) && value != 0) return "";
    if ((0, $9a2a3d97de4234f5$export$c24b4489b93ad8cb).isThing(value)) return (0, $9a2a3d97de4234f5$export$c24b4489b93ad8cb).toText(value);
    else if ((0, $18d56086b081e2cc$export$15c85b69ec02b47c).isDate(value)) return (0, $18d56086b081e2cc$export$15c85b69ec02b47c).toText(value);
    else if ((0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).isArray(value)) return (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).toText(value);
    else if ((0, $135f0c356f6f593e$export$96be39e8128f5891).isNumber(value)) return (0, $135f0c356f6f593e$export$96be39e8128f5891).toText(value);
    else if ((0, $1fd01b1ecffa6019$export$42f247ccf9267abd).isObject(value)) return (0, $1fd01b1ecffa6019$export$42f247ccf9267abd).toText(value);
    else return String(value);
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


const $336c234775b67d62$export$35d3dd03f0194c3a = {
    analyzeValues: $336c234775b67d62$var$analyzeValues,
    analyze: $336c234775b67d62$var$analyze
};
function $336c234775b67d62$var$analyze(value) {
    value = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).ka.ensureArray(value);
    let keys = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).getKeys(value);
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
    let values = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).getValuesForKey(value, key);
    for (let v of values){
        // Get type
        let t = (0, $5abff2bf4ee17cbb$export$da17952f31714a6e).getType(v);
        analysis.types[t] = (analysis.types[t] || 0) + 1;
        if (t && t != null) {
            let s = analysis.type;
            if (s && s != null && s != t) analysis.type = "na";
            else analysis.type = t;
        }
        // Get schema type
        let tt = (0, $5abff2bf4ee17cbb$export$da17952f31714a6e).getTypeSchemaOrg(v);
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
        analysis.uniqueN = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).getUniqueN(value, key);
        analysis.min = $336c234775b67d62$var$getMin(value, key);
        analysis.max = $336c234775b67d62$var$getMax(value, key);
        analysis.stddev = $336c234775b67d62$var$getStandardDeviation(value, key);
    }
    return analysis;
}
function $336c234775b67d62$var$getMax(value, key) {
    value = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).ensureArray(value);
    if ((0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).validateArray(value) == false) return undefined;
    let items = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).getNumbersForKey(value, key);
    let result = Math.max(...items);
    return result;
}
function $336c234775b67d62$var$getMaxRecord(value, key) {
    value = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).ensureArray(value);
    if ((0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).validateArray(value) == false) return undefined;
    let result = $336c234775b67d62$var$getMax(value, key);
    let unitCode = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).getUnitCodesForKey(value, key);
    return $336c234775b67d62$var$getStatsRecord("maxValue", key, result, unitCode);
//count, median, marginOfError, maxValue, minValue
}
function $336c234775b67d62$var$getMin(value, key) {
    value = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).ensureArray(value);
    if ((0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).validateArray(value) == false) return undefined;
    let items = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).getNumbersForKey(value, key);
    let result = Math.min(...items);
    return result;
}
function $336c234775b67d62$var$getMinRecord(value, key) {
    value = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).ensureArray(value);
    if ((0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).validateArray(value) == false) return undefined;
    let result = $336c234775b67d62$var$getMin(value, key);
    let unitCode = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).getUnitCodesForKey(value, key);
    return $336c234775b67d62$var$getStatsRecord("minValue", key, result, unitCode);
//count, median, marginOfError, maxValue, minValue
}
function $336c234775b67d62$var$getN(value, key) {
    value = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).ensureArray(value);
    if ((0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).validateArray(value) == false) return undefined;
    let items = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).getNumbersForKey(value, key);
    let result = items.length;
    return result;
}
function $336c234775b67d62$var$getNRecord(value, key) {
    value = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).ensureArray(value);
    if ((0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).validateArray(value) == false) return undefined;
    let result = $336c234775b67d62$var$getN(value, key);
    let unitCode = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).getUnitCodesForKey(value, key);
    return $336c234775b67d62$var$getStatsRecord("count", key, result, unitCode);
//count, median, marginOfError, maxValue, minValue
}
function $336c234775b67d62$var$getSum(value, key) {
    value = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).ensureArray(value);
    if ((0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).validateArray(value) == false) return undefined;
    let items = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).getNumbersForKey(value, key);
    let result = items.reduce((partialSum, a)=>partialSum + a, 0);
    return result;
}
function $336c234775b67d62$var$getSumRecord(value, key) {
    value = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).ensureArray(value);
    if ((0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).validateArray(value) == false) return undefined;
    let result = $336c234775b67d62$var$getSum(value, key);
    let unitCode = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).getUnitCodesForKey(value, key);
    return $336c234775b67d62$var$getStatsRecord("sum", key, result, unitCode);
//count, median, marginOfError, maxValue, minValue
}
function $336c234775b67d62$var$getAverage(value, key) {
    value = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).ensureArray(value);
    if ((0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).validateArray(value) == false) return undefined;
    let items = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).getNumbersForKey(value, key);
    if (items.length == 0) return 0;
    let sumAll = items.reduce((partialSum, a)=>partialSum + a, 0);
    let result = sumAll / items.length;
    return result;
}
function $336c234775b67d62$var$getAverageRecord(value, key) {
    value = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).ensureArray(value);
    if ((0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).validateArray(value) == false) return undefined;
    let result = $336c234775b67d62$var$getAverage(value, key);
    let unitCode = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).getUnitCodesForKey(value, key);
    return $336c234775b67d62$var$getStatsRecord("average", key, result, unitCode);
//count, median, marginOfError, maxValue, minValue
}
function $336c234775b67d62$var$getStandardDeviation(value, key) {
    value = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).ensureArray(value);
    if ((0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).validateArray(value) == false) return undefined;
    let items = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).getNumbersForKey(value, key);
    if (items.length == 0) return 0;
    let n = items.length;
    let mean = items.reduce((a, b)=>a + b) / n;
    let result = Math.sqrt(items.map((x)=>Math.pow(x - mean, 2)).reduce((a, b)=>a + b) / n);
    return result;
}
function $336c234775b67d62$var$getStandardDeviationRecord(value, key) {
    value = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).ensureArray(value);
    if ((0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).validateArray(value) == false) return undefined;
    let result = $336c234775b67d62$var$getStandardDeviation(value, key);
    let unitCode = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).getUnitCodesForKey(value, key);
    return $336c234775b67d62$var$getStatsRecord("marginOfError", key, result, unitCode);
}
function $336c234775b67d62$var$getNull(value, key) {
    value = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).ensureArray(value);
    if ((0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).validateArray(value) == false) return undefined;
    let nullValues = 0;
    for (let v of value)if ((!v || v == null || v == "" || v == {} || v == []) && v !== 0) nullValues;
    return nullValues;
}
function $336c234775b67d62$var$getUniqueN(value, key) {
    value = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).ensureArray(value);
    if ((0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).validateArray(value) == false) return undefined;
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





const $6955f32358295148$export$efeacd8e2fafd6a1 = {
    extractMentions: $6955f32358295148$var$extractMentions,
    extractNames: $6955f32358295148$var$extractNames,
    extractValueAndUnit: $6955f32358295148$var$extractValueAndUnit,
    extractUrls: $6955f32358295148$var$extractUrls,
    extractNumbers: $6955f32358295148$var$extractNumbers,
    extractPhoneNumbers: $6955f32358295148$var$extractPhoneNumbers,
    extractDates: $6955f32358295148$var$extractDates,
    extractEmails: $6955f32358295148$var$extractEmails
};
function $6955f32358295148$var$extractMentions(text) {
    // Error handling for invalid input
    if (typeof text !== "string") throw new Error("Input must be a string");
    // Regular expression to match mentions
    const mentionRegex = /\B@\w+/g;
    const mentions = text.match(mentionRegex);
    // Return an empty array if no mentions found
    return mentions ? mentions : [];
}
function $6955f32358295148$var$extractNames(inputString) {
    if (typeof inputString !== "string") throw new TypeError("Input must be a string");
    const namePattern = /\b[A-Z][a-z]*\b/g;
    const names = inputString.match(namePattern);
    return names || [];
}
function $6955f32358295148$var$extractValueAndUnit(input) {
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
function $6955f32358295148$var$extractNumbers(input) {
    if (typeof input !== "string") throw new Error("Input must be a string");
    const numbers = input.match(/\d+/g);
    if (numbers === null) return [];
    return numbers.map(Number);
}
function $6955f32358295148$var$extractPhoneNumbers(input) {
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
function $6955f32358295148$var$extractDates(input) {
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
function $6955f32358295148$var$extractEmails(text) {
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
function $6955f32358295148$var$extractUrls(text) {
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
    if ((0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).isArray(records) == false) {
        if ((0, $1fd01b1ecffa6019$export$42f247ccf9267abd).isObject(records) == true) {
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
    if (!keys || keys == null) keys = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).getKeys(records);
    // Build headers from keys if missing
    if (!headers || headers == null) headers = keys;
    // Convert values
    records = (0, $5abff2bf4ee17cbb$export$da17952f31714a6e).valuesToText(records);
    // Get max length for each keys
    let keysLength = {};
    let totalLength = 0;
    for(let i = 0; i < keys.length; i++){
        let key = keys[i];
        let header = headers[i];
        let values = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).getValuesForKey(records, key);
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
            let c = String(record?.[key]) || "";
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







const $6a48e11209e06b9f$export$57abcc0c7c9e66d0 = {
    get: $6a48e11209e06b9f$var$getApi,
    post: $6a48e11209e06b9f$var$postApi,
    delete: $6a48e11209e06b9f$var$deleteApi
};
async function $6a48e11209e06b9f$var$getApi(baseUrl, urlPath, params) {
    const requestOptionsGet = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    };
    let url = new URL(urlPath, String(baseUrl));
    url.search = new URLSearchParams(params);
    const response = await fetch(url, requestOptionsGet);
    if (response.status != 200 && response.status != 201 && response.status && 202) throw new Error(String(response.status) + " " + response.statusText);
    let results = await response.json();
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
    let url = new URL(urlPath, String(baseUrl));
    const response = await fetch(url, requestOptions);
    if (response.status != 200 && response.status != 201 && response.status != 202) throw new Error(String(response.status) + " " + response.statusText);
    return true;
}
async function $6a48e11209e06b9f$var$deleteApi(baseUrl, urlPath, params) {
    const requestOptionsGet = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    };
    let url = new URL(urlPath, String(baseUrl));
    url.search = new URLSearchParams(params);
    const response = await fetch(url, requestOptionsGet);
    if (response.status != 200 && response.status != 201 && response.status != 202) throw new Error(String(response.status) + " " + response.statusText);
    return true;
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


const $53bcb33ef2023ce8$export$f936470337fdc8d0 = {
    analysis: (0, $336c234775b67d62$export$35d3dd03f0194c3a),
    api: (0, $6a48e11209e06b9f$export$57abcc0c7c9e66d0),
    array: (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00),
    Cache: (0, $9be01ebda65f7f50$export$f5bc5036afac6116),
    date: (0, $18d56086b081e2cc$export$15c85b69ec02b47c),
    email: (0, $92413447c3a75377$export$bac8020bbb4f7950),
    json: (0, $03899943a5d4eab2$export$94a70d284fcdf065),
    number: (0, $135f0c356f6f593e$export$96be39e8128f5891),
    object: (0, $1fd01b1ecffa6019$export$42f247ccf9267abd),
    string: (0, $6955f32358295148$export$efeacd8e2fafd6a1),
    textTable: (0, $c34dce0368b8abc6$export$7642ec6da7b10b),
    thing: (0, $9a2a3d97de4234f5$export$c24b4489b93ad8cb),
    Timer: (0, $6e423e9502adc63f$export$7729b59bd32e7982),
    url: (0, $2974f6a85c45961a$export$b881b526c33ee854),
    value: (0, $5abff2bf4ee17cbb$export$da17952f31714a6e)
};


const $cf838c15c8b009ba$export$f936470337fdc8d0 = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0);


export {$cf838c15c8b009ba$export$f936470337fdc8d0 as krakenHelpers};
//# sourceMappingURL=main.js.map
