import { krakenBaseHelpers as h} from '../../base/krakenBaseHelpers.js'



export function cardHorizontal(classes, prefixes) {

    //
    prefixes = h.toArray(prefixes) || [];

    prefixes = prefixes.filter(x => x !== undefined && x !== null)
    let prefix = prefixes.join('.')

    if(prefix != ''){
        prefix = prefix + '.'
    }
    
    return ` 
    
        <div class="card mb-3" style="max-width: 300px;">
            <div class="row g-0">

    
               <!-- image -->
               {{#${prefix}image.contentUrl}}
                    <div class="col col-sm-4 align-self-center">
                        <a href="#" class="btn h-100" data-bs-toggle="modal" data-bs-target="#modalID">
                              <img src="{{${prefix}image.contentUrl}}" class="card-img-top" alt="..." onerror="this.style.display='none'">
                        </a>
                    </div>

                {{/${prefix}image.contentUrl}}

                <!-- content -->
                <div class="col pt-0 align-self-top">
                
                    <div class="row mt-0 me-1">
                        <span
                            class="mt-0 mb-1 align-self-end text-end justify-content-end kr-action">{{kr-action}}</span>
                    </div>
                    
                    <div class="card-body">

                        <div class="row align-self-center">
                            <h5 class="card-title mb-0">
                                <font size="-1">{{_heading1}}</font>
                            </h5>
                            <p class="card-text mt-0">
                                <font size="-1">{{_heading2}}</font>
                            </p>

                        </div>
                    </div>
                    <div class="row me-1 mt-0 text-end justify-content-end">
                        <p class="card-text"><small class="text-body-secondary">
                                <font size="-1">{{_headingStatus}}</font>
                            </small></p>
                    </div>

                </div>
            </div>
        </div>
    `;
}
