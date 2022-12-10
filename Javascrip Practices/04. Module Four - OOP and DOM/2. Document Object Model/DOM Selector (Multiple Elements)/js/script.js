//Multi Selector 

//document.getElementsByClassName
/*
 let val;
val = document.getElementsByClassName("sample")
 val[0].style.background = "red";
 val[0].style.color = "white";
 val[0].textContent = "Test line in HTML";
 val[0].innerText = " Aging New Text";
 val[0].style.padding = " 20px";
 val[0].style.margin = " 20px";

console.log(val); */

//document.getElementsByTagName()
/*

let list;
list = document.getElementsByTagName("li");

list = document.querySelector("ol").getElementsByTagName("li");

let lis = Array.from(list)

lis.forEach(function(item){
    console.log(item);
})

console.log(list);
*/
//document.querySelectorAll(); / Same as Css Property
let any = document.querySelectorAll("ul li");

any.forEach(function(item){
    console.log(item);
})

let liOdd= document.querySelectorAll("li:nth-child(odd)")

console.log(liOdd)