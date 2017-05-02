const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();

// server static assets normally
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));

// handle ever other route with index.html, which will contain a
// script tag to your application's JavaScript file.
app.get('*', function(req, res, next) {
  res.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

app.listen(port);
console.log('server started on port ' + port);
