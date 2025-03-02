function Calculadora() {
  this.display = document.querySelector('.display');

  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
    this.capturaBckSpace();
    this.capturaEsc();
    // this.descobreTecla();
  };

  this.descobreTecla = () => {
    document.addEventListener('keyup', (event) => {
      alert(event.key);
    });
  };

  this.capturaEnter = () => {
    document.addEventListener('keyup', (event) => {
      if (event.key !== 'Enter') {
        return;
      }
      this.realizaConta();
    });
  };

  this.capturaBckSpace = () => {
    document.addEventListener('keyup', (event) => {
      if (event.key !== 'Backspace') {
        return;
      }
      this.del();
    });
  };

  this.capturaEsc = () => {
    document.addEventListener('keyup', (event) => {
      if (event.key !== 'Escape') {
        return;
      }
      this.clear();
    });
  };

  this.capturaCliques = () => {
    document.addEventListener('click', (event) => {
      const el = event.target;
      if (el.classList.contains('btn-num')) this.addNumDisplay(el);
      if (el.classList.contains('btn-clear')) this.clear();
      if (el.classList.contains('btn-del')) this.del();
      if (el.classList.contains('btn-eq')) this.realizaConta();
    });
  };

  this.addNumDisplay = (el) => {
    this.display.value += el.innerText;
    this.display.focus();
  };

  this.clear = () => (this.display.value = '');
  this.del = () => (this.display.value = this.display.value.slice(0, -1));
  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);
      if (!conta) {
        alert('Conta invalida');
        return;
      }
      this.display.value = conta;
    } catch (error) {
      alert('Conta invalida');
      return;
    }
  };
}

const calculadora = new Calculadora();
calculadora.inicia();

//! Mudando de funcao factory para constructor
