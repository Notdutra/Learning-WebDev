/**
 * ! Escreva uma funcao que recebe um numero e retorne o seguinte:
 * ! numero divisivel por 3 = Fizz
 * ! numero divisivel por 5 = Buzz
 * ! numero divisivel por 3 e 5 = FizzBuzz
 * ! outros numeros retorna o proprio numeros
 * ! checar se o numero é realmente um numero
 * ! use a funcao com numeros de o a 100
 */

function fizzbuzz(num) {
  if (typeof num === 'number') {
      console.log('entrou');
  } else {
      console.log('Nao entrou');
  }
}

fizzbuzz(3);
fizzbuzz(5);
fizzbuzz(15);
fizzbuzz(2);
