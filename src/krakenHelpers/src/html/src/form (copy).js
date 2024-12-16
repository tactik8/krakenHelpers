
import { krakenBaseHelpers as h} from '../../base/krakenBaseHelpers.js'


export function form(record){


   

    
    return `


        {{#potentialAction}}


            <form>
                
                <div class="mb-3">

                
                {{#potentialAction | transpose: }}
                
                
                    {{#potentialAction | filter:value.@type=PropertyValueSpecification}}

                            
                                <label for="exampleInputEmail1" class="form-label text-capitalize mt-3">
                                    {{potentialAction.value.valueName}}
                                </label>
                          
                                <input 
                                type="text" 
                                class="form-control" 
                                 value="{{url}}"
                                id="{{potentialAction.value.valueName}}" 
                                aria-describedby="emailHelp"
            
                                
                                {{#potentialAction.value.multipleValues | filter multipleValues=false }}
                                    multiple
                                {{/potentialAction.value.multipleValues}}
            
                                {{#potentialAction.value.readonlyValue | filter multipleValues=true }}
                                    readonly 
                                {{/potentialAction.value.readonlyValue}}
            
                                
                                {{#potentialAction.value.valuePattern}}
                                    pattern="{{potentialAction.value.valuePattern}}"
                                {{/potentialAction.value.valuePattern}}
            
                                {{#potentialAction.value.valueMaxLength}}
                                    maxLength="{{potentialAction.value.valueMaxLength}}"
                                {{/potentialAction.value.valueMaxLength}}
            
                                {{#potentialAction.value.minValue}}
                                    min="{{potentialAction.value.minValue}}"
                                {{/potentialAction.value.minValue}}
                        
                                {{#potentialAction.value.maxValue}}
                                    max="{{potentialAction.value.maxValue}}"
                                {{/potentialAction.value.maxValue}}
            
                                {{#potentialAction.value.stepValue}}
                                    max="{{potentialAction.value.stepValue}}"
                                {{/potentialAction.value.stepValue}}
                        
                                
                                >
                    
                    {{/potentialAction}}

                     
                {{/potentialAction}}

            </div>
                
            <button type="submit" class="btn btn-primary">{{potentialAction.name}}</button>
        
        </form>
                
    {{/potentialAction}}
                
    
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