import { krakenArrayHelpers as ka } from "./krakenArrayHelpers.js";
import { krakenValueHelpers as kv } from "./krakenValueHelpers.js";

export const krakenAnalysisHelpers = {

    analyzeValues: analyzeValues,
    analyze: analyze
};



function analyze(value){

    value = ka.ensureArray(value)
    
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
        analysis.N = ka.getN(value, key)
        analysis.nullN = ka.getNull(value, key)
        analysis.uniqueN = ka.getUniqueN(value, key)
        analysis.min = ka.getMin(value, key);
        analysis.max = ka.getMax(value, key);
        analysis.stddev = ka.getStandardDeviation(value, key);
        
        
    }

    return analysis;
}
