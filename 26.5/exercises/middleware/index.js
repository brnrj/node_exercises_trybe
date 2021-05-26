const crypto = require('crypto');
const fetch = require('node-fetch');


const mailRegex = /.+@[A-z]+[.]com/;

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

function checkMail(email) {
  if (!mailRegex.test(email)) throw new Error('email or password is incorrect');
}

function checkPassword(password){
  if(password.length < 4 || password.length > 8) throw new Error('email or password is incorrect')
}

function checkAuthorization(req){
  const { authorization } = req.headers;
  if(authorization.length !== 12) throw new Error('invalid token')
}

function fetchAPI() {
  return fetch('https://api.coindesk.com/v1/bpi/currentprice/BTC.json').then((response) => response.json()).then((result) => result)
}

const posts = [
  {
    id: 2,
    author: 'Antonio Neto',
    comment: "Hoje o dia está maneiro!"
  },
  {
    id: 3,
    author: "Rodrigo Garga",
    comment: "To aqui também"
  }
]

module.exports = { generateToken, checkMail, checkPassword, checkAuthorization, fetchAPI, posts }