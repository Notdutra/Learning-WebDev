//* Funcao de splice
//* Indice positivo =  0,  1,  2,  3,  4,  5,  6
//* Indice negativo = -7, -6, -5, -4, -3, -2, -1
const nomes = [
  'Arthur', //* Indice 0
  'Pedepano', //* Indice 1
  'Bruna', //* Indice 2
  'Vitor', //* Indice 3
  'Jonatan', //* Indice 4
  'Diego', //* Indice 5
  'Lucas', //* Indice 6
];
console.log(`Array de nomes: ${nomes} \n`);
let removido = nomes.splice(3, 1); //! Deleta no indice 3 e apenas 1 apartir do 3
console.log(`Array de nomes: ${nomes} \n`);
console.log(`Array de removido: ${removido} \n`);

//* pop (tirar elemento do final) =  nomes.splice(-1, 1);
//* shift (tirar elemento do comeco) =  nomes.splice(0, 1);
//* push (adicionar elemento no final) = nomes.splice(nomes.length, 0, 'Ultimo Elemento');
//* unshift (adicionar elemento no comeco) = nomes.splice(0, 0, 'Primeiro Elemento');

nomes.splice(nomes.length, 0, 'Elemento');
console.log(`Array de nomes: ${nomes} \n`);
nomes.splice(0, 0, 'Primeiro');
console.log(`Array de nomes: ${nomes} \n`);
