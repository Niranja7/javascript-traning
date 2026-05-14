// 1



const studentName = prompt("Enter student name:");
const department = prompt("Enter department:");
const age = prompt("Enter age:");

console.log("Student Details:");
console.log("Name:", "Welcome " + studentName);
console.log("Department:", department);
console.log("Age:", age);


//2


let balance = 10000;
let withdrawAmount = Number(prompt("Enter withdrawal amount:"));

if (withdrawAmount >= 100 && withdrawAmount <= balance) {
    console.log("Transaction Successful");
} else if (withdrawAmount < 100) {
    console.log("Minimum withdrawal is 100");
} else {
    console.log("Insufficient Balance");
}


//3



const orderAmount = Number(prompt("Enter order amount:"));
const message = orderAmount > 499
    ? "Free Delivery Available"
    : "Delivery Charges Applied";

console.log(message);


//4

const username = prompt("Enter username:");
if (username === "admin") {
    const password = prompt("Enter password:");
    if (password === "1234") {
        console.log("Login Success");
    } else {
        console.log("Wrong Password");
    }
} else {
    console.log("Invalid Username");
}


//5

const color = prompt("Enter color (red/yellow/green):");
switch (color) {
    case "red":
        console.log("STOP");
        break;
    case "yellow":
        console.log("READY");
        break;
    case "green":
        console.log("GO");
        break;
    default:
        console.log("Invalid color");
}


//6

function salaryCalculation(basic, bonus) {
    return basic + bonus;
}

console.log(salaryCalculation(25000, 5000)); 


//7

const prices = [100, 200, 300, 400];
let total = 0;
for (let i = 0; i < prices.length; i++) {
    total += prices[i];
}
const average = total / prices.length;
console.log("Total price:", total);
console.log("Average price:", average);

8

const user = {
    name: "John Doe",
    phone: "9876543210",
    status: "Active"
};

console.log("---Contact details---");

for (const key in user) {
    let label = key.charAt(0).toUpperCase() + key.slice(1);
    console.log(`${key}: ${user[key]}`);
}


//9


function payment() {
    console.log("Payment processed successfully!");
}

function bookTicket(movieName, callback) {
    console.log(`Booking ticket for: ${movieName}...`);
    console.log("Booking complete.");
    
    callback();
}
bookTicket("Inception", payment);

//10

function* foodDeliveryTracker() {
  yield "Order Confirmed";
  yield "Preparing Food";
  yield "Out for Delivery";
  yield "Delivered";
}

const tracker = foodDeliveryTracker();

console.log(tracker.next().value); 
console.log(tracker.next().value);
console.log(tracker.next().value);
console.log(tracker.next().value);