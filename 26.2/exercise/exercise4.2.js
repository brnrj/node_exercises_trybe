const { readFile } = require('fs/promises');
const nomeDoArquivo = 'simpson.json';


async function getById(id) {
  const data = await readFile(nomeDoArquivo, 'utf-8')
  .then((response) => JSON.parse(response))
  const simpson = data[id -1]
  if(!simpson){
    throw new Error('id nao encontrado')
  }
  console.log(simpson)
}

getById(12)