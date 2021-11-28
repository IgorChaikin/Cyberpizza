const path = require('path');
const createApp = require('./app');
require('dotenv').config({ path: path.join(__dirname, '../.env') });

const port = process.env.PORT || 8080;
const dbConn = process.env.DB_CONN;

createApp(dbConn).then((app) => {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});
