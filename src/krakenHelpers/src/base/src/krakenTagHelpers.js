
import { krakenDateHelpers } from "./krakenDateHelpers.js";
import { krakenNullHelpers} from './krakenNullHelpers.js'
import { krakenDotNotationHelpers } from "./krakenDotNotationHelpers.js";


const h = {
    isNull: krakenNullHelpers.isNull,
    null: krakenNullHelpers
}



/**
 * Returns records with content of tags
 *
 * record = {
 *    content: {
 *        before: xxx
 *        between: xxx
 *        after: xxx
 *     },
 *     tag: {
 *         name: xxx
 *         type: xxx
 *         value: xxx,
 *         children: []
 *     }
 * }
 */

export const krakenTagHelpers = {
    get: getTag
}

function getTag(str){
    /**
     * Returns first top level tag
     * @param {String} str
     * @returns {Object}
     * 
     * 
     */

    str = prepareTemplate(str)

    return getIterationTag(str) || getPlaceholderTag(str) || null
    
    
}


function getIterationTag(template){
    /**
     * Retrieve iteration tags ({{#xxx}} ... {/xxx}} ) from string
     */

    if(h.isNull(template)) { return null }
    if(!template.includes('{{#')){ return null }
    if(!template.includes('{{/')){ return null }

    let result = {
        "content": {
            "before": "",
            "between": "",
            "after": ""
        },
        "type": null,
        "value": null
        
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

    
    result.value = template.slice(tagStartPositionStart + 3, tagStartPositionEnd)
    result.content.before = template.slice(0, tagStartPositionStart)
    result.content.after = template.slice(tagEndPositionEnd + 2)
    result.content.between = template.slice(tagStartPositionEnd + 2, tagEndPositionStart -1)
    result.type =  'iterator' 

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
        "content": {
            "before": "",
            "between": "",
            "after": ""
        },
        "type": null,
        "value": null

    }


    let tagPositionStart = template.lastIndexOf('{{')
    let tagPositionEnd = template.indexOf('}}', tagPositionStart)

    if(tagPositionStart == -1 || tagPositionEnd == -1 ){ return null }


    result.content.before = template.slice(0, tagPositionStart)
    result.content.after = template.slice(tagPositionEnd + 2)
    result.content.between = null
    result.value = template.slice(tagPositionStart + 2, tagPositionEnd)
    result.type = 'value'
    
    return result


}



function prepareTemplate(template){


    while(template.includes('{{ ')){
        template = template.replaceAll('{{ ', '{{')
    }
    while(template.includes(' }}')){
        template = template.replaceAll(' }}', '}}')
    }
    while(template.includes('{{# ')){
        template = template.replaceAll('{{# ', '{{#')
    }
    while(template.includes('{{/ ')){
        template = template.replaceAll('{{/ ', '{{/')
    }


    return template

}