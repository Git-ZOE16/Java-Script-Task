const prompt = require("prompt-sync")();
const sq_meters = prompt("Convert square meter to ping: ");

ping_converter = sq_meters * 0.3025
console.log(ping_converter.toFixed(3))
