const relogio = document.querySelector(".relogio");

let segundos = 0;
let timer;

document.addEventListener("click", function (event) {
  const el = event.target;

  if (
    el.classList.contains("iniciar") &&
    (segundos === 0 || relogio.classList.contains("pausado"))
  ) {
    relogio.classList.remove("pausado");
    limpaTimer();
    iniciaRelogio();
  }
  if (
    el.classList.contains("pausar") &&
    relogio.innerHTML != "00:00:00" &&
    !relogio.classList.contains("pausado")
  ) {
    relogio.classList.add("pausado");
    limpaTimer();
  }
  if (el.classList.contains("zerar") && relogio.innerHTML != "00:00:00") {
    relogio.classList.remove("pausado");
    limpaTimer();
    zerarTimer();
  }
});

function criaHoraDosSegundos(segundos) {
  const data = new Date(segundos * 1000);
  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
    timeZone: "UTC",
  });
}

function iniciaRelogio() {
  timer = setInterval(function () {
    segundos++;
    relogio.innerHTML = criaHoraDosSegundos(segundos);
  }, 1000);
}

function zerarTimer() {
  relogio.innerHTML = "00:00:00";
  segundos = 0;
}

function limpaTimer() {
  clearInterval(timer);
}
