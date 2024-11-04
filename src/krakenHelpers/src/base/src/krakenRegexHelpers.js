


export const krakenRegexHelpers = {
    isValid: isValid,
    regexFromString: regexFromString,
    test: testRegex,
    match: matchRegex
}


function isValid(str){
    /**
     * Checks if a regex is valid
     * @param {String} str
     * @returns {Boolean}
     */

    try{
        let result = regexFromString(str)
        return true
    } catch {
        return false
    }
    
}

function regexFromString(str) {
  const match = str.match(/^([\/~@;%#'])(.*?)\1([gimsuy]*)$/);
  return match ? 
    new RegExp(
      match[2],
      match[3]
        // Filter redundant flags, to avoid exceptions
        .split('')
        .filter((char, pos, flagArr) => flagArr.indexOf(char) === pos)
        .join('')
    ) 
    : new RegExp(str);
}


function testRegex(str, regex){

    if(typeof regex == 'string'){
        regex = regexFromString(regex)
    }

   
    return regex.test(str)
    
}

function matchRegex(str, regex){

    

}