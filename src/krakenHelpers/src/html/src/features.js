export function features() {
    /**
     *
     *
     */

    return `
    
<div class="container px-4 py-5">
    
    <div class="row align-items-md-center g-5 py-5">
    
        <div class="col col-12 col-md-6 d-flex flex-column align-items-start gap-2">


            {{#_headingImage}}
                <div class="d-none d-md-block">
                    <img src="{{_headingImage}}" class="d-block mx-lg-auto img-fluid" alt="{{_headingImage}}" width="700" height="500" loading="lazy">
                </div>
            
            {{/_headingImage}}
            
            {{#_heading1}}
                <h2 class="fw-bold text-body-emphasis">{{_heading1}}</h2>
            {{/_heading1}}

            {{#_headingDescription}}
                <p class="lead">{{_headingDescription}}</p>
            {{/_headingDescription}}
            
            {{#potentialAction}}
                <a href="{{potentialAction.url}}" class="btn btn-primary btn-lg">{{potentialAction.name}}</a>
            {{/potentialAction}}
            
        </div>
            
        <div class="col">
            
            <div class="row row-cols-1 row-cols-sm-2 g-4">
            
                {{ #positiveNotes }}
                    {{#positiveNotes.item}}
                        
                        <div class="col  d-flex flex-column gap-2">
    
                            
                            {{#positiveNotes.item._headingImage}}

        
                                    <div class="row d-none d-md-block">
                                        <div class="col-md-4">
                                        
                                            <img 
                                            src="{{positiveNotes.item._headingImage}}" 
                                            class="d-block mx-lg-auto img-fluid" 
                                            alt="{{positiveNotes.item.._headingImage}}" 
                                            loading="lazy"
                                            >
                                            </div>
                                        <div class="col-md-4">
                                            </div>
                                        <div class="col-md-4">
                                            </div>
                                    </div>
                            {{/positiveNotes.item._headingImage}}
                    
                               
                            <h4 class="fw-semibold mb-0 mt-3 text-body-emphasis">{{positiveNotes.item._heading1}}</h4>
                            <p class="">{{positiveNotes.item._headingDescription}}</p>
                            
                            {{#positiveNotes.item.potentialAction}}
                                <a href="{{positiveNotes.item.potentialAction.url}}" class="btn btn-primary btn-lg">
                                    {{hasPart.potentialAction.name}}
                                </a>
                            {{/positiveNotes.item.potentialAction}}
                            
                        </div>
                    {{ /positiveNotes.item }}
                {{ /positiveNotes }}
                
            
            </div>
        </div>
    </div>
</div>


`;
}
