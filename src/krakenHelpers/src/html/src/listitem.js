
import { actionMenu } from './actionMenu.js';
import {line } from './line.js'


export function listitem(itemContent, prefixes){


    prefixes = prefixes || [];

    let prefix = prefixes.join('.')

    if(prefix != ''){
        prefix = prefix + '.'
    }
    
    itemContent = itemContent || line(prefixes.concat(['item']))
    

    return `

        <div class=" mt-1 mb-1">
            <nav>
                <div class="row d-flex align-items-center">
    
                    <div class="col col-auto order-1 krSelected justify-content-center text-center" >
                        <div class="form-check justify-content-center text-center">
                            <input 
                            class="form-check-input checkboxes"
                            type="checkbox" 
                            value="" 
                            id="checked_{{${prefix}item.@type}}_{{${prefix}item.@id}}" 
                            name="checked_{{${prefix}item.@type}}_{{${prefix}item.@id}}" 
                            >
                        </div>
                    </div>
    
                        
                    <div class="col col-auto order-2 order-sm-3 text-center">
                        {{ ${prefix}position }}
                    </div>
                    
    
                     <div class="col col-12 col-sm-1 flex-sm-grow-1 order-5 order-sm-3" >
                        <main>
                            ${itemContent}
                        </main>
                    </div>
                
                    
                    <div class="col col-auto order-3 order-sm-4 ms-auto text-end">
                        ${actionMenu(prefixes)}
                    </div>
        
                </div> 
        
                <div class="row">
        
                    <div class="col col-sm-3">
                    </div>
        
                    <div class="col col-sm-3">
                    </div>
        
                    <div class="col col-sm-3">
                    </div>
        
                </div> 
            </nav>
        </div>
    
    
    `

    
}