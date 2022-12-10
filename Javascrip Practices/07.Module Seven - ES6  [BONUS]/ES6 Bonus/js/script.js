
/*
// Array Destructing

let fruits = ["Apple",  "Grape", "Orange"];

let [ A, b, C]= fruits; // using Any name

console.log(A, b, C);

*/
/*
//Swapping Variable

let a= 8;
let b= 20;

[a,b]=[b,a]

console.log(`a=${a} and b=${b}`);
*/

/*
// Object Destructing

let Persons ={
    FirstName: "Abu",
    LastName : "Khair",
    Dob : "11-07-1993",
}

let {FirstName, LastName, Dob} = Persons;

console.log(FirstName,LastName, Dob); // must use Variabel Name

function display ({FirstName, LastName, Dob}){
    console.log(`Name: ${FirstName} ${LastName}, ${Dob}`);
}

display(Persons)
*/
/*
// Spread Operator  ...

let str = 'Bangladesh'
let newStr = [...str]

// console.log(newStr);

let fruits1= ["Apple",  "Grape", "Pine-Apple"];
let fruits2 = ["Orange", " Mango"];
let newFruits = " Jackfruits"


let newArr = [...fruits1, ...fruits2, newFruits];

// console.log(newArr);

let Persons={
    fName: "Abu Khair",
    lName: "Anis"
};
let newPerson = {...Persons};

console.log(newPerson);

*/
/*
// Spread Operator  ... (With Function Parameters)

let numbers = [23,1,0,-1];

// console.log(Math.max(...numbers));


let Persons = [ "Abu Khair", "Anis"];

let test = (fname,lname)=>{
    console.log(`Hello ${fname} ${lname}`);
}
test(...Persons)
*/
/*
// Rest Operator

let fruits = ["Apple",  "Grape", "Orange","Jackfruits"];

let [first,second, ...third]=fruits

// console.log(first);
// console.log(second);
// console.log(third);

let Persons={
    fName: "Abu Khair",
    lName: "Anis",
    dob: "11-07-1993"
};

let {fName,...lName}=Persons


// console.log(fName);
// console.log(lName);

let moreNum = [78,1,2,3,5,6]

let test=(Name,...Numbers)=>{ //Rest Operator
    console.log(Name);
    console.log(Numbers);
}

test("Anis", 67,3,6,9)
test("Abu", ...moreNum)// Spread Operator
*/
/*
// Symbol
let a =Symbol();
let Persons ={
    name: "Anis",
    age: 29,
    [a]: "Hello"
}
console.log(Persons);
*/

/*
//Iterator

let iterabale = "Hello"

iterabale=[1,2,3,4,5]

let iter= iterabale[Symbol.iterator]();

let name = ["rahim","karim","mofij","polis"]


function cusiter(arr){
    let i= 0;
    return{
        next: function(){
            return 1<arr.length ? {value: arr[i++], done:false}:{done: true};
        }
    }
}

let members= cusiter(name)

console.log(members.next().value)
*/
//genarator
/*
function* genFunction(){
    yield 1;
    yield "Anis";
    yield 4;
    yield "Abu"
};

let iter = genFunction();
console.log(iter.next().value);
console.log(iter.next().value);
*/