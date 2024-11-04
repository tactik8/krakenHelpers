import { krakenBaseHelpers as h } from "../../base/krakenBaseHelpers.js";


export const krakenThingPropertyValueSpecificationHelpers = {
    test: test,
    testDetailed: testDetailed,
    tests: {
        valueRequired: _testConditionValueRequired,
        multipleValue: _testConditionMultipleValues,
        valueMinLength: _testConditionValueMinLength,
        valueMaxLength: _testConditionValueMaxLength,
        valuePattern: _testConditionValuePattern,
        minValue: _testConditionMinValue,
        maxValue: _testConditionMaxValue,
        stepValue: _testConditionStepValue,
    },
    new: {
        eq: newEqCondition,
        ne: newNeCondition,
        lt: newLtCondition,
        gt: newGtCondition,
        minLength: newMinLengthCondition,
        maxLength: newMaxLengthCondition,
        required: newRequiredCondition,
        contains: newContainsCondition,
        notContains: newNotContainsCondition,
    },
    extract: {
        fromThing: extractPvsFromThingRecord,
        fromFilter: extractPvsFromFilterRecord,
    },
    export: {
        toRecord: exportPvsToRecord,
    },
    record: getSampleRecord,
};

// -----------------------------------------------------
//  Test - All
// -----------------------------------------------------
function test(record, pvs_or_filter_record, detailed = false) {
    /**
     * Test if a record meets the conditions
     * @param {Object} record
     * @param {Object} pvs_or_filter_record
     * @param {boolean} returns detailed result if true
     * @returns {boolean|Object} true/false if detailed=false, otherwise action object
     *
     */

    let result = testDetailed(record, pvs_or_filter_record);

    if (detailed == false) {
        return result.isSuccess() || false;
    } else {
        return result;
    }
}

function testDetailed(record, pvs_or_filter_record) {
    /**
     * Test if a record meets the conditions
     * @param {Object} record
     * @param {Object} pvs_or_filter_record
     * @returns {Object} action object
     */

    // -----------------------------------------------------
    //  Format and combine pvss
    // -----------------------------------------------------

    let pvs = extractPvsFromFilterRecord(pvs_or_filter_record);

    // Add pvs from record itself (xxx-input)
    pvs = pvs.concat(extractPvsFromThingRecord(record)); // Get pvs from record itself
    // run tests
    return testRecord(record, pvs);
}

function testRecord(record, pvs) {
    // Takes in record and check if meet pvs

    let name = `Test pvs conditions for record ${record?.["@type"] || record?.record_type || ""} ${record?.["@id"] || record?.record_id || ""}`;
    let action = new h.classes.Action(name);
    action.object = record;
    action.instrument = [];
    action.result = [];

    // -----------------------------------------------------
    //  Test pvs
    // -----------------------------------------------------

    for (let pv of h.toArray(pvs)) {
        let propertyID = pv?.valueName || null;
        if (h.isNotNull(propertyID)) {
            let a = testPropertyValue(record, propertyID, pv);
            action.instrument.push(a);
        }
    }

    // Evaluate if tests are successful
    let failedTests = action.instrument.filter((x) => x.isSuccess() == false);

    if (failedTests.length == 0) {
        action.setCompleted();
    }

    if (failedTests.length == 1) {
        action.setFailed(failedTests[0].error);
    }

    if (failedTests.length > 1) {
        action.setFailed(`${failedTests.length} tests failed`);
    }

    return action;
}

