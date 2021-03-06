const axios = require('axios');
const { People } = require('./mod1');

const people = new People('Anderson');

console.log(people);

axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(error => console.log(error))

/*

Example #1

------- Formas diversas de se fazer um require('') --------

const mod1 = require('./mod1');

const tellName = mod1.tellName;
console.log(tellName());

------------

const tellName = require('./mod1').tellName;
console.log(tellName());

------------

const { name, surname, tellName } = require('./mod1');
console.log(name, surname, tellName());

*/