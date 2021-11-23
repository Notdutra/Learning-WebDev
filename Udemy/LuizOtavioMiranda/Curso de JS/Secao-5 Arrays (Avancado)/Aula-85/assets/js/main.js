//* Map nao mexe no array original, igual filter, ela retorna um array modificado
//* sempre retorna o mesmo numero de elementos

//* Dobrar os numeros
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
console.log(`Array de numeros: ${numeros} \n`);

const numerosEmDobro = numeros.map((valor) => valor * 2);
console.log(`Numeros dobrado: ${numerosEmDobro}`);

//! ----------------------------------------------------------------

//* Para cada elemento
//* Retorne apenas uma string com o nome da pessoa
//* Remova apenas a chave "nome" do objeto
//* Adicione uma chave id em cada objeto

const pessoas = [
  { nome: 'Arthur', idade: 23 },
  { nome: 'Pedepano', idade: 3 },
  { nome: 'Bruna', idade: 23 },
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Leticia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

const apenasNome = pessoas.map((value) => value.nome);
console.log(`\nApenas o nome das pessoas: ${apenasNome}`);

const apenasIdade = pessoas.map((value) => ({ idade: value.idade }));
console.log('\nApenas a idade das pessoas:');
console.log(apenasIdade);

const addId = pessoas.map((value, index) => ({
  id: index + 1,
  ...value,
}));

console.log('\nPessoas com id:');
console.log(addId);
