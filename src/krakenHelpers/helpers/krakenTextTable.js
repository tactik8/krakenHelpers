
import { krakenArrayHelpers } from './krakenArrayHelpers.js'

import { krakenDateHelpers } from './krakenDateHelpers.js'
import { krakenThingHelpers } from './krakenThingHelpers.js'
import { krakenValueHelpers } from './krakenValueHelpers.js'
import { krakenObjectHelpers } from './krakenObjectHelpers.js'

import { krakenNullHelpers as h} from './krakenNullHelpers.js'


let MAX_WIDTH = 30

export function krakenTextTable(records, keys, headers){


    let content = ''
    
    // Duplicate records
    records = JSON.parse(JSON.stringify(records))

    // If record, convert properties to array
    if(krakenArrayHelpers.isArray(records) == false){
        if(krakenObjectHelpers.isObject(records) == true){

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
    

    
    // Build keys from records keys if missing
    if(h.isNull(keys)){
        keys = krakenArrayHelpers.getKeys(records)
    }
   
    // Build headers from keys if missing
    if(h.isNull(headers)){
        headers = keys
    }

    // Convert values
    records = krakenValueHelpers.innerValuesToText(records)
    

    // Get max length for each keys
    let keysLength = {}
    let totalLength = 0
    
    for(let i=0; i < keys.length; i++){

        let key = keys[i]
        let header = headers[i]
    
        let values = krakenArrayHelpers.getValuesForKey(records, key)
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