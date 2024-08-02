

export const krakenObjectHelpers = {

    isObject: isObject,
    getKeys: getKeys,
    keys: getKeys
    
}


function isObject(value){

    return typeof value === 'object' && !Array.isArray(value) && value !== null
}

function getKeys(value){

    if(isObject(value) == false) { return undefined }

    let keys = Object.keys(value)
    keys.sort()
    return keys
}


