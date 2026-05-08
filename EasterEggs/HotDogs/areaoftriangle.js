const prompt = require("prompt-sync")();

const side1 = Number(prompt("Enter side1: "));
const side2 = Number(prompt("Enter side2: "));
const side3 = Number(prompt("Enter side3: "));

const s = (side1 + side2 + side3) / 2
const area = Math.sqrt(s * (s - side1) * (s - side2) * (s -side3));

console.log(`Area: ${area.toFixed(2)}`);
