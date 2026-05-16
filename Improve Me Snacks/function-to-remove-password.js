let prompt = require("prompt-sync")();

let userAccount = {userName: "Admin", password: "12345"};

function removePassword(loginInfo){

    delete loginInfo.password;
    
        return loginInfo;
    }
 

console.log(removePassword(userAccount));
