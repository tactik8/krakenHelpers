
import { actionMenu } from './actionMenu.js';

import { listitem } from './listitem.js';
import { krakenBaseHelpers as h} from '../../base/krakenBaseHelpers.js'


export function itemlist(classlist, classlistListItem, content, prefixes=[]){


    // Handle classes
    let classes = h.toArray(classlist).join(' ')


    //
    prefixes = prefixes || [];

    prefixes = prefixes.filter(x => x !== undefined && x !== null)
    let prefix = prefixes.join('.')

    if(prefix != ''){
        prefix = prefix + '.'
    }



    let id = 'checkbox_' + String(crypto.randomUUID())
    
    let result = `

        <div class="container checkboxParent ${classes || ''}">

            <div class="row border-top border-bottom align-items-center" >


                <div class="col col-auto ">
                    <div class="form-check justify-content-center text-center">
                        <input 
                        id="${id}"
                        class="form-check-input" 
                        type="checkbox" 
                        value="" 
                        onClick="console.log('click'); for(let i of this.closest('.checkboxParent').parentElement.querySelectorAll('.checkboxes')){i.checked = this.checked};"
                        >
                    </div>

                </div>
                
                <div class="col col-auto ">
                    {{${prefix}name}}
                </div>

                <div class="col col-auto ms-auto">
                    ${actionMenu(prefixes)}
                </div>

            </div>

        
            {{ #itemListElement }}

                
                   ${ listitem(classlistListItem, content, prefixes.concat(['itemListElement'])) }
              
               
            {{ /itemListElement }}

                
            <div class="row mt-2 mb-2 border-bottom align-items-center">

            </div>

        </div>

    
    `



    return result

    
    
}