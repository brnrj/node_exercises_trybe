const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/hello', (req, res) => {
  const {
    body: { name, team, city },
  } = req;
  res.status(200).json({
    greeting: `Hello, my name is ${name}, I am from ${city}, and support ${team}!`,
  });
});

app.listen(3000, () => {
  console.log('Listening');
});
