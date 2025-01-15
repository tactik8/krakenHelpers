import { krakenHelpers as h} from '../../../krakenHelpers/krakenHelpers.js'

import { elementEvents} from '../elementEvents/elementEvents.js'



// standardized element parts
const partMain = 'krMain'
const partHeader = 'krHeader'
const partFooter = 'krFooter'
const partContent = 'krContent'
const partSidebar = 'krSidebar'
const partDragHandle = 'krDragHandle'
const partActionMenu = 'krActionMenu'

const classSelectable = 'krSelectable'
const classHandle = 'krHandle'
const classInitialized = 'krSelectableInitialized'
const classMatInitialized = 'krSelectionMatInitialized'
const classSelected = 'krSelected'
const classSelectionMat = 'krSelectionMat'
const classDragging = 'krDragging'
const classDraggable = 'krDraggable'




export class KrElementController {
    
    constructor(element, engine){

        this.id = 'controller_' + h.base.uuid.new()
    
        this._element = null
    
        this._engine = null


        // Flags
        this._isInitialized = false
        this._isEngineInitialized = false
        
        // Attribute Caches
        this._record_type = null
        this._record_id = null
        this._propertyID = null
        this._valueID = null
        this._templateID = null

        // Content cache
        this._lastRenderContentCache = null

        
        //
        this._record = null

        // Set element (will initialize the element if conditions met)
        this.engine = engine
        this.element = element

        // Init
        this.init()
    }





    // -----------------------------------------------------
    //  Init 
    // -----------------------------------------------------


    init(){
        /**
         * Initialize the controller
         */


        // Skip if already initialized
        if(this._isInitialized == true){
            return true
        }

         
        // Skip if element missing
        if(h.isNull(this.element)){
            return false
        }

        // Set original content as template
        let resultInitTemplate = this._initTemplate()
        if(resultInitTemplate == false){
            return false
        }
        
        // Skip if engine not initialized
        let resultInitEngine = this._initEngine()
        if(resultInitEngine == false){
            return false
        }


        // Set flag
        this._isInitialized = true

        
        // Render
        let resultRender = this.render()
        if(resultRender == false){
            return false
        }

        
        
        // Return
        return true
        
    }

    unRegister(){
        /**
         * Unregister the controller
         */
        this.engine.unRegister(this)
        //this.engine.removeEventListener(this.record_type, this.record_id, this.eventHandler.bind(this))
    }

    _initEngine(){
        /**
         * 
         */
        // Skip if already initialized
        if(this._isEngineInitialized == true){
            return true
        }

        // Skip if no engine
        if(h.isNull(this.engine)){
            return false
        }

        // Skip if no type , id
        if(h.isNull(this.record_type) || h.isNull(this.record_id) || this.record_type.includes('{{')){
            return false
        }

        // add listener
        this.engine.addEventListener(this.record_type, this.record_id, this.eventHandler.bind(this))

        // Set flag
        this._isEngineInitialized = true

        //
        return true
    }

    
    _initTemplate(){
        /**
         * Initialize the template
         * Set the content of the element as the initial template
         * Will get overwrittened if a templateID is provided
         */
        
        this.template = this.element.innerHTML
        this.element.innerHTML = ''
        
    }

    
    _initContent(){
        /**
         * Initialize the content
         */
        
    }

    
    

    // -----------------------------------------------------
    //  Render Methods 
    // -----------------------------------------------------

    eventHandler(event){
        /**
         * Event handler
         */
        this.render()
    }


