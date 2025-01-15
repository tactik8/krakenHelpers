

import { krakenThingSystemHelpers  } from "./src/krakenThingSystemHelpers.js";

import { krakenThingPropertyValueHelpers  } from "./src/krakenThingPropertyValueHelpers.js";

import {krakenThingListHelpers} from './src/krakenThingListHelpers.js'

import { krakenThingActionExecutionHelpers } from './src/krakenThingActionExecutionHelpers.js'

export const krakenThingHelpers = {


    pvh: krakenThingPropertyValueHelpers,
    
    list: krakenThingListHelpers,
    pv: krakenThingPropertyValueHelpers,

    // Base
    isValid: krakenThingSystemHelpers.isValid,
    isThing: krakenThingSystemHelpers.isThing,
    toThing: krakenThingSystemHelpers.toThing,
    toString: krakenThingSystemHelpers.toString,
    toStringDetailed: krakenThingSystemHelpers.toStringDetailed,
    toJSON: krakenThingSystemHelpers.toJSON,
    isEmpty: krakenThingSystemHelpers.isEmpty,
    keys: krakenThingSystemHelpers.keys,
    clone: krakenThingSystemHelpers.clone,
    copy: krakenThingSystemHelpers.copy,
    hash: krakenThingSystemHelpers.hash,
    
    

    // Constructor
    new: krakenThingSystemHelpers.new,

    // Properties
    record_type: {
        get: krakenThingSystemHelpers.record_type.get,
        set: krakenThingSystemHelpers.record_type.set,
    },
    record_id: {
        get: krakenThingSystemHelpers.record_id.get,
        set: krakenThingSystemHelpers.record_id.set,
    },
    ref: {
        get: krakenThingSystemHelpers.ref.get,
        set: krakenThingSystemHelpers.ref.set,
    },
    value: {
        get: krakenThingSystemHelpers.value.get,
        set: krakenThingSystemHelpers.value.set,
        add: krakenThingSystemHelpers.value.add,
        replace: krakenThingSystemHelpers.value.replace,
        delete: krakenThingSystemHelpers.value.delete,
    },
    values: {
        get: krakenThingSystemHelpers.values.get,
        set: krakenThingSystemHelpers.values.set,
        add: krakenThingSystemHelpers.values.add,
        replace: krakenThingSystemHelpers.values.replace,
        delete: krakenThingSystemHelpers.values.delete,
    },
    property: {
        get: krakenThingSystemHelpers.property.get,
        set: krakenThingSystemHelpers.property.set,
        add: krakenThingSystemHelpers.property.add,
        replace: krakenThingSystemHelpers.property.replace,
        delete: krakenThingSystemHelpers.property.delete,
    },
    propertyValue: {
        get: krakenThingSystemHelpers.propertyValue.get,
        set: krakenThingSystemHelpers.propertyValue.set,
        add: krakenThingSystemHelpers.propertyValue.add,
        replace: krakenThingSystemHelpers.propertyValue.replace,
        delete: krakenThingSystemHelpers.propertyValue.delete,
    },
    propertyValues: {
        get: krakenThingSystemHelpers.propertyValues.get,
        set: krakenThingSystemHelpers.propertyValues.set,
        add: krakenThingSystemHelpers.propertyValues.add,
        replace: krakenThingSystemHelpers.propertyValues.replace,
        delete: krakenThingSystemHelpers.propertyValues.delete,
    },
    record: {
        get: krakenThingSystemHelpers.record.get,
        set: krakenThingSystemHelpers.record.set,
    },
    htmlRecord: {
        get:  krakenThingSystemHelpers.htmlRecord.get,
    },
    system: {
        get: krakenThingSystemHelpers.system.get,
        set: krakenThingSystemHelpers.system.set,
    },

    children: krakenThingSystemHelpers.children,
    flatten: krakenThingSystemHelpers.flatten,

    // Comparisons
    isSame: krakenThingSystemHelpers.isSame,
    isNotSame: krakenThingSystemHelpers.isNotSame,
    eq: krakenThingSystemHelpers.eq,
    ne: krakenThingSystemHelpers.ne,
    lt: krakenThingSystemHelpers.lt,
    gt: krakenThingSystemHelpers.gt,
    validate: krakenThingSystemHelpers.validate,

    // Operations
    replace: krakenThingSystemHelpers.replace,
    merge: krakenThingSystemHelpers.merge,
    compile: krakenThingSystemHelpers.compile,
    replaceChildren: krakenThingSystemHelpers.replaceChildren,

    // Lists
    length: krakenThingSystemHelpers.length,
    get: krakenThingSystemHelpers.get,
    push: krakenThingSystemHelpers.push,
    delete: krakenThingSystemHelpers.delete,
    dedupe: krakenThingSystemHelpers.dedupe,
    sort: krakenThingSystemHelpers.sort,
    filter: krakenThingSystemHelpers.filter,
    mergeLists: krakenThingSystemHelpers.mergeLists,


    // Execution
    execute: krakenThingActionExecutionHelpers.execute,
    
};
