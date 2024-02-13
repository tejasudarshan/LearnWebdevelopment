console.log("hello world")

/*variables*/

var a = 6;
var b= 7;
var c ="Ganesh";
const a1= 7;
console.log(a+b+1);

b= b+1;/*we can change the valye of the variable*/
console.log(b);
console.log(typeof a,typeof b,typeof a1,typeof c);
console.log(a1);
// a1 =a1+1; /*not possible since its a constant and value doesnt change*/
{
    let a = 66;
    console.log(a);/*the scope of variable a is within the parenthesis*/
}
console.log(a);/*scope of variable a is global*/
/*if not used let then the varaible is updated witht the latest assigned variable*/

let x = "hello";
let y= 11;
let z = 11.5;
const p = true;
let r = null;

console.log(typeof x,typeof y,typeof z,typeof p,typeof r);
/*type of null is shown by java script object*/

/*creating an object using a key value pair*/

let o={
    "name" : "ganesh",
    "job" : "associate software engineer",
    is_male :"true"
}
console.log(o);
o.address ="lorem"/*adress is added into "o" */

console.log(o);