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


