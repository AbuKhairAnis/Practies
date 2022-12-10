//JavaScript DOM More Events
// 

document.querySelector(".container").addEventListener("click", massage);
document.querySelector(".container").style.background = "red";

function massage(e){
    val = this;
    this.style.background = `#${e.offsetX}`;
    console.log(val)
}