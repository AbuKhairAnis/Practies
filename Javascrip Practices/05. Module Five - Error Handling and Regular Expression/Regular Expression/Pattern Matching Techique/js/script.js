// Regular Expression
// Pattern Matchin Technique

let re;
let str;
re = /hello/;
re = /Hello/;
re = /hello/i; // i = case insensitive

console.log(re);
console.log(re.source);


str = "Hello World";
str = "Again Hello World"
str = "Again Hello World Hello";
str = " World!"
str = "Again Hello World Hello Again"

//exec() = returns result in an array or null
let result = re.exec(str);

// test() = true/false

result = re.test(str)

//match = returns result in an array or null using system of opposite in exce()

result =str.match(re);

// search() = returns index of the first match or -1
str = "world!"

str = "Hello World"

result = str.search(re);

// Replace() = Return new string
str = "Again Hello World Hello";
let newstr = str.replace(re, "Hi Gada ");

console.log(newstr);