var express = require('express');
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 8080);

app.use(express.static(__dirname + '/'));

app.listen(app.get('port'), function() {
  console.log( 'Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.' );
});

app.get('*', function(req, res) {
    // res.sendFile('./index.html');
    res.sendFile(path.join(__dirname, './', 'index.html'));
});
