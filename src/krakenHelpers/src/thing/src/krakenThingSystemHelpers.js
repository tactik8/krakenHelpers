import { krakenBaseHelpers as h } from "../../base/krakenBaseHelpers.js";
import { krakenThingPropertyValueSpecificationHelpers as pvs } from "./krakenThingPropertyValueSpecificationHelpers.js";

import { krakenThingPropertyValueHelpers as pvh } from "./krakenThingPropertyValueHelpers.js";


import { krakenHeadingsHelpers } from "../../localization/krakenHeadingsHelpers.js";



// todo: add fn to delete pv based on conditions

// todo: add conditions to fn to filter only desired pv



export const krakenThingSystemHelpers = {
    /**@constant
     * @type {Object}
     * @property {function} isValid - True if type, id and _propertyValues
     * @property {function} isThing - True if type and id
     * @property {function} toString - String representation
     * @property {function} isEmpty - True if no properties (except type and id)
     *
     *
     */

    // Base
    isValid: isValid,
    isThing: isThing,
    toThing: toThing,
    toString: toString,
    toStringDetailed: toStringDetailed,
    toJSON: toJSON,
    isEmpty: isEmpty,
    keys: keys,
    clone: clone,
    hash: hash,

    // Constructor
    new: getNew,

    // Properties
    record_type: {
        get: getRecordType,
        set: setRecordType,
    },
    record_id: {
        get: getRecordId,
        set: setRecordId,
    },
    ref: {
        get: getRef,
        set: setRef,
    },
    value: {
        get: getValue,
        set: setValue,
        add: addValue,
        replace: replace,
        delete: deletePropertyValue,
    },
    values: {
        get: getValues,
        set: setValues,
        add: addValues,
        replace: replace,
        delete: deletePropertyValue,
    },
    property: {
        get: getValue,
        set: addValue,
        add: addValue,
        replace: replaceValue,
        delete: deletePropertyValue,
    },
    propertyValue: {
        get: getPropertyValue,
        set: setValues,
        add: addPropertyValue,
        replace: replacePropertyValue,
        delete: deletePropertyValue,
    },
    propertyValues: {
        get: getPropertyValues,
        set: replacePropertyValue,
        add: addPropertyValue,
        replace: replacePropertyValue,
        delete: deletePropertyValue,
    },
    record: {
        get: getRecord,
        set: setRecord,
    },
    htmlRecord: {
        get: getHtmlRecord,
    },
    system: {
        get: getSystem,
        set: setSystem,
    },

    children: {
        length: countChildren,
        get: getChildren,
        replaceWithRef: replaceChildrenWithRefRecord,
        replaceWithRecord: replaceChildrenRefsWithRecord
    },
    flatten: flatten,

    // Comparisons
    isSame: isSame,
    isNotSame: isNotSame,
    eq: isEqual,
    ne: isNotEqual,
    lt: lt,
    gt: gt,
    validate: meetCondition,

    // Operations
    replace: replace,
    merge: merge,
    compile: compileRecord,

    // Lists
    length: length,
    get: find,
    push: push,
    delete: pop,
    dedupe: dedupe,
    sort: sort,
    filter: filter,
    mergeLists: mergeLists,
};



// -----------------------------------------------------
//  Setup 
// -----------------------------------------------------

// Counter to avoid duplicate values
let POSITION = 0




// -----------------------------------------------------
//  Base
// -----------------------------------------------------

function isThing(value) {
    /**
     * Check if value is a thing (has type and id)
     * @param {any} value
     * @returns {boolean}
     */

    
   
    if (h.object.isValid(value) == false) {
        return false;
    }

    if (h.isNull(getRecordType(value))) {
        return false;
    }

    return true;
}

function isThingClass(value){
    /**
     * Check if value is a thing (has type and id)
     * @param {any} value
     * @returns {boolean}
     * 
     */
    return h.isNotNull(value?.instanceof) ? true : false
    
}


function isValid(value) {
    /**
     * Check if value is valid system thing (type, and _propertyValues)
     * @param {*} value
     * @returns {boolean}
     */
    

    try{
        if (h.isNull(value)) {
            return false;
        }
    
        if (h.object.isValid(value) == false) {
            return false;
        }
    
        if (h.isNull(getRecordType(value))) {
            return false;
        }
    
        if (h.isNull(value?._version)) {
            return false;
        }
    
        return true;
    } catch {
        return false 
    }
    
}

function isEmpty(thing) {
    /**
     * Returns true if thing is empty (except for type and id)
     * @param {Object} thing
     * @returns {Boolean}
     */

    for (let pv of h.toArray(thing?._propertyValues)) {
        if (pv?.object?.propertyID.startsWith("@")) {
            continue;
        }
        if (h.isNotNull(pv?.object?.value)) {
            return false;
        }
    }
    return true;
}

function toString(value) {
    /**
     * Returns a string representation of the thing(s)
     * @param {Object} value
     * @returns {String}
     */
    if (h.array.isArray(value)) {
        return h.textTable(value, [ "@type",   "@id"]);
    }

    return `${value?.['@type'] || ""} ${value?.['@id'] || ""}` ;
}

function toStringDetailed(value) {
    /**
     * Returns a string representation of the thing(s)
     * @param {Object} value
     * @returns {String}
     */

    let content = toString(value) + "\n" + pvh.toString(value?._propertyValues);

    return content;
}

function toJSON(value) {
    /**
     * Returns a JSON representation of the thing(s)
     * @param {Object} value
     * @returns {String}
     */

    // replace previousItem and nextitem with ref
    
    
    let record = JSON.parse(JSON.stringify(value));

    record = h.json.simplify(record);

    return record;
}

