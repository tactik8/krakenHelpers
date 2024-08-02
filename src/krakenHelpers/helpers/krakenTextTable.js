
import { krakenArrayHelpers } from './krakenArrayHelpers.js'

import { krakenDateHelpers } from './krakenDateHelpers.js'
import { krakenThingHelpers } from './krakenThingHelpers.js'
import { krakenValueHelpers } from './krakenValueHelpers.js'



let MAX_WIDTH = 30

export function krakenTextTable(records, keys, headers){


    let content = ''
    
    // Duplicate records
    records = JSON.parse(JSON.stringify(records))

    // Ensure array
    records = krakenArrayHelpers.toArray(records)
    
    // Build keys from records keys if missing
    if(!keys || keys == null){
        keys = krakenArrayHelpers.getKeys(records)
    }
   
    // Build headers from keys if missing
    if(!headers || headers == null){
        headers = keys
    }

    // Convert values
    records = krakenValueHelpers.valuesToText(records)

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
            let c = record?.[key] || ''
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