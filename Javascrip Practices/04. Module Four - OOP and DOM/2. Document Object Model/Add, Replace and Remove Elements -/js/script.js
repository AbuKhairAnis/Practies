/*
//Add, Replace and Remove Elements
// create element

let olItem = document.createElement("li");

//Add Id and Class

olItem.className = " a new another -class";
olItem.id = " new-element"

//Add Attribute

olItem.setAttribute('title','A title to new Element');

olItem.appendChild(document.createTextNode("JavaScript"));

document.querySelector("ol").appendChild(olItem);

// console.log(olItem)

let ulItem = document.createElement("li");
let link = document.createElement("a");

link.appendChild(document.createTextNode("Instagram"));

link.setAttribute('href','#')

ulItem.appendChild(link);

document.querySelector("ul").appendChild(ulItem);

*/
/*
// Replaceing Element

let newheading = document.createElement("h1");
newheading.appendChild(document.createTextNode("H1 New Heading"));

newheading.className = "new-class";
newheading.id = "new-id";

let oldHeading =  document.querySelector("h3");

let parent = document.querySelector(".container") //Diffarent Method

// parent = oldHeading.parentElement

parent.replaceChild(newheading,oldHeading);


console.log(newheading)
console.log(oldHeading)
console.log(parent)
*/

//Remove Element

let listItems = document.querySelectorAll("li");
let list = document.querySelector("ul");

// listItems[0].remove();
// listItems[5].remove();

// list.removeChild(listItems[5])

list.classList.add("text");
list.classList.add("new-text");

list.classList.remove("text")

console.log(listItems);
console.log(list)