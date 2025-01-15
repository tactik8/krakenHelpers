
import { krakenHelpers as h} from '../../krakenHelpers/krakenHelpers.js'



class KrThing{
    constructor(record_or_record_type, record_id, metadata){

        // Property that can be used to differentiate from normal objects

        this.id = 'thing_' + h.base.uuid.new()
        this.instanceof = 'KrThing'
        this._system = null
        this._record_type = null
        this._record_id = null


        this._thingsDB = null

        this._callbacks = {}

        this._eventRecordCache = null


        
        if(h.thing.isThing(record_or_record_type)){
            this.system = h.thing.toThing(record_or_record_type, null, metadata)
        } else {
            this.system = h.thing.new(record_or_record_type, record_id, metadata)
        }

       
        this._convertChildrenThingsRecordsToThingObjects()
        
    }




    // -----------------------------------------------------
    //  ThingsDB helpers 
    // -----------------------------------------------------

    get thingsDB(){
        /**
         * Get the repository of things 
         */
        return this._thingsDB || null
        
    }

    set thingsDB(value){
        /**
         * Set the repository of things 
         */
        this._thingsDB = value

    }
    
    getCallbacks(callbackType){
        /**
         * Get the repository of things 
         */
        if(h.isNotNull(this.thingsDB)){
            return this._thingsDB.callbacksGet(this.record_type, this.record_id, callbackType)
        } else {
            return this._callbacks?.[callbackType]
        }
      

    }

    setCallbacks(callback, callbackType){
        /**
         * Set the repository of things 
         */
        if(h.isNotNull(this.thingsDB)){
            this._thingsDB.callbacksSet(this.record_type, this.record_id, callback, callbackType)
        } else {
            this._callbacks[callbackType] = this._callbacks?.[callbackType] || []
            this._callbacks[callbackType].push(callback)
        }
    }

    updateChildren(){
        /**
         * Update children things with most recent object from database
         * 
         */

        this.system = h.thing.children.replaceWithRecord(this.system, this._thingsDB.getAll())
        
    }
    
    // -----------------------------------------------------
    //  Base 
    // -----------------------------------------------------

    toString(){
        /**
         * Returns the string representation of the thing
         * @returns {String} The string representation of the thing
         */
        return this._system
    }

    toJSON(){
        /**
         * Returns the record as object
         * @returns {Object} The record as object
         */

        
        let record = h.thing.record.get(this.system)
        
        if(h.isNotNull(record.previousItem)){
            record.previousItem = h.thing.ref.get(record.previousItem)
        }
        if(h.isNotNull(record.nextItem)){
            record.nextItem = h.thing.ref.get(record.nextItem)
        }

        
        return h.thing.record.get(this.system)
        
    }


    get json(){
        /**
         * Returns the record as object
         * @returns {Object} The record as object
         */
        return JSON.stringify(this.record, null, 4)
    }



    get _propertyValues(){
        return this.system?._propertyValues
    }

    set _propertyValues(value){
        this.system._propertyValues = value
    }

    get _version(){
        return this._system._version
    }

    
    get system(){
        /**
         * Provides abstraction for event handling and cleanup 
         */
        //this._eventMonitoringCache = h.thing.hash(this._system)


        // Returns system record from thingsDB repository if exists, else uses local

        if(h.isNotNull(this._thingsDB)){
            return this._thingsDB.systemGet(this.record_type, this.record_id)
        } else {
            return this._system
            
        }
        
    }

    set system(value){
        /**
         * Event monitoring
         */

        // Write to thingsDB if exists
        if(h.isNotNull(this._thingsDB)){
            this._thingsDB.systemSet(value)

        } else {
            this._system = value
        }
        
        
        this._record_type = h.thing.record_type.get(value)
        this._record_id = h.thing.record_id.get(value)

        
        this._convertChildrenThingsRecordsToThingObjects()

        // Broadcast event 
        if(this.recordHasChanged() === true){
            this.broadcastEvent('thing', this.ref)
        } 
        
    }


