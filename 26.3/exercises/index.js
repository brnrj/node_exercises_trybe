const { writeFileSync } = require('fs');

function callNumber(number) {
  if (typeof number !== 'number') return 'o valor deve ser um numero';
  if (number > 0) return 'positivo';
  if (number < 0) return 'negativo';
  return 'neutro';
}

function writeFile(nomeArquivo, content) {
  writeFileSync(`${__dirname}/${nomeArquivo}`, content);
  return 'ok';
}

module.exports = { callNumber, writeFile };
