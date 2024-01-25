const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.get('/', (req, res) => {
  res.send('Hola que tal amigueros');
});

module.exports = app;
