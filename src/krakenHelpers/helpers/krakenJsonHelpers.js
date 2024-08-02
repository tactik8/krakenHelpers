


export const krakenJsonHelpers = {

    get: getPropertyValueFromDot,
    getPropertyValueFromDot: getPropertyValueFromDot,
    set: setPropertyValueFromDot,
    setPropertyValueFromDot:setPropertyValueFromDot,
    flatten: objectToDotNotation,
    objectToDotNotation: objectToDotNotation

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