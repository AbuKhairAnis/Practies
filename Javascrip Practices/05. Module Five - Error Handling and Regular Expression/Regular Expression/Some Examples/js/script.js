// Example

let re;
let str;

// Postal Code

re = /^[0-9]{4}$/;

str = "2220";

// Phone Number
// 01788888888 +880178888888 880178888888

re = /^(\+)?(88)?01[0-9]{9}$/;


// Email Address

re = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/




str = "abukhair.anis@edu.com.bd"

console.log (re.test(str));

function reTest(re,str){
    if(re.test(str)){
        console.log(`'${str}' matches '${re.source} `)
    }
    else{
        console.log(`'${str}' don't matches '${re.source} `)
    }
}


reTest(re,str)