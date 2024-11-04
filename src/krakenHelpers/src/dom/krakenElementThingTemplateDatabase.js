

let DB = {}

export const templateDB = {
    get: get,
    set: set
}


function get(value){
    return DB?.[value] || null
}

function set(value, template){
    DB[value] = template
}