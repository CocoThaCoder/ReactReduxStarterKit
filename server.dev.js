var path = require('path');
var webpack = require('webpack');
var express = require('express');
var devMiddleware = require('webpack-dev-middleware');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

app.use(devMiddleware(compiler, config.devServer));

// server static assets normally
app.use('/public', express.static(__dirname + '/public'));


app.get('*', function (req, res) {
  var filename = path.join(compiler.outputPath,'index.html');
    compiler.outputFileSystem.readFile(filename, function(err, result){
      if (err) {
        return next(err);
      }
      res.set('content-type','text/html');
      res.send(result);
      res.end();
    });
});

app.listen(8080, function (err) {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:8080/');
});
