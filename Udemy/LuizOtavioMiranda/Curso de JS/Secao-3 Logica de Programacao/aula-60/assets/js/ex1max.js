//! Escreva uma funcao que recebe 2 numeros e retorne o maior deles

function max1(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function max2(x, y) {
  if (x > y) {
    return x;
  }
  return y;
}

function max3(x, y) {
  if (x > y) return x;
  return y;
}

function max4(x, y) {
  return x > y ? x : y;
  //! SE X FOR MENOR QUE Y
  //! RETORNE X, SENAO RETORNE Y
}

//! Jeito mais ninja de se fazer
const max5 = (x, y) => x > y ? x : y;

console.log(max1(420, 69));
console.log(max2(420, 69));
console.log(max3(420, 69));
console.log(max4(420, 69));
console.log(max5(420, 69));
