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
    if (!value || value == null) return undefined;
    if (rounding | rounding != null) value = Math.round(value);
    return String(value);
}


const $1fd01b1ecffa6019$export$42f247ccf9267abd = {
    isObject: $1fd01b1ecffa6019$var$isObject,
    getKeys: $1fd01b1ecffa6019$var$getKeys,
    keys: $1fd01b1ecffa6019$var$getKeys
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


const $9fc8b212f324f9e3$export$4736c2d1b0001d00 = {
    isArray: $9fc8b212f324f9e3$var$validateArray,
    validateArray: $9fc8b212f324f9e3$var$validateArray,
    toArray: $9fc8b212f324f9e3$var$ensureArray,
    ensureArray: $9fc8b212f324f9e3$var$ensureArray,
    getKeys: $9fc8b212f324f9e3$var$getKeys,
    keys: $9fc8b212f324f9e3$var$getKeys,
    getValuesForKey: $9fc8b212f324f9e3$var$getValuesForKey,
    getNumbersForKey: $9fc8b212f324f9e3$var$getNumbersForKey,
    getMax: $9fc8b212f324f9e3$var$getMax,
    getMin: $9fc8b212f324f9e3$var$getMin,
    getN: $9fc8b212f324f9e3$var$getN,
    getSum: $9fc8b212f324f9e3$var$getSum,
    getAverage: $9fc8b212f324f9e3$var$getAverage,
    getStandardDeviation: $9fc8b212f324f9e3$var$getStandardDeviation,
    stddev: $9fc8b212f324f9e3$var$getStandardDeviation,
    getMaxRecord: $9fc8b212f324f9e3$var$getMax,
    getMinRecord: $9fc8b212f324f9e3$var$getMin,
    getNRecord: $9fc8b212f324f9e3$var$getN,
    getSumRecord: $9fc8b212f324f9e3$var$getSum,
    getAverageRecord: $9fc8b212f324f9e3$var$getAverage,
    getStandardDeviationRecord: $9fc8b212f324f9e3$var$getStandardDeviation,
    getStatsRecord: $9fc8b212f324f9e3$var$getStatsRecord
};
function $9fc8b212f324f9e3$var$validateArray(value) {
    if (Array.isArray(value)) return true;
    return false;
}
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
function $9fc8b212f324f9e3$var$getKeys(value) {
    if ($9fc8b212f324f9e3$var$validateArray(value) == false) return undefined;
    let keys = [];
    for (let v of value){
        for (let k of Object.keys(v))if (!keys.includes(k)) keys.push(k);
    }
    keys.sort();
    return keys;
}
// -----------------------------------------------------
//  Columns focused methods 
// -----------------------------------------------------
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
function $9fc8b212f324f9e3$var$getMax(value, key) {
    value = $9fc8b212f324f9e3$var$ensureArray(value);
    if ($9fc8b212f324f9e3$var$validateArray(value) == false) return undefined;
    let items = $9fc8b212f324f9e3$var$getNumbersForKey(value, key);
    let result = Math.max(...items);
    return result;
}
function $9fc8b212f324f9e3$var$getMaxRecord(value, key) {
    value = $9fc8b212f324f9e3$var$ensureArray(value);
    if ($9fc8b212f324f9e3$var$validateArray(value) == false) return undefined;
    let result = $9fc8b212f324f9e3$var$getMax(value, key);
    let unitCode = $9fc8b212f324f9e3$var$getUnitCodesForKey(value, key);
    return $9fc8b212f324f9e3$var$getStatsRecord("maxValue", key, result, unitCode);
//count, median, marginOfError, maxValue, minValue
}
function $9fc8b212f324f9e3$var$getMin(value, key) {
    value = $9fc8b212f324f9e3$var$ensureArray(value);
    if ($9fc8b212f324f9e3$var$validateArray(value) == false) return undefined;
    let items = $9fc8b212f324f9e3$var$getNumbersForKey(value, key);
    let result = Math.min(...items);
    return result;
}
function $9fc8b212f324f9e3$var$getMinRecord(value, key) {
    value = $9fc8b212f324f9e3$var$ensureArray(value);
    if ($9fc8b212f324f9e3$var$validateArray(value) == false) return undefined;
    let result = $9fc8b212f324f9e3$var$getMin(value, key);
    let unitCode = $9fc8b212f324f9e3$var$getUnitCodesForKey(value, key);
    return $9fc8b212f324f9e3$var$getStatsRecord("minValue", key, result, unitCode);
//count, median, marginOfError, maxValue, minValue
}
function $9fc8b212f324f9e3$var$getN(value, key) {
    value = $9fc8b212f324f9e3$var$ensureArray(value);
    if ($9fc8b212f324f9e3$var$validateArray(value) == false) return undefined;
    let items = $9fc8b212f324f9e3$var$getNumbersForKey(value, key);
    let result = items.length;
    return result;
}
function $9fc8b212f324f9e3$var$getNRecord(value, key) {
    value = $9fc8b212f324f9e3$var$ensureArray(value);
    if ($9fc8b212f324f9e3$var$validateArray(value) == false) return undefined;
    let result = $9fc8b212f324f9e3$var$getN(value, key);
    let unitCode = $9fc8b212f324f9e3$var$getUnitCodesForKey(value, key);
    return $9fc8b212f324f9e3$var$getStatsRecord("count", key, result, unitCode);
//count, median, marginOfError, maxValue, minValue
}
function $9fc8b212f324f9e3$var$getSum(value, key) {
    value = $9fc8b212f324f9e3$var$ensureArray(value);
    if ($9fc8b212f324f9e3$var$validateArray(value) == false) return undefined;
    let items = $9fc8b212f324f9e3$var$getNumbersForKey(value, key);
    let result = items.reduce((partialSum, a)=>partialSum + a, 0);
    return result;
}
function $9fc8b212f324f9e3$var$getSumRecord(value, key) {
    value = $9fc8b212f324f9e3$var$ensureArray(value);
    if ($9fc8b212f324f9e3$var$validateArray(value) == false) return undefined;
    let result = $9fc8b212f324f9e3$var$getSum(value, key);
    let unitCode = $9fc8b212f324f9e3$var$getUnitCodesForKey(value, key);
    return $9fc8b212f324f9e3$var$getStatsRecord("sum", key, result, unitCode);
//count, median, marginOfError, maxValue, minValue
}
function $9fc8b212f324f9e3$var$getAverage(value, key) {
    value = $9fc8b212f324f9e3$var$ensureArray(value);
    if ($9fc8b212f324f9e3$var$validateArray(value) == false) return undefined;
    let items = $9fc8b212f324f9e3$var$getNumbersForKey(value, key);
    if (items.length == 0) return 0;
    let sumAll = items.reduce((partialSum, a)=>partialSum + a, 0);
    let result = sumAll / items.length;
    return result;
}
function $9fc8b212f324f9e3$var$getAverageRecord(value, key) {
    value = $9fc8b212f324f9e3$var$ensureArray(value);
    if ($9fc8b212f324f9e3$var$validateArray(value) == false) return undefined;
    let result = $9fc8b212f324f9e3$var$getAverage(value, key);
    let unitCode = $9fc8b212f324f9e3$var$getUnitCodesForKey(value, key);
    return $9fc8b212f324f9e3$var$getStatsRecord("average", key, result, unitCode);
//count, median, marginOfError, maxValue, minValue
}
function $9fc8b212f324f9e3$var$getStandardDeviation(value, key) {
    value = $9fc8b212f324f9e3$var$ensureArray(value);
    if ($9fc8b212f324f9e3$var$validateArray(value) == false) return undefined;
    let items = $9fc8b212f324f9e3$var$getNumbersForKey(value, key);
    if (items.length == 0) return 0;
    let n = items.length;
    let mean = items.reduce((a, b)=>a + b) / n;
    let result = Math.sqrt(items.map((x)=>Math.pow(x - mean, 2)).reduce((a, b)=>a + b) / n);
    return result;
}
function $9fc8b212f324f9e3$var$getStandardDeviationRecord(value, key) {
    value = $9fc8b212f324f9e3$var$ensureArray(value);
    if ($9fc8b212f324f9e3$var$validateArray(value) == false) return undefined;
    let result = $9fc8b212f324f9e3$var$getStandardDeviation(value, key);
    let unitCode = $9fc8b212f324f9e3$var$getUnitCodesForKey(value, key);
    return $9fc8b212f324f9e3$var$getStatsRecord("marginOfError", key, result, unitCode);
}
// -----------------------------------------------------
//  Statistical record 
// -----------------------------------------------------
function $9fc8b212f324f9e3$var$getStatsRecord(statType, property, value, unitCode) {
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


const $18d56086b081e2cc$export$15c85b69ec02b47c = {
    isDate: $18d56086b081e2cc$var$validateDate,
    validateDate: $18d56086b081e2cc$var$validateDate,
    toText: $18d56086b081e2cc$var$toText,
    toDate: $18d56086b081e2cc$var$toDate,
    duration: $18d56086b081e2cc$var$getDuration,
    getDuration: $18d56086b081e2cc$var$getDuration,
    durationRecord: $18d56086b081e2cc$var$getDurationRecord,
    getDurationRecord: $18d56086b081e2cc$var$getDurationRecord
};
function $18d56086b081e2cc$var$validateDate(value) {
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
        var d = new Date(value);
        if (d.month && d.month != null) return d;
        else return undefined;
    } catch (error) {
        return undefined;
    }
}
function $18d56086b081e2cc$var$getDuration(date1, date2) {
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
    if (record_type == "Person") {
        if (value["givenName"] && value["familyName"]) return `${value["givenName"]} ${value["familyName"]}`;
    }
    record_type;
    let result = `${value["@type"]}/${value["@id"]}`;
    return result;
}







const $5abff2bf4ee17cbb$export$da17952f31714a6e = {
    toText: $5abff2bf4ee17cbb$var$toText,
    getType: $5abff2bf4ee17cbb$var$getType,
    innerValuesToText: $5abff2bf4ee17cbb$var$innerValuesToText,
    valuesToText: $5abff2bf4ee17cbb$var$innerValuesToText
};
function $5abff2bf4ee17cbb$var$toText(value) {
    if (!value || value == null || value == [] || value == {}) return "";
    if ((0, $9a2a3d97de4234f5$export$c24b4489b93ad8cb).isThing(value)) return (0, $9a2a3d97de4234f5$export$c24b4489b93ad8cb).toText(value);
    else if ((0, $18d56086b081e2cc$export$15c85b69ec02b47c).isDate(value)) return (0, $18d56086b081e2cc$export$15c85b69ec02b47c).toText(value);
    else if ((0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).isArray(value)) return (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).toText(value);
    else if ((0, $135f0c356f6f593e$export$96be39e8128f5891).isNumber(value)) return (0, $135f0c356f6f593e$export$96be39e8128f5891).toText(value);
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


let $c34dce0368b8abc6$var$MAX_WIDTH = 30;
function $c34dce0368b8abc6$export$7642ec6da7b10b(records, keys, headers) {
    let content = "";
    // Duplicate records
    records = JSON.parse(JSON.stringify(records));
    // Ensure array
    records = (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00).toArray(records);
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
            let c = record?.[key] || "";
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







const $2974f6a85c45961a$export$b881b526c33ee854 = {
    getDomain: $2974f6a85c45961a$var$getDomain,
    domain: $2974f6a85c45961a$var$getDomain
};
function $2974f6a85c45961a$var$isUrl(value) {
    if (!value || value == null) return false;
}
function $2974f6a85c45961a$var$getDomain(value) {}


const $03899943a5d4eab2$export$94a70d284fcdf065 = {
    get: $03899943a5d4eab2$var$getPropertyValueFromDot,
    getPropertyValueFromDot: $03899943a5d4eab2$var$getPropertyValueFromDot,
    set: $03899943a5d4eab2$var$setPropertyValueFromDot,
    setPropertyValueFromDot: $03899943a5d4eab2$var$setPropertyValueFromDot,
    flatten: $03899943a5d4eab2$var$objectToDotNotation,
    objectToDotNotation: $03899943a5d4eab2$var$objectToDotNotation
};
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


0, $03899943a5d4eab2$export$94a70d284fcdf065;
const $53bcb33ef2023ce8$export$f936470337fdc8d0 = {
    array: (0, $9fc8b212f324f9e3$export$4736c2d1b0001d00),
    date: (0, $18d56086b081e2cc$export$15c85b69ec02b47c),
    json: (0, $03899943a5d4eab2$export$94a70d284fcdf065),
    object: (0, $1fd01b1ecffa6019$export$42f247ccf9267abd),
    textTable: (0, $c34dce0368b8abc6$export$7642ec6da7b10b),
    thing: (0, $9a2a3d97de4234f5$export$c24b4489b93ad8cb),
    Timer: (0, $6e423e9502adc63f$export$7729b59bd32e7982),
    url: (0, $2974f6a85c45961a$export$b881b526c33ee854)
};


const $cf838c15c8b009ba$export$f936470337fdc8d0 = (0, $53bcb33ef2023ce8$export$f936470337fdc8d0);


export {$cf838c15c8b009ba$export$f936470337fdc8d0 as krakenHelpers};
//# sourceMappingURL=main.js.map