    render(){
        /**
         * Renders the controller
         */        


        // Error handling
        if(this._isInitialized != true){
            return false
        }
        

        // Skip if render is freezed
        if(this.engine.renderAllowed == false){
            this.engine.addRenderCache(this)
            return true
        }


        // Skip if no record        
        if (h.isNull(this.thing?.record)){
            console.log('no record', this.record_type, this.record_id, this.thing)
            return false
        }


        // Assign thing id
        this.thing_id = this.thing.id


        // Assign value hash
        this.value_hash = this.thing.record


        // Render new content
        let htmlRecord
        let content = ''


        // Get record
        if(h.isNull(this.propertyID)){
            htmlRecord = h.base.heading.addHeadings(this.thing.record)
            content = h.base.template.get(this.template, htmlRecord)

            if(content != this._lastRenderContentCache){
                console.log('has changed', this.record_type, this.record_id)
                console.log(content)
            } else {
                console.log('no change', this.record_type, this.record_id)
            }

        }

        // If propertyID is provided and no valueID, render things for each value
        if(h.isNotNull(this.propertyID) && h.isNull(this.valueID)){
            this.renderRemoveExpiredValues()
            this.renderUpdateValues()
        }

        // If valueID provided, render the value only
        if(h.isNotNull(this.propertyID) && h.isNotNull(this.valueID)){
            let pvs = this.thing.getPropertyValues(this.propertyID)
            let pv = pvs.find(x => x?.["@id"] == this.valueID)
            let record = h.base.dot.set(this.thing.record, this.propertyID, pv?.object?.value?.record || pv?.object?.value)
            htmlRecord = h.base.heading.addHeadings(record)
            content = h.base.template.get(this.template, htmlRecord)

        }


        // Update inner HTML if content has changed and not equal to current value
        if(content != this._lastRenderContentCache){
            this.element.innerHTML = String(content)
            this._lastRenderContentCache = content
            this.render_count += 1

        } 

        // Init events
        elementEvents.init(this)

        //
        return true

    }

    
    renderRemoveExpiredValues(){
        /**
         * Removes expired controllers and elements values
         */

        
        // Get property Values
        let pvs = this.thing.getPropertyValues(this.propertyID)
        let pvsIDs = pvs.map(x => x?.["@id"]) || []


        // if value element, remove itself
        if(h.isNotNull(this.valueID)){
            if(!(pvsIDs.includes(this.valueID))){
                this.engine.remove(this)
            }
            return
        }
        
        
        // Get elements with same type, id and property
        let cssSelector = `[data-record-type="${this.record_type}"]`
        cssSelector += `[data-record-id="${this.record_id}"]`
        cssSelector += `[data-propertyID="${this.propertyID}"]`
        let elements = this.element.querySelectorAll(cssSelector)

        // Remove controllers and elements not in values
        for(let e of elements){
            if(!(pvsIDs.includes(e.getAttribute('data-valueID')))){
                let c = this.engine.getController(e.id)
                c.remove()
            }
        }
        
    }

    renderUpdateValues(){
        /**
         * Updates values if a property controller
         */

        let item = null
        let pvs = this.thing.getPropertyValues(this.propertyID)
        for(let pv of pvs){

            let cssSelector = `[data-record-type="${this.record_type}"]`
            cssSelector += `[data-record-id="${this.record_id}"]`
            cssSelector += `[data-propertyID="${this.propertyID}"]`
            cssSelector += `[data-valueID="${pv?.["@id"]}"]`
            let element = this.element.querySelector(cssSelector)

            if(h.isNull(element)){
                element = document.createElement('div')
                element.classname = this.element.classname
                element.setAttribute('data-record-type', this.record_type)
                element.setAttribute('data-record-id', this.record_id)
                element.setAttribute('data-propertyID', this.propertyID)
                element.setAttribute('data-templateID', this.templateID)
                element.setAttribute('data-valueID', pv?.["@id"])
            }
            
            if(h.isNull(item)){
                this.element.prepend(element)
            } else {
                item.after(element)
            }
            item = element
            
        }
        
    }


    
    

    // -----------------------------------------------------
    //  Attributes 
    // -----------------------------------------------------

    getAttribute(attributeName){
        /**
         * Get an attribute
         */

        let shortName = attributeName.replace('data-', '')
        shortName = shortName.startsWith('_') ? shortName : '_' + shortName
        let longName = attributeName.startsWith('data-') ? attributeName : 'data-' + attributeName 


        
        if(h.isNull(this?.[shortName])){
            if(h.isNotNull(this.element)){
                this[shortName] = this._element.getAttribute(longName)
            }
        }
        return this?.[shortName] || null
                   
    }

