import { krakenBaseHelpers as h} from '../base/krakenBaseHelpers.js'


export const krakenElementTemplateHelpers = {
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

    //

    let iterators = []

    // -----------------------------------------------------
    //  Handle iterations 
    // -----------------------------------------------------


    let tag = h.tag.get(content)

    while(h.isNotNull(tag)){


        
        // Add to list of iterators
        iterators.push('tag1', tag.propertyID)

        //
        
        let valueContent = `<span class="krProperty" data-propertyID="${tag.propertyID}">`
        
        content = String(tag.content.before) + String(valueContent) + String(tag.content.after)

        tag = getLastStartIterationTag(content)
    }


    tag = getFirstEndIterationTag(content)

    while(h.isNotNull(tag)){

        let valueContent = `</span>`
        
        content = String(tag.contentBefore) + String(valueContent) + String(tag.contentAfter)

        tag = getFirstEndIterationTag(content)
    }


    // -----------------------------------------------------
    //  Handle placeholders 
    // -----------------------------------------------------

    // Handle placeholders 
    tag = getPlaceholderTag(content)
    while(h.isNotNull(tag)){
        

        let valueContent = `<span class="krProperty" data-propertyID="${tag.propertyID}"></span>`

        content = String(tag.contentBefore) + String(valueContent) + String(tag.contentAfter)

        tag = getPlaceholderTag(content)
        
    }
    content = content.trim()
    
    
    return content

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


function getLastStartIterationTag(template){
    /**
     * Get the lowest children of iteration tag {{#xxx}}  
     * @param {String} template
     * @returns {Object} Iteration with propertyID, content before, within and after tag
     */


    if(h.isNull(template)) { return null }
    if(template.includes('{{#') === false){  return null }
   

    let result = {
        "type": 'iteration',
        'propertyID': null,
        'contentBefore': '',
        'contentAfter': ''
    }

    // Gets last iteration tag opening
    let tagPositionStart = template.lastIndexOf('{{#')
    let tagPositionEnd = template.indexOf('}}', tagPositionStart)

   

    // Error handling
    if(tagPositionStart == -1 || tagPositionEnd == -1 ){ return null }

    //
    let tagString = template.slice(tagPositionStart, tagPositionEnd + 2)
    
    // 
    result.propertyID = getPropertyFromTag(tagString)
    result.contentBefore = template.slice(0, tagPositionStart)
    result.contentAfter = template.slice(tagPositionEnd + 2)
  
    return result
}


function getFirstEndIterationTag(template){
    /**
     * Get the lowest children of iteration tag {{#xxx}} {{/xxx}} 
     * @param {String} template
     * @returns {Object} Iteration with propertyID, content before, within and after tag
     */


    if(h.isNull(template)) { return null }
    if(template.includes('{{/') === false){ return null }


    let result = {
        "type": 'iteration',
        'propertyID': null,
        'contentBefore': '',
        'contentAfter': ''
    }

    // Gets last iteration tag opening
    let tagPositionStart = template.indexOf('{{/')
    let tagPositionEnd = template.indexOf('}}', tagPositionStart)



    // Error handling
    if(tagPositionStart == -1 || tagPositionEnd == -1 ){ return null }

    //
    let tagString = template.slice(tagPositionStart, tagPositionEnd + 2)

    // 
    result.propertyID = getPropertyFromTag(tagString)
    result.contentBefore = template.slice(0, tagPositionStart)
    result.contentAfter = template.slice(tagPositionEnd + 2)
   

    return result
}



function getPlaceholderTag(template){
    /**
     * Get the last placeholder tag {{xxx}}
     * @param {String} template
     * @returns {Object} Placeholder with propertyID, content before, within and after tag and commands
     */

    if(h.isNull(template)) { return null }
    if(!template.includes('{{')){ return null }
    if(!template.includes('}}')){ return null }

    let result = {
        "type": 'placeholder',
        'propertyID': null,
        'contentBefore': '',
        'contentWithin': '',
        'contentAfter': '',
        //'commandName': null,    
        // 'commandPropertyID': null
    }

    // Identify first instance of {{ 
    let tagPositionStart = template.lastIndexOf('{{')
    let tagPositionEnd = template.indexOf('}}', tagPositionStart)

    // Error handling
    if(tagPositionStart == -1 || tagPositionEnd == -1 ){ return null }

    // 
    let tagString = template.slice(tagPositionStart, tagPositionEnd + 2)
    
    // Get the propertyID
    result.propertyID = getPropertyFromTag(tagString)
    result.contentBefore = template.slice(0, tagPositionStart)
    result.contentAfter = template.slice(tagPositionEnd + 2)


    return result
    
    // TODO: Review how to address commands, integrate in getVallue of thing instead

    
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


function getPropertyFromTag(tag){
    /**
     * Returns the propertyID from a tag
     * @param {String} tag
     * @returns {String} propertyID
     */

    tag = tag.trim()
    tag = tag.replace('{{#', '')
    tag = tag.replace('{{/', '')
    tag = tag.replace('{{', '')
    tag = tag.replace('}}', '')
    let propertyID = tag.trim()
    return propertyID
}