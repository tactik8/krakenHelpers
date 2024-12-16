import { krakenBaseHelpers as h} from '../base/krakenBaseHelpers.js'
import { krakenHttpHelpers as ht} from '../http/krakenHttpHelpers.js'


let CDNURL = 'https://cdn.krknapi.com/'

export const krakenDbCdnHelpers = {

    get: getRecord,
    post: postrecord
    
}



async function getRecord(appID, record_type, record_id){

    let url = `https://cdn.krknapi.com/things/${appID}`

    let record = await ht.api.get(url, null, {"@type": record_type, "@id": record_id})

    return record

}


async function setRecord(appID, record){

    let url = `https://cdn.krknapi.com/things/${appID}`

    let result = await ht.api.post(url, null, record)

    return result

}
