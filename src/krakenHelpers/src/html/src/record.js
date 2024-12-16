
import { krakenBaseHelpers as h} from '../../base/krakenBaseHelpers.js'


export function record(record){

    let listRecord = {
        '@type': record["@type"],
        '@id': record["@id"],
        itemListElement: []
    }


    let innerContent = ''
    for(let k of Object.keys(record)){

        let c =  ` <dt class="col-sm-3">${k}</dt>`

        for(let v of h.toArray(record[k])){

            if(h.isNotNull(v?.['@type'])){
                v = record(v)
            } 
            c +=  ` <dd class="col-sm-9">${record[k]}</dd>`
            
        }
        innerContent += c

    }


    let content = `

        <dl class="row">
            ${innerContent}
        </dl>    
    
    `

    

    return content

    
}