import { krakenArrayHelpers as ka } from "./krakenArrayHelpers.js";
import { krakenValueHelpers as kv } from "./krakenValueHelpers.js";

export const krakenAnalysisHelpers = {

    analyzeValues: analyzeValues,
    analyze: analyze
};



function analyze(value){

    value = ka.ka.ensureArray(value)
    
    let keys = ka.getKeys(value)

    let analysis = {}
    for(let k of keys){
        analysis[k] = analyzeValues(value, k)
    }

    return analysis
}

function analyzeValues(value, key) {
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

    let values = ka.getValuesForKey(value, key);

    for (let v of values) {
        
        // Get type
        let t = kv.getType(v)
        analysis.types[t] = (analysis.types[t] || 0) + 1;

        if(t && t != null){
            let s = analysis.type
            if(s && s != null && s != t){
                analysis.type = 'na'
            } else {
                analysis.type = t
            }
        }

        
        // Get schema type
        let tt = kv.getTypeSchemaOrg(v)
        analysis.typesSchemaOrg[tt] = (analysis.typesSchemaOrg[tt] || 0) + 1;

        if(tt && tt != null){
            let s = analysis.typeSchemaOrg
            if(s && s != null && s != tt){
                analysis.typeSchemaOrg = 'na'
            } else {
                analysis.typeSchemaOrg = tt
            }
        }
        
        // Get value
        let newV = v;
        if (newV["@type"]) {
            newV = `${newV["@type"]}/${newV["@id"]}`;
        }
        analysis.values[newV] = (analysis.values[newV] || 0) + 1;

        // get min / max
        analysis.N = getN(value, key)
        analysis.nullN = getNull(value, key)
        analysis.uniqueN = ka.getUniqueN(value, key)
        analysis.min = getMin(value, key);
        analysis.max = getMax(value, key);
        analysis.stddev = getStandardDeviation(value, key);
        
        
    }

    return analysis;
}





function getMax(value, key){

    value = ka.ensureArray(value)
    if(ka.validateArray(value) == false){ return undefined }

    let items = ka.getNumbersForKey(value, key)

    let result = Math.max(...items)

    return result

}

function getMaxRecord(value, key){

    value = ka.ensureArray(value)
    if(ka.validateArray(value) == false){ return undefined }

    let result = getMax(value, key)
    let unitCode = ka.getUnitCodesForKey(value, key)

    return getStatsRecord('maxValue', key, result, unitCode)

     //count, median, marginOfError, maxValue, minValue
}



function getMin(value, key){

    value = ka.ensureArray(value)
    if(ka.validateArray(value) == false){ return undefined }

    let items = ka.getNumbersForKey(value, key)

    let result = Math.min(...items)

    return result

}

function getMinRecord(value, key){

    value = ka.ensureArray(value)
    if(ka.validateArray(value) == false){ return undefined }

    let result = getMin(value, key)
    let unitCode = ka.getUnitCodesForKey(value, key)

    return getStatsRecord('minValue', key, result, unitCode)

     //count, median, marginOfError, maxValue, minValue
}


function getN(value, key){

    value = ka.ensureArray(value)
    if(ka.validateArray(value) == false){ return undefined }

    let items = ka.getNumbersForKey(value, key)

    let result = items.length

    return result

}

function getNRecord(value, key){

    value = ka.ensureArray(value)
    if(ka.validateArray(value) == false){ return undefined }

    let result = getN(value, key)
    let unitCode = ka.getUnitCodesForKey(value, key)

    return getStatsRecord('count', key, result, unitCode)

     //count, median, marginOfError, maxValue, minValue
}

function getSum(value, key){

    value = ka.ensureArray(value)
    if(ka.validateArray(value) == false){ return undefined }

    let items = ka.getNumbersForKey(value, key)

    let result = items.reduce((partialSum, a) => partialSum + a, 0);

    return result

}

function getSumRecord(value, key){

    value = ka.ensureArray(value)
    if(ka.validateArray(value) == false){ return undefined }

    let result = getSum(value, key)
    let unitCode = ka.getUnitCodesForKey(value, key)

    return getStatsRecord('sum', key, result, unitCode)

     //count, median, marginOfError, maxValue, minValue
}

function getAverage(value, key){

    value = ka.ensureArray(value)
    if(ka.validateArray(value) == false){ return undefined }

    let items = ka.getNumbersForKey(value, key)

    if(items.length == 0){ return 0 }

    let sumAll = items.reduce((partialSum, a) => partialSum + a, 0);

    let result = sumAll / items.length

    return result
}

function getAverageRecord(value, key){

    value = ka.ensureArray(value)
    if(ka.validateArray(value) == false){ return undefined }

    let result = getAverage(value, key)
    let unitCode = ka.getUnitCodesForKey(value, key)

    return getStatsRecord('average', key, result, unitCode)

     //count, median, marginOfError, maxValue, minValue
}


function getStandardDeviation(value, key){

    value = ka.ensureArray(value)
    if(ka.validateArray(value) == false){ return undefined }

    let items = ka.getNumbersForKey(value, key)

    if(items.length == 0){ return 0 }

    let n = items.length
    let mean = items.reduce((a, b) => a + b) / n
    let result =  Math.sqrt(items.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)

    return result
}

function getStandardDeviationRecord(value, key){

    value = ka.ensureArray(value)
    if(ka.validateArray(value) == false){ return undefined }

    let result = getStandardDeviation(value, key)
    let unitCode = ka.getUnitCodesForKey(value, key)

    return getStatsRecord('marginOfError', key, result, unitCode)

}

function getNull(value, key){

    value = ka.ensureArray(value)
    if(ka.validateArray(value) == false){ return undefined }

    let nullValues = 0
    for(let v of value){


        if ((!v || v == null || v == "" || v == {} || v == []) && v!== 0){
            nullValues + 1
        }
    }

    return nullValues

}

function getUniqueN(value, key){

    value = ka.ensureArray(value)
    if(ka.validateArray(value) == false){ return undefined }


    let uniqueValues = [...new Set(value)];

    let result = uniqueValues.length


    return result

}

// -----------------------------------------------------
//  Statistical record 
// -----------------------------------------------------

function getStatsRecord(statType, property, value, unitCode){


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
            "measuredProperty": {"@id": property },
            "statType": {"@id": statType},
            "constrainingProperty": []
        },
        "observationAbout": {},
        "value": value,
        "unitCode": unit
    }

    return record

}