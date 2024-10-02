import { KrCache } from "./krakenCache.js";
import { krakenHelpersLight as h } from "../krakenHelpersLight.js";

export class KrThingDb{

    constructor(){

        this._db = new KrCache()
    }

    get(record_type, record_id){

        record_id = record_type?.record_id || record_type?.['@id'] || record_type?.getAttribute('data-record-id') || record_id
        record_type = record_type?.record_type || record_type?.['@type'] || record_type?.getAttribute('data-record-type') || record_type
        
        if(h.isNull(record_type) || h.isNull(record_id)){ return null }

        return this._db.get(record_type, record_id)
    }

    set(record){

        let record_id = record.record_id || record?.['@id'] 
        let record_type = record?.record_type || record?.['@type'] 

        if(h.isNull(record_type) || h.isNull(record_id)){ return null }

        return this._db.set(record_type, record_id, record)
        
    }

    getAll(){
        return this._db.getAll()
    }
}