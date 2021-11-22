//* try {
//! Essa parte é executada quanto nao ha erros
//* } catch (error) {
//! Executada quanto ha erros
//* } finally {
//! Sempre roda
//*}

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
  //  console.log(error);
  //! nao mostrar isso para o usuario!!! sempre colocar algo amigavel sem vazar informacao interna
} finally {
  console.log("FINALLY: Eu sempre sou executado");
}

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError("Esperando instancia de 'Date'.");
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

try {
  const dataAtual = new Date();
  const hora = retornaHora(dataAtual);
  console.log(hora);
} catch (error) {
  // Tratar erro
} finally {
  console.log("Tenha um otimo dia!");
}
