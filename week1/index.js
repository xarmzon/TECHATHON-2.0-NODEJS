// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   // defining method
//   greet() {
//     console.log(`Hello ${this.name}`);
//   }
// }

// let person1 = new Person("John");
// let person76 = new Person("xARM");
// let person7 = new Person("Student");

// person7.greet();

//sync
// console.log("Line 1");
// console.log("Line 2");
// console.log("Line 3");

// /async
// console.log(object);
// console.log("Line 1");
setTimeout(() => {
  console.log("Line 2");
}, 1000);
// console.log("Line 3");

// callback -> function is a paremeter
// promise
// async/await

// function
// function greet(name, callback) {
//   console.log("Hi" + " " + name);
//   callback();
// }

// // callback function
// function callMe() {
//   console.log("I am callback function");
// }

// // passing function as an argument
// greet("Rasta", callMe);
// greet("Rasta", function () {
//   console.log("This is defined straine");
// });

// let promise = new Promise(function (resolve, reject) {
//   //do something
//   // resolve()
//   return reject(new Error("error occurred"))
// });
const promise = new Promise(function (resolve, reject) {
  // after 1 second signal that the job is finished with an error
  setTimeout(() => resolve("I'm Done and everything went successfully"), 1000);
});

// // consume
// // then-> resolve()
// // catch -> reject()
// // finally ->
// console.log("Line 1");
// promise.then(function (result) {
//   console.log("From then");
//   console.log(result);
// });

// promise.catch((err) => {
//   console.log("From catch");
//   console.log(err);
// });

// promise.finally(() => {
//   console.log("Always get called");
// });
// console.log("Line 3");

// function name1(){}
// const name2 = function(){}
// const name3 = ()=>{}

// async function name11(){
//   // return Promise.resolve()
// }
// const name21 = async function(){}
// const name31 = async()=>{

// }

async function name5() {
  console.log("Line 1");
  let result = await promise;
  console.log(object);
}

name5();
console.log("After the name5 function");
