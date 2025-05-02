var details ={
    name : 'abc',
    age : 24,
    course : "js course",
    addrs : "gulbarga"
}
console.log(details.name)
console.log(details['name'])
console.log(details.age)
console.log(details.course)
console.log(details.addrs)


var pda = {
    clgname : "pda clg",
    addr : "gulbarga",
    branches  : 6,
    course : "js",
    students : 2000,
    teachers : 200
}
console.log(pda.clgname)
console.log(pda.students)
console.log(pda.branches)
console.log(pda.course)
console.log(pda.teachers)

let person = {
    name : 'John',
    tech : 'JS',
    laptop : { 
        cpu : 'i7',
        ram : '4GB',
        brand : 'dell'
    }
}
console.log(person) 		
console.log(person.tech) 		
console.log(person.laptop.brand)  
console.log(person.laptop.brand.length) 

console.log(person['name'])
console.log(person['tech'])
console.log(person.laptop['brand'])
console.log(person.laptop["cpu"])
console.log(person.laptop['ram'])



let animal = new Object();
let cat = animal;
let dog = animal;
console.log(typeof(animal))
console.log(typeof(cat))
console.log(typeof(dog))
console.log(cat === dog) // same object reference

let hourse = new Object()
cat = hourse
console.log(cat==dog)
console.log(hourse==cat)
console.log(hourse===cat)

console.log(+0==-0)

// create a constant array:const cars = ["Saab", "Volvo", "BMW"];