



export function header(){
        /**
         * @type {string}
         */

        let content = `
        
            <header class="p-3 text-bg-dark">
                <div class="container">
                    <nav class="navbar navbar-expand-lg">
                        <div class="container-fluid">
                            <a class="navbar-brand" href="/">{{name}}</a>
                            <button
                                class="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span class="navbar-toggler-icon"></span>
                            </button>
            
                            <div
                                class="collapse navbar-collapse"
                                id="navbarSupportedContent"
                            >
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    {{#hasPart | filter:@type=WPHeader }}
                                    {{#hasPart.hasPart}}
            
                                    <li class="nav-item">
                                        <a
                                            href="{{hasPart.hasPart.url}}"
                                            class="nav-link px-2 text-secondary"
                                            >{{hasPart.hasPart.name}}</a
                                        >
                                    </li>
            
                                    {{/hasPart.hasPart}} {{/hasPart }}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            `

        return content

        
}