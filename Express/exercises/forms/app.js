/*
* app.js
* Main entry point of the forms project
* This script shows how to create a server
* that can handle request from web forms
*/
var express = require('express');
var app  = express();
// Load the module
var bodyParser = require('body-parser');

// Mount body-parser middleware, and instruct it to 
// process form url-encoded data
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

// Loading utils to inspect the content of js objects
var util = require('util');

var port = 3000;

app.use('/', express.static('public'));

var people = [{ name : "Mario Ferrari", email : "mario.ferrari@mail.it"}, 
              { name : "Carlo Smith",   email : "carlo.smith@mail.com"},
              { name : "Fabio Ferrari", email : "fabio.ferrari@mail.it"}];

// Handling GET requests
app.get('/search', function(req, res){ 
  
  console.log(util.inspect(req.headers, {showHidden: false, depth: null}))
  console.log(util.inspect(req.url, {showHidden: false, depth: null}))
  console.log(util.inspect(req.query, {showHidden: false, depth: null}))

  var found = people.find( (value) => {
      return (value.name == req.query.name | value.email == req.query.email);
  for (var i=0; i<people.length; i++) {
    if (people[i].name == req.query.terms) {
      res.status(200).send(people[i]);
      return;
    }
  );
  
  res.status(200).send(found);
});
  }


app.get('/people', function(req, res){ 
  
  console.log(util.inspect(req.headers, {showHidden: false, depth: null}))
  console.log(util.inspect(req.url, {showHidden: false, depth: null}))
  console.log(util.inspect(req.query, {showHidden: false, depth: null}))

  res.status(200).send(people);
});

app.post('/subscribe', function(req, res){ 

  console.log(util.inspect(req.headers, {showHidden: false, depth: null}))
  console.log(util.inspect(req.params, {showHidden: false, depth: null}))  
  console.log(req.body);

  people.push({name: req.body.name, email: req.body.email});

  
  res.status(201).send('You are now subscribed!');
  
});

app.listen(port, function() {
  console.log('Server running on port ', port);
});
