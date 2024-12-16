
import { krakenNullHelpers} from "./krakenNullHelpers.js";
import { krakenArrayHelpers} from "./krakenArrayHelpers.js";
import { krakenDotNotationHelpers } from "./krakenDotNotationHelpers.js";
import { krakenNumberHelpers } from "./krakenNumberHelpers.js";
import { krakenJsonHelpers } from "./krakenJsonHelpers.js";
import { krakenUuidHelpers } from "./krakenUuidHelpers.js";
import { krakenObjectHelpers } from "./krakenObjectHelpers.js";


const h = {
    null: krakenNullHelpers,
    array: krakenArrayHelpers,
    isNull: krakenNullHelpers.isNull,
    isNotNull: krakenNullHelpers.isNotNull,
    toArray: krakenArrayHelpers.toArray,
    isArray: krakenArrayHelpers.isArray,
    dot: krakenDotNotationHelpers,
    number: krakenNumberHelpers,
    json: krakenJsonHelpers,
    object: krakenObjectHelpers,
    isObject: krakenObjectHelpers.isValid,
    uuid: krakenUuidHelpers
}


export const krakenAnalysisHelpers = {

    analyzeValues: analyzeValues,
    analyze: analyze,
    max: getMax,
    min:getMin,
    n: getN,
    sum: getSum,
    sumProduct: getSumProduct,
    avg: getAverage,
    stdev: getStandardDeviation,
    first: getFirst,
    last: getLast,
    filter: filter,
    getValues: getValues,
    transpose: transpose,
    //runOperations: runOperations
};



function analyze(value){
    /**
     * Analyzes a series of records
     * @param {Object} value
     * @returns {Object} The analyzed value
     * 
     */

    value = h.toArray(value)
    
    let keys = h.array.getKeys(value)

    let analysis = {}
    for(let k of keys){
        analysis[k] = analyzeValues(value, k)
    }

    return analysis
}

function analyzeValues(value, key) {
    /**
     * Analyzes a series of records
     * @param {Object} value
     * @param {String} key
     * @returns {Object} The analyzed value
     */

    
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

    let values = h.array.getValuesForKey(value, key);

    for (let v of values) {
        
        // Get type
        let t = h.value.getType(v)
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
        let tt = h.value.getTypeSchemaOrg(v)
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
        analysis.uniqueN = h.array.getUniqueN(value, key)
        analysis.min = getMin(value, key);
        analysis.max = getMax(value, key);
        analysis.stddev = getStandardDeviation(value, key);
        
        
        
    }

    return analysis;
}



// -----------------------------------------------------
//  Comment 
// -----------------------------------------------------


function getValues(value, key){
    /**
     * Returns values from list of records
     * 
     */


    if(h.isArray(value)){
        return value.map(x => getValues(x, key))
    }

    if(h.isNull(key)){ return value }

    if(h.isNull(value)){ return null }
    

    let result = h.dot.get(key, value)
    
    return result
    
}


function transpose(record, key){
    /**
     * Converts a record to list of PVs
     * 
     */


    if(h.isArray(record)){
        return record.map(x => transpose(x))
    }


    record = JSON.parse(JSON.stringify(record))


    if(h.isNull(key)){
        
        return recordToPropertyValue(record)
    }

    let v = getValues(record, key)

    let pvs = recordToPropertyValue(v)

    let result = h.dot.set(record, key, pvs)
    
    return result
    
}

function recordToPropertyValue(record){
    /**
     * Convert record to list of pv
     * 
     */

    if(h.isArray(record)){
        return record.map(x => recordToPropertyValue(x))
    }


    if(!h.isObject(record)){
        console.log('ERROR - not an object', record)
        return record
    }

    
    let pvs = []
    for(let k in record){
        
        let pv = {
            "@type": "PropertyValue",
            "@id": h.uuid.new(),
            "propertyID": k,
            "value": record[k]
        }
        pvs.push(pv)
    }
    
    return pvs
    
}



