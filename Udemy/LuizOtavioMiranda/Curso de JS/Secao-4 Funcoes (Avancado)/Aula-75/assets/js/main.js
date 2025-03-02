//* Factory function (Funcao fabrica)
function criaPessoa(nome, sobreNome, altura, peso) {
    return {
        nome,
        sobreNome,

        fala(assunto = 'Dormindo com o Pedepano') {
            return `${this.nome} esta ${assunto}`;
        },

        altura: altura,
        peso: peso,

        //* Getter
        get imc() {
            //! o get faz fingir de ser atributo
            const indice = this.peso / this.altura ** 2;
            return indice.toString();
        },

        get nomeCompleto() {
            return `${this.nome} ${this.sobreNome}`;
        },

        //* Setter
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobreNome = valor.join(' ');
        },
    };
}

const p1 = criaPessoa('Arthur', 'dutra', 1.6, 58);

console.log(p1.fala('falando sobre js'));
//* console.log(p1.imc()); agora para de funcionar dps do get
console.log(p1.imc); //! agora funciona como atributo (sem parenteses de funcao)
console.log(p1.nomeCompleto);
