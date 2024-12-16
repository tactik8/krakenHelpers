import { actionMenu } from './actionMenu.js';



export function pill( prefixes=[]) {

    prefixes = prefixes || [];

    let prefix = prefixes.join('.')

    if(prefix != ''){
        prefix = prefix + '.'
    }


    return ` <div class="row align-items-center mt-2 mb-2" >

                <div class="col col-12 col-sm-6 col-md-2">

                    <img 
                    src="{{${prefix}_headingImage}}" 
                    class="img-fluid" 
                    alt{{${prefix}_headingDescription}} 

                    onerror="this.style.display='none'"
                    >

                </div>

                <div class="col col-12 col-sm-6 col-md-10">
                    <div class="row d-flex">
                        <div class="col col-md-auto">
                            {{ ${prefix}_heading1 }}
                        </div>

                        <div class="col col-12 col-md-auto text-truncate ">
                            {{ ${prefix}_heading2 }}
                        </div>

                        <div class="col col-12 col-md-auto ">
                            {{ ${prefix}_headingStatus }}
                        </div>

                        <div class="col col-12 col-md-auto text-truncate">
                            <a href="{{ ${prefix}url }}">Link</a>
                        </div>
                    </div>
                </div>

             </div>
    `;
}
