function engmnt(){
    console.log("This is the engmnt function")
}



function mehndi(){
    console.log("This is the Mehndi Function")
}


function haldi(){
    console.log("This is the Haldi Function")
}


function mrrg(){
    console.log("This the Marriage function")
}


relatives1 = "toclose"
relatives2 = "relatives"

if(relatives1=='close'){
    engmnt()
    mrrg()
}
else if(relatives1=="toclose"){
    engmnt()
    mehndi()
    haldi()
    mrrg()
}
else{
    mrrg()
}