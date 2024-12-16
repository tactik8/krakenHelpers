import { krakenHelpers as h } from "../../krakenHelpers/krakenHelpers.js";
import { KrCache } from "../krakenCache/krakenCache.js";

export class KrStorage {
    /**
     * Kraken data storage
     */

    constructor(collection) {
        this.dataApiUrl = "https://data.krknapi.com/api";
        //this.cdnApiUrl = 'https://931bba76-1b26-4445-ad26-d2c9d201d0e2-00-lpy51ddmv2p2.janeway.replit.dev' //"https://cdn.krknapi.com/things";
        this.cdnApiUrl = "https://cdn.krknapi.com/things";
        this.collection = collection;

        this.cache = new KrCache()
        
    }

    get cdn() {
        return {
            get: this.cdnGet.bind(this),
            post: this.cdnPost.bind(this),
            delete: this.cdnDelete.bind(this),
        };
    }

    get data() {
        return {
            get: this.dataGet,
            post: this.dataPost,
            delete: this.dataDelete,
        };
    }

    


    // -----------------------------------------------------
    //  CDN 
    // -----------------------------------------------------
 
    async cdnGet(record_or_record_type, record_id, force=false) {
        /**
         * Gets a record
         * @param {String} record_or_record_type
         * @param {String} record_id
         * @param {Boolean} force if true, will force a refresh of the record
         * @returns {Object} The record
         */

        // Error handling
        
        // Return
        let url = this.cdnApiUrl + '/' + this.collection
        console.log('url', url)
        return await getRecord(record_or_record_type, record_id, url, this.cache, this.force);
    }

    async cdnPost(record) {
        /**
         * Posts a record
         * @param {Object} record
         * @returns {Object} The record
         * 
         */

        // Return
        let url = this.cdnApiUrl + '/' + this.collection
        return await postRecord(record, url, this.cache)
        
    }

    async cdnDelete(record_or_record_type, record_id) {
        /**
         * Deletes a record
         * @param {String} record_or_record_type
         * @param {String} record_id
         * @returns {Object} The record
         */

        // Error handling
        let record_type =
            record_or_record_type["@type"] ||
            record_or_record_type?.record_type ||
            record_or_record_type;
        record_id =
            record_or_record_type["@id"] ||
            record_or_record_type?.record_id ||
            record_id;

        // 
        let action = await h.http.api.delete(this.cdnApiUrl + '/' + this.collection, null, records)

        // Remove from cache
        this.cache.delete(record_type, record_id)

        // 
        Return
        
    }

    // -----------------------------------------------------
    //  Data 
    // -----------------------------------------------------


    async dataGet(record_or_record_type, record_id, force=false) {
        /**
         * Gets a system
         * @param {String} record_or_record_type
         * @param {String} record_id
         * @param {Boolean} force if true, will force a refresh of the record
         * @returns {Object} The system
         */

        // Error handling
        let record_type =
            record_or_record_type["@type"] ||
            record_or_record_type?.record_type ||
            record_or_record_type;
        record_id =
            record_or_record_type["@id"] ||
            record_or_record_type?.record_id ||
            record_id;


        // Verify in cache
        let record = this.cache.get(record_type, record_id)
        if(h.isNotNull(record)){
            return record
        }

        // Define params
        let params = {"@type": record_type, "@id": record_id}

        // Get 
        record = await h.http.api.get(this.dataApiUrl + '/' + this.collection, null, params)

        // Store in cache
        if(h.isNotNull(record)){
            // Cache main record
            this.cache.set(record)
        }

        // Return
        return record
        
    }
    

    async dataPost(record) {
        /**
         * Posts a system record
         * @param {Object} systemRecord
         * @returns {Object} The system record
         *
         */

        // Error handling
        if(h.isNull(record)){
            return null
        }

        //
        let records = h.toArray(record)

        // transform to system thing
        records = records.map(x => h.thing.toThing(x))

        // Post
        //records = await h.http.api.post(this.dataApiUrl + '/' + this.collection, null, records)

        // Add records provided back to cache
        this.cache.set(records)

        // Return
        return records
        
    }

    async dataDelete(record_or_record_type, record_id) {
        /**
         * Deletes a system record
         * @param {String} record_or_record_type
         * @param {String} record_id
         * @returns {Object} The system record
         */

        // Error handling
        let record_type =
            record_or_record_type["@type"] ||
            record_or_record_type?.record_type ||
            record_or_record_type;
        record_id =
            record_or_record_type["@id"] ||
            record_or_record_type?.record_id ||
            record_id;

        // 
        let action = await h.http.api.delete(this.dataApiUrl + '/' + this.collection, null, records)

        // Remove from cache
        this.cache.delete(record_type, record_id)

        // 
        Return
    }



}


async function getRecord(record_or_record_type, record_id, url, cache, force){

    // Error handling
    let record_type =
        record_or_record_type["@type"] ||
        record_or_record_type?.record_type ||
        record_or_record_type;
    record_id =
        record_or_record_type["@id"] ||
        record_or_record_type?.record_id ||
        record_id;


    // Verify in cache
    if(force != true){
        let record = cache.get(record_type, record_id)
        if(h.isNotNull(record)){
            console.log('get from cache')
            return record
        }
    }

    // Define params
    let params = {"@type": record_type, "@id": record_id}

    // Get 
    let record
    try {
        record = await h.http.api.get(url, null, params)
    } catch (error) {
        //console.log(error)
        record = null
    }

    // Store in cache
    if(h.isNotNull(record)){
        // Cache main record
        cache.set(record)
    }

    // Return
    return record
}

async function postRecord(record, url, cache){
    /**
     * Posts a system record
     * @param {Object} systemRecord
     * @returns {Object} The system record
     *
     */

    // Error handling
    if(h.isNull(record)){
        return null
    }

    //
    let records = h.toArray(record)

    // transform to system thing
    records = records.map(x => h.thing.toThing(x))

    // Post
    try {
        records = await h.http.api.post(url, null, records)
    } catch(error){
        console.log(error)
        records = null
    }
    
    // Add records provided back to cache
    cache.set(records)

    // Return
    return records


}