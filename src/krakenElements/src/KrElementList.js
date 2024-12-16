
import { krakenHelpers as h} from '../../krakenHelpers/krakenHelpers.js'






// Create a class for the element
export class KrElementList extends HTMLElement {
    constructor() {
        super();
        this._thing = null
        this._record = null

        
        
    }




    // -----------------------------------------------------
    //  Draw 
    // -----------------------------------------------------

    init(){
        /**
         * Initializes the element
         * 
         */

        
        
        
        this.classList.add('krThing')
        this.classList.add('krDropzone')


        let itemTemplate = ` <div class="krThing krDraggable" data-record-type="{{itemListElement.item.@type}}" data-record-id="{{itemListElement.item.@id}}"> ${h.html.card('', 'itemListElement.item')} </div>
        `
        this.innerHTML = h.html.itemlist('', '', itemTemplate)
        
        h.dom.thing.init(this)

        
    }


    
    // -----------------------------------------------------
    //  Properties 
    // -----------------------------------------------------


    get record_type(){
        return this.getAttribute("data-record-type")
    }

    set record_type(value){
        return this.setAttribute("data-record-type", value)
    }

    get record_id(){
        return this.getAttribute("data-record-id")
    }

    set record_id(value){
        return this.setAttribute("data-record-id", value)
    }

    get ref(){
        return {
            "@type": this.record_type,
            "@id": this.record_id
        }
    
    }
    

    set ref(value){
        this.record_type = value?.['@type'] || value?.record_type || null
        this.record_id = value?.['@id'] || value?.record_id || null
    }

    
    
    get record(){
        //return getRecord()
        return this._record
    }

    set record(value){
        this.ref = value
        return this._record = value
    }

    get thing(){
        return this._thing
    }

    set thing(value){
        return this._thing = value
    }


    
    connectedCallback() {
        this.init()
    }

    disconnectedCallback() {}

    adoptedCallback() {}

    attributeChangedCallback(name, oldValue, newValue) {}
}

customElements.define("kr-list", KrElementList);


function getAction(name, no) {
    return {
        "@type": "action",
        "@id": "action_" + name + "_" + String(no),
        name: "action_" + name + "_" + String(no),
        actionStatus: "PotentialActionStatus",
    };
}


function getRecord(){

    let record =  {
        "@type": "ListItem",
        "@id": "listitem1",
        position: 4,
        item: {
            "@context": "https://schema.org/",
            "@type": "Thing",
            "@id": "thing1",
            name: "thing1",
            image: {
                "@context": "https://schema.org/",
                "@type": "ImageObject",
                "@id": "image1",
                name: "image_1",
                contentUrl: "https://placehold.co/600x400",
            },
            reviewRating: {
                "@type": "Rating",
                bestRating: "5",
                ratingValue: "4",
                worstRating: "1",
            },
            potentialAction: [
                getAction("Thing", 0),
                getAction("Thing", 1),
                getAction("Thing", 2),
            ],
        },
        potentialAction: [
            getAction("ListItem", 0),
            getAction("ListItem", 1),
            getAction("ListItem", 2),
        ],
    };

    let itemlist = {
        "@type": "ItemList",
        "@id": "itemlist1",
        name: "itemlist1",
        itemListElement: [record, record, record, record],
        potentialAction: [
            getAction("ItemList", 0),
            getAction("ItemList", 1),
            getAction("ItemList", 2),
        ],
    };
    return itemlist
}