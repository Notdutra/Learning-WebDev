// try {
//   console.log(naoexisto);
// } catch (error) {
//   console.log("Puts deu merda");
// }

function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    //! throw "x e y precisam ser numeros!";  para enviar so esta mensagem
    throw new Error("x e y precisam ser numeros!");
  }

  return x + y;
}

try {
  console.log(soma(1, 3));
  console.log(soma(1, "Arthur"));
} catch (error) {
  console.log(error);
  //! nao mostrar isso para o usuario!!! sempre colocar algo amigavel sem vazar informacao interna
}