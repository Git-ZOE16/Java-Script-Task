let prompt = require("prompt-sync")();

let order = { id: 1, status: "Pending"};

function deliveryOrder(object){

     object.status = "Delivered";
        return object;

}
console.log(deliveryOrder(order));
