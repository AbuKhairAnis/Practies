
/*var number = prompt("Enter Your Number");

number = parseInt(number);

var grad;



if(number>=101){
    grad = "'Invalid Input'"
}else if (number>=80 & number<=100){
    grad = "'A+'"
}else if(number>=70 & number<=79){
    grad = "'A'"
}else if(number>=60 & number<=69){
    grad = "'A-'"
}else if(number>=50 & number<=59){
    grad = "'B'"
}else if(number>=40 & number<=49){
    grad = "'C'"
}else if(number>=33 & number<=39){
    grad = "'D'"
}else if(number>0 & number<=32){
    grad = "'Faill'"
}else{
    grad = "'Invalid Input'"
}

var x = "Your Grade is:" + ( grad)

console.log(x);
document.write(x);
document.getElementById('Hello').innerHTML = (x);*/
// My Method Above

/*console.log("1 Add \n2 Subtract \n3 Multiply \n4 Divide");



var fnum = prompt("Enter Your 1st Number");
var snum = prompt("Enter Your 2nd Number");
var choice = prompt ( "Select Your Option:");

fnum = parseInt(fnum);
snum = parseInt (snum);


var x = fnum
var y = snum

var result;

switch(choice){
    case "1":
        result = x+y;
    break;
    case "2":
        result = x-y;
    break;
    case "3":
        result = x*y;
    break;
    case "4":
        result = x/y;
        result = result.toFixed(3);
    break;
    default:
        result = "Invalid Option"
    
}

console.log(result);
document.getElementById('Hello').innerHTML = "Your Result is " + (result)*/

// Class Method Above
console.log("1 Add \n2 Subtract \n3 Multiply \n4 Divide");



var fnum = prompt("Enter Your 1st Number");
var snum = prompt("Enter Your 2nd Number");
var choice = prompt ( "Select Your Option:");
var result = null;

fnum = parseInt(fnum);
snum = parseInt (snum);
choice = parseInt(choice)

fnumcon= isNaN(fnum);
snumcon= isNaN(snum);
choicecon = isNaN(choice)



if(fnumcon||snumcon||choicecon){
    console.log("Invalid Option");
    result = "Invalid Option"
    
}else{
switch(choice){
    case 1:
        result =
        fnum+snum;
    break;12
    case 2:
        result = fnum-snum;
    break;
    case 3:
        result = fnum*snum;
    break;
    case 4:
        result = fnum/snum;
        break;
    default:
        break;
} if (result==null){
    console.log("No Result");
    result = "No Result"
}else{
    console.log("Result:"+ result)
} 
}

console.log(result);
document.getElementById('Hello').innerHTML = "Your Result is: " + (result)