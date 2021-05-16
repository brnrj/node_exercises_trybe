const { questionFloat } = require('readline-sync');

function velocidade() {
  const distancia = questionFloat('Qual a distância? (km) ');
  const tempo = questionFloat('Qual o tempo? (h) ');
  const vm = distancia / tempo;
  console.log('Distancia: %s, Tempo: %s', distancia, tempo);
  console.log('Velocidade Média: %skm/h', vm);
}

velocidade();

module.exports = velocidade;