    // -----------------------------------------------------
    //  Event record cache
    //  Cache of the record from the last event
    //  Used to decide if broadcast or not (somehting changed)
    // -----------------------------------------------------


    recordHasChanged(){
        /**
         * Returns true if the record has changed since last event broadcast
         */

        
        let hashValue = h.base.hash.get(this.record)

        let oldValue = this.getEventRecordCache()
        
        if (hashValue != oldValue){
            return true
        }
        return false
    }
    
    getEventRecordCache(){
        /**
         * Retrieves the record from the last broadcast
         * 
         */
        if(h.isNotNull(this.thingsDB)){
            return this.thingsDB.eventRecordCacheGet(this.record_type, this.record_id)
        } else {
            return this._eventRecordCache
        }
        
        
    }

    storeEventRecordCache(){
        /**
         * Sets the record from the last broadcast
         * 
         */

        
        let hashValue = h.base.hash.get(this.record)

        if(h.isNotNull(this.thingsDB)){
            this.thingsDB.eventRecordCacheSet(this.record_type, this.record_id, hashValue)
        } else {
            this._eventRecordCache = hashValue
        }
    }


    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------

    
    
    _convertChildrenThingsRecordsToThingObjects(){
        /**
         * Converts the children things records to thing objects
         * @returns {Object} The record
         * 
         */

        // Get children things
        let children = h.thing.children.get(this.system, false)

        children = children.filter(x => h.thing.isNotSame(x, this._system))

        if(h.isNull(children)){ return }

        // Convert children things to thing objects
        children = children.map(x => KrThing.toThing(x))


        // Replace values in things by equivalent class object
        if(h.isNotNull(children)){
           
            this._system = h.thing.children.replaceWithRecord(this.system, children)
      
        }
        
        return 


    }
    
    // -----------------------------------------------------
    //  Properties 
    // -----------------------------------------------------

    get record_type(){
        /**
         * Returns the record type
         * @returns {String} The record type
         * 
         */
        if(h.isNull(this._record_id)){
            this._record_type =  h.thing.record_type.get(this.system)
        }
        return this._record_type
    }
    set record_type(value){
        /**
         * Sets the record type
         * @param {String} value The record type
         * @returns {Object} The record
         */
         this.system = h.thing.record_type.set(this.system, value)
        this._record_type = value
    }

    
    get record_id(){
        /**
         * Returns the record id
         * @returns {String} The record id
         */

        if(h.isNull(this._record_id)){
            this._record_id =  h.thing.record_id.get(this.system)
        }
        return this._record_id
        
    }
    set record_id(value){
        /**
         * Sets the record id
         * @param {String} value The record id
         * @returns {Object} The record
         */
        this.system = h.thing.record_id.set(this.system, value)
        this._record_id = value
    }
    

    get ref(){
        /**
         * Returns the record ref (type and id)
         * @returns {String} The record ref (type and id)
         */
        return h.thing.ref.get(this.system)
    }
    set ref(record){
        /**
         * Sets the record ref (type and id)
         * @param {String} record_or_record_type The record ref (type and id)
         * @param {String} record_id The record ref (type and id)
         * @returns {Object} The record
         */
        this.system = h.thing.ref.set(this.system, record)
    }

    get record(){
        /**
         * Returns the record without propertyValues
         * @returns {Object} The record without propertyValues
         */
        return h.thing.record.get(this.system)
    }
    set record(value){
        /**
         * Sets the record
         * @param {Object} value The record
         * @returns {Object} The record
         */
        this.system = h.thing.toThing(value)
        
    }

    

    get children(){
        /**
         * Get sub things
         * 
         */
        let children = []
        
        for(let pv of this._propertyValues || []){
            if(pv.object.propertyID == 'previousItem'){
                continue
            }
            if(pv.object.propertyID == 'nextItem'){
                continue
            }
            if(h.thing.isThing(pv.object.value)){
                children.push(pv.object.value)
            }
        }

        return children
        
    }

    // -----------------------------------------------------
    //  Values 
    // -----------------------------------------------------


