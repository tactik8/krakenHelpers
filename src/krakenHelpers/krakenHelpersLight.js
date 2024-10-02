
import { krakenArrayHelpers } from './helpers/krakenArrayHelpers.js'
import { krakenDateHelpers } from './helpers/krakenDateHelpers.js'
import { krakenDotNotationHelpers } from './helpers/krakenDotNotationHelpers.js'
import { krakenElementHelpers } from './helpers/krakenElementHelpers.js'
import { krakenEmailHelpers } from './helpers/krakenEmailHelpers.js'
import { krakenJsonHelpers } from './helpers/krakenJsonHelpers.js'
import { krakenNullHelpers } from './helpers/krakenNullHelpers.js'
import { krakenObjectHelpers } from './helpers/krakenObjectHelpers.js'
import { krakenStringHelpers } from './helpers/krakenStringHelpers.js'
import { krakenUrlHelpers } from './helpers/krakenUrlHelpers.js'


export const krakenHelpersLight = {

    array: krakenArrayHelpers,
    date: krakenDateHelpers,
    dot: krakenDotNotationHelpers,
    element: krakenElementHelpers,
    email:krakenEmailHelpers,
    json: krakenJsonHelpers,
    null: krakenNullHelpers,
    object: krakenObjectHelpers,
    string: krakenStringHelpers,
    url: krakenUrlHelpers,
    isNull: krakenNullHelpers.isNull,
    isNotNull: krakenNullHelpers.isNotNull,
    isEqual:krakenNullHelpers.isEqual,
    isNotEqual:krakenNullHelpers.isNotEqual,
    toArray: krakenArrayHelpers.toArray
}
