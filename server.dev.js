const path = require('path');
const webpack = require('webpack');
const express = require('express');
const devMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.dev');
const port = process.env.PORT || 8080;

const app = express();
const compiler = webpack(config);

app.use(devMiddleware(compiler, config.devServer));

// server static assets normally
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('*', (req, res, next) => {
  const filename = path.join(compiler.outputPath, 'index.html');
  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) {
      return next(err);
    }
    res.set('content-type', 'text/html');
    res.send(result);
    res.end();
  });
});

app.listen(port, err => {
  if (err) {
    return console.error(err);
  }

  console.log('Listening at http://localhost:8080/');
});
