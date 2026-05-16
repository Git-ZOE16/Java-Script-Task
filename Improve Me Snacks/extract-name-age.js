let prompt = require("prompt-sync")();

let user = {name: "Amaka", age: 25, country: "Nigeria"};

function destructureUser(object){
    let {name, age} = object;
    
         return "name: " + name + ", Age: " + age;
    }

console.log(destructureUser(user));
