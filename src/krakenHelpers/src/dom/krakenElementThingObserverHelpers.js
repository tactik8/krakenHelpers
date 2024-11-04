
import { krakenBaseHelpers as h} from '../base/krakenBaseHelpers.js'




export const krakenElementThingObserverHelpers = {
  set: setObserver
}



function setObserver(element, callbackFn){


    const config = { attributes: true, childList: true, subtree: true , characterData: true};

    
    // Callback function to execute when mutations are observed
    const callback = (mutationList, observer) => {
      for (const mutation of mutationList) {

        let event = {
            "@type": "Action",
            "@id": h.uuid.new(),
            "name": "Element mutation",
            "object": mutation.target,
       
        }
        if (mutation.type === "childList") {
          console.log("A child node has been added or removed.");
        } else if (mutation.type === "attributes") {
          console.log(`The ${mutation.attributeName} attribute was modified.`);
        }
      }
    };


    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);

    // Later, you can stop observing
    //observer.disconnect();

    
}

function broadcast(element, event){

    
    
}