
import { krakenHelpersLight as h} from '../krakenHelpersLight.js'


export const krakenExpressHelpers = {

    req: {
        record_type: getRecordTypeFromReq,
        record_id: getRecordIdFromReq,
        collection: getCollectionFromReq,
        records: getRecordsFromReq,
        record: getRecordsFromReq,
        params: getParamsFromReq,
        file: getFileFromReq,
        method: getMethodFromReq
    },
    record: {
        webpage: getWebpageRecordFromReq,
        device: getDeviceRecordFromReq,
        action: getActionRecordFromReq
    }

}


function getRecordsFromReq(req){
    let records = req.body || null
    return records
}


function getRecordTypeFromReq(req){
    let record_type
    record_type = req.params?.record_type || record_type
    record_type = req.params?.['@type'] || record_type
    record_type = req.query?.record_type || record_type
    record_type = req.query?.['@type'] || record_type

    return record_type

}

function getRecordIdFromReq(req){

    let record_id
    record_id = req.params?.record_id || record_id
    record_id = req.params?.['@id'] || record_id
    record_id = req.query?.record_id || record_id
    record_id = req.query?.['@id'] || record_id

    return record_id
}

function getCollectionFromReq(req){
    let collection
    collection = req.params?.collection || collection
    collection = req.query?.collection || collection
    while(collection.startsWith('/')){ collection = collection.slice(1, collection.length -1)}
    while(collection.endsWith('/')){ collection = collection.slice(0, collection.length -2)}

    return collection

}


function getParamsFromReq(req){

    // Returns the params as an array
    let params = {}
    for(let k in req.params){
        let value = req.params?.[k]
        if(h.isNotNull(value)){
            params[k] = value
        }
    }

    return params

}

function getFileFromReq(req){

    let files = []
    for(let k of Object.keys(req.files)){

        let subFiles = req.files[k]
        if(!Array.isArray(subFiles)){ subFiles = [subFiles]}
        for(let s of subFiles){
            files.push(s)
        }

    }
    return files


}


function getMethodFromReq(req){
    return req.method
}

function getDomainFromReq(req){
    return req.method
}

function getUrlFromReq(req){
    let url = req.protocol + '://' + req.hostname + req.originalurl
    return url
}



function getActionRecordFromReq(req){

    let action = {
        "@type": "ViewAction",
        "@id": String(crypto.randomUUID()),
        object: getWebpageRecordFromReq(req),
        instrument: getDeviceRecordFromReq(req),
        agent: getAgentRecordFromReq(),
        timeStart: new Date(),
        actionStatus: 'CompletedActionStatus'
    }

    return action

    
}

function getWebpageRecordFromReq(req){

    let record = {
        "@type": "WebPage",
        "url": getUrlFromReq(req)
    }
    return record
}

function getDeviceRecordFromReq(req){

    let record = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Computer Device",
      "identifier": {
        "@type": "PropertyValue",
        "name": "IP Address",
        "value": "192.168.0.1"
      }
        
    }
    return record
    
}

function getAgentRecordFromReq(req){
    let record = {}
    return record
}