function toThing(record_or_record_type, record_id, metadata, db) {
    /**
     * Convert to thing if valid record
     * @param {Object} record_or_record_type
     * @param {String} record_id
     * @param {Object} metadata
     * @param {Object} db - db containing things to be used as value references
     * @returns {Object}
     *
     */


    // Skip if thing class object
    if(isThingClass(record_or_record_type)){
        return record_or_record_type
    }

    
    // Populate with record if provided
    if (isValid(record_or_record_type)) {
       
        // Change values to things if required 
        for(let pv of h.toArray(record_or_record_type?._propertyValues)){
            
            if(isThing(pv?.object?.value)){
                pv.object.value = toThing(pv?.object?.value, null, metadata)
                
            }
        }
        
        return record_or_record_type;
        
    } else if (isThing(record_or_record_type)) {
       
        let thing = getNew(record_or_record_type, record_id, metadata);
        thing = setRecord(thing, record_or_record_type, metadata);
        return thing;
        
    } else if (typeof record_or_record_type === "string"){
        let thing = getNew(record_or_record_type, record_id, metadata, db)
        return thing
    }

    throw new Error('Value provided is not thing');

    
}

function hash(record){
    /**
     * Returns a hash of the record
     * @param {Object} record
     * @returns {String}
     * 
     */


    if(h.isNull(record)){
        return null
    }


    // Clone pvs
    let pvs = h.toArray(record?._propertyValues).map(x => pvh.clone(x))

    // Convert values to ref if required
    for(let pv of pvs){
        if(isThing(pv.object.value)){
            pv.object.value = getRef(pv.object.value)
        }
    }

    // Calculate hash
    let hash = h.hash.get(pvs)
    
    return hash
    
}

function clone(value) {
    /**
     * Clones a record
     * @param {Object} record
     * @returns {Object} The cloned record
     */


    // Error handling
    if(h.isNull(value)){
        return null
    }
    
    if(!isValid(value)){
        throw new Error('Value provided is not thing');
    }


    //
    let clone = getNew(value)

    

    // Copy values
    for(let i of h.toArray(value?._propertyValues) || []){
        if(i?.object?.propertyID != "@id"){
            clone._propertyValues.push(pvh.clone(i))
        }
    }

    clone = setRecordId(clone, h.uuid.new())
    clone = compileRecord(clone)
    
    // Return
    return clone;
}

// -----------------------------------------------------
//  Constructor
// -----------------------------------------------------

function getNew(record_or_record_type, record_id, metadata, db) {
    /**
     * Creates a new thing thing
     * @param {object|string} record_or_record_type - Either a thing or a thing type
     * @param {string} record_id - The thing id
     * @param {object} metadata - The metadata
     * @returns {object} The new thing
     */


    // Error handling
    if (h.isNull(record_or_record_type)) {
        record_or_record_type = "thing";
    }
    if (h.isNull(record_id)) {
        record_id = h.uuid.new()
    }
    

    // Define new thing
    let thing = {
        "@type": getRecordType(record_or_record_type, record_id),
        "@id": getRecordId(record_or_record_type, record_id),
        _id: h.uuid.new(),
        _version: "2.0",
        _dbCollection: null,
        _dbId: null,
        _record_type: getRecordType(record_or_record_type, record_id),
        _record_id: getRecordId(record_or_record_type, record_id),
        _headings: [],
        _refs: [],
        _propertyValues: [
        ],
    };

    // Add pv for type and id
    thing = addValue(thing, '@type', thing?.['@type'])
    thing = addValue(thing, '@id', thing?.['@id'])
    
    // Ensure @id is populated
    thing["@id"] = thing?.["@id"] || h.uuid.new()
    thing["_record_id"] = thing["@id"];

    // Return
    return thing;
}

// -----------------------------------------------------
//  Properties
// -----------------------------------------------------

function getRecordType(record_or_record_type, record_id) {
    /**
     * Returns the record type of a thing
     * @param {object|string} record_or_record_type - Either a thing or a thing type
     * @param {string} record_id - The thing id
     * @returns {string} The record type
     */

    
    let value =
        record_or_record_type?.["@type"] ||
        record_or_record_type?.record_type ||
        record_or_record_type;

    if (typeof value != "string") {
        return null
        
    }

    return value;
}

function setRecordType(thing, value, metadata) {
    /**
     * Sets the record type of a thing
     * @param {object} thing - The thing
     * @param {string} record_type - The record type
     * @param {object} metadata - The metadata
     * @returns {object} The thing
     */

    
    thing["@type"] = value;
    thing = replacePropertyValue(thing, "@type", value, metadata);

    return thing;
}

function getRecordId(record_or_record_type, record_id) {
    /**
     * Returns the thing id
     * @param {object|string} record_or_record_type - Either a thing or a thing type
     * @param {string} record_id - The thing id
     * @returns {string} The thing id
     */

    let value =
        record_or_record_type?.["@id"] ||
        record_or_record_type?.record_id ||
        record_id;

    if (typeof value != "string") {
       return null
        
    }

    return value;
}

function setRecordId(thing, value, metadata) {
    /**
     * Sets the record id of a thing
     * @param {object} thing - The thing
     * @param {string} record_type - The record type
     * @param {object} metadata - The metadata
     */

    thing["@id"] = value;
    thing = replacePropertyValue(thing, "@id", value, metadata);
    return thing;
}

function getRef(record_or_record_type, record_id) {
    /**
     * Returns the ref for a thing
     * @param {object|string} record_or_record_type - Either a thing or a thing type
     * @param {string} record_id - The thing id
     * @returns {string} The ref
     */

    // Error handling
    if(h.isNull(record_or_record_type)){
        return null
    }
    
    let ref = {
        "@type": getRecordType(record_or_record_type, record_id),
        "@id": getRecordId(record_or_record_type, record_id),
    };

    if (h.isNotNull(ref?.["@type"]) && h.isNotNull(ref?.["@id"])) {
        return ref;
    }

    return null;
}

