

export const krakenSimpleHtmlHelpers = {

    card: getHtmlCard,
    line: getHtmlLine
    
}




function getHtmlCard(){


    let content = `
        <div class="card" style="width: 18rem;">
         
            <img src="{{image.contentUrl}}" class="card-img-top" alt="..." onerror="this.style.display='none'">
           
            <div class="card-body">
                <h5 class="card-title">{{ name }}</h5>
                <p class="card-text">{{ text }}</p>
                {{#potentialAction}}
                    <a href="{{ potentialAction.url}}" class="btn btn-primary">{{ potentialAction.name}}</a>
                {{/potentialAction}}
            </div>
        </div>
    
    `
    return content
    
}




function getHtmlLine(){


    let content = `
        <div class="row align-items-center" >

            <div class="col-sm-1 ">
               
                <img src="{{_headingImage}}" class="img-fluid" alt="..." onerror="this.style.display='none'">
               
            </div>

            <div class="col-sm-10">

                    <div class="row">
                        <div class="col-sm-12 col-md-4">
                            {{ _heading1 }}
                        </div>
            
                        <div class="col-sm-12 col-md-3 text-truncate">
                            {{ _heading2 }}
                        </div>
            
                        <div class="col-sm-12 col-md-3">
                            {{ _headingStatus }}
                        </div>
            
                        <div class="col-sm-12 col-md-2 text-truncate">
                            <a href="{{ url }}">Link</a>
                        </div>
                    </div>
    
            </div> 
            <div class="col-sm-1">
                <div class="dropdown">
                    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
</svg>
                    </button>
                    <ul class="dropdown-menu">
                        {{#potentialAction}}
                        <li><a class="dropdown-item" href="{{potentialAction.url}}">{{potentialAction.name}}</a></li>
                        {{/potentialAction}}
                    </ul>
                </div>
            </div>

            
        </div>

    `
    return content

}



    