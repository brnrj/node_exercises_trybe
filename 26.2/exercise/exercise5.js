const { readFile, writeFile } = require('fs/promises');

async function createFiles(){
  const array = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!']
  const createPromises = array.map((element, index) => writeFile(`./file${index + 1}.txt`, element))
  await Promise.all(createPromises)
  const fileNames = [
  'file1.txt',
  'file2.txt',
  'file3.txt',
  'file4.txt',
  'file5.txt']

  const content = await Promise.all(fileNames.map((element) => readFile(element, 'utf-8')))
  const newContent = content.join(' ')
  await writeFile('./fileAll.txt', newContent)
}

createFiles()