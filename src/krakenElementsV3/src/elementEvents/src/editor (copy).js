

import { krakenHelpers as h } from '../../../../krakenHelpers/krakenHelpers.js';
import { krakenTools} from '../../../../krakenTools/krakenTools.js';

export const editor = {
    initEditor: initEditor,
}

const ElementDb = {} // DB to track if item has already been initialized


function initEditor(controller){
    /**
     * Makes a div like an editor
     */

    if(ElementDb?.[controller.element.id] == true){
        return
    }
    ElementDb[controller.element.id] = true

    controller.element.contentEditable = true;
    

    controller.element.addEventListener('click', event =>{
        event.preventDefault();

        controller.element.contentEditable = true;
        controller.element.focus();

        let keyDownFunction = function(event) {
            

           
            

            let caretPosition = h.base.caret.get(controller.element)

            let contentBeforeCaret = controller.element.textContent.substring(0, caretPosition)
            let contentAfterCaret = controller.element.textContent.substring(caretPosition)


            if(event.ctrKey){

            } else if (event.altKey){


            } else if (event.metaKey){


            } else if (event.shiftKey){

                if(event.key=="Tab"){
                    /**
                     * Move line to hasPart of previous Line
                     */
                    // Freeze render

                    event.preventDefault();

                    let timer = new krakenTools.KrTimer()
                    timer.start('a')
                    
                    controller.engine.freezeRender()

                    // Error handling
                    let currentListController = controller.getItemList()
                    let currentList = currentListController.thing

                    let parentItemController = currentListController.getListItem()
                    if(h.isNull(parentItemController)){
                        return
                    }
                    let parentItem = parentItemController.thing

                    let parentListController = parentItemController.getItemList()
                    let parentList = parentListController.thing

                    let currentItemController = controller.getListItem()
                    let currentItem = currentItemController.thing
                    let position = currentItem.position


                    let parentPosition = parentItem.position
                    currentList.delete(currentItem)
                    parentList.insertAfter(currentItem, parentPosition)

                    timer.stop('a')
                    timer.start('b')
                    
                    // Move records after under the moved one
                    let neighborItem = currentList.searchByPosition(position)
                    while(neighborItem){
                        currentList.delete(neighborItem)
                        currentItem.appendUnder(neighborItem)
                        neighborItem = currentList.searchByPosition(position)
                    }

                    timer.stop('b')
                    // Unfreeze render
                    controller.engine.unfreezeRender()

                    timer.logAllDurations()


                }


            } else {

                if(event.key=="Enter"){
                    /**
                     * Separate the line into two, separating the content
                     */

                    event.preventDefault();
                    let timer = new krakenTools.KrTimer()
                    timer.start('a')
                    
                    // Freeze render
                    controller.engine.freezeRender()

                    // Update existing item
                    if(controller.element.textContent != contentBeforeCaret){
                        controller.thing.set(controller.propertyID, contentBeforeCaret)
                    }

                    timer.stop('a')
                    timer.start('b')
                    // Create new item
                    let listController = controller.getItemList()
                    let listItemController = controller.getListItem()
                    let newRecord = {
                        '@type': "ListItem",
                        "@id": h.base.uuid.new(),
                        "item": {
                            "@type": controller.record_type,
                            "@id":  h.base.uuid.new(),
                            "description": contentAfterCaret
                        }
                    }

                    timer.stop('b')
                    timer.start('c')
                    listController.thing.insertAfter(newRecord, listItemController.thing.getValue('position'))

                    // Unfreeze render
                    controller.engine.unfreezeRender()
                    controller.unRegister()

                    timer.stop('c')

                    timer.logAllDurations()

                }

                if(event.key=="Tab"){
                    /**
                     * Move line to hasPart of previous Line
                     */

                    event.preventDefault();
                    let timer = new krakenTools.KrTimer()
                    timer.start('a')

                    
                    // Freeze render
                    console.log('tab')
                    controller.engine.freezeRender()

                    // Error handling
                    // Do nothing if already top child
                    let listController = controller.getItemList()
                    let itemList = listController.thing
                    let currentItemController = controller.getListItem()
                    let currentItem = currentItemController.thing

                    if(currentItem.position == 0){
                        return 
                    }

                    // Get previous item
                    let previousItem = itemList.searchByPosition(currentItem.position - 1)

                    if(h.isNull(previousItem)){
                        return 
                    }

                    itemList.delete(currentItem)
                    previousItem.appendUnder(currentItem)
                    timer.stop('a')
                    timer.start('b')

                    // Move records after under the moved one

                    // Unfreeze render
                    controller.engine.unfreezeRender()
                    controller.unRegister()


                    // Set focus on new item
                    let newItemControllers = listController.selectControllers(currentItem)
                    newItemControllers.map(x => x.setFocus())
                    
                    //
                    timer.stop('b')
                    timer.logAllDurations()

                }

            }

        }
        
        controller.element.addEventListener('keydown', keyDownFunction)


        controller.element.addEventListener('blur', event =>{
            console.log('unregister')
            controller.element.contentEditable = false;
            controller.element.removeEventListener('keydown', keyDownFunction)
            
            controller.element.removeEventListener('blur', event)

        })

        
    })
}



function getValue(controller){
    /**
     * Returns the value of the editor
     */

    let value = controller.element.innerHTML
    if(h.isNull(value)){
        value = null
    } 
    return value
    
    
}

function setValue(controller, value){
    /**
     * Sets the value of the editor
     */

    if(controller.element.innerHTML != value){
        value = value || ''
        controller.element.innerHTML = value
    }
}