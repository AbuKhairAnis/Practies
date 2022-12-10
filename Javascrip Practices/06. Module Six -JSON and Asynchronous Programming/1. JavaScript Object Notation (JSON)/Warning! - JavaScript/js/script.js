// JSON data type

let person = {
    "Name": "Rahim",
    "Age": 29,
    "Hometown": "Dhaka",
    "Married": false,
    

};

let person_json = JSON.stringify(person);

let person_obj= JSON.parse(person_json)
console.log(person_obj)
