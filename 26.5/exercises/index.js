const express = require('express');
const rescue = require('express-rescue');
const bodyParser = require('body-parser');
const { checkMail, checkPassword, generateToken } = require('./middleware');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log('Online')
});

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