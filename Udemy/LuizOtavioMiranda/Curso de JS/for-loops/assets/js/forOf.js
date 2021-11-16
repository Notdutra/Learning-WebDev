//! Better for interable objects

const nome = "Pedepano";
const nomes = ['Arthur', 'Bruna' , 'Pedepano'];

// for (let i = 0; i < nome.length; i++) {
//     console.log(nome[i]);
// }

// for (let i in nome) {
//     console.log(nome[i]);
// }

// for (let valor of nomes) {
//     console.log(valor);
// }

nomes.forEach(function (valor, indice) {
  console.log(valor, indice);
});

/** 
 * ! For clasico - geralmente com iteraveis (Array ou strings)
 * ! For in - retorna o indice ou chave (String, asrrays, ou obejetos)
 * ! For of - retorna o valor em si (iteraveis, asrrays, ou strings)
 */