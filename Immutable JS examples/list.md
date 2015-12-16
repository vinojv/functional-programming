# List

### Construction
```javascript
let list = Immutable.List(["Milk", "Eggs", "Detergent", "Bread", "Steak"]);
console.log(list.toJS());
//["Milk", "Eggs", "Detergent", "Bread", "Steak"]
```

### Static methods

## List.of()
```javascript
const todoItems = ["Milk", "Eggs", "Detergent", "Bread", "Steak"];
let list = Immutable.List.of(...todoItems);
//-OR-
let list = Immutable.List.of("Milk", "Eggs", "Detergent", "Bread", "Steak");
```

### Reading values

## get()
```javascript
var list = Immutable.List();
list = list.push("apple");
console.log(list.get(0));
```
