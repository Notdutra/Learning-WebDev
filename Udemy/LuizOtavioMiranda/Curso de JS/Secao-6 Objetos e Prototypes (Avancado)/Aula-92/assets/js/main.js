const produto = { nome: 'Caneca', preco: 1.8 };
const outraCoisaIgual = produto;
const outraCoisaDiferente = { ...produto };

outraCoisaIgual.nome = 'Outro nome';
outraCoisaIgual.preco = 2.5;

outraCoisaDiferente.nome = 'Nome unico';
outraCoisaDiferente.preco = 4.5;
console.log(produto);
console.log(outraCoisaDiferente);
