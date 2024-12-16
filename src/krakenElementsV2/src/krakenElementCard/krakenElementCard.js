
import { KrElementBase} from '../krakenElementBase/krakenElementBase.js'



import { krakenHelpers as h} from '../../../krakenHelpers/krakenHelpers.js'

import { krakenClasses } from '../../../krakenClasses/krakenClasses.js'



// Create a class for the element
export class KrElementCard extends KrElementBase {
    constructor() {
        super();

        this._template = `


        <div class="card" style="width: 18rem;">
          <img src="{{_headingImage}}" class="card-img-top" alt="...">
          <div class="card-body">
           

            <h5 class="card-title">
            <kr-property data-propertyID="name"><kr-property>
            </h5>

            <h5 class="card-title">
              <kr-input data-propertyID="name"><kr-input>
              </h5>
            
            <p class="card-text">{{_headingDescription}}</p>
            <a href="#" class="btn btn-primary">Link</a>
          </div>
        </div>


        `

    }



    // -----------------------------------------------------
    //  Comment 
    // -----------------------------------------------------


}

customElements.define("kr-card", KrElementCard);
