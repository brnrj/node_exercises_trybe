const { questionInt, question } = require('readline-sync');

function resultado(randomNumber, inputNumber) {
  if (inputNumber === randomNumber) {
    console.log('Ceeeeerta Resposta');
    return;
  } else {
    return console.log(`Errooooooou... a resposta era ${randomNumber}`);
  }
}

function adivinhacao() {
  const inputNumber = questionInt('Qual o seu número? de 1 a 10 ');
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  resultado(randomNumber, inputNumber);
  const novamente = question(
    'Deseja jogar novamente?, digite s para sim e n para não '
  );

  if (novamente !== 's') return console.log('Valeu até a próxima!');
  adivinhacao();
}

adivinhacao();

module.exports = adivinhacao;
