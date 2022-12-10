// JSON data type

let person = {
    Name: "Rahim",
    Age: 29,
    Hometown: "Dhaka",
    Married: false,
    Dob: 1995-05-12,
    test_null: null,
    test_undefined: undefined,
    greet: function(){
        console.log(`Hello ${this.Name}`)
    }

};

let person_json = JSON.stringify(person);

console.log(person_json)
