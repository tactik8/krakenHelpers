import { krakenBaseHelpers as h} from '../../base/krakenBaseHelpers.js'
//import { itemlist } from '../../html/src/itemlist.js';

import { krakenThingSystemHelpers as th } from "./krakenThingSystemHelpers.js";

import { krakenThingListItemHelpers as lih } from "./krakenThingListItemHelpers.js";

export const krakenThingListHelpers = {

    isValid: isValid,
    toString: toString,
    toStringDetailed: toStringDetailed,
    new: newItemList,
    clone: clone,
    isSame: isSame,
    isEmpty, isEmpty, 
    toItemList: toItemList,
    length: getLength,
    insert: insert,
    clear: clear,
    delete: deleteItem,
    filter: filter,
    search: search,
    last: getLastListItem,
    listItems: {
        get: getListItems,
        set: setListItems,
    },
    items: {
        get: getItems,
        set: setItems,
    },
    
}


function isValid(things){
    /**
     * Checks if the thing is valid
     * @param {Object} thing The thing
     * @returns {Boolean} True if the thing is valid
     */


    

    if(things?.['@type'] == 'ItemList'){
        return true
    }
    

    return false
    
}

function toString(value){
    /**
     * Converts the thing to a string
     * @param {Object} thing The thing
     * @returns {String} The string
     */

    return `${value?.name} (${getLength(value)})`
    
}

function toStringDetailed(value){
    /**
     * Converts the thing to a string
     * @param {Object} thing The thing
     * @returns {String} The string
     */



    let content = toString(value)
    content += '\n'
    content += '-----------------------------------------------------'
    content += '\n'
    for(let li of getListItems(value)){
        content += lih.toString(li)
        content += '\n'
    }
    content += '-----------------------------------------------------'
    return content

}

function isSame(thing1, thing2){
    /**
     * Checks if the two things are the same
     * @param {Object} thing1 The first thing
     * @param {Object} thing2 The second thing
     * @returns {Boolean} True if the two things are the same
     */

    return 
    
}

// todo: add test to see if list is valid (no errands items)
// todo: add fn to fix invalid lists (reorder items)
// todo: add fn to resort list based on condittion


function newItemList(){
    /**
     * Creates a new item list
     * @returns {Object} The item list
     *     
     */

    let itemList = {
        '@type': "ItemList",
        "@id": h.uuid.new(),
        itemListElement: [],
    }
    return itemList
    
}

function isEmpty(itemList){
    /**
     * Checks if the thing is null
     * @param {Object} thing The thing
     * @returns {Boolean} True if the thing is null
     */

    if(!isValid(itemList)){ return true }
    if(getLength(itemList) == 0){ return true }
    
    
    return false
    
}

function clone(itemList){
    /**
     * Clones the thing
     * @param {Object} thing The thing
     * @returns {Object} The cloned thing
     * 
     */

    let listItems = getListItems(itemList)

    
    // Clone itemList
    let clone = th.clone(itemList)

    // Remove existing itemListelements
    clone = th.value.delete(clone, 'itemListElement')

    // Clone items
    let newListItems = listItems.map(x => lih.clone(x))

    // Insert back items
    clone = insert(clone, newListItems)
   
    return clone
}

function toItemList(itemList){
    /**
     * Converts the thing to a list
     * @param {Object} thing The thing
     * @returns {Array} The list
     */


    if(isValid(itemList)){

        
        return itemList
    }

    let values = itemList
    
    let newItemList = newItemList()

    newItemList = insert(newItemList, values)
    
    return newItemList
    
}

function getLength(itemList){
    /**
     * Returns the length of the list
     * @param {Object} itemList The list
     * @returns {Number} The length of the list
     * 
     */
    if(!isValid(itemList)){ return 0 }

    let length = getListItems(itemList).length || 0

    
    return length

    
}

