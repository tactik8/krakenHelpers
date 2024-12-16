
import { krakenHelpers as h } from "../../../../krakenHelpers/krakenHelpers.js";


export function template(){

    return `
    
    
    <div class="container border">

        <div class="row kr-input-line1">

            <div class="col col-1">

                <div class="row">
                    <div class="col ">
                        <div class="krSelect">
                        </div>
                    </div>

                    <div class="col">
                        <div class="krExpand">
                        </div>
                    </div>


                </div>
            </div>

            <div class="col col-2 krProperty krPropertySection"data-propertyID="propertyID" >
                
            </div>

            <div class="col col-8 krProperty krValueSection" data-propertyID="value">
                
            </div>

            <div class="col col-10 krInputField" contenteditable="true">

                <div class="krProperty" data-propertyID="text">
                    
                </div>
            
            </div>

            <div class="col col-1">

                <div class="row">

                   <div class="col">
                   
                        <div class="krAction" >
                        </div>
                   
                    </div>
                    
                    <div class="col">
                        
                        <div class="krDragHandle" class="kr-show-on-hover">
                            ${h.html.icons.drag()}
                        </div>

                    </div>

                </div>
                
            </div>

        </div>


        <div class="row kr-input-line2">

            <div class="col-3">
            </div>
           
            <div class="col-9 krProperty" data-propertyID="hasItem" >
           
            </div>

        </div>

    </div>

    
    
    
    
    `
}