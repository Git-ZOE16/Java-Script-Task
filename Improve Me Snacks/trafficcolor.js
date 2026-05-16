let prompt = require("prompt-sync")();

let traffic_Light = prompt("Enter a color: ")

if (traffic_Light.toUpperCase() == "RED"){
    console.log("Stop!");
}
else if(traffic_Light.toUpperCase() == "YELLOw"){
    console.log("Get Ready");
}
else if (traffic_Light.toUpperCase() == "GREEN"){
    console.log("Go!");
}
else 
    console.log("Invalid Color");
