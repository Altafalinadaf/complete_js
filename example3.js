var a = "hello world"
console.log(a)
console.log("hello")
console.log("world")

console.log("hello\nworld")
// hello "world"
console.log("hello 'world' ")
console.log("hello \"world\" ")
console.log("hello \'world\' ")

// hello\\world\\
console.log("hello\\\\world\\\\")


var c = "hello"
var d = new String("hello")
var e = "hello"
console.log(c)
console.log(d)

console.log(d===e)

var fruit = "apple,orange,kiwi"
console.log(fruit.slice(0,5))
console.log(fruit.slice(6,12))
console.log(fruit.slice(13,17))

console.log(fruit.slice(3.5))

console.log(fruit.slice(-17,-12))
console.log(fruit.slice(-11,-5))
console.log(fruit.slice(-4,17))


// example of substring method
console.log(fruit.substring(0,5))
console.log(fruit.substring(6,12))
console.log(fruit.slice(-17,-12))
console.log(fruit.substring(-17,5))


// substr method example 
console.log(fruit.slice(0,5))
console.log(fruit.substring(0,5))
console.log(fruit.substr(0,5))

console.log(fruit.slice(6,12))
console.log(fruit.substring(6,12))
console.log(fruit.substr(6,6))