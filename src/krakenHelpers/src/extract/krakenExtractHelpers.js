import { krakenBaseHelpers as h} from '../base/krakenBaseHelpers.js'




export const krakenExtractHelpers = {
    extractMentions: extractMentions,
    extractNames: extractNames,
    extractValueAndUnit: extractValueAndUnit,
    extractUrls: extractUrls,
    extractNumbers: extractNumbers,
    extractPhoneNumbers: extractPhoneNumbers,
    extractDates: extractDates,
    extractEmails: extractEmails,
    
};


function extractMentions(text) {
    // Error handling for invalid input
    if (typeof text !== "string") {
        throw new Error("Input must be a string");
    }

    // Regular expression to match mentions
    const mentionRegex = /\B@\w+/g;
    const mentions = text.match(mentionRegex);

    // Return an empty array if no mentions found
    return mentions ? mentions : [];
}

function extractNames(inputString) {
    if (typeof inputString !== "string") {
        throw new TypeError("Input must be a string");
    }

    const namePattern = /\b[A-Z][a-z]*\b/g;
    const names = inputString.match(namePattern);

    return names || [];
}

function extractValueAndUnit(input) {
    if (typeof input !== "string") {
        throw new Error("Input must be a string");
    }

    const regex = /(-?\d+\.?\d*)\s*([a-zA-Z]+)/;
    const match = input.match(regex);

    if (!match) {
        throw new Error("No value and unit found in the input string");
    }

    const value = parseFloat(match[1]);
    const unit = match[2];

    return { value, unit };
}

function extractNumbers(input) {
    if (typeof input !== "string") {
        throw new Error("Input must be a string");
    }

    const numbers = input.match(/\d+/g);
    if (numbers === null) {
        return [];
    }

    return numbers.map(Number);
}

function extractPhoneNumbers(input) {
    // Error handling: check if input is a string
    if (typeof input !== "string") {
        throw new Error("Input must be a string");
    }

    // Regular expression to match different telephone number formats
    //const phoneRegex = /(\+?\d{1,2}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}/g;
    const phoneRegex =
        /(?:([+]\d{1,4})[-.\s]?)?(?:[(](\d{1,3})[)][-.\s]?)?(\d{1,4})[-.\s]?(\d{1,4})[-.\s]?(\d{1,9})/g;

    // Extract phone numbers
    const phoneNumbers = input.match(phoneRegex);

    // If no phone numbers are found, return an empty array
    if (!phoneNumbers) {
        return [];
    }

    return phoneNumbers;
}

function extractDates(input) {
    try {
        if (typeof input !== "string") {
            return [];
        }

        // Regular expression to match dates in YYYY-MM-DD, DD/MM/YYYY, or MM-DD-YYYY format
        const datePattern =
            /\b(\d{4}-\d{2}-\d{2}|\d{2}\/\d{2}\/\d{4}|\d{2}-\d{2}-\d{4})\b/g;
        const dates = input.match(datePattern);

        if (!dates) {
            return [];
        }

        let validDates = [];
        for (let date of dates) {
            let d = h.date.toDate(date);
            if (d && d != null) {
                validDates.push(d);
            }
        }

        return validDates;
    } catch (error) {
        return [];
    }
}

function extractEmails(text) {
    try {
        // Check if the input is a string
        if (typeof text !== "string") {
            throw new Error("Input must be a string");
        }

        // Regular expression for matching email addresses
        const emailRegex =
            /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,7}\b/g;
        const emails = text.match(emailRegex);

        // Check if any emails were found
        if (emails === null) {
            throw new Error("No email addresses found");
        }

        return emails;
    } catch (error) {
        return `Error: ${error.message}`;
    }
}

function extractUrls(text) {
    try {
        if (typeof text !== "string") {
            throw new Error("Input must be a string");
        }

        const urlRegex = /https?:\/\/[^\s/$.?#].[^\s]*/g;
        const urls = text.match(urlRegex);

        if (!urls) {
            return [];
        }

        return urls;
    } catch (error) {
        console.error("An error occurred:", error.message);
        return [];
    }
}
