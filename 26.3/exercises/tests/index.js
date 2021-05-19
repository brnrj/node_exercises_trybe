const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');
const { callNumber, writeFile } = require('../index');

describe('Quando for maior que 0', () => {
  it('retorna positivo', () => {
    const resposta = callNumber(4);
    expect(resposta).to.be.equals('positivo');
  });
});

describe('Quando for menor que 0', () => {
  it('retorna negativo', () => {
    const resposta = callNumber(-5);
    expect(resposta).to.be.equals('negativo');
  });
});

describe('Quando for igual a 0', () => {
  it('retorna neutro', () => {
    const resposta = callNumber(0);
    expect(resposta).to.be.equals('neutro');
  });
});

describe('Caso seja diferente de number', () => {
  it('se for string', () => {
    const resposta = callNumber('5');
    expect(resposta).to.be.equals('o valor deve ser um numero');
  });
});

describe('Executa writeFile', () => {
  before(() => {
    sinon.stub(fs, 'writeFileSync');
  });

  after(() => {
    fs.writeFileSync.restore();
  });

  it('é uma string', () => {
    const resposta = writeFile('arquivo.txt', 'Conteudo do arquivo!!');
    expect(resposta).to.be.a('string');
  });
  it('Após concluir a escrita do arquivo ela deverá retornar um ok ', () => {
    const resposta = writeFile('arquivo.txt', 'Conteudo do arquivo!!');
    expect(resposta).to.be.equals('ok');
  });
});
