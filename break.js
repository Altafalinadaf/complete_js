for(i=1;i<=10;i++){
    if(i==7){
        continue
    }
    if(i==9){
        continue
    }
    if(i==10){
        continue
    }
    console.log(i)
}



function engFun(){
    console.log("This is engmnt Function")
}



function mehndiFun(){
    console.log("This is the Mehndi Function")
}



function haldiFun(){
    console.log("This is the Haldi Functions ")
}

function marFun(){
    console.log("This is Marriage Function")
}

gift = 600
people = 3


if(gift>500 && gift<1000)
{
    engFun()
}
else if(gift>1000){
    mehndiFun()
    haldiFun()
    marFun()
}