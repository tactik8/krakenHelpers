
import { krakenNullHelpers} from './krakenNullHelpers.js'


const h = {
    isNull: krakenNullHelpers.isNull,
    isNotNull: krakenNullHelpers.isNotNull,
    null: krakenNullHelpers
}


export const krakenUriTemplateHelpers = {
    /**
     * uri template helpers
     * Convert to from uri template
     *
     * 
     */


    uriToPvs: convertUriTemplateToSchema,
    pvsToUri: convertSchemaToUriTemplate
    
}





function convertSchemaToUriTemplate(record){
    /**
     * Convert a schema to a uri template
     * 
     */


    let items = []


    let keys = Object.keys(record)



    for(let key of keys){

        let value = record[key]

        let item 


        switch (key){

            case "valueRequired":
                if(value == true){
                    item = `required`
                }
                break;

            case "defaultValue":
                item = `default=${value}`

                break;

            case "valueName":

                item = `name=${value}`
                break;

            case "readonlyValue":

                item = `readonly=${value}`
                break;

            case "multipleValues":

                item = `multiple=${value}`
                break;

            case "valueMinLength":

                item = `minlength=${value}`
                break;

            case "valueMaxLength":

                item = `maxlength=${value}`
                break;

            case "valuePattern":

                item = `pattern=${value}`
                break;

            case "minValue":
                item = `min=${value}`
                break;

            case "maxValue":
                item = `max=${value}`
                break;

            case "stepValue":
                item = `step=${value}`
                break;

            default: 
                break;      

        }

        if(item){
            items.push(item)
        }
    }


    // Filter empty items
    items = items.filter(x => x && x != null)

    // Combine items
    let uriTemplate = items.join(' ')
    

    return uriTemplate



}



function convertUriTemplateToSchema(uriTemplate) {
    /**
     * Converts a uri template to a schema property value specific ation
     * {
            "@type": "PropertyValueSpecification",
            "@id": "86719a5e-c87d-4d69-8920-47e7f59c3ea8",
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
    if (typeof uriTemplate !== 'string') {
        throw new TypeError('uriTemplate must be a string');
    }

    // Extract placeholders from the URI template

    let items = uriTemplate.split(' ')


    let pvs = {
        "@type": "PropertyValueSpecification",

    }

    for(let item of items){

        let key = item.split('=')?.[0] || null
        key=key.trim()
        key = key.toLowerCase()

        let value = item.split('=')?.[1] || null
        value = value || ''
        value=value.trim()


        switch (key){

            case "required":
                value = Boolean(value || true)
                pvs.valueRequired = value
                break;

            case "default":
                value = Boolean(value)
                pvs.defaultValue = value
                break;

            case "name":
                value=value.replaceAll('"', '')
                value=value.replaceAll("'", "")
                if(h.isNotNull(value)){
                    pvs.valueName = value
                }
                break;

            case "readonly":
                value = Boolean(value)
                pvs.readonlyValue = value 
                break;

            case "multiple":
                value = Boolean(value)
                pvs.multipleValues = value 
                break;

            case "minlength":
                value=value.replaceAll('"', '')
                value=value.replaceAll("'", "")
                value = Number(value)
                pvs.valueMinLength = value
                break;

            case "maxlength":
                value=value.replaceAll('"', '')
                value=value.replaceAll("'", "")
                value = Number(value)
                pvs.valueMaxLength = value
                break;

            case "valuePattern":
                value=value.replaceAll('"', '')
                value=value.replaceAll("'", "")
                pvs.valuePattern = value
                break;

            case "min":
                value=value.replaceAll('"', '')
                value=value.replaceAll("'", "")
                value = Number(value)
                pvs.minValue = value
                break;

            case "max":
                value=value.replaceAll('"', '')
                value=value.replaceAll("'", "")
                value = Number(value)
                pvs.maxValue = value
                break;
            case "step":
                value=value.replaceAll('"', '')
                value=value.replaceAll("'", "")
                value = Number(value)
                pvs.stepValue = value
                break;

            default: 
                break;
        }

    }

    // Assign entire content as default value if no value is set
    if(Object.keys(pvs).length <= 1){
        pvs.defaultValue = uriTemplate
    } 

    // Return the PVS
    return pvs


}


