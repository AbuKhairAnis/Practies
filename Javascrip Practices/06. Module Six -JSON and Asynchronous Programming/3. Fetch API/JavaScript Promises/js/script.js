//JavaScript Promises
//.then using 

let persons = [
    {firstName : "Abu", lastName:"Khair"},
    {firstName : "Anis", lastName:"Rahman"}
]

function createPerson(Faiza){
    let prom = new Promise(function(resolve, reject){
        persons.push(Faiza);
        let err = false;

        if(!err){
            resolve();
        }else{
            reject(`!Error: Something Erorr`)
        }
        
       
    });
    return(prom);   
    };

function getNewPerson(){
    setTimeout(function(){
        let output ='';
        persons.forEach(function(Ayesha){
            output += `<li>${Ayesha.firstName} ${Ayesha.lastName}</li>`
        });
        document.getElementById("output").innerHTML = output;
        
    },4000);
};


createPerson({firstName: "Farjana", lastName:"Ahamed"}).then(getNewPerson).catch(function(err){
    console.log(err)
});




