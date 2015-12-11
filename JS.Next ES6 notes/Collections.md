#### Collections

- *Set* is like Array
- *Map* is like Key-Value Object
- *Weakmap* is like Map, but different

##### Set

```javascript
var set = new Set();
set.add(1);
set.add(2);
set.add(3);
console.log(set.size);
set.has(10); //false
set.delete(2);
set.clear();
set.add(1);
set.has("1"); //false
```

##### Iteration

```javascript
var item = new Set([1, 2, 3, 4]);

for (let num of items){
    console.log(num);
}
```

#### Basic Map

```javascript
var json = {name: "Aaron"};

var map = new Map();
map.set('name','Aaron');
map.get('name');
map.has("name");
```

##### Objects as Keys
```javascript
- Keys: Primitives/Objects/Functions
var user = {name: "Aaron", id: 12345};
var userHobbyMap = new Map();

userHobbyMap.set(user, ["Ice Fishing", "Family Outing"]); //must use same objects as keys
```

#### Weap Map

```javascript
var weak = new WeakMap();

weak.set("name", "Aaron");
weak.get("name");
```
- reference inside weakmap doesn't prevent garbage collection of that object


