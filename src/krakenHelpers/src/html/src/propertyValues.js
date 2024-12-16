import { krakenBaseHelpers as h} from '../../base/krakenBaseHelpers.js'


export function propertyValues(record){

  

    let innerContent = ''
    for(let pv of record._propertyValues){


       let c = `
       <tr>
          <td>${pv.object.propertyID}</td>
          <td>${pv?.['@type']}</td>
          <td>${pv.object.value}</td>
          <td>${pv.metadata.credibility}</td>
          <td>${h.date.human.date(pv.metadata.createdDate)}</td>
        </tr>

       `

       innerContent += c
    }


    let content = `

       <table class="table">
          <thead>
            <tr>
              <th scope="col">PropertyID</th>
              <th scope="col">Action</th>
              <th scope="col">Value</th>
              <th scope="col">credibility</th>
              <th scope="col">createdDate</th>
            </tr>
          </thead>
          <tbody>
            ${innerContent}
            
         </tbody>
</table>

    `



    return content


}