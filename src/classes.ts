interface martialArtist {
    baseMartialArt: string
}

class Fighter implements martialArtist{
    // public (default) | private | proctected | readonly
    private firstName: string
    private lastName: string
    // properties that are defined in the inteface cannot be protected.
    readonly baseMartialArt: string
    protected fightAttitude: string
    static readonly occupation: string = 'Prize Fighting'
    constructor(firstName: string, lastName: string, baseMartialArt: string = 'MMA', fightAttitude:string){
        this.firstName = firstName
        this.lastName = lastName
        this.baseMartialArt = baseMartialArt
        this.fightAttitude = fightAttitude
    }
    getFullName = ():string => {
        return this.firstName + this.lastName
    }
}

class Trainer extends Fighter{
    private dojoName: string
    constructor(dojoName:string, firstName: string, lastName: string, baseMartialArt: string = 'MMA', fightAttitude:string){
        super(firstName, lastName, baseMartialArt, fightAttitude)
        this.dojoName =dojoName
    }
    getDojoName =():string => {
        return this.dojoName
    }
    setDojoName = (dojoName:string):void => {
        this.dojoName = dojoName
    }
    getFightAttitude():string{
        return this.fightAttitude
    }
}

const satti:Fighter = new Fighter('Satti', 'Reddy', 'Samurai', 'hyper-agressive')

const subbi:Trainer = new Trainer('blackArea', 'Subbi', 'reddy', 'MMA', 'stressed')

console.log(Fighter.occupation)

console.log(subbi.getFightAttitude())
console.log(subbi.getDojoName())

