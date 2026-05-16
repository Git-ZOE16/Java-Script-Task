
//function sayHello(name, age = 10){
//
//    return `Hello ${name}\nyou are ${age} years old`    //back thick (``)used to format a string
//}
//
//console.log(sayHello("Mistura", 7));
//



//ARROW FUNCTION

//const sayHello = (name, age = 10) => {
//
//    return `Hello ${name}\nyou are ${age} years old`    //back thick (``)used to format a string
//}
//
//console.log(sayHello("Mistura", 7));


// OR


//const sayHello = (name, age = 10) => `Hello ${name}\nyou are ${age} years old`    //back thick (``)used to format a string
//
//
//console.log(sayHello("Mistura", 7));
//




//HOW TO EXPORT use   module.exports = { add}



function add(firstNumber, secondNumber){
    return firstNumber + secondNumber;


}


function subtract(firstNumber, secondNumber){
    return firstNumber - secondNumber;


}


module.exports = { add, subtract}





// NEW WAY OF EXPORTING


//export const add = function (firstNumber, secondNumber){
//    return firstNumber + secondNumber;
//
//
//}
//
//
//export const subtract = function (firstNumber, secondNumber){
//    return firstNumber - secondNumber;
//
//
//}
//
//
//
//
//module.exports = { add, subtract}
//
//























