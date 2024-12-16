
import { krakenHelpers as h } from "../../../../krakenHelpers/krakenHelpers.js";


// -----------------------------------------------------
//  Event listener - keyboard
// -----------------------------------------------------

export function setupEventListener(element, callbackFn) {


    setupKeyboardEventListener(element, callbackFn)


}


function setupKeyboardEventListener(element, callbackFn){
    
    element.addEventListener("keydown", (event) => {


        console.log('event', event)
        let action = {
            "@type": "ReplaceAction",
            "@id": h.base.uuid.new(),
            "object": {
                "@type": "WebPageElement",
                "@id": event.currentTarget.id,
            },
            "replacee": "",
            "replacer": ""
        }


        callbackFn(action)
        
        return action

        
        let element = event.target.closest("kr-input");

        let a = event.altKey;
        let s = event.shiftKey;
        let k = event.key;

        // Enter
        if (!a && !s && k == "Enter") {
            event.preventDefault();
            event.stopPropagation();

            let position = h.dom.cursor.get(element);
            let newLine = element.actionSplitLine(position);
            newLine.setFocus(0)

        }

        // Tab
        if (!a && !s && k == "Tab") {
            let position = h.dom.cursor.get(element);
            event.preventDefault();
            event.stopPropagation();
            element.actionInsertUnderTop();

            element.setFocus(position);
        }

        // Back tab
        if (!a && s && k == "Tab") {
            let position = h.dom.cursor.get(element);
            event.preventDefault();
            event.stopPropagation();
            element.actionMoveFromChildToSibling();
            element.setFocus(position);
        }

        // Back space
        if (!a && !s && k == "Backspace") {
            let position = h.dom.cursor.get(element);
            if (position > 0) {
                return;
            }
            event.preventDefault();
            event.stopPropagation();
            element.actionMergeToPreviousLine();
        }

        // Arrow up
        if (!a && !s && k == "ArrowUp") {
            let position = h.dom.cursor.get(element);

            event.preventDefault();
            event.stopPropagation();

            element.setFocusAbove()
        }

        // Arrow down
        if (!a && !s && k == "ArrowDown") {
            let position = h.dom.cursor.get(element);

            event.preventDefault();
            event.stopPropagation();

            element.setFocusBelow()
        }

        element.updatePropertyValue();
        // Other
    });
}
