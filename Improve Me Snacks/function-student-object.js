let prompt = require("prompt-sync")();

let student = { name: "Chinedu", age: 22, course: "Computer Science"};

function getStudentName(bio){

    return bio.name;

}
console.log(getStudentName(student));
