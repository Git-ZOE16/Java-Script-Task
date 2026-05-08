const prompt = require("prompt-sync")();

const u = Number(prompt("Enter the initial velocity: "));
const t = Number(prompt("Enter the time span: "));
const a = Number(prompt("Enter the acceleration: "));

const distance_covered = u*t + 1/2 * a * t * t

console.log(`the to total distance covered is ${distance_covered} `);
