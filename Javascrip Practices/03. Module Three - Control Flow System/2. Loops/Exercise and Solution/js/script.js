
var n = parseInt(prompt("Enter the Number of Trams "));

var sum=0;
var series = "";

for (var x =1; x<=n; x++ ){
    sum += x**2;
    series += (x**2).toString() ;
    if(x==n){continue;};
    series += " + ";
}
console.log(`${series} = ${sum}`);