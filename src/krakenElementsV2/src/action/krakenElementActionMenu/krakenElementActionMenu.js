

import { KrElementBase } from "../krakenElementBase/krakenElementBase.js";

import { krakenHelpers as h } from "../../../krakenHelpers/krakenHelpers.js";

import { krakenClasses } from "../../../krakenClasses/krakenClasses.js";

// Create a class for the element
export class KrElementActionMenu extends KrElementBase {
    constructor() {
        super();


        let prefix = ''


        this._template = `


            <!-- Potential action menu -->
                <div class="dropdown">

                    <a 
                    class="btn" 
                    href="#" 
                    role="button" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false"
                    >

                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">

                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>

                        </svg>

                    </a>

                    <ul class="dropdown-menu">

                        {{#potentialAction}}

                                <li>

                                   <kr-action-button
                                   data-record-type="{{potentialAction.@type}}"
                                   data-record-id="{{potentialAction.@id}}"
                                   >
                                   </kr-action-button>

                                </li>

                            {{/potentialAction}}


                       

                    </ul>

                </div>

    `
    
    }

}

customElements.define("kr-action-menu", KrElementActionMenu);
