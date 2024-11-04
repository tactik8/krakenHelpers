


export function record(record){

    let listRecord = {
        '@type': record["@type"],
        '@id': record["@id"],
        itemListElement: []
    }
    
    for(let k of Object.keys()){
        let record = {
            'propertyID': k,
            'value': record[k]
        }
        listRecord.itemListElement.push(record)
    }


    let content =` 
        <dl class="row">
            {{#itemListElement}}
                <dt class="col-sm-3">{{itemListElement.propertyID}}
                </dt>
               
                <dd class="col-sm-9">
                    {{#itemListElement.value}}
                         <dl class="row">
                            {{ itemListElement.value }}
                         </dl>
                     {{/itemListElement.value}}
                </dd>
            {{/itemListElement}}
        </dl>

  <dt class="col-sm-3">Term</dt>
                    
                    `

    return content

    
}