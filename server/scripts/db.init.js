const path = require('path');
const initByDbConn = require('./db.init_by_dbconn');
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

const dbConn = process.env.DB_CONN;

initByDbConn(dbConn).then((isSucceed) => {
  if (isSucceed) {
    console.log('Database initialised');
  } else {
    console.log('Database initialisation failed');
  }
});
