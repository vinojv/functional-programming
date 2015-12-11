/**
 *Map
 */

// Persistent changes

/** set() */

let map = Immutable.Map({x: 5});

map = map.set("y", 6);
//{ x: 5, y: 6 }

/**  delete() */

let map = Immutable.Map({x: 5, y: 6});

map = map.delete("y");
//{ x: 5, y: 6 }

/**  update() */

let map = Immutable.Map({x: 5, y: 6});

map = map.update("x", (x) => 9);
//{ x: 9, y: 6 }

map = map.update("x", (x) => x - 2);
//{ x: 7, y: 6 }

/**  merge() */

let map1 = Immutable.Map({x: 5, y: 6, z: 10});
let map2 = Immutable.Map({a: 3, b: 4, z: 7});

let map3 = map1.merge(map2);
//{a: 3, b: 4, x: 5, y: 6, z: 7}

/** clear() */

let map = Immutable.Map({x: 5, y: 6, z: 10});

map = map.clear();
// {}

// Reading values

/**  get() */

let map = Immutable.Map({x: 5, y: 6, z: 10});

console.log(map.get("x"));
// 5

/**  has() */

let map = Immutable.Map({x: 5, y: 6, z: 10});

console.log(map.has("x"));
//true
console.log(map.has("w"));
//false
 
/**  first() */

let map = Immutable.Map({fruit: "Apple", toy: "Ball", animal: "Cat"});
console.log(map.first());
// "Apple"

/**  last */
//opposite of first()

// Reading deep values

//Note: always use from JS to create nested structures

let map = Immutable.fromJS({point: {x: {A: 1}}});

console.log(map.getIn(["point", "x", "A"]));
//1

// Search for value

/**  find() */

let map = Immutable
    .fromJS({
        point1: {x: 1, y: 0},
        point2: {x: 0, y: 1},
        point3: {x: 1, y: 1},
        point3: {x: 0, y: 0},
    });

let point = map.find((p) => (p.get("x") === 0 && p.get("y") === 0));
console.log("findPoint", point.toJS());
// {x: 0, y: 0}




