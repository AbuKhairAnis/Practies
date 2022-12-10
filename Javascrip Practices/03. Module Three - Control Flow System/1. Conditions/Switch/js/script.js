
console.log( "Select an Option: \na. Option 1 \nb. Option 2 \nc. Option 3")

choice = prompt();

var text;

/*if(choice == "a"){
    text = "You have selected option 1";
}else if(choice=="b"){
    text = "You have selected option 2";
}else if(choice=="c"){
    text = "You have selected option 3";
}else{
    text = "no option selected";
}*/
switch(choice){
    case "a":
        text = "You have selected option 1";
        break;
    case "b":
        text = "You have selected option 2";
        break;
    case "c":
        text = "You have selected option 3";
        break;
    default:
        text = "no option selected";
        break;
}

console.log(text);
document.write(text);