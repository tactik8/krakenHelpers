export const krakenTestHelpers = {
    getThing: getThing,
    getListItem: getListItem,
    getItemList: getItemList,
    getList: getItemList,
    getPerson: getPerson,
    getOrganization: getOrganization,
    getAction: getAction,
    getSystemRecord: getSystemRecord,
    getPropertyValue: getPropertyValue,

    action: getAction,
    article: getArticle,
    creativeWork: creativeWork,
    howTo: howTo,
    itemList: getItemList,
    list: getItemList,
    listItem: getListItem,
    offer: offer,
    offerCatalog: offerCatalog,
    organization: getOrganization,
    person: getPerson,
    potentialAction: potentialAction,
    product: product,
    propertyValue: getPropertyValue,
    thing: getThing,
};

function creativeWork(n) {
    return {
        "@type": "CreativeWork",
        "@id": "CreativeWork_" + String(n),
        headline:
            "Headline - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        text: "Text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        image: {
            "@context": "https://schema.org/",
            "@type": "ImageObject",
            "@id": "image1",
            name: "image_1",
            contentUrl: "https://placehold.co/600x400",
        },
        potentialAction: [
            {
                "@type": "action",
                "@id": "action_1",
                name: "action_1_name",
                url: "#",
            },
        ],
    };
}

function offer(n=0) {
    return {
        "@type": "Offer",
        "@id": "Offer_" + String(n),
        additionalProperty:[
            {
                "@type":"Propertyvalue",
                "@id":"PropertyValue_1_" + String(n),
                "propertyID": "PropertyValue_1",
                "value": "Additional offer property 1_" + String(n),
            },
            {
                "@type":"Propertyvalue",
                "@id":"PropertyValue_2_" + String(n),
                "propertyID": "PropertyValue_2",
                "value": "Additional offer property 2_" + String(n),
            },
            {
                "@type":"Propertyvalue",
                "@id":"PropertyValue_3_" + String(n),
                "propertyID": "PropertyValue_3",
                "value": "Additional offer property 3_" + String(n),
            },
            {
                "@type":"Propertyvalue",
                "@id":"PropertyValue_4_" + String(n),
                "propertyID": "PropertyValue_4",
                "value": "Additional offer property 4_" + String(n),
            }
            
        ],
        name: "Offer_per_month_" + String(n),
        itemOffered: {
            "@type": "Service",
            "@id": "Service_" + String(n),
            name: "Service_" + String(n),
        },
        offeredBy: {
            "@type": "Organization",
            "@id": "organization_" + String(n),
            name:  "organization_" + String(n),
        },
        priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: "25",
            priceCurrency: "USD",
            referenceQuantity: {
                "@type": "QuantitativeValue",
                value: "1",
                unitCode: "MON",
            },
        },
        potentialAction: [
            {
                "@type": "Action",
                "@id": "action_1_" + String(n),
                "name": "Buy now",
                "url": "https://www.test.com",
            }
        ]
    };
}

function offerCatalog(no=3, n=0){

    let record = {
        "@type": "OfferCatalog",
        "@id": "OfferCatalog_" + String(n),
        "name": "OfferCatalog_" + String(n),
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        itemListElement: []
    }

    for(let i=0; i < no; i++){

        let item = {
            "@type": "ListItem",
            "@id": "ListItem_" + String(n) + "_" + String(i),
            item: offer(i)
        }
        record.itemListElement.push(item)
    }

    return record
}