function setRef(thing, record_or_record_type, record_id) {
    /**
     * Setds the ref for a thing
     * @param {object|string} record_or_record_type - Either a thing or a thing type
     * @param {string} record_id - The thing id
     * @returns {string} The ref
     */

    if(h.isNull(thing)){
        thing = getNew(record_or_record_type, record_id)
    }
    
    thing = setRecordType(thing, record_or_record_type, record_id);
    thing = setRecordId(thing, record_or_record_type, record_id);

    return thing;
}


function countChildren(thing, deep = true){
    /**
     * Counts the number of children
     * @param {object} thing - The thing
     * @param {boolean} deep - Whether to count children of children
     * @returns {number} The number of children
     * 
     */

    return getChildren(thing, deep).length || 0
    
}


function getChildren(thing, deep = true, parentThings=[]) {
    /**
     * Returns all child things in thing (as values)
     * @param {object} thing
     * @param {boolean} deep - If true, returns all children recursively
     * @returns {object[]}
     *
     */


    // Error handling
    if(h.isNull(thing)){
        return []
    }
    
    if(!isValid(thing)){
        throw new Error('Value provided is not thing');
    }


    // Handle circular references
    if(isThingClass(thing) && h.isNotNull(find(parentThings, thing))){
        return []
    }
    parentThings.push(thing)
    
    //
    let results = [];

    for (let pv of h.toArray(thing?._propertyValues)) {
        if (
            (isThing(pv?.object?.value)) && 
            (pv?.object?.propertyID != 'previousItem') && 
            (pv?.object?.propertyID != "nextItem")
        ) {
            
            results.push(pv?.object?.value);
            if (deep == true) {
                results = results.concat(getChildren(pv?.object?.value, deep, parentThings));
            }
        }
    }

    // 
    results = results.filter(x => h.isNotNull(x))

    
    
    // Dedupe
    results = dedupe(results);

    return results;
}

function keys(thing) {
    /**
     * Returns all propertyIDs in thing
     * @param {object} thing
     * @returns {string[]}
     */

    // Error handling
    if(h.isNull(thing)){
        return []
    }

    if(!isValid(thing)){
        throw new Error('Value provided is not thing');
    }
    
    let propertyIDs = h
        .toArray(thing?._propertyValues || [])
        .map((pv) => pv?.object?.propertyID);

    propertyIDs = [...new Set(propertyIDs)];

    propertyIDs = propertyIDs.filter((x) => !x.startsWith("@"));

    propertyIDs = propertyIDs.sort();

    return propertyIDs;
}

// -----------------------------------------------------
//  Properties
// -----------------------------------------------------

function getValue(thing, propertyID, db) {
    /**
     * Returns the best value of a property
     * @param {object} thing - The thing
     * @param {string} propertyID - The property id
     * @param {object} db - The database of things
     * @returns {object|string|any} The value
     */

    let values = getValues(thing, propertyID, db)

    if(values.length == 0){
        return null
    }
    
    let value = values[0]
   
    return value
}

function setValue(thing, propertyID, value, metadata) {
    /**
     * Sets the value of a property
     * @param {object} thing - The thing
     * @param {string} propertyID - The property id
     * @param {object} value - The value
     * @param {object} metadata - The metadata
     * @returns {object} The thing
     */

    return replacePropertyValue(thing, propertyID, value, metadata);
}

function addValue(thing, propertyID, value, metadata) {
    /**
     * Sets the value of a property
     * @param {object} thing - The thing
     * @param {string} propertyID - The property id
     * @param {object} value - The value
     * @param {object} metadata - The metadata
     * @returns {object} The thing
     */

    return addPropertyValue(thing, propertyID, value, metadata);
}


function replaceValue(thing, propertyID, value, metadata, replacee) {
    /**
     * Sets the value of a property
     * @param {object} thing - The thing
     * @param {string} propertyID - The property id
     * @param {object} value - The value
     * @param {object} metadata - The metadata
     * @returns {object} The thing
     */

    return replacePropertyValue(thing, propertyID, value, metadata, replacee);
}

function deleteValue(thing, propertyID, value, metadata) {
    /**
     * Sets the value of a property
     * @param {object} thing - The thing
     * @param {string} propertyID - The property id
     * @param {object} value - The value
     * @param {object} metadata - The metadata
     * @returns {object} The thing
     */

    return deletePropertyValue(thing, propertyID, value, metadata);
}

function getValues(thing, propertyID, db) {
    /**
     * Returns the best value of a property
     * @param {object} thing - The thing
     * @param {string} propertyID - The property id
     * @param {object} db - The database of things
     * @returns {object|string|any} The value
     */

    
    let pvs = getPropertyValues(thing, propertyID);

    let values = pvs.map(x => x?.object?.value)

    values = values.map((x) => (isThing(x) && isValid(x) && !isThingClass(x) ? getRecord(x) : x));

   
    return values;
}

function setValues(thing, propertyID, values, metadata) {
    /**
     * Sets the value of a property
     * @param {object} thing - The thing
     * @param {string} propertyID - The property id
     * @param {object} value - The value
     * @param {object} metadata - The metadata
     * @returns {object} The thing
     */

    return replacePropertyValue(thing, propertyID, values, metadata);
}

function addValues(thing, propertyID, values, metadata) {
    /**
     * Sets the value of a property
     * @param {object} thing - The thing
     * @param {string} propertyID - The property id
     * @param {object} value - The value
     * @param {object} metadata - The metadata
     * @returns {object} The thing
     */

    return addPropertyValue(thing, propertyID, values, metadata);
}

function replaceValues(thing, propertyID, values, metadata, replacee) {
    /**
     * Replace the value of a property
     * @param {object} thing - The thing
     * @param {string} propertyID - The property id
     * @param {object} value - The value
     * @param {object} metadata - The metadata
     * @returns {object} The thing
     */

    return replacePropertyValue(thing, propertyID, values, metadata, replacee);
}

