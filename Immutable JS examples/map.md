# Map

##### Note: 
Always use fromJS() instead of Map() to create nested objects in one shot or else the nested objects will be mutable.


### Persistent changes

## set()

```javascript
let map = Immutable.Map({x: 5});
map = map.set("y", 6);
//{ x: 5, y: 6 }
```

## delete() 
```javascript
let map = Immutable.Map({x: 5, y: 6});
map = map.delete("y");
//{ x: 5, y: 6 }
```

##  update() 
```javascript
let map = Immutable.Map({x: 5, y: 6});
map = map.update("x", (x) => 9);
//{ x: 9, y: 6 }
map = map.update("x", (x) => x - 2);
//{ x: 7, y: 6 }
```

##  merge() 
```javascript
let map1 = Immutable.Map({x: 5, y: 6, z: 10});
let map2 = Immutable.Map({a: 3, b: 4, z: 7});
let map3 = map1.merge(map2);
//{a: 3, b: 4, x: 5, y: 6, z: 7}
```

## clear() 
```javascript
let map = Immutable.Map({x: 5, y: 6, z: 10});
map = map.clear();
// {}
```

### Reading values

##  get() 
```javascript
let map = Immutable.Map({x: 5, y: 6, z: 10});
console.log(map.get("x"));
// 5
```

##  has() 
```javascript
let map = Immutable.Map({x: 5, y: 6, z: 10});
console.log(map.has("x"));
//true
console.log(map.has("w"));
//false
```

##  first() 
```javascript
let map = Immutable.Map({fruit: "Apple", toy: "Ball", animal: "Cat"});
console.log(map.first());
// "Apple"
```

##  last()
opposite of first()

### Reading deep values

## getIn()
```javascript
let map = Immutable.fromJS({point: {x: {A: 1}}});
console.log(map.getIn(["point", "x", "A"]));
//1
```

### Search for value

##  find() 
```javascript
let map = Immutable
    .fromJS({
        point1: {x: 1, y: 0},
        point2: {x: 0, y: 1},
        point3: {x: 1, y: 1},
        point3: {x: 0, y: 0},
    });

let point = map.find((p) => (p.get("x") === 0 && p.get("y") === 0));
console.log("point", point.toJS());
// {x: 0, y: 0}
```

### Sequence algorithms 

## map() 
```javascript
let things = Immutable.fromJS({fruit: {name: "Apple"}, toy: {name: "Ball"}, animal: {name: "Cat"}});
let names = things.map((thing) => thing.get("name"));
console.log(names.toJS());
//{animal: "Cat", fruit: "Apple", toy: "Ball"}
```

## filter()
```javascript
let movies = Immutable.fromJS({
    0: {name: "Star Wars VII", watched: false},
    1: {name: "Batman V Superman", watched: false},
    2: {name: "Spectre", watched: true}
});

let moviesToWatch = movies.filter((movie) => (!movie.get("watched")));
console.log(moviesToWatch.toJS());
//{0: {name: "Star Wars VII", watched: false}, 1: {name: "Batman V Superman", watched: false}}
```

## groupBy()

```javascript
let movies = Immutable.fromJS({
  a: {name: "Star Wars VII", watched: false},
  b: {name: "Batman V Superman", watched: false}, 
  c: {name: "Spectre", watched: true}
});

movies = movies.groupBy((movie) => (movie.get("watched")));

console.log(movies.toJS());
//{
//    false: {
//      a: { ... },
//      b: { ... }
//    },
//    true: {
//      c: { ... }
//    }
//  }
```

### Side effects

## forEach()
```javascript
let movies = Immutable.fromJS({ 
  0: {name: "Star Wars VII", watched: false}, 
  1: {name: "Batman V Superman", watched: false}, 
  2: {name: "Spectre", watched: true}
});

movies.forEach((movie) => (movie.watched = true));
});

console.log("movies", movies.toJS());
//{0: {name: "Star Wars VII", watched: true}, 1: {name: "Batman V Superman", watched: true}, 2: {name: "Spectre", watched: true}
}
```

### Creating subsets

## slice()
```javascript
var point = Immutable.fromJS({x: 1, y:2, z:3});
console.log(point.slice(point.size-1, point.size).toJS());
//{z: 3}

let movies = Immutable.fromJS({
  a: {name: "Star Wars VII", watched: false},
  b: {name: "Batman V Superman", watched: false}, 
  c: {name: "Spectre", watched: true}
});
console.log(movies.slice(movies.size-1, movies.size).toJS());
//{
//  c: {
//    name: "Spectre",
//    watched: true
//  }
//}

//Negative slice

var point = Immutable.fromJS({x: 1, y:2, z:3});
console.log(point.slice(0, -2).toJS());
//{x: 1}

let movies = Immutable.fromJS({
  a: {name: "Star Wars VII", watched: false},
  b: {name: "Batman V Superman", watched: false}, 
  c: {name: "Spectre", watched: true}
});
console.log(movies.slice(0, -2).toJS());
//{
//  a: {
//    name: "Star Wars VII ",
//    watched: false 
//  }
//}
```

## rest()
```javascript
var point = Immutable.fromJS({x: 1, y:2, z:3});
console.log(point.rest().toJS());
//{y: 2, z: 3}

let movies = Immutable.fromJS({
  a: {name: "Star Wars VII", watched: false},
  b: {name: "Batman V Superman", watched: false}, 
  c: {name: "Spectre", watched: true}
});
console.log(movies.rest().toJS());
//{
//  b: {
//    name: "Batman V Superman",
//    watched: false 
//  },
//  c: {
//    name: "Spectre",
//    watched: true 
//  }
//}
```
## skip()
Skips first n

## takeLast()
Takes last n

## skipUntil()
```javascript
let movies = Immutable.fromJS({
    a: {name: "Star Wars VII", watched: false},
    b: {name: "Batman V Superman", watched: false}, 
    c: {name: "Spectre", watched: true}
});
   
movies = movies.skipUntil((movie) => (movie.get("name") === "Batman V Superman"));   
  
console.log(movies.toJS());
//{
//  b: {
//    name: "Batman V Superman",
//    watched: false 
//  },
//  c: {
//    name: "Spectre",
//    watched: true 
//  }
//}
  ```
  
## skipWhile()
Opposite of skipUntil()
  
### Comparison

## is()
```javascript
const map1 = Immutable.Map({a:1, b:1, c:Immutable.List.of(1)});
const map2 = Immutable.Map({a:1, b:1, c:Immutable.List.of(1)});
    
console.log(Immutable.is(map1, map2));
//true
```

## isSubset()

```
const map1 = Immutable.Map({a:1, b:1});
const map2 = Immutable.Map({a:1, b:1, c:3});
    
console.log(map1.isSubset(map2));
//true
console.log(map2.isSubset(map1));
//false
```

## isSuperset()

```javascript
const map1 = Immutable.Map({a:1, b:1});
const map2 = Immutable.Map({a:1, b:1, c:3});
    
expect(map2.isSuperset(map1));
//true
expect(map1.isSuperset(map2));
//false
```






