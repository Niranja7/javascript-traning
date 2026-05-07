alert();

// 1.What is the output?

var a = 10; 
a = 15;
console.log(a); // Output: 15

//What happens here?
let b = 20;
//let b = 30; //error

//What is the output?
const c = 50;
console.log(c); //output: 50

//Identify error:
const x = 10;
x = 20;
//not accept reUse,Reintialiazation and ReDeclaration

//Output?
var p = 5;
var p = 10;
console.log(p); // Output: 10

//Output?
let q = 25;
q = q + 10;
console.log(q); // Output: 35

//Output?
const r = 7;
console.log(r + 3); // Output: 10

//Fill correct keyword:
___ a = 10; //var
   

//Which method prints normal output?

console.log("");

//Which method shows warning?

console.warn("");

//Which method shows error?

console.error("");

//What does this do?

console.clear();

//remove all text from console 

//Section 3: Data Types 
//Output?

let a = "hello";
console.log(typeof a);

//Output? string

//Output?
let b = 100;
console.log(typeof b);

//Output? number

let c = false;
console.log(typeof c);

//Output? boolean

 // Output?
let d;
console.log(d);

//Output? undefined

//What is type of null?

console.log(typeof null);

//Output? object

//Convert string to number: "25"
let str = "25";
let num = Number(str); 
console.log(num); // Output: 25


//Create array of 3 fruits.

let fruits = ["apple", "mango", "grapes"];

//Output?

console.log(fruits); // Output: ["apple", "mango", "grapes"]
console.log(fruits[0]); // Output: "apple"
console.log(fruits[1]); // Output: "mango"
console.log(fruits[2]); // Output: "grapes" 
console.log(fruits[fruits.length - 1]); // Output: "grapes"


let arr = ["a","b","c"];
console.log(arr[1]);       //Output? b

let arr = ["x","y","z"];
console.log(arr[arr.length-1]);      //Output? z

//How to get first element?
//Output?
console.log(arr[0]);      //Output? x

let arr = ["apple","banana"];
console.log(arr.length);      //Output? 2

//Add new element to array.
 
arr.push("orange");


Create object with name & age.
let person ={
    name:"harish";
    age: 20;
}
//Output?

console.log(person);      // Output: {name: "harish", age: 20}

let obj = {name:"Naveen"};
console.log(obj.name);   //Output? naveen

let obj = {
  fruits: ["apple","banana"]
};
console.log(obj.fruits[1]);   //output? banana
 
//How to access last element inside object array?

console.log(obj.fruits[obj.fruits.length-1])    //output? banana


console.log(5 + 3);       //Output? 8

console.log(10 % 3);     //Output? 1

console.log(2 ** 3);     //Output? 8

console.log(10 / 2);     //output? 5


let a = 5;
a++;                     
console.log(a);     // a =5+1 =6  

let b = 5;
let c = b++;
console.log(b, c);      // b=6, c=5

let x = 5;
let y = ++x;
console.log(x, y);     // x=6, y=6

let m = 3;
let n = m--;
console.log(m, n);    // m=2, n=3


console.log(5 == "5");   //true

console.log(5 === "5");   //false
O
console.log(true && false || true);  //true  


5 > 3 ? console.log("Yes") : console.log("No");  //yes

