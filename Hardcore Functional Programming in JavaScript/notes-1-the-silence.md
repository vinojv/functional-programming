# The Silence

#### A. Separate inputs from environment
- Having no secret inputs in functions (as opposed to explicit) makes it easier to test
- See http://output.jsbin.com/yoyip

#### B. Separate mutation from calculation
- Isolate places where mutation happens 
- For testing DOM mutation we'd have to mock the DOM elements out which can be prevented

#### C. Recognize pure functions. Their purity makes them
- testable
- portable
- memoizable (is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.)
- parallalizeable: doesn't matter which function runs when

###### q. Is this a pure function?

```javascript
function chattyAdd(a, b, console){
    var c = ab+b;
     console.log(a,'+',b,'=',c);
     return c;
}
```
#### D. Separate functions from rules
- functions are nouns
- set theoretically: every function is a single-valued collection of pairs
- one input, one output
- separate arity from functions: *Currying* See http://jsbin.com/romun