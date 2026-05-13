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


//task 2

alert()

//Write the output and datatype for below:

console.log("10" + 5)    //sring
console.log(10 + true)  //number
console.log(false + null)    //number
console.log("Hello" + undefined)    //string
console.log([1,2] + 5)      //string

//String + Number
console.log(typeof("5" + 5))    //string

//Boolean + Number
console.log(typeof(true + 5))   //number

//Array + String
console.log(typeof([5] + "5"))  //string

//Object + Number
console.log(typeof({} + 5))     //string
                                
//Null + Number
console.log(typeof(null + 5))   //number

//Convert the following into Number:
console.log(Number("500"))   //500
console.log(Number(true))    //1
console.log(Number(false))   //0
console.log(Number(null))    //0
console.log(Number("abc"))   //NaN  
console.log(Number([100]))    //100

//Check whether below values are true or false using Boolean()
console.log(Boolean(""))        //false
console.log(Boolean("javascript")) //true
console.log(Boolean(0))         //false
console.log(Boolean(1))         //true
console.log(Boolean(null))      //false 
console.log(Boolean(undefined)) //false
console.log(Boolean([]))        //true
console.log(Boolean({}))        //true

//let mark = 45 Condition:Above 35 → Pass Below 35 → Fail
//Use if else.

let mark = 45
if(mark > 35){
    console.log("Pass")
} 
else {
    console.log("Fail")
}
//Create a variable:let age = 20
//Conditions:
//18 and above → Eligible
//Otherwise → Not Eligible

let age = 20
if(age >= 18){
    console.log("Eligible")
}
else {
    console.log("Not Eligible")
}

//Find greatest among 3 numbers using if else if.
//Example:
let a = 50
let b = 80
let c = 30

if(a >= b && a >= c){
    console.log("a is greatest")
} 
else if(b >= c){
    console.log("b is greatest")
}
else {
    console.log("c is greatest")
}

//Using switch statement:
//red → stop
//yellow → ready
//green → go
let trafficLight = "red"
switch(trafficLight){
    case "red":
        console.log("stop")
        break
    case "yellow":
        console.log("ready")
        break
    case "green":
        console.log("go")
        break
    default:
        console.log("invalid light")
}

//Create variables:

let username = "admin";
let password = "1234";

if(username === "admin" && password === "1234"){
    console.log("Login successful")
}
else {
    console.log("Invalid login")
}


//Take hour value:
//let hour = 14
//Conditions:
//1–12 → Morning
//13–15 → Afternoon
//16–19 → Evening
//20–24 → Night
//Use else if.

let hour = 14
if(hour >= 1 && hour <= 12){
    console.log("Morning")
}
else if(hour >= 13 && hour <= 15){
    console.log("Afternoon")
}
else if(hour >= 16 && hour <= 19){
    console.log("Evening")
}
else if(hour >= 20 && hour <= 24){
    console.log("Night")
}

//Print numbers from 1 to 20 using a for loop.
for(let i = 1; i <= 20; i++){
    console.log(i)
}

// Task 3


//Print numbers from 1 to 20 using a for loop

let j = 1
while(j <= 20){
    console.log(j)
    j++
}


//Odd Numbers
//Print all odd numbers from 1 to 50.

for(let k = 1; k <= 50; k++){
    if(k % 2 !== 0){
        console.log(k)
    }
}

// Print the multiplication table of 7
let number = 7
for(let n = 1; n <= 20; n++){
    console.log(`${number} x ${n} = ${number * n}`)
}

//Print numbers from 20 to 1 using a while loop
let x = 20
while(x >= 1){
    console.log(x)
    x--
}

// Find the total sum of numbers from 1 to 100
let sum = 0
for(let i = 1; i <= 100; i++){
    sum += i
}
console.log("Total sum from 1 to 100:", sum)

//Loop through this array and print all values.

let fruits = ["apple", "banana", "orange", "grapes"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//Count how many even numbers are present between 1 to 50.


let evenCount = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        evenCount++;
    }
}
console.log("Even numbers between 1 and 50:", evenCount);

//Print this pattern using loops:
//*
//**
//***
//**
//*****

for (let row = 1; row <= 5; row++) {
    let line = "";
    for (let col = 1; col <= row; col++) {
        line += "*";
    }
    console.log(line);
}

function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();

function greet(name) {
    console.log("Hello " + name);
}

