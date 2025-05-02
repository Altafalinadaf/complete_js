let arr2 = [3,4,6];
arr2.unshift(9);
console.log(arr2)
arr2.shift();
console.log(arr2);
arr2.shift()
console.log(arr2)
arr2.unshift(8)
arr2.unshift(6)
arr2.unshift(3)
console.log(arr2)
arr2.pop()
console.log(arr2)
arr2.push(6)
console.log(arr2)


const arr10 = ["John", "Peter"];
const arr20 = ["Rohan", "Riya", "Rohit"];
const arr30 = ["Robin", "Morgan"];
const myChildren = arr10.concat(arr20, arr30);
console.log(myChildren)


let a1 = [10,20,30,40]
let b1 = [100,200,300,400]
let c1 = [1000,2000,3000,4000]
let d1 = [1,2,3,4]

let adding = a1.concat(b1,c1)
console.log(adding)

let adding2 = d1.concat(a1,b1,c1)
console.log(adding2)

d1.push(5)
console.log(d1)


console.log(d1.concat(6))



a = 10
console.log(++a)

console.log("a+b: " + (100+5));   
console.log("a/b: " + (10/5));        
console.log("a%b: " + (10%5));    
console.log("a**b: "+ (10**5));   


let x = "100";
let y = "10";
console.log(x+y)
let z1 = x / y;
console.log(z1)
let z2= x * y;
console.log(z2)
let z3 = x - y;
console.log(z3)


console.log("10"*9)

let d = 369;
console.log(d.toString());
console.log((369).toString());
console.log((300 + 69).toString());
