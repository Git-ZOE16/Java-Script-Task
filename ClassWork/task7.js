const account ={
    balance: "500",
    isBlocked: false,
 }
 
if(account.isBlocked === "true"){
    console.log("Account blocked");
    }
else if(account.balance < 100){
    console.log("low balance");
}

else console.log("Okay")
