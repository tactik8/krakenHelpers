import { krakenNullHelpers as h } from "./krakenNullHelpers.js";
import { krakenDateHelpers as d } from "./krakenDateHelpers.js";
import { KrSimpleAction } from "./krakenSimpleThingsHelpers.js";
import { krakenTextTable } from "./krakenTextTable.js";

class KrakenLog {
    /**
     * KrakenLog
     * Class containing a series of logs (actions)
     * Attributes:
     * -
     * Methods:
     *  - log(content, error): addns a new action with given content as name, sets tatus to Completed, unless error then Failed
     *  - get(filter): provided a json acting as filter, returns actions matching criteria
     *  - getLactAction(filter): provides last action with given filter
     */
    constructor(collection) {
        this.collection = collection;
        this.agent = null;
        this.instrument = null;
        this.object = null;

        this.actions = [];
    }

    // -----------------------------------------------------
    //  System methods
    // -----------------------------------------------------

    toString() {
        let records = this.actions.map((x) => x.getHumanRecord());

        let keys = ["startTime", "endTime",  "duration", "name", "actionStatus"];

        
        return krakenTextTable(records, keys, keys);
    }

    get length(){
        return this.actions.length
    }


    // -----------------------------------------------------
    //  Attributes 
    // -----------------------------------------------------

    get first(){
        return this._getFirstAction()
    }

    get last(){
        return this._getLastAction()
    }


    // -----------------------------------------------------
    //  Methods 
    // -----------------------------------------------------


    get(filter){
        return this._getActions(filter)
    }

    getFirst(filter){
        return this._getFirstAction(filter)
    }
    
    getLast(filter){
        return this._getLastAction(filter)
    }

    log(content, error){
        return this._addNewLog(content, error)
    }

    
    
    // -----------------------------------------------------
    //  System methods
    // -----------------------------------------------------

    _getNewAction() {
        let action = new KrSimpleAction("log");
        this.actions.push(action);

        if (h.isNotNull(this.agent)) {
            action.agent = this.agent;
        }
        if (h.isNotNull(this.instrument)) {
            action.instrument = this.instrument;
        }
        if (h.isNotNull(this.object)) {
            action.object = this.object;
        }

        return action;
    }

    _addNewLog(content, error) {
        let action = this._getNewAction();

        if (h.isNotNull(error)) {
            action.error = error;
        } else {
            action.setCompleted();
        }
        if (h.isNotNull(content)) {
            action.name = content;
        }

        return action;
    }

    _getActions(filter) {
        function sortActions(a, b) {
            if (a.lt(b)) {
                return 1;
            } else if (a.gt(b)) {
                return -1;
            } else {
                return 0;
            }
        }
        let actions = this.actions;
        actions.sort(sortActions);

        //

        if (filter) {
            for (let k of Object.keys(filter)) {
                actions = actions.filter((x) => x?.[k] == filter[k]);
            }
        }

        return actions;
    }

    _getFirstAction(filter) {
        let actions = this._getActions(filter);
        if (h.isNotNull(actions)) {
            return actions[0];
        }
        return null;
    }
    
    _getLastAction(filter) {
        let actions = this._getActions(filter);
        if (h.isNotNull(actions)) {
            return actions[actions.length - 1];
        }
        return null;
    }
}

export const krakenLogHelpers = KrakenLog;
