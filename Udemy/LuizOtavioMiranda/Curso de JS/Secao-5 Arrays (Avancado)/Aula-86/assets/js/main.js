//* Reduce
//* nao mexe no array original, Retorna apenas um valor
//* o Acumulador é na real o previousValue,
//* (acumulador, valor, indice, vetor)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const somarOsnumeros = numeros.reduce(function (acumulador, valor) {
  acumulador += valor;
  return acumulador;
}, 0);
console.log(`Soma dos valores: ${somarOsnumeros} \n`);

//! Usando reduce como uma funcao de filter
const apenasPares = numeros.reduce(function (acumulador, valor) {
  if (valor % 2 === 0) {
    acumulador.push(valor);
  }
  return acumulador;
}, []);
console.log(`Somente os numeros pares: ${apenasPares} \n`);

//! Usando reduce como uma funcao de map
const valoresEmDobro = numeros.reduce(function (acumulador, valor) {
  acumulador.push(valor * 2);
  return acumulador;
}, []);
console.log(`Valores em dobro: ${valoresEmDobro} \n`);

//! --------------------------------------------------------

//* Retorne a pessoa mais velha

const pessoas = [
  { nome: 'Arthur', idade: 23 },
  { nome: 'Pedepano', idade: 3 },
  { nome: 'Bruna', idade: 23 },
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Leticia', idade: 19 },
  { nome: 'Rosana', idade: 64 },
  { nome: 'Wallace', idade: 47 },
];

const pessoaMaisVelha = pessoas.reduce((acumulador, valor) => {
  if (valor.idade > acumulador.idade) {
    acumulador = valor;
  }
  return acumulador;
});

console.log('A pessoa mais velha:');
console.log(pessoaMaisVelha);
