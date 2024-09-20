
import { krakenHelpers as k } from './src/index.js'

//import { krakenHelpers as k } from './dist/main.js'



async function test(){
    

    let record = {
             "@type": "Person",
             "@id": "person_1",
             "givenName": "givenName_1",
             "familyName": "familyName_1",
             "email": "test@test.com",
             "telephone": "1-514-111-2222",
             "hasOccupation": [
                 {
                 "@type": "Occupation",
                 "@id": "occupation_1",
                 "name": "occupation_1",
                     "amount": { mnt: 3, curr: 'bob'}
                 },
                 {
                      "@type": "Occupation",
                      "@id": "occupation_2",
                      "name": "occupation_2",
                     "amount": {
                         mnt: 4,
                         curr: 'bob'
                        }
                      },
                ],
             "worksFor": {
                 "@type": "Organization",
                 "@id": "organization_1",
                 "name": "test_org_1",
                 "url": "https://www.test.com"
                 }
         }

    

    
    let template = 'name: {{givenName}} {{familyName}} cie: {{hasOccupation | sum: amount.mnt}} {{hasOccupation | first: amount.curr}} {{#hasOccupation}} n:{{hasOccupation.name}} {{/hasOccupation}}'

    let content = k.template.replacePlaceholders(template, record)

    console.log(content)




}

test()
