// 1.

let presentStudents = ["mohan", "hari", "sasi"];
let absentStudents = ["ravi", "suresh", "kumar"];

let allStudents = [...presentStudents, ...absentStudents];
allStudents.push("niranjan"); 
console.log(allStudents);  

// 2. 

let mobileDetails = {
    brand: "samsung",
    model: "galaxy s24",
    mobileprice: 20000
};      
let chargerDetails = {
    type: "fast charger",
    watt: 100,
    chargerprice: 1000
};
let cart = { ...mobileDetails, ...chargerDetails, deliveryDate: "2026-05-15" };
console.log(cart);



// 3. 

function orderFood(...foodItems) {
    console.log("Total items ordered:", foodItems.length);
    console.log("First item:", foodItems[0]);
    console.log("Last item:", foodItems[foodItems.length - 1]);
}
orderFood("pizza", "burger", "pasta", "salad", "briyani", "samosa", "idli", "dosa", "vada", "upma"  );


// 4. 

let employees = [
    { name: "mohan", salary: 55000 },
    { name: "sasi", salary: 45000 },
    { name: "hari", salary: 20000 },
    { name: "ninja", salary: 60000 }
];

let filteredEmployees = employees.filter(employee => employee.salary > 50000);
console.log("Filtered employees:", filteredEmployees);  



// 5. 

let scores = [100, 200, 150, 300, 250];
let totalScore = scores.reduce((total, score) => total + score, 0);
console.log("Total score of all players:", totalScore);