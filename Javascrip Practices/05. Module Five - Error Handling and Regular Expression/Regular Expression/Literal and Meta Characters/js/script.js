//Literal and Meta Characters

let re;

let str;
// Literal Character
re = /hello/;
re = /hello/i;
re = /hell/i;
re = /lo w/i;
re = /low/i;


// Meta Characters

re = /^hello/i; // Must start with
re =/hello$/i; // Must end with
re = /world$/i;
re = /^hello$/i; // Must start and end with
re = /^h.llo$/i; // Matches any one character
re = /h.llo/i;
re =/h*llo/i; // 0 or more times

re =/he?llo/i; // optional



str = "Hello World "
str = "hello"
str = "Hallo"

str = "heeeeello"
str = "hallo"
str = "hllo"

console.log(re.exec(str));

function reTest(re,str){
    if(re.test(str)){
        console.log(`'${str}' matches '${re.source} `)
    }
    else{
        console.log(`'${str}' don't matches '${re.source} `)
    }
}

reTest(re, str)

