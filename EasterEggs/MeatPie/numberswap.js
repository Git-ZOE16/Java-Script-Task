
let container1 = 5;
let container2 = 10;
let temporary_container = container1; 

container1 = container2;        
container2 = temporary_container; 
    
console.log(container1, container2);
