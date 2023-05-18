"use strict";
class SwimmingPool {
    constructor(namePool) {
        this.namePool = namePool;
    }
}
const pool = new SwimmingPool('Basen WUM');
console.log(`Dzisiaj pływałem na: ${pool.namePool}`);
