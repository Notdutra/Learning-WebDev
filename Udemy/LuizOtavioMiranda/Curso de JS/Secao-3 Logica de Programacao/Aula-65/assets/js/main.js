function mostraHora() {
  const data = new Date();

  return data.toLocaleTimeString("pt-BR", {
    hour12: true,
  });
}

// function funcaoDoInterval() {
//   console.log(mostraHora());
// }

// setInterval(funcaoDoInterval, 1000);

const timer = setInterval(function () {
  console.log(mostraHora());
}, 1000);

setTimeout(function () {
  clearInterval(timer);
}, 3000);

setTimeout(function () {
  console.log("I am watching you");
}, 5000);
