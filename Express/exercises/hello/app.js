/*
* app.js
* Main entry point of the hello project
* This script starts a simply hello world server
*/
var express = require('express');
var app = express();

var port = 3000;

// Handling GET requests
app.get('/', function(req, res){ 
  res.send('Hello World!');
});

app.get('/prova', function(req, res){ 
  res.send('prova!');
});

app.listen(port, function() {
  console.log('Server running on port ', port);
});