    setAttribute(attributeName, value){
        /**
         * Set an attribute
         */

        let shortName = attributeName.replace('data-', '')
        shortName = shortName.startsWith('_') ? shortName : '_' + shortName
        let longName = attributeName.startsWith('data-') ? attributeName : 'data-' + attributeName 

        
        this[shortName] = value

       
        this._element.setAttribute(longName, value)
        return
    }
    

    get thing_id(){
        return this.getAttribute('data-thing-id')
    }
    set thing_id(value){
        return this.setAttribute('data-thing-id', value)
    }
    
    get record_type(){
        return this.getAttribute('data-record-type')
    }
    set record_type(value){
        return this.setAttribute('data-record-type', value)
    }

    get record_id(){
        return this.getAttribute('data-record-id')
    }
    set record_id(value){
        return this.setAttribute('data-record-id', value)
    }

    get ref(){
        if(h.isNotNull(this.record_type) || h.isNotNull(this.record_id)){
            return { "@type": this.record_type, "@id": this.record_id }
        } else {
            return null
        }
    }
    
    set ref(value){
        this.record_type = value?.record_type || value?.['@type']
        this.record_id = value?.record_id || value?.['@id']
    }

    
    get propertyID(){
        return this.getAttribute('data-propertyID')
    }
    set propertyID(value){
        return this.setAttribute('data-propertyID', value)
    }

    get valueID(){
        return this.getAttribute('data-valueID')
    }
    set valueID(value){
        return this.setAttribute('data-valueID', value)
    }

    get templateID(){
        return this.getAttribute('data-templateID')
    }
    set templateID(value){
        return this.setAttribute('data-templateID', value)
    }

    get element(){
        return this._element
    }

    set element(element){
        this._element = element
        this.init()
    }

    get engine(){
        return this._engine
    }

    set engine(value){
        this._engine = value
        this.init()
    }
    
    get template(){
        /**
         * Get the template
         * Prioritise templateID if one exists
         */

        let template = this._template

        if(h.isNotNull(this.templateID)){
            template = this.engine.template.get(this.templateID)
        } 
        return template
    }

    set template(value){
        /**
         * 
         */

        try{
            value = value.trim()
        } catch {}
        
        
        // Store template
        this._template = value

        if(h.isNotNull(this.templateID)){
            if(h.isNotNull(value)){
                this.engine.template.set(this.templateID, value)
            }
        }


        
    }


    get thing(){
        return this.engine.thing.get(this.record_type, this.record_id)
    }

    set thing(value){
        this.record_type = value?.record_type || value?.['@type']
        this.record_id = value?.record_id || value?.['@id']
        this.engine.thing.set(value)
        this.init()
    }

    
    get record(){
        return this.engine.record.get(this.record_type, this.record_id)
    }

    set record(value){
        this.ref = value
        this.engine.record.set(record)
        this.init()
    }


    get value_hash(){
        return this.getAttribute('data-value-hash')
    }
    set value_hash(value){
        let valuehAsh = h.base.hash.get(value)
        return this.setAttribute('data-value-hash', valuehAsh)
    }

    get render_count(){
        return this.getAttribute('data-render-count')
    }
    set render_count(value){
        return this.setAttribute('data-render-count', value)
    }

    // -----------------------------------------------------
    //  States 
    // -----------------------------------------------------


    setSelectable(value){
        /**
         * Set the selectable state
         */
        if(value == true){
            this.element.classList.add(classSelectable)
        } else {
            this.element.classList.remove(classSelectable)
        }
        
    }
    isSelectable(){
        /**
         * Check if the element is selectable
         */
        return this.element.classlist.contains(classSelectable)
    }
    
    setSelected(value){
        /**
         * Set the selected state
         */
        if(value == true){
            this.element.classList.add(classSelected)
        } else {
            this.element.classList.remove(classSelected)
        }
    }

    
    isSelected(){
        /**
         * Check if the element is selected
         */
        return this.element.classlist.contains(classSelected)
        
    }