function getListItems(itemList){
    /**
     * Returns the items of the list
     * @param {Object} itemList The list
     * @returns {Array} The items of the list
     */
    let listItems = th.propertyValues.get(itemList, 'itemListElement')

    // Error handling
    if(h.isNull(listItems)){ return [] }

    // Retrieve value part of pv
    listItems = h.toArray(listItems)

    listItems = listItems.map(x => x?._system?.object?.value || x?.object?.value )
    
    listItems = listItems.filter(x => !h.isNull(x))

    listItems = lih.sort(listItems)
    
    return listItems
    
}

function setListItems(itemList, values){
    /**
     * Returns the items of the list
     * @param {Object} itemList The list
     * @returns {Array} The items of the list
     */


    values = lih.toItemList(values)

    itemList = clear(itemList)
    
    let listItems = getListItems(itemList)

    listItems = th.toArray(listItems)

    listItems = listItems.filter(x => !h.isNull(x))

    listItems = sort(listItems)

    return listItems

}



function getItems(itemList){
    /**
     * Returns the items of the list
     * @param {Object} itemList The list
     * @returns {Array} The items of the list
     */

    let listItems = getListItems(itemList)

    
    let items = listItems.map(x => th.values.get(x, 'item'))
    
    items = items.filter(x => !h.isNull(x))

    return items
    
}



function setItems(itemList, items){
    /**
     * Returns the items of the list
     * @param {Object} itemList The list
     * @returns {Array} The items of the list
     */

    return setListItems(itemList, items)

}
//todo: whybis this fn not used
function lastListItem(itemList){
    /**
     * Returns the last list item
     * @param {Object} itemList The list
     * @returns {Object} The last list item
     */

    let lastListItem = lih.last(getListItems(itemList))

    return lastListItem
    
}

// -----------------------------------------------------
//  Array 
// -----------------------------------------------------

//todo: harmonize between search and find
function search(itemList, conditions){
    /**
     * Searches an array of things
     * @param {Array} things The things
     * @param {Object} conditions The conditions
     * @returns {Object} Te first listItem encountered
     */

    // Ensure it is array
    let listItems = getListItems(itemList)
    
    return lih.filter(listItems, conditions)?.[0] || null
    
}

function filter(itemList, conditions){
    /**
     * Returns a new itemList with filtered records
     * @param {Array} things The things
     * @param {Object} conditions The conditions
     * @returns {Array} The filtered array
     */

    // Get listItems and filter
    let listItems = getListItems(itemList)
    listItems = lih.filter(listItems, conditions)

    
    // Clone,  Empty and refill itemList
    let newItemList = clone(itemList)
    newItemList = clear(newItemList)
    newItemList = insert(newItemList, listItems)

    return newItemList
  
    
}

function clear(itemList){
    /**
     * Returns itemList without listItems
     * @param {Object} itemList The itemList    
     * @returns {Object} The itemList without listItems
     * 
     */

    // Delete values
    itemList = th.values.delete(itemList, 'itemListElement')

    itemList = th.values.set(itemList, 'numberOfItems', 0)
    
    return itemList
    
}

function getLastListItem(itemList){
    /**
     * Returns the last item of the list
     * @param {Object} itemList The itemList
     * @returns {Object} The last item of the list
     * 
     */

    return lih.last(getListItems(itemList)) || null
    
}

