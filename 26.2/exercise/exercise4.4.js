const { readFile, writeFile } = require('fs/promises');
const nomeDoArquivo = 'simpson.json';

async function newFile() {
  const data = await readFile(nomeDoArquivo, 'utf-8').then((response) => JSON.parse(response)).then((result) => result)
  await writeFile('simpsonFamily.json', JSON.stringify(data.slice(0, 4)))
}

newFile()