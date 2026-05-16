let prompt = require("prompt-sync")();

let value1 = prompt("Enter the first Number: ");
let value2 = prompt("Enter the second Number: ");


let numbersObject = {
    number1: Number(value1),
    number2: Number(value2)
};

function SumOfNumbers(data) {
    return data.number1 + data.number2;
}

console.log("The sum is:", SumOfNumbers(numbersObject));
