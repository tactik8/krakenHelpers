
import { krakenNullHelpers} from "./krakenNullHelpers.js";
import { krakenArrayHelpers} from "./krakenArrayHelpers.js";
import { krakenDotNotationHelpers } from "./krakenDotNotationHelpers.js";
import { krakenNumberHelpers } from "./krakenNumberHelpers.js";
import { krakenJsonHelpers } from "./krakenJsonHelpers.js";
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
}



//import { krakenValueHelpers as v} from '../localization/krakenValueHelpers.js'
let MAX_WIDTH = 30

export function krakenTextTable(records, keys, headers){


    let content = ''
    
    // Duplicate records
    records = JSON.parse(JSON.stringify(records))


    // Build keys from records keys if missing
    if(h.isNull(keys)){
        keys = h.array.getKeys(records)
    }

    
    // If record, convert properties to array
    if(h.array.isArray(records) == false){
        if(h.object.isObject(records) == true){

            let values = []
            let keys = Object.keys(records)
            for(let k of keys){
                let v = records[k]
                v.propertyID = k
                values.push(v)
            }
            records = values
        } 
    }
    

    
    
   
    // Build headers from keys if missing
    if(h.isNull(headers)){
        headers = keys
    }


    // Build new record with only selected keys and values
    let newRecords = []
    for(let r of records){
        let newRecord = {}
        keys.map(k => newRecord[k] = h.dot.get(k, r))
        newRecords.push(newRecord)
    }
    records = newRecords

    
    // Convert values
    //records = v.innerValuesToText(records)
    

    // Get max length for each keys
    let keysLength = {}
    let totalLength = 0

    
    
    for(let i=0; i < keys.length; i++){

        let key = keys[i]
        let header = headers[i]
    
        //let values = h.array.getValuesForKey(records, key)
        let values = records.map(x => x?.[key] || '')

        keysLength[key] = header.length

        for(let v of values){
            let l = v.length
            
            if ( l > keysLength[key] ){
                keysLength[key] = l
            }
        }
        totalLength += keysLength[key] + 2
        
    }

    

    // Build table header

    // Top bar line
    content += `${''.padEnd(totalLength, '-')}`
    content +='\n'

    // Headings
    for(let i=0; i < keys.length; i++){
        let key = keys[i]
        let header = headers[i]
        content += `${header.padEnd(keysLength[key] + 2, ' ')}`
    }
    content +='\n'
    
    for(let key of keys){
        content += `${''.padEnd(keysLength[key] + 2, '-')}`
    }
    content += '\n'

    
    // Build table rows
    for(let record of records){
       
        for(let key of keys){
            
            let c = String(record?.[key] || '' )
            if(c.length > MAX_WIDTH){ c = c.slice(0, MAX_WIDTH -3) + '... '}
            c = c.padEnd(keysLength[key] + 2, ' ')
            content += `${c}`

            
        }
        
        content += '\n'
    }
    

    
    
    content += `${''.padEnd(totalLength, '-')}`
    content += '\n'

    return content
    
}