function filter(value, conditions){
    /**
     * Filters a series of records
     * @param {Object} value
     * @param {Object} conditions
     * @returns {Object} The filtered value
     * 
     */

    // Convert string to conditions (key=bob1 -> {'key': 'bob1'})

  
    if(typeof conditions == 'string'){


        
        let newConditions = {}
        newConditions[conditions.split('=')?.[0]] = conditions.split('=')?.[1]
        conditions = newConditions
    }

    let filteredItems = []
    for(let v of h.array.toArray(value)){

        let passes = true
        for(let c in conditions){

            let v1 = h.dot.get(c, v)
            let c1 = conditions[c]
            
            let operation = 'eq'
           
            
            if(c1.split(' ')?.[0] == 'ne'){
                c1 = c1.slice(3)
                operation = 'ne'
            }

            if(c1.split(' ')?.[0] == 'gt'){
                c1 = c1.slice(3)
                operation = 'gt'
            }

            if(c1.split(' ')?.[0] == 'lt'){
                c1 = c1.slice(3)
                operation = 'lt'
            }

            if(c1.split(' ')?.[0] == 'ge'){
                c1 = c1.slice(3)
                operation = 'ge'
            }

            if(c1.split(' ')?.[0] == 'le'){
                c1 = c1.slice(3)
                operation = 'le'
            }

            if(c1.split(' ')?.[0] == 'isNull'){
                c1 = c1.slice(7)
                operation = 'isNull'
            }

            if(c1.split(' ')?.[0] == 'notNull'){
                c1 = c1.slice(7)
                operation = 'notNull'
            }
        
            
            
          

            if(operation == 'eq'){
                if((v1 == c1) == false){
                    passes = false
                    break
                }
            }

            if(operation == 'ne'){
                if((v1 != c1) == false){
                    passes = false
                    break
                }
            }

            if(operation == 'gt'){
                if(!(v1 > c1)){
                    passes = false
                    break
                }
            }

            if(operation == 'lt'){
                if(!(v1 < c1)){
                    passes = false
                    break
                }
            }

            if(operation == 'ge'){
                if(!(v1 >= c1)){
                    passes = false
                    break
                }
            }

            if(operation == 'le'){
                if(!(v1 <= c1)){
                    passes = false
                    break
                }
            }

            if(operation == 'notNull'){
                if(!(h.isNotnull(v1))){
                    passes = false
                    break
                }
            }

            if(operation == 'isNull'){
                if(!(h.isNull(v1))){
                    passes = false
                    break
                }
            }

            
            
        }
        if(passes){
            filteredItems.push(v)
        }
        
    }

    return filteredItems
    
}

function getFirst(value, key){

    value = h.array.toArray(value)
    if(h.array.isArray(value) == false){ return undefined }

    let items = h.array.getValuesForKey(value, key)
    items = h.array.toArray(items)
    
    let [result] = items.slice(0)


    return result

}


function getLast(value, key){

    value = h.array.toArray(value)
    if(h.array.isArray(value) == false){ return undefined }

    let items = h.array.getValuesForKey(value, key)
    items = h.array.toArray(items)

    let [result] = items.slice(-1)


    return result


}


function getMax(value, key){

    value = h.array.toArray(value)
    if(h.array.isArray(value) == false){ return undefined }

    let items = h.array.getNumbersForKey(value, key)

    let result = Math.max(...items)

    return result

}

function getMaxRecord(value, key){

    value = h.array.toArray(value)
    if(h.array.isArray(value) == false){ return undefined }

    let result = getMax(value, key)
    let unitCode = h.array.getUnitCodesForKey(value, key)

    return getStatsRecord('maxValue', key, result, unitCode)

     //count, median, marginOfError, maxValue, minValue
}



function getMin(value, key){

    value = h.array.toArray(value)
    if(h.array.isArray(value) == false){ return undefined }

    let items = h.array.getNumbersForKey(value, key)

    let result = Math.min(...items)

    return result

}

