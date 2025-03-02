//* defineProperty - defineProperties

function Produto(nome, preco, estoque) {
  Object.defineProperty(this, 'estoque', {
    enumerable: true, //! mostra a chave
    value: estoque, //! valor
    writable: false, //* nao pode alterar
    configurable: true, //! pode configurar novamente esta property
  });

  Object.defineProperties(this, {
    nome: {
      enumerable: true, //! mostra a chave
      value: nome, //! valor
      writable: true, //! pode alterar
      configurable: true, //! pode configurar novamente esta property
    },

    preco: {
      enumerable: true,
      value: preco,
      writable: true,
      configurable: true,
    },
  });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

for (const item in p1) {
  console.log(item);
}
