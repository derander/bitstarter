var express = require('express');
var filesync = require('fs');
var buff = require('buffer');

var hello = new Buffer(filesync.readFileSync('index.html'));


var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(hello.toString());
//    response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("LISTENING ON " + port);
});
