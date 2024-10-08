


export const krakenJsonHelpers = {

    get: getPropertyValueFromDot,
    getPropertyValueFromDot: getPropertyValueFromDot,
    isJson: isJson,
    set: setPropertyValueFromDot,
    setPropertyValueFromDot:setPropertyValueFromDot,
    flatten: objectToDotNotation,
    objectToDotNotation: objectToDotNotation,
    simplify: simplify,
    toPropertiesList: jsonToPropertiesSingle,
    toPropertiesSingle: jsonToPropertiesList
    
}

function isJson(value){

    try{
        let l = JSON.parse(value)
        return true
    } catch {
        return false
    }

    
}

function getPropertyValueFromDot(key, value){
    // Retrieves value by following dot notation

    var items =key.split('.');
    for (let t=0; t<items.length; t++){
        value = value[items[t]];
    };
    return value;
}


function setPropertyValueFromDot(key, record, value){
    // Retrieves value by following dot notation

    var items = key.split('.');

    let item = items[0]

    
    if(items.length > 1){
        if(!record[item]){
            record[item] = {}
        }
        
        setPropertyValueFromDot(items.slice(1).join('.'), record[item], value)
    } else {

        record[item] = value
    }

    return record;
}



function objectToDotNotation(obj, parentPrefix = '') {
    let result = {};

    // Helper function to handle recursion and path building
    function recurse(o, path) {
        for (let key in o) {
            if (o.hasOwnProperty(key)) {
                const newPath = path ? `${path}.${key}` : key;

                // If the property is an object or array, recurse further
                if (typeof o[key] === 'object' && o[key] !== null) {
                    recurse(o[key], newPath);
                } else {
                    // Otherwise, add the property to the result
                    result[newPath] = o[key];
                }
            }
        }
    }

    recurse(obj, parentPrefix);
    return result;
}




function simplify(data) {
    // Remove arrays of 1
    if (Array.isArray(data)) {
        // If the array has exactly one element, return that element
        if (data.length === 1) {
            return simplify(data[0]);
        } else {
            // Otherwise, process each element in the array
            return data.map(simplify);
        }
    } else if (data !== null && typeof data === 'object') {
        // If the data is an object, process each key
        const newData = {};
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                newData[key] = simplify(data[key]);
            }
        }
        return newData;
    } else {
        // If the data is neither an array nor an object, return it as is
        return data;
    }
}


function jsonToPropertiesSingle(record){
    // Converts lists to single item(the first item)


    if(Array.isArray(record)){
        if(record.length == 0) { return null }
        record = record[0]
    }

    if(Object.keys(record)){
        for(let k of Object.jeys(record)){
            record[k] = jsonWithoutList(record[k])
        }
    }
    return record
}

function jsonToPropertiesList(record){
    // Converts single items to lists


    if(Array.isArray(record)){
        let newArray = []
        for(let r of record){
            newArray.push(jsonToLists(r))
        }
        record = newArray
    }

    if(Object.keys(record)){
        for(let k of Object.jeys(record)){
            record[k] = [record[k]]
        }
    }
    return record
}