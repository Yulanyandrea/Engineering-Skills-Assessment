# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
This code has common js modules to determinate if the candidate has a partition key, we create a conditional to verify this action. That is why we are seeing if event has the property partitionKey. If the event not has this property we will create a hash using the sha3-512 algorithm of the crypto module by hashing the data. Also, this information is converted to text plane with JSON.stringify().

Secondly, it is convenient to validate if candidate is not a string we will converted to.

Finally, if there is not a candidate, we will change it into 0. However, if there is something we will create a hash


This new code is more readable with the original because of we are using conditionals in a propertly way. If you want to create nested conditionals it is better to use it with else if and not doing in the wrong way 

```
  if(){
    if(){
    }
  }
```

Also,  if you want to check that a variable exists we can write it in the same conditional and not divided in two. On the other hand , it was much easier to delete else  and concatenate all the information in a one single conditional


Original code

```
 if (event) {
    if (event.partitionKey) {
      candidate = event.partitionKey;
    } else {
      const data = JSON.stringify(event);
      candidate = crypto.createHash("sha3-512").update(data).digest("hex");
    }
  }
```



Second code 

```
 if (event && event.partitionKey) {
    candidate = event.partitionKey;
  } else if (event) {
    const data = JSON.stringify(event);
    candidate = crypto.createHash("sha3-512").update(data).digest("hex");
  }
```


This code has less code lines and it is much easier to understand because it use basic concepts of Javascript. People only need to understand how crypto works with Express and what functions,modules, or properties use. 

