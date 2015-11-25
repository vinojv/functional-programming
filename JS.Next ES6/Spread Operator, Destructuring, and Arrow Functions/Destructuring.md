# Destructuring
-------------

#### Destructuring Objects
``` sh
let {city, state, zip} = getAddress();
log(city);
log(state);
log(zip);
```

#### Alias names
``` sh
let {city: c, state: s, zip: z} = getAddress();
log(c, s, z); //prints values
log(city, state, zip); //Throws Error: city, state, zip not defined
```

## Old way vs. New Way
---

#### Old way of destructuring objects
```sh
var person = {name: "Aaaron", age:35};
displayPerson(person);

function displayPerson(p){
 var name = p.name;
 var age =p.age;
}
```

#### New way of destructuring objects
```sh
var person = {name: "Aaaron", age:35};
displayPerson(person);

function displayPerson(p){
 let {name, age} = p;
}
```

#### New way - Improved
```sh
var person = {name: "Aaaron", age:35};
displayPerson(person);

function displayPerson({name, age}){
 // do something with name and age
}
```

#### New way - Giving default values in function signature
```sh
var person = {name: "Aaaron", age:35};
displayPerson(person);

function displayPerson({name="No name Provided", age=0}){
 // do something with name and age
}
```

#### Example - Try
```sh
try{
 throw "WorstError";
}catch({type, messsage, filename, lineNumber}){
 //do something with error
}
```

## Destructuting Pattern
---------------------

#### Example
```sh
var person = {name: "Aaaron", age:35};
displayPerson(person);

function displayPerson(p){
 let {name, age, address} = p; //Throws
 // do something with name and age to display them
}
```


#### Example
```sh
var person = {name: "Aaaron", age:35};
displayPerson(person);

function displayPerson(p){
 let {name, age, ?address} = p;
 // do something with name and age to display them
}
```


#### Example
```sh
var person = {name: "Aaaron", age:35};

let {?name, ?age, ?address} = person; 
//Forgives  each of them individually

let ?{name, age, address} = person; 
//Forgives  the whole pattern
```

## Patterns in depth
-----------------
```sh
let {a:x} = {} // throw
let ?{a:x} = {} // x =  undefined
let ?{a:x} = 0 // x =  undefined
let {?a:x} = {} // x =  undefined
let {?a:x} = 0 // throw

let ?{a: x=1} = undefined // x =  1
let {?a: x=1} = undefined // throw
let {?a: x=1} = {}// x =  1
```

#### patterns w/ default values
```sh
let {a: x, b: {c: y}, d: z} = {a:1, b: {}, d: 2} //throw
let {a: x, b: ?{c: y}, d: z} = {a:1, b: {}, d: 2} //x=1, y=undefined, z=2
let ?{a: x, b: {c: y}, d: z} = {b: {}, d: 2} ///x, y=undefined, z=2
```


#### Patterns - Nested
```sh
var person = {
 name: "Aaaron", 
 age:"35",
 address: {
	city: "Salt Lake City",
	state: "UT",
	zp: 84115
	}
};

let {name, age, address:{city, state, zip}} = person;
```


## Destructuring Arrays
--------------------

#### Basic Example
```sh
var nums = [1,2,3,4,5,6,7,8,9,10];
var[first, second,,,,,,,,tenth] = nums;
log(first, seconf, tenth);//1, 2, 10
```

#### swap variables
```sh
var a=1, b=2;
```

#### the old way
```sh
var temp=a, a=b, b =temp;
```

#### The new way
```sh
[b,a]=[a,b];
```

#### Method signature
```sh
var nums = [1,2,3,4]
doSomething(nums);
function doSomething([First, seconf, ...others]){
log(first); //logs 1
log(second); //logs 2
log(others); //logs [3,4]
}
```

#### Nestd Destructuring of an array
```sh
var nums = [1,2,[3,4,[5,6]]];
var [one,,[three,,[,six]]]=nums;
```

#### Pattern Errors
```sh
let [x] = [2,3] //x=2
let [x] = {'0':4} //x=4
let [x,y,z] = [2,3] //x=1,2 //throw
```

#### entire pattern is refutable
```sh
let ?[x,y,z] = [1,2] //x=1, y= 2, z= undefined
```

#### Only 'z' is Refutable
```sh
let ?[x,y, ?z] = [1,2] //x=1, y= 2, z= undefined
```

