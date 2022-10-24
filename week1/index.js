class Person {
  constructor(name) {
    this.name = name;
  }
  // defining method
  greet() {
    console.log(`Hello ${this.name}`);
  }
}

let person1 = new Person("John");
let person76 = new Person("xARM");
let person7 = new Person("Student");

person7.greet();
