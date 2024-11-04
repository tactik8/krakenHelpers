


export function footer(){

    return `
            
                <div class="container">
                    <footer 
                    class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark"
                    >
                    
                        <div class="col mb-3">
                        
                            <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                                <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
                            </a>
                            
                            <p class="text-body-secondary">© 2024</p>
                        </div>

                        <div class="col mb-3">

                        </div>

                        <div class="col mb-3">
                         
                        </div>

                        <div class="col mb-3">
                            
                        </div>

                        <div class="col mb-3">
                            

                               {{ #hasPart | filter:@type=WPFooter }}

                                   <h5>{{ hasPart.name }}</h5>
                                   <ul class="nav flex-column">

                                    {{ #hasPart.hasPart }}
                                        
                                        <li class="nav-item mb-2">
                                            <a href="{{ hasPart.hasPart.url }}" class="nav-link p-0 text-body-secondary">{{ hasPart.hasPart.name }}</a>
                                        </li>

                                    {{ /hasPart.hasPart }}
                                    
                                {{ /hasPart }}

                                
                            </ul>
                        </div>
                    </footer>
                </div>
                
                `
}