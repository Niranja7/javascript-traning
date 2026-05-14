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























             