var express = require('express');
var app = express();
app.get('/', function(req, res) {
  res.send('hello world');
});
app.all('/', function(req, res) {
  console.log(123)
});
app.listen(3001);
console.log("网站运行于3001端口")
