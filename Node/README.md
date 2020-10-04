# Node.js

Node.js is a server-side platform built on Google Chrome's JavaScript Engine (V8 Engine). Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

You can install Node.js by following the instructions from the Node.js project webpage ([https://nodejs.org/en/](https://nodejs.org/en/)).

If you're using a package manager in your OS, you might find ports already available. For example:
- [Installing nodejs using MacPorts](https://jonlabelle.com/snippets/view/shell/install-nodejs-macport). 
- [Installing nodejs in Ubuntu](https://websiteforstudents.com/install-the-latest-node-js-and-nmp-packages-on-ubuntu-16-04-18-04-lts/)
- If you're using anything else, you probably know what you're doing :)



# Node.js Tutorial
We start this tutorial by looking at the basics of node.js.


## 1. Basic scripting

### Hello world!

Let's open our editor and create a file named *hello.js*

```javascript
/* Hello World! program in Node.js */
console.log("Hello World!");
```

Running the script
```shell
$ node hello.js
```

As you can see, we are simply echo-ing the contents in the console. This is the exact equivalent of what we would see in the browser console. Indeed, you can access the same type of interactive console by simply typing *node* in your terminal. For example:

```shell
$ node 
> 1+1
2
> var a = 2
undefined
> a
2

```

### Command line parameters

Often you need to access to command line parameters. For example, 

```shell
$ node evennumbers.js <from> <to>
```

In node.js you do this by accessing *process*, which is a global variable containing informationan about the current node.js process. For example:

```javascript
for (var i = 0; i < process.argv.length; i++) {  
    console.log(i + ' -> ' + (process.argv[i]));
}
```

### Accessing the file system

Another useful feature is accessing the file system. Let's start right away from an example:

```javascript
// Loading the file system library
var fs = require("fs");

// File name from the common line params
var fileName = process.argv[2];

// Accessing the content of the file synchnously  
var data = fs.readFileSync(fileName, "utf8");
console.log(data);

console.log("Program ended.");

```

Now try running the code

```shell
node files.js path/to/file
```

There are two things to highlight in the above code.

#### a. Loading libraries 
To access the file system we need to load the File System module. This module comes with the standard Node.js installation, so we do not need to install any third-party libraries (We'll get to that later in this tutorial).

```javascript
var fs = require("fs");
```

The require instruction above loads the module "fs" and assigns an instance to the variable fs. Through this instance then we can have access to all the funcions exported by that module. 

For more on how require works, [check this interesting blog post](http://fredkschott.com/post/2014/06/require-and-the-module-system/).

#### b. Blocking / synchronous call
As you might have noticed, the following operations are exececuted in sequence, meaning that you see the contents of the file and then the "Program ended." message.

```javascript
var data = fs.readFileSync(fileName, "utf8");
console.log(data);

console.log("Program ended.");
```
This happens because the *readFileSync* functions is a synchronous implementation, that make the process to wait until the funcion finished its operation to continue. However, this is typically an undesired feature, and as you will see Node.js is built around the concept of non-blocking / asynchonous calls.

Why do you think this un undesired feature. Can you think of any instances where you'd need a non-blocking implementation?

### Non-blocking calls
Let's try now an alternative implementation of our files script, the *files-async.js*.

```javascript
// Loading the file system library
var fs = require("fs");

// File name from the common line params
var fileName = process.argv[2];

// Accessing the content of the file asynchnously  
fs.readFile(fileName, "utf8", function(error, data) {
  console.log(data);
});

console.log("Program ended.");
```

What is the difference now?.


In this case readFile expects a *callback* function. These are very common in javascript libraries, and is the function that will be called when the method invoked realises its purpose (which can be one or multiple times). In this specific case, we also have an anonymous function, meaning a function that was declared on the spot (declared at runtime) and that unlike typical functions, it does not have a name.

Later in the tutorial we'll have a look at *Promises*, which are a nicer looking alternatives to callback functions for asynchnous calls.

## 3. Creating a node server

What if we want to create our own server?
Creating a server that can handle requests from a client is very simple with node, and we can do it with the same standard http module.

Let's try our *server.js* script.

```javascript
var http = require('http');
var port = 3000;

var requestHandler = function(request, response) {
  console.log(request.url);
  response.end('Hello World!');
}

var server = http.createServer(requestHandler);
server.listen(port);

```

Is it running? Now then let's open [http://localhost:3000](http://localhost:3000) in a browser (`ctrl+c` in the terminal to end the execution).
Let's try to inspect the contents of the request.headers.

We won't go into detail into this way of creating a node server, as it is a bit low level. In the next class we'll dig into a popular web framework called Express.js.

## References & further reading

Node.js:
- https://nodejs.org/en/docs/guides/
- https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/
- https://www.w3schools.com/nodejs/default.asp
- http://www.html.it/guide/guida-nodejs/

Npm:
- https://docs.npmjs.com/getting-started/what-is-npm
