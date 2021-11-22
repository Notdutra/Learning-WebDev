function* geradora1() {
  //* algum codigo aqui
  yield 'Valor 1';
  //* mais algum codigo aqui
  yield 'Valor 2';
  //* e mais algum codigo aqui
  yield 'Valor 3';
}

// const g1 = geradora1();
// for (const valor of g1) {
//   console.log(valor);
// }

function* geradora2() {
  let i = 0;
  for (let i = 0; 1 === 1; i++) {
    yield i;
  }
}

// const g2 = geradora2();
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);
// console.log(g2.next().value);

function* geradora3() {
  yield 0;
  yield 1;
  yield 2;
}

function* geradora4() {
  yield* geradora3();
  yield 3;
  yield 4;
  yield 5;
}

// const g4 = geradora4();
// for (const valor of g4) {
//   console.log(valor);
// }

function* geradora5() {
  yield function () {
    console.log('vim do y1');
  };

  // mais codigo qualquer

  yield function () {
    console.log('vim do y2');
  };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();
