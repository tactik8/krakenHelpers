
import { krakenAnalysisHelpers } from './helpers/krakenAnalysisHelpers.js'

import { krakenArrayHelpers } from './helpers/krakenArrayHelpers.js'
import { krakenDateHelpers } from './helpers/krakenDateHelpers.js'
import { krakenJsonHelpers } from './helpers/krakenJsonHelpers.js'
import { krakenNumberHelpers } from './helpers/krakenNumberHelpers.js'
import { krakenObjectHelpers } from './helpers/krakenObjectHelpers.js'
import { krakenStringHelpers } from './helpers/krakenStringHelpers.js'
import { krakenTextTable } from './helpers/krakenTextTable.js'
import { krakenThingHelpers } from './helpers/krakenThingHelpers.js'
import { krakenUrlHelpers } from './helpers/krakenUrlHelpers.js'
import { krakenValueHelpers } from './helpers/krakenValueHelpers.js'

import { KrakenTimer } from './helpers/krakenTimer.js'


export const krakenHelpers = {
    analysis: krakenAnalysisHelpers,
    array: krakenArrayHelpers,
    date: krakenDateHelpers,
    json: krakenJsonHelpers,
    number: krakenNumberHelpers,
    object: krakenObjectHelpers,
    string: krakenStringHelpers,
    textTable: krakenTextTable,
    thing: krakenThingHelpers,
    Timer: KrakenTimer,
    url: krakenUrlHelpers,
    value: krakenValueHelpers
}