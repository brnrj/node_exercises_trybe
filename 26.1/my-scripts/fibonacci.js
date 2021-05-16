const { questionInt } = require('readline-sync');

function fibonacci(num) {
  if (num <= 1) return 1;
  return fibonacci(num - 1) + fibonacci(num - 2);
}

function calcFibonacci() {
  let result = [];
  const input = questionInt('Qual o seu numero? ');
  for (let i = 0; i < input; i++) {
    result.push(fibonacci(i));
  }
  console.log('O resultado e: %s', result);
}

calcFibonacci();
