
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

function multiply(firstNumber, secondNumber){
    return firstNumber * secondNumber;


}

function divide(firstNumber, secondNumber){
    return firstNumber / secondNumber;


}

function isEven(number){
    return number % 2 === 0;


}

function isOdd(number){
    return number % 2 === 1;


}

function isPalindrome(number){

    let originalStr = number.toString();
    
    let reversedStr = originalStr.split('').reverse().join('');
    
        return originalStr === reversedStr;


}

function isPrime(number){

    if(number <= 1) return false;
    if(number === 2) return true;
    if(number % 2 === 0) return false;
    
        for (let i = 3; i <= Math.sqrt(number); i += 2){
                                    if (number % i === 0){
                                        return false
                                    }
                              }

    return true;
}

module.exports = { add, subtract, multiply, divide,isEven, isOdd, isPalindrome, isPrime}





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























