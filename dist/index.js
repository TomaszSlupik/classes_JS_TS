"use strict";
class SwimmingPool {
    constructor(namePool) {
        this.namePool = namePool;
    }
}
const pool = new SwimmingPool('Basen WUM');
console.log(`Dzisiaj pływałem na: ${pool.namePool}`);
// Zmiana wartości 
class NumberWatch {
    constructor(number) {
        this.number = number;
    }
}
const watch = new NumberWatch(3);
watch.number = 10;
console.log(watch.number);
// Readonly
class WalkTheDog {
    constructor(dog, kilometers) {
        this.dog = dog;
        this.kilometers = kilometers;
    }
}
const walk = new WalkTheDog('Husky', 10);
walk.kilometers = 15;
console.log(`Wczoraj razem z ${walk.dog} zrobiliśmy ${walk.kilometers} km`);
// Public 
class Clerk {
    constructor(nameClerk) {
        this.nameClerk = nameClerk;
    }
    get workClerk() {
        return `Dzisiaj ${this.nameClerk} pracuje 8h`;
    }
}
const clerk = new Clerk('Tom');
console.log(clerk.nameClerk);
console.log(clerk.workClerk);
// Private
class Phone {
    constructor(production) {
        this.namePhone = 'Iphone';
        this.production = production;
    }
    infoUser() {
        console.log(`${this.namePhone} ma ${this.production} lat`);
    }
}
const iphone = new Phone(5);
console.log(iphone.infoUser());
// ZAPIS SKRÓCONY W KONSTRUKTORZE 
class Glass {
    constructor(nameGlass, year) {
        this.nameGlass = nameGlass;
        this.year = year;
    }
}
const glass = new Glass('Ray-ban', 3);
console.log(glass);
// Gettery 
class Weather {
    constructor(kind) {
        this.kind = kind;
    }
    get log() {
        return `Dzisiaj jest ${this.kind}`;
    }
}
const weather = new Weather('słonecznie');
console.log(weather.log);
// Settters
class NumberCheck {
    constructor(checkName, _score) {
        this.checkName = checkName;
        this._score = _score;
    }
    set scoreNumber(newScore) {
        if (newScore > 0) {
            this._score = newScore;
        }
        else {
            throw new Error('Błąd');
        }
    }
}
const numberCheck = new NumberCheck('Testowanie liczb', 20);
numberCheck.scoreNumber = 1;
console.log(numberCheck);
// Protected 
class TestCheck {
    constructor(nameTest) {
        this.marks = 4;
        this.nameTest = nameTest;
    }
}
class TestWeb extends TestCheck {
    testWeb() {
        this.marks = 5;
        return this.marks;
    }
}
const testWebMay = new TestWeb('Test z TS');
console.log(testWebMay);
console.log(testWebMay.testWeb());
class Bike {
    constructor(nameColor) {
        this.nameColor = nameColor;
    }
}
const myBike = new Bike('red');
console.log(myBike.nameColor);
class Sprint {
    constructor(numberOfKm) {
        this.numberOfKm = numberOfKm;
    }
}
class Standard {
    constructor(numberOfKm) {
        this.numberOfKm = numberOfKm;
    }
}
const sprint = new Sprint(20);
const standard = new Standard(40);
console.log(sprint);
console.log(standard);
class EnergyDrink {
    constructor(nameDrink) {
        this.nameDrink = nameDrink;
    }
    drinking() {
        console.log(this.nameDrink);
    }
}
const energydrink = new EnergyDrink('Red bull');
console.log(energydrink.drinking());
// Klasy abstrakcyjne 
class WorkerDay {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    talk() {
        console.log('Pracuje od Pon do Piątku');
    }
}
class FullTimeWork extends WorkerDay {
    getPay() {
        return 100;
    }
}
class PartTimeWork extends WorkerDay {
    getPay() {
        return 70;
    }
}
const fullTime = new FullTimeWork('Tom', 'Kowalski');
console.log(fullTime.firstName, fullTime.lastName, fullTime.getPay());
const partTime = new PartTimeWork('Jan', 'Kowal');
console.log(partTime.firstName, partTime.lastName, partTime.getPay());
