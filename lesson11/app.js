class Vehicle {
    name;
    model;
    noOfWheels;
    color;

    constructor(name, model, noOfWheels, color) {
        this.name = name;
        this.model = model;
        this.noOfWheels = noOfWheels;
        this.color = color;
    }

    start() {
        // console.log(this.name + " is Starting...");
        // Template String way of concatenating
        console.log(`${this.name} is Starting`);
    }

    drive() {
        console.log(`${this.name} is Driving`);
    }

    brake() {
        console.log(`${this.name} is Braking`);
    }

    static define() {
        console.log("a thing used for transporting people or goods, especially on land, such as a car, lorry, or cart: the vehicle was sent skidding across the road | a heavy goods vehicle");
    }
}

class Bike extends Vehicle {
    constructor(name, model, color) {
        super(name, model, 2, color);
    }
}

class Car extends Vehicle {
    mode;
    constructor(name, model, color, mode) {
        super(name, model, 4, color);
        this.mode = mode;
    }
}

// const bajaj = new Bike("Bajaj", "XPS123", "Black");

// const honda = new Car("Honda", "Accord", "Grey", "Automatic")

// console.log(bajaj.noOfWheels); // 2

// console.log(honda.noOfWheels);  // 2

// bajaj.start() // Bajaj is Starting
// honda.start() // Honda is Starting

Vehicle.define();




