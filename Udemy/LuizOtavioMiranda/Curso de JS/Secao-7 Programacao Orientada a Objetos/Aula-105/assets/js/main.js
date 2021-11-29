//* Metodos estaticos

class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  aumentarVolume() {
    if (this.volume < 100) {
      this.volume += 2;
    }
  }

  diminuirVolume() {
    if (this.volume > 0) {
      this.volume -= 2;
    }
  }

  //* Metodo de instancia
  //   trocaPilha() {
  //     console.log('Metodo de instancia');
  //   }

  static trocaPilha() {
    console.log('Metodo estatico');
  }
}

const c1 = new ControleRemoto('LG');

c1.aumentarVolume();
c1.aumentarVolume();
c1.aumentarVolume();

console.log(c1);

ControleRemoto.trocaPilha();
