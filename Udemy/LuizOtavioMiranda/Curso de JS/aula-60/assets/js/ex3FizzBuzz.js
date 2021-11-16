/**
 * ! Escreva uma funcao que recebe um numero e retorne o seguinte:
 * ! numero divisivel por 3 = Fizz
 * ! numero divisivel por 5 = Buzz
 * ! numero divisivel por 3 e 5 = FizzBuzz
 * ! outros numeros retorna o proprio numeros
 * ! checar se o numero é realmente um numero
 * ! use a funcao com numeros de o a 100
 */

function fizzbuzz(number) {
  if (typeof number !== "number") {
    return number;
  }

  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz";
  }
  if (number % 3 === 0) {
    return "Fizz";
  }
  if (number % 5 === 0) {
    return "Buzz";
  }

  return number;
}

console.log(fizzbuzz(`New York City`));

for (let i = 0; i <= 100; i++) {
  console.log(i, fizzbuzz(i));
}