    get(propertyID){
        return this.getValues(propertyID)
    }
    set(propertyID, value, metadata){
        return this.setValue(propertyID, value, metadata)
    }
    add(propertyID, value, metadata){
        return this.addValue(propertyID, value, metadata)
    }
    delete(propertyID, value, metadata){
        return this.deleteValue(propertyID, value, metadata)
    }

    
    getValues(propertyID){
        /**
         * Returns the values for a given property
         * @param {String} propertyID The propertyID
         * @returns {Object} The record values for a given property
         */
        return h.thing.values.get(this.system, propertyID)
    }

    getValue(propertyID){
        /**
         * Returns the value for a given property
         * @param {String} propertyID The propertyID
         * @returns {Object} The record value for a given property
         */
        return h.thing.value.get(this.system, propertyID)
    }

    setValue(propertyID, value, metadata){
        /**
         * Sets the value for a given property
         * @param {String} propertyID The propertyID
         * @param {Object} value The record value for a given property
         * @returns {Object} The record
         */
        this.system = h.thing.value.set(this.system, propertyID, value, metadata)
    }

    replaceValue(propertyID, value, metadata){
        /**
         * Sets the value for a given property
         * @param {String} propertyID The propertyID
         * @param {Object} value The record value for a given property
         * @returns {Object} The record
         */
        this.system = h.thing.value.replace(this.system, propertyID, value, metadata)
    }
    
    addValue(propertyID, value, metadata){
        /**
         * Add the value for a given property
         * @param {String} propertyID The propertyID
         * @param {Object} value The record value for a given property
         * @returns {Object} The record
         */
        this.system = h.thing.value.add(this.system, propertyID, value, metadata)
    }

    deleteValue(propertyID, value, metadata){
        /**
         * Add the value for a given property
         * @param {String} propertyID The propertyID
         * @param {Object} value The record value for a given property
         * @returns {Object} The record
         */
        this.system = h.thing.value.delete(this.system, propertyID, value, metadata)
    }

    getPropertyValue(propertyID){
        /**
         * Returns the property value for a given property
         * @param {String} propertyID The propertyID
         * @returns {Object} The record value for a given property
         */
        return h.thing.propertyValue.get(this.system, propertyID)
    }

    getPropertyValues(propertyID){
        /**
         * Returns the property value for a given property
         * @param {String} propertyID The propertyID
         * @returns {Object} The record value for a given property
         */
        return h.thing.propertyValues.get(this.system, propertyID)
    }

    
    // -----------------------------------------------------
    //  Comparisons 
    // -----------------------------------------------------

    isSame(other){
        /**
         * Checks if two records are the same type and id
         * @param {Object} other The other record
         * @returns {Boolean} True if the records are the same
         */
        return h.thing.isSame(this.system, other.system)
    }

    isNotSame(other){
        /**
         * Checks if two records are not the same type and id
         * @param {Object} other The other record
         * @returns {Boolean} True if the records are not the same
         */
        return h.thing.isNotSame(this.system, other.system)
    }

    eq(other){
        /**
         * Checks if two records are identically the same
         * @param {Object} other The other record
         * @returns {Boolean} True if the records are the same
         */
        return h.thing.eq(this.system, other.system)
    }

    ne(other){
        /**
         * Checks if two records are not identically the same
         * @param {Object} other The other record
         * @returns {Boolean} True if the records are not the same
         */
        return h.thing.ne(this.system, other.system)
    }

    lt(other){
        /**
         * Checks if this record is less than the other record
         * @param {Object} other The other record
         * @returns {Boolean} True if this record is less than the other record
         */
        return h.thing.lt(this.system, other.system)
    }

    gt(other){
        /**
         * Checks if this record is greater than the other record
         * @param {Object} other The other record
         * @returns {Boolean} True if this record is greater than the other record
         */
        return h.thing.gt(this.system, other.system)
    }


    // -----------------------------------------------------
    //  Operations 
    // -----------------------------------------------------

    merge(other){
        /**
         * Merges the other record into this record
         * @param {Object} other The other record
         * @returns {Object} The record
         */
        this.system = h.thing.merge(this.system, other.system)
    }

