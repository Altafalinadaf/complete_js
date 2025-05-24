let d = new Date()
console.log(d) //20250522T04:30:3:364Z

d.setHours(10)
console.log(d.getHours())

d.setMinutes(5)
console.log(d.getMinutes())

d.setSeconds(58)
console.log(d.getSeconds())

d.setDate(23)
console.log(d.getDate())

d.setFullYear(2026)
console.log(d.getFullYear())

d.setMonth(6)
console.log(d.getMonth())

console.log(d)
console.log(d.getMonth())
d.setMonth(1)
console.log(d.getMonth())
console.log(d)
console.log(2**5)
console.log(Math.pow(2,5))

console.log(Math.random()*100)
console.log(Math.floor(Math.random()*6))
console.log("*****we are learing conditions*****")
a = 10 
if(a==20){
    console.log("a is 10")
}

uncle = "idCard"
if(uncle=="bag"){
    console.log("uncle will allow in clg campus")
}
else{
    console.log("unlce will not allow")
}


money=20
if(money>100){
    console.log("biriyani")
}
else if(money>50 && money<100){
    console.log("normal rice")
}
else if(money==100){
    console.log("chocolate")
}
else{
    console.log("drink water ")
}


marks = 36
grade = 'c+'
if(marks>90){
    grade = 'A+'
}
else if(marks>80){
    grade= 'A'
} 
else if(marks>70){
    grade = 'B+'
}
else if(marks>60){
    grade = 'B'
}
else if(marks>50){
    grade = 'C+'
}
else if(marks>35){
    grade = 'C'
}
else{
    grade = 'Fail'
}
console.log(marks)
console.log(grade)
