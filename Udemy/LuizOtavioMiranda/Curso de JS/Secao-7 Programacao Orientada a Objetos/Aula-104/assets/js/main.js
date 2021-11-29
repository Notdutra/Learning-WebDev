//* Herança com classes
console.log('Hello');

class DispositivoEletronico() {
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