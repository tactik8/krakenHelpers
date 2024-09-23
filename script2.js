
import { krakenHelpers as k } from './src/index.js'

//import { krakenHelpers as k } from './dist/main.js'



async function test(){
    


    let r1 = {
            "@context": "https://schema.org/",
            "@type": "Thing",
            "@id": "thing1",
            "name": "thing1"
        }


    let r2 = {
            "@context": "https://schema.org/",
            "@type": "Thing",
            "@id": "thing1",
            "name": "thing1"
        }


    console.log(k.isEqual('a', 'c'))





}

test()
