//HOW TO CREATE AN OBJECT IN JS

//let user = {
  //  "firstName": ["oluyemi", "zoe", "isire"],
   // "lastName":  "jayden",
   // "age": 16,
  //  isMale: false,
 //};
 //console.log(user)

//HOW TO ACCESS OBJECT

//let user = {
   // "firstName": ["oluyemi", "zoe", "isire"],
  //  "lastName":  "jayden",
   // "age": 16,
   // isMale: false,
 //};
// console.log(user.firstName)
 
 // OR
// console.log(user["firstName"])

// HOW TO ACCESS TWO KEYS IN AN OBJECT
 
//let user = {
   // "firstName": ["oluyemi", "zoe", "isire"],
   // "lastName":  "jayden",
   // "age": 16,
   // isMale: false,
// };
// console.log(user.firstName + " " + user.lastName)
 
 //HOW TO ACCESS THE THIRD NAME IN A KEY

//let user = {
  //  "firstName": ["oluyemi", "zoe", "isire"],
  //  "lastName":  "jayden",
  //  "age": 16,
  //  isMale: false,
// };
// console.log(user.firstName[2])
 
 // HOW TO ADD NEW KEY TO AM OBJECT
 
 //let user = {
   // "firstName": ["oluyemi", "zoe", "isire"],
   // "lastName":  "jayden",
   // "age": 16,
  //  isMale: false,
 //};
 
// user.gender = "shemale";
 
// console.log(user)
 
 //HOW TO UPDATE OBJECT by editiing only the age

//let user = {
   // "firstName": ["oluyemi", "zoe", "isire"],
   // "lastName":  "jayden",
   // "age": 16,
   // isMale: false,
// };
 
// user.age = 13;
 
// console.log(user)
 
 //HOW TO DELETE OBJECT BY DELETING ONLY THE USER AGE
 
 //let user = {
    //"firstName": ["oluyemi", "zoe", "isire"],
   // "lastName":  "jayden",
   // "age": 16,
   // isMale: false,
// };
 
// delete user.age;
 
// console.log(user)
 
 //HOW TO DESTRUCTURE OBJECT
 
 // let user = {
   // "firstName": ["oluyemi", "zoe", "isire"],
   // "lastName":  "jayden",
   // "age": 16,
   // isMale: false,
// };
 
// let {age, isMale} = user;
 
// console.log(age)
 
 // HOW TO COPY OBJECT
 
 let person = {
    "firstName": "Miracle",
    "lastName":  "Sharon",
    "age": 56,
    isMale: false,
    
 };
 
 let user ={
    ...person,
        "first_name": "Miracle",
        "last_name":  "Sharon",
        age_: 16,
        isMale_: false,
 }
 
 console.log(user)
 




