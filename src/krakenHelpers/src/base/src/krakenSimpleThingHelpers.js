
import { krakenValueHelpers as v } from "./krakenValueHelpers.js";
import { krakenFileHelpers} from './krakenFileHelpers.js'



import { krakenNullHelpers} from "./krakenNullHelpers.js";
import { krakenArrayHelpers} from "./krakenArrayHelpers.js";
import { krakenDotNotationHelpers } from "./krakenDotNotationHelpers.js";
import { krakenNumberHelpers } from "./krakenNumberHelpers.js";
import { krakenJsonHelpers } from "./krakenJsonHelpers.js";
import { krakenDateHelpers } from "./krakenDateHelpers.js";


const h = {
    null: krakenNullHelpers,
    array: krakenArrayHelpers,
    isNull: krakenNullHelpers.isNull,
    isNotNull: krakenNullHelpers.isNotNull,
    toArray: krakenArrayHelpers.toArray,
    isArray: krakenArrayHelpers.isArray,
    dot: krakenDotNotationHelpers,
    number: krakenNumberHelpers,
    json: krakenJsonHelpers,
    date: krakenDateHelpers
}





export class KrSimpleThing {
    constructor(record_type_or_record, record_id) {
        this._record = {};

        if (record_type_or_record?.["@type"]) {
            this._record = record_type_or_record;
        } else {
            this._record["@type"] = record_type_or_record;
            this._record["@id"] = record_id;
        }

    }

    // -----------------------------------------------------
    //  Core
    // -----------------------------------------------------

    toString() {

      
        let content = `${headingRecord?._headingDate || ""} ${headingRecord?._heading1} ${headingRecord?._heading2}`;
        
        return content
    }

    toJSON() {
        return this.record;
    }

    get json() {
        return JSON.stringify(this.record, null, 4);
    }

    new() {
        let newObject = new Thing_simple();
        newObject.record = this.record;
    }

    clone() {
        let newObject = new Thing_simple();
        newObject.record = this.record;
    }

    // -----------------------------------------------------
    //  Attributes
    // -----------------------------------------------------

    get record() {
        return JSON.parse(JSON.stringify(this._record));
    }
    set record(value) {
        this._record = JSON.parse(JSON.stringify(value));
    }

    get record_type() {
        return this._record?.["@type"];
    }
    set record_type(value) {
        this._record["@type"] = value;
    }

    get record_id() {
        if (h.isNull(this._record?.["@id"])) {
            this._record["@id"] == String(crypto.randomUUID());
        }
        return this._record?.["@id"];
    }
    set record_id(value) {
        this._record["@id"] = value;
    }

    // -----------------------------------------------------
    //  Shortcut Attributes
    // -----------------------------------------------------

    get name() {
        return this._record.name 
    }
    set name(value) {
         this._record.name = value;
    }

    get url() {
        return this._record?.url;
    }
    set url(value) {
         this._record.url = value;
    }
}


export class KrSimpleAction extends KrSimpleThing {
    constructor(name, object) {
        super("Action");
        this.setActive();
        this._record.error = null
        this.name = name;
        this.object = object;
    }

    // -----------------------------------------------------
    //  Base
    // -----------------------------------------------------

    toString(indent=0) {
        let content = `${' '.repeat(indent)}- ${h.date.toString(this.startTime)} o:${h.toArray(this.object).length} i:${h.toArray(this.instrument).length} r:${h.toArray(this.result).length} ${this.status} ${this.name} ${this.error || ''}\n`;

        if(h.isNotNull(this.instrument)){                
            for(let i of h.toArray(this.instrument)){
                if(i?.record_type == "Action"){
                    content += i.toString(indent + 4)
                }
            }
        }
        return content
    }

   
    new() {
        let newObject = new Action_simple();
        newObject.record = this.record;
    }

    clone() {
        let newObject = new Action_simple();
        newObject.record = this.record;
    }

    lt(other) {
        if (h.isNull(this.endTime) && h.isNull(other.endTime)) {
            return false;
        }
        if (h.isNull(this.endTime) && h.isNotNull(other.endTime)) {
            return false;
        }
        if (h.isNotNull(this.endTime) && h.isNull(other.endTime)) {
            return true;
        }
        if (this.endTime < other.endTime) {
            return true;
        }
        if (this.endTime > other.endTime) {
            return false;
        }
        return false;
    }

    gt(other) {
        if (h.isNull(this.endTime) && h.isNull(other.endTime)) {
            return false;
        }
        if (h.isNull(this.endTime) && h.isNotNull(other.endTime)) {
            return false;
        }
        if (h.isNotNull(this.endTime) && h.isNull(other.endTime)) {
            return true;
        }
        if (this.endTime > other.endTime) {
            return true;
        }
        if (this.endTime < other.endTime) {
            return false;
        }
        return false;
    }

    // -----------------------------------------------------
    //  Action attributes
    // -----------------------------------------------------

    get actionStatus() {
        return this._record?.actionStatus;
    }
    set actionStatus(value) {
        this._record.actionStatus = value;
    }

    get status() {
        let value = this.actionStatus || "";
        if (h.isNotNull(value)) {
            value = value.replace("ActionStatus", "");
        }
        return value;
    }

    get object() {
        return this._record?.object;
    }
    set object(value) {
        this._record.object = h.toArray(this._record.object).concat(h.toArray(value))
    }

    get instrument() {
        return this._record?.instrument;
    }
    set instrument(value) {
        this._record.instrument = h.toArray(this._record.instrument).concat(h.toArray(value))
    }

