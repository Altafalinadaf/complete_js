function add(a,b){
    console.log(a+b)
}

function sub(a,b){
    console.log(a-b)
}

function mul(a,b){
    console.log(a*b)
}

function div(a,b){
    console.log(a/b)
}



add(5,5)
sub(10,9)
mul(2,8)
div(8,3)

var petName = "Rocky"; //global variable
myFunction();
function myFunction() {
    console.log(typeof petName + "- " + "My pet name is " + petName);
}

console.log(typeof petName + "- " + "My pet name is " + petName);
myFunction();


function myFunction2() {
    var petName2 = "Rocky2"; //local variable
    console.log(typeof petName2 + "- " + "My pet name is " + petName2);
}
myFunction2()