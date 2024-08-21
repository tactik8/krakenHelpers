
import { krakenHelpers as k } from './src/index.js'



async function test(){
    

    
    let value = 'abc'
    let c = new k.Cache()

    c.set('path1', 'path2', value)

    let result = c.get('path1', 'path2')
            
    console.log(result)
    //expect(result).toStrictEqual(value);





}

test()
