// 1.
// declare a varaible userAge and assign it your age as number. Log the message:
let userAge= 19
console.log(`I am  ${userAge} years old`)

// 2.
// declare a string varaible message with the value "Hello, weolcome to JavaScript!". 
let string= "Hello, welcome to JavaScript!"
// Find & log the lenght of the string.
console.log("The lenght of string is", string.length)

// Find and log the index of the word "welcome".
console.log("The index of the word (welcome) is", string.indexOf("welcome"))

// Find and log the last index of the letter "o".
console.log("The last index of the letter (o) is", string.lastIndexOf("o"))

// Extract and log the word "JavaScript" using the substr() method.
console.log("The substring of word (JavaScript)",string.substring(18,31))

// 3.
// Write a program that checks if a number is stored in a varaible num is:
// Greater than 50 (log "The number is greater than 50.")
// Equal to 50 (log "The number is equal to 50.")
// Less than 50 (log "The number is less than 50.")
let num=40
if(num>50){
    console.log("The number is greater than 50")
}
else if (num==50){
    console.log("The number is equal to 50")
}
else{
console.log("The number is less than 50")
}
   
// 4.
// Write a program to check if a string stored in a variable input contains the word"JavaScript". If it does:
// log "You are learning JavaScript!"
// otherwise, log "Try learning JavaScript"
let input= "ScriptJava"
if (input==="JavaScript"){
    console.log("You are learning JavaScript")
}
else{
    console.log("Try learning JavaScript")
}
 
// 5.
// Create a varaible language with any string value. Write a program that checks:
// if the value is "JavaScript", log "You are learning JavaScript!" 
// otherwise, log "Try learning JavaScript"
 let language="JavaScript"
 if (language==="JavaScript"){
    console.log("You are learning JavaScript!")
    
 }
 else{
    console.log("Try learning JavaScript")
 }

//  6.
// Write a function greetUser that takes a name as a parameter and returns a message:
// Input: "Alice"
// Output: "Hello, Alice Welcome to JavaScript!"
function greetUser(name){
    return 'Hello, Alice Welcome to JavaScript!'
}
console.log(greetUser("Alice"))

// 7.
//  Write a function calculateArea that takes the lengt and width of rectangle  as a parameter and returns the area. For Example:
// Input: lenght =5, width= 10
// Output: "The area of rectangle is 50."
function calculateArea(lenght,width){
return lenght*width
}
let area= calculateArea(4,8);
console.log("The area of rectangle is", area)
 
// 8.
// Write a function checkEvenOdd that takes a number as input and logs whether the number is even or odd.
function checkEvenOdd(number) {
    if (number%2===0){
        console.log("Even");
    }
else{
    console.log("Odd");    
}
}
(checkEvenOdd("9"))

// 9.
// Write a unction isEven that takes a number and checks:
// if its even, log "The number is even" 
// otherwise,  log "The number is odd" 
function isEven(number){
if (number%2==0){
    console.log("The number is even")
}
else{
    console.log("The number is odd")
}
}
(isEven("4"))

// 10.
// Write a program for a game: Rock, Paper, Scissor.