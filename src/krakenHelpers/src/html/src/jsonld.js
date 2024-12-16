

export function jsonld(record){
    /**
     * Returns the record in JSON ld format
     * 
     */


    if(!record || record == null){ return ''}
    
    record['@context'] = record['@context'] || "https://schema.org/"

    return `
    
    <script type="application/ld+json">

        ${JSON.stringify(record, null, 4)}
        
    </script>

    `
    
}