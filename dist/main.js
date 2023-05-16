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
