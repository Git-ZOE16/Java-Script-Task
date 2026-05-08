let prompt = require("prompt-sync")();

let month = parseInt(prompt("Enter month (1-12):"));
let year = parseInt(prompt("Enter year:"));

if (month === 2) {
    
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log("29 days");
    } else {
        console.log("28 days");
    }
} else if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log("30 days");
} else {
    console.log("31 days");
}