function testPropertyValue(record, propertyID, pvs) {
    /**
     * Test if record meet pvs condition
     *
     * properties followed by | treat next part as command
     */

    let name = `Test pvs conditions for ${propertyID}`;
    let action = new h.classes.Action(name);
    action.object = record;
    action.instrument = [];
    action.result = [];

    // Clean_up propertyID
    propertyID = propertyID.replace("-input", "");

    // Retrieve values. If propertyCommandString exists
    let values = h.stringOperation.execute(record, propertyID);

    // Begin tests
    let result;

    // Test if multiple values allowed
    result = _testConditionMultipleValues(pvs, propertyID, values);
    action.instrument.push(result);

    if (result.isSuccess() == false) {
        action.setFailed();
        return action;
    }

    // Test for null
    
    if (h.isNull(values)) {    
        result = _testConditionValueNull(pvs, propertyID, values);
        action.instrument.push(result);

        if (result.isSuccess() == false) {
            action.setFailed(result.error);
            return action;
        }
    }

    // Perform for each values
    for (let value of h.toArray(values)) {
        // Test if value is required - skip to next value if value null and not required
        result = _testConditionValueRequired(pvs, propertyID, value);
        action.instrument.push(result);
        if (result.isSuccess() == true && h.isNull(value)) {
            continue;
        }

        // test min max
        result = _testConditionMinValue(pvs, propertyID, value);

        action.instrument.push(_testConditionMinValue(pvs, propertyID, value));
        action.instrument.push(_testConditionMaxValue(pvs, propertyID, value));
        action.instrument.push(_testConditionStepValue(pvs, propertyID, value));

        action.instrument.push(
            _testConditionValueMinLength(pvs, propertyID, value),
        );
        action.instrument.push(
            _testConditionValueMaxLength(pvs, propertyID, value),
        );

        action.instrument.push(
            _testConditionValuePattern(pvs, propertyID, value),
        );
    }

    // Evaluate if tests are successful
    let failedTests = action.instrument.filter((x) => x.isSuccess() == false);

    if (failedTests.length == 0) {
        action.setCompleted();
    }

    if (failedTests.length == 1) {
        action.setFailed(failedTests[0].error);
    }

    if (failedTests.length > 1) {
        action.setFailed(`${failedTests.length} tests failed`);
    }

    return action;
}

// -----------------------------------------------------
//  Test - Value required
// -----------------------------------------------------

function _testConditionValueRequired(pvs, propertyID, value) {
    // Test valueRequired

    let propertyConditionID = "valueRequired";
    let name = `PropertyValue Condition Test ${propertyConditionID} for ${propertyID}`;
    let action = new h.classes.Action(name);
    action.object = {
        "@type": "PropertyValue",
        propertyID: propertyID,
        value: value,
    };
    action.instrument = pvs;

    try {
        // Get propertyConditionValue
        let propertyConditionValue = h.dot.get(propertyConditionID, pvs);

        // Return true if property condition not set
        if (h.isNull(propertyConditionValue)) {
            action.setCompleted();
            return action;
        }

        // Return true if property condition not mandatory
        if (propertyConditionValue == false) {
            action.setCompleted();
            return action;
        }

        // Return false if property condition is mandatory and no value
        if (propertyConditionValue == true && h.isNull(value)) {
            action.setFailed("Value required, but no value found");
            return action;
        }

        // Return true if property condition is mandatory and  value
        if (propertyConditionValue == true && h.isNotNull(value)) {
            action.setCompleted();
            return action;
        }

        // Catch all
        action.setFailed("Unknown property condition");
    } catch (error) {
        action.setFailed("Error - " + String(error));
        return action;
    }
}

function _testConditionMultipleValues(pvs, propertyID, values) {
    // Test valueRequired

    let propertyConditionID = "multipleValues";
    let name = `PropertyValue Condition Test ${propertyConditionID} for ${propertyID}`;
    let action = new h.classes.Action(name);
    action.object = {
        "@type": "PropertyValue",
        propertyID: propertyID,
        value: values,
    };
    action.instrument = pvs;

    try {
        // Set values to array
        values = h.toArray(values);

        // Get propertyConditionValue
        let propertyConditionValue = h.dot.get(propertyConditionID, pvs);

        // Return true if no value
        if (h.isNull(values)) {
            action.setCompleted()
            return action;
        }

        // Return false if property condition not set and multiple values (default false)
        if (h.isNull(propertyConditionValue) && values.length > 1) {
            action.setFailed(
                "Multiple values not permitted, found ${values.length}",
            );
            return action;
        }

        // Return false if property condition false and multiple values (default false)
        if (propertyConditionValue == false && values.length > 1) {
            action.setFailed(
                "Multiple values not permitted, found ${values.length}",
            );
            return action;
        }

        // Return true
        action.setCompleted();
        return action;

        // Catch all
        action.setFailed("Unknown property condition");
    } catch (error) {
        action.setFailed("Error - " + String(error));
        return action;
    }
}

// -----------------------------------------------------
//  Test - Value min max step
// -----------------------------------------------------

