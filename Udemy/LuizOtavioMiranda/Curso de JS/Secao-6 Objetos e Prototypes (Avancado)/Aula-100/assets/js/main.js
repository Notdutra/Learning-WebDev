//* Composicao / mixing
// * Usando funcao fabrica
const falar = {
  falar() {
    console.log(`${this.nome} esta falando`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} esta comendo`);
  },
};
const beber = {
  beber() {
    console.log(`${this.nome} esta bebendo`);
  },
};

// const pessoaPrototype = { ...falar, ...comer, ...beber };
//! tanto faz
const pessoaPrototype = Object.assign({}, falar, comer, beber);

function criaPessoa(nome, sobreNome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobreNome: { value: sobreNome },
  });
}

const p1 = criaPessoa('Arthur', 'Dutra');
const p2 = criaPessoa('Bruna', 'Dalbem');

p1.falar();
p2.beber();
