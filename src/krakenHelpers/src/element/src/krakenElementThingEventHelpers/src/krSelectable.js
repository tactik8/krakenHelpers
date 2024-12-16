
/**
 * @fileoverview Kraken Selectable
 * @author Simon Chapleau
 * @version 1.0.0
 *
 * Functions to add selectable functionality to elements
 *
 * Elements with class name 'krSelectable' becomes selectable when clicked on
 * When selected, class 'krSelected' is added
 * 
 * 
 */


import { krakenBaseHelpers as h} from '../../../../base/krakenBaseHelpers.js'


export const krSelectable = {

    set: makeSelectable,
    get: getSelected,
    addCss: addSelectedCss,

}

const selectableClass = 'krSelectable'
const selectedClass = 'krSelected'


// Initialize database of already initialized elements
let elementDB = {}

function makeSelectable(element, allowMultiSelect=true) {
    /**
     * Make all elements with class name 'krSelectable' selectable
     * When selected, class 'krSelected' is added
     * @param element: parent element of all elements to make selectable
     * @param allowMultiSelect: allow multiple selections
     * @return void
     * 
     */

    element = element || document.body

    // Initialize parent element to deselect all other elements on click

    if(h.isNull(element.id)){
        element.id = h.uuid.new()
    }

    element.addEventListener('click', event => {
        
        let selectedElements =  element.querySelectorAll('.' + selectedClass) || []
        for(let selectedElement of selectedElements){
            
            selectedElement.classList.remove(selectedClass)
            
        }
    })
    
    
    // Initialize selectable elements under parent element
    let selectableElements = element.querySelectorAll('.' + selectableClass)
    for (let e of selectableElements){

        // Add id is missing
        if(h.isNull(e.id)){
            e.id = h.uuid.new()
        }

        // Skip if already initialized
        if(h.isNotNull(elementDB?.[element.id])){
            continue
        }

        // Add event listener on element
        e.addEventListener('click', event => {

            event.preventDefault()
            event.stopPropagation()
                        
            //If  Shift key not pressed, remove current selection
            if (!event.shiftKey || allowMultiSelect==false) {
                let selectedElements =  element.querySelectorAll('.' + selectedClass) || []
                for(let selectedElement of selectedElements){
                    if(selectedElement != e){
                        selectedElement.classList.remove(selectedClass)
                    }
                }
                
            } 
                
            // Toggle current element
            event.currentTarget.classList.toggle(selectedClass);
            
        });

    }

}



function getSelected(element){
    /**
     * Returns the elements selected below the input element
     * @param {HTMLElement} element
     * @returns {Array}
     * 
     */

    element = element || document.body

    
    let results = element.querySelectorAll('.' + selectedClass); 

    results = results || []

    return results
    
}

function addSelectedCss(){
    /**
     * Add Css necessary to make element appear selected
     * @param {HTMLElement} element
     * @returns {void}
     */

    var styles = `
       
    
        .${selectableClass}.${selectedClass} { 
            
              outline-style: solid;
              outline-color: transparent;
              box-shadow: 0 0 0 2px #0e44af,
                          0 0 0 5px #fff;
        }
        
    `
    
    var styleSheet = document.createElement("style")
    styleSheet.textContent = styles
    document.head.appendChild(styleSheet)

    return
    
}