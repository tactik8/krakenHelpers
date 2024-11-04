export function card() {
    return ` <div class="card" style="width: 18rem;">
         
            <img src="{{image.contentUrl}}" class="card-img-top" alt="..." onerror="this.style.display='none'">
           
            <div class="card-body">
            {{#_headingPosition}}
              <h5 class="card-title">{{_headingPosition}}</h5>
            {{/_headingPosition}}
              <h5 class="card-title">{{_headingStars}}</h5>
                <h5 class="card-title">{{ _heading1 }}</h5>
                <p class="card-text">{{ _heading2 }}</p>
                {{#potentialAction}}
                    <a href="{{ potentialAction.url}}" class="btn btn-primary">{{ potentialAction.name}}</a>
                {{/potentialAction}}
            </div>
        </div>
    `;
}
