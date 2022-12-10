// JSON Object and Arry

let xmlhttp = new XMLHttpRequest()

xmlhttp.onreadystatechange =function(){
    if(this.readyState== 4 && this.status == 200){
        let data = this.responseText;
        // console.log(data)
        JsonData(data)
    }
};
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();

function JsonData(json_obj){
    // console.log(json_obj)
    let js_obj = JSON.parse(json_obj);
    // console.log(js_obj);
    for( x in js_obj.Person){
        // console.log(x)
        let Persons = js_obj.Person
        // console.log(Persons[x])
        for (y in Persons[x]){
            console.log(Persons[x][y])
        }
    }
}

