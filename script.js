
import { krakenHelpers as k } from './src/index.js'



async function test(){
    
    
    let record = {
            "@context": "https://schema.org/",
            "@type": "Thing",
            "@id": "thing1",
            "name": "thing1"
        }
    
    
    let url = 'https://data.krknapi.com/'
    let c = 'api/test34'
    
    let r = await k.api.post(url, c, record)

    let rr = await k.api.get(url, c, {"@type": "Thing", "@id": "thing1"})

    let rr2 = await k.api.get(url, c, {"@type": "Thing"})

    console.log(rr)
    
}

test()
