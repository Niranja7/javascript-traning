//task 1

var a = 10;
a = 15;
console.log(a);  //output: 15


let b = 20;
let b = 30;     //output: error


const c = 50;
console.log(c);     //output: 50


const x = 10;
x = 20;             //output: error

var p = 5;
var p = 10;
console.log(p);         //output: 10


let q = 25;
q = q + 10;
console.log(q);         //output: 35

const r = 7;
console.log(r + 3);     //output: 10



___ a = 10;            //output: error


//Which method prints normal output?

console.log() //prints normal output.

//Which method shows warning?

console.warn() //shows warning.

//Which method shows error?

console.error() //shows error.

//What does this do?

console.clear();  //It clears the console, removing all previous logs, warnings, and errors from view.

let a = "hello";
console.log(typeof a);      //output: string


let b = 100;
console.log(typeof b);      //output: number

let c = false;
console.log(typeof c);          //output: boolean

let d;
console.log(d);     //output: undefined


//What is type of null?
console.log(typeof null);      //output: object

//Convert string to number:

let  = "25";
let num = Number(str);
console.log(num);              //output: 25
console.log(typeof num);       //output: number

//Create object with name & age.

let person = {
    name: "Naveen",
    age: 30
};
console.log(person);   //output: {name: "Naveen", age: 30}  


output: {name: "Naveen", age: 30}


let obj = {name:"Naveen"};
console.log(obj.name);  
     
Output?
output: Naveen  

let obj = {
  fruits: ["apple","banana"]
};
console.log(obj.fruits[1]);    //output: banana


How to access last element inside object array?

console.log(obj.fruits[obj.fruits.length - 1]);   


console.log(5 + 3);    //output: 8

console.log(10 % 3);     //output: 1

console.log(2 ** 3);       //output: 8

console.log(10 / 2);    //output: 5


let a = 5;
a++;
console.log(a);   //output: 6

let b = 5;
let c = b++;
console.log(b, c);   //output: 6, 5

let x = 5;
let y = ++x;
console.log(x, y);      //output: 6, 6

let m = 3;
let n = m--;
console.log(m, n);     //output: 2, 3

console.log(5 == "5");   //output: true


console.log(5 === "5");      //output: false


console.log(true && false || true);     //output: true


5 > 3 ? console.log("Yes") : console.log("No");   //output: Yes


