import { krakenHelpersLight as h } from "../krakenHelpersLight.js";
import { krakenAnalysisHelpers } from "./krakenAnalysisHelpers.js";

export const krakenTemplateLiveHelpers = {
    get: replacePlaceholders,
    replacePlaceholders: replacePlaceholders,
    render: replacePlaceholders,
};

function replacePlaceholders(template) {

    template = addThing(template)
    
    template = replacePlaceholdersLists(template);
    
    template = replacePlaceholdersValues(template);
    return template;
}


function addThing(template){

    template = `<span class="krThing">${template}</span>`
    return template
    
}

function replacePlaceholdersLists(template) {
    // Replace simple {{name}} placeholders


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


        
        let count = 0
        for (let k of propertyID.split('.')) {
            if(count != 0){
                values += `<span class="krThing">`;
            }
            contentBefore = String(contentBefore) + `<span class="krProperty" data-propertyID="${k}">`;
            count += 1
        }

        count = 0
        for (let k of propertyID.split('.')) {
            contentAfter = `</span>` + String(contentAfter);
            if(count != 0){
                values += `</span>`;
            }
            count += 1
        }
        
       

        template = String(contentBefore) + `<span class="krPropertyBody">` + String(content) + `</span>` + String(contentAfter);
    }

    return template;
}

function replacePlaceholdersValues(template) {
    // Replaces placeholders {{ }} by value from record
    // Looks for {{ property1.property2 | command:propertyID }}

    let content = ''
    content += template.replace(/{{(.*?)}}/g, (match, keyString) => {

        
        let value = _getValue(keyString);
        return value
    });

    content = content.replace("  ", " ");
    return content;
}

function _getValue(content) {
    if (!content || content === null || content === "") {
        return null;
    }
   

    let keyPath = _getKeyPath(content);

    let keyPaths = keyPath.split(".");

    let values = "";
    let count = 0
    for (let k of keyPaths) {
        if(count != 0){
            values += `<span class="krThing">`;
        }
        values += `<span class="krProperty" data-propertyID="${k}">`;
        count += 1
        
    }

    count = 0
    for (let k of keyPaths) {
        values += "</span>";
        if(count != 0){
            values += `</span>`;
        }
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
