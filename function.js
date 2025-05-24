var petName = "Rocky"; //global variable
myFunction();

function myFunction() {
    console.log(typeof petName + "- " + "My pet name is " + petName);
}
 
console.log(typeof petName + "- " + "My pet name is " + petName);


myfunction();
 
function myfunction() {
    var petName = "Sizzer"; // local variable
    console.log(typeof petName + " " + petName);
}

let a = prompt("enter the number ")
console.log(a)