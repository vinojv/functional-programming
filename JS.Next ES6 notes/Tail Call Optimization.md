
#### Tail Call Optimization

-  Previous stacks are GC'd

```javascript
function foo(num){
    try{
        return foo((num||0)+1);
    }
    catch(e){return num;}
}
console.log(foo());
```

##### Vocabulary

*Tail position:* last instruction to fire before the return statement

*Tail call:* an instruction in Tail position that is a method call

*Close call:* looks like a tail call but isn't

```javascript
function foo(){
    return 1 + bar();
}
```

- Proper tail calls only work in Strict Mode
- Optimize code that Tail Position is a Tail Call