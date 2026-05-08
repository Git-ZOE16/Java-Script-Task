let prompt = require("prompt-sync")();

let radius = parseFloat(prompt("Enter radius:"));
let height = parseFloat(prompt("Enter height:"));

let volume = Math.PI * radius * radius * height;
let surfaceArea = (2 * Math.PI * radius * height) + (2 * Math.PI * radius * radius);

console.log("Volume: " + volume.toFixed(2));
console.log("Surface Area: " + surfaceArea.toFixed(2));
