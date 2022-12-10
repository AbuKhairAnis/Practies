/*if (true) {
    console.log("If Statment Executed");

} else{
    console.log("Else Statement Executed!");
}
console.log("End of if Statement");*/

/*if (false) {
    console.log("If Statment Executed")

} else{
    console.log("Else Statement Executed!")
}
console.log("End of if Statement")*/

/*var age = prompt( "Enter Your Age");

if (age>=50) {
    console.log("Old!");
    document.write("Old");

} else {
    console.log("Under Old!");
    document.write( age," Under Old");
}
console.log("End of if Statement")*/

var age = prompt( "Enter Your Age");

if (age>=50) {
    console.log("Over 50 Old!");
    document.write(" Over 50 Old");

} else if( age>=35 & age<40 ) {
    console.log("Under 40 but over 35 Old!");
    document.write( age," Under 40 but over 35 Old!");
} else if( age>=25 & age<35) {
    console.log("Under 50 but over 25 and Under 35 Old!");
    document.write( age," Under 50 but over 25 and Under 35 Old!");
}else if( age>=15) {
    console.log("Under 50 but over 15 and Under 25 Old!");
    document.write( age," Under 50 but over 15 and Under 25 Old!");
} else {
    console.log("Under 15 Old!");
    document.write( age," Under 15 Old");
}
console.log("End of if Statement")


















