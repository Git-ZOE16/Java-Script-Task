let prompt = require("prompt-sync")();

let number = prompt("Enter a 3-digit integer:");


if (number[0] === number[2]) {
    console.log("It is a palindrome");
} else {
    console.log("Not a palindrome");
}

