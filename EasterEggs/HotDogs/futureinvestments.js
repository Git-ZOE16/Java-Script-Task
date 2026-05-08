const prompt = require("prompt-sync")();

const investmentamount = Number(prompt("Enter the investment amount: "));
const annualinterestrate = Number(prompt("Enter the annual interest rate as a percentage: ")); 
const numberofyears = Number(prompt("Enter the number of years: ")); 
const monthlyinterestrate = annualinterestrate / 12
const futureinvestmentvaue = investmentamount * (1 + monthlyinterestrate) * (numberofyears * 12)


console.log(`Balance: $${investmentamount.toFixed(2)}`);
console.log(`Annual interest rate: ${annualinterestrate}%`);
console.log(`Monthly interest rate: ${monthlyinterestrate}%`);
console.log(`Future Investment Value: $${futureinvestmentvaue.toFixed(2)}`);
