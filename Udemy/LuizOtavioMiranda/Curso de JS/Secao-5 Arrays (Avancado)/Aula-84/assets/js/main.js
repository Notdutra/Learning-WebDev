//* Filter, map, reduce
//* Filter vai filtrar os valores do array
//* Filter sempre vai retornar um array com a mesma quantidade de elementos ou menos

//!   indice     0  1   2   3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosMaioresQueDez = numeros.filter((valor) => valor > 10);
console.log(`Array Original ${numeros}\n`);
console.log(`Array Filtrado ${numerosMaioresQueDez}\n`);

console.log('------------------------------------');
//* Retorne as pessoas que tem o nome com 5 letras ou mais
//* Retorne as pessoas com mais de 50 anos
//* Retorne as pessoas que o nome termina com a letra a

`const pessoas = [
  { nome: 'Arthur', idade: 23 },
  { nome: 'Pedepano', idade: 3 },
  { nome: 'Bruna', idade: 23 },
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Leticia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];`

console.log('\nPessoas que o nome tem 5 letras ou mais:');
const pessoasComNomeGrande = pessoas.filter((p) => p.nome.length >= 5);
console.log(pessoasComNomeGrande);

console.log('\nPessoas acima de 50 anos');
const pessoasComMaisDe50Anos = pessoas.filter((p) => p.idade > 50);
console.log(pessoasComMaisDe50Anos);

console.log("\nPessoas que o nome termina com a letra 'A'");
const pessoasQueTerminaEmA = pessoas.filter((p) => p.nome.endsWith('a'));
console.log(pessoasQueTerminaEmA);
