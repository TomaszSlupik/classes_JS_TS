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

