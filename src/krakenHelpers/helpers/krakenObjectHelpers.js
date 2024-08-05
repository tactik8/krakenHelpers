

export const krakenObjectHelpers = {

    isObject: isObject,
    getKeys: getKeys,
    keys: getKeys,
    toText: toText
    
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


function toText(value){

    if(isObject(value) == false) { return undefined }

    if(value['@type']){

        return `${value["@type"]}/${value['@id']}`
    } else {

        let keys = Object.keys(value)
        if(keys.length == 0){ return '{}'}

        return `{"${keys[0]}": "${value[keys[0]]}", ... }`
        
    }

    
}

