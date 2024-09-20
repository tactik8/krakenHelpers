

export const krakenNullHelpers = {

    isNull: isNull,
    isNotNull: isNotNull
}




function isNotNull(value){

    return !isNull(value)

}



function isNull(value){

    if(value === 0){ return false }
    if(value === undefined){ return true }
    if(value === null){ return true }
    if(value === ''){ return true }

    // If array, removes null values then check if length == 0
    if(Array.isArray(value)){
        value = value.filter(x => isNull(x) == false)
        if(value.length == 0){
            return true
        } else {
            return false
        }
    }

    // If object, check if it has keys
    if(typeof value === 'object' && !Array.isArray(value) && value !== null){
        if(Object.keys(value).length == 0){
            return true
        } else {
            return false
        }
    }

    // Catch all
    return false

}

