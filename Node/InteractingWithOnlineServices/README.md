## Interacting with online services
As we already know, this is how a typical http server interacts with a client.

[![Source: Wikipedia](https://upload.wikimedia.org/wikipedia/commons/b/bc/HTTP_cookie_exchange.svg)](https://commons.wikimedia.org/wiki/File:HTTP_cookie_exchange.svg "")

In our case, the client is actually a script and not really a web browser. We can invoke service calls using the standard *http* and *https* modules that come with the standard Node.js installation.

Run the script *http-get-today.js*, which requests a service that tells us what happened today in history. 

```javascript
var https = require('https');

var url = "https://history.muffinlabs.com/date";

https.get(url, function(resp) {
  var data = "";

  // We receive the response data in a stream, so here
  // we specify what to do with each chunk we receive
  resp.on("data", function(chunk) {
    data += chunk;
  });

  // We specify what to do when we finish receiving the
  // stream of data.
  resp.on("end", function() {
    // We receive the content as "text" and print it
    console.log(data);
  });

}).on("error", function(err) {
  console.log("Error: " + err.message);
});
```

The function https.get works by specifying a url and a callback function. It works at very low level, informing us of every single chunk in the response in a stream of data, thus requiring us to put together the response body. 


```javascript
  resp.on("data", function(chunk) {
    data += chunk;
  });
```

Then when we finish receiving the data, we can process process the information. 
The output of the service is in JSON format. What is JSON? (source: [w3school](https://www.w3schools.com/js/js_json_intro.asp))
- JSON:  stands for: **J**ava**S**cript **O**bject **N**otation.
- JSON is a syntax for storing and exchanging data.
- JSON is text, written with JavaScript object notation.

```json
{  
   "date":"September 11",
   "url":"https://wikipedia.org/wiki/September_11",
   "data":{  
      "Events":[  ],
      "Births":[  ],
      "Deaths":[  ]
   }
}
```

Since server / client exchange data in "text" format, we need to transform to a Javascript object. This is very straightforward with JSON, since the content is essentially in javascript object notation. 
Let's modify the "end" callback function:

```javascript
  resp.on("end", function() {
    // We receive the content as "text" and print it
    var obj = JSON.parse(data)                         
    console.log(obj.date);
  });
```

The *http* and *https* modules are powerful, but certainly not simplest ones out there. There are many ways in which you can perform http / https calls. [This great blog post summarises](https://www.twilio.com/blog/2017/08/http-requests-in-node-js.html) five different ways you can do this.

## References & further reading

- https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/