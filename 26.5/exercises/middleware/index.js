const crypto = require('crypto');


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

module.exports = { generateToken, checkMail, checkPassword}