


export const dragAndDrop = {
    initDropzone: initDropzone,
    initDraggable: initDraggable
}


function initDropzone(controller){


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
        let draggedElement = document.querySelector('.dragging')

        let dropzoneThingRef = JSON.parse(event.dataTransfer.getData('text/plain'))

        
        //event.currentTarget.before(draggedElement)

        
        let itemlist = event.currentTarget.parentElement.closest('.krThing')
        
        
        let itemlistController = controller.engine.controller.get(itemlist.id)

        console.log('rec', controller.record)
        let action = {
                "@type": "InsertAction",
                "@id": String(crypto.randomUUID()),
                "name": "Insert",
                "targetCollection": itemlistController.ref,
                "toLocation": controller.record?.position || 0,
                "object": dropzoneThingRef
                
            }
        console.log('action', action)
        //controller.engine.set(action)
        controller.engine.execute(action)


        
    })

    
}

function initDraggable(controller){

    controller.element.draggable = true;
    
    controller.element.addEventListener('dragstart', event =>{
        event.dataTransfer.setData('text/plain', JSON.stringify(controller.ref))
        event.target.classList.add('dragging')
    })

    controller.element.addEventListener('dragend', event =>{
        event.target.classList.remove('dragging')
    })
    
}