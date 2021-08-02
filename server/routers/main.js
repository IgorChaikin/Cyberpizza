const express = require('express');
const path = require('path');

const main = express.Router();

main.get('/ping', (req, res) => res.send('pong'));
main.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist', 'index.html'));
});

module.exports = main;
