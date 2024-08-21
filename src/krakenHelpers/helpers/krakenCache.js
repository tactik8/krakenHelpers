export class KrCache {
    constructor() {
        this._db = {};

        this._maxArgsLength = 0

    }


    getAll(argsLength){
        // Retrieves all values from cache
        
        function getValues(db, maxArgsLength, l=0){

            let results = []

            // Stop if reached depth
            if(l == maxArgsLength){
                results.push(db)
                return results
            }

            // Iterate through paths
            for(let k of Object.keys(db)){
                results = results.concat(getValues(db[k], maxArgsLength, l + 1))
            }
            return results

        }

        argsLength = argsLength || this._maxArgsLength
        let results = getValues(this._db, argsLength)

        return results
        
    }

    

    set(args){
        // Set a value in cache. First arguments is the path,  Last argument is the actual value
        

        let path = this._db

        let i

        let a = arguments.length -1

        
        for(i=0; i < arguments.length -2; i++){            

            if(!path[arguments[i]]){
                path[arguments[i]] = {}
            }
            path = path[arguments[i]]
        }

        if(this._maxArgsLength < a){
            this._maxArgsLength = a
        }
        
        path[arguments[a-1]] = arguments[a]

        return
    }

    get(args){
         // Get a value in cache.
        let a = arguments.length -1
        let i
        let path = this._db
        
        for(i=0; i < arguments.length -1; i++){

            
            path = path?.[ arguments[i]]
            if(!path){ return null }
        }

        return path[arguments[a]] 
    }

    
}
