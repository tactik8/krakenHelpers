import { krakenHelpers as h } from '../../../../krakenHelpers/krakenHelpers.js';


export const selectable = {
    init: init,
}


const classSelectable = 'krSelectable'
const classHandle = 'krHandle'
const classInitialized = 'krSelectableInitialized'
const classMatInitialized = 'krSelectionMatInitialized'
const classSelected = 'krSelected'
const classSelectionMat = 'krSelectionMat'
const classDragging = 'krDragging'
const classDraggable = 'krDraggable'
const classSelectInput = 'krSelectInput'

let selectableByMouseInitializedFlag = false


function init(controller){


    // Skip if already initialized
    if(controller.element.classList.contains(classInitialized)){
        console.log('KrSelectable Already initialized')
        return
    }


    // Add css
    addCss()
    
    // Set drag handle to make element draggable onclick
    setSelectableByClick(controller)


    // Init selection mats
    let selectionMats = document.querySelectorAll('.' + classSelectionMat)
    for(let m of selectionMats || [document]){
        setSelectableByMouse(m)
    }

    // Init select input checkbox
    initSelectInput(controller)

    
    // Set as initialized
    controller.element.classList.add(classInitialized)



}

function addCss(){

    let css = `
        .krSelected {
            border: 1px solid red;
        }
    `
    document.head.appendChild(document.createElement("style")).innerHTML=css;

}



function initSelectInput(controller){
    /**
     * Initializes the select input
     */

    let selectInputGroup = controller.element.querySelector('.' + classSelectInput)
    let selectInputElement = selectInputGroup.querySelector('input')

    selectInputElement.addEventListener('change', event=> {

        let selected = event.target.checked

        if(selected == true){
            controller.element.classList.add(classSelected)
        } else {
            controller.element.classList.remove(classSelected)
        }

    })


    
}


function setSelectableByClick(controller){
    /**
     *
     *
     * 
     */


    // Set event listener on drag handle to make controller draggable on click
    let dragHandle = controller.element.querySelector('.' + classHandle);
    if(h.isNull(dragHandle)){
        dragHandle = controller.element
    }

    

    dragHandle.addEventListener('click', event => {

        //event.preventDefault();

        console.log('Click')
        // If shift key not pressed, deselect all other selected elements
        if(!event.shiftKey){
            let selectedElements = document.querySelectorAll('.' + classSelected)
            for(let element of selectedElements){
                element.classList.remove(classSelected)
            }
        }

        // Toggle class selected to controller element
        controller.element.classList.toggle(classSelected)
        
    })


    

    return
}



function setSelectableByMouse(selectionMat){
    /**
     *
     * 
     */

    if(h.isNull(selectionMat)){
        return
    }
    if(selectionMat.classlist && selectionMat.classlist.contains(classMatInitialized)){
        return
    }

    selectionMat.classList.add(classMatInitialized)

    
    let isSelecting = false;
    let startX = 0;
    let startY = 0;
    const selectionBox = document.createElement('div');

    // Styling for the selection box
    selectionBox.style.position = 'absolute';
    selectionBox.style.border = '1px dashed #007bff';
    selectionBox.style.backgroundColor = 'rgba(0, 123, 255, 0.2)';
    selectionBox.style.pointerEvents = 'none';
    document.body.appendChild(selectionBox);

    const onMouseDown = (event) => {

        // Skip if dragging
        let closest = event.target.closest('.' + classSelected)
        if(h.isNotNull(closest)){
            return
        }
        
        isSelecting = true;
        startX = event.pageX;
        startY = event.pageY;

        // Reset selection box dimensions and position
        selectionBox.style.left = `${startX}px`;
        selectionBox.style.top = `${startY}px`;
        selectionBox.style.width = '0px';
        selectionBox.style.height = '0px';
        
    };

    const onMouseMove = (event) => {
        if (!isSelecting) return;

        const currentX = event.pageX;
        const currentY = event.pageY;

        const left = Math.min(startX, currentX);
        const top = Math.min(startY, currentY);
        const width = Math.abs(startX - currentX);
        const height = Math.abs(startY - currentY);

        selectionBox.style.left = `${left}px`;
        selectionBox.style.top = `${top}px`;
        selectionBox.style.width = `${width}px`;
        selectionBox.style.height = `${height}px`;

        
        
        document.querySelectorAll('.' + classSelectable).forEach((el) => {

            const rect = el.getBoundingClientRect();
            const selectionRect = selectionBox.getBoundingClientRect();

            const isOverlapping = (
                rect.left < selectionRect.right &&
                rect.right > selectionRect.left &&
                rect.top < selectionRect.bottom &&
                rect.bottom > selectionRect.top
            );

            if (isOverlapping) {
                el.classList.add(classSelected);
            } else {

                if(event.shiftKey == false){
                    el.classList.remove(classSelected);
                }
            }
        });
    };

    const onMouseUp = () => {
        if (isSelecting) {
            isSelecting = false;

            // Hide selection box
            selectionBox.style.width = '0px';
            selectionBox.style.height = '0px';
        }
    };


    // Init on selectionMat
    
    
    selectionMat.addEventListener('mousedown', onMouseDown);
    selectionMat.addEventListener('mousemove', onMouseMove);
    selectionMat.addEventListener('mouseup', onMouseUp);


}