
import { krakenBaseHelpers as h} from '../../base/krakenBaseHelpers.js'

import { krakenThingSystemHelpers as th } from "./krakenThingSystemHelpers.js";

import { krakenThingPropertyValueSpecificationHelpers as psh } from './krakenThingPropertyValueSpecificationHelpers.js'

import { krakenThingListHelpers as lh} from './krakenThingListHelpers.js'

export const krakenThingActionExecutionHelpers = {

    valid: checkValidity,
    execute: executePotentialAction
    
}



function executePotentialAction(action){
    /**
     * Executes an action
     * 
     */


    // Check if action is system record
    let isSystemRecordFlag = th.isValid(action)
    

    // Check if potential action is actionable (criteria is valid)
    action = checkValidity(action)
    if(action.actionStatus == 'FailedActionStatus'){
        return action
    }

    // Check if action is already executed
    //if(checkIfExecuted(action) == true){
        //return null
    //}

    // Execute action (-outputs)
    action = executeAction(action)


    // Execute action type (updateAction, deleteAction, ...)
    action = executeActionType(action)


    // Convert from system record if required
    if(isSystemRecordFlag === false){
        action = th.record.get(action)
    }
    
    return action

}

function checkValidity(action){
    /**
     * Checks if action meet validity criteria
     * Validity criteria are the -input properties
     */

    
    // Convert record to dot record
    let dotRecord = h.dot.toDot(action)

    // Iterate through keys
    let errors = []

    

    
    for(let k in dotRecord){
        
         if(k.includes('-input')){

             // Retrieve value
             let value = h.dot.get(k, action)
             
             // convert uri template to pvs
             let pvs = h.uri.uriToPvs(value)


             // If pvs has default value and nothing else, assume it is a regex valuePattern
             if(Object.keys(pvs.length <=2)){
                 pvs.valuePattern = pvs?.defaultValue
             }
             
             // Check if meet pvs
             let result = testPVS(action, k, pvs)

             if(result == false){
                errors.push(`${k} does not meet validity criteria ${value}`)
                 action.actionStatus = 'FailedActionStatus'
             }
         }
        
    }

    if(action.actionStatus != 'FailedActionStatus'){
        action.actionStatus = 'PotentialActionStatus'
    }
        
    if(errors.length > 0){
        action.error = errors.join(', ')
    }
        
    return action
    
}


function executeAction(action){
    /**
     * Converts keys ending in '-output' by executing their value is if uri template 
     */


    

    // Copy record
    let newAction = JSON.parse(JSON.stringify(action));

    // Convert to dot record
    let dotRecord = h.dot.toDot(action)

    // Iterate through all keys
    for(let k of Object.keys(dotRecord)){

        // Remove input
        if(k.includes('-input')){

             h.dot.setValue(newAction, k, undefined)
        }
        
        //
        if(k.includes('-output')){

            // Retrieve value
            let value = h.dot.get(k, newAction)

            // Convert value to pvs
            let pvs = h.uri.uriToPvs(value)

            // Execute pvs template
            value = h.template.get(pvs?.defaultValue, action)

            // Convert if json
            try{
                value = JSON.parse(value)

            } catch(error){

            }


            // Set value 
            let newK = k.replace('-output', '')
            h.dot.setValue(newAction, newK, value)

            // Remove old output key
            h.dot.setValue(newAction, k, undefined)
        }

    }

    // Set action to completed
    newAction.actionStatus = 'CompletedActionStatus'

    return newAction


}


