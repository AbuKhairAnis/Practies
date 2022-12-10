var arr = ["Anis", 39, "Trishal"]
console.log(arr)
console.log(arr [1])

// object

var student = { Name: " Anis", Age: 29, Home: "Trishal"}
console.log(student);
console.log(student["Name"])

var student = { Name: " Anis", Age: 29, Home: "Trishal"}
console.log(student.Age)
console.log(student.Name)

var student = { Name: " Anis", Age: 29, Home: "Trishal"}
student.village = "Mymensingh"
student ["occupation"] = "Teacher"
console.log(student);


delete student.village
delete student["occupation"]

console.log(student)

// more arry and object


var arr =[10, 12, ["a","b","c"],14,16]
console.log(arr);
console.log(arr[1]);
console.log(arr[2][0])

// undefined, Empty values, null, NaN

var a;
console.log(a);

a == undefined;
console.log(a);

a === undefined;
console.log(a);  


b = null;
console.log(b);

b == undefined;
console.log(b);

b === undefined
console.log(b);

c = ""
console.log(c);


d= 10/'abc'
console.log(d);

e = 'abc'/10
console.log(e);