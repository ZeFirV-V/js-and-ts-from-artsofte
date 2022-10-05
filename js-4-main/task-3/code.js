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
    Person.call(this, name, age, sex);
    this.university = university;
    this.group = group;
}

Student.prototype = function readBook() {
    console.log("I am reading");
}
Student.prototype = Person.prototype;



const a = new Person('a', 20, 'f');
const b = new Student('b', 20, 'm', 'urfu', '1');