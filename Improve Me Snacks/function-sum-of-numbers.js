let prompt = require("prompt-sync")();

function SumOfNumbers(number1, number2){
    return number1 + number2;
}
let value1 = prompt("Enter the first Number: ");
let value2 = prompt("Enter the second Number: ");

let number1 = Number(value1);
let number2 = Number(value2);

console.log("The sum is:", SumOfNumbers(number1,number2));
