let prompt = require("prompt-sync")();

let car = {brand: "Toyota", model: "Camry", available: true};

function carIsAvailable(object){

    if(object.available){
    
         return "This car is available";
    }
}
console.log(carIsAvailable(car));
