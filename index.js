// -------------------------
// intialize node server
// -------------------------
var express = require('express'),
    app = express();

// handle requests
app.configure(function(req, res, next) {
  app.use(express.static(__dirname + '/public'));
});

app.listen(3000);
console.log('Listening on port 3000');