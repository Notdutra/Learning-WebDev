//* IIFE -> Immediately invoked function expression
(function (name) {
    console.log(`Hello ${name}`);
})('Arthur');

(function (idade) {
    const sobreNome = 'Dutra';
    function criaNome(nome) {
        return nome + ' ' + sobreNome;
    }

    function falaNome() {
        console.log(criaNome('Arthur'));
    }

    falaNome();
    console.log(`Idade: ${idade}`);
})(23);
