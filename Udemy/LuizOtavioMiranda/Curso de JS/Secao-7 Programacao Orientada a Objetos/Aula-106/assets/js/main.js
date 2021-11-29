class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false,
      enumerable: false,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, ''),
    });
  }

  valida() {
    return 'cheguei aqui';
  }
}

const Validacpf = new ValidaCPF('041.653.110-57');
console.log(Validacpf.valida());
