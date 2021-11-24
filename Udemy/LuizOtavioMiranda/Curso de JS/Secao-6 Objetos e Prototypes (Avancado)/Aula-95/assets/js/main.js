//* Heranca
// Produtos -> aumento e desconto de preco para ambas
// Camiseta = cor, caneca = material
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};
Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const camisa = new Camiseta('Regata', 7.5, 'Preta');
camisa.aumento(10);
console.log(camisa);
console.log();

function Caneca(nome, preco, material) {
  Produto.call(this, nome, preco);
  this.material = material;
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.constructor = Caneca;

const c1 = new Caneca('Pink Floyd', 45, 'Ceramica');
console.log(c1);
c1.aumento(4);
console.log(c1);
