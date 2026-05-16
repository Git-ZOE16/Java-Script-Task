let prompt = require("prompt-sync")();
let day = prompt("Enter a day ")

switch (day.toLowerCase()){
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
        console.log("Its a weekday.")
        break;
    case "saturday":
    case "sunday":
        console.log("its weekend day!");
        break;
    default:
        console.log("Invalid day.");
}