function howTo(n) {
    return {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "HowTo name - Lorem ipsum dolor sit amet.",
        headline:
            "Headline - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        text: "Text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
        estimatedCost: {
            "@type": "MonetaryAmount",
            currency: "USD",
            value: "20",
        },
        totalTime: "PT30M",
        tool: [
            {
                "@type": "HowToTool",
                name: "Tool 1",
            },
            {
                "@type": "HowToTool",
                name: "Tool 2",
                image: {
                    "@context": "https://schema.org/",
                    "@type": "ImageObject",
                    "@id": "image1",
                    name: "image_1",
                    contentUrl: "https://placehold.co/600x400",
                },
            },
        ],
        supply: {
            "@type": "HowToSupply",
            name: "Supply1",
            image: {
                "@context": "https://schema.org/",
                "@type": "ImageObject",
                "@id": "image1",
                name: "image_1",
                contentUrl: "https://placehold.co/600x400",
            },
        },
        step: [
            {
                "@type": "HowToStep",
                position: "1",
                headline:
                    "Headline - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                text: "Text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
                image: {
                    "@context": "https://schema.org/",
                    "@type": "ImageObject",
                    "@id": "image1",
                    name: "image_1",
                    contentUrl: "https://placehold.co/600x400",
                },
                itemListElement: [
                    {
                        "@type": "HowToDirection",
                        position: "1",
                        text: "Position your wheel wedges in front of the front tires if a rear tire is flat, or behind the rear tires if a front tire is flat",
                    },
                    {
                        "@type": "HowToTip",
                        position: "2",
                        text: "You don't want the car to move while you're working on it.",
                    },
                ],
            },
            {
                "@type": "HowToStep",
                position: "2",
                headline:
                    "Headline - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                text: "Text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
                image: {
                    "@context": "https://schema.org/",
                    "@type": "ImageObject",
                    "@id": "image1",
                    name: "image_1",
                    contentUrl: "https://placehold.co/600x400",
                },
                itemListElement: [
                    {
                        "@type": "HowToDirection",
                        position: "1",
                        text: "Position your wheel wedges in front of the front tires if a rear tire is flat, or behind the rear tires if a front tire is flat",
                    },
                    {
                        "@type": "HowToTip",
                        position: "2",
                        text: "You don't want the car to move while you're working on it.",
                    },
                ],
            },
            {
                "@type": "HowToStep",
                position: "3",
                headline:
                    "Headline - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                text: "Text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
                image: {
                    "@context": "https://schema.org/",
                    "@type": "ImageObject",
                    "@id": "image1",
                    name: "image_1",
                    contentUrl: "https://placehold.co/600x400",
                },
                itemListElement: [
                    {
                        "@type": "HowToDirection",
                        position: "1",
                        text: "Position your wheel wedges in front of the front tires if a rear tire is flat, or behind the rear tires if a front tire is flat",
                    },
                    {
                        "@type": "HowToTip",
                        position: "2",
                        text: "You don't want the car to move while you're working on it.",
                    },
                ],
            },
            {
                "@type": "HowToStep",
                position: "4",
                headline:
                    "Headline - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                text: "Text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
                image: {
                    "@context": "https://schema.org/",
                    "@type": "ImageObject",
                    "@id": "image1",
                    name: "image_1",
                    contentUrl: "https://placehold.co/600x400",
                },
                itemListElement: [
                    {
                        "@type": "HowToDirection",
                        position: "1",
                        text: "Position your wheel wedges in front of the front tires if a rear tire is flat, or behind the rear tires if a front tire is flat",
                    },
                    {
                        "@type": "HowToTip",
                        position: "2",
                        text: "You don't want the car to move while you're working on it.",
                    },
                ],
            },
            {
                "@type": "HowToStep",
                position: "5",
                headline:
                    "Headline - Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                text: "Text - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.",
                image: {
                    "@context": "https://schema.org/",
                    "@type": "ImageObject",
                    "@id": "image1",
                    name: "image_1",
                    contentUrl: "https://placehold.co/600x400",
                },
                itemListElement: [
                    {
                        "@type": "HowToDirection",
                        position: "1",
                        text: "Position your wheel wedges in front of the front tires if a rear tire is flat, or behind the rear tires if a front tire is flat",
                    },
                    {
                        "@type": "HowToTip",
                        position: "2",
                        text: "You don't want the car to move while you're working on it.",
                    },
                ],
            },
        ],
    };
}

function getThing(n) {
    let n0 = String(n);
    let record = {
        "@type": "Thing",
        "@id": `thing${n0}`,
        name: `thing${n0}`,
        other1: {
            "@type": "Thing",
            "@id": `thing${n0}-0`,
            name: `thing${n0}-0`,
        },
        other2: [
            {
                "@type": "Thing",
                "@id": `thing${n0}-1`,
                name: `thing${n0}-1`,
            },
            {
                "@type": "Thing",
                "@id": `thing${n0}-2`,
                name: `thing${n0}-2`,
            },
        ],
    };
    return record;
}

