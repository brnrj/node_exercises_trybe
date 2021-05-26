const fs = require('fs/promises');
const crypto = require('crypto');

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

function readFile() {
  return fs.readFile('./simpsons.json', 'utf-8')
  .then((response) => JSON.parse(response));
}

function writeFile(data) {
  return fs.writeFile('./simpsons.json', JSON.stringify(data));
}

module.exports = {readFile, writeFile, generateToken}