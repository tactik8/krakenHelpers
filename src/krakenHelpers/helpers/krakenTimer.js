
import { krakenTextTable } from './krakenTextTable.js'


export class KrakenTimer {

    constructor(name) {

        this.name = name
        this.milestones = []

        this.start()
       
    }

    getMilestone(name){
        for(let m of this.milestones){
            if (m.name == name) { return m }
        }
        return undefined
    }
    
    addMilestone(name){
        // Adds a milestone

        if (!name || name == null){
            name = 'break ' + String(this.milestones.length)
        }
        
        let milestone = {
            "@type": "Event",
            "@id": String(crypto.randomUUID()),
            "name": name,
            "endTime": new Date()
        }
        this.milestones.push(milestone)
    }

    break(name){
        this.addMilestone(name)
    }

    start(){
        this.milestones = []
        this.addMilestone('start')
    }

    end(){
       
        this.addMilestone('end')
    }

    
    getDuration(startMilestone, endMilestone){

        if(!endMilestone || endMilestone == null){
            endMilestone = startMilestone
            startMilestone = 'start'
        }
        if(!startMilestone){
            startMilestone = 'start'
            endMilestone = 'end'
        }    

        let startTime = this.getMilestone('start')?.endTime
        let endTime = this.getMilestone('end')?.endTime ?? new Date()

        let duration = (endTime - startTime) / 1000

        return duration
    
        
    }

    get duration(){
        return this.getDuration()
    }

    getResults(){

        let results = []

        // Set first milestone to 0
        this.milestones[0].duration = {
            "@type": "QuantitativeValue",
            "@id": String(crypto.randomUUID()),
            "unitCode": "SEC",
            "unitText": "s",
            'value': 0
        }            
        
        for(let i=1; i< this.milestones.length -1; i++){
            let currentMilestone = this.milestones[i]
            let previousMilestone = this.milestones[i-1]
            let duration = (currentMilestone.endTime - previousMilestone.endTime) / 1000
            currentMilestone.duration = {
                "@type": "QuantitativeValue",
                "@id": String(crypto.randomUUID()),
                "unitCode": "SEC",
                "unitText": "s",
                'value': duration
            }            
            results.push(currentMilestone)
        }

         // Add milestone for total

        if(this.milestones.length > 2){
            let endMilestone = {
                "@type": "Event",
                "@id": String(crypto.randomUUID()),
                "name": "Total",
                "duration": {
                        "@type": "QuantitativeValue",
                        "@id": String(crypto.randomUUID()),
                        "unitCode": "SEC",
                        "unitText": "s",
                        'value': this.duration
                    }            
            }
            results.push(endMilestone)
        }
        
        return results
        
    }

    console(){

        
        let results = this.getResults()

        let keys = ['name', 'duration']
        let headers = ['Timer milestone', 'Duration']

        let content = krakenTextTable(results, keys, headers)

        console.log(content)
    }
    
}