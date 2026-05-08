const prompt = require("prompt-sync")();

const monthlySaving = Number(prompt("Enter the monthly saving amount: "));
const MONTHLY_RATE = 0.003125;
let accountValue = 0;

console.log(`Monthly saving: $${monthlySaving}`);
console.log(`Monthly interest rate: ${MONTHLY_RATE * 100}%`);
console.log("----------------------------");

for (let month = 1; month <= 6; month++) {
    accountValue = (accountValue + monthlySaving) * (1 + MONTHLY_RATE);
    console.log(`Account value after month ${month}: $${accountValue.toFixed(2)}`);
}