function deleteValues(thing, propertyID, values, metadata) {
    /**
     * Sets the value of a property
     * @param {object} thing - The thing
     * @param {string} propertyID - The property id
     * @param {object} value - The value
     * @param {object} metadata - The metadata
     * @returns {object} The thing
     */

    return deletePropertyValue(thing, propertyID, values, metadata);
}

// -----------------------------------------------------
//  Property values
// -----------------------------------------------------

function getMaxPosition(thing, metadata) {
    /**
     * Returns the max position of a thing in its parent
     * @param {object} thing - The thing
     * @returns {number} The maxposition
     */

    let pvs = h.toArray(thing._propertyValues);

    if (pvs.length == 0) {
        return 0;
    }

    let maxItem = pvs.reduce((maxItem, item) =>
        maxItem.metadata.position > item.metadata.position ? maxItem : item,
    );

    let position = maxItem.metadata.position + 1;

    position = position > POSITION ? position : POSITION

    POSITION = position + 1
    
    return position;
}

function getPropertyValue(thing, propertyID, db) {
    /**
     * Return the best property value of a property
     * @param {object} thing - The thing
     * @param {string} propertyID - The property id
     * @param {object} db - The database of things
     * @returns {object|string|any} The value
     */

    let values = getPropertyValues(thing, propertyID, db);

    return values?.[0] || [];
}

function getPropertyValues(thing, propertyID, db) {
    /**
     * Returns all values for a propertyID
     * @param {Object} thing
     * @param {String} propertyID
     * @param {Object} db - array containing thing references
     * @param {Array} db - The array of things
     * @returns {Array} Array of values in system format
     */

    // Error handling
    if(h.isNull(thing)){
        return []
    }

    if(!isValid(thing)){
        throw new Error('Value provided is not thing');
    }

    
    // Initialize value
    let result;
    let propertyPath = propertyID;
    let pvs
    
    // Iterate through property path (element1[0].element2[1]...)
    while (h.isNotNull(propertyPath)) {
        // If value is array, assume first element
        if (h.array.isArray(thing)) {
            thing = thing[0] || [];
        }

        // If no values, return null
        if (h.isNull(thing)) {
            return [];
        }

        // Get latest thing from db (if db provided)
        if (h.isNotNull(db) && isThing(thing)) {
            thing = find(db, thing) || thing;
        }

        // Get first element of property path
        let propertyIDElement = h.dot.propertyPath.getCurrentKey(propertyPath);
        let position = h.dot.propertyPath.getCurrentPosition(propertyPath);
        propertyPath = h.dot.propertyPath.getNextItems(propertyPath);

        // Get pvs for propertyID
        pvs = h.toArray(thing._propertyValues || []);

        pvs = pvs.filter(pv => pv.object.propertyID == propertyIDElement)
        
        pvs = pvh.compile(pvs);

        if(propertyID == 'itemListElement'){
            pvs.sort((a,b) => {
                if((getValue(a?.object?.value, 'position') || 0 ) < (getValue(b?.object?.value, 'position')|| 0)){
                    return -1
                } else if ((getValue(a?.object?.value, 'position') || 0 ) < (getValue(b?.object?.value, 'position') || 0)){
                    return 1
    
                } else {
                    return 0
                }
            })
        }
        
       

        // Get values from pvs
        result = pvs.map((pv) => pv?.object?.value);

        // Retrieve content of values from things db
        if(h.isNotNull(db)){
            result = result.map((x) => find(db, x) || x )  
        }
        
        // Get position if one
        if (h.isNotNull(position)) {
            pvs=pvs?.[position] || null
            result = result?.[position] || null;
        }

        // Set thing to result for next iteration
        thing = result;
    }

    // To array
    pvs = h.toArray(pvs);
    
    // Return
    return pvs;
}

function replacePropertyValue(thing, propertyID, value, metadata, replacee, recompileFlag=true) {
    /**
     * Sets a value for a propertyID
     * @param {Object} thing
     * @param {String} propertyID
     * @param {string|Array|Object} value
     * @returns {Object} The thing
     *
     */

    
    // Error handling
    if(h.isNull(thing)){
        throw new Error('Value provided is not thing');
    }

    if(!isValid(thing)){
        throw new Error('Value provided is not thing');
    }

    // Initialize values
    let values = h.toArray(value);
    
    metadata = metadata || {};
    let position = getMaxPosition(thing, metadata) 

    // Convert values to thing if required
    values = values.map((x) => (isThing(x) ? toThing(x, null, metadata) : x));

    
    // Convert value to ref if previousItem or nextItem
    
    if (propertyID == "previousItem" || propertyID == "nextItem") {
        //values = values.map((x) => (isThing(x) ? getRef(x) : x));
    }

    // First element replaces previous (replace)
    position += 1;
    metadata = JSON.parse(JSON.stringify(metadata));
    metadata.position = position;
   
    thing._propertyValues.push(
        pvh.new.replace(propertyID, values[values.length - 1], metadata, replacee),
    );

    // Next elements are added (add)
    let nextValues = values.slice(0, values.length - 1)
    if(h.isNotNull(nextValues)){
        thing = addPropertyValue(
            thing,
            propertyID,
            nextValues,
            metadata,
        );
    }
   
    // Recalculate normal record value
    if(recompileFlag==true){
        thing = compileRecord(thing, propertyID)
    }
    
    // Return
    return thing;
}

