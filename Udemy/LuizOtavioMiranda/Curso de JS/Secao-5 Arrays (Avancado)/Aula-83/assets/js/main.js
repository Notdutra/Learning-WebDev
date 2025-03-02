const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
//! const a3 = a1+a2 nao funciona!, vira uma string

const a3 = a1.concat(a2);
console.log(a3 + ' \n');

let test1 = ['coisa', ...a1, 'outra coisa']; //* ... = Rest
let test2 = ['coisa', 'outra coisa', ...a1]; //* ... = Spread

console.log(test1);
console.log(test2 + ' \n');

const a4 = [...a1, 'Arthur', ...a2, 'novo array ->', ...[7, 8, 9]];
console.log(a4);
