
import { krakenHelpersLight as h} from '../krakenHelpersLight.js'
import { KrCache } from '../helpers/krakenCache.js'
import { krakenThingHelpers } from '../helpers/krakenThingHelpers.js'

import { KrElementDb } from '../helpers/krakenElementDbHelpers.js'

import { krakenElementThingHelpers } from '../helpers/krakenElementThingHelpers.js'

import { KrThingDb } from '../helpers/krakenThingDbHelpers.js'

import { krakenTemplateLiveHelpers} from '../helpers/krakenTemplateLiveHelpers.js'

h.elementThing = krakenElementThingHelpers
h.thing = krakenThingHelpers


export class KrElementOrchestrator {
    constructor(element){

        this._baseElement = element
        this._elementDB = new KrElementDb()
        this._recordDb = new KrThingDb()
        this._HTMLtemplates = new KrCache()
        
        this._initObject()
        
    }


    // -----------------------------------------------------
    //  Initialization 
    // -----------------------------------------------------

    _initObject(){

        if(h.isNull(this._baseElement)){ return }

        // Init element

        this._baseElement.innerHTML = krakenTemplateLiveHelpers.get(this._baseElement.innerHTML)   
        
        h.elementThing.init(this._baseElement)

        // Get current thing
        let currentThing = h.elementThing.current.thing(this._baseElement)
        if(h.isNotNull(currentThing)){
            this.setElement(currentThing)
            this._initTemplates(currentThing)
        } else { 
            let elements = h.elementThing.children.things(this._baseElement) || []
            for(let t of elements){
                this.setElement(t)
                this._initTemplates(t)
            }
        }
        

       
        
        return
    }

    _initTemplates(element){

        if(h.isNull(element)){ return }
        
        // Store property templates
        let propertyElements =  h.elementThing.children.properties(element)
        if(h.isNull(propertyElements)){ return }
        
        for(let propertyElement of propertyElements){
            
            let body = h.elementThing.parts.body.get(propertyElement)
            if(h.isNull(body)){ return }
            let content = body.innerHTML
            this._HTMLtemplates.set(propertyElement.id, content)
        }
    }


    // -----------------------------------------------------
    //  Attributes 
    // -----------------------------------------------------

    get baseElement(){
        return this._baseElement
    }
    set baseElement(value){
        this._baseElement = value
        this._initObject()
    }

    get record(){
        return h.elementThing.record.get(this.element)
    }

    set record(value){
        for(let element of this._elementDB.getAll()){
            if(h.isNull(element.getAttribute('data-record-type'))){
                h.elementThing.record.set(element, value)
            }
        }
        this.setRecord(value)
    }

    get records(){
        return this._recordDb.getAll()
    }

    set records(value){
        this.setRecord(value)
    }

    get element(){
        return h.elementThing.top.thing(this._baseElement)
    }

    set element(value){
        this._baseElement = value
        this._initObject()
    }

    get elements(){
        return this._elementDB.getAll()
    }

    set elements(value){
        this.setElement(value)
    }



    // -----------------------------------------------------
    //  Records 
    // -----------------------------------------------------

    setRecord(record){


        let thing
        if(record.record){
            thing = record
            record = thing.record
        }
        
        let oldRecord = this._recordDb.get(record)

        // If record is same, don't update
        if(h.thing.isEqual(oldRecord, record)){
            return 
        }

        // Update record
        this._recordDb.set(record)

        // Update elements
        this.updateAllElementsByRecord(record)

        // Add addEventListener if appropriate
        if(thing){
            thing.addEventListener('all', event =>{
                this.updateAllElementsByRecord(thing.record)
            })
        } 

        // Add sub records
        let subRecords = h.thing.extractThings(record)
        for(let subRecord of subRecords){
            this.setRecord(subRecord)
        }
    }

    
    // -----------------------------------------------------
    //  Elements 
    // -----------------------------------------------------

    setElement(element){

        // Set element
        this._elementDB.set(element)
        
        // Store sub elements
        let thingElements = h.elementThing.children.things(element)
        for(let thingElement of thingElements){
            this.setElement(thingElement)
        }
        return true
    }
    
    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------

    updateAllElementsByRecord(record){

        let elements = this._elementDB.getElementsByRecord(record)

        if(h.isNull(elements)){ return false }
        
        for(let element of elements){
            this.updateElement(element, record)
        }
        return 
    }
    
    updateElement(elementID, record){

        let element = this._elementDB.get(elementID)
        if(h.isNull(element)){ return false }

        // if not record
        if(h.isNull(record)){
            record = this._recordDb.get(element)
            record = record?.record || record
        }

        // Check if properties
        let propertyElements = h.elementThing.children.properties(element)

        if(propertyElements.length > 0){
            for(let propertyElement of propertyElements){
                this.updatePropertyElement(propertyElement, record)
            }            
        } else {
             h.elementThing.update.thing(element, record)
        }

        return true

    }

    updatePropertyElement(propertyElement, record){
        
        
        let template = this._HTMLtemplates.get(propertyElement.id)
        let propertyID = propertyElement.getAttribute('data-propertyID')
        h.elementThing.update.property(propertyElement, record?.[propertyID], template)


        // Get thing under values and update
        let childValues = h.elementThing.children.values(propertyElement)
        let childthings = []
        for(let childValue of childValues){
            let t = h.elementThing.children.things(childValue)
            if(h.isNotNull(t)){ childthings = childthings.concat(t)}
        }

        for(let childthing of childthings){
            this.setElement(childthing)
            this.updateElement(childthing)
        }

        return
        
    }
    
}