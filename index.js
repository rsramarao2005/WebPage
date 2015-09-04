var express = require('express');
var app = express();
var path = require('path');
// app.configure(function(){

//   // This route deals enables HTML5Mode by forwarding missing files to the index.html
// });

app.set('port', (process.env.PORT || 5000));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/images', express.static(path.join(__dirname, '/images')));
app.use('/js', express.static(path.join(__dirname, '/js')));
app.use('/css', express.static(path.join(__dirname, '/css')));
app.use('/fonts', express.static(path.join(__dirname, '/fonts')));

  app.all('/*', function(req, res) {
    res.sendfile('index.html');
  });

app.listen(app.get('port'), function() {
});
