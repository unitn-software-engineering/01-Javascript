# RESTful APIs

Contents:
* [Intro](#intro)
* [Resources](#resources)
* [Operations](#operations)
* [Sending the correct HTTP status codes](#Sending-the-correct-HTTP-status-codes)
* [Documenting your APIs](#Documenting-your-APIs)

## Intro
*Representational State Transfer (REST) is an architectural style for creating web services. **REST-compliant web services allow the requesting systems to access and manipulate textual representations of web resources by using a uniform and predefined set of stateless operations.*** (Source [Wikipedia](https://en.wikipedia.org/wiki/Representational_state_transfer))

> ***Online:*** A complete guide to RESTful restapitutorial.com

## Resources
Web resources can be identied by an URI (universal resource identifier - urls are the most common type of identifiers).

For example, let's say we want to implement a REST API to manage **products**.
```json
{
  "id" : 1,
  "name" : "iPhone XL",
  "description" : "Extra large"  
}
```

Complex APIs require special attention to the relationship between web resources, and ways of traversing the relationships. The same resource could be accessed under different URLs.
For example, to get the list of products associated to a company (`/company/:id/products`).

To easily navigate through resources, we should use links in place of ids.
For example:
```json
{
  "self" : "/products/1",
  "name" : "iPhone XL",
  "description" : "Extra large",
  "producer" : "/company/1"
}
```
> ***Read the following article:*** [API design: Why you should use links, not keys, to represent relationships in APIs
](https://cloud.google.com/blog/products/application-development/api-design-why-you-should-use-links-not-keys-to-represent-relationships-in-apis)


## Operations
CRUD operations are mapped to the standard HTTP verbs. In our example we will have that: 

| Operation | HTTP Verb    |   URI          |   Req body  | Resp body  | success |
|-----------|--------------|----------------|-------------|------------|---------|
| Search    |  GET         | /products      |  Empty      | [Product+] |   200   |
| Create    |  POST        | /products      |  Product    | Product    |   201   |
| Read      |  GET         | /products/:id  |  Empty      | Product    |   200   |
| Update    |  PUT / PATCH | /products/:id  |  Product*   | Product    |   200   |
| Delete    |  DELETE      | /products/:id  |  Empty      | Empty      |   204   |


To specify the body of the response in Express.js use:
```javascript
  res.send(body);
```
Here is a article on the use of [json() vs send()](medium.com/gist-for-js/use-of-res-json-vs-res-send-vs-res-end-in-express-b50688c0cddf.)


The response of a POST request should provide an empty body and an HTTP header 'Location' with a link to the newly created resource. For example:
```javascript
app.post('/api/products', function (req, res) {
  ...
  res.location("/api/products/" + product.id);
  ...
}
```

## Sending the correct HTTP status codes

> ***Read the following article:*** Using status code in RESTful APIs: https://www.restapitutorial.com/lessons/httpmethods.html

In our products API example:
```javascript
app.post('/api/products', function (req, res) {
  ...
  res.status(201).json(body-of-the-response);
}
```

> ***Exercise 1:*** Finish implementing the products API. There is a stub implementation in `exercises/products-api`, which includes a simple client web app.

A complete list of HTTP status code: www.restapitutorial.com/httpstatuscodes.html.

An interesting decision diagram for status code: https://raw.githubusercontent.com/for-GET/http-decision-diagram/master/httpdd.png



## Documenting your APIs

> ***Online documentation:*** https://swagger.io/docs/specification/about/

OpenAPI Specification (formerly Swagger Specification) is an API description format for REST APIs. An OpenAPI file allows you to describe your entire API, including: endpoints and operations, input and output parameters, authentication.

Use the following tools to document and test your APIs:
- https://app.apiary.io/
- https://www.postman.com/

Check-out the swagger specifications of the Assignments API project.

> ***Exercise 2:*** Now document our products API.

## Additional

> ***Exercise 3:*** Extend the Assignments API project to use links in place of ids in the resources. 

> ***Exercise 4:*** Implement the web API for managing student registrations as specified here: https://www.studytonight.com/rest-web-service/designing-the-rest-api. Note that this requires to maintain a correct reference between resources.


