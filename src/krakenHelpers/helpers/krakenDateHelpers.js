import { krakenNullHelpers} from "./krakenNullHelpers.js";
import { krakenArrayHelpers} from "./krakenArrayHelpers.js";

const h = {
    null: krakenNullHelpers,
    array: krakenArrayHelpers,
    isNull: krakenNullHelpers.isNull,
    isNotNull: krakenNullHelpers.isNotNull,
    toArray: krakenArrayHelpers.toArray
}



/** @const {Object}  krakenDateHelpers
 * - isDate: Determiens if value is of type Date
 * - toDate: Converts a value (string, etc.) to Date
 * - getDuration: Returns duration between two dates
 * - getDurationRecord: Returns duration in schema.org QuantitativeValue record
 */
export const krakenDateHelpers = {

    // Base
    isDate: validateDate,
    isTextDate: validateTextDate,
    getDuration: getDuration,
    getDurationRecord: getDurationRecord,
    toDate: toDate,
    toText: toText,
    human: {
        duration: getHumanReadableDuration,
        date: getHumanReadableDate
    },
    iso: {
        getIsoDurationFromDates: toISODurationFromDates,
        getTextFromIsoDuration: convertISODurationToEnglish,
        getIsoDurationFromText: convertEnglishToISODuration
    },
    now: getCurrentDateObject,
    
    // Shortcuts
    validateDate: validateDate,
    getDate: toDate,
    duration: getDuration,
    durationRecord: getDurationRecord

}

/**
 * Returns true if value if a Date object
 * @param {String | Date | object} value
 * @return {bool} isDate True if date object
 */
function validateDate(value){
    if(value instanceof Date) { return true }
    
    return false
}

function validateTextDate(value){
    if(value instanceof Date) { return true }

    value = toDate(value)

    if(value instanceof Date) { return true }

    
    return false
}

function toText(value){

   
    if(validateDate(value) == false){ 
    
        value = toDate(value)
        if(validateDate(value) == false){
            return ''
        }
    }



    let formattedDate = value.toLocaleString()	
    

    return formattedDate
}


