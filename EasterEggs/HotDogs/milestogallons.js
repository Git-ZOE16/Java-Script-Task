const prompt = require("prompt-sync")();

const distance = Number(prompt("Enter the distance to drive in miles: "));
const fuelEfficiency = Number(prompt("Enter the fuel efficiency in miles per gallon: "));
const pricePerGallon = Number(prompt("Enter the price per gallon: "));

const gallonsNeeded = distance / fuelEfficiency;
const tripCost = gallonsNeeded * pricePerGallon;

console.log(`Distance: ${distance} miles`);
console.log(`Fuel efficiency: ${fuelEfficiency} MPG`);
console.log(`Price per gallon: $${pricePerGallon.toFixed(2)}`);
console.log(`Cost of the trip: $${tripCost.toFixed(2)}`);
