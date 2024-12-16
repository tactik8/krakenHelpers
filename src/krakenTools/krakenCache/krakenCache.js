import { krakenHelpers as h } from "../../krakenHelpers/krakenHelpers.js";

export class KrCache {
    constructor(maxItems = 1000, longestDuration=600 ) {
        /**
         * @param {Number} maxItems
         * @param {Number} longestDuration (in seconds)
         */
        this._db = {};
        this._maxItems = maxItems;
        this._longestDuration = longestDuration;

        this._noOfCacherecords = 0;
    }

    length(){
        /**
         * Returns the number of items in the cache
         * @returns {Number}
         */
        return this._noOfCacherecords
    }

    get(record_or_record_type, record_id) {
        /**
         * Returns the record
         * @param {String} record_type
         * @param {String} record_id
         * @returns {Object} The record
         * 
         */

        // Retrieve type and id
        let record_type =
            record_or_record_type?.["@type"] ||
            record_or_record_type?.record_type ||
            record_or_record_type;
        record_id =
            record_or_record_type?.["@id"] ||
            record_or_record_type?.record_id ||
            record_id;

        // Error handlling
        if (h.isNull(record_type) || h.isNull(record_id)) {
            return null;
        }
        
        // Retrieve cache record
        let cacheRecord = this._db?.[record_type]?.[record_id] || null;

        // Error handling
        if (h.isNull(cacheRecord)) {
            return null;
        }


        // Verify duration, delete cache if over duration 
        let n = new Date()
        let duration = (n - cacheRecord.lastUpdated) / 1000
        if(duration > this._longestDuration){
            this.delete(record_type, record_id)
            return null
        }

        // Set no of accesses
        cacheRecord.lastAccessed = new Date();
        cacheRecord.noAccess += 1;

        // Return 
        return this._db?.[record_type]?.[record_id]?.["value"];
    }

    getAll() {
        /**
         * Returns all records
         *
         */

        let results = [];
        for (let rt in this._db) {
            for (let ri in this._db[rt]) {
                results.push(this._db[rt][ri]?.value);
            }
        }

        // Return 
        return results;
    }

    set(record) {
        /**
         * Sets a record
         * 
         */

        // Handle array
        if(h.isArray(record)){
            return record.map(x => this.set(x))
        }
        
        // Retrieve type and id
        let record_type = record?.["@type"] || record?.record_type || null;
        let record_id = record?.["@id"] || record?.record_id || null;

        // Error handling
        if (h.isNull(record_type) || h.isNull(record_id)) {
            return null;
        }

        
        // Retrieve current cacheRecord (if exist)
        this._db[record_type] = this._db?.[record_type] || {};
        this._db[record_type][record_id] = this._db?.[record_type]?.[record_id];

        let cacheRecord = this._db?.[record_type]?.[record_id] || null;

        // Create cacherecord if not already exist
        if (h.isNull(cacheRecord)) {
            cacheRecord = {
                date: new Date(),
                value: record,
                lastAccessed: new Date(),
                lastUpdated: new Date(),
                noAccess: 0,
            };
            this._db[record_type][record_id] = cacheRecord;
        }


        // Set last Updated and value of cacheRecord
        cacheRecord.lastUpdated = new Date();
        cacheRecord.value = record;

        // Increment counter (to avoid recounting every time)
        this._noOfCacherecords += 1;

        // Verify size
        this._verifySize();

        // Return
        return;
    }

    delete(record_or_record_type, record_id) {
        /**
         * Deletes a record from the cache
         * @param {String} record_type
         * @param {String} record_id
         *
         */

        // Retrieve type and id
        let record_type =
            record_or_record_type?.["@type"] ||
            record_or_record_type?.record_type ||
            record_or_record_type;
        record_id =
            record_or_record_type?.["@id"] ||
            record_or_record_type?.record_id ||
            record_id;


        // Error handling
        if (h.isNull(record_type) || h.isNull(record_id)) {
            return null;
        }

        // Remove record
        this._db[record_type] = this._db?.[record_type] || {};
        this._db[record_type][record_id] = null;

        // Decrement counter (to avoid recounting every time)
        this._noOfCacherecords = this._noOfCacherecords - 1;

        // Return
        return;
    }

    clear() {
        /**
         * Clears the cache
         */

        this._db = {};

        // Return
        return;
    }

    // -----------------------------------------------------
    //  Comment
    // -----------------------------------------------------

    _getAllCacheRecords() {
        /**
         * Returns all records
         *
         */

        let results = [];
        for (let rt in this._db) {
            for (let ri in this._db[rt]) {
                results.push(this._db[rt][ri]);
            }
        }
        results = results.filter(x => h.isNotNull(x));
        return results;
    }

    _getOldestCacheRecord() {
        /**
         * Returns the oldest record (accessed, or created)
         *
         */

        let cacheRecords = this._getAllCacheRecords();

      

        if(h.isNull(cacheRecords)){ return null }
        
        
        let minItem = cacheRecords.reduce((minItem, item) =>
            (minItem.lastAccessed || minItem.lastUpdated) <
            (item.lastAccessed || item.lastUpdated)
                ? minItem
                : item
        );

        return minItem;
    }

    
    _verifySize() {
        /**
         * Verifies the size of the cache
         *
         */

        let max = 1000

        let count =0
        
        while (this._noOfCacherecords > this._maxItems && count < max) {
            let oldestCacheRecord = this._getOldestCacheRecord();
            this.delete(oldestCacheRecord?.value);
            count += 1
        }

        return
    }
}
