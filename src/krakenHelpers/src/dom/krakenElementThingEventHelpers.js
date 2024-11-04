import { krakenBaseHelpers as h } from "../base/krakenBaseHelpers.js";

//import { krakenElementThingRecordHelpers as etrh } from "./krakenElementThingRecordHelpers.js";

import { krakenThingListHelpers as tlh } from "../thing/src/krakenThingListHelpers.js";
import { krakenElementEventHelpers } from "./krakenElementEventHelpers.js";

import { krakenElementThingRenderHelpers as render } from "./krakenElementThingRenderHelpers.js";
import { krakenElementThingPropertyHelpers as property } from "./krakenElementThingPropertyHelpers.js";

import { krakenElementHelpers as eh } from "./krakenElementHelpers.js";

//import { krakenElementThingRecordHelpers as record } from "./krakenElementThingRecordHelpers.js";

import { krakenThingHelpers as th } from "../thing/krakenThingHelpers.js";

let DB = {};

export const krakenElementThingEventHelpers = {
    register: registerEvents,
};

function registerEvents(element, db, TEMPLATEDB) {
    /**
     * Registers events on an element
     * @param {Object} element
     * @returns {Object} The element
     *
     * classes:
     *     - krDropzone:
     *     - krDraggable:
     *     - krClickable:
     */

    let classList = {
        //Drag and drop
        krDrag: {
            eventFn: krakenElementEventHelpers.dragDrop.setDraggable,
            callbackFn: addToList,
            params: { db: db, TEMPLATEDB: TEMPLATEDB },
        },
        krDrop: {
            eventFn: krakenElementEventHelpers.dragDrop.setDropzone,
            callbackFn: addToList,
            params: { db: db, TEMPLATEDB: TEMPLATEDB },
        },

        // Generic dropzone
        krDropzone: {
            eventFn: krakenElementEventHelpers.generic.setDropzone,
            callbackFn: addToList,
            params: { db: db, TEMPLATEDB: TEMPLATEDB },
        },

        // Generic draggable
        krDraggable: {
            eventFn: krakenElementEventHelpers.generic.setDraggable,
            callbackFn: addToList,
            params: { db: db, TEMPLATEDB: TEMPLATEDB },
        },

        // Generic clickable
        krClickable: {
            eventFn: krakenElementEventHelpers.click.set,
            callbackFn: addToList,
            params: { db: db, TEMPLATEDB: TEMPLATEDB },
        },
    };

    // Set id to element if doesn't already have one
    eh.setId(element);

    // Register
    for (let k in classList) {
        if (h.isNull(DB?.[k])) {
            console.log(k);
            DB[k] = {};
        }
        let fn = classList?.[k]?.["eventFn"];
        let callbackFn = classList?.[k]?.["callbackFn"];
        let params = classList?.[k]?.["params"];

        let elements = element.querySelectorAll(`.${k}`);
        for (let e of elements) {
            if (h.isNull(DB?.[k]?.[e?.id])) {
                fn(e, callbackFn, params);
                DB[k][e.id] = true;
            }
        }
    }
}

// -----------------------------------------------------
//  addToList
// -----------------------------------------------------

function addToList(action, params) {
    /**
     * Adds element to list
     * @param {Object} element
     * @param {Object} list
     * @returns {Object} The element
     */

    // Retrieve database of records from params
    let db = params?.db || [];
    let TEMPLATEDB = params?.TEMPLATEDB || [];
    

    // Get element from element id in action object
    let obj = action.object?.[0] || action.object;
    let element = document.getElementById(obj?.["@id"]) || null;

    // Get itemlist record from db
    let itemList_record_type = property.record_type.get(element);
    let itemList_record_id = property.record_id.get(element);
    let itemList_record = db.get(itemList_record_type, itemList_record_id);
    

    

    // Add items to itemList_record
    let items = action.result;

    
    for (let item of h.toArray(items)) {
        console.log('item', item.record || item)
        itemList_record.insert(item.record);
    }

    
  
    let r1 = itemList_record.record
    console.log(JSON.stringify(r1, null, 4))

    console.log("rendering");
    console.log(TEMPLATEDB)
    let r = render.render(document.body, r1, TEMPLATEDB);

    console.log(r)
    return;
}



// -----------------------------------------------------
//  Copy value 
// -----------------------------------------------------


function copyValue(action, params) {
    /**
     * Copy value from element to clipboard
     * @param {Object} element
     * @param {Object} list
     * @returns {Object} The element
     */

    // Retrieve database of records from params
    let db = params?.db || [];
    let TEMPLATEDB = params?.TEMPLATEDB || [];
    

    // Get element from element id in action object
    let obj = action.object?.[0] || action.object;
    let element = document.getElementById(obj?.["@id"]) || null;

    // Get record from db
    let record_type = property.record_type.get(element);
    let record_id = property.record_id.get(element);
    let record = db.get(record_type, record_id);

    if(property.type.get(element) =='thing'){
        let systemRecord = db.get(record_type, record_id);
        let record = th.record.get(systemRecord)
        navigator.clipboard.writeText(JSON.stringify(record));

    }

    //todo: add wayt to copy values



    // Add items to itemList_record
    let items = action.result;


    for (let item of h.toArray(items)) {
        console.log('item', item.record || item)
        itemList_record.insert(item.record);
    }



    let r1 = itemList_record.record
    console.log(JSON.stringify(r1, null, 4))

    console.log("rendering");
    console.log(TEMPLATEDB)
    let r = render.render(document.body, r1, TEMPLATEDB);

    console.log(r)
    return;
}






// -----------------------------------------------------
//  Comment
// -----------------------------------------------------

function registerDeleteValueEventHandler(element, config) {
    /**
     * Registers the delete value event handler
     * @param {Object} element
     * @param {Object} db
     * @returns {Object} The element
     */

    element.addEventListener("click", (event) => {
        let thingElement = h.dom.thing.traverse.current.thing.get(event.target);
        let propertyElement = h.dom.thing.traverse.current.property.get(
            event.target,
        );
        let valueElement = h.dom.thing.traverse.current.value.get(event.target);

        // Get record from db
        let record_type = h.dom.thing.property.record_type.get(thingElement);
        let record_id = h.dom.thing.property.record_id.get(thingElement);
        let propertyID = h.dom.thing.property.propertyID.get(propertyElement);
        let valueHash = h.dom.thing.property.valueHash.get(valueElement);
        let value = h.dom.thing.record.value.get(valueElement);

        let record = db.filter(
            (x) => x?.["@type"] == record_type && x?.["@id"] == record_id,
        )?.[0];

        let newValue = [];
        for (let v of h.toArray(record?.[propertyID])) {
            if (h.base.hash.get(v) != valueHash && valueHash != v) {
                newValue.push(v);
            }
        }
        record[propertyID] = newValue;
        console.log(record);
        let a3 = h.dom.thing.render(t, record);
    });
}