function testPVS(record, key, pvs){
    /**
     *  {
    "@type": "PropertyValueSpecification",
    "@id": "8ca1b4ac-9a70-4761-ab77-8ec77512cef5",
    "defaultValue": null,
    "readonlyValue": null,
    "valueRequired": true,
    "multipleValues": false,
    "minValue": null,
    "maxValue": null,
    "valueMinLength": null,
    "valueMaxLength": null,
    "valuePattern": null,
    "stepValue": null,
    "valueName": null,
}

     */


    let newKey = key.replace('-input', '')
    let value = h.dot.get(newKey, record)

    let errors = []

    let result = true


    // valueRequired
    if(h.isNotNull(pvs.valueRequired)){
        
        try{
            if(h.isNull(value)){
                errors.push('valueRequired')
                result = false
            }
        } catch (error){
            errors.push(error)
            result = false
        }
        
    }

    // multipleValues
    if(h.isNotNull(pvs.multipleValues)){

        try{
            if(value.length > 1){
                errors.push('multipleValues')
                result = false
            }
        } catch (error){
            errors.push(error)
            result = false
        }
        
    }

    
    // minValue
    if(h.isNotNull(pvs.minValue)){

        try{
            if(value < Number(pvs.minValue)){
                errors.push('minValue')
                result = false
            }
        } catch (error){
            errors.push(error)
            result = false
        }
        
    }

    // valueMaxLength
    if(h.isNotNull(pvs.maxValue)){

        try{
            if(value > Number,Number(pvs.maxValue)){
                errors.push('maxValue')
                result = false
            }
        } catch (error){
            errors.push(error)
            result = false
        }
        
    }
    
    // valueMinLength
    if(h.isNotNull(pvs.valueMinLength)){

        try{
            if((value?.length || '') < pvs.valueMinLength){
                errors.push('valueMinLength')
                result = false
            }
        } catch (error){
            errors.push(error)
            result = false
        }
        
    }

    // valueMaxLength
    if(h.isNotNull(pvs.valueMaxLength)){

        try{
            if((value?.length || '') > pvs.valueMaxLength){
                errors.push('valueMaxLength')
                result = false
            }
        } catch (error){
            errors.push(error)
            result = false
        }
        
    }

    // valueStep
    if(h.isNotNull(pvs.stepValue)){

        try{
            if (value % pvs.stepValue != 0) {
                errors.push('stepValue')
                result = false
            }
        } catch (error){
            errors.push(error)
            result = false
        }
        
    }

    // valuePattern
    if(h.isNotNull(pvs.valuePattern)){

        try{
            value = String(value);
            if(h.regex.test(value, pvs.valuePattern) ==false){
                errors.push('valuePattern')
                result = false
            }
        } catch (error){
            errors.push(error)
            result = false
        }
        
    }

    return result
    
}



function executePotentialAction_OLD(action){
    /**
     * Executes an action
     * 
     */

    
    // Check if potential action is actionable (criteria is valid)

    //if(checkValidity(action) == false){
        //return null
   // }

    // Check if action is already executed
    //if(checkIfExecuted(action) == true){
        //return null
    //}

    // Execute action
    action = executeAction(action)

    return action
    
}




function checkValidity_OLD(record, action){
    /**
     * Checks if the action is valid
     */
    
    return psh.test(record, action)
    

    
}


function checkIfExecuted(record, action){
    /**
     * Checks if the action is already executed
     */
    
    
}










function executeActionType(action){
    /**
     * Executes an action
     */

    let action_type = action?.record_type  || action?.["@type"] 

    
    let recordIsThingFlag = false
    if(th.isValid(action)){
        recordIsThingFlag = true
    } else {

        action = th.toThing(action)
        
    }

    // Init action
    action = th.value.set(action, 'startTime',  new Date())


    // Switch

    
    switch(action_type) {


        //
        
        case "UpdateAction":
            action = executeUpdateAction(action)
            break;
        
        // List actions
        case "InsertAction":
            action = executeInsertAction(action)
            break;
        case "AddAction":
            action =  executeInsertAction(action)
            break;
        case "DeleteAction":
            action =  executeDeleteAction(action)
            break;
        case "ReplaceAction":
            action =  executeReplaceAction(action)
            break;
        case "InsertAction":
            action =  executeInsertAction(action)
            break;
        case "AppendAction":
            action =  executeAppendAction(action)
            break;
        case "PrependAction":
            action =  executePrependAction(action)
            break;
        case "DeleteAction":
            action =  executeDeleteAction(action)
            break;
        default:
            break;
            
    }


    // 

    action = th.value.set(action, 'endTime',  new Date())

    
    // Convert back to record 
    if(recordIsThingFlag == true){
        action = th.record.get(action)
    }

    return action
    
}




// -----------------------------------------------------
//  Record 
// -----------------------------------------------------

function executeUpdateAction(action){
    /**
     * Executes an update action
     * 
     */



    // Error handling
    if(h.isNull(action.object)){
        action = th.value.set(action, 'actionStatus', "FailedActionStatus")
        action = th.value.set(action, 'actionStatus', "Missing object")
        action = th.value.set(action, 'endTime', new Date())
        return action
    }

    if(h.isNull(action.targetCollection)){
        action = th.value.set(action, 'actionStatus', "FailedActionStatus")
        action = th.value.set(action, 'actionStatus', "Missing targetCollection")
        action = th.value.set(action, 'endTime', new Date())
        return action
        
    }

    // Execute action
    let targetCollections = th.propertyValues.get(action, 'targetCollection')
    targetCollections = targetCollections.map(x => x.object.value)

    let objects = th.propertyValues.get(action, 'object')
    objects = objects.map(x => x.object.value)
    
    
    let results = []
    for(let targetCollection of targetCollections){

        let result = targetCollection
        
        for (let object of objects){
            let propertyID = th.value.get(object, 'propertyID')
            let value = th.value.get(object, 'value')
            result = th.value.set(result, propertyID, value)
        }
        
        results.push(result)
        
    }

    // Execute action
    action = th.value.set(action, 'result', results)

    // Set action status
    action = th.value.set(action, 'actionStatus', "CompletedActionStatus")

    // Return
    return action

    
}

