import { krakenAnalysisHelpers } from "./krakenAnalysisHelpers.js";
import { krakenDotNotationHelpers } from "./krakenDotNotationHelpers.js";

export const krakenTemplateHelpers = {
    get: replacePlaceholders,
    replacePlaceholders: replacePlaceholders,
    render: replacePlaceholders,
};

function replacePlaceholders(template, record) {
    template = replacePlaceholdersLists(template, record);
    template = replacePlaceholdersValues(template, record);
    return template;
}

function replacePlaceholdersLists(template, record) {
    // Replace simple {{name}} placeholders

    console.log(template);

    console.log(typeof template);
    if (!template || template == null || template === "") {
        return template;
    }

    while (template.includes("{{ ")) {
        template = template.replace("{{ ", "{{");
    }

    while (template.includes(" }}")) {
        template = template.replace(" }}", "}}");
    }

    while (template.includes("{{# ")) {
        template = template.replace("{{# ", "{{#");
    }

    while (template.includes("{{/ ")) {
        template = template.replace("{{/ ", "{{/");
    }

    while (template.includes("{{#")) {
        // Get last
        let parts = template.split("{{#");
        let propertyContent = parts[parts.length - 1];
        let contentBefore = parts.slice(0, parts.length - 1).join("{{#");

        let propertyID = propertyContent.split("}}")[0];
        let valueContentItems = propertyContent.split("}}");
        valueContentItems = valueContentItems.slice(1);
        let valueContent = valueContentItems.join("}}");

        let content = valueContent.split("{{/" + propertyID)[0];

        let contentAfter = valueContent
            .split("{{/" + propertyID + "}}")
            .slice(1)
            .join("{{/");

        // Get values
        let values = krakenDotNotationHelpers.getValue(propertyID, record);
        if (!Array.isArray(values)) {
            values = [values];
        }

        let partsContent = "";
        for (let i = 0; i < values.length; i++) {
            let value = values[i];
            let tempRecord = JSON.parse(JSON.stringify(record));
            tempRecord = krakenDotNotationHelpers.setValue(
                tempRecord,
                propertyID,
                value,
            );
            partsContent += replacePlaceholdersValues(content, tempRecord);
        }

        template =
            String(contentBefore) + String(partsContent) + String(contentAfter);
    }

    return template;
}

function replacePlaceholdersValues(template, record) {
    // Replaces placeholders {{ }} by value from record
    // Looks for {{ property1.property2 | command:propertyID }}

    let content = template.replace(/{{(.*?)}}/g, (match, keyString) => {
        let value = _getValue(keyString, record);
        return value; // Replace with value
    });

    content = content.replace("  ", " ");
    return content;
}

function _getValue(content, record) {
    if (!content || content === null || content === "") {
        return null;
    }
    if (!record || record === null || record === "") {
        return null;
    }

    let keyPath = _getKeyPath(content);

    let values = krakenDotNotationHelpers.getValue(keyPath, record);

    let command = _getCommand(content);

    let commandProperty = _getCommandProperty(content);

    // If command exists, retrive command
    if (
        command &&
        command != null &&
        commandProperty &&
        commandProperty != null
    ) {
        values = krakenAnalysisHelpers?.[command](values, commandProperty);
    }

    return values;
}

function _getKeyPath(value) {
    if (!value || value === null || value === "") {
        return null;
    }

    let keyString = value.trim();
    if (!keyString || keyString === null || keyString === "") {
        return null;
    }

    // Get key
    let key = keyString.split("|")[0];
    key = key.trim(); // Remove any surrounding whitespace
    if (!key || key === null || key === "") {
        return "";
    }

    return key;
}

function _getCommand(value) {
    if (!value || value === null || value === "") {
        return null;
    }

    let keyString = value.trim();
    if (!keyString || keyString === null || keyString === "") {
        return null;
    }

    // Get commandSection
    let commandSection = keyString.split("|")?.[1] || null;
    if (!commandSection || commandSection === null || commandSection === "") {
        return null;
    }

    commandSection = commandSection.trim(); // Remove any surrounding whitespace
    if (!commandSection || commandSection === null || commandSection === "") {
        return null;
    }

    // Get command
    let command = commandSection.split(":")?.[0];
    if (!command || command === null || command === "") {
        return null;
    }
    command = command.trim();
    if (!command || command === null || command === "") {
        return null;
    }

    return command;
}

function _getCommandProperty(value) {
    if (!value || value === null || value === "") {
        return null;
    }

    let keyString = value.trim();
    if (!keyString || keyString === null || keyString === "") {
        return null;
    }

    // Get commandSection
    let commandSection = keyString.split("|")?.[1] || null;
    if (!commandSection || commandSection === null || commandSection === "") {
        return null;
    }

    commandSection = commandSection.trim(); // Remove any surrounding whitespace
    if (!commandSection || commandSection === null || commandSection === "") {
        return null;
    }

    // Get command
    let commandProperty = commandSection.split(":")?.[1];
    if (
        !commandProperty ||
        commandProperty === null ||
        commandProperty === ""
    ) {
        return null;
    }
    commandProperty = commandProperty.trim();
    if (
        !commandProperty ||
        commandProperty === null ||
        commandProperty === ""
    ) {
        return null;
    }

    return commandProperty;
}
