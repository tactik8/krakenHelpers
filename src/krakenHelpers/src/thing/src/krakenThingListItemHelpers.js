import { krakenBaseHelpers as h} from '../../base/krakenBaseHelpers.js'

import { krakenThingSystemHelpers as th } from "./krakenThingSystemHelpers.js";


export const krakenThingListItemHelpers = {

    isValid: isValid,
    toString: toString,
    new: newListItem,
    clone: clone,
    toListItem: toListItem,
    isSame: isSame,
    isEmpty, isEmpty, 
    filter: filter,
    search: search,
    first: getFirstItem,
    last: getLastItem,
    sort: sortListItems,
    position: {
        get: getPosition,
        set: setPosition,
    },
    item: {
        get: getItem,
        set: setItem,
    },
    previousItem: {
        get: getPreviousItem,
        set: setPreviousItem,
    },
    nextItem: {
        get: getNextItem,
        set: setNextItem,
    },
    neighbors: {
        set: setNeighbors,
        clear: clearNeighbors,
    }
    
    
    
}


function isValid(value){
    /**
     * Checks if the thing is valid listitem
     * @param {Object} thing The thing
     * @returns {Boolean} True if the thing is valid
     */

  

    if((value?.['@type'] || value?.record_type) == 'ListItem'){
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

    return `Item ${value?.position} - ${value?._heading1} p:${value.previousItem?.['@id'] || 'NA'} n:${value.nextItem?.['@id'] || 'NA'} `
    
}

function newListItem(position, item, metadata){
    /**
     * Creates a new list item
     * @returns {Object} The item list
     *     
     */

    let listItem = {
        '@type': "ListItem",
        "@id": h.uuid.new(),
        item: item || null,
        position: position || null
    }

    listItem = th.toThing(listItem, null, metadata)
    
    return listItem
    
}

function toListItem(value, metadata){
    /**
     * Converts the thing to a list
     * @param {Object} thing The thing
     * @returns {Array} The list
     */


    value = th.toThing(value, null, metadata)
    
    if(isValid(value)){
        return value
    }
    

    let newValue = newListItem()
    newValue = th.value.add(newValue, 'item', value)

    return newValue

}

function isEmpty(value){
    /**
     * Checks if the thing is null
     * @param {Object} thing The thing
     * @returns {Boolean} True if the thing is null
     */

    if(!isValid(value)){ return true }

    if(h.isNull(getItem(value))){ return true }
    
    return false
    
}


function clone(value){
    /**
     * Clones the thing
     * @param {Object} thing The thing
     * @returns {Object} The cloned thing
     * 
     */


    let clone = th.clone(value)
    clone = setItem(clone, getItem(value))

    clone = th.value.delete(clone, 'position')
    clone = th.value.delete(clone, 'previousItem')
    clone = th.value.delete(clone, 'nextItem')

    return clone
    
}

// -----------------------------------------------------
//  Comment 
// -----------------------------------------------------


function getPosition(value){
    /**
     * Gets the position of the thing
     * @param {Object} thing The thing
     * @returns {Number} The position
     */

    if(!isValid(value)){ return null}

    let result = th.value.get(value, 'position') 

    if(h.isNull(result)){
        return null
    }
    return result
    
}

function setPosition(value, position){
    /**
     * Gets the position of the thing
     * @param {Object} thing The thing
     * @returns {Number} The position
     */

    if(!isValid(value)){ throw new Error('Invalid thing') }
    return th.value.set(value, 'position', position) 

}

function getItem(value){
    /**
     * Gets the item from the list item
     * @param {Object} listItem The list item
     * @returns {Object} The item
     */

    if(!isValid(value)){ return null}
    
    return th.value.get(value, 'item') || null
}

function setItem(value, item){
    /**
     * Gets the item from the list item
     * @param {Object} listItem The list item
     * @returns {Object} The item
     */

    if(!isValid(value)){ return null}

    return th.value.set(value, 'item', item) || null
}


function getPreviousItem(value, previousItem){
    /**
     * return previous item
     * @param {Object} listItem The list item
     * @returns {Object} The item
     */
    if(!isValid(value)){ return null}

    return th.value.get(value, 'previousItem') || null
}
function setPreviousItem(value, item){
    /**
     * Gets the item from the list item
     * @param {Object} listItem The list item
     * @returns {Object} The item
     */

    if(!isValid(value)){ return null }

    return th.value.set(value, 'previousItem', item) 
}

function getNextItem(value){
    /**
     * return previous item
     * @param {Object} listItem The list item
     * @returns {Object} The item
     */
    if(!isValid(value)){ return null}

    return th.value.get(value, 'nextItem') || null
}
function setNextItem(value, item){
    /**
     * Gets the item from the list item
     * @param {Object} listItem The list item
     * @returns {Object} The item
     */

    if(!isValid(value)){ return null}

    return th.value.set(value, 'nextItem', item) 
}


function clearNeighbors(value){
    /**
     * Clears the neighbors of the thing
     * @param {Object} thing The thing
     * @returns {Object} The thing
     */

    let previousItem = getPreviousItem(value)
    if(h.isNotNull(previousItem)){
        th.value.set(value, 'previousItem', null)
    }
    let nextItem = getNextItem(value)
    if(h.isNotNull(nextItem)){
        value = th.value.set(value, 'nextItem', null)
    }

    return value
    
}



function lt(record1, record2){
    /**
     * Checks if the first record is less than the second
     * @param {Object} record1 The first record
     * @param {Object} record2 The second record
     * @returns {Boolean} True if the first record is less than the second
     */

    // Consider position first
    if(h.isNull(record1?.position) && h.isNotNull(record2?.position)){
        return false
    }
    if(h.isNotNull(record1?.position) && h.isNull(record2?.position)){
        return true
    }
    
    if(record1.position < record2.position){ return true }

    // Consider presence absence of next items 
    if(h.isNull(record1?.previousItem) && h.isNotNull(record2?.previousItem)){
        return true
    }
    if(h.isNotNull(record1?.previousItem) && h.isNull(record2?.previousItem)){
        return false
    }
    
    return false
    
}

function gt(record1, record2){
    /**
     * Checks if the first record is greater than the second
     * @param {Object} record1 The first record
     * @param {Object} record2 The second record
     * @returns {Boolean} True if the first record is greater than the second
     */

    // Consider position first
    if(h.isNull(record1?.position) && h.isNotNull(record2?.position)){
        return true
    }
    if(h.isNotNull(record1?.position) && h.isNull(record2?.position)){
        return false
    }

    if(record1?.position > record2.position){ return true }
    
    // Consider presence absence of next items 
    if(h.isNull(record1?.nextItem) && h.isNotNull(record2?.nextItem)){
        return true
    }
    if(h.isNotNull(record1?.nextItem) && h.isNull(record2?.nextItem)){
        return false
    }

    
    return false
}



function isSame(record1, record2){
    /**
     * Checks if two list items are the same
     * @param {Object} record1 The first record
     * @param {Object} record2 The second record
     * @returns {Boolean} True if the two records are the same
     */
    return th.isSame(record1, record2)
}

function setNeighbors(record, previousRecord, nextRecord){
    /**
     * Sets the neighbors of a list item
     * @param {Object} record The record
     * @param {Object} previousRecord The previous record
     * @param {Object} nextRecord The next record
     * @returns {Object} The record
     */

    record.previousItem = th.ref.get(previousRecord)
    record.nextItem = th.ref.get(nextRecord)
    if(h.isNotNull(previousRecord)){
        previousRecord.nextItem = th.ref.get(record)
    }
    if(h.isNotNull(nextRecord)){
        nextRecord.previousItem = th.ref.get(record)
    }

    return record
    
}



// -----------------------------------------------------
//  Array 
// -----------------------------------------------------


function search(values, conditions){
    /**
     * Searches an array of things
     * @param {Array} things The things
     * @param {Object} conditions The conditions
     * @returns {Object} Te first listItem encountered
     */

    // Ensure it is array

    
    
    return filter(values, conditions)?.[0] || null
    
}

function filter(values, conditions){
    /**
     * Filters an array of things
     * @param {Array} things The things
     * @param {Object} conditions The conditions
     * @returns {Array} The filtered array
     */

    values = h.toArray(values)
    let results = th.filter(values, conditions)

    
    return results
    
}


function sortListItems(values){
    /**
     * Sorts an array of things
     * @param {Array} things
     * @param {String} sortBy
     * @param {String} sortOrder
     */

  
    values = h.toArray(values)
    values = h.toArray(values).sort(function(a, b){
        if(lt(a, b)){ return -1 }
        if(gt(a, b)){ return 1 }
        return 0
    })
    
    return values
    
}

function getFirstItem(values){
    /**
     * Gets the first item of a list
     * @param {Object} itemList The list
     * @returns {Object} The first item
     */

    values = h.toArray(values)
    
    return search(values, {'position': 0}) ||  search(values, {'previousItem': null}) || null
    
}

function getLastItem(values){
    /**
     * Gets the last item of a list
     * @param {Object} itemList The list
     * @returns {Object} The first item
     */

    
    values = h.toArray(values)

   
    let maxItem = null
    for(let i of values){
        if(!maxItem || getPosition(i) > getPosition(maxItem)){
            maxItem = i
        }
    }
    return maxItem || null
    
    let conditions = {'nextItem': null}
    let results = search(values,conditions) || null
    return results

}
