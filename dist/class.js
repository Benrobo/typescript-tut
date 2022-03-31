"use strict";
// CLASSES
class Person {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const newp = new Person("ben", 2);
console.log(newp);
const p2 = new Person("ben", 2);
class Person2 {
    constructor(name) {
        this.name = name;
    }
    getName(name) {
        return `${name}`;
    }
    setName() {
        this.name = "benrobo";
    }
}
const p22 = new Person2("benaiah");
p22.setName(); // calling a private method would lead to an error 
console.log(p22.getName("ben22"));
