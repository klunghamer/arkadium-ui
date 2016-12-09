var express = require('express');
var path = require('path');
var logger = require('morgan');
var app = express();
var port = process.env.PORT || 4000;

// MIDDLEWARE/CONFIGS
app.use(logger('dev'));
app.use(express.static(path.join(__dirname,'../build')))

// app.use('/scripts', express.static(__dirname + '/bower_components'))

app.get('/', function(req, res) {
  res.render('index');
});

// app.all('/*', function(req, res, next) {
//   res.sendFile('/public/index.html', { root: __dirname });
// });

app.listen(port, function() {
  console.log('======================');
  console.log('listening on port 4000');
  console.log('======================');
})