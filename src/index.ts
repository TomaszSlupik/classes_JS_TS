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

// Settters
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

// Protected 

class TestCheck {

    nameTest: string
    protected marks: number = 4

    constructor (nameTest: string) {    
        this.nameTest = nameTest
    }
}

class TestWeb extends TestCheck {
    testWeb () {
        this.marks = 5
        return this.marks
    }
}

const testWebMay = new TestWeb('Test z TS')

console.log(testWebMay)
console.log(testWebMay.testWeb())

// Class and Interface - implements

interface Colorful {
    color: string
}

class Bike {
    constructor(public nameColor: string) {}
}

const myBike = new Bike ('red')

console.log(myBike.nameColor)

// 2 przykład - implements
interface RoadBike {
    numberOfKm: number
}

class Sprint implements RoadBike {
    constructor (public numberOfKm: number) {}
}

class Standard implements RoadBike {
    constructor (public numberOfKm: number) {}
}

const sprint = new Sprint (20)
const standard = new Standard (40)

console.log(sprint)
console.log(standard)

// 3 przykład - implements
interface Drink {
    nameDrink: string
}

interface DrinkCold {
    drinking (): void
}

class EnergyDrink implements Drink, DrinkCold {
    constructor (public nameDrink: string) {}

    drinking(): void {
        console.log(this.nameDrink)
    }
}

const energydrink = new EnergyDrink ('Red bull')

console.log(energydrink.drinking())


// Klasy abstrakcyjne 

abstract class WorkerDay {
    constructor (public firstName: string, public lastName: string) {}

    abstract getPay (): number

    talk() {
        console.log('Pracuje od Pon do Piątku')
    }
}

class FullTimeWork extends WorkerDay {
    getPay(): number {
        return 100
    }
}

class PartTimeWork extends WorkerDay {
    getPay(): number {
        return 70
    }
}

const fullTime = new FullTimeWork('Tom', 'Kowalski')
console.log(fullTime.firstName, fullTime.lastName, fullTime.getPay())

const partTime = new PartTimeWork('Jan', 'Kowal')
console.log(partTime.firstName, partTime.lastName, partTime.getPay())


