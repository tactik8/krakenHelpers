
import { krakenBaseHelpers as h} from '../../base/krakenBaseHelpers.js'


export function card(classes, prefixes) {

    //
    prefixes = h.toArray(prefixes) || [];

    prefixes = prefixes.filter(x => x !== undefined && x !== null)
    let prefix = prefixes.join('.')

    if(prefix != ''){
        prefix = prefix + '.'
    }

    
    return ` <div class="card ${h.toArray(classes).join(' ')}" style="width: 18rem;">
         
            <img src="{{${prefix}image.contentUrl}}" class="card-img-top" alt="..." onerror="this.style.display='none'">
           
            <div class="card-body">
            {{#${prefix}_headingPosition}}
              <h5 class="card-title">{{${prefix}_headingPosition}}</h5>
            {{/${prefix}_headingPosition}}
              <h5 class="card-title">{{${prefix}_headingStars}}</h5>
                <h5 class="card-title">{{ ${prefix}_heading1 }}</h5>
                <p class="card-text">{{ ${prefix}_heading2 }}</p>
                {{#${prefix}potentialAction}}
                    <a href="{{ potentialAction.url}}" class="btn btn-primary">{{ ${prefix}potentialAction.name}}</a>
                {{/${prefix}potentialAction}}
            </div>
        </div>
    `;
}
