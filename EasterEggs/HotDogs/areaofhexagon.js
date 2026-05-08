const prompt = require("prompt-sync")();

const side = Number(prompt("Enter the side length of the hexagon: "));
const area = (3 * Math.sqrt(3) / 2) * side * side;

console.log(`Side length: ${side}`);
console.log(`Area: ${area.toFixed(2)}`);
