var express = require('express');
var proxy = require('http-proxy-middleware');

var options = {
  target: "http://stockreader.herokuapp.com",
  changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
  logLevel: 'debug',
  pathRewrite: {"^/api" : ""}
};

var app = express();

var apiProxy = proxy(options);

app.use(express.static(__dirname + '/dist'));

app.use('/api', function(req, res) {
    console.log('Requisitando o proxy....');
    apiProxy(req,res);
});

app.listen(3000, function() {
    console.log('Servidor express listening na porta 3000');
});