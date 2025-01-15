

import { dragAndDrop } from './src/dragAndDrop.js'

import { editable } from './src/editable.js'
import { editor } from './src/editor.js'
import { listReorder } from './src/listReorder.js'
import { selectable } from './src/selectable.js'


const classDraggable = 'krDraggable'
const classDropzone = 'krDropzone'
const classEditable = 'krEditable'
const classEditor = 'krEditor'
const classListReorder = 'krReorder'
const classSelectable = 'krSelectable'

export const elementEvents = {
    dragAndDrop: dragAndDrop,
    init: initEvents,
}



function initEvents(controller){

    if(controller.element.classList.contains(classDraggable)){
        dragAndDrop.initDraggable(controller)
    }

    if(controller.element.classList.contains(classDropzone)){
        dragAndDrop.initDropzone(controller)
    }

    if(controller.element.classList.contains(classEditable)){
        editable.initEditable(controller)
    }

    if(controller.element.classList.contains(classEditor)){
        editor.initEditor(controller)
    }

    if(controller.element.classList.contains(classListReorder)){
        listReorder.init(controller)
    }

    if(controller.element.classList.contains(classSelectable)){
        selectable.init(controller)
    }

    
    
}