    mergeDeep(other){
        /**
         * Merges the other record into this record
         * @param {Object} other The other record
         * @returns {Object} The record
         */
        this.system = h.thing.mergeDeep(this.system, other.system)
    }

    replaceChildren(childrenThings){
        /**
         * Replaces the children of a thing
         */

        // Convert children
        if(!this._propertyValues){
            return
        }
        for(let pv of this._propertyValues){

            if(pv.object.propertyID == 'previousItem'){
                continue
            }

            if(pv.object.propertyID == 'nextItem'){
                continue
            }

            let t = KrThing.searchThing(childrenThings, pv.object.value)
            if(h.isNotNull(t)){

                if(h.isNotNull(t?.id) && t?.id != Object.value?.id){
                    pv.object.value = t
                    t.replaceChildren(childrenThings)
                }
            }
           
        }

    }

    // -----------------------------------------------------
    //  List operations 
    // -----------------------------------------------------

    insertBefore(value, position){
        /**
         * 
         */
        return this.insert(value, position)
        
    }
    insertAfter(value, position){
        /**
         * Insert after the given position
         */
        return this.insert(value, position + 1)

    }

    prepend(value){
        /**
         * Prepend the value
         */
        return this.insert(value, 0)
    }

    append(value){
        /**
         * Append the value
         */

        if(h.isNull(this.itemListElement)){
            return this.insert(value, 0)
        }
        
        let maxItem = this.itemListElement.reduce((maxItem, item) => item.position > maxItem.position ? item : maxItem );
        return this.insert(value, maxItem.position + 1)
    }
    
    insert(value, position){
        /**
         * Inserts a value into the list at the given position
         * @param {Object} value The value
         *    
         */

        if(h.isNull(position)){
            return this.append(value) 
        }
        
        // Convert to thing
        let newItem = KrThing.toThing(value)

        // Add listitem wrapper if missing
        if(newItem.record_type !="ListItem"){
            let newListItem = new KrThing('ListItem', h.base.uuid.new())
            newListItem.item = newItem
            newItem = newListItem
        }

        // Get previous and next item
        let previousItem = null
        let nextItem = null
        
        for(let i of this.getValues('itemListElement')){
            if(i.position == position - 1){
                previousItem = i
            }
            if(i.position == position){
                nextItem = i
            }
        }

        // Assign position
        newItem.position = position
        
        // Insert new item
        if(previousItem){
            previousItem.next = newItem
            newItem.previous = previousItem
        }
        if(nextItem){
            nextItem.previous = newItem
            newItem.next = nextItem
        }
        
        // Update positions
        for(let i of this.itemListElement){
           
            if(i.position >= position){
                i.position += 1
            }
        }
        
        // Insert new item
        this.add('itemListElement', newItem)
        
    }


    search(record_or_record_type, record_id){
        /**
         * Search for an item
         */

        let record_type = record_or_record_type?.record_type || record_or_record_type?.['@type'] || record_or_record_type
        record_id = record_or_record_type?.record_id || record_or_record_type?.['@id'] || record_id

        for(let v of this.getValues('itemListElement')){
            if(v.record_type == record_type && v.record_id == record_id){
                return v
            }
            if(v?.item?.record_type == record_type && v?.item?.record_id == record_id){
                return v
            }
            
        }
        return null
    }

    searchByPosition(position){
        /**
         * Search for an item by position
         */
        for(let v of this.getValues('itemListElement')){
            if(v.position == position){
                return v
            }
           
        }
        return null
    }
    
    delete(record_or_record_type, record_id){
        /**
         * Deletes a value from the list
         */

       
        let itemToRemove = this.search(record_or_record_type, record_id)
        let previousItem = this.search(itemToRemove.previousItem)
        let nextItem = this.search(itemToRemove.nextItem)
        let position = itemToRemove.position

        if(previousItem){
            previousItem.nextItem = nextItem
        }
        if(nextItem){
            nextItem.previousItem = previousItem
        }
        
        this.deleteValue('itemListElement', itemToRemove)

        // Update positions
        for(let i of this.itemListElement){

            if(i.position > position){
                i.position = i.position - 1
            }
        }

        // clean up removed item
        itemToRemove.previousItem = null
        itemToRemove.nextItem = null
        itemToRemove.position = null

        
        return
    }

    

