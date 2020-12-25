# mod-cookie
JavaScript library of cookie.
---

### Node.js (install)

Requirements: </br>
 Node.js  </br>
 npm
```
npm install --save mod-cookie
```
---
#### Usage
ES6 import for typical API call signing use case :
```
import ModCookie from "../src"

var name = "mod";
var age = 18;
var hoppy = ['a','b','c'];

ModCookie.setItem("name",name);
ModCookie.setItem("age",age,1);
ModCookie.setItem("hoppy",hoppy);

setTimeout(function(){
    console.log(ModCookie.getItem("age"));//undefined
    console.log(ModCookie.getItem("name"));//mod
    ModCookie.removeItem("name");
    console.log(ModCookie.getItem("name"));//undefined
    ModCookie.clear();
    console.log(ModCookie.getItem("hoppy"));//undefined
},2000)

console.log(ModCookie.getItem("name"));//"mod"
console.log(ModCookie.getItem("age"));//18
console.log(ModCookie.getItem("hoppy"));//['a','b','c']
```

-------

#### API

##### [instance].setItem(key,value,expireTime); </br>
###### key : /required</br>
###### value :  /required</br>
###### expireTime : /seconds</br>
save the key value to cookie with expireTime,if do not set expireTime, The key value will never expired!

---
##### [instance].getItem(key); </br>
###### string : </br>
get the value from cookie by the key, if the value of key is not set yet or expired will return undefinded!

---
##### [instance].removeItem(key); </br>
###### CryptedString : </br>
clear the value of cookie by key

---
##### [instance].clear(); </br>
###### string : </br>
clear all value of cookie

---