function _testConditionMinValue(pvs, propertyID, value) {
    let propertyConditionID = "minValue";
    let name = `PropertyValue Condition Test ${propertyConditionID} for ${propertyID}`;
    let action = new h.classes.Action(name);
    action.object = {
        "@type": "PropertyValue",
        propertyID: propertyID,
        value: value,
    };
    action.instrument = pvs;

    try {
        // Get propertyConditionValue
        let propertyConditionValue = h.dot.get(propertyConditionID, pvs);

        // Return true if property condition not set
        if (h.isNull(propertyConditionValue)) {
            action.setCompleted();
            return action;
        }

        // Return false if propertyCondition not a number
        if (
            h.number.isValid(propertyConditionValue) == false &&
            h.date.isDate(propertyConditionValue) == false
        ) {
            action.setFailed("Value is not a number or date");
            return action;
        }

        // Return false if no value
        if (h.isNull(value)) {
            action.setFailed("No value");
            return action;
        }

        // Return false if value not a number
        if (h.number.isValid(value) == false && h.date.isDate(value) == false) {
            action.setFailed("Value is not a number");
            return action;
        }

        // Return true if value meet condition
        if (value >= propertyConditionValue) {
            action.setCompleted();
            return action;
        } else {
            action.setFailed(
                `Value (${value}) is less than minimum ${propertyConditionValue}`,
            );
            return action;
        }

        // Catch all
        action.setFailed("Unknown property condition");
    } catch (error) {
        action.setFailed("Error - " + String(error));
        return action;
    }
}

function _testConditionMaxValue(pvs, propertyID, value) {
    let propertyConditionID = "maxValue";
    let name = `PropertyValue Condition Test ${propertyConditionID} for ${propertyID}`;
    let action = new h.classes.Action(name);
    action.object = {
        "@type": "PropertyValue",
        propertyID: propertyID,
        value: value,
    };
    action.instrument = pvs;

    try {
        // Get propertyConditionValue
        let propertyConditionValue = h.dot.get(propertyConditionID, pvs);

        // Return true if property condition not set
        if (h.isNull(propertyConditionValue)) {
            action.setCompleted();
            return action;
        }

        // Return false if property condition not a number

        if (
            h.number.isValid(propertyConditionValue) == false &&
            h.date.isDate(propertyConditionValue) == false
        ) {
            action.setFailed("Constraint is not a date or number");
            return action;
        }

        // Return false if no value
        if (h.isNull(value)) {
            action.setFailed("No value");
            return action;
        }

        // Return false if value not a number
        if (h.number.isValid(value) == false && h.date.isDate(value) == false) {
            action.setFailed("Value is not a number");

            return action;
        }

        // Return true if value meet condition
        if (value <= propertyConditionValue) {
            action.setCompleted();
            return action;
        } else {
            action.setFailed(
                `Value (${value}) is greater than maximum ${propertyConditionValue}`,
            );
            return action;
        }

        // Catch all
        action.setFailed("Unknown property condition");
    } catch (error) {
        action.setFailed("Error - " + String(error));
        return action;
    }
}

function _testConditionStepValue(pvs, propertyID, value) {
    let propertyConditionID = "stepValue";
    let name = `PropertyValue Condition Test ${propertyConditionID} for ${propertyID}`;
    let action = new h.classes.Action(name);
    action.object = {
        "@type": "PropertyValue",
        propertyID: propertyID,
        value: value,
    };
    action.instrument = pvs;

    try {
        // Get propertyConditionValue
        let propertyConditionValue = h.dot.get(propertyConditionID, pvs);

        // Return true if property condition not set
        if (h.isNull(propertyConditionValue)) {
            action.setCompleted();
            return action;
        }

        // Return false if property condition not a number
        if (h.number.isValid(propertyConditionValue) == false) {
            action.setFailed("Constraint is not a number");
            return action;
        }

        // Return true if property conditionis 0
        if (propertyConditionValue == 0) {
            action.setCompleted();
            return action;
        }

        // Return false if no value
        if (h.isNull(value)) {
            action.setFailed("No value");
            return action;
        }

        // Return false if value not a number
        if (h.number.isValid(value) == false) {
            action.setFailed("Value is not a number");
            return action;
        }

        // Return true if value meet condition
        if (value % propertyConditionValue == 0) {
            action.setCompleted();
            return action;
        } else {
            action.setFailed(
                `Value length (${value}) is not in steps of ${propertyConditionValue}`,
            );
            return action;
        }

        // Catch all
        action.setFailed("Unknown property condition");
    } catch (error) {
        action.setFailed("Error - " + String(error));
        return action;
    }
}

// -----------------------------------------------------
//  Test - value length
// -----------------------------------------------------

