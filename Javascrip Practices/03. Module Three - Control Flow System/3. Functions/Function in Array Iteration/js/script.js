
var food = ["cake","apple","banana","orange","biskut"];

var number = [1,3,5,7,9,11,13,15]
// Foreach
// 1st parameter : iteam;
// 2nd parameter : Index;
// 3th parameter : Whole Arry;
/*food.forEach(function(valu,index,abc){

    console.log(`Index: ${index} Iteam ${valu}`);
    console.log(abc);
})
*/
/*let printall= function(valu,index,abc){
            console.log(`Index: ${index} Iteam ${valu}`);
             console.log(abc);
    }

food.forEach(printall)
*/

//map
/*
let printall= function(valu,index,abc){
    console.log(`Index: ${index} Iteam ${valu}`);
     console.log(abc);
}

food.map(printall)
*/
/*
*food.map(function(valu,index,abc){

    console.log(`Index: ${index} Iteam ${valu}`);
    console.log(abc);
})
*/
/*
function fooditeam(iteam){
    return `${iteam} is a Food`
}

arr = food.map(fooditeam)
console.log(arr)
*/
/*
function numberitem(iteam){
    return `${iteam**2}`
}

arr = number.map(numberitem)
console.log(arr)
*/
let numberitem= number.map(function(valu){
    return valu**2
})

console.log(numberitem)