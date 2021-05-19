const { readFile } = require('fs/promises');

const nomeDoArquivo = 'simpson.json';

const data = readFile(nomeDoArquivo, 'utf8')
  .then((data) => JSON.parse(data)).then((result) => result)
  .catch((err) => {
    console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
    process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
  });

async function printIdName(data){
  const resolve = await data
  const result = resolve.map((element) => `${element.id} - ${element.name}`).forEach((value) => console.log(value))
  console.log(result)
}

printIdName(data)