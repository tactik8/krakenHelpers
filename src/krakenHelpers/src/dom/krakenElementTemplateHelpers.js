import { krakenBaseHelpers as h} from '../base/krakenBaseHelpers.js'


export const krakenElementTemplateHelpers = {
    get: renderTemplate,
    replacePlaceholders: renderTemplate,
    render: renderTemplate,
};

function renderTemplate(template, record){



   // let renderedTemplate1 = _renderTemplate(template, record)

    //return renderedTemplate1
}



function _renderTemplate(template, record){

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
        
       
        // 
        //let newContent = 

        if(tag.type =='iterator'){
            
        
            content = `
                ${String(tag.content.before || '')} 
                    <span class="krProperty" data-propertyID="${tag.value || ''}"> 
                        ${String(tag.content.between || '')} 
                    </span> 
                ${String(tag.content.after || '')}
                `
        } else {

            content = `
            ${String(tag.content.before || '')} 
                
                    ${h.stringOperation.execute(record, tag.value) || ''}
               
            ${String(tag.content.after || '')}
            `
            
        }
        
        
        console.log('tag', tag)
        tag = h.tag.get(content)
        
    }


    content = content.trim()
    
    
    return content

}



