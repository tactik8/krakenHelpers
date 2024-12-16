


export function howTo(){

    return `



      
            <div class="container col-xxl-8 px-4 py-5">
                <div class="row  align-items-center g-5 py-5">




                    <div class="col-10 col-sm-8 col-lg-6">

                        {{#_headingImage}}
                            <div class="d-none d-md-block">
                                <img src="{{_headingImage}}" class="d-block mx-lg-auto img-fluid filter-src" alt="{{_headingImage}}" width="700" height="500" loading="lazy" />
                            </div>

                        {{/_headingImage}}
                        
                        {{#_heading1 }}
                            <h1 class="display-5 fw-bold  lh-1 mb-3">{{_heading1}}</h1>
                        {{/_heading1 }}
                        
                        {{#_headingDescription }}
                            <p class="lead">{{_headingDescription}}</p>
                        {{/_headingDescription }}

                        

                    </div>



                    <div class="col-lg-6">

                        <!-- howTo step -->
                        {{#step }}
                             
                                <!-- item start -->
                                    <div class="row">
    
                                        {{#step._headingImage}}
                                            <div class="d-none d-md-block col col-3">
                                                <img 
                                                src="{{step._headingImage}}" 
                                                class="d-block mx-lg-auto img-fluid filter-src" 
                                                alt="{{step._headingImage}}" 
                                                width="700" height="500" loading="lazy" 
                                                />
                                            </div>    
                                        {{/step._headingImage}}

                                        <div class="col-2 p-0 me-5">
                                            <div class="bg-primary m-0 text-white text-center">
                                                <p class="fs-1"> {{step.position}} </p>
                                            </div>
                                        </div>
                                        <div class="col-10 d-md-none">
                                        </div>
                                        
                                        <div class="col">
                                            <h4>{{step._heading1}}</h4>
                                            <p>{{step._headingDescription}}</p>
                                        </div>
                                        
                                    </div>
                                <!-- item stop -->
                            
                        {{/step}}


                        
                        




                        

                    </div>


                </div>
            </div>
       

    
    
    
    `
    
}