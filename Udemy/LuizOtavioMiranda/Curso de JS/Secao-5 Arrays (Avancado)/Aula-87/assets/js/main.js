//* Filter + Map + Reduce

//* Retorne a soma do dobro de todos os pares
//* -> Filtrar Pares
//* -> Dobrar os valores
//* -> Reduzir (Somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
console.log('Os numeros do array:');
console.log(numeros);

const numerosPares = numeros.filter((value) => value % 2 == 0);
console.log('\nAgora somente os pares do array:');
console.log(numerosPares);

const dobrarOsPares = numerosPares.map((value) => value * 2);
console.log('\nAgora os pares dobrado:');
console.log(dobrarOsPares);

const somarOsvalores = dobrarOsPares.reduce(
  (ac, valor) => ac + valor
);

console.log('\nAgora a soma dos pares:');
console.log(somarOsvalores);

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
