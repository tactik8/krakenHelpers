



export const krakenElementStyleHelpers = {

    add: addStyle

    
}



function addStyle(content){
    /**
     * Add style to document
     * @param {string} content
     * @returns {void}
     */

    
    var styleSheet = document.createElement("style")
    styleSheet.textContent = content
    document.head.appendChild(styleSheet)

    
}