    prependUnder(value){
        /**
         * Prepend the value
         */
        return this.moveUnder(value, maxItem.position + 0)
        
    }

    appendUnder(value){
        /**
         * Append the value
         */

        let hasPart = this.getValue('hasPart')
        if(h.isNull(hasPart)){
            return this.moveUnder(value, 0)
        }

        let childItemListElement = hasPart.getValues('itemListElement')
        if(h.isNull(childItemListElement)){
            return this.moveUnder(value, 0)
        }
        
        let maxItem = childItemListElement.reduce((maxItem, item) => item.position > maxItem.position ? item : maxItem );
        return this.moveUnder(value, maxItem.position + 1)
         
    }

    moveUnder(value, position){
        /**
         * Moves the childThing under the parentThing under hasPart
         */

        this.setHasPart()
        let hasPart = this.getValue('hasPart')

        return hasPart.insert(value, position)
        
    }
    
    setHasPart(){
        /**
         * Sets the hasPart property as itemList if missing
         */
        let hasPart = this.getValue('hasPart')

        // Create hasPart itemList if missing
        if(h.isNull(hasPart) || hasPart.record_type != 'ItemList'){
            let newItemList = new KrThing('ItemList', h.base.uuid.new())
            for(let v of this.getValues('hasPart')){
                newItemList.append(v)
            }
            this.set('hasPart', newItemList)

            hasPart = newItemList
        }
        
    }
    
    

    

    get position(){
        return h.thing.value.get(this.system, 'position')
    }

    set position(value){
        return h.thing.value.set(this.system, 'position', value)
    }

    get previousItem(){
        return h.thing.value.get(this.system, 'previousItem')
    }

    set previousItem(value){
        return h.thing.value.set(this.system, 'previousItem', value)
    }

    get nextItem(){
        return h.thing.value.get(this.system, 'nextItem')
    }

    set nextItem(value){
        return h.thing.value.set(this.system, 'nextItem', value)
    }

    
    // -----------------------------------------------------
    //  Static operations 
    // -----------------------------------------------------

    static isValid(record){
        /**
         * Checks if the record is valid
         * @param {Object} record The record
         * @returns {Boolean} True if the record is valid
         */
        return h.thing.isValid(record)
    }
    
   

    // -----------------------------------------------------
    //  Array 
    // -----------------------------------------------------

    static sort(things, orderBy, orderDirection) {
        /**
         * Sorts an array of things
         * @param {Array} things
         * @param {Object} conditions
         * @returns {Array} The sorted array
         */
        return h.thing.sort(things, orderBy, orderDirection)
    }

    static filter(things, conditions) {
        /**
         * Filters an array of things
         * @param {Array} things
         * @param {Object} conditions
         */
        return h.thing.filter(things, conditions)
    }

    static find(things, record_or_record_type, record_id) {
        /**
         * Finds a record in an array of things by type and id
         * @param {Array} things
         * @param {Object} record_or_record_type The record type
         * @param {String} record_id The record id
         * @returns {Object} The record
         */
        return h.thing.find(things, record_or_record_type, record_id)
    }

    static push(things, thing) {
        /**
         * Pushes a thing into an array of things, merge if exists
         * @param {Array} things
         * @param {Object} thing The thing
         * @returns {Array} The array of things
         */
        return h.thing.push(things, thing)
    }

    static pop(things, thing) {
        /**
         * Pops a thing from an array of things
         * @param {Array} things
         * @param {Object} thing The thing
         * @returns {Array} The array of things
         */
        return h.thing.pop(things, thing)
    }
    
    static dedupe(things) {
        /**
         * Dedupes an array of things
         * @param {Array} things
         * @returns {Array} The deduped array of things
         */
        return h.thing.dedupe(things)
    }    

