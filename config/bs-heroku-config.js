var proxy = require('http-proxy-middleware');
var options = {
  target: "https://stockreader.herokuapp.com",
  changeOrigin: true,             // for vhosted sites, changes host header to match to target's host
  logLevel: 'debug',
  pathRewrite: {'^/api' : ''}
};
var apiProxy = proxy('/api', options);
module.exports = function(bs){
  return {
    port: process.env.PORT,
    files: ["./**/*.{html,htm,css,js}"],
    server: {
      baseDir: "./",
      middleware: [apiProxy]
    },
    verbose: true
  };
};
