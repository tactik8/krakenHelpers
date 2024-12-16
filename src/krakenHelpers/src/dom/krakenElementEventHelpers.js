
import { krakenBaseHelpers as h} from '../base/krakenBaseHelpers.js'

import { krakenElementHelpers as eh} from './krakenElementHelpers.js'



export const krakenElementEventHelpers = {
    dragDrop: {
        setDraggable: setDragDropDraggableElement,
        setDropzone: setDragDropDropzoneElement,
    },
    dragDropReordering: {
        setDraggable: setDragDropDraggableReorderingElement,
        setDropzone: setDragDropDropzoneReorderingElement,
    },
    generic: {
        setDraggable: setDraggableGenericElement,
        setDropzone: setDropzoneGenericElement,
    },
    click: {
        set: setClickableElement,
    },
};


// -----------------------------------------------------
//  Register events 
// -----------------------------------------------------



// -----------------------------------------------------
//  Drag drop reordering
// -----------------------------------------------------

function setDragDropDraggableReorderingElement(element, elementHandle, callbackFn, params) {
    

    // If no handle provided, considers entire element is draggable
    console.log(elementHandle)
    elementHandle = elementHandle || element
    
    //elementHandle.draggable = true;

    elementHandle.addEventListener("mousedown", (event) => {
        
        //event.preventDefault();
        //event.stopPropagation();
        element.draggable = true

        console.log('mousedown')
    });
    
    elementHandle.addEventListener("mouseup", (event) => {

        //event.preventDefault();
        //event.stopPropagation();
        element.draggable = false

    });
    
    element.addEventListener("dragstart", (event) => {
        //event.preventDefault();
        event.stopPropagation();
        event.dataTransfer.setData("text/plain", element.id);
        element.style.opacity = '0.4';
    });
    
    element.addEventListener("dragend", (event) => {
        //event.preventDefault();
        event.stopPropagation();
        event.dataTransfer.setData("text/plain", element.id);
        element.style.opacity = '1';
        element.draggable = false
    });

}

function setDragDropDropzoneReorderingElement(element, callbackFn, params) {
    element.addEventListener("dragover", (event) => {
        event.preventDefault();
        //event.stopPropagation();
    });

    element.addEventListener("dragenter", (event) => {
        event.preventDefault();
        //event.stopPropagation();
        event.currentTarget.classList.add('dragover')
        
        
    })
    
    element.addEventListener("dragleave", (event) => {
        event.preventDefault();
        //event.stopPropagation();
        event.currentTarget.classList.remove('dragover')
        
        
    })
    
    
    element.addEventListener("drop", (event) => {
        event.preventDefault();
        event.stopPropagation();

        let draggedElementID = event.dataTransfer.getData("text/plain");
        let dropzoneElementID = event.currentTarget?.id;

        let draggedElement = document.getElementById(draggedElementID)
        let dropzoneElement =event.currentTarget

        // Move dragged element before dropzone
        dropzoneElement.before(draggedElement)
        
        let action = new h.classes.Action("Dragdrop - drop");
        action.object = {
            "@type": "WebPageElement",
            "@id": draggedElementID,
            name: "Draggable element",
        };
        action.instrument = {
            "@type": "WebPageElement",
            "@id": dropzoneElementID,
            name: "Dropzone element",
        };
        action.setCompleted();

        if (callbackFn){
            callbackFn(action, params);
        }

        // Remove all dragover
        for(let e of document.querySelectorAll('.dragover')){
            e.classList.remove('dragover')
        }
    });
}


// -----------------------------------------------------
//  Drag drop
// -----------------------------------------------------

function setDragDropDraggableElement(element, callbackFn, params) {
    element.draggable = true;

    element.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", element.id);
    });
}

function setDragDropDropzoneElement(element, callbackFn, params) {
    element.addEventListener("dragover", (event) => {
        event.preventDefault();
        event.stopPropagation();
    });

    element.addEventListener("drop", (event) => {
        event.preventDefault();
        event.stopPropagation();

        let draggedElementID = event.dataTransfer.getData("text/plain");
        let dropzoneElementID = event.currentTarget?.id;

        let action = new h.classes.Action("Dragdrop - drop");
        action.object = {
            "@type": "WebPageElement",
            "@id": draggedElementID,
            name: "Draggable element",
        };
        action.instrument = {
            "@type": "WebPageElement",
            "@id": dropzoneElementID,
            name: "Dropzone element",
        };
        action.setCompleted();

        
        callbackFn(action, params);
    });
}

// -----------------------------------------------------
//  Click
// -----------------------------------------------------

function setClickableElement(element, callbackFn, params) {
    element.addEventListener("click", (event) => {
        let element = event.currentTarget;
        let elementID = element.id;

        let action = new h.classes.Action("Click element");
        action.object = {
            "@type": "WebPageElement",
            "@id": elementID,
            name: "Clickable element",
        };

        action.setCompleted();

            callbackFn(action, params);
    });
}

// -----------------------------------------------------
//  Set draggable generic
// -----------------------------------------------------

function setDraggableGenericElement(element, content, callbackFn, params) {
    /**
     * Assigns content to draggable element
     */
    element.draggable = true;

    element.addEventListener("dragstart", (event) => {
        if (typeof content == "string") {
            event.dataTransfer.setData("text/plain", element.id);
        } else {
            for (let key of Object.keys(content)) {
                event.dataTransfer.setData(key, content?.[key]);
            }
        }
    });
}

// -----------------------------------------------------
//  Set dropzone generic
// -----------------------------------------------------

function setDropzoneGenericElement(element, callbackFn, params) {
    /**
     * Assigns content to draggable element
     */



    
    //element.draggable = true;

    element.addEventListener("dragover", (event) => {
        event.preventDefault();
        event.stopPropagation();
    });

    element.addEventListener("drop", async (event) => {

        event.preventDefault();

        let action = new h.classes.Action("Generic Drop event");
        action.object = {
            "@type": "WebPageElement",
            "@id": event.currentTarget.id,
            name: "Clickable element",
        };

        //action.object = event.currentTarget
        
        for (const item of event.dataTransfer.items) {

            
            if (item.kind === "string" && item.type.match(/^text\/plain/)) {
                // This 
                let result = {
                    "@type": "CreativeWork",
                    name: "Text content",
                    text: event.dataTransfer.getData(item.type),
                };
                action.result = result;
            } else if (
                item.kind === "string" &&
                item.type.match(/^text\/html/)
            ) {
                // Drag data item is HTML
                let result = {
                    "@type": "WebPageElement",
                    name: "HTML content",
                    text: event.dataTransfer.getData(item.type),
                };
                action.result = result
            } else if (
                item.kind === "string" &&
                item.type.match(/^text\/uri-list/)
            ) {
                // Drag data item is URI
                let result = {
                    "@type": "WebPage",
                    url: event.dataTransfer.getData(item.type),
                };
                action.result = result
            } else if (item.kind === "file") {
                
                // Drag data item is a file
                let result = new h.classes.File()
                
                await result.setFile(item.getAsFile())
                action.result = result
                
                
            }
        }
        action.setCompleted();
        callbackFn(action, params);
    });
}
