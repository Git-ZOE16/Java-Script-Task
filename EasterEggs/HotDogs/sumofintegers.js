const prompt = require("prompt-sync")();
let integer = Number(prompt("Enter a number: "));

let sum = 0;
while (integer > 0) {
    remainder = integer % 10;
    integer = integer/10
    sum+=remainder
}

console.log(sum);
