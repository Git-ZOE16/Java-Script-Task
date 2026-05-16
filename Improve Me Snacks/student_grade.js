const prompt =  require("prompt-sync")();

let score = Number(prompt("Enter a score: "));

if(score >= 70){
    console.log("Grade A ");
}  
else if(score >= 60 && score <= 69){
    console.log("Grade B ");
}
 else if(score >= 50 && score <= 59){
    console.log("Grade C ");
}  
    else if(score > 40 && score == 49){
    console.log("Grade D ");
}
else {

    console.log("Grade F ");
}












