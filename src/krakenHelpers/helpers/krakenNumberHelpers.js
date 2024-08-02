

export const krakenNumberHelpers = {

    isNumber: isNumber,
    toNumber: toNumber,
    toText: toText
}


function isNumber(value){
    
    return typeof value === 'number';
    
}

function toNumber(value){

    if(typeof value === 'number') { return value }
    
    try { 
        value = Number(value)
        return value
    } catch {

    }

    return undefined
}


function toText(value, rounding){

    value = toNumber(value)

    if(!value || value == null) { return undefined }

    if(rounding | rounding != null){
        value = Math.round(value)
    }

    return String(value)
    
}

