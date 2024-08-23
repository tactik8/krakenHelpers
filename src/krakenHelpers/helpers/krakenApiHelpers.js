

import { krakenNumberHelpers } from './krakenNumberHelpers.js'
import { krakenObjectHelpers } from './krakenObjectHelpers.js'



export const krakenApiHelpers = {

    get: getApi,
    post: postApi,
    delete: deleteApi,
    
}


async function getApi(baseUrl, urlPath,  params){

    const requestOptionsGet = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    };

    let url = new URL(urlPath, String(baseUrl));

    url.search = new URLSearchParams(params);

    const response = await fetch(url, requestOptionsGet)

    if(response.status != 200 && response.status != 201 && response.status && 202){  
        throw new Error(String(response.status) + ' ' +response.statusText);
    }
    
    let results = await response.json()

    return results

}


async function postApi(baseUrl, urlPath,  records){

    //Post 

    let requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(records)
    };

    let url = new URL(urlPath, String(baseUrl));

    const response = await fetch(url, requestOptions)

    if(response.status != 200 && response.status != 201 && response.status != 202){  
        throw new Error(String(response.status) + ' ' + response.statusText);
    }

    return true
    
}

async function deleteApi(baseUrl, urlPath,  params){

    const requestOptionsGet = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        }
    };

    let url = new URL(urlPath, String(baseUrl));

    url.search = new URLSearchParams(params);

    const response = await fetch(url, requestOptionsGet)

    if(response.status != 200 && response.status != 201 && response.status != 202){  
        throw new Error(String(response.status) + ' ' +response.statusText);
    }
    

    return true
    
}

