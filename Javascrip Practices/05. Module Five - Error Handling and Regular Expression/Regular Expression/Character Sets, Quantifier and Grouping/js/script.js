//Character Sets, Quantifier and Grouping

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

// Character set using Brackets[]

re = /h[ea]llo/i; // Must be one of them inside brackets

re =/[HA]ello/i;

re = /[^ha]ello/i;

re =/^[Ha]ello/i;

re = /^[A-Z]/;

re = /[a-z]/;
re = /^[A-Za-z]/;
re = /^[0-9][0-9][0-9]/; // Must three digit
re = /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/; // 12 digit
// Braces {} - Quantifire 

re = /Hel{2}o/i; //Must occur 2 times

re = /l{2,5}/ // Range

re = /l{2,}/  // At lest 2  times

// Parentheses () - grouping
 
re = /^([0-9]){11}/  // /^[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]/; // 12 digit

re = /^([0-9]x){3}/
re = /^([0-9][a-z]){3}/

str = "3a2b4coafjaslkdfj"

// Bangaldeshi Phone Number Check

/*
re = /^01[0-9]{9}$/;
re = /^\+8801[0-9]{9}$/;
str = "+8801684741665"
*/
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

