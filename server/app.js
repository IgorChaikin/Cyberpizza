const express = require('express');
const mongoose = require('mongoose');

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
  return app;
}

module.exports = createApp;
