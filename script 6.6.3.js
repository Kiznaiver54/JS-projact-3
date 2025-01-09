const person = {
    firstName: "John",
    age: 23
};

function printInfo() {
    console.log(`Name: ${this.firstName}, Age: ${this.age}`);
}

printInfo.call(person);