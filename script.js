
import { krakenHelpers as k } from './src/index.js'

//import { krakenHelpers as k } from './dist/main.js'



async function test(){
    

    let record =  {      
            "@type": "PostalAddress",      
            "streetAddress": "7 S. Broadway",
            "addressLocality": "Denver",      
            "addressRegion": "CO",      
            "postalCode": "80209",      
            "addressCountry": "US"
         }


    let result
    result = k.headings.heading1(record)
    console.log(result)
    result = k.headings.heading2(record)
    console.log(result)
    result = k.headings.headingDescription(record)
    console.log(result)    
    result = k.headings.headingDate(record)
    console.log(result)    


    
    






}

test()
