
import { krakenBaseHelpers as h} from '../base/krakenBaseHelpers.js'







export const krakenApiHelpers = {

    get: getApi,
    post: postApi,
    delete: deleteApi,
    postFile: postApiFile,
    getFile: getApiFile
    
}


async function getApi(baseUrl, urlPath,  params){

    const requestOptionsGet = {
        method: 'GET',
        headers: {
            "Content-Type": "application/json"
        }
    };


    let url
    if(h.isNotNull(urlPath)){
        url = new URL(String(urlPath), String(baseUrl));
    } else {
        url = new URL( String(baseUrl));
    }

    url.search = new URLSearchParams(params);

    url = String(url)
    const response = await fetch(url, requestOptionsGet)

    if(response.status != 200 && response.status != 201 && response.status && 202){  
        throw new Error(String(response.status) + ' ' +response.statusText);
    }
    
    let results = await response.json()

    return results

}


async function postApi(baseUrl, urlPath, records){

    //Post 

    let requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(records)
    };


    let url
    if(h.isNotNull(urlPath)){
        url = new URL(String(urlPath), String(baseUrl));
    } else {
        url = new URL( String(baseUrl));
    }


    url = String(url)
    const response = await fetch(url, requestOptions)

    if(response.status != 200 && response.status != 201 && response.status != 202){  
        throw new Error(String(response.status) + ' ' + response.statusText);
    }

    return response.json()
    
}


async function getApiFile(filename, baseUrl, urlPath){

    if(h.isNull(filename)){ 
        let parts = filename = baseUrl.split('/')
            filename = parts[parts.length-1]
    }
    
    try {

        let url
        if(h.isNotNull(urlPath)){
            url = new URL(String(urlPath), String(baseUrl));
        } else {
            url = new URL( String(baseUrl));
        }
        
        // Fetch the file from the provided URL
        const response = await fetch(url);

        // Check if the response is ok (status is in the range 200-299)
        if (!response.ok) {
            throw new Error(`Failed to fetch file: ${response.statusText}`);
        }

        // Convert the response data to a Blob object
        const blob = await response.blob();

        // Create a File object from the Blob
        const file = new File([blob], filename, {
            type: blob.type,
        });

        return file;
        
    } catch (error) {
        console.error("Error fetching the file:", error);
        return null;
    }

    
}


async function postApiFile(baseUrl, urlPath,  file){

    //Post 

    let url
    if(h.isNotNull(urlPath)){
        url = new URL(String(urlPath), String(baseUrl));
    } else {
        url = new URL( String(baseUrl));
    }

    const formData = new FormData();
    formData.append('file', file); // 'file' is the key expected by the API

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData,
            headers: {
                // Include other headers if needed, such as authentication tokens
                // 'Authorization': 'Bearer your-token'
            }
        });

        if (response.ok) {
            const result = await response.json();
            return result;
        } else {
            
        }
    } catch (error) {
        
    }

    return response

}

async function deleteApi(baseUrl, urlPath,  params){

    const requestOptionsGet = {
        method: 'DELETE',
        headers: {
            "Content-Type": "application/json"
        }
    };

    let url
    if(h.isNotNull(urlPath)){
        url = new URL(String(urlPath), String(baseUrl));
    } else {
        url = new URL( String(baseUrl));
    }

    url.search = new URLSearchParams(params);

    const response = await fetch(url, requestOptionsGet)

    if(response.status != 200 && response.status != 201 && response.status != 202){  
        throw new Error(String(response.status) + ' ' +response.statusText);
    }
    

    return true
    
}

