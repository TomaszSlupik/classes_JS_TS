"use strict";
class Worker {
    constructor() {
        console.log('Konstruktor');
    }
    work() {
        console.log("Pracujemy dziś 5h");
    }
}
const workerOne = new Worker();
workerOne.work();
const workerTwo = new Worker();
workerTwo.work();

// Konstruktor z paramterami
class Runner {
    constructor (first_name, last_name) {
        this.first_name = first_name
        this.last_name = last_name
    }
    inforun () {
        console.log('Informacje o biegaczu')
    }
}

const runnerOne = new Runner ('Jan', 'Kowalski')
console.log(`Biegacz pierwszy: ${runnerOne.first_name} ${runnerOne.last_name}`)

// Prywatny parametr
class Coffee {
    #score = 10
    constructor(nameCoffee) {
        nameCoffee = this.nameCoffee
    }
    getScore () {
        return this.#score
    }
}

const coffeeOne = new Coffee ("Costa")
console.log(coffeeOne)
console.log(coffeeOne.getScore())

// Getery 
class Drink {
    #name = 'Kawa' 
    constructor(drink) {
        drink = this.drink
    }

    get drinkMorning () {
        return `Dzisiaj z rana piję ${this.#name}`
    }
}

const morning = new Drink()
console.log(morning.drinkMorning)

// Setery 
class Watch {
    #namewatch = 'Polar'
    set namewatch (newName) {
        this.#namewatch = newName
    }
    getNamewatch() {
        return this.#namewatch;
    }
}

const watchTwo = new Watch()
watchTwo.namewatch = 'Garmin'
console.log(watchTwo.getNamewatch())


// Extends class

class Player {
    static describe = 'I play 3 hours'

    constructor (firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
}

const playerOne = new Player('Jan', 'Kowalski')

class AdminPlayer extends Player {
    isAdmin = true
}

const adminPlayer = new AdminPlayer('Leszek', 'Kic')

console.log(playerOne.firstName, playerOne.lastName)
console.log(adminPlayer.firstName, adminPlayer.lastName, adminPlayer.isAdmin)

// SUPER 
class Swimming {
    constructor (swim) {
        this.swim = swim
    }
}

class Running extends Swimming {
    
    constructor (swim, bike) {
        super(swim)
        this.bike = bike
    }
}

const swimRun = new Running('pływałem Open Water', ['rower czasowy', 'rower szosowy'])
console.log(swimRun)