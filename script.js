
import { krakenHelpers as k } from './src/index.js'



async function test(){
    
    
    let record = {
            "@context": "https://schema.org/",
            "@type": "Thing",
            "@id": "thing1",
            "name": "thing1"
        }
    
    
    let url = 'https://data.krknapi.com/api/test34'
    
    let r = await k.api.post(url, null, record)

    let rr = await k.api.get(url, null, {"@type": "Thing", "@id": "thing1"})

    let rr2 = await k.api.get(url, null, {"@type": "Thing"})

    
}

test()
