

export function cssTemplate(){

    return `
    
        kr-input .kr-show-on-hover{
            visibility: hidden;
        }

        kr-input:hover .kr-show-on-hover{
            visibility: visible;
        }


        kr-input .kr-input-edit{
            display: none;

        }

        kr-input.kr-input-focused .kr-input-edit{
            display: block;
        }

        kr-input .kr-input-property{
            display: block;
        }

        kr-input.kr-input-focused .kr-input-property {
            display: none;
        }

        kr-input .kr-input-value{
            display: block;
        }

        kr-input.kr-input-focused .kr-input-value{
            display: none;
        }


        kr-input .dragover {
            border-style: dotted;
            border-color: red;

        }

        .kr-input-line2:has(.kr-input-childrens:empty) {
          display: none;
        }


        kr-input:has(.kr-input-property:empty) .kr-input-property {
          display: none;
        }



    
    
    `
}