function insert(itemList, listItem, position, metadata){
    /**
     * Inserts a record into an array
     * @param {Array} things The array
     * @param {Object} record The record
     * @param {Number} position The position
     * @returns {Array} The array
     */

    let listItems = getListItems(itemList)

    // Default position to last item
    let lastItemFlag = false
    if(h.isNull(position)){
        lastItemFlag = true
        let lastListItem = lih.last(listItems)
        position = lih.position.get(lastListItem) + 1 || 0
       
       
    }


    // if array 
    if(h.isArray(listItem)){
        for(let item of listItem){
            itemList = insert(itemList, item, position, metadata)
            position += 1
        }
        return itemList
    }

    // init 
    listItem = th.toThing(listItem)
    listItem = lih.toListItem(listItem)

    // Get previous and next items
    let previousItem
    let nextItem
    for(let l of listItems){
        if(lih.position.get(l) == position -1 ){
            previousItem = l
        }
        if(lih.position.get(l) == position ){
            nextItem = l
        }
    }
   

    // Set new neighbours and position
    listItem = lih.previousItem.set(listItem, th.ref.get(previousItem))
    listItem = lih.nextItem.set(listItem, th.ref.get(nextItem))

    listItem = lih.position.set(listItem, position)
    
    // Set position
    if(h.isNotNull(previousItem)){
        previousItem = lih.nextItem.set(previousItem, th.ref.get(listItem))
    }
    if(h.isNotNull(nextItem)){
        nextItem = lih.previousItem.set(nextItem, th.ref.get(listItem))
    }

    // Add record to itemListElement
    itemList = th.value.add(itemList, 'itemListElement', listItem, metadata)
    
    // Recalculate positions (skip if last item)
   
    if(lastItemFlag == false){
      
        itemList = resetPositions(itemList, listItem, position, metadata)
    }
    

    //
    itemList = th.values.set(itemList, 'numberOfItems', listItems.length +1)

    
    // return
    return itemList
    
    
}

function deleteItem(itemList, listItem, metadata){
    /**
     * Deletes a record from an array
     * @param {Array} things The array
     * @param {Object} record The record
     * @returns {Array} The array
     */


    
    let listItems = getListItems(itemList)

    
    listItem = lih.search(listItems, th.ref.get(listItem))

    
    
    // Retrieve previous item
    let previousItemRef = lih.previousItem.get(listItem)
    let previousItem = lih.search(listItems, th.ref.get(previousItemRef))

    
    // Retrieve next item
    let nextItemRef = lih.nextItem.get(listItem)
    let nextItem = lih.search(listItems, th.ref.get(nextItemRef))

    
    // Reassign neighbours of previous and next item
    if(h.isNotNull(previousItem)){
        previousItem = lih.nextItem.set(previousItem, nextItemRef)
    }
    if(h.isNotNull(nextItem)){
        nextItem = lih.previousItem.set(nextItem, previousItemRef)
        
    }
    
    
    // Remove neighbors from listItem
    listItem = lih.neighbors.clear(listItem)

    // Remove item from itemListElement
    itemList = th.values.delete(itemList, 'itemListElement', th.ref.get(listItem), metadata)

    
    // Reset positions
    itemList = resetPositions(itemList, null, null, metadata)

    
    itemList = th.values.set(itemList, 'numberOfItems', listItems.length - 1)

    

    
    return itemList
    
    
}


function resetPositions(itemList, startingItem, startingPosition, metadata){
    /**
     * Resets the positions of the list items
     * @param {Object} itemList The item list
     * @returns {Object} The item list
     */


    //
    let listItems = getListItems(itemList)
    let position = startingPosition || 0

   
    // Get first item
    let firstItem = startingItem || lih.first(getListItems(itemList))

    
    
    
    if(h.isNull(firstItem)){
        
        return itemList
    }
    
    // Reset positions
    let temp = firstItem
    let p = position

    let count = 0
    
    while (h.isNotNull(temp)){

        count += 1
        if(count > 40){ return }
        temp = listItems.filter(x => (x?.record_id || x?.['@id'] || x?._system?.['@id']) == (temp?.record_id || temp?._system?.['@id'] || temp?.['@id']))?.[0] || null
        
        if(h.isNotNull(temp)){
            
            if(lih.position.get(temp) != p){
                lih.position.set(temp, p)
            }
            let nextTemp = lih.nextItem.get(temp)
            if(nextTemp = temp){ temp = null } else { temp = nextTemp }
            p += 1
        }
    }
    
    
    return itemList
}