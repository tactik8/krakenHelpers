
import { krakenHelpers as k } from './src/index.js'



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
             },
        "age": 5,
    "url": "https://www.test.com"
     }

let records = [record,record,record,record,record,record,record]

let analysis = k.analysis.analyze(records)
console.log(JSON.stringify(analysis, null, 4))

let f = k.textTable(analysis)
console.log(f)
