import { krakenHelpers as h } from "../../../krakenHelpers/krakenHelpers.js";

import { KrElementBase} from '../KrElementBase.js'

import { template} from './src/template.js'

// Create a class for the element
export class KrElementEditorLine extends KrElementBase {
    constructor() {
        super();

        this.krClass = 'KrElementInput';
        this.krType = 'krThing'
        this.initFlag = false;
        this._template = template();
    }

    // -----------------------------------------------------
    //  Draw
    // -----------------------------------------------------

    async init() {
        
        let t = await super.init()
        
        
        
        this.setupEventListener();
        this.setupEventListenerFocus();
        this.setupEventListenerDragDrop();
    }

    callbackFn(action) {
    }



    // -----------------------------------------------------
    //  Drag drop 
    // -----------------------------------------------------

    setupEventListenerDragDrop() {


        h.dom.event.dragDropReordering.setDraggable(this, this.draghandleSection)
        h.dom.event.dragDropReordering.setDropzone(this)
        
    }
    
    
    // -----------------------------------------------------
    //  Event listener - focus
    // -----------------------------------------------------

    setupEventListenerFocus() {
        this.addEventListener("focusin", (event) => {
            event.preventDefault();
            event.stopPropagation();
            this.setFocus()
        
        })

        this.valueSection.addEventListener("click", (event) => {
            event.preventDefault();
            event.stopPropagation();
            this.setFocus()
        });

        this.editSection.addEventListener("focusin", (event) => {
            this.setFocus()
        });

        this.editSection.addEventListener("focusout", (event) => {
            this.loseFocus()
        });
    }

    
    // -----------------------------------------------------
    //  Actions
    // -----------------------------------------------------

    actionSplitLine(position) {
        /**
         * Separates a line into two lines, by inerting a 2nd line krInputBelow
         *
         */


        // Create new element and assign value
        let newElement = document.createElement("kr-input");
        this.after(newElement);
        let newElementValue = this.value.slice(position);
        newElementValue = newElementValue.replace("\n", "");
        newElementValue = newElementValue.replace("\r", "");
        newElement.value = newElementValue;

        // Assign value for this element
        let thisElementValue = this.value.slice(0, position);
        thisElementValue = thisElementValue.replace("\n", "");
        thisElementValue = thisElementValue.replace("\r", "");
        this.value = thisElementValue;

        // Set focus on new element
        return newElement

        
    }

    actionInsertUnderTop() {
        /**
         * Moves line as children of previous sibling
         *
         */

        let element = this;
        let above = this.above;

        if (this.krInputBefore) {
            this.krInputBefore.childrenSection.append(element);
        }
    }

    actionMoveFromChildToSibling() {
        /**
         * Moves line as children of previous sibling
         */

        if (this.krInputParent) {
            let p = this.krInputParent;
            let e = this;
            while (e) {
                let nextElement = e.nextElementSibling;
                p.after(e);
                p = e;
                e = nextElement;
            }
        }
    }

    actionMergeToPreviousLine() {
        /**
         * BAckspace
         *
         */

        let previous = this.previousElementSibling;
        if (!previous) {
            previous = this.krInputParentElement.closest("kr-input");
        }

        if (previous) {
            let newCursorPosition = (previous.value || "").length;

            previous.merge(this);
            h.dom.cursor.set(previous.valueSection, newCursorPosition);
        }
    }

    // -----------------------------------------------------
    //  Element neighbours
    // -----------------------------------------------------

    get krInputAbove() {
        /**
         * Returns the top element (regardless of hierarchy)
         */

        let krInputAbove;

        // Get last element of neighbor if exist
        if (this.previousElementSibling) {
            krInputAbove =
                this.previousElementSibling.krInputLastChild ||
                this.previousElementSibling;
        }

        // If no neighbor, get parent element
        if (!krInputAbove) {
            krInputAbove = this.krInputParent;
        }

        return krInputAbove;
    }

    get krInputBelow() {
        /**
         * Returns the bottom element (regardless of hierarchy)
         */

        // Get first child if exist
        let krInputBelow = this.krInputFirstChild;

        // If no child, get neighbor
        if (!krInputBelow) {
            krInputBelow = this.nextElementSibling;
        }

        // If no neighbor, get neighbor of parent
        if (!krInputBelow) {
            let p = this.krInputParent;
            if (p) {
                while (p && !p.nextElementSibling) {
                    p = p.krInputParent;
                }
                krInputBelow = p.nextElementSibling;
            }
        }

        return krInputBelow;
    }

    get krInputBefore() {
        return this.previousElementSibling;
    }

    get krInputAfter() {
        return this.nextElementSibling;
    }

    get krInputParent() {
        return this.parentElement.closest("kr-input");
    }



    setFocusAbove(position){
        /**
         * Set focus on previous element
         */

        position = position || h.dom.cursor.get(this.editSection);

        if(this.krInputAbove){
            this.krInputAbove.setFocus(position)
        }
        
    }

    setFocusBelow(position){
        /**
         * Set focus on next element
         */

        position = position || h.dom.cursor.get(this.editSection);

        if(this.krInputBelow){
            this.krInputBelow.setFocus(position)
        }

    }

