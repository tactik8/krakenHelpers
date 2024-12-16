
import { krakenNullHelpers} from "./krakenNullHelpers.js";
import { krakenArrayHelpers} from "./krakenArrayHelpers.js";
import { krakenDotNotationHelpers } from "./krakenDotNotationHelpers.js";
import { krakenNumberHelpers } from "./krakenNumberHelpers.js";
import { krakenJsonHelpers } from "./krakenJsonHelpers.js";
import { krakenObjectHelpers } from "./krakenObjectHelpers.js";
import { krakenDateHelpers } from "./krakenDateHelpers.js";
import { krakenBaseThingHelpers} from './krakenBaseThingHelpers.js'

const h = {
    null: krakenNullHelpers,
    array: krakenArrayHelpers,
    date:  krakenDateHelpers,
    isNull: krakenNullHelpers.isNull,
    isNotNull: krakenNullHelpers.isNotNull,
    toArray: krakenArrayHelpers.toArray,
    isArray: krakenArrayHelpers.isArray,
    dot: krakenDotNotationHelpers,
    number: krakenNumberHelpers,
    json: krakenJsonHelpers,
    isObject: krakenObjectHelpers.isObject,
    object: krakenObjectHelpers,
    thing: krakenBaseThingHelpers
}


export const krakenHeadingHelpers = {
    record: {
        get: getHeadingRecord,
    },
    oneLiner: {
        get: getHeadingOneLiner,
    },
    heading1: _getHeading1,
    heading2: _getHeading2,
    headingDescription: _getHeadingDescription,
    headingDate: _getHeadingDate,
    headingDateSince: _getHeadingDateSince,
    headingDuration: _getHeadingDuration,
    headingStatus: _getHeadingStatus,
    headingImage: _getHeadingImage,
    headingStars: _getHeadingStars,
    headingTotal: _getHeadingTotal,
    addHeadings: addHeadingstoRecord

    

    
};


function addHeadingstoRecord(record){
    /**
     * Adds heading to record
     * @param {Object} record
     * @returns {Object} The record
     */


    let headings = getHeadingRecord(record)

    for(let k in headings){
        record[k] = headings[k]    
    }


    // Recurse
    for(let k in record){

        if(h.isArray(record[k])){
            
            for (let i=0; i < record[k].length; i++) {
                
                if(h.thing.isValid(record[k][i])){
                    record[k][i] = addHeadingstoRecord(record[k][i])
                }
            }
        }

        if(h.thing.isValid(record[k])){
            record[k] = addHeadingstoRecord(record[k])
        }
        
    }

    return record

    
}

function getHeadingRecord(record, locale){
    /**
     * Returns the heading record
     * @param {Object} record
     * @returns {Object} The heading record
     */

    // Array
    if(h.isArray(record)){
        return record.map(x => getHeadingRecord(x, locale))
    }

    // Handle non object
    if(!h.isObject(record)){
        return record
    }

    // return non thing
    if(h.isNull(record?.['@type'])){
        return record
    }
    
    // Copy record
    
    record = JSON.parse(JSON.stringify(record))
    
    record._heading1 =  _getHeading1(record)
    record._heading2 =  _getHeading2(record)
    record._headingDescription =  _getHeadingDescription(record)
    record._headingDate =  _getHeadingDate(record)
    record._headingDateSince =  _getHeadingDateSince(record)
    record._headingStatus =  _getHeadingStatus(record)
    record._headingImage = _getHeadingImage(record)
    record._headingDuration = _getHeadingDuration(record)
    record._headingStars = _getHeadingStars(record)
    record._headingPrice = _getHeadingPrice(record)
    record._headingPriceUnit = _getHeadingPriceUnit(record)
    record._headingHtmlInputType = getHtmlInputType(record)

    // Recurse for sub records
    for(let k of Object.keys(record)){
        record[k] = getHeadingRecord(record[k], locale)
    }

    record = krakenJsonHelpers.simplify(record)

    
    // Return
    return record
}

