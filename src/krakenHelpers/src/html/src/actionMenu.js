export function actionMenu(prefixes) {

    prefixes = prefixes || [];

    let prefix = prefixes.join('.')

    if(prefix != ''){
        prefix = prefix + '.'
    }
    
        return `

        
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
        
                <form method="post">

                    <input type="hidden" id="@type" name="@type" value="{{${prefix}@type}}">
                    <input type="hidden" id="@id" name="@id" value="{{${prefix}@id}}">
                    
                    {{#${prefix}potentialAction}}

                        <li>
    
                            <button 
                            type="submit" 
                            class="dropdown-item" 
                            formaction="{{${prefix}potentialAction.url}}">
                            
                                {{${prefix}potentialAction.name}}
                            
                            </button>
                        
                        </li>
    
                    {{/${prefix}potentialAction}}
            

                </form>


                <li>
                    <hr class="dropdown-divider">
                </li>


                <form method="post">

                    <input type="hidden" id="@type" name="item.@type" value="{{${prefix}item.@type}}">
                    <input type="hidden" id="@id" name="@id" value="{{${prefix}item.@id}}">
                    
                    {{#${prefix}item.potentialAction}}

                        <li>
    
                            <button 
                            type="submit" 
                            class="dropdown-item" 
                            formaction="{{${prefix}item.potentialAction.url}}">
                            
                                {{${prefix}item.potentialAction.name}}
                            
                            </button>
                        
                        </li>
    
                    {{/${prefix}item.potentialAction}}
            
                </form>
                
            </ul>
                
        </div>
        
        
        `;
}

