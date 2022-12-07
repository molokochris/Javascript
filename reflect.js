//METHODS

let rabbit = {};

//.speak (in rabbit.speak) is the method (properties that hold function values)
rabbit.speak = function (line) {
    console.log(`The rabbit says '${line}'.`);
}

rabbit.speak("All i want is carrots");

//In this case, the method is going to do something with the object it was called on
//the "this" points the method to the object it was called on
function speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'.`);
}

let whiteRabbit = { type: "white", speak };
let hungryRabbit = { type: "hungry", speak };

whiteRabbit.speak("I dont want to get dirty");

hungryRabbit.speak("Carrots please!");

//you can use the call method if you want to pass the parameters explicitly

speak.call(whiteRabbit, "im dirty now");

//Arrow functions do not bind their own 'this' but can see the 'this' binding of the scope around them

function normalize() {
    console.log(this.coords.map(n => n / this.length));
}

normalize.call({ coords: [0, 2, 3], length: 5 });

//PROTOTYPES

//Objects derive from Object.prototype

console.log(Object.prototype == Object.getPrototypeOf({}));

console.log(Object.getPrototypeOf(Object.prototype));


//Functions derive from Function.prototype

console.log(Object.getPrototypeOf(Math.max) ==
    Function.prototype);


//Arrays derive from Array.prototype

console.log(Object.getPrototypeOf([]) ==
    Array.prototype);

//Use Object.create to create an object with a specific prototype
//protoRabbit is the container for the properties that are shared by all rabbits

let protoRabbit = {
    //speak(line) is shorthand way of defining a method
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
};

let killerRabbit = Object.create(protoRabbit);
//the only unique thing about killerRabbit compared to protoRabbit, is 'type' but derives shared
// properties from its prototype
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!");

console.log(killerRabbit);

//CLASSES

//constructor function

function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}

console.log(makeRabbit("wild"));

//Eaasier way of defining a constructor

function Rabbit(type) {
    this.type = type;
}

Rabbit.prototype.speak = function (line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
};

//the keyword 'new' infront of a function call is treated as the constructor

let wildRabbit = new Rabbit("wild");

wildRabbit.speak("I love being free!!!");
console.log(wildRabbit);


//We can use the class notation to write classes

class Rabbits {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let killersRabbit = new Rabbits("killers");
let blackRabbit = new Rabbits("black");

console.log(blackRabbit);