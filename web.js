var express = require('express');
var filesync = require('fs');
var buff = require('Buffer');

var hello = filesync.readFileSnyc('index.html'); 

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(hello.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
