
import { krakenNullHelpers} from './krakenNullHelpers.js';
import { krakenAnalysisHelpers} from './krakenAnalysisHelpers.js';


const h = {
    null: krakenNullHelpers,
    isNull: krakenNullHelpers.isNull,
    isNotNull: krakenNullHelpers.isNotNull,
    analysis: krakenAnalysisHelpers
}


/**
 * String operation helpers
 * String operations are complete operations contained in a single string
 * Similar to template engine
 * Example: 'orderItems | filter:orderItems.name == "item1" | orderItems.name'
 * Would return the following parts:
 *     1.
 *         - no: 0
 *         - propertyID: orderItems
 *         - operator: null
 *         - config: null
 *     2.
 *         - no: 1
 *         - propertyID: orderItems.name
 *         - operator: filter
 *         - config: { "orderItems.name":  "item1" }
 *     3.
 *         - no: 2
 *         - propertyID: orderItems.name
 *         - operator: null
 *         - config: null
 *         
 * 
 */


export const krakenStringOperationHelpers = {
    get: getOperations,
    getOperations: getOperations,
    execute: executeOperations,
}


function executeOperations(records, operations){
    /**
     * Executes the operations on the records
     * @param {Array} records
     * @param {Array} operations
     * @returns {Array|Object|str} The records
     * 
     */

    // Error handling
    if(h.isNull(records)){ return null }
    if(h.isNull(operations)){ return records }
    
    if(typeof operations == 'string'){
        operations = getOperations(operations)
    }


    let values = records
    

    for(let o of operations){
        values = executeOperation(values, o)
    }

    return values
    
}


function executeOperation(records, operation){
    /**
     * Executes the operation on the records
     * @param {Object} record
     * @param {Object} operation
     * @returns {Object|str} The record
     */
    
    // Error handling
    if(h.isNull(records)){ return null }
    if(h.isNull(operation)){ return records }

    if(h.isNull(operation.operator)){
        return h.analysis.getValues(records, operation?.propertyID)
    }

    if(operation.operator == 'filter'){
        return h.analysis.filter(records, operation?.config)
    }

    if(operation.operator == 'sumProduct'){
        return h.analysis.sumProduct(records, operation.propertyID?.[0], operation.propertyID?.[1])
    }

    if(operation.operator == 'n'){
        return h.analysis.n(records, operation.propertyID)
    }
    
    if(operation.operator == 'sum'){
        return h.analysis.sum(records, operation.propertyID)
    }

    if(operation.operator == 'min'){
        return h.analysis.min(records, operation.propertyID)
    }

    if(operation.operator == 'max'){
        return h.analysis.max(records, operation.propertyID)
    }

    if(operation.operator == 'avg'){
        return h.analysis.avg(records, operation.propertyID)
    }

    if(operation.operator == 'first'){
        return h.analysis.first(records, operation.propertyID)
    }

    if(operation.operator == 'last'){
        return h.analysis.last(records, operation.propertyID)
    }

    if(operation.operator == 'stdev'){
        return h.analysis.stdev(records, operation.propertyID)
    }

    if(operation.operator == 'transpose'){
        return h.analysis.transpose(records, operation.propertyID)
    }

    if(operation.operator == 'with'){
        return h.analysis.getValues(records, operation.propertyID)
    }

    return records
}

function getOperations(str){
    /**
     * return all operations from a string
     * @param {String} str
     * @returns {Array}
     * 
     */

    let parts = _getOperationParts(str)

    let records = []
    for(let i = 0; i < parts.length; i++){
        records.push(getOperationRecord(parts[i], i))
    }

    // return records
    return records
    
}


function getOperationRecord(part, no){
    /**
     * return the record associated with an operation
     * @param {String} part
     * @returns {Object}
     */


    let record = {
        'no': no,
        'propertyID': _getOperationPropertyID(part),
        'operator': _getOperationOperator(part),
        'config': _getOperationConfig(part)
    }

    return record

    
}



function _getOperationConfig(part){
    /**
     * Gets the operation config
     * @param {String} part The part
     * @returns {Object} The operation config
     * 
     */

    // Error handling
    if(h.isNull(part)){
        return []
    }

    if(typeof part != 'string'){
        return []
    }

    // If no command, assumes entire thing is propertyID
    if(!part.includes(':')){
        return null
    }

    let configStr = part.split(':')?.[1] || null

    // if contains ==, assume it is not command
    if(h.isNotNull(configStr) && !configStr.includes('=')){
        return null
    }


    // Split the config string by ','
    let configParts = []
    if(h.isNotNull(configStr)){
        configParts = configStr.split(',')
    }

    // Build config record 
    let configRecord = {}
    for(let c of configParts){
        let config = c.split('=')

        let configKey = _cleanString(config?.[0])
        let configValue = _cleanString(config?.[1])

        if(h.isNull(configKey) || h.isNull(configValue)){
            continue
        }
        
        configRecord[configKey] = configValue
        
    }

    return configRecord
    
}



function _getOperationPropertyID(part){
    /**
     * Gets the propertyID from a part
     * @param {Object} part The part
     * @returns {String} The propertyID
     *
     * returns an array of propertyIDs of commas present
     */

    // Error handling
    if(h.isNull(part)){
        return []
    }

    if(typeof part != 'string'){
        return []
    }

    // If no command, assumes entire thing is propertyID
    let propertyID
    if(!part.includes(':')){
        propertyID = part
    } else {
        propertyID = part.split(':')?.[1] || null
    }


    // if contains =, assume it is not poropertyID
    if(h.isNotNull(propertyID) && propertyID.includes('=')){
        return null
    }


    propertyID = _cleanString(propertyID)


    // Check if commas 
    if(h.isNotNull(propertyID) && propertyID.includes(',')){
        propertyID = propertyID.split(',')
        propertyID = propertyID.map(x => _cleanString(x))
    }
    
    return propertyID
    
}

function _getOperationOperator(part){
    /**
     * Returns the command part of an operation
     * @param {Object} part The part of the operation
     * @returns {String} The command
     */


    // Error handling
    if(h.isNull(part)){
        return []
    }

    if(typeof part != 'string'){
        return []
    }
    if(!part.includes(':')){
        return null
    }

    //
    
    let operator = part.split(':')?.[0] || null

    operator = _cleanString(operator)

    return operator
    
    
}


function _getOperationParts(str){
    /**
     * Gets the parts of a string that are operators (between | )
     * @param {String} str
     * @returns {Array}
     * 
     */

    // Error handling
    if(h.isNull(str)){
        return []
    }

    if(typeof str != 'string'){
        return []
    }

    // Get the parts
    let parts = str.split('|')

    return parts
    
}


function _cleanString(str){
    /**
     * Cleans a string
     * @param {String} str
     * @returns {String}
     * 
     */


    // Error handling
    if(h.isNull(str)){ 
        return null 
    }

    try { 
        str = str.trim()
    } catch (error){
        
        return null
    }
    
    return str

    
}