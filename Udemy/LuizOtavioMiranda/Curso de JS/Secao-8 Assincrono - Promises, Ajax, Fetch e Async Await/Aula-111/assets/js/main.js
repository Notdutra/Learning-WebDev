//* Ajax
//* XMLHttpRequest;

//* Utilizando callback
// const request = obj => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(obj.method, obj.url, true);
//     xhr.send();

//! Agora que usamos promise tem que tirar os calbacks
//! Mudamos o obj.success() para resolve() e
//! Mudamos o obj.error para reject() 
//     xhr.addEventListener('load', () => {
//         if (xhr.status >= 200 && xhr.status < 300) {
//!            obj.success(xhr.responseText); 
//         } else {
//!            obj.error(xhr.statusText);
//         }
//     });
// };


//* forma 'nova'
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);
        xhr.send();

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText);
            }
        });
    });
};

document.addEventListener('click', e => {
    e.preventDefault();
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        carregaPagina(el);
    }
});

async function carregaPagina(el) {
    const href = el.getAttribute('href');

    const objConfig = {
        method: 'GET',
        url: href,
    };

    try {
        const response = await request(objConfig);
        carregaResultado(response);
    } catch (error) {
        console.log(error);
    }

}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
};