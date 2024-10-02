
import { krakenAnalysisHelpers } from './src/krakenHelpers/helpers/krakenAnalysisHelpers.js'
import { krakenHelpers as h } from './src/krakenHelpers/krakenHelpers.js'


async function receiveEvent(action, event){



   

    
    
}

function test(){

    let record = {
            "@context": "https://schema.org/",
            "@type": "Thing",
            "@id": "thing1",
            "name": "thing1",
            other: [
                {
                    "@context": "https://schema.org/",
                    "@type": "Thing",
                    "@id": "thing11",
                    "name": "thing11",
                    "qty": 2
                },
                {
                    "@context": "https://schema.org/",
                    "@type": "Thing",
                    "@id": "thing12",
                    "name": "thing12",
                    "qty": 3
                }
                ]
        }


    
    let test1 = document.getElementById('test1')


    let o = new h.elementOrchestrator(test1)

    o.record = record

    
   
    
}


//test()

function test2(){

    let record = {
            "@context": "https://schema.org/",
            "@type": "Thing",
            "@id": "thing1",
            "name": "thing1",
            "text": "Some text here",
            "image": {
                "@context": "https://schema.org/",
                "@type": "ImageObject",
                "@id": "image1",
                "name": "image_1",
                "contentUrl": "https://placehold.co/600x400"
            },
            "potentialAction": [
                {
                    "@context": "https://schema.org/",
                    "@type": "Action",
                    "@id": "action1",
                    "name": "Press here",
                    "url": "https://www.example.com/press-here",
                }
                ]
        }


    let record2 = {
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
        "image": {
                "@context": "https://schema.org/",
                "@type": "ImageObject",
                "@id": "image1",
                "name": "image_1",
                "contentUrl": "https://placehold.co/600x400"
            }
         }
    
    
    let template = h.html.line()

     record = h.headings.record(record)
    record2 = h.headings.record(record2)
    let content = h.template.get(template, record)
    content += h.template.get(template, record2)
   
    let test1 = document.getElementById('test1')
    test1.innerHTML = content + content + content


   



}
test2()