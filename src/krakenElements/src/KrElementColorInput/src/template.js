

export const template = {

    get: getTemplate
    
}

function getTemplate(){


    let template = `

        <div class="row align-items-center">

            <div class="col col-auto align-center">  
              <input type="color" class="krColorInput"  />
            </div>
            <div class="col col-auto"> 
               <input type="text" class="krColorValueHex" size="8" value="#"/>
               <i class="bi bi-clipboard-plus krActionHEXClipboard"></i>
            </div>
            <div class="col col-auto"> 
               <input type="text" class="krColorValueHex" size="12" value=""/>
               <i class="bi bi-clipboard-plus krActionRGBClipboard"></i>
            </div>
            <div class="col col-auto">
              <label for="body">Body</label>
            </div>

        </div>

    `
    return template

    
}