// Error Handling

/*
console.log("Before Error");



try{
    //test()
}catch(err){
    //console.log(err);
    console.log(err.message);
    console.log(err.name)
}finally{

    console.log("I am inside finally")
}



console.log("After Error")

*/

// we are ganarete erro message 

let a = 16;

try{
    if(a>15) throw "Too big";
    else if ( a<5) throw " Too Small"
}catch(err){
    console.log(err)
}