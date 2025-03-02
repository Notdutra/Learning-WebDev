/**
 * ! Escreva uma funcao chamada ePaisagem que
 * ! recebe dois argumentos, largura e altura de uma imagem (number)
 * ! Retorne true se a imagem estiver no modo paisagem
 */

// function ePaisagem1(larguram, altura) {
//   if (largura > altura) {
//     return true;
//   }
//   return false;
// }

const ePaisagem2 = (larguram, altura) => largura > altura;

console.log(ePaisagem2(1920, 1080));
