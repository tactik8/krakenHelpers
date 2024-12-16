

export function template(){
    /**
     * Template
     * @returns {String} The template
     */

    return `


<div class="container border">

    <!-- header section --> 
    <div class="row border">
    
        <div class="col-md-8">
        
            <div class="krProperty" data-propertyID="name" >
            </div>
            
        </div>
    
        <div class="krActionSection"  class="col-md-4">
            Actions
        </div>
        
    </div>
    
    <!-- hasPart section --> 
    <div class="row border">
    
        <div class="krProperty krHasPart" data-propertyID="hasPart">
            
            <div >
                <kr-editor-line class="krThing" ></kr-editor-line>
            </div>
        </div>

    </div>

    <!-- notes section --> 
    <div class="row border">
    
        <div>
        
            <pre class="krNotesSection">
            </pre>
            
        </div>
        
    </div>
    
</div>

`
    
    
}