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

// Getting a product
app.get('/api/products/:id', function (req, res) {
  var id = req.params.id;
  // TODO products[id]
});

// Getting the list of product

// Adding a new product
// TODO products.push(req.body);

// Delete a product
// TODO products.splice(id,1);

// Find a product by name
// TO-DO