function getItemList(noItems, n = 0) {
    /**
     * Returns a list of n items
     * @param {Number} n
     * @returns {Array} The list
     *
     */

    let n0 = String(n);
    let record = {
        "@type": "ItemList",
        "@id": `ItemList${n}`,
        name: `ItemList${n}`,
        itemListElement: [],
    };

    for (let i = 0; i < noItems; i++) {
        let listItem = getListItem(i);

        if (n > 0) {
            listItem.previousItem = {
                "@type": "ListItem",
                "@id": `ListItem${String(n - 1)}`,
            };
        }

        if (i < noItems - 1) {
            listItem.nextItem = {
                "@type": "ListItem",
                "@id": `ListItem${String(n + 1)}`,
            };
        }
        record.itemListElement.push(listItem);
    }

    return record;
}

function getListItem(n = 0) {
    /**
     * Returns an item
     * @param {Number} n
     * @returns {Array} The list
     *
     */

    let n0 = String(n);

    let record = {
        "@type": "ListItem",
        "@id": `ListItem${n0}`,
        name: `ListItem${n0}`,
        position: n,
        item: getThing(n),
    };

    return record;
}

function getPerson(n = 0) {
    let n0 = String(n);

    let record = {
        "@type": "Person",
        "@id": `person${n0}`,
        givenName: `givenName${n0}`,
        familyName: `familyName${n0}`,
        email: `givenName${n0}_familyName${n0}@organization${n0}.com`,
        telephone: `1-514-111-222${n0}`,
        hasOccupation: {
            "@type": "Occupation",
            "@id": `occupation${n0}`,
            name: `occupation${n0}`,
        },
        worksfor: getOrganization(n),
    };

    return record;
}

function getOrganization(n) {
    let n0 = String(n);
    let record = {
        "@type": "Organization",
        "@id": `testOrganization${n0}`,
        name: `testOrganization${n0}`,
        url: `https:\/\/www.testOrganization${n0}.com`,
    };

    return record;
}

function getAction(n) {
    let n0 = String(n);

    let record = {
        "@type": "action",
        "@id": `action${n0}`,
        name: `action${n0}`,
        actionStatus: "ActiveActionStatus",
        startTime: "",
        endTime: "",
        object: "",
        result: "",
        instrument: "",
    };

    return record;
}

function getSystemRecord() {
    let record = {
        "@type": "Thing",
        "@id": "thing1",
        _id: "567e0725-a4b7-4a15-a5e5-39a2751bc09f",
        _version: "2.0",
        _dbCollection: null,
        _dbId: null,
        _record_type: "Thing",
        _record_id: "thing1",
        _headings: [],
        _refs: [],
        _propertyValues: [
            {
                "@type": "ReplaceAction",
                "@id": "67120ec1-89ce-4644-ba45-e5f534cf2570",
                actionStatus: "CompletedActionStatus",
                valid: true,
                object: {
                    "@type": "PropertyValue",
                    propertyID: "@type",
                    value: "Thing",
                },
                metadata: {
                    createdDate: new Date(),
                    position: 5,
                },
            },
            {
                "@type": "ReplaceAction",
                "@id": "8a363b93-46ac-4fe1-a4ed-c74b9fa890cc",
                actionStatus: "CompletedActionStatus",
                valid: true,
                object: {
                    "@type": "PropertyValue",
                    propertyID: "@id",
                    value: "thing1",
                },
                metadata: {
                    createdDate: new Date(),
                    position: 7,
                },
            },
            {
                "@type": "ReplaceAction",
                "@id": "71c07e54-506d-49d2-a273-6d6a9e8ed1bd",
                actionStatus: "CompletedActionStatus",
                valid: true,
                object: {
                    "@type": "PropertyValue",
                    propertyID: "name",
                    value: "thing1",
                },
                metadata: {
                    createdDate: new Date(),
                    position: 9,
                },
            },
        ],
        _createdDate: new Date(),
        name: "thing1",
    };

    return record;
}

function getPropertyValue(propertyID, value) {
    /**
     * Returns a property value
     */

    let record = {
        "@type": "ReplaceAction",
        "@id": `propertyValue${propertyID}`,
        actionStatus: "CompletedActionStatus",
        valid: true,
        object: {
            "@type": "PropertyValue",
            "@id": `pv_${propertyID}_1`,
            propertyID: propertyID,
            value: `${value}`,
        },
        metadata: {
            createdDate: new Date(),
            position: 9,
        },
    };

    return record;
}

