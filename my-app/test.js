class Person {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return this.name + " " + this.age
    } //example of overridding in javascript
}

class Teacher extends Person {
    salary;

    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
    }

    greet() {
        return "I am the teacher " + super.greet(); //accessing greet method from super class aka "Person" class
    }
}  

class Student extends Person {  
    //"student" is the derived/child class coming from the "person" class. "Person" is parent/bass class
    group;

    constructor(name, age, group) { //this constructor overrides the intial constructor
        super(name, age); //"super" calls on the constructor of parent class ("Person")
        this.group = group;
    }
} 
//extends keyword give the "student" property all of the functionalites of the "person"

const s1 = new Student("Tim", 10, "A");
const t1 = new Teacher("Sally", 30, 65000);
console.log(s1.greet());
console.log(t1.greet());