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
// TODO products[id]
app.get('/api/products/:id', function (req, res) {
  var id = req.params.id;

  if (id > products.length || id < 0) {
    res.status(404).send();
    return;
  }

  res.send(products[id]);
});

// Getting the list of product
app.get('/api/products', function (req, res) {
  res.send(products);
});

// Adding a new product
// TODO products.push(req.body);
app.post('/api/products', function (req, res) {
  console.log('POST /api/products');
  var product = req.body;
  product.id = product.length + 1;
  console.log(product);

  products.push(req.body);

  res.location("/api/products/" + product.id);
  res.status(201);
  res.send();
});

// Delete a product
// TODO products.splice(id,1);
app.delete('/api/products/:id', function (req, res) {
  var id = req.params.id;

  if (id > products.length || id < 0) {
    res.status(404).send();
    return;
  }

  products.splice(id,1);

  res.send(products[id - 1]);
});

// Find a product by name
// TO-DO