function toDate(value){
    
    if(validateDate(value) == true){ return value }

    if (typeof value !== 'string') {
        return undefined;
    }
    
    // Native conversion
    try {
        const date = new Date(value);
        
        if (!isNaN(date.getTime())) {
            return date;
        }

      
        
    } catch (error) {
        
    }


    // Convert from different formats
    const formatMap = {
        "YYYY-MM-DD": /(\d{4})-(\d{2})-(\d{2})/,
        "MM/DD/YYYY": /(\d{2})\/(\d{2})\/(\d{4})/,
        "DD-MM-YYYY": /(\d{2})-(\d{2})-(\d{4})/,
        "YYYY/MM/DD": /(\d{4})\/(\d{2})\/(\d{2})/
    };

    for(let format of Object.keys(formatMap)){

    
        const regex = formatMap[format];
       
        const match = value.match(regex);
        if (!match) {
            continue
        }
    
        let year, month, day;
    
        switch (format) {
            case "YYYY-MM-DD":
            case "YYYY/MM/DD":
                year = match[1];
                month = match[2] - 1; // JS months are 0-based
                day = match[3];
                break;
            case "MM/DD/YYYY":
                month = match[1] - 1;
                day = match[2];
                year = match[3];
                break;
            case "DD-MM-YYYY":
                day = match[1];
                month = match[2] - 1;
                year = match[3];
                break;
            default:
                break
        }
    
        const date = new Date(year, month, day);
    
        // Check if the date is valid
        try{
            if (!isNaN(date.getTime())) {
               return date
            }
            
        } catch {}
        
        
    }
    return null

    
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


function getCurrentDateObject() {
    let now = new Date();   
    return now;
}


// -----------------------------------------------------
//  Human readable  
// -----------------------------------------------------

function getHumanReadableDate(date) {


    // If not date 2, assume date 2 is now
    
    const now = new Date();
 
    const targetDate = new Date(date);
    const diff = Math.abs(now - targetDate); // difference in milliseconds

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30); // approximation for months
    const years = Math.floor(days / 365); // approximation for years

    if (years > 0) {
        return years === 1 ? "1 year ago" : `${years} years ago`;
    } else if (months > 0) {
        return months === 1 ? "1 month ago" : `${months} months ago`;
    } else if (days > 0) {
        return days === 1 ? "1 day ago" : `${days} days ago`;
    } else if (hours > 0) {
        return hours === 1 ? "1 hour ago" : `${hours} hours ago`;
    } else if (minutes > 0) {
        return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`;
    } else {
        return seconds === 1 ? "1 second ago" : `${seconds} seconds ago`;
    }
}

function getHumanReadableDuration(startDate, endDate) {

    
    startDate = toDate(startDate)
    endDate = toDate(endDate)

    
    if(h.isNull(startDate)){ return '' }
    if(h.isNull(endDate)){ return '' }

    
    const diffInMilliseconds = Math.abs(endDate - startDate);

    const millisecondsInSecond = 1000;
    const millisecondsInMinute = millisecondsInSecond * 60;
    const millisecondsInHour = millisecondsInMinute * 60;
    const millisecondsInDay = millisecondsInHour * 24;
    const millisecondsInMonth = millisecondsInDay * 30.44; // Approximate value for a month
    const millisecondsInYear = millisecondsInDay * 365.25; // Account for leap years

    const years = Math.floor(diffInMilliseconds / millisecondsInYear);
    const months = Math.floor((diffInMilliseconds % millisecondsInYear) / millisecondsInMonth);
    const days = Math.floor((diffInMilliseconds % millisecondsInMonth) / millisecondsInDay);
    const hours = Math.floor((diffInMilliseconds % millisecondsInDay) / millisecondsInHour);
    const minutes = Math.floor((diffInMilliseconds % millisecondsInHour) / millisecondsInMinute);
    const seconds = Math.floor((diffInMilliseconds % millisecondsInMinute) / millisecondsInSecond);

    let duration = [];
    if (years) { return `${years} year${years > 1 ? 's' : ''}`};
    if (months)  { return `${months} month${months > 1 ? 's' : ''}`};
    if (days)  { return `${days} day${days > 1 ? 's' : ''}`};
    if (hours)  { return `${hours} hour${hours > 1 ? 's' : ''}`};
    if (minutes)  { return `${minutes} minute${minutes > 1 ? 's' : ''}`};
    if (seconds)  { return `${seconds} second${seconds >= 0  ? 's' : ''}`};
    return ''
    
    
    
}



// -----------------------------------------------------
//  ISO 
// -----------------------------------------------------



function toISODurationFromDates(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);

    let years = end.getFullYear() - start.getFullYear();
    let months = end.getMonth() - start.getMonth();
    let days = end.getDate() - start.getDate();
    let hours = end.getHours() - start.getHours();
    let minutes = end.getMinutes() - start.getMinutes();
    let seconds = end.getSeconds() - start.getSeconds();

    // Handle negative values by adjusting the larger units
    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }
    if (minutes < 0) {
        minutes += 60;
        hours--;
    }
    if (hours < 0) {
        hours += 24;
        days--;
    }
    if (days < 0) {
        const daysInPreviousMonth = new Date(end.getFullYear(), end.getMonth(), 0).getDate();
        days += daysInPreviousMonth;
        months--;
    }
    if (months < 0) {
        months += 12;
        years--;
    }

    // Construct ISO 8601 duration string
    let duration = 'P';

    if (years > 0) duration += `${years}Y`;
    if (months > 0) duration += `${months}M`;
    if (days > 0) duration += `${days}D`;

    if (hours > 0 || minutes > 0 || seconds > 0) {
        duration += 'T'; // Time part separator

        if (hours > 0) duration += `${hours}H`;
        if (minutes > 0) duration += `${minutes}M`;
        if (seconds > 0) duration += `${seconds}S`;
    }

    return duration;
}

function convertISODurationToEnglish(duration) {
    const isoDurationRegex = /^P(?:(\d+)Y)?(?:(\d+)M)?(?:(\d+)D)?(?:T(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?)?$/;
    const matches = duration.match(isoDurationRegex);

    if (!matches) {
        return "Invalid ISO 8601 duration";
    }

    const years = matches[1] ? `${matches[1]} year${matches[1] > 1 ? 's' : ''}` : '';
    const months = matches[2] ? `${matches[2]} month${matches[2] > 1 ? 's' : ''}` : '';
    const days = matches[3] ? `${matches[3]} day${matches[3] > 1 ? 's' : ''}` : '';
    const hours = matches[4] ? `${matches[4]} hour${matches[4] > 1 ? 's' : ''}` : '';
    const minutes = matches[5] ? `${matches[5]} minute${matches[5] > 1 ? 's' : ''}` : '';
    const seconds = matches[6] ? `${matches[6]} second${matches[6] > 1 ? 's' : ''}` : '';

    const parts = [years, months, days, hours, minutes, seconds].filter(Boolean);

    if (parts.length === 0) {
        return "No duration specified";
    }

    return parts.join(', ');
}

function convertEnglishToISODuration(englishDuration) {
    const timeUnits = {
        year: 'Y',
        years: 'Y',
        month: 'M',
        months: 'M',
        day: 'D',
        days: 'D',
        hour: 'H',
        hours: 'H',
        minute: 'M',
        minutes: 'M',
        second: 'S',
        seconds: 'S'
    };

    let years = 0, months = 0, days = 0, hours = 0, minutes = 0, seconds = 0;

    // Split the input into parts (e.g., ["2 years", "6 months"])
    const parts = englishDuration.split(',').map(part => part.trim());

    parts.forEach(part => {
        const [value, unit] = part.split(' ');
        const number = parseInt(value, 10);

        if (isNaN(number) || !timeUnits[unit.toLowerCase()]) {
            throw new Error("Invalid duration format");
        }

        switch (unit.toLowerCase()) {
            case 'year':
            case 'years':
                years = number;
                break;
            case 'month':
            case 'months':
                months = number;
                break;
            case 'day':
            case 'days':
                days = number;
                break;
            case 'hour':
            case 'hours':
                hours = number;
                break;
            case 'minute':
            case 'minutes':
                minutes = number;
                break;
            case 'second':
            case 'seconds':
                seconds = number;
                break;
        }
    });

    // Construct ISO 8601 duration string
    let isoDuration = 'P';
    if (years) isoDuration += `${years}Y`;
    if (months) isoDuration += `${months}M`;
    if (days) isoDuration += `${days}D`;

    if (hours || minutes || seconds) {
        isoDuration += 'T';
        if (hours) isoDuration += `${hours}H`;
        if (minutes) isoDuration += `${minutes}M`;
        if (seconds) isoDuration += `${seconds}S`;
    }

    return isoDuration || "P0D"; // Return P0D for no duration
}

