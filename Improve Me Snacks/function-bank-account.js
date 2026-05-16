let prompt = require("prompt-sync")();

let account = {accountName: "David", balance: 5000};

function checkBalance(object){

    if(object.balance < 1000){
    
        return "Low Balance";
        
    } else{
    
        return "Sufficient Balance"
    }
 }

console.log(checkBalance(account));
