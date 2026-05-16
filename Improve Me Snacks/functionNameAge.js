let prompt = require("prompt-sync")();

let age = prompt("Enter a your age: ");



function AgeRange (age){
if (age >= 18)
    console.log("You are an Adult");
else if (age >= 13 && age <= 17)
    console.log(" you are a Teen");
else 
    console.log("You are a child");
  }  
AgeRange(age);
