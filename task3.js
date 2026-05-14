alert()

//1

let j = 1
while(j <= 20){
    console.log(j)
    j++
}

//2

for (let i = 1; i <= 50; i += 2) {
  console.log(i);
}

//3

for (let i = 1; i <= 20; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}


//4

for (let i = 20; i >= 1; i--) {
  console.log(i);
}



//5


let sum = 0
for(let i = 1; i <= 100; i++){
    sum += i
}
console.log("Total sum from 1 to 100:", sum)

//6

let fruits = ["apple", "banana", "orange", "grapes"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


//7


let count = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    count++;
  }
}
console.log("Even count:", count);



//8

for (let row = 1; row <= 5; row++) {
    let line = "";
    for (let col = 1; col <= row; col++) {
        line += "*";
    }
    console.log(line);
}

//9

function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();

//10

function greet(name) {
    console.log("Hello " + name);
}

greet("Naveen");


//11

function addNumbers(a, b) {
    return a + b;
}

console.log(addNumbers(10, 20));

//12

function addSalaryBonus(salary, bonus) {
    return salary + bonus;
}

console.log(addSalaryBonus(50000, 5000));


//13

let student = {
  name: "Rahul",
  course: "JavaScript",
  marks: 95
};

for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}


//14

function largest(a, b, c, d) {
  return Math.max(a, b, c, d);
}

console.log(largest(10, 40, 30, 2000));


//15

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