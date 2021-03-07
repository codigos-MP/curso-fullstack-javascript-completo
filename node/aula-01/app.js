const axios = require('axios');
const { People } = require('./mod');

const people = new People('Anderson');

console.log(people);

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(error => console.log(error))

/*

Example #1

------- Formas diversas de se fazer um require('') --------

const mod1 = require('./mod');

const tellName = mod.tellName;
console.log(tellName());

------------

const tellName = require('./mod').tellName;
console.log(tellName());

------------

const { name, surname, tellName } = require('./mod');
console.log(name, surname, tellName());

*/