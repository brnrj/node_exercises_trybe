const express = require('express');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');
const { readFile, writeFile } = require('./fs-utils');

const app = express();
const port = 3000;

app.use(bodyParser.json());

//Exercício 1
app.get('/ping', (_req, res) => {
  res.send({ message: 'pong' });
});

//Exercício 2
app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.send({ message: `Hello, ${name}` });
});

//Exercício 3
app.post('/greeting', (req, res) => {
  const { name, age } = req.body;
  age > 17
    ? res.status(200).send({ message: `Hello, ${name}!` })
    : res.status(401).send({ message: 'Unauthorized' });
});

//Exercício 4
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res
    .status(200)
    .send({ message: `Seu nome é ${name} e você tem ${age} anos de idade.` });
});

//Exercícios 5-6
app.get(
  '/simpsons',
  rescue(async (_req, res) => {
    const simpsons = await readFile();
    res.status(200).json(simpsons);
  })
);

//Exercícios 6-7
app.get(
  '/simpsons/:id',
  rescue(async (req, res) => {
    const { id } = req.params;
    const simpson = await readFile();
    const char = simpson.find((element) => element.id === id);
    if (!char) return res.status(404).json({ message: 'simpson not found' });
    return res.status(200).send(char);
  })
);

//Exercício 8
app.post(
  '/simpsons',
  rescue(async (req, res) => {
    const { id, name } = req.body;
    const data = await readFile();
    if (data.some((element) => element.id === id)) {
      return res.status(409).send({ message: 'id already exists' });
    }
    data.push({ id: data.length + 1, name });
    writeFile(data);
    return res.status(204).end();
  })
);

app.listen(port, () => {
  console.log('Online');
});
