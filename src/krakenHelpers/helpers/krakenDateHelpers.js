


export const krakenDateHelpers = {

    // Base
    getDuration: getDuration,
    getDurationRecord: getDurationRecord,
    toDate: toDate,
    toText: toText,
    validateDate: validateDate,
    
    // Shortcuts
    isDate: validateDate,
    getDate: toDate,
    duration: getDuration,
    durationRecord: getDurationRecord,

}


function validateDate(value){
    if(value instanceof Date) { return true }
    return false
}


function toText(value){

    if(validateDate(value) == false){ return undefined }

    let formattedDate = value.toISOString().split('.')[0]
    formattedDate.replace('T', ', ')

    return formattedDate
}


function toDate(value){
    
    if(validateDate(value) == true){ return value }

    try {
        if (typeof value !== 'string') {
            return undefined;
        }

        const date = new Date(value);

        
        if (isNaN(date.getTime())) {
            return undefined;
        }

        return date;
        
    } catch (error) {
        return undefined
    }
}


function getDuration(date1, date2){

    date1 = toDate(date1)
    date2 = toDate(date2)

    
    if(validateDate(date1) == false){ return undefined }
    if(validateDate(date2) == false){ return undefined }

    let startDate 
    let endDate
    
    if(date1 < date2){
        startDate = date1
        endDate = date2
    } else {
        startDate = date2
        endDate = date1
    }

    let duration = (endDate - startDate) / 1000
    return duration
    
}

function getDurationRecord(date1, date2){

    let duration = getDuration(date1, date2)

    let result = {
        "@type": "QuantitativeValue",
        "@id": String(crypto.randomUUID()),
        "unitCode": "SEC",
        "unitText": "s",
        'value': duration
    }            

    
    return result

}

