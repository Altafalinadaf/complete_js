let date = new Date()
console.log(date)
console.log(date.getFullYear())
console.log(date.getMonth()+1)
console.log(date.getDate())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())
console.log(date.getMilliseconds())
console.log(date.getDay())


date.setFullYear(2070)
console.log(date.getFullYear()) 

date.setMonth(1)
console.log(date.getMonth())

date.setHours(5)
date.setMinutes(10)
console.log(date.getHours())
console.log(date.getMinutes())




n = 12
if (n==10){
    console.log("n is equal to 10")
}
else{
    console.log("n is not equal to 10")
}


num = 17
if(num%2==0){
    console.log("even number")
}
else{
    console.log("odd number")
}


marks = 85
grade = 'A'

if(marks>90){
    grade = 'A+'
}
else if (marks>80){
    grade = 'A'
}
else if(marks>70){
    grade='B+'
}
else if(marks>60){
    grade ='B'
}
else if(marks>50){
    grade= 'C+'
}
else if(marks>35){
    grade = 'C'
}
else{
    console.log("fail")
}

console.log(marks)
console.log(grade)