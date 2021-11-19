//!https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
const tresHoras = 60 * 60 * 3 * 1000;
//! 60 segundos * 60 segundos = 1 hora, 3 horas, porem ja que esta em ms tem que * 1000
let data = new Date(0 + tresHoras);
//! Timestap unix ou epoca unix
console.log(`${data.toString()} \n`);


const umDia = 60 * 60 * 24 * 1000;
data = new Date(0 + umDia);
console.log(`${data.toString()} \n`);

data = new Date();
console.log(`Data atual: ${data.toString()} \n`);

data = new Date(2021, 6, 31); //! (year, month, date, hours, minutes, seconds, ms)
//! ou data = new Date(2021-06-20 10:20:30);
console.log(`Meu aniversario: ${data.toString()} \n`);
