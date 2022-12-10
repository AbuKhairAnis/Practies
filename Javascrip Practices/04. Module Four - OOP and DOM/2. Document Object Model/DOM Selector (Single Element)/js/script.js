// DOM Selector (Single Element), Two types of selector
//1.document.getElementById(" ")


/*let val;

//geting an element
val = document.getElementById("document-title");
val = document.getElementById("document-title").id;
val = document.getElementById("document-title").className;

//changing styel

document.getElementById("document-title").style.background = "#333";
document.getElementById("document-title").style.color = "#fff";
document.getElementById("document-title").style.padding = "30px";
document.getElementById("document-title").style.margin = "40px";
document.getElementById("document-title").style.border = "10px";
document.getElementById("document-title").style.borderStyle ="dotted";
document.getElementById("document-title").style.borderColor = "		#ff0000";

//changing content
document.getElementById("document-title").innerHTML = "<i><b> <u>New</u> Text </b> </i>"; // innerHTML change html code.
document.getElementById("document-title").innerText = " Aging New Text";
document.getElementById("document-title").textContent = "New New Text"

val= document.getElementById("document-title");
val.innerText ="Ha Ha Ha"

console.log(val)*/

//2.document.querySelector(""), calling system is same to same in css

let val;

val = document.querySelector("#document-title");
val = document.querySelector(".title-class");
val = document.querySelector("h3");

val = document.querySelector("ol");
val = document.querySelector("li");
val = document.querySelector("ul li");
val.style.background ="red";
val.style.color ="white";

val = document.querySelector("ul li:last-child");
val = document.querySelector("ol li:nth-child(2)");

console.log(val)