


import { krakenBaseHelpers } from './src/base/krakenBaseHelpers.js'
  
import { krakenDomHelpers } from './src/dom/krakenDomHelpers.js'

import { krakenLocalizationHelpers } from './src/localization/krakenLocalizationHelpers.js'

import { krakenSimpleHtmlHelpers} from './src/html/krakenSimpleHtmlHelpers.js'

import { krakenThingHelpers } from './src/thing/krakenThingHelpers.js'    
import { krakenHttpHelpers } from './src/http/krakenHttpHelpers.js'    

import { krakenElementHelpers } from './src/element/krakenElementHelpers.js'    


export const krakenHelpers = {

    base: krakenBaseHelpers,
    dom: krakenDomHelpers,
    html: krakenSimpleHtmlHelpers,
    localization: krakenLocalizationHelpers,
    thing: krakenThingHelpers,
    http: krakenHttpHelpers,
    element: krakenElementHelpers,


    // shortcuts
    isNull: krakenBaseHelpers.null.isNull,
    isNotNull: krakenBaseHelpers.null.isNotNull,
    isEqual:krakenBaseHelpers.null.isEqual,
    isNotEqual:krakenBaseHelpers.null.isNotEqual,
    toArray: krakenBaseHelpers.array.toArray,
    isArray: krakenBaseHelpers.array.isArray,
    isObject: krakenBaseHelpers.object.isObject,
    isDate: krakenBaseHelpers.date.isDate,
    isNumber: krakenBaseHelpers.number.isNumber,
    uuid: krakenBaseHelpers.uuid,
    wait: krakenBaseHelpers.wait,

    
}