function _testConditionValueMinLength(pvs, propertyID, value) {
    let propertyConditionID = "valueMinLength";
    let name = `PropertyValue Condition Test ${propertyConditionID} for ${propertyID}`;
    let action = new h.classes.Action(name);
    action.object = {
        "@type": "PropertyValue",
        propertyID: propertyID,
        value: value,
    };
    action.instrument = pvs;

    try {
        // Get propertyConditionValue
        let propertyConditionValue = h.dot.get(propertyConditionID, pvs);

        // Return true if no property condition
        if (h.isNull(propertyConditionValue)) {
            action.setCompleted();
            return action;
        }

        // Return false if not a number
        if (h.number.isValid(propertyConditionValue) == false) {
            action.setFailed("Constraint is not a number");
            return action;
        }

        // Return false if no value
        if (h.isNull(value)) {
            action.setFailed("No value");
            return action;
        }

        // Return true if value meet condition
        if (value.length >= propertyConditionValue) {
            action.setCompleted();
            return action;
        } else {
            action.setFailed(
                `Value length (${value}) is less than minimum ${propertyConditionValue}`,
            );
            return action;
        }

        // Catch all
        action.setFailed("Unknown property condition");
    } catch (error) {
        action.setFailed("Error - " + String(error));
        return action;
    }
}

function _testConditionValueMaxLength(pvs, propertyID, value) {
    let propertyConditionID = "valueMaxLength";
    let name = `PropertyValue Condition Test ${propertyConditionID} for ${propertyID}`;
    let action = new h.classes.Action(name);
    action.object = {
        "@type": "PropertyValue",
        propertyID: propertyID,
        value: value,
    };
    action.instrument = pvs;

    try {
        // Get propertyConditionValue
        let propertyConditionValue = h.dot.get(propertyConditionID, pvs);

        // Return true if property condition not set
        if (h.isNull(propertyConditionValue)) {
            action.setCompleted();
            return action;
        }

        // Return false if property condition not a number
        if (h.number.isValid(propertyConditionValue) == false) {
            action.setFailed("Constraint is not a number");
            return action;
        }

        // Return false if no value
        if (h.isNull(value)) {
            action.setFailed("No value");
            return action;
        }

        // Return true if value meet condition
        if (value.length <= propertyConditionValue) {
            action.setCompleted();
            return action;
        } else {
            action.setFailed(
                `Value length (${value}) is greater than maximum ${propertyConditionValue}`,
            );
            return action;
        }

        // Catch all
        action.setFailed("Unknown property condition");
    } catch (error) {
        action.setFailed("Error - " + String(error));
        return action;
    }
}

// -----------------------------------------------------
//  Test - Value pattern
// -----------------------------------------------------

function _testConditionValueNull(pvs, propertyID, value) {
    /**
     *
     */
    let propertyConditionID = "valuePattern";
    let name = `PropertyValue Condition Test ${propertyConditionID} for ${propertyID}`;
    let action = new h.classes.Action(name);
    action.object = {
        "@type": "PropertyValue",
        propertyID: propertyID,
        value: value,
    };
    action.instrument = pvs;


    
    
    // Get propertyConditionValue
    let propertyConditionValue = h.dot.get(propertyConditionID, pvs);

    if(propertyConditionValue == 'null'){
        propertyConditionValue = null
    }

        
    // Return true if property condition null
    if (h.isNull(propertyConditionValue) && h.isNull(value)) {
        action.setCompleted();
        return action;
    }

    if (h.isNull(propertyConditionValue) && h.isNotNull(value)) {
        action.setFailed("Value is not null");
        return action;
    }

    action.setCompleted();
    return action;
}

function _testConditionValuePattern(pvs, propertyID, value) {
    let propertyConditionID = "valuePattern";
    let name = `PropertyValue Condition Test ${propertyConditionID} for ${propertyID}`;
    let action = new h.classes.Action(name);
    action.object = {
        "@type": "PropertyValue",
        propertyID: propertyID,
        value: value,
    };
    action.instrument = pvs;

    try {
        // Get propertyConditionValue
        let propertyConditionValue = h.dot.get(propertyConditionID, pvs);
       

        // Return true if property condition not set
        if(h.isNull(propertyConditionValue)){
            action.setCompleted()
            return action
        }

        // Redirect to null test if propertyCondition == 'null'
        if (propertyConditionValue == 'null') {
            return _testConditionValueNull(pvs, propertyID, value);
        }


        // Convert both to string
        value = String(value)
        propertyConditionValue = String(propertyConditionValue)
        
        // Run pattern test

        // Return true if value meet condition
        value = String(value);
        const result = h.regex.test(value, propertyConditionValue);

        // Return true if value meet condition
        if (result == true) {
            action.setCompleted();
            return action;
        } else {
            action.setFailed(
                `Value (${value}) does not meet pattern ${propertyConditionValue}`,
            );
            return action;
        }

        // Catch all
        action.setFailed("Unknown property condition");
    } catch (error) {
        action.setFailed("Error - " + String(error));
        return action;
    }
}

