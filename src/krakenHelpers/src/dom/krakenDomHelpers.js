import { krakenElementHelpers } from './krakenElementHelpers.js'
import { krakenElementEventHelpers } from './krakenElementEventHelpers.js'
import { krakenElementThingHelpers } from './krakenElementThingHelpers.js'
import { krakenElementThingObserverHelpers } from './krakenElementThingObserverHelpers.js'
import { krakenElementTemplateHelpers } from './krakenElementTemplateHelpers.js'
import { krakenElementOrchestratorHelpers} from './krakenElementOrchestratorHelpers.js'




import { krakenElementCursorHelpers } from './krakenElementCursorHelpers.js'
export const krakenDomHelpers = {
    cursor: krakenElementCursorHelpers,
    element: krakenElementHelpers,
    event: krakenElementEventHelpers,
    thing: krakenElementThingHelpers,
    thingObserver: krakenElementThingObserverHelpers,
    template: krakenElementTemplateHelpers,
    orchestrator: krakenElementOrchestratorHelpers
}