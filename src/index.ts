class SwimmingPool {
    namePool: string
    constructor(namePool: string) {
        this.namePool = namePool
    }
}

const pool =  new SwimmingPool ('Basen WUM')

console.log(`Dzisiaj pływałem na: ${pool.namePool}`)