// JSON

let student = {
    Name: "Rahim",
    Age: 29,
    Hometown: "Dhaka"

};
/*
// JSON Format
let student_json = {
    "Name": "Rahim",
    "Age": 29,
    "Hometown": "Dhaka"

};
*/
let student_json = JSON.stringify(student); // convert object to json

let student_new = JSON.parse(student_json) // convert json to object 

console.log(student_json);
console.log(student_new);