


export function article() {
    /**
     *
     *
     */

    return `

<div class="container px-4 py-5">


    <div class="row  g-5 py-5">


        <!-- toc -->
        <div class="col col-md-4 order-2 sticky-top" >

            <div class="sticky-top">
                <ul class="list-unstyled">
                    {{#hasPart}}
                        <li >
                            
                           <a href="#{{hasPart.@id}}">{{hasPart._heading1}}</a>
                             
                              <ul class="list-unstyled">
                              
                                    {{#hasPart.hasPart}}
                                    
                                        <li>
                                            <a href="#{{hasPart.hasPart.@id}}">{{hasPart.hasPart._heading1}}</a>
                                        </li>
        
        
                                    {{/hasPart.hasPart}}
                              </ul>
                          
                        </li>
                        
                    {{/hasPart}}
                </ul>
            </div>
        </div>

        <!-- article -->

        <div class="col-md-8 order-1">

            <div class="container mt-4 mb-2">


                <!-- image --> 
                    {{#_headingImage}}
            
                        <img src="{{_headingImage}}" class="d-block my-5 img-fluid" alt="{{_headingImage}}" width="700" height="500" loading="lazy">
            
                    {{/_headingImage}}


                <!-- heading -->
                    {{#_heading1}}
                        <h2 class="fw-bold mt-5 text-body-emphasis mt-5">{{_heading1}}</h2>
                    {{/_heading1}}
            
                

                <!-- date -->
                    {{#_headingDate}}
                        <small>{{_headingDate}}</small>
                    {{/_headingDate}}
                    


                <!-- author -->
                    {{#author}}
                        <small>{{author._heading1}}</small>
                    {{/author}}


                <!-- Abstract -->

                    {{#abstract}}    
                        <p class="lead">
                          {{abstract}}
                        </p>
                    {{/abstract}}    

                <!-- content -->
                    {{#_headingDescription}}
                        <p class="lead mt-5">{{_headingDescription}}</p>
                    {{/_headingDescription}}


        
                <!-- article parts -->
                {{#hasPart}}
        
                    <div class="container ps-0 pe-0 mt-5 mb-1 ms-0 me-0" id="{{hasPart.@id}}">
                        {{#hasPart._headingImage}}
            
                            <img src="{{hasPart._headingImage}}" class="d-block my-5 img-fluid" alt="{{hasPart._headingImage}}" width="300" height="200" loading="lazy">
            
                        {{/hasPart._headingImage}}
            
                        {{#hasPart._heading1}}
                            <h3 class="fw-bold text-body-emphasis">{{hasPart._heading1}}</h3>
                        {{/hasPart._heading1}}
            
                        {{#hasPart._headingDescription}}
                            <p class="lead">{{hasPart._headingDescription}}</p>
                        {{/hasPart._headingDescription}}
            
            
                        <!-- article parts -->
                        {{#hasPart.hasPart}}
        
                            <div class="container mt-5 mb-1 ms-0 me-0" id="{{hasPart.hasPart.@id}}">
                                {{#_headingImage}}
                
                                    <img src="{{hasPart.hasPart._headingImage}}" class="d-block img-fluid" alt="{{hasPart.hasPart._headingImage}}" width="150" height="100" loading="lazy">
                
                                {{/hasPart.hasPart._headingImage}}
                                
                                {{#hasPart.hasPart._heading1}}
                                    <h4 class="fw-bold text-body-emphasis mt-5">{{hasPart.hasPart._heading1}}</h4>
                                {{/hasPart.hasPart._heading1}}
                
                                {{#hasPart.hasPart._headingDescription}}
                                    <p class="lead">{{hasPart.hasPart._headingDescription}}</p>
                                {{/hasPart.hasPart._headingDescription}}
            
                            </div>
                           
            
                        {{/hasPart.hasPart}}
                        
                    </div>
            
                {{/hasPart}}
            </div>
        </div>

    </div>
</div>


`;
}
