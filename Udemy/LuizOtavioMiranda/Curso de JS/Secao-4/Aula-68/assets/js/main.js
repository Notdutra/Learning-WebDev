//* Declaracao de funcao (Function hoisting)

falaOi(); //! pode chamar a funcao antes dela
function falaOi(params) {
  console.log("Oi.");
}

//* First-class objects (Objetos de primeira classe)
// * Function expression

const souUmDado = function () {
  console.log("Sou um dado.");
};
souUmDado();

//! umas coisas loucas de JavaScript
// function executaUmaFuncao(souUmDado)
// function executaUmaFuncao(funcao) {
//   funcao();
// }

//* Arrow function

const funcaoArrow = () => {
  console.log("Sou uma arrow function.");
};
funcaoArrow();

//* Dentro de um objeto
const obj = {
  falar: function () {
    console.log("Estou falando...");
  },
  falar2() {
    console.log("Estou falando dnv...");
  },
};

obj.falar();
obj.falar2();
