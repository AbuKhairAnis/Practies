// Fetch API 
// Fetch API using Promise


document.getElementById("get_data").addEventListener("click",getdata);

/*
function getdata(){
    fetch(`http://api.icndb.com/jokes/random`).then(function(res){
        // console.log(res.json());
        return res.json()
    })
    .then(function(data){
       console.log(data) 
    })
    .catch(function(err){
        console.log(err) 
    })
}
*/

//Arrow Decclearation

function getdata(){
    fetch(`http://api.icndb.com/jokes/random/`)
    .then(res=>res.json())
    .then(data=> {console.log(data);})
    .catch(err=>{console.log(err);})
}




   