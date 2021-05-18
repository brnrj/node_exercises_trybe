const { readFile, writeFile } = require('fs/promises');
const nomeDoArquivo = 'simpson.json';

async function removeById(){
  const data = await readFile(nomeDoArquivo, 'utf-8').then((response) => JSON.parse(response)).then((result) => result)
  const newData = data.filter((element) => element.id !== '6' && element.id !== '10')
  await writeFile(nomeDoArquivo, JSON.stringify(newData))
}

removeById()

