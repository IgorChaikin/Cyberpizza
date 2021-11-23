const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const api = require('./routers/api');
const main = require('./routers/main');
const auth = require('./routers/auth');
const admin = require('./routers/admin');
const shipment = require('./routers/shipment');
const staff = require('./routers/staff');
const { verifyTokenMiddleware, checkBodyMiddleware } = require('./middlewares');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const cookieKey = process.env.COOKIE_KEY;

async function createApp(dbConn) {
  const app = express();
  await mongoose.connect(
    dbConn,
    { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false },
    (err) => {
      if (err) {
        console.log(err);
      }
    }
  );
  app.use(express.json());
  app.use(cookieParser(cookieKey));

  // middleware
  app.use(verifyTokenMiddleware);
  app.post('/*', checkBodyMiddleware);
  app.put('/*', checkBodyMiddleware);
  app.patch('/*', checkBodyMiddleware);
  app.delete('/*', checkBodyMiddleware);

  // api routing
  app.use('/api', api);
  app.use('/api/auth', auth);
  app.use('/api/admin', admin);
  app.use('/api/shipment', shipment);
  app.use('/api/staff', staff);

  // give static
  app.use(express.static(path.join(__dirname, '../dist')));
  app.use(express.static(path.join(__dirname, '../static')));
  app.use(express.static(path.join(__dirname, '../static/media')));
  app.use(express.static(path.join(__dirname, '../static/svg')));

  // get index.html routing
  app.use('/*', main);
  return app;
}

module.exports = createApp;
