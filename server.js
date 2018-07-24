var express = require('express');
var proxy = require('http-proxy-middleware');

var options = {

    target: "http://stockreader.herokuapp.com",
  //  target: "http://localhost:8080",
    changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
    logLevel: 'debug',
    pathRewrite: {"^/api" : ""}
};

var app = express();

app.use(express.static(__dirname + '/public'));

app.use('/api', proxy(options));

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', function(req, res) {
    res.render('index.html');
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('Servidor express listening na porta 3000');
});