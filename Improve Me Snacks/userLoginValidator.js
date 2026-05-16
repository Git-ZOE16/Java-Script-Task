let prompt = require("prompt-sync")();

let user_name = prompt("Enter your user name: ");
let user_password = prompt("Enter your password: ");



function user_login (username, password){

if (username == "Yemi" && pasword == "1234567HJ")  
    return "Login sucessful";
    
return "invalid Login Details";

}
console.log(user_login(user_name, user_password));
