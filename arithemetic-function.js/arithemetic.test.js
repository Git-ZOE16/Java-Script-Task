// IMPORT HERE (the quirly braces distructures)

// The dot / (./)sign moves files step backwards into another folder or file as required/ one dot(./) a step backwards, two dots (../) two steps backwards

//AFTER WRITING YOUR TEST, TO RUN YOUR TEST

//type npm test on terminal first / you will see npm error Missing Script: "test"

// type npm init -y // to install package of jest library managed by json


// NEXT INSTALL jest

//nmp install --save-dev jest   OR
// npm i -D jest (whenever you want to test, you must run this on your terminal)

//npm test (To run Test on terminal)



//const { add } = require('./arithemetic')
//
//
//test("test addition of two positive numbers", () => {
//
//expect(0).toBe(0)
//
//
//
//})






//CALL YOUR FUNCTION AND RUN YOUR TEST(npm test)


const { add, subtract, multiply, divide, isEven, isOdd, isPalindrome, isPrime} = require('./arithemetic')


test("test addition of two positive numbers", () => {

    let firstNumber = 82;
    
    let secondNumber = 18;

expect(add(firstNumber, secondNumber)).toBe(100)



})


test(" test that addition of a positive and a negative number works accurately", () => {

 let firstNumber = 82;
    
 let secondNumber = -18;

expect(add(firstNumber, secondNumber)).toBe(64)


})


test(" test that addition of two negative numbers gives negative result", () => {

 let firstNumber = -10;
    
 let secondNumber = -5;

expect(add(firstNumber, secondNumber)).toBe(-15)


})


test(" test that subtraction is working", () => {

 let firstNumber = 80;
    
 let secondNumber = 15;

expect(subtract(firstNumber, secondNumber)).toBe(65)


})



test(" test that two negative number subtraction give accurate value", () => {

 let firstNumber = -8;
    
 let secondNumber = -3;

expect(subtract(firstNumber, secondNumber)).toBe(-5)


})


test(" test multiplication of two numbers", () => {

 let firstNumber = 10;
    
 let secondNumber = 20;

expect(multiply(firstNumber, secondNumber)).toBe(200)


})


test(" test that two nagative numbers multiplication gives accurate value", () => {

 let firstNumber = -10;
    
 let secondNumber = -20;

expect(multiply(firstNumber, secondNumber)).toBe(200)


})


test(" test division of two numbers", () => {

 let firstNumber = 100;
    
 let secondNumber = 5;

expect(divide(firstNumber, secondNumber)).toBe(20)


})

test(" test that a number is even number", () => {

    //Arrange
 let number = 8;
 
    //Act
 let result = isEven(number);
 
    //Assert
    
expect(result).toBe(true);


})

test(" test that a number is odd number", () => {

    //Arrange
 let number = 7;
 
    //Act
 let result = isOdd(number);
 
    //Assert
    
expect(result).toBe(true);


})

test(" test that a number is palindrome", () => {

    expect(isPalindrome(121)).toBe(true);
 
 
    expect(isPalindrome(123)).toBe(false)
    
expect(isPalindrome(123)).toBe(false);


});


test(" test that a number is prime number", () => {

    expect(isPrime(-5)).toBe(false);
 
 
    expect(isPrime(11)).toBe(true)
    
    
    expect(isPrime(9)).toBe(false)
    

});


