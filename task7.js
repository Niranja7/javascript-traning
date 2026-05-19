// 1.


let link = "https://jsonplaceholder.typicode.com/users";

fetch(link)   
  .then(response => response.json())
  .then(users => {
    let uppercasedUsernames = users.map(user => user.username.toUpperCase());
    console.log(uppercasedUsernames);
  });       




// 2. 

let products = "https://fakestoreapi.com/products";

fetch(products)
  .then(response => response.json())
  .then(products => {
    let expensiveProducts = products.filter(product => product.price > 100);
    console.log(expensiveProducts);
  });



// 3.


let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();

console.log(hours + ": " + minutes + ": " + seconds);



// 4. 

let username = "   Naveen Kumar   ";

let trimmedUsername = username.trim();

let uppercasedUsername = trimmedUsername.toUpperCase();

let includesKumar = uppercasedUsername.includes("KUMAR");

console.log(trimmedUsername);

console.log(uppercasedUsername);

console.log(includesKumar); 




// 5. 

let marks = [450, 300, 700, 200, 900];
let sortedMarks = marks.sort((a, b) => b - a);
let topThreeMarks = sortedMarks.slice(0, 3);

console.log(topThreeMarks);