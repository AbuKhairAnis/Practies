//Exploring DOM

let val;
val = this;
val = window;
val= document;
val = document.all;
val= document.all[2];
val = document.all.length;
val = document.head;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.url;
val = document.characterSet;
val = document.contentType;
val = document.forms;
val = document.forms[0];
val = document.forms[0].method;
val = document.forms[0].action;
val = document.links;
val = document.links[0];
val = document.scripts;

val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].getAttribute("src");
/*
//
links = document.links;

let linkArr= Array.from(links);

linkArr.forEach(function(link){
    console.log(link)
});  //
*/

link=document.links;

let linksArr = Array.from(link)

linksArr.forEach(function(a){
    console.log(a)
});




console.log(link);