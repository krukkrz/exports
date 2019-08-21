export class Export{
    id:number
    name: string
    date_time: Date
    user: string
    local: string

    constructor(id:number, name: string, date_time: Date, user: string, local: string){
        this.id = id
        this.name = name
        this.date_time = date_time 
        this.user = user
        this.local = local
    }
}