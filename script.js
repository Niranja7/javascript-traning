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