/*

---- exemplo 1 -----
module.exports = function(x, y) {
    return x * y;
}

----- exemplo 2 -----
module.exports = 2;

*/

module.exports = class Cachorro {
    constructor(nome) {
        this.nome = nome;
    }

    latir() {
        console.log(`${this.nome} está latindo`);
    }
}