    setDraggable(value){
        /**
         * Set the draggable state
         */
        if(value == true){
            this.element.classList.add(classDraggable)
        } else {
            this.element.classList.remove(classDraggable)
        }
    }

    isDraggable(){
        /**
         * Check if the element is draggable
         */
        return this.element.classlist.contains(classDraggable)
    }

    setDragging(value){
        /**
         * Set the draggable state
         */
        if(value == true){
            this.element.classList.add(classDragging)
        } else {
            this.element.classList.remove(classDragging)
        }
    }

    isDragging(){
        /**
         * Check if the element is draggable
         */
        return this.element.classlist.contains(classDragging)
    }


    // -----------------------------------------------------
    //  Methods 
    // -----------------------------------------------------

    clone(){

        let newElement = document.createElement(this.element.tagName)
        newElement.setAttribute('data-record-type', this.record_type)
        newElement.setAttribute('data-record-id', h.base.uuid.new())
        newElement.setAttribute('data-propertyID', this.propertyID)
        if(h.isNotNull(this.templateID)){
            newElement.setAttribute('data-templateID', this.templateID)
        }
        newElement.className = this.element.className

        let clone = new KrElementController(newElement, this.engine)

    
        clone.template = this.template
        this.engine.record.set(clone.ref)
        
        return clone
        
    }
    

    setFocus(){
        /**
         * Set the focus to a specific element 
         */

        
        this.element.focus()
    }

    // -----------------------------------------------------
    //  Selectors 
    // -----------------------------------------------------

    selectControllers(record_or_record_type, record_id, propertyID, valueID){
        /**
         * Return controlelrs of elements under this
         */
        return KrElementController.selectControllersStatic(this.engine, this.element, record_or_record_type, record_id, propertyID, valueID)
    }
    
    
    
    // -----------------------------------------------------
    //  Standardized element parts 
    // -----------------------------------------------------


    
    

    // -----------------------------------------------------
    //  Methods for list 
    // -----------------------------------------------------

    getItemList(){
        /** Returns the itemlist controller associated with this controller 
        Returns self if alredady itemList 
         */

        let item = this.element
        while(item){

            if(item.id){
                let itemController = this.engine.getController(item.id)
                if(itemController){
                    if(itemController?.record_type == 'ItemList'){
                        return itemController
                    }
                }
            }

            item = item.parentElement
            
        }

        return null
    }

    getListItem(){
        /** Returns the listitem controller associated with this controller 
        return self if already listitem
         */

        let item = this.element
        while(item){

            if(item.id){
                let itemController = this.engine.getController(item.id)
                if(itemController){
                    if(itemController?.record_type == 'ListItem'){
                        return itemController
                    }
                }
            }

            item = item.parentElement

        }

        return null
        
    }



    // -----------------------------------------------------
    //  Static methods 
    // -----------------------------------------------------

    static selectControllersStatic(engine, baseElement, record_or_record_type, record_id, propertyID, valueID){
        /**
         * Select controllers under base element matching attributes
         * 
         * 
         */
        let record_type = h.record_type(record_or_record_type, record_id)
        record_id = h.record_id(record_or_record_type, record_id)

        let cssSelectors = ''

        if(h.isNotNull(record_type)){
            cssSelectors = cssSelectors + `[data-record-type="${record_type}"]`
        }
        if(h.isNotNull(record_id)){
          //  cssSelectors = cssSelectors + `[data-record-id="${record_id}"]`
        }
        if(h.isNotNull(propertyID)){
            cssSelectors = cssSelectors + `[data-propertyID="${propertyID}"]`
        }
        if(h.isNotNull(valueID)){
            cssSelectors = cssSelectors + `[data-valueID="${valueID}"]`
        }

        let elements = baseElement.querySelectorAll(cssSelectors)

        let controllers = []

        for(let element of elements){
            let c = engine.getController(element?.id || null)
            if(h.isNotNull(c)){
                controllers.push(c)
            }
        }
        return controllers
    }



    
    
}