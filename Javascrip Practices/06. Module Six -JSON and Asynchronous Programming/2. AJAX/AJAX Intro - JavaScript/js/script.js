// Asynchronous Programning
// AJAX = Asynchronous Javascript And XML

document.getElementById("get_data").addEventListener("click",loadData);

function loadData(){
   // Create XHR Object 
   let xhr = new XMLHttpRequest();
// Open Function
xhr.open('GET', 'data.txt', true);
xhr.onload = function(){
    if(this.status === 200){
        document.getElementById("output").innerHTML = `<h3>${this.responseText}</h3>`
    }
}

xhr.send() 
   console.log(xhr)

}