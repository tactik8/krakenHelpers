
import { krakenDateHelpers } from './krakenDateHelpers.js'

import { krakenNullHelpers } from './krakenNullHelpers.js'





let DB = []

export class KrSimpleThing {
    constructor(record_type_or_record, record_id){

        this._record = {}

        if(record_type_or_record?.['@type']){
            this._record = record_type_or_record
        } else {
            this._record["@type"] = record_type_or_record
            this._record["@id"] = record_id
        }
        DB.push(this)
    }

    // -----------------------------------------------------
    //  Core  
    // -----------------------------------------------------

    toString(){
        return `${this.record_type} ${this.record_id}`
    }

    toJSON(){
        return this.record
    }

    get json(){
        return JSON.stringify(this.record, null, 4)
    }

    new(){
        let newObject = new Thing_simple()
        newObject.record = this.record
    }

    clone(){
        let newObject = new Thing_simple()
        newObject.record = this.record
    }




    // -----------------------------------------------------
    //  Attributes 
    // -----------------------------------------------------

    get record(){
        return JSON.parse(JSON.stringify(this._record))
    }
    set record(value){
        this._record = JSON.parse(JSON.stringify(value))
    }

    get record_type(){
        return this._record?.['@type']
    }
    set record_type(value){
        this._record['@type'] = value
    }

    get record_id(){
        if(krakenNUllHelpers.isNull(this._record?.['@id'])){ 
            this._record['@id'] == String(crypto.randomUUID())
        }
        return this._record?.['@id']
    }
    set record_id(value){
        this._record['@id'] = value
    }

    // -----------------------------------------------------
    //  Shortcut Attributes 
    // -----------------------------------------------------

    get name(){
        return this._record?.name
    }
    set name(value){
        return this._record.name = value
    }

    get url(){
        return this._record?.url
    }
    set url(value){
        return this._record.url = value
    }    
}



export class KrSimpleAction extends KrSimpleThing {
    constructor(name, object){
        super('Action')
        this.setActive()
        this.name = name
        this.object = object
    }


    // -----------------------------------------------------
    //  Base 
    // -----------------------------------------------------

    toString(){
        return `${krakenDateHelpers.date.toText(this.startTime)} ${this.name} ${this.status}`
    }

    new(){
        let newObject = new Action_simple()
        newObject.record = this.record
    }

    clone(){
        let newObject = new Action_simple()
        newObject.record = this.record
    }

    lt(other){

        if(krakenNUllHelpers.isNull(this.endTime) && krakenNUllHelpers.isNull(other.endTime)){ return false }
        if(krakenNUllHelpers.isNull(this.endTime) && krakenNullHelpers.isNotNull(other.endTime)){ return false }
        if(krakenNullHelpers.isNotNull(this.endTime) && krakenNUllHelpers.isNull(other.endTime)){ return true }
        if(this.endTime < other.endTime){ return true }
        if(this.endTime > other.endTime){ return false }
        return false
    }

    gt(other){

        if(krakenNUllHelpers.isNull(this.endTime) && krakenNUllHelpers.isNull(other.endTime)){ return false }
        if(krakenNUllHelpers.isNull(this.endTime) && krakenNullHelpers.isNotNull(other.endTime)){ return false }
        if(krakenNullHelpers.isNotNull(this.endTime) && krakenNUllHelpers.isNull(other.endTime)){ return true }
        if(this.endTime > other.endTime){ return true }
        if(this.endTime < other.endTime){ return false }
        return false
    }

    // -----------------------------------------------------
    //  Action attributes 
    // -----------------------------------------------------

    get actionStatus(){
        return this._record?.actionStatus
    }
    set actionStatus(value){
        this._record.actionStatus = value
    }

    get status(){
        let value = this.actionStatus || ''
        if(krakenNullHelpers.isNotNull(value)){ value = value.replace('ActionStatus', '')}
        return value
    }

    get object(){
        return this._record?.object
    }
    set object(value){
        this._record.object = value
    }

    get instrument(){
        return this._record?.instrument
    }
    set instrument(value){
        this._record.instrument = value
    }

    get result(){
        return this._record?.result
    }
    set result(value){
        this._record.result = value
        if(krakenNullHelpers.isNotNull(value)){
            this.actionStatus = 'CompletedActionStatus'
            this.endTime = new Date()
        }

    }

    get startTime(){
        return this._record?.startTime
    }
    set startTime(value){
        this._record.startTime = value
    }

    get endTime(){
        return this._record?.endTime
    }
    set endTime(value){
        this._record.endTime = value
    }

    get error(){
        return this._record?.error
    }
    set error(value){
        this._record.error = value
        if(krakenNullHelpers.isNotNull(value)){
            this.actionStatus = 'FailedActionStatus'
            this.endTime = new Date()
        }
    }

    get duration(){
        return krakenDateHelpers.date.duration(this.startTime, this.endTime)
    }


    isSuccess(){
        return this.actionStatus == 'CompletedActionStatus'
    }


    // -----------------------------------------------------
    //  Action methods 
    // -----------------------------------------------------


    setPotential(error){
        this.actionStatus = "PotentialActionStatus"
        this.error = String(error)
        this.startTime = null
        this.endTime = null
    }

    setActive(error){
        this.actionStatus = "ActiveActionStatus"
        this.error = String(error)
        this.startTime = new Date()
    }

    setCompleted(){
        this.actionStatus = "CompletedActionStatus"
        this.endTime =  new Date()
    }

    setFailed(error){
        this.actionStatus = "FailedActionStatus"
        this.error = String(error)
        this.endTime =  new Date()
    }


}





export const krakenSimpleThingsHelpers = {

    Thing: KrSimpleThing,
    Action: KrSimpleAction

}
