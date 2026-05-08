let prompt = require("prompt-sync")();


let val = parseInt(prompt("Enter an integer:"));


console.log("Divisible by both? " + (val % 4 === 0 && val % 5 === 0));


console.log("Divisible by 4 or 5? " + (val % 4 === 0 || val % 5 === 0));


console.log("One but not both? " + (val % 4 === 0 ^ val % 5 === 0));
