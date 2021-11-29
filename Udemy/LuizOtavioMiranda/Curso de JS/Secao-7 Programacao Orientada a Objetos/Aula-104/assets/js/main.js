//* Herança com classes
class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(`${this.nome} ja esta ligado`);
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(`${this.nome} ja esta desligado`);
      return;
    }

    this.ligado = false;
  }
}

class SmartPhone extends DispositivoEletronico {
  constructor(nome, cor, modelo) {
    super(nome);

    this.cor = cor;
    this.modelo = modelo;
  }
}

class Tablet extends DispositivoEletronico {
  constructor(nome, temWifi) {
    super(nome);
    this.temWifi = temWifi;
  }

  ligar() {
    //! Sobreescreveu o metodo ligar da classe DispositivoEletronico
    console.log('Olha, voce alterou o metodo ligar');
  }

  falaOi() {
    //! Pertenca apenas a classe Tablet
    console.log('Oi');
  }
}

const s1 = new SmartPhone('Samsung', 'Azul', 'Galaxy S20');
console.log(s1);

console.log();

const t1 = new Tablet('iPad', true);
console.log(t1);
