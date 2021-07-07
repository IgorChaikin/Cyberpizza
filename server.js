const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;

// packages import
const app = express();
//app.use(favicon(__dirname + '/build/favicon.png'));

//give static
app.use(express.static(__dirname));

//app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'dist')));

//test
app.get('/ping', function (req, res) {
    return res.send('pong');
});

//html
app.get('/*', function (req, res) {
    //res.sendFile(path.join(__dirname, 'build', 'index.html'));
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});
app.listen(port);
