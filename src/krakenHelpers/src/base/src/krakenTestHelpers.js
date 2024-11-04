

export const krakenTestHelpers = {

    getThing: getThing,
    getListItem: getListItem,
    getItemList: getItemList,
    getList: getItemList,
    getPerson: getPerson,
    getOrganization: getOrganization,
    getAction: getAction,
    getSystemRecord: getSystemRecord,
    getPropertyValue: getPropertyValue
}

function getThing(n) {
    let n0 = String(n)
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


function getItemList(noItems, n=0){
    /**
     * Returns a list of n items
     * @param {Number} n
     * @returns {Array} The list
     * 
     */

    let n0 = String(n)
    let record = {
            "@type": "ItemList",
            "@id": `ItemList${n0}`,
            "name": `ItemList${n0}`,
            "itemListElement": []
    }

    for(let i=0; i<noItems; i++){


        let listItem = getListItem(i)

        if(n > 0){
            listItem.previousItem = {
                "@type": "ListItem",
                "@id": `ListItem${String(n-1)}`
            }
        }

        if(i < noItems -1){
            listItem.nextItem =  {
                "@type": "ListItem",
                "@id": `ListItem${String(n+1)}`
            }
        }
        record.itemListElement.push(listItem)
        
    }

    return record
     
}

function getListItem(n=0){
    /**
     * Returns an item
     * @param {Number} n
     * @returns {Array} The list
     * 
     */

    let n0 = String(n)
    
    let record = {
        "@type": "ListItem",
        "@id": `ListItem${n0}`,
        "name": `ListItem${n0}`,
        "position": n,
        "item": getThing(n)
    }

    return record
    
}


function getPerson(n=0){

    let n0 = String(n)
    
    let record = {
             "@type": "Person",
             "@id": `person${n0}`,
             "givenName": `givenName${n0}`,
             "familyName":  `familyName${n0}`,
             "email": `givenName${n0}_familyName${n0}@organization${n0}.com`,
             "telephone": `1-514-111-222${n0}`,
             "hasOccupation": {
                 "@type": "Occupation",
                 "@id": `occupation${n0}`,
                 "name": `occupation${n0}`,
                 },
             "worksfor": getOrganization(n)
         }

    return record
    
}

function getOrganization(n){

    let n0 = String(n)
    let record = {
            "@type": "Organization",
            "@id": `testOrganization${n0}`,
            "name": `testOrganization${n0}`,
            "url": `https:\/\/www.testOrganization${n0}.com`
        }

    return record
}


function getAction(n){

    let n0= String(n)

    let record = {
            "@type": "action",
            "@id": `action${n0}`,
            "name": `action${n0}`,
            "actionStatus": "ActiveActionStatus",
            "startTime": "",
            "endTime": "",
            "object": "",
            "result": "",
            "instrument": ""
        }


    return record
}


function getSystemRecord(){

    let record = {
            "@type": "Thing",
            "@id": "thing1",
            "_id": "567e0725-a4b7-4a15-a5e5-39a2751bc09f",
            "_version": "2.0",
            "_dbCollection": null,
            "_dbId": null,
            "_record_type": "Thing",
            "_record_id": "thing1",
            "_headings": [],
            "_refs": [],
            "_propertyValues": [
                {
                    "@type": "ReplaceAction",
                    "@id": "67120ec1-89ce-4644-ba45-e5f534cf2570",
                    "actionStatus": "CompletedActionStatus",
                    "valid": true,
                    "object": {
                        "@type": "PropertyValue",
                        "propertyID": "@type",
                        "value": "Thing"
                    },
                    "metadata": {
                        "createdDate": new Date(),
                        "position": 5
                    }
                },
                {
                    "@type": "ReplaceAction",
                    "@id": "8a363b93-46ac-4fe1-a4ed-c74b9fa890cc",
                    "actionStatus": "CompletedActionStatus",
                    "valid": true,
                    "object": {
                        "@type": "PropertyValue",
                        "propertyID": "@id",
                        "value": "thing1"
                    },
                    "metadata": {
                        "createdDate": new Date(),
                        "position": 7
                    }
                },
                {
                    "@type": "ReplaceAction",
                    "@id": "71c07e54-506d-49d2-a273-6d6a9e8ed1bd",
                    "actionStatus": "CompletedActionStatus",
                    "valid": true,
                    "object": {
                        "@type": "PropertyValue",
                        "propertyID": "name",
                        "value": "thing1"
                    },
                    "metadata": {
                        "createdDate": new Date(),
                        "position": 9
                    }
                }
            ],
                "_createdDate": new Date(),
                "name": "thing1"
            }

    return record
}


function getPropertyValue(propertyID, value){
    /**
     * Returns a property value
     */

            
    let record = {
        "@type": "ReplaceAction",
        "@id": `propertyValue${propertyID}`,
        "actionStatus": "CompletedActionStatus",
        "valid": true,
        "object": {
            "@type": "PropertyValue",
            "@id": `pv_${propertyID}_1`,
            'propertyID': propertyID,
            'value': `${value}`
        },
        "metadata": {
            "createdDate": new Date(),
            "position": 9
        }
    }

    return record
    
}