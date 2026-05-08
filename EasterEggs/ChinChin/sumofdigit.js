let prompt = require("prompt-sync")();
 
let number = prompt("Enter a 3-digit number:"); 
let sum = parseInt(number[0]) + parseInt(number[1]) + parseInt(number[2]);
console.log("Sum: " + sum);
