function Pessoa(nome, sobreNome, umaIdade) {
  //* atributo e metodo privado
  const id = 123456;
  const metodoInterno = function () {};

  this.nome = nome; //* mesma coisa que escrever Pessoa.nome = nome
  this.sobreNome = sobreNome;
  this.idade = umaIdade;

  this.dizerOi = function () {
    console.log('Oi, bom dia!');
  };
}

const arthur = new Pessoa('Arthur', 'Dutra', 23);
const pedepano = new Pessoa('Pedepano', 'Dalbem Dutra');

console.log(pedepano.nome);

console.log(`${arthur.nome} tem ${arthur.idade} anos`);
arthur.dizerOi();
