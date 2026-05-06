const prompt = require("prompt-sync")();

const lenght = Number(prompt("Enter number in lenght: "));
const area = 0.4330 * lenght * lenght

const volume = area * lenght 

console.log(volume);