    static length(things) {
        /**
         * Returns the length of an array of things
         * @param {Array} things
         * @returns {Number} The length of the array of things
         */
        return h.thing.length(things)
    }



   
    // -----------------------------------------------------
    //  Event listeners
    // -----------------------------------------------------

    addEventListener(eventType, callback){
        /**
         * Adds an event listener to the record
         * @param {String} event The event
         * @param {Function} callback The callback
         * @returns {Object} The record
         */

        this.setCallbacks(callback, eventType)
        if(eventType !='all'){
             this.setCallbacks(callback, 'all')
        }
      
    }

    broadcastEvent(eventType, message){
        /**
         * Broadcasts an event to all listeners
         * @param {String} event The event
         * @param {Object} message The message
         * @returns {Object} The record
         */


        //console.log('BROADCAST')
        let event = {
            "@type": "Action",
            "@id": h.uuid.new(),
            object: this,
            name: message
        }


        // Store copy of record in event Cache
        this.storeEventRecordCache()
        

        // Execute callbacks
        for(let callback of h.toArray(this.getCallbacks(eventType))){
            callback(event)
        }

        for(let callback of h.toArray(this.getCallbacks('any'))){
            callback(event)
        }

        for(let callback of h.toArray(this.getCallbacks('all'))){
            console.log('broadcast all')
            callback(event)
        }

        
      
    }

    

    // -----------------------------------------------------
    //  Shortcuts 
    // -----------------------------------------------------

    
    get name(){
        return h.thing.value.get(this.system, 'name')
    }

    set name(value){
        this.system = h.thing.value.set(this.system, 'name', value)
    }

    get url(){
        return h.thing.value.get(this.system, 'url')
    }
    set url(value){
        this.system = h.thing.value.set(this.system, 'url', value)
    }

    get itemListElement(){
        return h.thing.values.get(this.system, 'itemListElement')
    }
    set itemListElement(value){
        this.system = h.thing.values.set(this.system, 'itemListElement', value)
    }

    get item(){
        return h.thing.value.get(this.system, 'item')
    }
    set item(value){
        this.system = h.thing.value.set(this.system, 'item', value)
    }


    get other(){
        return h.thing.value.get(this.system, 'other')
    }
    set other(value){
        this.system = h.thing.value.set(this.system, 'other', value)
    }

    // -----------------------------------------------------
    //  Static 
    // -----------------------------------------------------


    static toThing(record_or_record_type, record_id, defaultValue=null){
        /**
         * Make a new thing
         * @param {Object} record_or_record_type The record type
         * @param {String} record_id The record id
         * @returns {Object} The thing
         */

        
        
        let t = record_or_record_type
        
        if(!(t instanceof KrThing)){
            t = new KrThing(record_or_record_type, record_id)
        }  

        // Convert children
        for(let pv of t._propertyValues || []){
            if(pv.object.propertyID == 'previousItem'){
                continue
            }
            if(pv.object.propertyID == 'nextItem'){
                continue
            }

            if(h.thing.isThing(pv.object.value)){
                pv.object.value = KrThing.toThing(pv.object.value, null)
            }
            
        }
        
        return t
        

    }

    
    
    static new(record_or_record_type, record_id){
        /**
         * Make a new thing
         * @param {Object} record_or_record_type The record type
         * @param {String} record_id The record id
         * @returns {Object} The thing
         */

        if(record_or_record_type instanceof KrThing){
            return record_or_record_type
        } else {
            return new KrThing(record_or_record_type, record_id)
        }
        
    }

    static searchThing(things, record_or_record_type, record_id){
        /**
         * Search a thing in an array of things
         */
        let record_type = record_or_record_type?.record_type || record_or_record_type?.["@type"] || record_or_record_type
        record_id = record_or_record_type?.record_id || record_or_record_type?.["@id"] || record_id

        for(let t of things){
            if(t.record_type == record_type && t.record_id == record_id){
                return t
            }
        }
        return null
        
    }
    
}



export const krakenThing = {
    KrThing: KrThing
}