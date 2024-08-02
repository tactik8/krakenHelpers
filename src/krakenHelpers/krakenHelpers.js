
import { KrakenTimer } from './helpers/krakenTimer.js'

import { krakenDateHelpers } from './helpers/krakenDateHelpers.js'
import { krakenArrayHelpers } from './helpers/krakenArrayHelpers.js'
import { krakenThingHelpers } from './helpers/krakenThingHelpers.js'
import { krakenObjectHelpers } from './helpers/krakenObjectHelpers.js'
import { krakenTextTable } from './helpers/krakenTextTable.js'

import { krakenUrlHelpers } from './helpers/krakenUrlHelpers.js'

import { krakenJsonHelpers } from './helpers/krakenJsonHelpers.js'

krakenJsonHelpers

export const krakenHelpers = {
    array: krakenArrayHelpers,
    date: krakenDateHelpers,
    json: krakenJsonHelpers,
    object: krakenObjectHelpers,
    textTable: krakenTextTable,
    thing: krakenThingHelpers,
    Timer: KrakenTimer,
    url: krakenUrlHelpers
}