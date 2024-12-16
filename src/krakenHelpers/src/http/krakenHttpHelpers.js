

import { krakenApiHelpers}  from './krakenApiHelpers.js'
import { krakenExpressHelpers}  from './krakenExpressHelpers.js'
import { krakenBrowserHelpers}  from './krakenBrowserHelpers.js'

export const krakenHttpHelpers = {
    api: krakenApiHelpers,
    express: krakenExpressHelpers,
    browser: krakenBrowserHelpers
}