import { krakenHelpers as h } from '../../../../krakenHelpers/krakenHelpers.js';


export const listReorder = {
    init: init,
}



const classHandle = 'krHandle'
const classInitialized = 'krReorderInitialized'
const classDragging = 'krDragging'
const classSelected = 'krSelected'

function init(controller){


    // Skip if already initialized
    if(controller.element.classList.contains(classInitialized)){
        console.log('KrReorder Already initialized')
        return
    }

    // Set drag handle to make element draggable onclick
    setDragHandle(controller)

    // Set element as draggable for reordering
    setDragElement(controller)

    // Set as initialized
    controller.element.classList.add(classInitialized)
    
    

}


function setDragHandle(controller){
    /**
     *
     *
     * 
     */


    // Set event listener on drag handle to make controller draggable on click
    let dragHandle = controller.element.querySelector('.' + classHandle);
    if(h.isNull(dragHandle)){
        //console.log('No handle found')
        dragHandle = controller.element
    }

    

    dragHandle.addEventListener('mousedown', event => {

        //event.preventDefault();
        controller.element.draggable=true
        //console.log('Setting draggable')
    })


    dragHandle.addEventListener('mouseup', event => {
        //event.preventDefault();
        controller.element.draggable=false
        //console.log('Unsetting draggable')
    })

    return
}

function setDragElement(controller){


    controller.element.addEventListener('dragstart', event =>{
        event.stopPropagation();
        event.dataTransfer.setData('text/plain', JSON.stringify(controller.ref))
        event.currentTarget.classList.add(classDragging)

        // Add class dragging to all selected items
        let selectedItems = document.querySelectorAll('.' + classSelected)
        for(let item of selectedItems){
            item.classList.add(classDragging)
        }
        
        console.log('Drag start')
    })

    controller.element.addEventListener('dragend', event =>{
        event.stopPropagation();
        event.currentTarget.classList.remove(classDragging)

        // Remove class dragging to all selected items
        let selectedItems = document.querySelectorAll('.' + classSelected)
        for(let item of selectedItems){
            item.classList.remove(classDragging)
        }
        
    })



    controller.element.addEventListener('dragenter', event =>{
        //event.preventDefault();

    })

    controller.element.addEventListener('dragover', event =>{
        event.preventDefault();

    })

    controller.element.addEventListener('dragleave', event =>{
        //event.preventDefault();


    })


    controller.element.addEventListener('drop', event =>{
        event.preventDefault();
        event.stopPropagation();
        
        console.log('********************')
        console.log('Drop Start')
        console.log('********************')

        
        // Freeze rendering
        controller.engine.freezeRender()

        // Retrieve and loop through dragged elements
        let draggedElements = document.querySelectorAll('.' + classDragging)
        for(let draggedElement of draggedElements){

            // -----------------------------------------------------
            //  Remove dragged item from its list 
            // -----------------------------------------------------
    
            // Retrieve dragged controller and thing
            let draggedItemController = controller.engine.getController(draggedElement.id)
            let draggedItem = draggedItemController.thing
    
            // Retrieve itemList for dragged item (in case in different lists)
            let draggedListController = draggedItemController.getItemList()
            let draggedList = draggedListController.thing
    
            // Remove item from dragged list
            draggedList.delete(draggedItem)
    
    
            // -----------------------------------------------------
            //  Add item to dropzone list 
            // -----------------------------------------------------
    
            // Retrieve current dropzone controller
            let dropzoneItemController = controller.engine.getController(event.currentTarget.id)
            let dropzoneItem = dropzoneItemController.thing
            let position = dropzoneItem.position
            
            // Retrieve dropzone list controller and thing for dropzone
            let dropzoneListController = dropzoneItemController.getItemList()
            let dropzoneList = dropzoneListController.thing
    
            // Add item to dropzone list
            dropzoneList.insertBefore(draggedItem, position)
            
        }

        
        // Unfreeze rendering
        controller.engine.unfreezeRender()


        
        console.log('********************')
        console.log('Drop End')
        console.log('********************')

        
    })

    // 
    
    
}

