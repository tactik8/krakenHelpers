import { krakenHelpersLight as h } from "../krakenHelpersLight.js";
import { krakenAnalysisHelpers } from "./krakenAnalysisHelpers.js";

export const krakenTemplateLiveHelpers = {
    get: renderTemplate,
    replacePlaceholders: renderTemplate,
    render: renderTemplate,
};

function renderTemplate(template){


    template = prepareTemplate(template)

    let renderedTemplate1 = _renderTemplate(template)

    return renderedTemplate1
}



function _renderTemplate(template){

    /**
     * beforeContent: the content before the opening tag
     * afterContent: the content after the closing tag
     * templateContent: the content in between the tags
     * valueContent: the content replacing the templateContent with actual values
     */


    let content = template


    // Handle iterations
    let tag = getIterationTag(content)

    while(h.isNotNull(tag)){

        let valueContent = ''

        let items = tag.propertyID.split('.')
        for(let item of items){
            valueContent += `<span class="krProperty" data-propertyID="${item}">`

        }

        valueContent += tag.contentWithin

        for(let item of items){
            valueContent += `</span>`
        }

        content = String(tag.contentBefore) + String(valueContent) + String(tag.contentAfter)

        tag = getIterationTag(content)
    }


    // Handle placeholders 
    tag = getPlaceholderTag(content)
    while(h.isNotNull(tag)){

        let valueContent = ''

        let items = tag.propertyID.split('.')
        for(let item of items){
            valueContent += `<span class="krProperty" data-propertyID="${item}">`
        }


        for(let item of items){
            valueContent += `</span>`
        }

        content = String(tag.contentBefore) + String(valueContent) + String(tag.contentAfter)

        
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

    if(h.isNull(template)) { return null }
    if(!template.includes('{{#')){ return null }
    if(!template.includes('{{/')){ return null }

    let result = {
        "type": 'iteration',
        'propertyID': null,
        'contentBefore': '',
        'contentWithin': '',
        'contentAfter': ''
    }

    let tagStartPositionStart = template.lastIndexOf('{{#')
    let tagStartPositionEnd = template.indexOf('}}', tagStartPositionStart)
    let tagEndPositionStart = template.indexOf('{{/', tagStartPositionEnd)
    let tagEndPositionEnd = template.indexOf('}}', tagEndPositionStart)

    if(tagStartPositionStart == -1 || tagStartPositionEnd == -1 || tagEndPositionStart == -1 || tagEndPositionEnd == -1){ return null }

    result.propertyID = template.slice(tagStartPositionStart + 3, tagStartPositionEnd)
    result.contentBefore = template.slice(0, tagStartPositionStart)
    result.contentAfter = template.slice(tagEndPositionEnd + 2)
    result.contentWithin = template.slice(tagStartPositionEnd + 2, tagEndPositionStart -1)

    return result
}

function getPlaceholderTag(template){

    if(h.isNull(template)) { return null }
    if(!template.includes('{{')){ return null }
    if(!template.includes('}}')){ return null }

    let result = {
        "type": 'placeholder',
        'propertyID': null,
        'contentBefore': '',
        'contentWithin': '',
        'contentAfter': '',
        'commandName': null,    
        'commandPropertyID': null
    }

    let tagPositionStart = template.lastIndexOf('{{')
    let tagPositionEnd = template.indexOf('}}', tagPositionStart)

    if(tagPositionStart == -1 || tagPositionEnd == -1 ){ return null }

    result.propertyID = template.slice(tagPositionStart + 2, tagPositionEnd)
    result.contentBefore = template.slice(0, tagPositionStart)
    result.contentAfter = template.slice(tagPositionEnd + 2)


    // Separate commands from property ID
    let propertyString = result.propertyID
    propertyString.replaceAll('||', '|')
    let commandNameStartPosition = propertyString.indexOf('|')
    let commandPropertyIDPosition = result.propertyID.indexOf(':', commandNameStartPosition + 1)

    if(commandNameStartPosition == -1 ){ 
        return result 
    }

    result.propertyID = propertyString.slice(0, commandNameStartPosition)
    result.commandName = propertyString.slice(commandNameStartPosition + 1, commandPropertyIDPosition)
    result.commandPropertyID = propertyString.slice(commandPropertyIDPosition + 1)

    result.propertyID = result.propertyID.trim()
    result.commandName = result.commandName.trim()
    result.commandPropertyID = result.commandPropertyID.trim()

    return result
}


