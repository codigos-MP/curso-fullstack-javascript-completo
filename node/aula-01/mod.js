class People {
    constructor(name) {
        this.name = name; 
    }
}

exports.People = People;

/*

Example #1

const name = 'Anderson';
const surname = 'Adolfo';

const tellName = () => {
    return `${name} ${surname}`;
}

console.log(module);

this = module.exports = exports

------- Forma inicial -------

module.exports.name = name;
module.exports.surname = surname;
module.exports.tellName = tellName;

------- formas diversas de adicionar atributo no objeto (exports)

module.exports.name = name;
exports.surname = surname;
this.tellName = tellName;

------- sobrescrevendo ------

module.exports = {
    name, surname, People
}

*/