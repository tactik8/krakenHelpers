

export function pricing(){

        return `

        <div class="container">

            <div class="p-3 mt-4 pb-md-4 mx-auto text-center">
                {{#_heading1}}
                    <h2 class="display-4 fw-normal text-body-emphasis">{{_heading1}}</h2>
                {{/_heading1}}
    
                {{#_headingDescription}}
                    <p class="fs-5 text-body-secondary">{{_headingDescription}}</p>
                {{/_headingDescription}}
            </div>


            <div class="row row-cols-1 row-cols-md-3 mt-3 mb-3 text-center">
                {{#itemListElement}} {{#itemListElement.item}}
                <div class="col">
                    <div class="card mb-4 rounded-3 shadow-sm">
                        <div class="card-header py-3">
                            <h4 class="my-0 fw-normal">
                                {{itemListElement.item.itemOffered.name}}
                            </h4>
                        </div>
                        <div class="card-body">
                            <h1 class="card-title pricing-card-title">
                                {{itemListElement.item.priceSpecification.price}}<small
                                    class="text-body-secondary fw-light"
                                    >/{{itemListElement.item.priceSpecification.referenceQuantity.unitCode}}</small
                                >
                            </h1>

                            <ul class="list-unstyled mt-3 mb-4">
                                {{#itemListElement.item.additionalProperty}}
                                <li>{{itemListElement.item.additionalProperty.value}}</li>
                                {{/itemListElement.item.additionalProperty}}
                            </ul>
                            {{#itemListElement.item.potentialAction}}
                            <button
                                href="{{itemListElement.item.potentialAction.url}}"
                                type="button"
                                class="w-100 btn btn-lg btn-outline-primary"
                            >
                                {{itemListElement.item.potentialAction.name}}
                            </button>
                            {{/itemListElement.item.potentialAction}}
                        </div>
                    </div>
                </div>
                {{/itemListElement.item}} {{/itemListElement}}
            </div>
        </div>


`

    
}