const prompt = require("prompt-sync")();

const M = Number(prompt("Enter the amount of water: "));
const InitialTemperature = Number(prompt("Enter the initial temprature of the water: "));
const FinalTemperature = Number(prompt("Enter the final temprature of the water: "));

const WaterTemperature = M * (FinalTemperature - InitialTemperature) * 4184

console.log(`the to total distance covered is ${WaterTemperature} `);
