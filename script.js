
//import { krakenHelpers as k } from './src/index.js'

import { krakenHelpers  } from './dist/main.js'



async function test(){
    

    let record = {
             "@type": "Person",
             "@id": "person_1",
             "givenName": "givenName_1",
             "familyName": "familyName_1",
             "email": "test@test.com",
             "telephone": "1-514-111-2222",
             "hasOccupation": {
                 "@type": "Occupation",
                 "@id": "occupation_1",
                 "name": "occupation_1"
                 },
             "worksfor": {
                 "@type": "Organization",
                 "@id": "organization_1",
                 "name": "test_org_1",
                 "url": "https://www.test.com"
                 }
         }

    console.log(krakenHelpers)
    let things = krakenHelpers.thing.extractThings(record)
    console.log(things.length)


    
    






}

test()
