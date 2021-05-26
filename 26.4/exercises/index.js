const express = require('express');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');
const { readFile, writeFile, generateToken } = require('./fs-utils');
const auth = require('./middleware')

const app = express();
const port = 3000;

app.use(bodyParser.json());

//Exercício 1
app.get('/ping', (req, res) => {
  try {
    auth(req)
    res.send({ message: 'pong' });
  } catch (error) {
    res.status(401).json({ message: error.message })
  }
});

//Exercício 2
app.post('/hello', (req, res) => {
  const { name } = req.body;
  try {
    auth(req)
    res.send({ message: `Hello, ${name}` });
  } catch (error) {
    res.status(401).json({ message: error.message })
  }
  
});

//Exercício 3
app.post('/greeting', (req, res) => {
  const { name, age } = req.body;
  try {
    auth(req)
    age > 17
      ? res.status(200).send({ message: `Hello, ${name}!` })
      : res.status(401).send({ message: 'Unauthorized' });
  } catch (error) {
    res.status(401).json({ message: error.message })
  }
});

//Exercício 4
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  try {
    auth(req)
    res
    .status(200)
    .send({ message: `Seu nome é ${name} e você tem ${age} anos de idade.` });
  } catch (error) {
    res.status(401).json({ message: error.message })
  }
  
});

//Exercícios 5-6
app.get(
  '/simpsons',
  rescue(async (req, res) => {
    try {
      auth(req)
      const simpsons = await readFile();
      res.status(200).json(simpsons);
    } catch (error) {
      res.status(401).json({ message: error.message })
    }
  })
);

//Exercícios 6-7
app.get(
  '/simpsons/:id',
  rescue(async (req, res) => {
    const { id } = req.params;
    try {
      auth(req)
      const simpson = await readFile();
      const char = simpson.find((element) => element.id === id);
      if (!char) return res.status(404).json({ message: 'simpson not found' });
      return res.status(200).send(char);
    } catch (error) {
      res.status(401).json({ message: error.message })
    }
  })
);

//Exercício 8
app.post(
  '/simpsons',
  rescue(async (req, res) => {
    const { id, name } = req.body;
    try {
      auth(req)
      const data = await readFile();
      if (data.some((element) => element.id === id)) {
      return res.status(409).send({ message: 'id already exists' });
    }
    data.push({ id: data.length + 1, name });
    writeFile(data);
    return res.status(204).end();
    } catch (error) {
      res.status(401).json({ message: error.message })
    }
    
  })
);

//Bônus 2

app.post('/signup', rescue(async (req, res) => {
  const { email, password, firstName, phone } = req.body;
  const token = generateToken()
  try {
    if(!email || !password || !firstName || !phone){
      return res.status(401).json({ message: 'missing fields' })
    }return res.status(200).json({ message: token})
  } catch (error) {
    res.status(401).json({ message: error.message })
  }
  
}))

app.listen(port, () => {
  console.log('Online');
});
