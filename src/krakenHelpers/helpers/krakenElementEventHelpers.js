
import { krakenHelpersLight as h} from '../krakenHelpersLight.js'


import { KrSimpleThing, KrSimpleAction, KrSimpleFile } from "./krakenSimpleThingsHelpers.js";

export const krakenElementEventHelpers = {
    
    dragDrop: {
        setDraggable: setDragDropDraggableElement,
        setDropzone: setDragDropDropzoneElement,
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
//  Drag drop
// -----------------------------------------------------

function setDragDropDraggableElement(element, callbackFn) {
    element.draggable = true;

    element.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", element.id);
    });
}

function setDragDropDropzoneElement(element, callbackFn) {
    element.addEventListener("dragover", (event) => {
        event.preventDefault();
        event.stopPropagation();
    });

    element.addEventListener("drop", (event) => {
        event.preventDefault();
        event.stopPropagation();

        let draggedElementID = event.dataTransfer.getData("text/plain");
        let dropzoneElementID = event.currentTarget?.id;

        let action = new KrSimpleAction("Dragdrop - drop");
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

        callbackFn(action, event);
    });
}

// -----------------------------------------------------
//  Click
// -----------------------------------------------------

function setClickableElement(element, callbackFn) {
    element.addEventListener("click", (event) => {
        let element = event.currentTarget;
        let elementID = element.id;

        let action = new KrSimpleAction("Click element");
        action.object = {
            "@type": "WebPageElement",
            "@id": elementID,
            name: "Clickable element",
        };

        action.setCompleted();

        callbackFn(action, event);
    });
}

// -----------------------------------------------------
//  Set draggable generic
// -----------------------------------------------------

function setDraggableGenericElement(element, content) {
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

function setDropzoneGenericElement(element, callbackFn) {
    /**
     * Assigns content to draggable element
     */
    element.draggable = true;

    element.addEventListener("dragover", (event) => {
        event.preventDefault();
        event.stopPropagation();
    });

    element.addEventListener("drop", async (event) => {

        event.preventDefault();

        let action = new KrSimpleAction("Generic Drop event");
        action.instrument = {
            "@type": "WebPageElement",
            "@id": event.currentTarget.id,
            name: "Clickable element",
        };

        action.object = [];
        action.setCompleted();

        for (const item of event.dataTransfer.items) {
            
            if (item.kind === "string" && item.type.match(/^text\/plain/)) {
                // This 
                let object = {
                    "@type": "CreativeWork",
                    name: "Text content",
                    text: event.dataTransfer.getData(item.type),
                };
                action.object.push(object);
            } else if (
                item.kind === "string" &&
                item.type.match(/^text\/html/)
            ) {
                // Drag data item is HTML
                let object = {
                    "@type": "WebPageElement",
                    name: "HTML content",
                    text: event.dataTransfer.getData(item.type),
                };
                action.object.push(object);
            } else if (
                item.kind === "string" &&
                item.type.match(/^text\/uri-list/)
            ) {
                // Drag data item is URI
                let object = {
                    "@type": "WebPage",
                    url: event.dataTransfer.getData(item.type),
                };
                action.object.push(object);
            } else if (item.kind === "file") {
                
                // Drag data item is a file
                let object = new KrSimpleFile(item.getAsFile())
                action.object.push(object);
            }
        }
        callbackFn(action, event);
    });
}
