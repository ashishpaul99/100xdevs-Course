// 1.5 | Async, Await and Promises   Dt:20/02/24  Time:4:46PM
// -> Call back are needed for asynchronous functions.

// 1. Synchronous functions vs Asynchronous functions
// a. Synchronous function-
// ->which runs one after the other.
// ->things running sequenetially.
// ->only one thing happens at a time.

// b.Asynchronous function
// ->things are happening in parts.
// ->multiple things are context switching with each other.
// ->things are happening parallely.

// eg:choping vegitables and boiling at a time.

// ->human brain and body is single threaded.
// 1. we can only do one thing at a time.
// 2. but we can context switch between tasks or we can delegate tasks to other people.


// ->Javascipt is single threaded language but it can also context switch or deligate task other process.
//1. context switching->multi tasking.
//2. Delegate task -> assigning other thread.

// 2. How does JS do the same? can js delegate? can js context switch?
// yes JavaScript uses asynchronous functions.


// 4. Sunchronous functions examples
// 1. busy waiting
// ->thread remains busy for sometime.
// ->it is synchronously sleep the thread.
// ->it is expensive operation.
// function syncSleep() {
//     let a = 1;
//     for (let i = 0; i < 1000000000; i++) {
//         a++;
//     }
// }
// syncSleep();

// 5.What are common async functions?
// 1. setTimeout() function
// ->it is asynchronous function.
// ->it is used to run specific function after certain duration.
// ->it is pre-made function.

// eg-1: finding sum of 1 to 10 numbers.
// function findSum(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         sum =sum+i;
//     }
//     return sum;
// }

// function displaySum(){

//     console.log(findSum(10));
// }


// console.log("start");
// setTimeout(displaySum,5000);
// console.log("end");

// 2. fs.readFile - to read a file from your filesystem.
// ->js reads other files like text, MP4, JSON file.
// eg-1:
// ->fs stands for files system. it is an extenal library.
// ->it is node.js library which lets few things like reading from a file and writing to a file.
// ->fs gives access to read file.
// ->which accepts path of a file, encoding in which you want to read a file and a anonymous function.
// ->here file read is asynchronous function.
// ->"hi there" prints first then data in text file get prinited.


// const fs = require("fs");
// fs.readFile("text.txt", "utf-8", function (err, data) {
//     console.log(data);
// });

// console.log("Hi there");

// eg-2:
// ->In this case eventhough reading file has been completed it waits for busy waiting code to execute.

// const fs = require("fs");
// fs.readFile("text.txt", "utf-8", function (err, data) {
//     console.log(data);
// });

// console.log("Hi there1");

// // busy waiting
// let a = 0;
// for (let i = 0; i < 100000000; i++) {
//     a++;
// }

// console.log("Hi there2")



// 3. Fetch - to fetch some data from an API endpoint.

// 6. Callback functions
// function square(n){
//     return n*n;
// }

// function cube(n){
//     return n*n*n;
// }


// function sumOfSomething(a,b,fn){
//     val1=fn(a);
//     val2=fn(b);
//     return val1+val2;
// }

// console.log(sumOfSomething(1,2,cube));


// 7. Promises
// code without promises
// function square(n){
//     return n*n;
// }

// function cube(n){
//     return n*n*n;
// }

// function sumOfAll(a,b,fn){
//     val1=fn(a);
//     val2=fn(b);
//     return val1+val2;
// }

// console.log(sumOfAll(2,2,square));

// 8. How to create our own asyncronous function
// ->creating wrapper around the readFile function.
// ->definfing a function which takes call back.
// ->usally all asyn functions you will write will be on top of JS provided async functions like setTimeout or fs.readFile.

// eg-1:
// const fs = require("fs");
// function readingFile(cb) {
//   fs.readFile("text.txt", "utf-8", function (err, data) {
//     cb(data);
//   });

//   function onDone(data) {
//     console.log(data);
//   }
// }

// readingFile(onDone());


// 9. Promises
// ->it's just syntactic sugar still uses callbacks under the hood.
// ->cleaner way of writing code using promises.

// const fs = require("fs");
// function readingFile(){
//     console.log("Inside readingFile")
//     return new Promise(function(resolve,reject){
//       console.log("Inside promise")
//       fs.readFile("text.txt","utf-8",function(err,data){
//         console.log("before resolve");
//         resolve(data);
//       });
//     })
//   }
// function onDone(data){
//   console.log(data);
// }

// const pr=readingFile();

// pr.then(function(data){
//   console.log(data);
// });

// alter:
// const fs = require("fs");
// function readingFile(){
//   console.log("Inside readingFile")
//   return new Promise(function(resolve,reject){
//     console.log("Inside promise")
//     fs.readFile("text.txt","utf-8",function(err,data){
//       console.log("before resolve");
//       resolve(data);
//     });
//   })
// }

// function onDone(data){
//   console.log(data);
// }

// readingFile().then(onDone);

// Output:
// Inside readingFile
// Inside promise
// before resolve
// Hello World, this is my text file.

// 10. Promise Class
// ->It is just a class tha makes calls backs and asynchronous function more readable.
// ->Whenever promise class is intialized then function should given as first argument.
// -> a promise at high level three states.
// 1. pending
// 2. resolved 
// 3. rejected
// ->Promises can be used inside and outide function.
// ->usually promises are used inside a function.
// eg-1:
// var d = new Promise(function (resolve) {
//     setTimeout(function () {
//         resolve("js")
//     })
// }, 10000);

// function callback() {
//     console.log(d);
// }

// console.log(d);
// d.then(callback);


// eg-2:
// let p = new Promise(function (resolve) {
//     resolve("Promise");
// });

// p.then(function () {
//     console.log(p);
// })

// Output:
// romise {<fulfilled>: 'Promise'}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "Promise"

// 11. Async await
// ->it is just syntactic sugar, still uses callbacks/Promises under the hood makes code much readable than callbacks/Promises.
// ->Usually used on the caller side, not on the side where you define an async function.
// ->any function that wants to use await, needs to be async rther than using .then syntax, we add before and get the final value in the variable.
 



// eg-1:Code with async await

// const p=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve("Promise is resolved");
//       },5000)
// });

// async function getData(){
//     const promiseData=await p;
//     console.log("js");
//     console.log(promiseData);
// }

// getData();

// eg-2:code with normal function
// function handlingPromise() {
//     const pr= new Promise(function (resolve, reject) {
    //   setTimeout(function(){
    //     resolve("Promise is resolved");
    //   },5000)
//     });
//     return pr;
// }
// function getData(){
//     handlingPromise().then(function(resolve){
//         console.log(resolve)
//     })
//     console.log("js");
    
// }
// getData();


// ->In fact all three are very similar(becomes more manageable as you move to the right).

// callback syntax --> Promise(then) syntax ---> Async/await syntax.

// ->async/await syntax is the cleanest than promises(then) syntax and callback syntax.
