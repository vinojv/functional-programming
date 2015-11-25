# Rest Parameters
-----------------
#### In function signature
```sh
function foo(...bar){
    console.log(bar.join(' ')); //Logs 'hello world'
}
foo(''hello', 'world');
```

#### Difference between Rest and Arguments

```sh
function argumenty(name){
    console.log(name, arguments);
}
function resty(name, ...other){
    console.log(name, other);
}
argumenty("Aaron", "Frost", "Salt Lake City", "Utah"); //Logs Aaron, Aaron, Frost, Salt Lake City, Utah
resty("Aaron", "Frost", "Salt Lake City", "Utah");//Logs Aaron, Frost, Salt Lake City,

```

