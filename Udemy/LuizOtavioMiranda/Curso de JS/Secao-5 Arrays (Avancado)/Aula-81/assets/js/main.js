//*     Indice    0          1          2
const nomes = ['Arthur', 'Pedepano', 'Bruna'];
const novo = nomes; //! Alteracoes em cada um vai alterar o outro
const indepenent = [...nomes]; //! Agora eh independente
console.log(nomes);

nomes.pop();
console.log(nomes + '\n');

nomes.push('Bruna');
console.log(nomes);

nomes.shift();
console.log(nomes + '\n');
nomes.unshift('Arthur');
console.log(nomes + '\n');

//* pop remove do final, shift remove no comeco
//* push adiciona no final e unshift adiciona no comeco

//* Slice retorna uma fatia do array, nao altera o 'master'
nomes.push('Remover depois');
console.log(nomes);
const afterSlice = nomes.slice(0, -1);
console.log(afterSlice + '\n');

//* split devide uma string em array
const meuNome = 'Arthur Schossler Dutra';
const arrayDoMeuNome = meuNome.split(' '); //! dividindo por espaco
console.log(arrayDoMeuNome + '\n');

let frase = ['Hello', 'how', 'are', 'you?'];
console.log(frase + ' ' + typeof frase);
frase = frase.join(' ');
console.log(frase + ' ' + typeof frase);
