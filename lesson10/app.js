// // /// Classes

// // // const person1 = {
// // //     name: "James",
// // //     age: 20
// // // }

// // // const person2 = {
// // //     name: "James",
// // //     age: 20
// // // }


// // class Person {
// //     name = "Anonymous";
// //     age = 0;
// //     gender = "";

// //     printName() {
// //         console.log(this.name);
// //     }

// //     printAge() {
// //         console.log(this.age);
// //     }

// //     changeName() {
// //         this.name = "John";
// //     }

// //     constructor(name, age, g) {
// //         console.log("Instantiated");
// //     }
// // }

// // const person1 = new Person();
// // person1.age = 20;

// // person1.changeName();

// // const person2 = new Person();
// // person2.name = "Bond";
// // person2.age = 20;


// // person1.printName();
// // person2.printName();


// class Person {
//     name = "";
//     age = 0;
//     gender = "";

//     constructor(name, age, gender) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }
// }

// const person1 = new Person("James Bond", 30, 'Male');


class Mammal {

    name = "";
    age = 0;
    gender = "";

    eat() {
        console.log("Eating");
    }

    reproduce() {
        console.log("Reproducing");
    }

    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}


class Human extends Mammal {
    dress() {
        console.log("Dressing");
    }

    jobPosition = ""

    constructor(name, age, gender, jobPosition) {
        super(name, age, gender);
        this.jobPosition = jobPosition;
    }
}

const human1 = new Human("James bond", 30, "male", "Security")

console.log(human1);

class Cat extends Mammal {
    meow() {
        console.log("Meowing");
    }
}


