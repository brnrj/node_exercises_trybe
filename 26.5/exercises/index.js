const express = require('express');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');
const { checkMail, checkPassword, generateToken, checkAuthorization, fetchAPI, posts } = require('./middleware');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log('Online')
});

//Atividade 1
app.post('/login', rescue(async (req, res) => {
  const { email, password } = req.body;
  try {
    checkMail(email)
    checkPassword(password)
    return res.status(200).json({ message: generateToken()})
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
}))

//Atividade 2
app.get('/btc/price', rescue(async (req, res) => {
  try {
    checkAuthorization(req)
    const data = await fetchAPI()
    res.status(200).json(data)
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
}))

//Atividade 3
app.get('/posts/:id', rescue(async (req, res) => {
  const { id } = req.params;
  const data = posts;
  try {
    if(data.some((element) => element.id === Number(id))){
      return res.status(200).json(data.filter((element) => element.id === Number(id))[0])
    }return res.status(401).json({ message: 'id not found'})
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
}))