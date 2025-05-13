let d = new Date();
console.log(d)

console.log(d.getFullYear()) // returns the year // 2025
console.log(d.getMonth()) // returns the month (month start from 0 ex : jan -0, feb -1)
console.log(d.getHours()) // returns the hours (24 hours)
console.log(d.getMinutes()) // retruns the minutes
console.log(d.getTime()) // returns the time
console.log(Date.now()) // retruns the time
console.log(d.getDay()) // retruns day ( sun - 0, mon - 1)
console.log(d.getDate()) // returns the date 

d.setDate(18) // updating the date to 18 
console.log(d.getDate()) // 18 
d.setFullYear(2026)
console.log(d.getFullYear())
d.setMonth(4)
console.log(d.getMonth())