function addPropertyValue(thing, propertyID, value, metadata, recompileFlag=true) {
    /**
     * Adds a value for a propertyID
     * @param {Object} thing
     * @param {String} propertyID
     * @param {string|Array|Object} value
     * @returns {Object} The thing
     */

    // Error handling
    if(h.isNull(thing)){
        throw new Error('Value provided is not thing');
    }

    if(!isValid(thing)){
        throw new Error('Value provided is not thing');
    }

    
    
    // Initialize values
    let values = h.toArray(value);
    metadata = metadata || {};

    let position = getMaxPosition(thing, metadata) 
   
    
    thing._propertyValues = h.toArray(thing?._propertyValues)

    // Convert values to thing if required
    values = values.map((x) => (isThing(x) ? toThing(x, null, metadata) : x));

    // Convert value to ref if previousItem or nextItem
    if (propertyID == "previousItem" || propertyID == "nextItem") {
        //values = values.map((x) => (isThing(x) ? getRef(x) : x));
    }

    // add values
    for (let i = values.length - 1; i >= 0; i--) {
        let v = values[i];
        position += 1;
        metadata = JSON.parse(JSON.stringify(metadata));
        metadata.position = position;
        let pv = pvh.new.add(propertyID, v, metadata)
        thing._propertyValues.push(pv);
    }

    // Recalculate normal record value
    if(recompileFlag==true){
       thing = compileRecord(thing, propertyID)
    }

    return thing;
}

function deletePropertyValue(thing, propertyID, value, metadata, recompileFlag=true) {
    /**
     * Adds a value for a propertyID
     * @param {Object} thing
     * @param {String} propertyID
     * @param {string|Array|Object} value
     * @returns {Object} The thing
     */

    // Error handling
    if(h.isNull(thing)){
        throw new Error('Value provided is not thing');
    }

    if(!isValid(thing)){
        throw new Error('Value provided is not thing');
    }


    
    // Initialize values
    let values = h.toArray(value);
    metadata = metadata || {};
    let position = getMaxPosition(thing, metadata) 
    
    thing._propertyValues = thing?._propertyValues || [];

    // Convert values to thing if required
    values = values.map((x) => (isThing(x) ? toThing(x, null, metadata) : x));

    // Convert value to ref if previousItem or nextItem
    if (propertyID == "previousItem" || propertyID == "nextItem") {
       // values = values.map((x) => (isThing(x) ? getRef(x) : x));
    }

    // Handle case where no value provided (delete everything)
    if(h.isNull(values)){
        position += 1;
        metadata = JSON.parse(JSON.stringify(metadata));
        metadata.position = position;
        thing._propertyValues.push(pvh.new.delete(propertyID, null, metadata));
    }

    
    // add values
    for (let v of values) {
        position += 1;
        metadata = JSON.parse(JSON.stringify(metadata));
        metadata.position = position;
        thing._propertyValues.push(pvh.new.delete(propertyID, v, metadata));
    }

    // Recalculate normal record value
    if(recompileFlag==true){
        thing = compileRecord(thing, propertyID)
    }

    return thing;
}

// -----------------------------------------------------
//  Comment
// -----------------------------------------------------

function flatten(thing) {
    /**
     * Returns a flattened thing
     * @param {Object} thing
     * @returns {Array} Array of values in system format
     */

    // Error handling
    if(h.isNull(thing)){
        return []
    }

    if(!isValid(thing)){
        throw new Error('Value provided is not thing');
    }

    // Get record of thing class object
    thing = thing?._systemRecord || thing
    
    let results = [thing];

    // Get children
    results = results.concat(getChildren(thing));

  
    // Replace children with refs
    results = results.map((x) => replaceChildrenWithRefRecord(x));

    // Sort
    results = sort(results, '@id', 'asc')
    results = sort(results, '@type', 'asc')

    // Dedupe
    results = dedupe(results);
    // Return
    return results;
}

// -----------------------------------------------------
//  Comparisons
// -----------------------------------------------------

function isSame(thing1, thing2) {
    /**
     * Returns true if two things are the same type and id
     * @param {Object} thing1
     * @param {Object} thing2
     * @returns {boolean}
     */

    // Error handling
    if(h.isNull(thing1)){
        throw new Error('Value provided is not thing');
    }

    if(!isThing(thing1)){
        return false
    }

    if(!isThing(thing2)){
        return false
    }
    
    if (h.isNull(getRecordType(thing1))) {
        return false;
    }
    if (h.isNull(getRecordId(thing1))) {
        return false;
    }

    if (getRecordType(thing1) != getRecordType(thing2)) {
        return false;
    }
    if (getRecordId(thing1) != getRecordId(thing2)) {
        return false;
    }

    return true;
}

function isNotSame(thing1, thing2) {
    /**
     * Returns true if two things are not the same type and id
     * @param {Object} thing1
     * @param {Object} thing2
     * @returns {boolean}
     */

    return !isSame(thing1, thing2);
}

function isEqual(thing1, thing2) {
    /**
     * Returns true if two things are exactly the same
     * @param {Object} thing1
     * @param {Object} thing2
     * @returns {boolean}
     */

    if (h.isNull(thing1) && h.isNull(thing2)) {
        return true;
    }
    if (h.isNull(thing1) && h.isNotNull(thing2)) {
        return false;
    }
    if (h.isNotNull(thing1) && h.isNull(thing2)) {
        return false;
    }

    // Ensure hash is populated
    if(h.isNull(thing1?._hash)){
        thing1._hash = hash(thing1)
    }
    if(h.isNull(thing2?._hash)){
        thing2._hash = hash(thing2)
    }


    // Test equality 
    if(thing1._hash == thing2._hash){
        return true
    }

    return false
   
}

function isNotEqual(thing1, thing2) {
    /**
     * Returns true if two things are not exactly the same
     * @param {Object} thing1
     * @param {Object} thing2
     * @returns {boolean}
     */

    return !isEqual(thing1, thing2);
}