function getArticle(n) {
    return {
        "@type": "CreativeWork",
        "@id": "Article1",
        headline: "Headline 1",
        author: {
            "@type": "Person",
            "@id": "person_1",
            givenName: "givenName_1",
            familyName: "familyName_1",
            email: "test@test.com",
            telephone: "1-514-111-2222",
            jobTitle: "Job_title_1",
            hasOccupation: {
                "@type": "Occupation",
                "@id": "occupation_1",
                name: "occupation_1",
            },
            worksfor: {
                "@type": "Organization",
                "@id": "organization_1",
                name: "test_org_1",
                url: "https://www.test.com",
            },
        },
        image: {
            "@context": "https://schema.org/",
            "@type": "ImageObject",
            "@id": "image1",
            name: "image_1",
            contentUrl: "https://placehold.co/600x400",
        },
        text: "Text 1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        hasPart: [
            {
                "@type": "CreativeWork",
                "@id": "SubArticle1",
                headline: "Sub headline 1",
                text: "text 1-1 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
            {
                "@type": "CreativeWork",
                "@id": "SubArticle2",
                headline: "Sub headline 2",
                text: "text 1-2 - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            },
        ],
    };
}

function product(n) {
    return {
        "@context": "https://schema.org",
        "@type": "Product",
        aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "3.5",
            reviewCount: "11",
        },
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        name: "Product name 1",
        image: {
            "@context": "https://schema.org/",
            "@type": "ImageObject",
            "@id": "image1",
            name: "image_1",
            contentUrl: "https://placehold.co/600x400",
        },
        offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
            price: "55.00",
            priceCurrency: "USD",
        },
        positiveNotes: [
            {
                "@type": "ListItem",
                "@id": "positiveNote0",
                position: 0,
                item: {
                    "@type": "CreativeWork",
                    "@id": "positiveNote0Item",
                    headline: "Positive note 1",
                    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: {
                        "@context": "https://schema.org/",
                        "@type": "ImageObject",
                        "@id": "image0",
                        name: "image_0",
                        contentUrl: "https://placehold.co/600x400",
                    },
                },
            },
            {
                "@type": "ListItem",
                "@id": "positiveNote1",
                position: 1,
                item: {
                    "@type": "CreativeWork",
                    "@id": "positiveNote1Item",
                    headline: "Positive note 1",
                    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: {
                        "@context": "https://schema.org/",
                        "@type": "ImageObject",
                        "@id": "image1",
                        name: "image_1",
                        contentUrl: "https://placehold.co/600x400",
                    },
                },
            },
            {
                "@type": "ListItem",
                "@id": "positiveNote2",
                position: 2,
                item: {
                    "@type": "CreativeWork",
                    "@id": "positiveNote2Item",
                    headline: "Positive note 3",
                    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: {
                        "@context": "https://schema.org/",
                        "@type": "ImageObject",
                        "@id": "image2",
                        name: "image_2",
                        contentUrl: "https://placehold.co/600x400",
                    },
                },
            },
            {
                "@type": "ListItem",
                "@id": "positiveNote3",
                position: 3,
                item: {
                    "@type": "CreativeWork",
                    "@id": "positiveNote3Item",
                    headline: "Positive note 3",
                    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    image: {
                        "@context": "https://schema.org/",
                        "@type": "ImageObject",
                        "@id": "image3",
                        name: "image_3",
                        contentUrl: "https://placehold.co/600x400",
                    },
                },
            },
        ],
    };
}



function potentialAction(n=0){


    return {
        "@type": "Action",
        "@id": "action_" + String(n),
        "name": "action_" + String(n),
        "description": "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "actionStatus": "PotentialActionStatus",
        "name_input": {
            "@type": "PropertyValueSpecification",
            "valueName": "name"
        },
        "email_input": {
            "@type": "PropertyValueSpecification",
            "valueName": "email"
        },
        "approval_input": {
            "@type": "PropertyValueSpecification",
            "valueName": "approval",
            "description": "By clicking on this, you agree to give your first born child.",
            "minValue": 0,
            "maxValue": 1,
            "required":"true"
        }
    }

    
}