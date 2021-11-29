class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor) {
    valor = valor.split(' ');
    this.nome = valor[0];
    this.sobrenome = valor[1];
  }
}

const p1 = new Pessoa('Arthur', 'Dutra');
console.log(p1.nomeCompleto + '\n');

p1.nomeCompleto = 'Bruna Dalbem';
console.log(p1.nome);
console.log(p1.sobrenome);