    // -----------------------------------------------------
    //  Element parts
    // -----------------------------------------------------

    get childrenSection() {
        return this.getSectionGeneric('krHasPart', classNameToStop)
        
    }

    get propertySection() {
        return h.dom.thing.traverse.children.elements.get(this, 'krPropertySection', 'krThing')?.[0] || null
        return document.getElementById(this.propertySectionID);
    }

    get valueSection() {
        return h.dom.thing.traverse.children.elements.get(this, 'krValueSection', 'krThing')?.[0] || null
        return document.getElementById(this.valueSectionID);
    }

    get editSection() {
        
        return h.dom.thing.traverse.children.elements.get(this, 'krInputField', 'krThing')?.[0] || null
        return document.getElementById(this.editSectionID);
    }

    get draghandleSection() {
        return document.getElementById(this.draghandleID);
    }

    get krInputFirstChild() {
        return this.childrenSection.firstElementChild;
    }

    get krInputLastChild() {
        return this.childrenSection.lastElementChild;
    }

    get propertyID() {
        return this.propertySection.textContent.trim();
    }

    set propertyID(value) {
        this.propertySection.textContent = value.trim();
    }

    get value() {
        let value = this.editSection.textContent;

        value = value.replace("\n", "");
        value = value.replace("\r", "");
        value = value.trim();
        return value;
    }

    set value(value) {
        while (this.editSection.krInputFirstChild) {
            this.editSection.krInputFirstChild.remove();
        }
        value = value.trim();


        // Split value into lines
        if(value.includes("\n")){
            let lines = value.split("\n");
            this.value = lines[0]
            for(let i = 1; i < lines.length; i++){
                let newElement = document.createElement("kr-input");
                newElement.value = lines[i]
                this.after(newElement);
            }
            return
        }

        if(value.includes("\r")){
            let lines = value.split("\n");
            this.value = lines[0]
            for(let i = 1; i < lines.length; i++){
                let newElement = document.createElement("kr-input");
                newElement.value = lines[i]
                this.after(newElement);
            }
            return
        }

        //

        
        value = value.replace("\n", "");
        value = value.replace("\r", "");
        value = value.trim();

        this.editSection.textContent = value;

        this.updatePropertyValue();
    }



    updateEngine(){
        /**
         * Updates the engine with new value
         * 
         */

        let engine = this.closest('kr-engine')

        engine.set(this.record)
        
        
    }


    

    updatePropertyValue() {


        let value = this.value;

        if (this.testIsJson(value)) {
            this.record = this.toJson(value)
            return;
        }

        // Set property and value
        let values = value.split(":");
        if (values.length > 1) {

            let propertyID = values[0].trim();

            let newValue = values.slice(1).join(":");
            newValue = newValue.trim();
            
            
            this.propertySection.textContent = propertyID

           
            
            if (this.testIsJson(newValue) == true) {
                let newElement = document.createElement("kr-input");
                this.childrenSection.append(newElement);
                newElement.record = this.toJson(newValue);
                return;
            } else {
                this.valueSection.textContent = newValue
            }
        } else {
            this.propertySection.textContent = "";
            this.valueSection.textContent = values[0].trim();
        }
    }

    testIsJson(value) {

        try {
            value = value.trim()
            while(value.includes('  ')){
                value = value.replaceAll('  ', ' ')
            }
            let v = JSON.parse(value);

            if (v?.["@type"] || v?.[0]?.["@type"]) {
                return true;
            }
        } catch (error) {
        }

        return false;
    }

    toJson(value){
        try {
            value = value.trim()
            while(value.includes('  ')){
                value = value.replaceAll('  ', ' ')
            }
            let v = JSON.parse(value);

            if (v?.["@type"] || v?.[0]?.["@type"]) {
                return v;
            }
        } catch (error) {
        }

        return null;
        
    }

    // -----------------------------------------------------
    //  Methods
    // -----------------------------------------------------


    


    
    setFocus(position) {
        /**
         * Sets focus on element
         */

        if (h.isNull(position)) {
            position = (this.value || "").length;
        }

        if (h.isNull(this.value)) {
            this.value = "";
        }

        this.classList.add('kr-input-focused')
        //this.editSection.style.display = "block";
        //this.propertySection.style.display = "none";
        //this.valueSection.style.display = "none";
        this.editSection.focus();
        h.dom.cursor.set(this.editSection, position);
    }

    loseFocus(position) {
        /**
         * Sets focus on element
         */

        
        //this.editSection.style.display = "none";
        //this.propertySection.style.display = "block";
        //this.valueSection.style.display = "block";
        this.classList.remove('kr-input-focused')
        
    }

    merge(other) {
        /**
         * Merge other input with this input
         */

        // Merge values
        this.value = this.value + other.value;

        // Merge children
        let e = this.childrenSection.firstElementChild;
        for (let c of other.childrenSection.children) {
            if (e && e != null) {
                e.before(c);
            } else {
                this.childrenSection.append(c);
            }
        }

        // Remove other
        other.remove();
    }

    // -----------------------------------------------------
    //  Properties
    // -----------------------------------------------------

  


}

customElements.define("kr-editor-line", KrElementEditorLine);
