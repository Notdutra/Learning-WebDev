//* Async / await

function rand(min = 0, max = 3) {  //! VALOR PADRAO (0,3)
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAI NO ERRO');
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na promise');
            return;
        }, tempo);
    });
}

esperaAi('Fase 1', rand())
    .then(fase1 => {
        console.log(fase1);
        return esperaAi('Fase 2', rand());
    })
    .then(fase2 => {
        console.log(fase2);
        return esperaAi('Fase 3', rand());
    })
    .then(fase3 => {
        console.log(fase3);
    })
    .catch(erro => console.log(erro));