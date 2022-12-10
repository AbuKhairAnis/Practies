var n1 = prompt("Enter your Number");
var n2 = prompt("Enter your Number");
var n3 = prompt("Enter your Number");

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3)

if(n1>=n2){
    if(n1>=n3){
        console.log(n1,"Is The Bigest Number")
    }else{
        console.log(n3,"The bigest Number")
    }
} else if (n2>=n3){
    console.log(n2 + " is the bigest number")
}else{
    console.log(n3,"The bigest Number")
}