function getHeadingOneLiner(record, locale){
    /**
     * Returns the heading one liner
     * @param {Object} record
     * @returns {str} The heading one liner
     */

    let elements = []
    elements.push(_getHeadingDate(record))
    elements.push(_getHeading1(record))
    elements.push(_getHeadingStatus(record))

    elements = elements.filter(x => !h.isNull(x))
    return elements.join(' ')
    
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

function _getHeadingDuration(record){

    let date = _getHeadingDate(record) 
    if(h.isNull(date)){ return null }
    
    let duration = h.date.human.duration(date)
    return duration
}

function _getHeadingDateSince(record){

    let date = _getHeadingDate(record) 
    if(h.isNull(date)){ return null }
    let duration = h.date.human.duration(date)
    return duration

}


function _getHeadingStars(record){

    let score = record?.ratingValue

    if(h.isNull(score)){ return null }
    
    let runningScore = 0

    let content = ''
    while(runningScore < score){
        content += fullStar()
        runningScore += 1
    }


    if(score > runningScore && score < runningScore +1){
        content += halfStar()
    }

    while(runningScore < (score?.bestRating || 5) ){
        content += emptyStar()
        runningScore +=1
    }

    return content
    
}

function _getHeadingPrice(record){

    if(h.isNull(record?.priceSpecification)){ return null }

    let ps = record?.priceSpecification?.[0] || record?.priceSpecification

    let price = ps?.price
    let priceCurrency = ps?.priceCurrency

    let content = ''

    if(priceCurrency == 'CAD' || priceCurrency == 'USD'){
        content = '$'
    }

    
    
    if(h.number.isValid(h.number.toNumber(ps?.price))){

        content += String(ps.price)
           
    }

    if(content ==''){
        content = null
    }
    return content
    
}

function _getHeadingPriceUnit(record){

    if(h.isNull(record?.priceSpecification)){ return null }

    let ps = record?.priceSpecification?.[0] || record?.priceSpecification

    let content = null
    if(h.isNotNull(ps?.referenceQuantity?.unitCode)){

        content = ps?.referenceQuantity?.unitCode
        if(h.isNotNull(content)){
            content = content.toLowerCase()
        }
    }

    return content

}

function getHtmlInputType(record){

    if(record?.['@type'] != 'PropertyValueSpecification'){
        return
    }


    if(record?.minValue == 0 && record.maxValue==1){
        return 'checkbox'
    }

    

    if(h.isNotNull(record?.minValue)){
        return "number"
    }
    if(h.isNotNull(record?.maxValue)){
        return 'number' 
    }

    if(h.isNotNull(record?.valueName) && record?.valueName.includes('Date')){
        return 'datetime-local'
    }

    if(h.isNotNull(record?.valueName) && record?.valueName.includes('Time')){
        return 'datetime-local'
    }

    if(h.isNotNull(record?.valueName) && record?.valueName.toLowerCase().includes('email')){
        return 'email'
    }

    if(h.isNotNull(record?.valueName) && record?.valueName.toLowerCase().endsWith('url')){
        return 'url'
    }

    if(h.isNotNull(record?.valueName) && record?.valueName.toLowerCase().includes('phone')){
        return 'phone'
    }
    
   
    
}



function _getHeadingTotal(record){

    
}

function _getHeadingX(record, heading) {
    /**
     * Returns the heading for a given record
     * @param {Object} record
     * @param {String} heading
     * @returns {String} The heading
     */

    let headingValue = ''
    try {
        
        let record_type = record["@type"];
    
        let config = getConfig();
    
        let headingPossibilities = config?.[record_type]?.[heading];

        // Revert to thing if null
        if (h.isNull(headingPossibilities) ) {
            headingPossibilities = config?.["Thing"]?.[heading];
        }
    
        headingValue = null;


        // if heading2, ensures that it is not equal to heading1
        let comparaison = null
        if(heading === "heading2"){
            comparaison = _getHeadingX(record, "heading1")
        }
        
        // Iterate through possibilities until a non null value is found
        for (let hp of h.toArray(headingPossibilities)) {
            headingValue = _getValue(record, heading, hp);
    
            if (h.isNotNull(headingValue)) {

                if(heading == "heading2"){
                    if (comparaison != headingValue){
                        break
                    }
                } else {
                    break;
                }
            }
        }
    } catch {
        headingValue = record?.["@id"]
    }
        
    return headingValue;
}

function _getValue(record, heading, keys) {
    keys = h.toArray(keys);

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
            heading1: ["headline", "name", "url", ["@type", "@id"]],
            heading2: ["url", ["@type", "@id"]],
            headingDescription: ["text", "description"],
            headingDate: [""],
        },
        Article: {
            heading1: ["headline", "name", "url", "@id"],
            heading2: ["author", "url", "@id"],
            headingDescription: ["articleBody", "text", "description"],
            headingDate: ["datePublished", "dateCreated"],
        },
        Action: {
            heading1: ["name", "url", ["@type", "@id"]],
            heading2: ["author", "url", ["@type", "@id"]],
            headingDescription: ["articleBody", "text", "description"],
            headingDate: ["datePublished", "dateCreated"],
            headingStatus: ["actionStatus"],
        },
        EditorPart: {
            heading1: ["propertyID"],
            heading2: ["value"],
            headingDescription: ["value"],
        },
        Person: {
            heading1: [["givenName", "familyName"], "name", "url", ["@type", "@id"]],
            heading2: ["title", "email", "url", ["@type", "@id"]],
            headingDescription: ["text", "description"],
            headingDate: ["datePublished", "dateCreated"],
            headingStatus: ["actionStatus"],
        },
        ListItem: {
            heading1: ["item", "name", "url", ["@type", "@id"]],
            heading2: ["item", "url", ["@type", "@id"]],
            headingDescription: ["text", "description"],
            headingDate: ["datePublished", "dateCreated"],
            headingStatus: ["actionStatus"],
        },
        CreativeWork: {
            heading1: ["headline", "name", "url", ["@type", "@id"]],
            heading2: ["author", "url", ["@type", "@id"]],
            headingDescription: ["articleBody", "text", "description"],
            headingDate: ["datePublished", "dateCreated"],
        },
        HowTo: {
            heading1: ["headline", "name", "url", ["@type", "@id"]],
            heading2: ["author", "url", ["@type", "@id"]],
            headingDescription: ["articleBody", "text", "description"],
            headingDate: ["datePublished", "dateCreated"],
        },
        HowToSection: {
            heading1: ["headline", "name", "url", ["@type", "@id"]],
            heading2: ["author", "url", ["@type", "@id"]],
            headingDescription: ["articleBody", "text", "description"],
            headingDate: ["datePublished", "dateCreated"],
        },
        HowToStep: {
            heading1: ["headline", "name", "url", ["@type", "@id"]],
            heading2: ["author", "url", ["@type", "@id"]],
            headingDescription: ["articleBody", "text", "description"],
            headingDate: ["datePublished", "dateCreated"],
        },
        HowToDirection: {
            heading1: ["headline", "name", "url", ["@type", "@id"]],
            heading2: ["author", "url", ["@type", "@id"]],
            headingDescription: ["articleBody", "text", "description"],
            headingDate: ["datePublished", "dateCreated"],
        },
        PostalAddress: {
            heading1: ["streetAddress", "name", ["@type", "@id"]],
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
        },
        Order: {
            
        }
    };

    return record;
}



function fullStar(){

    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>`
}

function halfStar(){

    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
          <path d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"/>
        </svg>`
}



function emptyStar(){

    return `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
</svg>`
}


