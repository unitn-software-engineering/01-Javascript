# Exercises
Let's take 10 minutes to work on the following exercises. We do not expect you to finish both right now, so do as much as you can and leave the rest as homework. 

1. **Implement evennumbers.js**, verying that the user provides the right number of parameters (2) and in the right format (numbers). 

2. **Create a frequency table** from an input file containing on word per line. 
Example Input:
```shell
$ cat tags.txt
Dog 
Cat
Dog
Dog
```
Example output:
```shell
$ node freq.js tags.txt
 Tag     Frequency  
 Dog     3      
 Cat     1       
```

Tips: 
- Try to split the file contents by the newline character (\n)
- Use the readline module ([suggestions from StackOverflow](https://stackoverflow.com/questions/6156501/read-a-file-one-line-at-a-time-in-node-js))