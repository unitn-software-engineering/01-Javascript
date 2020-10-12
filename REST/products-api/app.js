/**
 * app.js 
 * Implementation of the Product API
 */

var express    = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use('/', express.static('public'));

// starting the server
var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('Products server listening at http://localhost:' + port);  
});


// list of products we'll keep in memory
var products = [{
  id : 0,
  name : "iPhone XL",
  description : "Extra large"  
}];

var max_id = 0;

// Getting a product
app.get('/api/products/:id', function (req, res) {
  var id = req.params.id;
  var product = products.find( (p) => p.id == id );
  if(products !== undefined) {
    res.status(200).send(product);
  } else {
    res.status(404);
  }

});

// Getting the list of product

// Adding a new product
// TODO products.push(req.body);
app.post('/api/products', function(req, res) {
  console.log('POST /api/products ' + req.body.name + ' ' + req.body.description);
  var p = {
    id: ++max_id,
    name: req.body.name,
    description: req.body.description
  }
  products.push(p);
  res.status(201).location("api/products/" + max_id).send();
});


// Delete a product
// TODO products.splice(id,1);

// Find a product by name
// TO-DO
