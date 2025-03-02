//* Factory funciton
function criaPessoa(nome, sobreNome) {
  return {
    nome,
    sobreNome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobreNome}`;
    },
  };
}

const p1 = criaPessoa('Arthur', 'Dutra');
// console.log(p1);
// console.log(p1.nome);
// console.log(p1.sobreNome);
// console.log(p1.nomeCompleto);

//* Constructor function
function Pessoa(nome, sobreNome) {
  this.nome = nome;
  this.sobreNome = sobreNome;
  this.nomeCompleto = `${this.nome} ${this.sobreNome}`;
}

const p2 = new Pessoa('Arthur', 'Dutra');
// console.log(p2);
// console.log(p2.nome);
// console.log(p2.sobreNome);
// console.log(p2.nomeCompleto);
