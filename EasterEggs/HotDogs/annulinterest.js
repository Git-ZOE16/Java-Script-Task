const prompt = require("prompt-sync")();

const balance = Number(prompt("Enter the account balance: "));
const annualInterestRate = Number(prompt("Enter the annual interest rate as a percentage: ")); 

const interest = balance * (annualInterestRate / 1200);

console.log(`Balance: $${balance.toFixed(2)}`);
console.log(`Annual interest rate: ${annualInterestRate}%`);
console.log(`Interest for next month: $${interest.toFixed(2)}`);
