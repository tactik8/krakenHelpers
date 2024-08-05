

export const krakenUrlHelpers = {

    getDomain: getDomain,
    domain: getDomain,
    getUrl: getUrl,
    toUrl: getUrl
    
}

function isUrl(value){

    if(!value || value == null){ return false }

    if(value instanceof URL) { return true }


    
}

function getUrl(baseUrl, path, params) {
    
    try {
        if (!baseUrl || typeof baseUrl !== 'string') {
            throw new Error('Invalid base URL');
        }
        
        if (!path ) {
            path = '';
        }
        if (typeof path !== 'string') {
            throw new Error('Invalid path');
        }
        if (params && typeof params !== 'object') {
            throw new Error('Invalid params');
        }

        let url = new URL(path, baseUrl);

        if (params) {
            Object.keys(params).forEach(key => {
                if (params[key] !== undefined && params[key] !== null) {
                    url.searchParams.append(key, params[key]);
                }
            });
        }

        return url.toString();
        
    } catch (error) {
        //console.error('Error building URL:', error.message);
        return null;
    }
}






function getDomain(value){

    try {

        if(!value || value == null){ return undefined }

        if(!(value instanceof URL)) { 

            if(typeof value != 'string'){
                return undefined
            }

            value = new URL(value);
        }


        let domain = value.hostname

        console.log('d', domain)
        domain = domain.replace('www.', '')

        if (domain == 'wrong.protocol'){ return undefined }
        
        // Use URL constructor to parse the URL
        return domain;

        
    } catch (error) {
        // If an error occurs, return an appropriate error message
        return undefined;
    }
   
    
    
}