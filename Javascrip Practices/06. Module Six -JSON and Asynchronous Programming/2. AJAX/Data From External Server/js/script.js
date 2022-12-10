// Asynchronous Programning
// AJAX = Asynchronous Javascript And XML
// API = Application Programming Interface


document.getElementById("get_data").addEventListener("click",loadJoks);

function loadJoks(){
let number = document.getElementById("numberJoke").value;
// console.log(number)
   let xhr = new XMLHttpRequest();
   
xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
xhr.onprogress = function(){
    document.getElementById("output").innerHTML = "<h1> Loading................</h1>"
}

xhr.onload = function(){
    if(this.status === 200){
        
        let data = JSON.parse(this.responseText);
        let joke = data.value;
        let output = "<ol>";


        joke.forEach(function(list, valu, arry){
            output+= `<li>${list.joke}</li>`
        })
        output += "</ol>"

        document.getElementById("output").innerHTML = output

        // console.log(output);
        //console.log(data)
    }
}

xhr.send() 
  

}