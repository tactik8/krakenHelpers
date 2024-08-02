import { krakenNumberHelpers } from './krakenNumberHelpers.js'
import { krakenObjectHelpers } from './krakenObjectHelpers.js'



export const krakenArrayHelpers = {

    isArray: validateArray,
    validateArray: validateArray,
    toArray: ensureArray,
    ensureArray: ensureArray,
    getKeys: getKeys,
    keys: getKeys,
    getValuesForKey: getValuesForKey,
    getNumbersForKey: getNumbersForKey,
    getMax: getMax,
    getMin: getMin,
    getN: getN,
    getSum: getSum,
    getAverage: getAverage,
    getStandardDeviation: getStandardDeviation,
    stddev: getStandardDeviation,
    getMaxRecord: getMax,
    getMinRecord: getMin,
    getNRecord: getN,
    getSumRecord: getSum,
    getAverageRecord: getAverage,
    getStandardDeviationRecord: getStandardDeviation,
    getStatsRecord: getStatsRecord
    
}


function validateArray(value){

    if(Array.isArray(value)){ return true }
    return false
    
}



function ensureArray(value) {

    if(!value || value == null || value == {}){ return [] }

    if (validateArray(value)) {
        return value;
    } else {
        return [value];
    }
}

function toText(value) {

    if(validateArray(value) == false){ return undefined }

    let result = `[${value.length}]`
    return result
    
}

function getKeys(value){
    if(validateArray(value) == false){ return undefined }
    let keys = []
    for(let v of value){
        for(let k of Object.keys(v)){
            if(!keys.includes(k)){
                keys.push(k)
            }
        }
    }
    keys.sort()
    return keys
}


// -----------------------------------------------------
//  Columns focused methods 
// -----------------------------------------------------


function getValuesForKey(value, key){

    value = ensureArray(value)
    if(validateArray(value) == false){ return undefined }

    let results = []
    for(let v of value){
        let v1 = v?.[key] 
        if(v1){
            results.push(v1)
        }
    }
    return results
    
}

function getNumbersForKey(value, key){
    // Returns array of numbers only for a given k

    value = ensureArray(value)
    
    let items = getValuesForKey(value, key)
    let results = []
    for(let item of items){
        let newItem = krakenNumberHelpers.toNumber(item)
        if(krakenNumberHelpers.isNumber(newItem) == true){
            results.push(newItem)
        }
        if(item?.['@type'] && item?.['@type'] == 'QuantitativeValue'){
            let quantItem = krakenNumberHelpers.toNumber(item?.value)
            if(krakenNumberHelpers.isNumber(quantItem) == true){
                results.push(quantItem)
            }
        }
    }
    return results    
}

function getUnitCodesForKey(value, key){
    // Returns array of numbers only for a given k

    let items = getValuesForKey(value, key)
    let results = []
    for(let item of items){
        if(item?.['@type'] && item?.['@type'] == 'QuantitativeValue'){
            results.push(item.unitCode)
        }
    }
    return results    
}

function getMax(value, key){

    value = ensureArray(value)
    if(validateArray(value) == false){ return undefined }

    let items = getNumbersForKey(value, key)
    
    let result = Math.max(...items)

    return result
    
}

function getMaxRecord(value, key){
    
    value = ensureArray(value)
    if(validateArray(value) == false){ return undefined }

    let result = getMax(value, key)
    let unitCode = getUnitCodesForKey(value, key)

    return getStatsRecord('maxValue', key, result, unitCode)

     //count, median, marginOfError, maxValue, minValue
}



function getMin(value, key){
    
    value = ensureArray(value)
    if(validateArray(value) == false){ return undefined }

    let items = getNumbersForKey(value, key)

    let result = Math.min(...items)

    return result

}

function getMinRecord(value, key){

    value = ensureArray(value)
    if(validateArray(value) == false){ return undefined }

    let result = getMin(value, key)
    let unitCode = getUnitCodesForKey(value, key)

    return getStatsRecord('minValue', key, result, unitCode)

     //count, median, marginOfError, maxValue, minValue
}


function getN(value, key){

    value = ensureArray(value)
    if(validateArray(value) == false){ return undefined }

    let items = getNumbersForKey(value, key)

    let result = items.length

    return result
    
}

function getNRecord(value, key){

    value = ensureArray(value)
    if(validateArray(value) == false){ return undefined }

    let result = getN(value, key)
    let unitCode = getUnitCodesForKey(value, key)

    return getStatsRecord('count', key, result, unitCode)

     //count, median, marginOfError, maxValue, minValue
}

function getSum(value, key){
    
    value = ensureArray(value)
    if(validateArray(value) == false){ return undefined }

    let items = getNumbersForKey(value, key)

    let result = items.reduce((partialSum, a) => partialSum + a, 0);

    return result

}

function getSumRecord(value, key){

    value = ensureArray(value)
    if(validateArray(value) == false){ return undefined }

    let result = getSum(value, key)
    let unitCode = getUnitCodesForKey(value, key)

    return getStatsRecord('sum', key, result, unitCode)

     //count, median, marginOfError, maxValue, minValue
}

function getAverage(value, key){

    value = ensureArray(value)
    if(validateArray(value) == false){ return undefined }

    let items = getNumbersForKey(value, key)

    if(items.length == 0){ return 0 }

    let sumAll = items.reduce((partialSum, a) => partialSum + a, 0);

    let result = sumAll / items.length

    return result
}

function getAverageRecord(value, key){

    value = ensureArray(value)
    if(validateArray(value) == false){ return undefined }

    let result = getAverage(value, key)
    let unitCode = getUnitCodesForKey(value, key)
    
    return getStatsRecord('average', key, result, unitCode)

     //count, median, marginOfError, maxValue, minValue
}


function getStandardDeviation(value, key){

    value = ensureArray(value)
    if(validateArray(value) == false){ return undefined }

    let items = getNumbersForKey(value, key)

    if(items.length == 0){ return 0 }

    let n = items.length
    let mean = items.reduce((a, b) => a + b) / n
    let result =  Math.sqrt(items.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)

    return result
}

function getStandardDeviationRecord(value, key){

    value = ensureArray(value)
    if(validateArray(value) == false){ return undefined }

    let result = getStandardDeviation(value, key)
    let unitCode = getUnitCodesForKey(value, key)

    return getStatsRecord('marginOfError', key, result, unitCode)

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