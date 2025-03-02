function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector('.resultado');
  const pessoas = [];

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const nome = form.querySelector(".nome");
    const sobreNome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    console.log(nome.value, sobreNome, peso, altura);

    pessoas.push({
      nome: nome.value,
      Sobrenome: sobreNome.value,
      peso: peso.value,
      altura: altura.value
    });

    resultado.innerHTML += (`<p>${nome.value} ${sobreNome.value} ` +
      `${peso.value} ${altura.value}</p>`);
  }

  form.addEventListener("submit", recebeEventoForm);
}

meuEscopo();
