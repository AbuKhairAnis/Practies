// class is a  templete for creating object

class Person {
    constructor(fastname,midname,lastname,birthday) {
        this.fName = fastname;
        this.mName=midname;
        this.lName = lastname;
        this.doB= birthday;
    };
    calculateage(){
        let birthday = new Date(this.doB);
        let diff = Date.now()-birthday.getTime();
        let ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear()-1970)
    };
    fullname(){
        return `${this.fName} ${this.mName} ${this.lName}`
    }
}

let person1= new Person( "Abu","Khair", "Anis","03-01-1993")

let person2= new Person( "Ayesha","Jannat", "Faiza","05-23-2021")

let person3= new Person( "Farjana","Ahamed", "Kusum","11-14-1990")


console.log(person1);
console.log(person2);
console.log(person3);

console.log(person1.calculateage());
console.log(person2.calculateage());
console.log(person3.calculateage());

console.log(person1.fullname());
console.log(person2.fullname());
console.log(person3.fullname());