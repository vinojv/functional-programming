#### Classes

- Class is just sugar on top of what we can already do

```javascript
class Animal{
  constructor(name){
      this.name= name;
    }
}
```

##### Private Properties

```javascript
(function(){
    var monsterHealth = Symbol();
    var monsterSpeed = Symbol();

    class Monster{
        constructor(name, health){
        this.name = name;
        this[monsterHealth] = health;
        this[monsterSpeed] = health;
    }

    get speed(){
        return this[monsterSpeed];
    }

    get isAlive(){
        return this[monsterHealth] > 0;
    }

    set isAlive(alive){
        if(!alive) this[monsterhealth] = 0;
    }

    foo(){
        console.log(this.isAlive); //using this
    }

    set name(name){
        this.name = name; //causes endless loop
    }
}
window.Monster = Monster;
})();

var a = new Monster("Kevin", 1, -1);
console.log(a.speed, a.isAlive);
a.isAlive = false;
```

#### Class Properties

```javascript
class Monster{
 constructor(name, health){
     this.name = name;
     this[monsterHealth] = health;
     Monster.allMonsters.push(this);
 }
 //...
}

Monster.allMonsters = [];
```

#### Extend Classes

```javascript
class Godzilla extends Monster{
    constructor(){
        super("Godzilla", 10000);
    }

    attack(target){
        super(target); //subject to change
    }
}
```

#### Extend Classes via Expression

```javascript
class MySocket extends getClass(){
   //...
}

function getClass(){
    if(isIE()){
        return IEWebSocketImpl;
    }
    return WebSocket;

    function isIE(){
        return false;
    }
}
```
- classes do not hoist
- if no constructor, default behavior
- subclass built in object: Array, Error, etc