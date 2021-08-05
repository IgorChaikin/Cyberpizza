const express = require('express');
const path = require('path');
const api = require('./routers/api');
const main = require('./routers/main');
const createApp = require('./app');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const port = process.env.PORT || 8080;
const dbConn = process.env.DB_CONN;

createApp(dbConn).then((app) => {
  // routing
  app.use('/api', api);
  app.use('/', main);

  // give static
  app.use(express.static(path.join(__dirname, '../dist')));
  app.use(express.static(path.join(__dirname, '../static')));
  app.use(express.static(path.join(__dirname, '../static/media')));
  app.use(express.static(path.join(__dirname, '../static/svg')));

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});
