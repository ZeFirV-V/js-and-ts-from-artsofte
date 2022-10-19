class Person {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.grow = () => {
            console.log("I am growing");
        }
    }

    get fullInfo() {
        return `${this.name} ${this.age} ${this.sex}`;
    }
}

function Student(name, age, sex, university, group) {
    // Person.call(this, name, age, sex);
    this.university = university;
    this.group = group;
}

Student.prototype = function readBook() {
    console.log("I am reading");
}
Student.prototype = Person.prototype;

Person.prototype.a = {
    a:1,
}


const a = new Person('a', 20, 'f');
const b = new Student('b', 20, 'm', 'urfu', '1');
console.log(a.fullInfo);
// function Foo(who){
//     this.me = who;
// }
// Foo.prototype.identity = function () {
//     return "I am " + this.me;
// }
//
// function Bar(who){
//     Foo.call(this, who);
// }
// Bar.prototype = Object.create(Foo.prototype);
// Bar.prototype.speak = function(){
//     console.log("hello " + this.identity() + ".");
// };
// var b1 = new Bar("b1");
// var b2 = new Bar("b2");
//
// b1.speak();
// b2.speak();
//
// let a = {
//     name: "a",
//     age: 20
// }

// function A(){}
// let a = new A();