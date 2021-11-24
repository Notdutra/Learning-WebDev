//* Ja vimos
//* Object.keys (retorna as chaves)
//* Object.freeze (congela o objeto)
//* Object.defineProperties (define varias propriedades)
//* Objedct.defineProperty (define uma propriedade)

const produto = { nome: 'produto', preco: 1.8 };
Object.defineProperty(produto, 'nome', {
  writable: false,
  configurable: false,
  value: 'Qualquer outra coisa', //! Aqui eu posso mudar
});

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

produto.nome = 'Outra coisa';
console.log(produto); //! Nao alterou por causa do writable

delete produto.nome;
console.log(produto); //! Nao deletou por causa do configurable

// delete produto.preco;
// console.log(produto); //! Alterou
console.log('\n\n');
console.log(Object.values(produto)); //* Retorna os valores
console.log(Object.keys(produto)); //* Retorna as chaves
console.log(Object.entries(produto)); //* Retorn em array [key, value]
