const pessoa = {
  nome: "Arthur",
  sobreNome: "Dutra",
  idade: 23,
  endereco: {
    rua: "Intendente Alfredo Azevedo",
    numero: 399,
  },
};

// console.log(pessoa.nome);

// const nome = pessoa.nome;
// console.log(nome);

//!Atribuicao via desetruturacao
const { nome, sobreNome } = pessoa;
console.log(`${sobreNome}, ${nome}`);
