var express = require('express');
var Dbc = require('./server/dbc/dbc.js');
var app = express();
app.use(express.static('css'));
app.use(express.static('plugin'));
app.use(express.static('dist'));
app.use(express.static('images'));
app.use(express.static('resource'));
app.get('/getImgs', function(req, res) {
    res.json(Dbc());
});
app.get('/index', function(req, res) {
    res.sendFile(__dirname + "/pages/index.html");
});
app.get('/', function(req, res) {
    res.send('hello world2');
});

app.listen(3001);
//app.close();
//app.exit();
console.log("网站运行于3001端口")
