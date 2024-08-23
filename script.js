
import { krakenHelpers as k } from './src/index.js'



async function test(){
    

    let url = 'https://2d432316-7c15-4f0f-9214-d4f6fba60627-00-1b1hmvrd8c12s.spock.replit.dev/api'

   
    


    console.log('pp1')

    let results = await k.api.get(url, '/api/collection')
    
    console.log(results)







}

test()
