// const nome = 'Arthur';
// const sobrenome = 'Dutra';

// const falaNome = () => nome + ' ' + sobrenome;

// // module.exports.nome = nome;
// // module.exports.sobrenome = sobrenome;
// // module.exports.falaNome = falaNome;
// // console.log(module.exports);


// exports.nome = nome;
// exports.sobrenome = sobrenome;
// exports.falaNome = falaNome;
// this.qualquerCoisa = 'o que eu quiser exportar';

// console.log(exports);

class Pessoa {
    constructor (nome) {
        this.nome = nome;
    }
}


// module.exports.nome = 'Luiz';
// this.sobrenome = 'qualquer coisa q quiser exportar';
// exports.Pessoa = Pessoa;

const nome = 'Arthur';
const sobrenome = 'Dutra';

exports.nome = nome;
module.exports.sobrenome = sobrenome;
exports.outraCoisa = 'Outra coisa';