// -----------------------------------------------------
//  Extract
// -----------------------------------------------------

function extractPvsFromThingRecord(records) {
    /**
     * Retriev all pvs (xxx-input) from records
     */
    // Error handling
    if (h.isNull(records)) {
        return [];
    }

    // run on xxx-input
    let pvs = [];

    for (let record of h.toArray(records)) {
        // If already pvsSpecification
        if (record?.["@type"] == "PropertyValueSpecification") {
            pvs.push(record);
            continue;
        }

        // If not, retrieve from record
        for (let key of Object.keys(record)) {
            if (key.includes("-input")) {
                let propertyID = key.replace("-input", "");
                let values = record?.[key];

                for (let value of h.toArray(values)) {
                    if (value?.["@type"] != "PropertyValueSpecification") {
                        value = getSpecificationsFromString(propertyID, value);
                    }
                    value.valueName =
                        value.valueName || propertyID.replace("-input", "");
                    pvs.push(value);
                }
            }
        }
    }

    // return pvs
    return pvs;
}

function extractPvsFromFilterRecord(record) {
    /**
     * Transform normal json record representing conditions to PVS
     * @param {Object} record
     * @returns {Array}
     *
     */

    // Error handling
    if (h.isNull(record)) {
        return [];
    }
    if (record?.["@type"] == "PropertyValueSpecification") {
        return record;
    }

    // Convert record to dot notation
    let dotRecord = h.json.objectToDotNotation(record)

    // Iterate through key values and get specifications
    let pvs = [];
    for (let k of Object.keys(dotRecord)) {
        let content = dotRecord[k];

        if (content == null) {
            pvs.push(newNullCondition(k, ""));
        }

        let newPvs = h
            .toArray(content)
            .map((x) => getSpecificationsFromString(k, x));
        pvs = pvs.concat(newPvs);
    }

    // Return PVS
    return pvs;
}

// -----------------------------------------------------
//  Comment
// -----------------------------------------------------

function getSpecificationsFromString(propertyID, inputContent) {
    /**
     * Get specifications from a string
     * eq, ne, gt, lt, minLength, maxLength, required, contains, notContains
     * @param {String} propertyID
     * @param {String} inputContent
     * @returns {Array}
     */

    // Error handling
    //if(h.isNull(inputContent)){ return null }

    // Get specifications
    let specifications = [];

    // Pre format
    let content = String(inputContent).trim();

    let condition;


    
    
    // null
    if (h.isNull(content)) {
        let value = content.split(condition)[1];
        value = value.trim();
        specifications.push(newNullCondition(propertyID, value));
    }

    // eq
    condition = "eq ";
    if (content.startsWith(condition)) {
        let value = content.split(condition)[1];
        value = value.trim();
        specifications.push(newMinLengthCondition(propertyID, value));
    }

    // ne
    condition = "ne ";
    if (content.startsWith(condition)) {
        let value = content.split(condition)[1];
        value = value.trim();
        specifications.push(newNeCondition(propertyID, value));
    }

    // lt
    condition = "lt ";
    if (content.startsWith(condition)) {
        let value = content.split(condition)[1];
        value = value.trim();
        specifications.push(newLtCondition(propertyID, value));
    }

    // gt
    condition = "gt ";
    if (content.startsWith(condition)) {
        let value = content.split(condition)[1];
        value = value.trim();
        specifications.push(newGtCondition(propertyID, value));
    }

    // minLength
    condition = "minLength ";
    if (content.startsWith(condition)) {
        let value = content.split(condition)[1];
        value = value.trim();
        specifications.push(newMinLengthCondition(propertyID, value));
    }

    // maxLength
    condition = "maxLength ";
    if (content.startsWith(condition)) {
        let value = content.split(condition)[1];
        value = value.trim();
        specifications.push(newMaxLengthCondition(propertyID, value));
    }

    // required
    condition = "required ";
    if (content.startsWith(condition)) {
        let value = content.split(condition)[1];
        value = value.trim();
        specifications.push(newRequiredCondition(propertyID, value));
    }

    // contains
    condition = "contains ";
    if (content.startsWith(condition)) {
        let value = content.split(condition)[1];
        value = value.trim();
        specifications.push(newContainsCondition(propertyID, value));
    }

    // notContains
    condition = "notContains ";
    if (content.startsWith(condition)) {
        let value = content.split(condition)[1];
        value = value.trim();
        specifications.push(newNotContainsCondition(propertyID, value));
    }

    // Exception - if nothing found, treat as eq
    if (specifications.length == 0 && h.isNotNull(content)) {
        let value = content.trim();
        specifications.push(newEqCondition(propertyID, value));
    }

    // Combine into one record
    let record = {};
    record["@type"] = "PropertyValueSpecification";
    record["@id"] = String(crypto.randomUUID());

    for (let r of specifications) {
        for (let key of Object.keys(r)) {
            if (h.isNotNull(r?.[key])) {
                record[key] = r?.[key];
            }
        }
    }

    return record;
}

