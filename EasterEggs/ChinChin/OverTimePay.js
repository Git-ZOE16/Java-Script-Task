let prompt = require("prompt-sync")();

let rate = parseFloat(prompt("Hourly wage:"));
let hours = parseFloat(prompt("Hours worked:"));
let total;

if (hours <= 40) {
    total = hours * rate;
} else {
    let regularPay = 40 * rate;
    let overtimeHours = hours - 40;
    let overtimePay = overtimeHours * (rate * 1.5);
    total = regularPay + overtimePay;
}
console.log("Total Earnings: $" + total);



