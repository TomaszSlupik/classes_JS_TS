class SwimmingPool {
    namePool: string
    constructor(namePool: string) {
        this.namePool = namePool
    }
}

const pool =  new SwimmingPool ('Basen WUM')

console.log(`Dzisiaj pływałem na: ${pool.namePool}`)


// Zmiana wartości 
class NumberWatch {
    number: number

    constructor(number: number) {
        this.number = number
    }
}

const watch = new NumberWatch(3)

watch.number = 10

console.log(watch.number)


// Readonly
class WalkTheDog {
    readonly dog: string
    kilometers: number

    constructor(dog:string, kilometers: number) {
        this.dog = dog
        this.kilometers = kilometers
    }
}

const walk = new WalkTheDog ('Husky', 10)
walk.kilometers = 15

console.log(`Wczoraj razem z ${walk.dog} zrobiliśmy ${walk.kilometers} km`)


// Public 
class Clerk {
    public nameClerk: string
    constructor(nameClerk: string) {
        this.nameClerk = nameClerk
    }
    get workClerk () {
        return `Dzisiaj ${this.nameClerk} pracuje 8h`
    }
}

const clerk = new Clerk ('Tom')
console.log(clerk.nameClerk)
console.log(clerk.workClerk)

// Private
class Phone {

    production: number
    private namePhone: string = 'Iphone'

    constructor (production: number) {
        this.production = production
    }

    infoUser () {
        console.log(`${this.namePhone} ma ${this.production} lat`)
    }
}

const iphone = new Phone(5)

console.log(iphone.infoUser())

// ZAPIS SKRÓCONY W KONSTRUKTORZE 
class Glass {
    constructor(public nameGlass: string, public year: number) {}
}
const glass = new Glass('Ray-ban', 3)
console.log(glass)

// Gettery 
class Weather {
    public kind: string

    constructor (kind:string) {
        this.kind = kind
    }

    get log () {
        return `Dzisiaj jest ${this.kind}`
    }
}

const weather =  new Weather ('słonecznie')

console.log(weather.log)

class NumberCheck {
    constructor(public checkName: string, private _score: number) {}

    set scoreNumber (newScore: number) {
        if (newScore > 0) {
            this._score =  newScore
        }
        else {
            throw new Error ('Błąd')
        }
    }
}

const numberCheck = new NumberCheck('Testowanie liczb', 20)

numberCheck.scoreNumber = 1
console.log(numberCheck)