function lt(thing1, thing2) {
    /**
     * Returns true if thing1 is less than thing2
     * @param {Object} thing1
     * @param {Object} thing2
     * @returns {boolean}
     */

    // Error handling
    if(h.isNull(thing1)){
        throw new Error('Value provided is not thing');
    }

    if(!isValid(thing1)){
        throw new Error('Value provided is not thing');
    }
    
    // Start with position if exist
    if (h.isNotNull(thing1?.position) && h.isNull(thing2?.position)) {
        return true;
    }
    if (h.isNull(thing1?.position) && h.isNotNull(thing2?.position)) {
        return false;
    }

    if (h.isNotNull(thing1?.position) && h.isNotNull(thing2?.position)) {
        if (thing1?.position < thing2?.position) {
            return true;
        }
        if (thing1?.position > thing2?.position) {
            return false;
        }
    }

    // record type
    if (getRecordType(thing1) < getRecordType(thing2)) {
        return true;
    }
    if (getRecordType(thing1) > getRecordType(thing2)) {
        return false;
    }

    // Record id
    if (getRecordId(thing1) < getRecordId(thing2)) {
        return true;
    }
    if (getRecordId(thing1) > getRecordId(thing2)) {
        return false;
    }

    return false;
}

function gt(thing1, thing2) {
    /**
     * Returns true if thing1 is greater than thing2
     * @param {Object} thing1
     * @param {Object} thing2
     * @returns {boolean}
     *
     */
    
    // Error handling
    if(h.isNull(thing1)){
        throw new Error('Value provided is not thing');
    }

    if(!isValid(thing1)){
        throw new Error('Value provided is not thing');
    }

    
    // Start with position if exist
    if (h.isNotNull(thing1?.position) && h.isNull(thing2?.position)) {
        return false;
    }
    if (h.isNull(thing1?.position) && h.isNotNull(thing2?.position)) {
        return true;
    }

    if (h.isNotNull(thing1?.position) && h.isNotNull(thing2?.position)) {
        if (thing1?.position < thing2?.position) {
            return false;
        }
        if (thing1?.position > thing2?.position) {
            return true;
        }
    }

    // Record type
    if (thing1.thing_type > thing2.thing_type) {
        return true;
    }
    if (thing1.thing_type < thing2.thing_type) {
        return false;
    }

    // Record id
    if (thing1.record_id > thing2.record_id) {
        return true;
    }
    if (thing1.record_id < thing2.record_id) {
        return false;
    }
    return false;
}

function meetCondition(thing, conditions) {
    /**
     * Returns true if thing meets conditions
     * @param {Object} thing
     * @param {Object} conditions
     * @returns {boolean}
     *
     */
    //todo: error when condition is weird
    return pvs.test(thing, conditions) || false;
}

// -----------------------------------------------------
//  Record import export
// -----------------------------------------------------

function getHtmlRecord(thing){
    /**
     * Returns the record with headings
     * @param {Object} thing
     * @returns {Object}
     * 
     */

    let record = getRecord(thing)
    let headings = getHeadings(thing)
    record = { ...headings, ...record}

    return record
}


function getRecord(thing, parentThings=[]) {
    /**
     * Returns a record from a thing without propertyValues
     * @param {Object} thing
     * @param {Array} parentThings list of parent things to avoid circular references
     * @returns {Object}
     *
     */

   
    
    // Handle arrays
    if (h.isArray(thing)) {
        return thing.map((x) => getRecord(x, parentThings));
    }

    // Error handling

    if(h.isNull(thing)){
        return {}
    }
    
    if(!isValid(thing)){
        throw new Error('Value provided is not thing');
    }

    
    if (h.isNull(thing?._propertyValues)) {
        return null;
    }

    

    // Check if thing in parentthing, if so return ref
    if(h.isNotNull(find(parentThings,thing))){
        return getRef(thing)
    }
    
    // Add it self to list of parentThings
    parentThings.push(thing);
    
    //
    let record = {
        "@type": getRecordType(thing),
        "@id": getRecordId(thing),
    };

    // Get propertyIDs
    let pIDs = keys(thing);

    // Get values
    for (let p of pIDs) {
        let values = getValues(thing, p);

        // Convert values to record if needed
        let newValues = []
        for(let v of values){
            
            if(isValid(v)){
                v = getRecord(v, parentThings)
            }
            newValues.push(v)
        }

        
        record[p] = newValues;
    }
    // Remove thing class objects
    record = JSON.parse(JSON.stringify(record));
    // Simplify thing
    record = h.json.simplify(record);
    
    // Return

    return record;
}

function setRecord(thing, record, metadata, db) {
    /**
     * Import a record
     * @param {Object} thing
     * @param {String} propertyID
     * @param {string|Array|Object} value
     * @returns {Object} The thing
     */

    // Error handling
    if(h.isNull(thing)){
        throw new Error('Value provided is not thing');
    }

    if(!isValid(thing)){
        throw new Error('Value provided is not thing');
    }

    // Error handling
    db = db || [];

    if (h.isNull(record)) {
        return thing;
    }

    if (isValid(record)) {
        return setSystem(thing, record);
    }

    // Delete existing propertyValues
    thing._propertyValues = []
    
    // Set values, recompile flag to off for performance
    metadata = metadata || {}
    metadata.position = metadata?.position || POSITION
    POSITION += 1
    for (let k of Object.keys(record)) {
        if(!(k.startsWith('_'))){
          
            thing = replacePropertyValue(thing, k, record[k], metadata, null, false);
            
        }
       
    }


    // Recompile
    thing = compileRecord(thing, null)


    return thing;
}

function getSystem(thing) {
    /**
     * Returns a system record from a thing
     * @param {Object} thing
     * @returns {Object}
     */


    // Error handling
    if(h.isNull(thing)){
        return null
    }
    if(!h.isValid(thing)){
        throw new Error('Value provided is not thing')
    }

    // Get record of thing class object
    if(isThingClass(thing)){
        return thing?.system
    } 
    
    
    return thing;
}

