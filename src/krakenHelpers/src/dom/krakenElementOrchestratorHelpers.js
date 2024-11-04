
import { krakenBaseHelpers as h} from '../base/krakenBaseHelpers.js'

import { krakenElementHelpers as eh} from './krakenElementHelpers.js'
import { krakenElementThingHelpers as th} from './krakenElementThingHelpers.js'

import { krakenElementTemplateHelpers } from "./krakenElementTemplateHelpers.js";




export const krakenElementOrchestratorHelpers = {

    initElements: initElements,
    initObserver: initObserver,
    getThings: getThings,
    updateThing: updateThing,
    
}


function initElements(element){
    /**
     * Initializes the orchestrator and the elements under it
     * @returns
     * 
     */

    // Error handling
    element = element || document.body

    //
    return th.init(element)
    
}

function initObserver(element, thingDB){
    /**
     * Initialize observer so if new elements are added to the DOM, they are updated
     * @param {Object} element The element to observe
     * @returns {Object} The observer
     * 
     */

    // Error handling
    element = element || document.body
    
    const config = { attributes: true, childList: true, subtree: true};


    // Callback function to execute when mutations are observed
    const callback = (mutationList, observer) => {
      for (const mutation of mutationList) {

        
        if (mutation.type === "childList") {

            for(let n of mutation.addedNodes){

                // Skip if not thing element
                if(!th.isValid(n)) { continue }

                
                //console.log('Observer - new element added', th.isValid(n), n.tagName)

                let ref = th.ref.get(n)

                //console.log(ref)
                for(let t of thingDB){
                    let t_type = t?.record_type || t?.['@type']
                    let t_id = t?.record_id || t?.['@id']
                    if(t_type == ref?.['@type'] && t_id == ref?.['@id']){
                        //console.log('update thing')
                        updateThing(element, t)
                    }
                }
                
                
            }
            
        } else if (mutation.type === "attributes") {

            //console.log('Observer - element updated', th.isValid(mutation.target))
            
        }
      }
    };


    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(element, config);

    // Later, you can stop observing
    //observer.disconnect();

    
}



function getThings(element) {
    /**
     * Returns the things under the orchestrator.
     * @param {Object} element The element. Uses document.body if missing
     * @returns {Array}
     */

    element = element || document.body
    
    let things = th.ref.getAll(element)

    return things;
}



function updateThing(element, record){
    /**
     * Update all elements with the corresponding thing
     * @param {Object} element The element
     * @param {Object} record_or_record_type The record type
     * @param {String} record_id The record id
     * @returns {Object} The record
     */

    // Error handling
    element = element || document.body
    if(h.isNull(record)){ return }
    //record = record?.record || record

    // Render elements with thing
    th.render(element, record);

    // Return
    return
}