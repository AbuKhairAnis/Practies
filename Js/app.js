/** use axios */
/* const axios = require('axios').default;

let url = "https://jsonplaceholder.typicode.com/posts"

async function getData(){
    const {data} = await axios.get(url);
    const result = data.slice(0,10).reduce((acc,cur)=>{
        acc[cur.id] = {...cur}
        return acc
    },{})
    return result
};

getData()
.then(data=>console.log(data))
.catch(e=> console.log(e)); */

// How reduce work/ insite reduce
/*
function myReduce(array, callbackf, init) {
    let pre_v = init
    for (let i = 0; i < array.length; i++) {
        pre_v = callbackf(pre_v, array[i])
    }
    return pre_v
}

const sum = myReduce([1, 2, 3, 4], (a, b) => {
    const valu = a + b
    return valu

}, 0);


console.log(sum);*/




// const text = ['Hello World, I am learning Javascript, now i complete at beginner levele']



// const word = text.indexOf('e')

// console.log(word);



function power(p) {
    return function (n) {
        let result = 1;
        for (let i = 1; i <= p; i++) {
            result *= n;
        }
        return result;
    };
}

const sqr = power(3);

console.log(sqr(1));