// -----------------------------------------------------
//  Get new conditions
// -----------------------------------------------------

function newEqCondition(propertyID, value) {
    /**
     * Get new eq condition
     * @param {String} propertyID
     * @param {String} value
     * @returns {Object}
     */

    value = h.number.toNumber(value) || value;

    if (h.number.isValid(value) == true) {
        let pv = {
            "@type": "PropertyValueSpecification",
            minValue: value,
            maxValue: value,
            valueName: propertyID,
        };
        return pv;
    } else {
        let pv = {
            "@type": "PropertyValueSpecification",
            valuePattern: `/^${value}$/`,
            valueName: propertyID,
        };
        return pv;
    }
}

function newNeCondition(propertyID, value) {
    let pv = {
        "@type": "PropertyValueSpecification",
        valuePattern: `/^(?!${value}$).+/`,
        valueName: propertyID,
    };
    return pv;
}

function newLtCondition(propertyID, value) {
    // Convert value to number
    try {
        value = Number(value);
    } catch {
        return null;
    }

    let pv = {
        "@type": "PropertyValueSpecification",
        maxValue: value,
        valueName: propertyID,
    };
    return pv;
}

function newGtCondition(propertyID, value) {
    // Convert value to number
    try {
        value = Number(value);
    } catch {
        return null;
    }

    let pv = {
        "@type": "PropertyValueSpecification",
        minValue: value,
        valueName: propertyID,
    };
    return pv;
}

function newMinLengthCondition(propertyID, value) {
    // Convert value to number
    try {
        value = Number(value);
    } catch {
        return null;
    }

    let pv = {
        "@type": "PropertyValueSpecification",
        valueMinLength: value,
        valueName: propertyID,
    };
    return pv;
}

function newMaxLengthCondition(propertyID, value) {
    // Convert value to number
    try {
        value = Number(value);
    } catch {
        return null;
    }

    let pv = {
        "@type": "PropertyValueSpecification",
        valueMaxLength: value,
        valueName: propertyID,
    };
    return pv;
}

function newRequiredCondition(propertyID, value) {
    // Convert value to number
    try {
        value = Bool(value);
    } catch {
        return null;
    }

    let pv = {
        "@type": "PropertyValueSpecification",
        valueRequired: true,
    };
    return pv;
}

function newContainsCondition(propertyID, value) {
    let pv = {
        "@type": "PropertyValueSpecification",
        valuePattern: `/${value}/`,
        valueName: propertyID,
    };
    return pv;
}

function newNotContainsCondition(propertyID, value) {
    let pv = {
        "@type": "PropertyValueSpecification",
        valuePattern: `/^(?!.*${value}).*$/`,
        valueName: propertyID,
    };
    return pv;
}

function newNullCondition(propertyID, value) {
    let pv = {
        "@type": "PropertyValueSpecification",
        valuePattern: "null",
        valueName: propertyID,
    };
    return pv;
}

// -----------------------------------------------------
//  Export
// -----------------------------------------------------

function exportPvsToRecord(pvs, record) {
    /**
     * Export pvs to record, or adds to record if provided
     */
    // Concatenate in one record
    record = record || {};
    for (let s of pvs) {
        let k = s?.valueName;
        if (h.isNotNull(k)) {
            record[k] = record[k] || [];
            record[k].push(s);
        }
    }

    // Return pv
    return record;
}

// -----------------------------------------------------
//  Comment
// -----------------------------------------------------

function getSampleRecord() {
    let record = {
        "@type": "PropertyValueSpecification",
        valueRequired: true,
        multipleValues: false,
        minValue: 0,
        maxValue: 100,
        valueMinLength: 0,
        valueMaxLength: 100,
        valuePattern: "sss",
        stepValue: 0,
        valueName: "q",
    };

    return record;
}
