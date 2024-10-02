import { krakenArrayHelpers as array } from "./krakenArrayHelpers.js";

import { krakenHelpersLight as h} from '../krakenHelpersLight.js'

export const krakenHeadingsHelpers = {
    record: getHeadingRecord,
    heading1: _getHeading1,
    heading2: _getHeading2,
    headingDescription: _getHeadingDescription,
    headingDate: _getHeadingDate,
    headingStatus: _getHeadingStatus,
    headingImage: _getHeadingImage
};


function getHeadingRecord(record){
    record._heading1 =  _getHeading1(record)
    record._heading2 =  _getHeading2(record)
    record._headingDescription =  _getHeadingDescription(record)
    record._headingDate =  _getHeadingDate(record)
    record._headingStatus =  _getHeadingStatus(record)
    record._headingImage = _getHeadingImage(record)
    return record
}


function _getHeading1(record) {
    let heading = "heading1";
    return _getHeadingX(record, heading);
}



function _getHeading2(record) {
    let heading = "heading2";
    return _getHeadingX(record, heading);
}

function _getHeadingDescription(record) {
    let heading = "headingDescription";
    return _getHeadingX(record, heading);
}

function _getHeadingDate(record) {
    let heading = "headingDate";
    return _getHeadingX(record, heading);
}

function _getHeadingStatus(record) {
    let heading = "headingStatus";
    return _getHeadingX(record, heading);
}

function _getHeadingImage(record) {

    if(h.isNotNull(record?.contentUrl)){
        return record?.contentUrl
    }
    if(h.isNotNull(record?.image?.contentUrl)){
        return record?.image?.contentUrl
    }
    return null

}

function _getHeadingX(record, heading) {
    let record_type = record["@type"];

    let config = getConfig();

    let headingPossibilities = config?.[record_type]?.[heading];

    console.log('p', headingPossibilities)
    if (h.isNull(headingPossibilities) ) {
        headingPossibilities = config?.["Thing"]?.[heading];
    }

    let headingValue = null;

    for (let hp of h.toArray(headingPossibilities)) {
        headingValue = _getValue(record, heading, hp);

        if (h.isNotNull(headingValue)) {
            break;
        }
    }

    return headingValue;
}

function _getValue(record, heading, keys) {
    keys = array.ensureArray(keys);

    console.log('get value', keys)
    let values = [];
    for (let k of keys) {
        let value = record[k];

        if (Array.isArray(value)) {
            value = value[0];
        }

        // Handle object as values (when listItem references item for example )
        if (value?.["@type"]) {
            value = _getHeadingX(value, "heading1");
        }

        if (value && value != null) {
            values.push(value);
        }
    }

    if (values.length == 0) {
        return null;
    }

    // Assemble values
    let headingValue = values.join(" ");

    return headingValue;
}

function getConfig() {
    let record = {
        Thing: {
            heading1: ["name", "url", "@id"],
            heading2: ["name", "url", "@id"],
            headingDescription: ["description"],
            headingDate: [""],
        },
        Article: {
            heading1: ["headline", "name", "url", "@id"],
            heading2: ["author", "url", "@id"],
            headingDescription: ["articleBody", "text", "description"],
            headingDate: ["datePublished", "dateCreated"],
        },
        Action: {
            heading1: ["name", "url", "@id"],
            heading2: ["author", "url", "@id"],
            headingDescription: ["articleBody", "text", "description"],
            headingDate: ["datePublished", "dateCreated"],
            headingStatus: ["actionStatus"],
        },
        Person: {
            heading1: [["givenName", "familyName"], "name", "url", "@id"],
            heading2: ["title", "email", "url",  "@id"],
            headingDescription: ["text", "description"],
            headingDate: ["datePublished", "dateCreated"],
            headingStatus: ["actionStatus"],
        },
        ListItem: {
            heading1: ["item", "name", "url", "@id"],
            heading2: ["item", "url", "@id"],
            headingDescription: ["text", "description"],
            headingDate: ["datePublished", "dateCreated"],
            headingStatus: ["actionStatus"],
        },
        CreativeWork: {
            heading1: ["headline", "name", "url", "@id"],
            heading2: ["author", "url", "@id"],
            headingDescription: ["articleBody", "text", "description"],
            headingDate: ["datePublished", "dateCreated"],
        },
        PostalAddress: {
            heading1: ["streetAddress", "name", "@id"],
            heading2: [
                [
                    "addressLocality",
                    "addressRegion",
                    "postalCode",
                    "addressCountry",
                ],
            ],
            headingDescription: ["text", "name", "description"],
            headingDate: ["datePublished", "dateCreated"],
        },
        QuantitativeValue: {
            heading1: [["value", "unitText"], ["value", "unitCode"], "@id"],
        }
    };

    return record;
}
