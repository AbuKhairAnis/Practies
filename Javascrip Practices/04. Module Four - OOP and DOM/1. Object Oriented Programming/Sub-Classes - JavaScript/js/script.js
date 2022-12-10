// sub class

class Person {
    constructor(fastname,midname,lastname,) {
        this.fName = fastname;
        this.mName=midname;
        this.lName = lastname;
        
    };
   
    greetings(){
        return `Hello ${this.fName} ${this.mName} ${this.lName}`
    }
}



class Customar extends Person{
    constructor(fastname,midname,lastname,phone,memberShip,uniqueId){
        super(fastname,midname,lastname);

        this.phone= phone;
        this.memberShip = memberShip;
        this.uniqueId=uniqueId;

    }
}


let person1= new Person( "Abu","Khair", "Anis",)
console.log(person1);
console.log(person1.greetings());


let customer = new Customar ("Abu","Khair","Anis","01684741665","12343","UG01-34-13-013");

console.log( customer);
console.log( customer.greetings());
