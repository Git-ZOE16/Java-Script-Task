const prompt = require("prompt-sync")();
const length = prompt("Enter area of prism: ");

area_of_eq_traingle = Math.sqrt(3)/4 * length ** 2
volume_of_prism = area_of_eq_traingle * length

console.log(volume_of_prism.toFixed(3))
