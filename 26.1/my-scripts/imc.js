const { questionFloat } = require('readline-sync');

function imc() {
  const peso = questionFloat('Qual o seu peso? ');
  const altura = questionFloat('Qual sua altura? ');
  const imc = peso / Math.pow(altura, 2).toFixed(2);
  console.log('Peso: %s, altura: %s', peso, altura);
  if (imc < 18.5) {
    console.log('Situação: Abaixo do peso');
    return;
  }
  if (imc >= 18.5 && imc < 25) {
    console.log('Situação: Peso normal');
    return;
  }
  if (imc >= 25 && imc < 30) {
    console.log('Situação: Acima do peso (sobrepeso)');
    return;
  }
  if (imc >= 30 && imc < 35) {
    console.log('Situação: Obesidade Grau I');
    return;
  }
  if (imc >= 35 && imc < 40) {
    console.log('Situação: Obesidade Grau II');
    return;
  }

  console.log('Situação: Obesidade Grau III e IV');
}
imc();

module.exports = imc;