function setSystem(thing, record) {
    /**
     * Import a system record, replacing existing values
     * @param {Object} thing
     * @param {String} propertyID
     * @param {string|Array|Object} value
     * @returns {Object} The thing
     */

    // Error handling
    if(h.isNull(thing)){
        throw new Error('Value provided is not thing');
    }

    if(!isValid(thing)){
        throw new Error('Value provided is not thing');
    }

    // Error handling
    if(h.isNull(record?._propertyValues)){
        throw new Error('Value provided is not thing');
    }

    if(!isValid(record)){
        throw new Error('Value provided is not thing');
    }

    
    // Handle arrays
    if (h.isArray(thing)) {
        return thing.map((x) => getRecord(x));
    }

    // Error handling
    if (!isValid(record)) {
        return setRecord(thing, record);
    }

    // handle thing class object
    if(isThingClass(thing)){
        thing.system = record
        return thing
    }
    
    // Overwrite values
    for (let k of Object.keys(record)) {
        if (k.startsWith("_")) {
            thing[k] = record[k];
        }
    }
    thing._propertyValues = thing?._propertyValues || [];

    // Update values to things
    for (let p of h.toArray(thing?._propertyValues)) {
        if (isThing(p?.object?.value)) {
            p.object.value = toThing(p?.object?.value);
        }
    }

    // Recompile record
    thing = compileRecord(thing);

    return thing;
}

// -----------------------------------------------------
//  Operations
// -----------------------------------------------------

function compileRecord(thing, propertyID, includeHeadings=false) {
    /**
     * Recompiles the values base don propertyValues
     * @param {Object} thing
     * @returns {Object}
     */

    // Error handling
    if(h.isNull(thing)){
        throw new Error('Value provided is not thing');
    }

    if(!isValid(thing)){
        throw new Error('Value provided is not thing');
    }


    let record = thing?._system || thing

    record._propertyValues = record?._propertyValues || [];
    // Define keys, if no key provided, uses all keys
    let propertyIDs =[propertyID]
    if (h.isNull(propertyIDs)) {
        propertyIDs = keys(record)
    }

    
    // Assign values
    for(let p of propertyIDs){

        let values = getValues(record, p)
        let newValues = []
        for(let v of values){

            if(isValid(v)){
                v = getRecord(v)
            }
            newValues.push(v)
        }
        record[p] = h.json.simplify(newValues);
    
    }
    
    //for (let propertyID of propertyIDs) {
    //    let values = getValues(record, propertyID)
    //    record[propertyID] = h.json.simplify(values)
    //}

    // Assign type and id
    let pvs = record?._propertyValues || [];

    let oldestPv

    if(h.isNotNull(pvs)){
        oldestPv = pvs.reduce((maxItem, item) => maxItem?.metadata?.createdDate > item?.metadata?.createdDate ? maxItem : item);
    }

    
    record['@type'] = h.toArray(record?.["@type"])?.[0] || null
    record['@id'] = h.toArray(record?.["@id"])?.[0] || null
    record['_record_type'] = record?.["@type"]
    record['_record_id'] = record?.["@id"]
    record['_createdDate'] = oldestPv?.metadata?.createdDate
    //record['_hash'] = hash(record)


    
    if(includeHeadings == true){
        let headings = getHeadings(record)
    
        for(let k of Object.keys(headings)){
            if(k.startsWith('_')){
                    record[k] = headings[k]
            }
        }
    }

    

    if(isThingClass(thing)){
        thing.system = record
    } else {
        thing = record
    }

   
    return thing
    

}


function getHeadings(thing){
    /**
     * Returns the headings from a thing
     * @param {Object} thing
     * @returns {Object}
     * 
     */

    // Error handling
    if(h.isNull(thing)){
        throw new Error('Value provided is null');
    }

    if(!isValid(thing)){
        throw new Error('Value provided is not thing');
    }


    return h.heading.record.get(thing)
   
}

function replaceChildrenWithRefRecord(thing) {
    /**
     * Replaces all children with ref records
     * @param {Object} thing
     * @returns {Object} The thing
     */


    
    // Error handling
    
    if(h.isNull(thing)){
        throw new Error('Value provided is not thing');
    }

    if(!isValid(thing)){
        throw new Error('Value provided is not thing');
    }

    
   //

    for (let pv of h.toArray(thing?._propertyValues)) {
        if (isValid(pv?.object?.value)) {
            pv.object.value = getRef(pv?.object?.value);
        }
    }

    thing = compileRecord(thing);
    return thing;
}

function replaceChildrenRefsWithRecord(thing, records) {
    /**
     * Replaces all children refs with records from list
     * @param {Object} thing
     * @returns {Object} The thing
     */

    // Error handling
    if(h.isNull(thing)){
        throw new Error('Value provided is not thing');
    }

    if(!isValid(thing)){
        throw new Error('Value provided is not thing');
    }
    
    //
    for (let pv of h.toArray(thing?._propertyValues)) {
        if (isThing(pv?.object?.value)) {
            let dd =  find(records, pv?.object?.value) || pv.object.value
            pv.object.value = dd

            
            if(pv.object.propertyID != 'previousItem' && pv.object.propertyID != 'nextItem'){
                //let dd =  find(records, pv?.object?.value) || pv.object.value
                //pv.object.value = dd
            }
        }
    }

    thing = compileRecord(thing);
    return thing;
}



function replace(thing, oldValue, newValue) {
    /**
     * Replaces a value by another in a system thing
     * @param {Object} thing
     * @param {Object} oldValue
     * @param {Object} newValue
     * @returns {Object} The thing with modified values
     */
    

    // Error handling
    if(h.isNull(thing)){
        throw new Error('Value provided is not thing');
    }

    if(!isValid(thing)){
        throw new Error('Value provided is not thing');
    }

    
    
    //
    for (let pv of thing?._propertyValues || []) {
        let value = pv?.object?.value;

      
        // Replace value if same 
        if(isThing(oldValue)){
            if (isSame(oldValue, pv.object.value)) {
                pv.object.value = newValue;
            } 
        } else {
            if (value === oldValue) {
                pv.object.value = newValue;
            }
        }
    }
    

    // Recurse on children
    for (let t of getChildren(thing)) {
        replace(t, oldValue, newValue);
    }

    return thing;
}

