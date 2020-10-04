# Exercises
Let's take 10 minutes to work on the following exercises. We do not expect you to finish both right now, so do as much as you can and leave the rest as homework. 

1. **Random joke**: Implement a script *jokes.js* that returns a random joke from the *The Internet Chuck Norris database*. 
The documentation specifies:

```
// To get a random joke, invoke:
http://api.icndb.com/jokes/random

// If you want to change the name of "Chuck Norris", 
// specify the firstName and lastName parameters:
http://api.icndb.com/jokes/random?firstName=John&lastName=Doe

```

2. **Wiki pages**: Implement a script that given an input term, search for the (top 5) matching Wiki pages. For example:

```shell
$ node wikisearch.js "Albert Einstein"

Albert Einstein
Hans Albert Einstein
Outline of Albert Einstein
Albert Einstein's brain
Einstein family

```

The documentation of the Wikipedia API suggests the following call:
```
https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=Albert%20Einstein&format=json

```
which has the following output format. You elements to display are in the query.search array.
```json
{  
   "batchcomplete":"",
   "continue":{  
      "sroffset":10,
      "continue":"-||"
   },
   "query":{  
      "searchinfo":{  
         "totalhits":5166
      },
      "search":[  
         {  
            "ns":0,
            "title":"Albert Einstein"
         },
      ]
   }
}
```
