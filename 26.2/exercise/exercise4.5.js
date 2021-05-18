const { readFile, writeFile } = require('fs/promises');
const nomeDoArquivo = 'simpsonFamily.json';

async function addSimpson(){
  const data = await readFile(nomeDoArquivo, 'utf-8').then((response) => JSON.parse(response)).then((result) => result)
  data.push({"id": "5", "name": "Nelson Muntz"})
  await writeFile(nomeDoArquivo, JSON.stringify(data))
}

addSimpson()