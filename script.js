// Função tradicional sem parâmetros
function clearDisplay() {
  document.getElementById('mostrador').value = '';
}

// Função tradicional com parâmetros e retorno de valor
function operacaoMatematica(operador) {
  const operacao = document.getElementById('mostrador');
  operacao.value += operador;
}

// Arrow Function com parâmetros e retorno de valor
const inclui = (valor) => {
  const mostrador = document.getElementById('mostrador');
  if (mostrador.value === '' && valor > 0) {
    mostrador.value += valor;
  } else {
    mostrador.value += valor;
  }
};

// Outra Função tradicional sem parâmetros
function calcula() {
  const operacao = document.getElementById('mostrador');
  operacao.value = eval(operacao.value);
}
