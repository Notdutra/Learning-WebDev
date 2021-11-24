//* Polimorfismo
//* Classes = funcao construtora

//! Superclass
function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (this.saldo <= valor) {
    this.verSaldo();
    return;
  }
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

const conta1 = new Conta(11, 2201, 0);

console.log(conta1);
conta1.depositar(1000);
console.log(conta1);
