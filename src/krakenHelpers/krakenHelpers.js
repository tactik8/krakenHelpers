
import { krakenAnalysisHelpers } from './helpers/krakenAnalysisHelpers.js'
import { krakenApiHelpers } from './helpers/krakenApiHelpers.js'
import { krakenArrayHelpers } from './helpers/krakenArrayHelpers.js'
import { krakenDateHelpers } from './helpers/krakenDateHelpers.js'
import { krakenDotNotationHelpers } from './helpers/krakenDotNotationHelpers.js'
import { krakenEmailHelpers } from './helpers/krakenEmailHelpers.js'
import { krakenExtractHelpers } from './helpers/krakenExtractHelpers.js'
import { krakenHeadingsHelpers } from './helpers/krakenHeadingsHelpers.js'
import { krakenJsonHelpers } from './helpers/krakenJsonHelpers.js'
import { krakenLogHelpers } from './helpers/krakenLogHelpers.js'
import { krakenNullHelpers } from './helpers/krakenNullHelpers.js'
import { krakenNumberHelpers } from './helpers/krakenNumberHelpers.js'
import { krakenObjectHelpers } from './helpers/krakenObjectHelpers.js'
import { krakenSimpleThingsHelpers } from './helpers/krakenSimpleThingsHelpers.js'
import { krakenStringHelpers } from './helpers/krakenStringHelpers.js'
import { krakenTemplateHelpers } from './helpers/krakenTemplateHelpers.js'
import { krakenTextTable } from './helpers/krakenTextTable.js'
import { krakenThingHelpers } from './helpers/krakenThingHelpers.js'
import { krakenUrlHelpers } from './helpers/krakenUrlHelpers.js'
import { krakenValueHelpers } from './helpers/krakenValueHelpers.js'

import { KrCache } from './helpers/krakenCache.js'
import { KrakenTimer } from './helpers/krakenTimer.js'


export const krakenHelpers = {
    analysis: krakenAnalysisHelpers,
    api: krakenApiHelpers,
    array: krakenArrayHelpers,
    Cache: KrCache,
    date: krakenDateHelpers,
    dot: krakenDotNotationHelpers,
    email:krakenEmailHelpers,
    extract: krakenExtractHelpers,
    headings: krakenHeadingsHelpers,
    json: krakenJsonHelpers,
    Logs: krakenLogHelpers,
    null: krakenNullHelpers,
    number: krakenNumberHelpers,
    object: krakenObjectHelpers,
    simple: krakenSimpleThingsHelpers,
    string: krakenStringHelpers,
    template: krakenTemplateHelpers,
    textTable: krakenTextTable,
    thing: krakenThingHelpers,
    Timer: KrakenTimer,
    url: krakenUrlHelpers,
    value: krakenValueHelpers,
    
    isNull: krakenNullHelpers.isNull,
    isNotNull: krakenNullHelpers.isNotNull,
    isEqual:krakenNullHelpers.isEqual,
    isNotEqual:krakenNullHelpers.isNotEqual
    
}