let prompt = require("prompt-sync")();

let phone = { brand: "Samsung", battery: 75};

function batteryPercentage(object){

    return object.battery;

}
console.log(batteryPercentage(phone));
