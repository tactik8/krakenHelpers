
import { krakenAnalysisHelpers } from './helpers/krakenAnalysisHelpers.js'
import { krakenApiHelpers } from './helpers/krakenApiHelpers.js'
import { krakenArrayHelpers } from './helpers/krakenArrayHelpers.js'
import { krakenDateHelpers } from './helpers/krakenDateHelpers.js'
import { krakenDotNotationHelpers } from './helpers/krakenDotNotationHelpers.js'
import { krakenElementHelpers } from './helpers/krakenElementHelpers.js'
import { krakenElementEventHelpers } from './helpers/krakenElementEventHelpers.js'
import { krakenElementThingHelpers } from './helpers/krakenElementThingHelpers.js'

import { krakenEmailHelpers } from './helpers/krakenEmailHelpers.js'
import { krakenExtractHelpers } from './helpers/krakenExtractHelpers.js'
import { krakenFileHelpers } from './helpers/krakenFileHelpers.js'

import { krakenHeadingsHelpers } from './helpers/krakenHeadingsHelpers.js'
import { krakenJsonHelpers } from './helpers/krakenJsonHelpers.js'
import { krakenLogHelpers } from './helpers/krakenLogHelpers.js'
import { krakenNullHelpers } from './helpers/krakenNullHelpers.js'
import { krakenNumberHelpers } from './helpers/krakenNumberHelpers.js'
import { krakenObjectHelpers } from './helpers/krakenObjectHelpers.js'
import { krakenSimpleHtmlHelpers } from './helpers/krakenSimpleHtmlHelpers.js'

import { krakenSimpleThingsHelpers } from './helpers/krakenSimpleThingsHelpers.js'
import { krakenStringHelpers } from './helpers/krakenStringHelpers.js'
import { krakenTemplateHelpers } from './helpers/krakenTemplateHelpers.js'
import { krakenTemplateLiveHelpers } from './helpers/krakenTemplateLiveHelpers.js'

import { krakenTextTable } from './helpers/krakenTextTable.js'
import { krakenThingHelpers } from './helpers/krakenThingHelpers.js'
import { krakenUrlHelpers } from './helpers/krakenUrlHelpers.js'
import { krakenValueHelpers } from './helpers/krakenValueHelpers.js'

import { KrCache } from './helpers/krakenCache.js'
import { KrakenTimer } from './helpers/krakenTimer.js'

import { KrElementOrchestrator } from './tools/krakenElementOrchestrator.js'


export const krakenHelpers = {
    analysis: krakenAnalysisHelpers,
    api: krakenApiHelpers,
    array: krakenArrayHelpers,
    Cache: KrCache,
    date: krakenDateHelpers,
    dot: krakenDotNotationHelpers,
    element: krakenElementHelpers,
    elementEvent: krakenElementEventHelpers,
    elementThing: krakenElementThingHelpers,
    email:krakenEmailHelpers,
    extract: krakenExtractHelpers,
    file: krakenFileHelpers,
    headings: krakenHeadingsHelpers,
    html: krakenSimpleHtmlHelpers,
    json: krakenJsonHelpers,
    Logs: krakenLogHelpers,
    null: krakenNullHelpers,
    number: krakenNumberHelpers,
    object: krakenObjectHelpers,
    simple: krakenSimpleThingsHelpers,
    string: krakenStringHelpers,
    template: krakenTemplateHelpers,
    templateLive: krakenTemplateLiveHelpers,
    textTable: krakenTextTable,
    thing: krakenThingHelpers,
    Timer: KrakenTimer,
    url: krakenUrlHelpers,
    value: krakenValueHelpers,
    
    isNull: krakenNullHelpers.isNull,
    isNotNull: krakenNullHelpers.isNotNull,
    isEqual:krakenNullHelpers.isEqual,
    isNotEqual:krakenNullHelpers.isNotEqual,
    toArray: krakenArrayHelpers.toArray,

    elementOrchestrator: KrElementOrchestrator
}