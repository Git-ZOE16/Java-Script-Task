const prompt = require("prompt-sync")();

const x1 = Number(prompt("Enter x1: "));
const y1 = Number(prompt("Enter y1: "));
const x2 = Number(prompt("Enter x2: "));
const y2 = Number(prompt("Enter y2: "));

const dx = x2 - x1;
const dy = y2 - y1;
const distance = Math.sqrt(dx * dx + dy * dy);

console.log(`Distance between (${x1}, ${y1}) and (${x2}, ${y2}) is: ${distance.toFixed(2)}`);
