
var food = ["cake","apple","banana","orange","biskut"];


var nam = "Abu Khair Anis";


let person ={
    Name: "Tamim Iqbal",
    Profession: "Cricketer",
    Team:"Bangladesh",
    Age : 34
}


//string

/* 
//we will find index number
for(var x in nam){
    console.log(x);
}

for(var x in nam){
    console.log(`index: "${x},"and iteam ${nam[x]}`);
}
for(var x in nam){
    console.log("index: "+x,"and iteam "+ nam[x]);
}*/

/*  //we will find iteam/valu
for(var x of nam){
    console.log(x);
}
*/

// arry
/* 
for(var y in food){
    console.log(y);
}

for(var y in food){
    console.log(`index: "${y},"and iteam ${food[y]}`);
}

for(var y of food){
    console.log(y);
}
*/
//object

for(var z in person){
    console.log(z);
}

for(var z in person){
    console.log(`Property: "${z},
    Valu: ${person[z]}`);
}
