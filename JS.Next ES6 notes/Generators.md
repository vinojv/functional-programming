#### Generators

- Generators enable Javascript code to be more cooperative

```javascript
function *three() {
	yield 1;
	yield 2;
	return 3;
}

var geni = three(); //return generator iterator
geni.next(); return {value: 1, done: false}
geni.next(); return {value: 2, done: false}
geni.next(); return {value: 3, done: true}
geni.next(); //returns undefined
```

```javascript
function *foo(x) {
	var y= 2 * (yield (x + 1));
	var z = yield (y / 3);
	return (x + y + z);
}

var genit = foo(5);

console.log(genit.next()); 
console.log(genit.next(12)); 
console.log(genit.next(13)); 
```