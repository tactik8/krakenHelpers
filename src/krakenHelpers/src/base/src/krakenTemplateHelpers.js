
import { krakenNullHelpers} from "./krakenNullHelpers.js";
import { krakenArrayHelpers} from "./krakenArrayHelpers.js";
import { krakenDotNotationHelpers } from "./krakenDotNotationHelpers.js";
import { krakenNumberHelpers } from "./krakenNumberHelpers.js";
import { krakenJsonHelpers } from "./krakenJsonHelpers.js";
import { krakenStringOperationHelpers } from "./krakenStringOperationHelpers.js";


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
    stringOperation: krakenStringOperationHelpers
}


export const krakenTemplateHelpers = {
    get: renderTemplate,
    replacePlaceholders: renderTemplate,
    render: renderTemplate,
};


function renderTemplate(template, record){


    template = prepareTemplate(template)

    let renderedTemplate1 = _renderTemplate(template, record)

    return renderedTemplate1
}



function _renderTemplate(template, record, depth = 0){

    /**
     * beforeContent: the content before the opening tag
     * afterContent: the content after the closing tag
     * templateContent: the content in between the tags
     * valueContent: the content replacing the templateContent with actual values
     */


    
    
    let content = template

    let values = record

    // Handle iterations
    let tag = getIterationTag(content)

    while(h.isNotNull(tag)){

        
        let valueContent = ''

        
        //let values = h.dot.get(tag.propertyID, record)
        //let propertyID = tag.contentTag.split('|')
        //values = h.analysis.runOperations(record, tag.contentTag )

        let propertyID = h.stringOperation.get(tag.contentTag )?.[0]?.propertyID || null
        values = h.stringOperation.execute(record, tag.contentTag )
        

        // If record has many values, iterate through each ones
        for(let value of h.toArray(values)){
            let tempRecord = JSON.parse(JSON.stringify(record))
            h.dot.set(tempRecord, propertyID, value)
            valueContent += _renderTemplate(tag.contentWithin, tempRecord, depth += 1)
        }
        content = String(tag.contentBefore) + String(valueContent) + String(tag.contentAfter)

        tag = getIterationTag(content)
    }


    // Handle placeholders 
    tag = getPlaceholderTag(content)


    
    while(h.isNotNull(tag)){

     
        let value = h.stringOperation.execute(record, tag.contentTag )
        if(h.isNull(value)){ value = ''}

        content = String(tag.contentBefore) + String(value) + String(tag.contentAfter)

        tag = getPlaceholderTag(content)
    }

    return content

}




function prepareTemplate(template){


    while(template.includes('{{ ')){
        template = template.replaceAll('{{ ', '{{')
    }
    while(template.includes(' }}')){
        template = template.replaceAll(' }}', '}}')
    }

    return template

}


function getIterationTag(template){
    /**
     * Retrieve iteration tags ({{#xxx}} ... {/xxx}} ) from string
     */

    if(h.isNull(template)) { return null }
    if(!template.includes('{{#')){ return null }
    if(!template.includes('{{/')){ return null }

    let result = {
        "type": 'iteration',
        'contentBefore': '',
        'contentWithin': '',
        'contentAfter': '',
        'contentTag': ''
    }

    // Find first opening tag
    let tagStartPositionStart = template.indexOf('{{#')
    let tagStartPositionEnd = template.indexOf('}}', tagStartPositionStart)


    // Iterate through opening and closing tags to find related closing tag

    let lastPositionStart = tagStartPositionEnd
    let nextOpeningPositionStart
    let nextOpeningPositionEnd
    let tagEndPositionStart
    let tagEndPositionEnd
    let openingTags = 1
    
    while (openingTags > 0){
        
        nextOpeningPositionStart = template.indexOf('{{#', lastPositionStart ) 
        nextOpeningPositionEnd = template.indexOf('}}', nextOpeningPositionStart ) 
        tagEndPositionStart = template.indexOf('{{/', lastPositionStart )
        tagEndPositionEnd = template.indexOf('}}', tagEndPositionStart)

        // Case: No closing tags
        if(tagEndPositionStart == -1){
           return null
        } else
        
        // Case: no more opening tags
        if(nextOpeningPositionStart == -1){
            openingTags = openingTags - 1
            lastPositionStart = tagEndPositionEnd
        } else
            
        // Case: closing tag before next opening tag
        if(tagEndPositionStart < nextOpeningPositionStart){
            openingTags = openingTags - 1
            lastPositionStart = tagEndPositionEnd
        } else

        // Case: opening tag before next closing tag
        if(tagEndPositionStart > nextOpeningPositionStart){
            openingTags = openingTags + 1
            lastPositionStart = nextOpeningPositionEnd
        }

    }

    // 
    
    // Find matching closing tag
    //let tagEndPositionStart = template.indexOf('{{/', tagStartPositionEnd)
    //let tagEndPositionEnd = template.indexOf('}}', tagEndPositionStart)

    if(tagStartPositionStart == -1 || tagStartPositionEnd == -1 || tagEndPositionStart == -1 || tagEndPositionEnd == -1){ return null }

    result.contentTag = template.slice(tagStartPositionStart + 3, tagStartPositionEnd)
    result.contentBefore = template.slice(0, tagStartPositionStart)
    result.contentAfter = template.slice(tagEndPositionEnd + 2)
    result.contentWithin = template.slice(tagStartPositionEnd + 2, tagEndPositionStart -1)

    return result
}

function getPlaceholderTag(template){
    /**
     * Retrieves tags ({{ xxx }} ) from within string
     * 
     */

    if(h.isNull(template)) { return null }
    if(!template.includes('{{')){ return null }
    if(!template.includes('}}')){ return null }

    let result = {
        "type": 'placeholder',
        'propertyID': null,
        'contentBefore': '',
        'contentTag': '',
        'contentAfter': '',
        'commandName': null,    
        'commandPropertyID': null
    }

    let tagPositionStart = template.lastIndexOf('{{')
    let tagPositionEnd = template.indexOf('}}', tagPositionStart)

    if(tagPositionStart == -1 || tagPositionEnd == -1 ){ return null }

    result.contentTag = template.slice(tagPositionStart + 2, tagPositionEnd)
    
    result.contentBefore = template.slice(0, tagPositionStart)
    result.contentAfter = template.slice(tagPositionEnd + 2)

    return result

    
}


