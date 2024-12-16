
/**
 * @fileoverview Kraken drag drop generic
 * @author Simon Chapleau
 * @version 1.0.0
 *
 * Functions to add generic dran and drop capabilities
 *
 * Elements with class name 'krDropzone' becomes dropzones
 * Elements with class name 'krDraggable' becomes draggable
 * 
 * 
 */


import { krakenBaseHelpers as h} from '../../../../base/krakenBaseHelpers.js'
import { krakenDomHelpers as d} from '../../../../dom/krakenDomHelpers.js'




export const krDragDropGeneric = {

    draggable: {
        set: setDraggable,
    },
    dropzone: {
        set: setDropzone
    },
    addCss: addCss,

}

const dropzoneClass = 'krDropzone'
const dropzoneOverClass = "krDropzoneOver"
const draggableClass = 'krDraggable'
const draggableHandleClass = 'krDraggableHandle'
const draggingClass = 'krDragging'
const krSelectedClass = 'krSelected'


// Initialize database of already initialized elements
let elementDB = {}

function setDraggable(engine, element, allowMultiSelect = true) {
    /**
     * Make all elements with class name 'krDraggable' draggable
     * @param element: parent element of all elements to make draggable
     * @param allowMultiSelect: allow multiple selections
     * @return void
     * 
     */

    element = element || document.body

    let draggableElements = element.querySelectorAll('.' + draggableClass)
    
    for (let e of draggableElements){

        // Get grabhandle 
        let dragHandle = e.querySelector('.' + draggableHandleClass)

        // Default hanbdle to element if missing
        dragHandle = dragHandle || e


        // -----------------------------------------------------
        //  Handle click make the elemtn draggable or not 
        // -----------------------------------------------------

        
        // On click of handle, make element draggable
        dragHandle.addEventListener('mousedown', (event) => {
            e.draggable = true
        })

        dragHandle.addEventListener('mouseup', (event) => {
            e.draggable = false
        })



        // -----------------------------------------------------
        //  Draggable fn 
        // -----------------------------------------------------

        
        dragHandle.addEventListener('dragstart', event => {
            //event.preventDefault()
            //event.stopPropagation()

            // Get dragged element
            let draggedElement = event.currentTarget

            // Set class of dragged element
            draggedElement.classList.add(draggingClass)
            
            // Get record from element
            let thing =  engine.get(d.thing.property.ref.get(draggedElement))
            let record = thing?.record || null

            
            // Set record as datatransfer value
            event.dataTransfer.setData("text/plain", JSON.stringify(record));
                    
        })

        dragHandle.addEventListener('dragend', event => {
            //event.preventDefault()
            //event.stopPropagation()

            // Get dragged element
            let draggedElement = event.currentTarget

            // Remove class of dragged elements
            for(let e1 of element.querySelectorAll('.' + draggingClass)){
                e1.classList.remove(draggingClass)
            }

        })

    }

    
}



function setDropzone(engine, element, allowMultiSelect = true){
    /**
     * Make all elements with class name 'krDropzone' dropzone
     */

    element = element || document.body

    let dropzoneElements = element.querySelectorAll('.' + dropzoneClass)

    for (let e of dropzoneElements){

        e.addEventListener('dragover', event => {
            event.preventDefault()
            event.stopPropagation()
            e.classList.add(dropzoneOverClass)
        })
    
        
        e.addEventListener('dragenter', event => {
            event.preventDefault()
            event.stopPropagation()
            e.classList.add(dropzoneOverClass)
        })
    
        e.addEventListener('dragleave', event => {
            event.preventDefault()
            event.stopPropagation()
            e.classList.remove(dropzoneOverClass)

        })
        
        e.addEventListener('drop', event => {
            event.preventDefault()
            event.stopPropagation()

            // Remove all dragover class
            for (let e1 of element.querySelectorAll('.' + dropzoneOverClass)){
                e1.classList.remove(dropzoneOverClass)
            }

            // Retrieve record or value
            let record = JSON.parse(event.dataTransfer.getData("text/plain"));

            // Retrieve thing ref related to dropzone
            let currentElement = event.currentTarget
            let thingElement = d.thing.traverse.current.thing.get(currentElement)

            let thing =  engine.get(d.thing.property.ref.get(thingElement))

            // Handle lists
            if(thing?.record_type == 'ListItem'){

                record = record?.item
                
                let parentThingElement = thingElement.parentElement.closest('.krThing') 

                
                
                let parentThing = engine.get(d.thing.property.ref.get(parentThingElement))

                parentThing.insert(record, thing.position)

                engine.set(parentThing)

                thing = parentThing
                

            }

            // Render
            engine.render(thing)
            
            setDropzone(engine, element)
            setDraggable(engine, element)
            
        })
    }
    
}



function addCss(){
    /**
     * Add Css necessary to make element appear dragging
     * @param {HTMLElement} element
     * @returns {void}
     */

    var styles = `


        .${draggableClass}.${draggingClass} { 

            opacity = '0.4';
        }

        .${dropzoneClass}.${dropzoneOverClass} {

           margin-top: 20px;
        
        }

    `

    var styleSheet = document.createElement("style")
    styleSheet.textContent = styles
    document.head.appendChild(styleSheet)

    return

}