// -----------------------------------------------------
//  Lists 
// -----------------------------------------------------

function executeAddAction(action){
    /**
     * Execute an append action adding item to the end of the list
     */

    return executeInsertAction(action)

}

function executeAppendAction(action){
    /**
     * Execute an append action adding item to the end of the list
     */

    return executeInsertAction(action, null)
    
}

function executePrependAction(action){
    /**
     * Execute an append action adding item to the end of the list
     */

    return executeInsertAction(action, 0)

}

function executeInsertAction(action, toLocation){
    /**
     * Executes an append action adding item to the end of the list
     */
    

    // Get variables
    toLocation = toLocation || th.value.get(action, 'toLocation')

    let objects = th.propertyValues.get(action, 'object')
    objects = objects.map(x => x.object.value)
    
    let targetCollections = th.propertyValues.get(action, 'targetCollection')
    targetCollections = targetCollections.map(x => x.object.value)

    // Error handling
    if(h.isNull(objects)){
        action.actionStatus = 'FailedActionStatus'
        action.error = 'Missing object'
        return action
    }

    if(h.isNull(targetCollections)){
        action.actionStatus = 'FailedActionStatus'
        action.error = 'Missing targetCollection'
        return action
    }

    
    // Execute action
    let results = []
    for(let targetCollection of targetCollections){

        let result = targetCollection

        let tempToLocation = toLocation 
        for(let object of objects){
            result = lh.insert(result, object, tempToLocation)
            tempToLocation = th.value.get(object, 'position') + 1
        }
        results.push(result)
    }

    // Execute action
    action = th.value.set(action, 'result', results)
    
    // Set action status
    action = th.value.set(action, 'actionStatus', "CompletedActionStatus")

    // Return
    return action
    
}


function executeDeleteAction(action){
    /**
     * Delete an item from the list
     */


    // Error handling
    if(h.isNull(action.object)){
        action.actionStatus = 'FailedActionStatus'
        action.error = 'Missing object'
        return action
    }

    if(h.isNull(action.targetCollection)){
        action.actionStatus = 'FailedActionStatus'
        action.error = 'Missing targetCollection'
        return action
    }

    // Get variables

    let objects = th.propertyValues.get(action, 'object')
    objects = objects.map(x => x.object.value)

    let targetCollections = th.propertyValues.get(action, 'targetCollection')
    targetCollections = targetCollections.map(x => x.object.value)

    // Execute action
    let results = []
    for(let targetCollection of targetCollections){

        let result = targetCollection
        
        for(let object of objects){
            result = lh.delete(result, object)
        }
        results.push(result)
    }
    
    action = th.value.set(action, 'result', results)

    // Set action status
    action = th.value.set(action, 'actionStatus', "CompletedActionStatus")

    // Return
    return action
    
}

function executeReplaceAction(action){
    /**
     * Delete an item from the list
     */



    // Error handling
    if(h.isNull(action?.object)){
        action.actionStatus = 'FailedActionStatus'
        action.error = 'Missing object'
        return action
    }

    if(h.isNull(action?.targetCollection)){
        action.actionStatus = 'FailedActionStatus'
        action.error = 'Missing targetCollection'
        return action
    }

    // Get 
    let replacers = th.propertyValues.get(action, 'replacer')
    replacers = replacers.map(x => x.object.value)

    let replacees = th.propertyValues.get(action, 'replacee')
    replacees = replacees.map(x => x.object.value)

    let targetCollections = th.propertyValues.get(action, 'targetCollection')
    targetCollections = targetCollections.map(x => x.object.value)

    let toPosition = th.value.get(replacers?.[0], 'toPosition')

    // Execute action
    
    let results = []
    
    for(let targetCollection of targetCollections){

        let result = targetCollection
        let tempToPosition = toPosition || 0
        
        for(let replacee of replacees){
            result = lh.delete(result, replacee)
        }

        for(let replacer of replacers){
            result = lh.insert(result, replacer, tempToPosition)    
            tempToPosition += 1
        }
        results.push(result)
        
    }
  
    action = th.value.set(action, 'result', results)

    
    // Set action status
    action = th.value.set(action, 'actionStatus', "CompletedActionStatus")
    
    // Return
    return action

}