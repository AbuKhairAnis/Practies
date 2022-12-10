
class Person {
    constructor(fastname,midname,lastname,) {
        this.fName = fastname;
        this.mName=midname;
        this.lName = lastname;
        
    };
   
    greetings(){
        console.log(`Hello ${this.fName} ${this.mName} ${this.lName}`)
    }
    static text(){
        console.log("I am static fanction");
    }
}



let me = new Person("Abu","Khair","Anis")

console.log(me);
console.log(me.greetings());
console.log(Person.text());
