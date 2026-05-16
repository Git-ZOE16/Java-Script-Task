let prompt = require("prompt-sync")();

let user_name = prompt("Enter your user name: ")


function greet_User(name){

    if (name !== "")  
    return "Good Morning " + name;
    
return "Name not entered";

}
console.log(greet_User(user_name));
