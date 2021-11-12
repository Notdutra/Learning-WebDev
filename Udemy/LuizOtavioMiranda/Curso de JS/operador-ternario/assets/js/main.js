const idadeDoUsuario = 23;
const podeEntrar = idadeDoUsuario >= 18 ? "Pode entrar!" : "Nao pode entrar!";

console.log(podeEntrar);

//! Setando um valor para variavel

const corEscolida = null;
const corPadrao = corEscolida || "Yellow";

console.log(corEscolida, corPadrao);
