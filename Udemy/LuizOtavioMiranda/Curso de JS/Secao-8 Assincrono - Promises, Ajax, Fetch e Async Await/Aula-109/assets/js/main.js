//* Metodos para Promises
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('CAI NO ERRO');
            return;
        };

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na promise');
        }, tempo);
    });
}
//* Promise.all, Promise.race, Promise.resolve, Promise.reject

//! Promise.all usa e retona um array com varias promises
const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    // esperaAi(4, 1000), //! Erro em alguma das promises, retorna falso

    'Outro valor'
];

// Promise.all(promises)
//   .then(function (valor) {
//     console.log(valor);
//   })
//   .catch(function (erro) {
//     console.log(erro);
//   });


//! a primeira que resolver ele retorna e para, no caso ele retorna primeiro valor, pois ja esta pronto, se nao tivesse entao ele retornaria 'Promise 2' ja que ela demora meio segundo
// Promise.race(promises)
//   .then(function (valor) {
//     console.log(valor);
//   })
//   .catch(function (erro) {
//     console.log(erro);
//   });

function baixaPaginaResolve() {
    const emCache = true;

    if (emCache) {
        return Promise.resolve('Pagina em cache');
    } else {
        return esperaAi('Baixei a pagina', 3000);
    }
}

function baixaPaginaReject() {
    const emCache = true;

    if (emCache) {
        return Promise.reject('Pagina em cache');
    } else {
        return esperaAi('Baixei a pagina', 3000);
    }
}

baixaPaginaResolve()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('Erro', e));

baixaPaginaReject()
    .then(dadosPagina => {
        console.log(dadosPagina);
    })
    .catch(e => console.log('Erro', e));