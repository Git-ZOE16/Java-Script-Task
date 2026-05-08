
let flip = Math.floor(Math.random() * 2); 
let guess = parseInt(prompt("Guess: 0 for Heads, 1 for Tails"));

if (guess === flip) {
    console.log("Correct!");
} else {
    console.log("Incorrect. It was " + (flip === 0 ? "Heads" : "Tails"));
}

