const readline = require('readline-sync');

const scripts = [
  { name: 'Escolha um número para executar o script correspondente' },
  { name: 'Calcular IMC', script: './imc.js' },
  { name: 'Calcular velocidade média', script: './velocidade.js' },
  { name: 'Jogo de adivinhação', script: './sorteio.js' },
  { name: 'Calcular Fatorial', script: './fatorial.js' },
  { name: 'Sequencia Fibonacci', script: './fibonacci.js' },
];

const main = scripts.map((script, index) => `\n ${index} - ${script.name} `);

const scriptNumber = readline.questionInt(main);

const script = scripts[scriptNumber];

if (!script.script) return console.log('Número inválido. Saindo...');

require(script.script);
