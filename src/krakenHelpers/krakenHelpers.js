
import { krakenAnalysisHelpers } from './helpers/krakenAnalysisHelpers.js'

import { krakenArrayHelpers } from './helpers/krakenArrayHelpers.js'
import { krakenDateHelpers } from './helpers/krakenDateHelpers.js'
import { krakenEmailHelpers } from './helpers/krakenEmailHelpers.js'

import { krakenDotNotationHelpers } from './helpers/krakenDotNotationHelpers.js'

import { krakenJsonHelpers } from './helpers/krakenJsonHelpers.js'
import { krakenNumberHelpers } from './helpers/krakenNumberHelpers.js'
import { krakenObjectHelpers } from './helpers/krakenObjectHelpers.js'
import { krakenStringHelpers } from './helpers/krakenStringHelpers.js'
import { krakenTextTable } from './helpers/krakenTextTable.js'
import { krakenThingHelpers } from './helpers/krakenThingHelpers.js'
import { krakenUrlHelpers } from './helpers/krakenUrlHelpers.js'
import { krakenValueHelpers } from './helpers/krakenValueHelpers.js'
import { krakenApiHelpers } from './helpers/krakenApiHelpers.js'
import { krakenHeadingsHelpers } from './helpers/krakenHeadingsHelpers.js'
import { krakenTemplateHelpers } from './helpers/krakenTemplateHelpers.js'

import { krakenNullHelpers } from './helpers/krakenNullHelpers.js'


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
    json: krakenJsonHelpers,
    number: krakenNumberHelpers,
    object: krakenObjectHelpers,
    string: krakenStringHelpers,
    textTable: krakenTextTable,
    thing: krakenThingHelpers,
    Timer: KrakenTimer,
    url: krakenUrlHelpers,
    value: krakenValueHelpers,
    headings: krakenHeadingsHelpers,
    null: krakenNullHelpers,
    isNull: krakenNullHelpers.isNull,
    isNotNull: krakenNullHelpers.isNotNull,
    isEqual:krakenNullHelpers.isEqual,
    isNotEqual:krakenNullHelpers.isNotEqual,
    template: krakenTemplateHelpers
}