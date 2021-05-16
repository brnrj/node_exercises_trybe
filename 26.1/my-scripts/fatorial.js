const { questionFloat } = require('readline-sync');

function calcFatorial() {
  let total = 1;
  const n = questionFloat('Qual o seu numero? ');
  if (n === 0 || n === 1) return console.log('O resultado e 1');
  for (let i = n; i > 1; i--) {
    total *= i;
  }
  console.log('O total e %s', total);
}
calcFatorial();
