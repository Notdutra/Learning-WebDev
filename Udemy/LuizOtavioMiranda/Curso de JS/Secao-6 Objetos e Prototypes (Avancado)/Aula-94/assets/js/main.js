//* Manipulando Prototypes
//* new Object -> Object.prototype
const objA = {
  chaveA: 'A',
  test: 'Objeto A',
};

const objB = {
  chaveA: 'b',
  //* vamos fazer __proto__ === objA
};

Object.setPrototypeOf(objB, objA);
console.log(objB.chaveA);
console.log(objB.test);

const objC = new Object();
objC.chaveC = 'C';

//! Agora para continuar a cadeia
Object.setPrototypeOf(objC, objB);
//* C é filho de B que é filho de A
console.log();

//! --------------------------

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco -= this.preco * (percentual / 100);
};

Produto.prototype.aumento = function (percentual) {
  this.preco += this.preco * (percentual / 100);
};

const p1 = new Produto('Camiseta', 50);

console.log(p1);
p1.desconto(25);
console.log(p1 + '\n');

const p2 = {
  nome: 'Caneca',
  preco: 15,
};

Object.setPrototypeOf(p2, Produto.prototype);

console.log(p2);
p2.aumento(100);
console.log(p2 + '\n');

const p3 = Object.create(Produto.prototype, {
  //! Isso eh opcional
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 99,
  },
  tamanho: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42,
  },
});

// p3.preco = 99;
p3.desconto(25);
console.log(p3);
