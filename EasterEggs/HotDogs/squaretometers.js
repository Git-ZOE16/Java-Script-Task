const prompt = require("prompt-sync")();

const squaremeters = Number(prompt("Enter size in square meters: "));
const ping = squaremeters * 0.3025;

console.log(`${squaremeters} squaremeters = ${ping} ping`);
