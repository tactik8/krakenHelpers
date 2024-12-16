
import { krakenHelpers as h } from "../../src/krakenHelpers/krakenHelpers.js";

import { krakenClasses as kc } from "../../src/krakenClasses/krakenClasses.js";

import { krakenTools as tools } from "../../src/krakenTools/krakenTools.js";

import { krakenElements as el } from "../../src/krakenElements/krakenElements.js"




function test1() {



    // -----------------------------------------------------
    //  Test simple  
    // -----------------------------------------------------


    console.log(' ----------------Test 1 Start --------------------')
    
    let action = {
            "@type": "UpdateAction",
            "@id": "action_1",
            "name": "action_1",
            "actionStatus": "CompletedActionStatus",
            "startTime": "",
            "endTime": "",
            "targetCollection": {
                    "@context": "https://schema.org/",
                    "@type": "Thing",
                    "@id": "thing1",
                    "name": "thing1"
                },
            "object": {
                "@type": "PropertyValue",
                "propertyID": "name",
                "value": "newName",
                "item": [
                    {
                        "@type": "Thing",
                        "price": 100,
                        "qty": 3
                    },
                    {
                        "@type": "Thing",
                        "price": 100,
                        "qty": 3
                    }
                ]
            },
            "result": {

                "@type": "Thing",
                "total": "{{object.item | sumProduct: price, qty}}"
                
            },
        }


    let thing =  h.thing.toThing(action)
    
    let action1 = h.thing.execute(thing)

    let record1 = h.thing.record.get(action1)

    console.log(JSON.stringify(record1, null, 4))
    console.log(' ----------------Test 1 end --------------------')


}

//test1()



function test2() {



    // -----------------------------------------------------
    //  Test List  
    // -----------------------------------------------------
    console.log(' ----------------Test 2 Start --------------------')


    let targetCollection = h.base.test.getItemList(4)
    
    

    let object = {
            "@type": "Thing",
            "@id": "thing4",
            "name": "thing4"
        }


   

    let action = {
            "@type": "AppendAction",
            "@id": "action_1",
            "object": object,
            "targetCollection": targetCollection,
        }

    console.log(action)

    
    action = h.thing.execute(action)

    let record1 = h.thing.record.get(action)

    console.log(JSON.stringify(record1, null, 4))

    console.log(' ----------------Test 2 Start --------------------')

}

//test2()



function test3() {



    // -----------------------------------------------------
    //  Test simple  
    // -----------------------------------------------------


    console.log(' ----------------Test 3 Start --------------------')

    let action = {
            "@type": "SomethingAction",
            "@id": "action_1",
            "name": "action_1",
            "actionStatus": "PotentialActionStatus",
            "object": {
                    "@context": "https://schema.org/",
                    "@type": "Thing",
                    "@id": "thing1",
                    "name": "thing1",
                    "name-input": "thing1",
                    "client": {
                            "@context": "https://schema.org/",
                            "@type": "Thing",
                            "@id": "thing_client",
                            "name": "thing_client"
                        },
                    "name-output": "thing2_{{object.name}}",
                    "item": [
                            {
                                "@type": "Thing",
                                "price": 100,
                                "qty": 3
                            },
                            {
                                "@type": "Thing",
                                "price": 120,
                                "qty": 5
                            }
                    ],
            },
            "result": {

                    "@type": "Thing",
                    "client-output": "{{object.client }}",
                "item-output": "{{object.item }}",
                    "total-output": "{{object.item | sumProduct: price, qty}}"

                }
            
        }


    let newAction = h.thing.execute(action)

    console.log(JSON.stringify(newAction, null, 4))

    
    console.log(' ----------------Test 3 end --------------------')


}

//test3()




function test4() {



    // -----------------------------------------------------
    //  Test simple  
    // -----------------------------------------------------


    console.log(' ----------------Test 5 Start --------------------')

    let action = {
            "@type": "InsertAction",
            "@id": "action_1",
            "name": "action_1",
            "actionStatus": "PotentialActionStatus",
            "toLocation": 1,
            "object":{
                "@type": "ListItem",
                "@id": "ListItem10",
                "item": {
                        "@context": "https://schema.org/",
                        "@type": "Thing",
                        "@id": "thing10",
                        "name": "thing10"
                    }
            },
            "targetCollection": {
                    "@type": "ItemList",
                    "@id": "ItemList0",
                    "name": "ItemList0",
                    "itemListElement": [
                        {
                            "@type": "ListItem",
                            "@id": "ListItem0",
                            "name": "ListItem0",
                            "position": 0,
                            "previousItem": null,
                            "nextItem": {
                                "@type": "ListItem",
                                "@id": "ListItem1"
                            },
                            "item": {
                                "@type": "Thing",
                                "@id": "Thing0",
                                "name": "Thing0",
                                "url": "https://www.test.com/thing0"
                            }
                        },
                        {
                            "@type": "ListItem",
                            "@id": "ListItem1",
                            "name": "ListItem1",
                            "position": 1,
                            "previousItem":  {
                                "@type": "ListItem",
                                "@id": "ListItem0"
                            },
                            "nextItem": {
                                "@type": "ListItem",
                                "@id": "ListItem2"
                            },
                            "item": {
                                "@type": "Thing",
                                "@id": "Thing1",
                                "name": "Thing1",
                                "url": "https://www.test.com/thing1"
                            }
                        },
                        {
                            "@type": "ListItem",
                            "@id": "ListItem2",
                            "name": "ListItem2",
                            "position": 2,
                            "previousItem":  {
                                "@type": "ListItem",
                                "@id": "ListItem1"
                            },
                            "nextItem": {
                                "@type": "ListItem",
                                "@id": "ListItem3"
                            },
                            "item": {
                                "@type": "Thing",
                                "@id": "Thing2",
                                "name": "Thing2",
                                "url": "https://www.test.com/thing2"
                            }
                        },
                        {
                            "@type": "ListItem",
                            "@id": "ListItem3",
                            "name": "ListItem3",
                            "position": 3,
                            "previousItem":  {
                                "@type": "ListItem",
                                "@id": "ListItem2"
                            },
                            "nextItem": null,
                            "item": {
                                "@type": "Thing",
                                "@id": "Thing3",
                                "name": "Thing3",
                                "url": "https://www.test.com/thing3"
                            }
                        }
                    ]
                }
           

        }


    let newAction = h.thing.execute(action)

    console.log(JSON.stringify(newAction, null, 4))


    console.log(' ----------------Test 5 end --------------------')


}

test4()







