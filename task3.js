alert()

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
    marks: 95ber(a, b) {
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