    get result() {
        return this._record?.result;
    }
    set result(value) {
        this._record.result = h.toArray(this._record.result).concat(h.toArray(value))
        
    }

    get startTime() {
        return this._record?.startTime;
    }
    set startTime(value) {
        this._record.startTime = value;
    }

    get endTime() {
        return this._record?.endTime;
    }
    set endTime(value) {
        this._record.endTime = value;
    }

    get error() {
        return this._record?.error;
    }
    set error(value) {
        this._record.error = value;
        if (h.isNotNull(value)) {
            this.actionStatus = "FailedActionStatus";
            this.endTime = new Date();
        }
    }

    get duration() {
        return h.date.duration(this.startTime, this.endTime);
    }

    isSuccess() {
        return this.actionStatus == "CompletedActionStatus";
    }

    // -----------------------------------------------------
    //  Action methods
    // -----------------------------------------------------

    setPotential(error) {
        this.actionStatus = "PotentialActionStatus";
        this.error = String(error);
        this.startTime = null;
        this.endTime = null;
    }

    setActive(error) {
        this.actionStatus = "ActiveActionStatus";
        this.error = String(error);
        this.startTime = new Date();
    }

    setCompleted() {
        this.actionStatus = "CompletedActionStatus";
        this.endTime = new Date();
    }

    setFailed(error) {
        this.actionStatus = "FailedActionStatus";
        this.error = String(error);
        this.endTime = new Date();
    }

    close(){

        for(let i of h.toArray(this.instrument)){
            
            if(i?.actionStatus == 'FailedActionStatus'){
                this.setFailed(i.error);
                return
            }
        }
        this.setCompleted();
        
    }

    // -----------------------------------------------------
    //  Comment
    // -----------------------------------------------------

    getHumanRecord() {
        let humanRecord = v.innerValuesToText(this.record);
        humanRecord.duration = h.date.human.duration(this.startTime, this.endTime);
        return humanRecord;
    }
}



export class KrSimpleFile extends KrSimpleThing {
    constructor(file) {
        super("DigitalObject");

        this._file = null
        
       
    }

    // -----------------------------------------------------
    //  Base
    // -----------------------------------------------------

    toString() {
        return `${h.date.toText(this.startTime)} ${this.name} ${this.status}`;
    }

    new() {
        let newObject = new Action_simple();
        newObject.record = this.record;
    }

    clone() {
        let newObject = new Action_simple();
        newObject.record = this.record;
    }

    lt(other) {
        if (h.isNull(this.endTime) && h.isNull(other.endTime)) {
            return false;
        }
        if (h.isNull(this.endTime) && h.isNotNull(other.endTime)) {
            return false;
        }
        if (h.isNotNull(this.endTime) && h.isNull(other.endTime)) {
            return true;
        }
        if (this.endTime < other.endTime) {
            return true;
        }
        if (this.endTime > other.endTime) {
            return false;
        }
        return false;
    }

    gt(other) {
        if (h.isNull(this.endTime) && h.isNull(other.endTime)) {
            return false;
        }
        if (h.isNull(this.endTime) && h.isNotNull(other.endTime)) {
            return false;
        }
        if (h.isNotNull(this.endTime) && h.isNull(other.endTime)) {
            return true;
        }
        if (this.endTime > other.endTime) {
            return true;
        }
        if (this.endTime < other.endTime) {
            return false;
        }
        return false;
    }

    

    // -----------------------------------------------------
    //  File methods
    // -----------------------------------------------------

    get file(){

        return this._file
    }

     set file(value){
         this.setFile(value)
    }

    async setFile(value){
        this._file = value
        this._record =  await krakenFileHelpers.getRecord(value)
    }

    // -----------------------------------------------------
    //  Comment
    // -----------------------------------------------------

    getHumanRecord() {
        let humanRecord = v.innerValuesToText(this.record);
        humanRecord.duration = h.date.human.duration(this.startTime, this.endTime);
        return humanRecord;
    }
}



class KrSimpleCache {

    constructor(){
        this._db = {}
    }

    set(thing){
        /**
         * Store a thing in cache
         * @param {KrSimpleThing} thing
         * 
         */

        let record_type = thing.record_type || thing?.["@type"] || null
        let record_id = thing.record_id || thing?.["@id"] || null

        if(h.isNull(record_type) || h.isNull(record_id)){
            throw new Error('Invalid record type or id')
        }
        
        
        
        this._db[record_type] = this._db?.[record_type] || {}
        this._db[record_type][record_id] = thing
        
    }

    get(record_or_record_type, record_id){
        /**
         * Get a thing from cache
         * @param {KrSimpleThing} record_or_record_type
         * @param {String} record_id
         * 
         */

        let record_type = record_or_record_type.record_type || record_or_record_type?.["@type"] || record_or_record_type
         record_id = record_or_record_type.record_id || record_or_record_type?.["@id"] || record_id

        if(h.isNull(record_type) || h.isNull(record_id)){
            throw new Error('Invalid record type or id')
        }

        return this._db?.[record_type]?.[record_id] || null
        
    }

    getAll(){
        /**
         * Get all things from cache
         * @param {KrSimpleThing} record_or_record_type
         * @param {String} record_id
         * 
         */


        let results = []
        for(let t in this._db){
            for(let i in this._db[t]){
                results.push(this._db[t][i])
            }
        }
        return results
        
    }
    
}



export const krakenSimpleThingHelpers = {
    Thing: KrSimpleThing,
    Action: KrSimpleAction,
    File: KrSimpleFile,
    Cache: KrSimpleCache
    
}