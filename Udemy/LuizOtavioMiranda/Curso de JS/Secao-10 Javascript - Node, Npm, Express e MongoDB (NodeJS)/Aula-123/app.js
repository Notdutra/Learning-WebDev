// const mod1 = require('./mod1');
// console.log(mod1.falaNome());

// const falaNome = require('./mod1').falaNome;
// console.log(falaNome());

// const { nome, sobreNome, falaNome } = require('./mod1');
// console.log(nome, sobreNome);
// falaNome();

// const { Pessoa } = require('./mod1');

// const p1 = new Pessoa('Pedepano');
// console.log(p1);

const path = require('path');
const axios = require('axios');

// axios('https://www.otaviomiranda.com.br/files/json/pessoas.json')
//     .then(response => console.log(response.data))
//     .catch(e => console.log(e));

const { Pessoa } = require('./mod1');
const mod1 = require('./mod1');

const p1 = new Pessoa('Pedepano');
console.log(p1);

console.log(mod1);