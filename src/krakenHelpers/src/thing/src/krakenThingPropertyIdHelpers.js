
import { krakenBaseHelpers as h} from '../../base/krakenBaseHelpers.js'


export const krakenThingPropertyIdHelpers = {
    /**
     * Helpers for command property strings
     * example : order.items | sumProduct(price, quantity) | round
     */

    getValue: getValue
    
}



function getValue(record, propertyString){
    /**
     * Returns the value of a property string
     * @param {Object} record
     * @param {String} propertyString
     * @returns {Object} The value of the property
     */

    let commands = getCommandsFromPropertyString(propertyString)

    console.log(commands)
    let values = executeCommands(commands, record)

    return values
    
}



function getPropertyIdFromPropertyString(propertyString){
    /**
     * Returns the property id from a property string
     * @param {String} propertyString
     * @returns {String} The property id
     * @example person.name | first -> person.name
     */

    let v = propertyString.trim()

    let parts = v.split('|')
    let propertyID = parts[0]
    propertyID = propertyID.trim()
    
    return propertyID
    
}


function getCommandsFromPropertyString(propertyString){
    /**
     * Returns the commands from a property string
     * @param {String} propertyString
     * @returns {Array} The commands
     */


    // Get commands
    let parts = propertyString.split('|')

    let commands = []
    let counter = 0 
    for(let x of parts){
        let command = getCommandRecordFromPropertyString(x)
        command.position = counter
        commands.push(command)
        counter += 1
    }
    
    return commands
}


function executeCommands(commands, record){
    /**
     * Executes the commands on the record
     * @param {Array} commands
     * @param {Object} record
     * @returns {Object} The record
     */

    let r = record
    for(let x of commands){
        r = executeCommand(x, r)
        console.log('r', r)
    }
    
    return r
    
}



function executeCommand(command, record){
    /**
     * Executes a command on a record
     * @param {Object} command
     * @param {Object} record
     * @returns {Object} The result
     */


    // If not command name the assume property id for first item
    if(h.isNull(command?.propertyIDs) && command.position == 0){
        command.propertyIDs = [command.operation]
        command.operation = null
    }

    // If no operation, simply retrive values
    if(h.isNull(command?.operation) && command.propertyIDs.length == 1){
        return h.dot.get(command.propertyIDs?.[0], record)
    }

    // if both
    if(h.isNotNull(command?.operation) ){
        return h.analysis?.[command?.operation](record, command.propertyIDs?.[0], command.propertyIDs?.[1],command.propertyIDs?.[2], command.propertyIDs?.[3])
    }


    return 'na'
}


function getCommandRecordFromPropertyString(propertyString){


    let command = {
        "name": "command",
        "position": null,
        "propertyIDs": getPropertyIdFromString(propertyString),
        "operation": getOperationFromString(propertyString)
    }

    return command

    
}

function getOperationFromString(propertyString){
    /**
     * Returns the command name from a property string
     * @param {String} propertyString
     * @returns {String} The property id
     * @example 'order.items | sumProduct: quantity, price' -> 'sumProduct'
     */

    
    let v = propertyString.trim()

   
    let commandString = propertyString

    let commandName = commandString.split(':')?.[0] || null

    if(h.isNull(commandName)){ return null }
    
    commandName = commandName.trim()

    return commandName

}


function getPropertyIdFromString(propertyString){
    /**
     * Returns the command property id from a property string
     * @param {String} propertyString
     * @returns {Array} The property ids
     * @example 'order.items | sumProduct: quantity, price' -> ['quantity', 'price']
     */


    let v = propertyString.trim()

    
    let commandString = propertyString

    let commandPropertyIDs = commandString.split(':')?.[1] || null

    if(h.isNull(commandPropertyIDs)){ return [] }

    commandPropertyIDs = commandPropertyIDs.split(',')

    commandPropertyIDs = commandPropertyIDs.map(x => x.trim())

    return commandPropertyIDs

}
