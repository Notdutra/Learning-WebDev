//* Construtora -> molde (tipo classe)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  //   this.nomeCompleto = () => {
  //     `Original ${this.nome} ${this.sobrenome}`;
  //   }; //! Se descomentar este, o prototype nao vai ser utilizado
}

//* Instanciando o objeto Pessoa
const p1 = new Pessoa('Arthur', 'Dutra');
const p2 = new Pessoa('Bruna', 'Dalbem');

//! console.log() retorna um objeto como string
//! console.dir() ja parece como objeto
console.dir(p1);
console.dir(p2);

console.log('------------------------------');

Pessoa.prototype.nomeCompleto = function () {
  return `prototype ${this.nome} ${this.sobrenome}`;
};
