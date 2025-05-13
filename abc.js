console.log(Number(true)); 	 	
console.log(Number(false));		
console.log(Number("10"));		
console.log(Number("  10"));		
console.log(Number("10  "))	
console.log(Number(" 10  "));		
console.log(Number("10.33"));		
console.log(Number("10,33"));	 
console.log(Number("10 33"));	 
console.log(Number("John"));

console.log(parseInt(true));		
console.log(parseInt("-10.33"));	
console.log(parseInt("10"));		
console.log(parseInt("10.33"));		
console.log(parseInt("10 20 30"));	
console.log(parseInt("10 years"));	
console.log(parseInt("years 10"));	

console.log(parseFloat("10"));		
console.log(parseFloat("10.33"));		
console.log(parseFloat("10 20 30"));	
console.log(parseFloat("10 years"));	
console.log(parseFloat("years 10"));

var a = 5;
var b = 3;
var c = 8;
a = a+10;    
b = b-2;     
c = c * 5;    
a = a /5;