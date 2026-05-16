let prompt = require("prompt-sync")();

let user = {
    name: prompt("Enter your name:"),
    age: Number(prompt("Enter your age:"))
};


function AgeRange (user){
if (user.age >= 18){
    console.log("You are an Adult");
}else if (user.age >= 13 && user.age <= 17){
    console.log(" you are a Teen");
}else{
    console.log("You are a child");
  }  
}
AgeRange(user);
