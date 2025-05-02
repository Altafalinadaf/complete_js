// name = "yourname"
// Name = "myname"
// console.log(name)


// console.log('A'.charCodeAt(0))
// console.log('s'.charCodeAt(0))
// console.log('h'.charCodeAt(0))
// console.log('r'.charCodeAt(0))
// console.log('a'.charCodeAt(0))
// console.log('f'.charCodeAt(0))

// // this is the example of snake casing
// firstname_lastname= "abc xyz"

// // this is the example of camel casing
// FirstNameLastName= "abc xyz"

// // example of lower camel casing
// firstNameLastName = "abc xyz"



//  var has no block scope
var a = 10 
{
    console.log(a)
}


{
    var b = 100
}
console.log(b)


//  let has a block scope 
{
    let c= 1000
    console.log(c)
    
}



// in var we can declare same variable names
var d = 10
var d= 20
console.log(d)

let f2 = 40
let f = 60
console.log(f)


const b2= 10
console.log(b2)

const b3=39;
console.log(b3)


var a = 23;
 var b = 44.54;
 var c = -90;
 let num1 = 0xf    
 let num2 = 1.5e12          
 let num3 = 100_00_000 
 console.log(typeof(c));   



name = "yourname"
clg = "pda"
course = "civil"
duration = 4
mail = "yourmail@gmail.com"
city = "yourcityname"
sub = "js programming"
isStudent = true;
phone = null;
var addr ;

console.log(typeof(name))
console.log(typeof(clg))
console.log(typeof(course))
console.log(typeof(duration))
console.log(typeof(city))
console.log(typeof(isStudent))
console.log(typeof(phone))
console.log(typeof(addr))