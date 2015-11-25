# Spread Operator
---
#### Example 1
```sh
//use '...' before an array
var nums = [1,2,3]
log(num); //logs [1, 2, 3]
log(...nums); //logs 1,2,3
```


#### EXAMPLE 2
```sh
function returnTwo(a,b)
{
 return [b,a] //flips 'a' and 'b'
}
var a=[1,2,3];
var b = returnTwo(a[0], a[1]); //[2,1]
var c= returnTwo(...a); //[2,1]
```

#### EXAMPLE 3 - COMBINE ARRAYS
```sh
let nums = [1,2,3];
let abcs = ['a','b','c'];
let alphanum = [...nums, ...abcs]; //[1, 2, 3, 'a', 'b','c']
```

#### EXAMPLE 4 - SPREAD RETURN VALUES
```sh
function getNums()
{
 return [1, 2, 3];
}
var b = [0, ...getNums()];
log(b);//[0, 1, 2, 3]
```
