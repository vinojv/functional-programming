#### Promises

###### Promise Constructor

```javascript
var promise = new Promise(function(resolve, reject)) {
	//do a thing, possible async, then...

	if(/*everything turned out fine */) {
		resolve("Stuff worked!");
	}
	else {
		reject(Error("It broke"));
	}
});

return promise; //Give this to someone
```

##### Static Promise Methods

- Promise.all(iterable); //wait until all settles
- Promise.race(iterable); //wait until 1 settles
- Promise.reject(reason); //create a promise that is already rejected
- Promise.resolve(value); //create a promise that is already resolved