function merge(thing1, thing2) {
    /**
     * Merges two things, return new combined thing
     * @param {Object} thing1
     * @param {Object} thing2
     * @returns {Object} The combined thing
     */

    // Error handling

    if(!isValid(thing1) && isThing(thing1)){
        thing1 = toThing(thing1)
    }

    if(!isValid(thing2) && isThing(thing2)){
        thing2 = toThing(thing2)
    }
                
    
    if (!isValid(thing1)) {
        throw new Error('thing1 is not a thing');
    }
    if (!isValid(thing2)) {
        throw new Error('thing2 is not a thing');
    }

    if (!isSame(thing1, thing2)) {
        return thing1;
    }
    
    if (h.isNotNull(thing1?.id) && thing1.id == thing2.id) {
        return thing1;
    }

    // Merge and dedupe
    let pvs = pvh.concat(thing1?._propertyValues, thing2?._propertyValues);


    // Reassign to new thing
    thing1._propertyValues = pvs;

    // Recompile
    thing1 = compileRecord(thing1);

    // Return
    return thing1;
}

// -----------------------------------------------------
//  Array
// -----------------------------------------------------

function length(things) {
    // Error handling
    if (h.isNull(things)) {
        return 0;
    }
    things = h.toArray(things);

    return things.length;
}

function find(things, record_or_record_type, record_id) {
    /**
     * Returns the first thing that matches type and id
     * @param {Array} things to search from
     * @param {Object|String} record_or_record_type
     * @param {String} record_id
     * @returns {Object} The thing
     */

    things = h.toArray(things)
    let ref = getRef(record_or_record_type, record_id)
  
    let filteredRecords = things.filter(x => isSame(x, ref))
   
    let result = filteredRecords?.[0] || null;

    return result;
}

function push(things, thing) {
    /**
     * Add a thing to array. If exists, merge the things
     * @param {Array} things
     * @param {Object} thing to add
     * @returns {Array} The array with the thing added
     */

    
    // Error handling
    if (h.isNull(thing)) {
        return things;
    }
    things = h.toArray(things);

    // List handling
    if (h.array.isArray(thing)) {
        for(let x of thing){
            things = push(things, x)
        }
        return things;
    }

    // Error
    if (!isValid(thing)) {
        throw new Error('thing is not a thing');
    }
    

    // Retrieve same things already in array    
    let currentRecords = things.filter(x => isSame(x, thing) )
    
    // Remove same things from array
    for (let r of currentRecords) {
        things = pop(things, r);
    }

    // Merge same things
    for (let r of currentRecords) {
        thing = merge(thing, r);
    }

    // Add  thing to array
    things.push(thing);

    // Return
    return things;
}

function pop(things, thing_or_record_type, record_id) {
    /**
     * Remove a Thing from an array
     * @param {Array} things
     * @param {Object|String} thing_or_record_type
     * @param {String} record_id
     * @returns {Array} The array with the thing removed
     */

    let toDeleteRef = getRef(thing_or_record_type, record_id);

    for (let i = 0; i < things.length; i++) {
        if (isSame(things[i], toDeleteRef)) {
            things = things.toSpliced(i, 1);
        }
    }
    return things;
}

function dedupe(things) {
    /**
     * Removes duplicates from array
     * @param {Array} things
     * @returns {Array} The array without duplicates
     */

    
    things = things.filter(x => h.isNotNull(x))
    
    // Ensure it is array
    things = h.toArray(things);

    // Error handling
    if (h.isNull(things)) {
        return [];
    }

    // Generate create list to not change original one
    things = things.map((x) => x);

    let results = [];
    for (let r of things) {
        results = push(results, r);
    }
    
    return results;
}

function sort(things, sortBy, sortOrder) {
    /**
     * Sorts an array of things
     * @param {Array} things
     * @param {String} sortBy
     * @param {String} sortOrder
     * @returns {Array} The sorted array
     */

    // Ensure it is array
    things = h.toArray(things);

    // Error handling
    if (h.isNull(things)) {
        return null;
    }

    // Generate create list to not change original one
    things = things.map((x) => x);

    // Default sortBy and sortOrder
    sortBy = sortBy || "_createdDate";
    sortOrder = sortOrder || "desc";

    // Sort function
    function sortFunction(a, b) {
        let aValue = getValue(a, sortBy);
        let bValue = getValue(b, sortBy);

        if (aValue == bValue) {
            return 0;
        }

        if (sortOrder == "asc") {
            return aValue < bValue ? -1 : 1;
        }

        if (sortOrder == "desc") {
            return aValue > bValue ? -1 : 1;
        }
    }

    things = things.sort(sortFunction);

    return things;
}

function filter(things, conditions) {
    /**
     * Filters an array of things
     * @param {Array} things
     * @param {Object} conditions
     * @returns {Array} The filtered array
     * @example
     */
    // Ensure it is array
    things = h.toArray(things);

    // Error handling
    if (h.isNull(things)) {
        return [];
    }

    // Generate create list to not change original one
    things = things.map((x) => x);

    // Error handling
    if (h.isNull(conditions)) {
        return things;
    }

    // Filter list
    let results = [];
    for (let r of things) {
        
        if (meetCondition(r, conditions)) {

            results.push(r);
        }
    }

    return results;
}

function mergeLists(things1, things2){
    /**
     * Merges two lists of things
     * @param {Array} things1
     * @param {Array} things2
     * @returns {Array} The merged list
     */

    things1 = h.toArray(things1);
    things2 = h.toArray(things2);

    things2.map((x) => push(things1, x));
    
    return things1;
}