greet("Naveen");

function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(10, 20));

function addSalaryBonus(salary, bonus) {
    return salary + bonus;
}

console.log(addSalaryBonus(50000, 5000));

let student = {
    name: "Rahul",
    course: "JavaScript",
    marks: 95
};

for (let key in student) {
    console.log(key + ": " + student[key]);    //output: name: Rahul, course: JavaScript, marks: 95
}


function largerNumber(a, b) {
    return a > b ? a : b;
}

console.log(largerNumber(10, 50));  //output: 50

let employee = {
    name: "Rahul",
    department: "JavaScript",
    salary: 50000
};

function printEmployeeDetails(emp, bonus) {
    console.log("Employee Name:", emp.name);
    console.log("Department:", emp.department);
    console.log("Salary:", emp.salary);
    console.log("Salary after bonus:", emp.salary + bonus);
}

printEmployeeDetails(employee, 5000);  

//output: Employee Name: Rahul, Department: JavaScript, Salary: 50000, Salary after bonus: 55000

//task 4

function welcomeUser(name) {
    console.log("Welcome " + name);
}

welcomeUser("Naveen");

//2

function squareNumber(num) {
    return num * num;
}

console.log(squareNumber(5));   //output: 25

//3

let employeeDetails = {
    name: "Rahul",
    salary: 50000
};

function employeeBonus(bonus) {
    console.log(employeeDetails.name);
    console.log(employeeDetails.salary + bonus);
}

employeeBonus(5000); // output: Rahul, 55000

//4

function demoVariableScope() {
    if (true) {
        var a = "var inside block";
        let b = "let inside block";
        const c = "const inside block";
        console.log("Inside block:", a, b, c);
    }

    console.log("Outside block (var):", a);

    try {
        console.log("Outside block (let):", b);
    } catch (error) {
        console.error("Outside block (let) error:", error.message);
    }

    try {
        console.log("Outside block (const):", c);
    } catch (error) {
        console.error("Outside block (const) error:", error.message);
    }
}

demoVariableScope();   

//5

const add = (a, b) => console.log(a + b);
add(10, 20);

function multiply(a, b) {
    return a * b;
}

function calculator(callback, a, b) {
    return callback(a, b);
}

console.log(calculator(multiply, 5, 2));   // output: 10

//6

function* offers() {
    yield "50% OFF";
    yield "Free Delivery";
    yield "Cashback";
}

const offerGenerator = offers();
console.log(offerGenerator.next().value);
console.log(offerGenerator.next().value);
console.log(offerGenerator.next().value);   

//8

function student(name, course = "JavaScript") {
    console.log("Name:", name);
    console.log("Course:", course);
}

student("Rahul");
student("Naveen", "c++");   

//9



function multi(a) {
    return function(b) {
        return function(c) {
            return a * b * c;
        };
    };
}

console.log(multi(2)(3)(4));          // output: 24

//10

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2];
console.log(merged);        // output: [1, 2, 3, 4, 5, 6]

//11

const obj1 = { name: "Navi" };
const obj2 = { role: "Developer" };
const mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj);         // output: { name: "Navi", role: "Developer" }

//12

function numbers(...num) {
    console.log(num);
    const sum = num.reduce((total, value) => total + value, 0);
    console.log(sum);
}

numbers(1, 2, 3, 4);        // output: [1, 2, 3, 4] and 10

//mini task

// Student Management System

let students = [];

function addStudent(name, ...marks) {
    const student = { name, marks };
    students.push(student);
}

function printStudents() {
    students.forEach(student => {
        console.log(`Name: ${student.name}, Marks: ${student.marks}`);
    });
}

function calculateMarks(callback) {
    students.forEach(student => {
        const total = callback(student.marks);
        console.log(`${student.name} Total Marks: ${total}`);
    });
}

function addBonusMarks(bonus, callback) {
    students = students.map(student => {
        const newMarks = callback(student.marks, bonus);
        return { ...student, marks: newMarks };
    });
}

// Example usage
addStudent("Rahul", 85, 90, 88);
addStudent("Naveen", 92, 87);

printStudents();

calculateMarks((marks) => marks.reduce((sum, mark) => sum + mark, 0));

addBonusMarks(5, (marks, bonus) => marks.map(mark => mark + bonus));

console.log("After bonus:");
printStudents();


















             