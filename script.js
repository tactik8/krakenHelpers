
import { krakenHelpers as h } from './src/krakenHelpers/krakenHelpers.js'





//import { krakenNullHelpers as h } from './krakenNullHelpers.js'



function getWord(word, locale){

    // Retrieve language
    let language = locale.slice(0, 2)
    language = language.toLowerCase()


    // Retrieve country
    let country
    if(locale.length == 5){
        country = locale.slice(3, 5)
    } else if (locale.length == 4){
        country = locale.slice(2, 4)
    } else {
        country = null
    }
    country = country.toUpperCase()

    // ReDefine proper locale
    let l = language + '-' + String(country)


    // Refine word
    word = word.trim()
    word = word.toLowerCase()
    
    

    // Get word

    let library = getLibrary()

    let newWord = library?.[word]?.[l] || null
   
    if(h.isNotNull(newWord)){
        return newWord
    }


    // Get generic country
    
    if(language == 'en'){
        country = 'US'
    }

    if(language == 'fr' ){
        country = 'CA'
    }
    
    l = language + '-' + String(country)

    newWord = library?.[word]?.[l] || null

    if(h.isNotNull(newWord)){
        return newWord
    }

    return null
    
    
}




function getLibrary(){

    let record = {

        "submit": {
            'en-US': 'submit',
            'fr-CA': 'soumettre'
        },
        "givenName": {
            'en-US': 'first name',
            'fr-CA': 'prénom'
        },
        "familyName": {
            'en-US': 'family name',
            'fr-CA': 'nom de famille'
        }
    }

    return record
}

let c = getWord('submit', 'fr-CA')
console.log('c', c)