function getMinRecord(value, key){

    value = h.array.toArray(value)
    if(h.array.isArray(value) == false){ return undefined }

    let result = getMin(value, key)
    let unitCode = h.array.getUnitCodesForKey(value, key)

    return getStatsRecord('minValue', key, result, unitCode)

     //count, median, marginOfError, maxValue, minValue
}


function getN(value, key){

    value = h.array.toArray(value)
    if(h.array.isArray(value) == false){ return undefined }

   
    let items = h.array.getValuesForKey(value, key)
    let result = items.length

    
    return result

}

function getNRecord(value, key){

    value = h.array.toArray(value)
    if(h.array.isArray(value) == false){ return undefined }

    let result = getN(value, key)
    let unitCode = h.array.getUnitCodesForKey(value, key)

    return getStatsRecord('count', key, result, unitCode)

     //count, median, marginOfError, maxValue, minValue
}

function getSum(value, key){

    value = h.array.toArray(value)
    if(h.array.isArray(value) == false){ return undefined }

    let items = h.array.getNumbersForKey(value, key)

    let result = items.reduce((partialSum, a) => partialSum + a, 0);

    return result

}


function getSumProduct(value, key1, key2, sigFig=2){
    /**
     * key 2 is defined from key 1 if absent
     */

    if(h.isNull(key2)){
        key2 = key1.split('_')[1]
        key1 = key1.split('_')[0]
    }

    value = h.array.toArray(value)
    if(h.array.isArray(value) == false){ return undefined }

    let result = 0
    for(let i=0; i< value.length; i++ ){
        let value1 = h.dot.get(value[i], key1)
        let value2 = h.dot.get(value[i], key2)
        if(h.number.isValid(value1) && h.number.isValid(value2)){
            let v = value1 * value2
            result += h.number.round(v, sigFig) 
            
        } 
    }
    
    return result

}

function getSumRecord(value, key){

    value = h.array.toArray(value)
    if(h.array.isArray(value) == false){ return undefined }

    let result = getSum(value, key)
    let unitCode = h.array.getUnitCodesForKey(value, key)

    return getStatsRecord('sum', key, result, unitCode)

     //count, median, marginOfError, maxValue, minValue
}

function getAverage(value, key){

    value = h.array.toArray(value)
    if(h.array.isArray(value) == false){ return undefined }

    let items = h.array.getNumbersForKey(value, key)

    if(items.length == 0){ return 0 }

    let sumAll = items.reduce((partialSum, a) => partialSum + a, 0);

    let result = sumAll / items.length

    return result
}

function getAverageRecord(value, key){

    value = h.array.toArray(value)
    if(h.array.isArray(value) == false){ return undefined }

    let result = getAverage(value, key)
    let unitCode = h.array.getUnitCodesForKey(value, key)

    return getStatsRecord('average', key, result, unitCode)

     //count, median, marginOfError, maxValue, minValue
}


function getStandardDeviation(value, key){

    value = h.array.toArray(value)
    if(h.array.isArray(value) == false){ return undefined }

    let items = h.array.getNumbersForKey(value, key)

    if(items.length == 0){ return 0 }

    let n = items.length
    let mean = items.reduce((a, b) => a + b) / n
    let result =  Math.sqrt(items.map(x => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n)

    return result
}

function getStandardDeviationRecord(value, key){

    value = h.array.toArray(value)
    if(h.array.isArray(value) == false){ return undefined }

    let result = getStandardDeviation(value, key)
    let unitCode = h.array.getUnitCodesForKey(value, key)

    return getStatsRecord('marginOfError', key, result, unitCode)

}

function getNull(value, key){

    value = h.array.toArray(value)
    if(h.array.isArray(value) == false){ return undefined }

    let nullValues = 0
    for(let v of value){


        if ((!v || v == null || v == "" || v == {} || v == []) && v!== 0){
            nullValues + 1
        }
    }

    return nullValues

}

function getUniqueN(value, key){

    value = h.array.toArray(value)
    if(h.array.isArray(value) == false){ return undefined }


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