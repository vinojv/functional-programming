
# Arrow Functions

#### Basic comparison between regular functions and arrow function : 
```sh
var fn1 =function{return 2;};// regular function
var fn2 = ()=>2;// arrow function
```

#### Paranthesis parameters rules : 
```sh
varx;
x= () => {};	//No parameters, must have parens
x = (val) => {};//One parameter w/ parens, options;
x = val => {};	//One parameter w/o parens, optional;
x = (y,z) => {};//Two or more parameters, must have parens
x = y,z => {}; 	//Syntax Error: must wrap with parens when using multiple params
```

#### Method body declarations:
```sh
var sqare;
square =x => x * x; //Body w/o braces
sqare = x => {return x * x}; //Body w/ braces
```

#### Using arrow functions in place of anonymous functions:
```sh
let nums=[[1,2,3];
let res = nums.map( n => n * n);
console.log(res); //Logs [1, 4, 9]
```

#### Lexical binding of this using arrow function:
```sh
var widget = {
 init: function(){
  document.addEventListener("click", (event) = > {
	this.doSomethinf(event.type);
	}, false);
	},

doSomething: fuunction(type){
	console.log("Handling " + type + " event");
 }
};
Widget.init();
```


#### Example - You can't alter 'this on arrow functions:
```sh
function Widget(){
 this.id=123;
 this.log = () => {
	console.log('Widget Log', this.id);
	}
}
var pseudoWidget = {
 id: 456
};
new Widget().log.call(pseudoWidget);
```
