# LET
-----
#### Basic form
```sh
let foo = 2;
if(true){
    let bar = 1;
}
console.log(fo + bar);   //Throws Error: 'bar' not defined

```

#### LET w/  Block Scopes
-------------------------
```sh
let a= 0;
if(true){
 let a = 2;
 console.log("here a = ", a );          //Logs 2
 }
 console.log("at the end, a = ", a );   //Logs 0
```

#### Two lets with same name is not allowed
-------------------------------------------
```sh
var a = 0;
var a =1;   // NO errors

let b = 0;
let b = 1;  //SyntaxError: Variable 'b' has already been declared
```

#### Temporal dead zone
-------------------------
```sh
function doSomething(){
console.log(a); //Throws ReferenceError, because a let variable is not accessible until it's defined.
let a = 1;
console.log(a);
}
```

#### LET w/  Looping
-------------------------
```sh
for(var i=0; i < 10; i++){
    console.log(i); //Logs 0-9
}
for(let j = 0; j < 10; j++){
    console.log(j); //Logs 0-9
}
console.log(i); //Logs 10
console.log(j); //ReferenceError
```

