//Callback Function
/*
setTimeout(function(){
    console.log("Hello World!")
},2000)
*/
/*
let persons = [
    {firstName : "Abu", lastName:"Khair"},
    {firstName : "Anis", lastName:"Rahman"}
]

function createPerson(Faiza){
    setTimeout(function(){
        persons.push(Faiza)
    },4000);
};

function getNewPerson(){
    setTimeout(function(){
        let output ='';
        persons.forEach(function(Ayesha){
            output += `<li>${Ayesha.firstName} ${Ayesha.lastName}</li>`
        });
        document.getElementById("output").innerHTML = output;
        
    },1000);
};


createPerson({firstName: "Farjana", lastName:"Ahamed"});
getNewPerson();
*/

let persons = [
    {firstName : "Abu", lastName:"Khair"},
    {firstName : "Anis", lastName:"Rahman"}
]

function createPerson(Faiza, Callback){
    setTimeout(function(){
        persons.push(Faiza);
        Callback();
    },2000);
};

function getNewPerson(){
    setTimeout(function(){
        let output ='';
        persons.forEach(function(Ayesha){
            output += `<li>${Ayesha.firstName} ${Ayesha.lastName}</li>`
        });
        document.getElementById("output").innerHTML = output;
        
    },1000);
};


createPerson({firstName: "Farjana", lastName:"Ahamed"}, getNewPerson);
getNewPerson();



