// Traversing the DOM

let val;

let list = document.querySelector("ul");

let listitem = document.querySelector("ul li");

val = list
val = listitem
// console.log(val);

// Get child nodes

val = list.childNodes;
val = list.childNodes[1];
val = list.childNodes[1].nodeName;
val = list.childNodes[1].nodeType;
// console.log(val);

val = list.children;
val = list.children[1];
list.children[1].textContent = "hello";

val = list.children[0]



console.log(val)