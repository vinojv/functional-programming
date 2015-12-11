#### Modules - Import/Export

##### Exporting Default

MyClass.js

```javascript
class MyClass{
    constructor(){}
    //...
}
export default MyClass;
```

Main.js

```javascript
import MyClass from 'MyClass';
```

##### Exporting Multiple Exports

lib.js

```javascript
export const sqrt = Mth.sqrt;
export function square(x){
    return x * x;
}
export function diag(x, y){
    return sqrt(square(x) + square(y));
}
```

main.js

```javascript
import {square, diag} from 'lib';
console.log(square(11)); //121
console.log(diag(4, 3)); //5
//-OR-
import * as lib from 'lib';
console.log(lib.sqaure(11));
console.log(lib.diag(4, 3));
```

##### Export As

lib.js

```javascript
class MyClass{
    //...
}

export {MyClass as Dude};
```

main.js
```javascript
import {Dude as Bro} from 'lib';
var bro = new Bro(); //instanceof MyClass
```

##### Cyclical Dependencies

lib.js

```javascript
import Main from 'main';
var lib = {message: "This is a lib"};
export {lib as Lib};
```

main.js

```javascript
import {Lib} from 'lib';
export default class Main{
 //...
}
```

##### More Importing

lib.js

```javascript
//Default exports & named exports
import theDefault, {named1, named2} from 'src/mylib';
import theDefault from 'src/mylib';
import {named1, named2} from 'src/mylib';

//Renaming: import named1 as myNamed1
import { named1 as myNamed1, named2} from 'src/mylib';

//Importing the module as an object
//(with one properly per named export)
import * as mylib from 'src/mylib';

//Only load the module, don't import anything
import 'src/mylib';
```

##### Reexporting

lib.js

```javascript
export * from 'src/other_module';
export {foo, bar} from 'src/other_module';
//Export other_mpdule's foo as myFoo
export {foo as myFoo, bar} from 'src/other_module';
```