let prompt = require("prompt-sync")();
 
let n = parseInt(prompt("Enter n:"));

let sum = (n * (n + 1)) / 2;
console.log("The sum is: " + sum);
