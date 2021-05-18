const { readFile, writeFile } = require('fs/promises');
const nomeDoArquivo = 'simpsonFamily.json';

async function transformSimpson(){
  const data = await readFile(nomeDoArquivo, 'utf-8').then((response) => JSON.parse(response)).then((result) => result)
  data.map((element) => element.name === 'Nelson Muntz' ? element.name = 'Maggie Simpson' : element)
  await writeFile(nomeDoArquivo, JSON.stringify(data))
}
transformSimpson()