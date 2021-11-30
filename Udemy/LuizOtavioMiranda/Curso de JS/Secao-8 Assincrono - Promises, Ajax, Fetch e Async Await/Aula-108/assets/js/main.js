//* Promises
function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== 'string') reject('BAD VALUE');
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

esperaAi('conexao com o BD', rand(1, 3))
  .then(response => {
    console.log(response);
    return esperaAi('Buscando dados da BASE', rand(1, 3));
  })
  .then(response => {
    console.log(response);
    return esperaAi('Tratando os dados da BASE', rand(1, 3));
  }).then(response => {
    console.log(response);
  }).then(() => {
    console.log('Exibe dados na tela');
  })
  .catch(e => {
    console.log('Erro:', e);
  });

console.log('Isso eh exibido antes de qualquer promise');