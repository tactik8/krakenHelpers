


export function hero(){

    return `
            
                <div class="container col-xxl-8 px-4 py-5">
                    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
                         
                        <div class="d-none d-md-block col-10 col-sm-8 col-lg-6">
                         
                            {{#_headingImage}}
                               
                                <img src="{{_headingImage}}" class="d-block mx-lg-auto img-fluid filter-src" alt="{{_headingImage}}" width="700" height="500" loading="lazy" />
                               
                            {{/_headingImage}}
                            
                        </div>


                        
                        <div class="col-lg-6">

                            {{#_heading1 }}
                                <h1 class="display-5 fw-bold  lh-1 mb-3">{{_heading1}}</h1>
                            {{/_heading1 }}
                            
                            {{#_headingDescription }}
                                <p class="lead">{{_headingDescription}}</p>
                            {{/_headingDescription }}

                            {{#potentialAction}}
                                <div class="d-grid gap-2 d-md-flex justify-content-md-start">
                                    <button type="button" href="{{potentialAction.url}}" class="btn btn-primary btn-lg px-4 me-md-2">
                                        {{potentialAction.name}}
                                    </button>
                                </div>
                            {{/potentialAction}}
                            
                        </div>

                        
                    </div>
                </div>
           
                    
                    `

        
}