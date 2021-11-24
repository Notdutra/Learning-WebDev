//* Polimorfismo
//* Classes = funcao construtora

//! Superclass
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

//! Esse saldo nao pode ir negativo
Conta.prototype.sacar = function (valor) {
  if (valor <= this.saldo) {
    console.log(`Saldo insuficiente ${this.saldo}`);
    this.verSaldo();
    return;
  }

  this.verSaldo();
  this.saldo -= valor;
};

Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function () {
  console.log(
    `Agencia: ${this.agencia}/${this.conta} - Saldo: ${this.saldo.toFixed(2)}`
  );
};

function CC(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}
CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

//! Esse saldo pode ir negativo
CC.prototype.sacar = function (valor) {
  if (valor > this.saldo + this.limite) {
    console.log(`Saldo insuficiente ${this.saldo}`);
    this.verSaldo();
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

function CP(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

console.log('Polimorfismo');

const cc = new CC(11, 22, 0, 100);
cc.depositar(10);
cc.sacar(110);
cc.sacar(1);

console.log();

const cp = new CP(12, 33, 0);
cp.depositar(10);
cp.sacar(10);
cp.sacar(1);
