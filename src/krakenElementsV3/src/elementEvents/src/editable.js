



export const editable = {
    initEditable: initEditable,
}


function initEditable(controller){
    /**
     * Makes a div editable, saves content if it has changed
     */
    controller.element.addEventListener('click', event =>{
        event.preventDefault();

        let initialContent = controller.element.innerHTML;
        
        controller.element.contentEditable = true;
        controller.element.focus();
        controller.element.addEventListener('blur', event =>{
            controller.element.contentEditable = false;
            if(controller.element.innerText != initialContent){
                controller.thing.set(controller.propertyID, controller.element.innerText)
            }
            controller.element.removeEventListener('blur', event)
            
        })
    })
    
}