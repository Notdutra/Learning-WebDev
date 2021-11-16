const frutas = ["Abacaxi", "Manga", "Morango", "Limao"];

// for (let i = 0; i < frutas.length; i++) {
//     console.log(frutas[i]);
// }

// for (let i in frutas) {
//   console.log(frutas[i]);
// }

const pessoa = {
  nome: "Arthur",
  sobreNome: "Dutra",
  idade: 23,
};

// console.log(pessoa.nome);
//! sao as mesmas coisas
// console.log(pessoa['nome']);

// for (let i in pessoa) {
//   console.log(i);
// }

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}
