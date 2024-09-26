


export const krakenExpressHelpers = {

    req: {
        record_type: getRecordTypeFromReq,
        record_id: getRecordIdFromReq,
        container: getCollectionFromReq
    }

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
    return collection

}