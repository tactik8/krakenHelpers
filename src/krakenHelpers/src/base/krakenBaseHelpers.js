
import { krakenAnalysisHelpers } from './src/krakenAnalysisHelpers.js'
import { krakenArrayHelpers } from './src/krakenArrayHelpers.js'
import { krakenBaseThingHelpers } from './src/krakenBaseThingHelpers.js'
import { krakenDateHelpers } from './src/krakenDateHelpers.js'
import { krakenDotNotationHelpers } from './src/krakenDotNotationHelpers.js'
import { krakenEmailHelpers } from './src/krakenEmailHelpers.js'
import { krakenHashHelpers} from './src/krakenHashHelpers.js'
import { krakenHeadingHelpers} from './src/krakenHeadingHelpers.js'

import { krakenJsonHelpers } from './src/krakenJsonHelpers.js'
import { krakenNullHelpers } from './src/krakenNullHelpers.js'
import { krakenNumberHelpers } from './src/krakenNumberHelpers.js'
import { krakenObjectHelpers } from './src/krakenObjectHelpers.js'
import { krakenRegexHelpers } from './src/krakenRegexHelpers.js'
import { krakenSimpleThingHelpers } from './src/krakenSimpleThingHelpers.js'
import { krakenStorageHelpers } from './src/krakenStorageHelpers.js'
import { krakenStringHelpers } from './src/krakenStringHelpers.js'
import { krakenStringOperationHelpers } from './src/krakenStringOperationHelpers.js'
import { krakenTagHelpers } from './src/krakenTagHelpers.js'
import { krakenTemplateHelpers } from './src/krakenTemplateHelpers.js'
import { krakenTestHelpers } from './src/krakenTestHelpers.js'
import { krakenTextTable } from './src/krakenTextTable.js'

import { krakenUrlHelpers } from './src/krakenUrlHelpers.js'
import { krakenUuidHelpers} from './src/krakenUuidHelpers.js'

export const krakenBaseHelpers = {

    analysis: krakenAnalysisHelpers,
    array: krakenArrayHelpers,
    classes: krakenSimpleThingHelpers,
    date: krakenDateHelpers,
    dot: krakenDotNotationHelpers,
    email:krakenEmailHelpers,
    hash: krakenHashHelpers,
    heading: krakenHeadingHelpers,
    json: krakenJsonHelpers,
    null: krakenNullHelpers,
    number: krakenNumberHelpers,
    object: krakenObjectHelpers,
    regex: krakenRegexHelpers,
    storage: krakenStorageHelpers,
    string: krakenStringHelpers,
    stringOperation: krakenStringOperationHelpers,
    tag: krakenTagHelpers,
    template: krakenTemplateHelpers,
    test: krakenTestHelpers,
    textTable: krakenTextTable,
    thing: krakenBaseThingHelpers,
    url: krakenUrlHelpers,
    uuid: krakenUuidHelpers,

    // Shortcuts
    isNull: krakenNullHelpers.isNull,
    isNotNull: krakenNullHelpers.isNotNull,
    isEqual:krakenNullHelpers.isEqual,
    isNotEqual:krakenNullHelpers.isNotEqual,
    toArray: krakenArrayHelpers.toArray,
    isArray: krakenArrayHelpers.isValid,
    isObject: krakenObjectHelpers.isValid,
    isDate: krakenDateHelpers.isValid,
    toDate: krakenDateHelpers.toDate,
    isNumber: krakenNumberHelpers.isValid,
    
    
}
