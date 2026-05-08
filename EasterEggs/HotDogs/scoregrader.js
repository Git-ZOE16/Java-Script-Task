// collect a score from the user
// compare scores and display the corresponding grades

const prompt = require("prompt-sync")();
let score = Number(prompt("Enter a score: "));

if(score >= 90 && score == 100){
    console.log("Grade-A")
} else{
    console.log("Grade-f")
}
