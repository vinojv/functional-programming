#### Modules - Programmatic Loading API

##### System.import API

```javascript
System.import('some_module')
.then(some_module => {
    //...
})
.catch(error => {
    //...
});
```

- System.import returns Promise
- Promise.then provides 'exports'

##### Load All
```javascript
Promise.all((
    ['module1', 'module2', 'module3']
    .map(x => System.import(x)))
    .then(function ([module1, module2, module3])
    //...
});
```

##### System "Module" functions

```javascript
System.import(source); //return module via promise
System.module(source, options); //return module via promise
System.set(name, module); //inlin register a new module
System.define(name, source, options?); //eval code and register module
```
