const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const api = require('./routers/api');
const main = require('./routers/main');

require('dotenv').config({ path: path.join(__dirname, '.env') });

const app = express();
const port = process.env.PORT || 8080;
const dbConn = process.env.DB_CONN;

// routing
app.use('/api', api);
app.use('/', main);

// give static
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static(path.join(__dirname, 'static/media')));
app.use(express.static(path.join(__dirname, 'static/svg')));

// db-connection
mongoose.connect(dbConn, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
  if (err) {
    return console.log(err);
  }
  return app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});
