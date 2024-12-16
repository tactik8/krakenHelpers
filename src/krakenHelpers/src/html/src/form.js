
import { krakenBaseHelpers as h} from '../../base/krakenBaseHelpers.js'


export function form(record){


   

    
    return `


     


            <form>
                
                <div class="mb-3">

                
                {{#transpose: }}
                    
                    {{#filter:value.@type=PropertyValueSpecification}}

                        <!-- for checkbox -->
                        {{#value | filter:_headingHtmlInputType=checkbox}}

                            <div class="form-check mt-3">
                                <input 
                                class="form-check-input " 
                                type="checkbox" value="" 
                                id="{{value.valueName}}"
                                {{#value | filter:required=true }}
                                    required 
                                {{/value}}
                                >
                                <label 
                                class="form-check-label" 
                                for="{{value.@id}}"
                                >
                                {{value._headingDescription}}
                                </label>
                            </div>
                            
                        {{/value}}


                        {{#value | filter:_headingHtmlInputType=ne checkbox}}

                            
                                <label for="exampleInputEmail1" class="form-label text-capitalize mt-3">
                                    {{value.valueName}}
                                </label>
                          
                                <input 
                                type="{{value._headingHtmlInputType}}"
                                class="form-control" 
                                
                                
                                value="{{value.defaultValue}}"
                                id="{{value.valueName}}" 
                                aria-describedby="emailHelp"
            
                                
                                {{#value | filter:multipleValues=false }}
                                    multiple
                                {{/value}}
            
                                {{#value | filter:readonlyValue=true }}
                                    readonly 
                                {{/value}}
                    
                                {{#value | filter:required=true }}
                                    required 
                                {{/value}}


                                {{#value.valuePattern}}
                                    pattern="{{value.valuePattern}}"
                                {{/value.valuePattern}}
            
                                {{#value.valueMaxLength}}
                                    maxLength="{{value.valueMaxLength}}"
                                {{/value.valueMaxLength}}
            
                                {{#value.minValue}}
                                    min="{{value.minValue}}"
                                {{/value.minValue}}
                        
                                {{#value.maxValue}}
                                    max="{{value.maxValue}}"
                                {{/value.maxValue}}
            
                                {{#value.stepValue}}
                                    max="{{value.stepValue}}"
                                {{/value.stepValue}}
                        
                                
                                >
                         {{/value}}
                    
                    {{/filter}}

                     
                {{/transpose}}

            </div>
                
            <button type="submit" class="btn btn-primary">{{name}}</button>
        
        </form>
                
                
    
    `
    
}




function getPropertyValuesSpecifications(record){


    let pvs
    for(let k in record){

        if (k.includes('_input')){
            pvs = pvs.merge(history.toArray(record[k]))
        }
        
    }

    return pvs
    
    
}