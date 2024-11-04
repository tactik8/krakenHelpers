
import { krakenBaseHelpers as h} from '../base/krakenBaseHelpers.js'


import { KrCache } from './krakenCache.js';


// -----------------------------------------------------
//  Elements DB 
// -----------------------------------------------------

export class KrElementDb {
    constructor(){
        this._db_by_id = new KrCache()
        this._db_by_record = new KrCache()
    }

    get(elementID){
        return this.getElement(elementID)
    }

    getElement(elementID){
        elementID = elementID?.id || elementID
        return this._db_by_id.get(elementID)
    }

    getElementsByRecord(record_type, record_id){

        record_id = record_type?.record_id || record_type?.["@id"] || record_id
        record_type = record_type?.record_type || record_type?.["@type"] || record_type
        if(h.isNull(record_type) || h.isNull(record_id)){ return null }
        
        let elements = this._searchElements({'data-record-type': record_type, 'data-record-id': record_id})
        return elements
    }

    getAll(){
        return this._db_by_id.getAll()
    }
    
    set(element){
        this._setElementToDbId(element)
        this._setElementToDbRecord(element)
    }


    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------

    _getElementsById(elementIDs){

        let elements = []
        for(let elementID of elementIDs){
            let value = this._getElemetById(elementID)
            if(h.isNotNull(value)){ elements.push(value)}
        }
        return elements
        
    }

    _getElemetById(elementID){
        return this._db_by_id.get(elementID)
    }

    _searchElements(conditions){

        let elements = this._db_by_id.getAll()
        let results = []
        for(let e of elements){
            if(h.isNull(e)){ continue }
            if(h.element.meetsConditions(e, conditions)){
                results.push(e)
            }
        }
        return results
    }


    _setElementToDbId(element){
        if(h.isNull(element)){ return false }
        h.element.setId(element)
        this._db_by_id.set(element.id, element)
        return true
    }

    _setElementToDbRecord(element){
        if(h.isNull(element)){ return false }
        h.element.setId(element)
        let record_type = element.getAttribute('data-record-type')
        let record_id = element.getAttribute('data-record-id')
        if(h.isNull(record_type)){ return false }
        if(h.isNull(record_id)){ return false }    
        let currentIds = this._db_by_record.get(record_type, record_id)
        let newIds = h.array.mergeUnique(currentIds, element.id)
        this._db_by_record.set(record_type, record_id, newIds)
        return true
    }
}



