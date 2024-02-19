// 1. Synchronous function
// ->Thread executes the code synchronously.
// function findSum(n){
//     let sum=0;
//     for(let i=0;i<n;i++){
//         sum=sum+1;
//     }
//     return sum;
// }
// console.log(findSum(10)); //10

// 2. Asynchronous function

// =>Asynchronous function Exmaples
// a. setTimeout function it runs specific function after some duration.
// b. fs.readFile- to read a file from your filesystem.
// c. Fetch - to fetch some data from API end point.

// a. setTimeout function
// function findSum(n){
//     let sum=0;
//     for(let i=0;i<n;i++){
//         sum=sum+i;
//     }
//     return sum;
// }

// function findSumTill10(){
//     console.log(findSum(10));
// }

// // Calling asynchronous function
// setTimeout(findSumTill10,2*1000);
// console.log("hello Wolrd");

// Output:
// hello Wolrd
// 45

// =>Synchronously sleeping the thread
// ->Making Asyncronous thread to synchronous.
// function findSum(n){
//     let sum=0;
//     for(let i=0;i<n;i++){
//         sum=sum+i;
//     }
//     return sum;
// }

// function findSumTill10(){
//     console.log(findSum(10));
// }
// // Busy waiting

// function syncSleep(){
//     let a=0;
//     for(let i=0;i<1000000000;i++){
//         a++;
//     }
// }

// syncSleep();
// findSumTill10();

// // Calling asynchronous function
// setTimeout(findSumTill10,2*1000);
// console.log("hello Wolrd");

// Output:
// 45
// Async.js:60 hello Wolrd

// ->sum prints first
// ->syncSleep makes setTimeout to sleep for some secs.

// b. fs.readFile- to read a file from your filesystem.

// Syntax:
// fs.readFile("file name","encoding", Anonymous function(err,data){
//     console.log(data);

// })

// eg-1:
// const fs=require('fs');

// // file system module

// fs.readFile("text.tx","utf-8",function(err,data){
//     console.log(data);
// });

// console.log("hi there")

// ->fs.readFile file read the text file in that gap the "hi there" get prints first.
// ->"hi there" executes first then fs.readFile get executed.

// 4. Promises

// eg-1:Asynchronous example
// function findSum(n){
//     let sum=0;
//     for(let i=0;i<n;i++){
//         sum=sum+i;
//     }
//     return sum;
// }

// function findSumTill10(){
//     console.log(findSum(10));
// }

// // Calling asynchronous function
// setTimeout(findSumTill10,2*1000);
// console.log("hello Wolrd");

//->Above code is ugly. promises are syntactical sugar that makes this code slightly more readable.


// 4.1 How can we create an asynchronous function of our own?

// ->It is just a wrapper on top of another async function, which is fine.
// ->Usually all async functions you will write will be on top ofJS provided async functions like setTimeout or fs.readFile
//->Until now, we’ve only used other people’s asynchronous functions.



// eg-1:->It is ugly way to create asynchronous function.

// const fs=require('fs');


// function readFile(cb){
//   fs.readFile("text.tx","utf-8",function(err,data){
//      cb(data);
//   });
// }


// // callback function to call
// function onDone(data){
//   console.log(data)
// }


// // calling the function

// readFile(onDone);

//=>Creating our own asynchronouse function using promises.
// ->if promises is used there will be no call backs.
// ->call backs are ugly way to write asynchronous code.

// eg-1:
// ->it creats an object of promise class.
// ->function is the argument for the promise.
// ->function takes resolve as argument.
// ->function is called the promise is retuned to them.
// ->What ever promise is retuned to onDone function.

// const fs=require('fs');

// // file system module
// function ashishReadFile(){
//   console.log("Inside ashishReadFile");
//   return new Promise(function(resolve){
//     console.log("inside promise")
//     fs.readFile("text.txt","utf-8",function(err,data){
//       console.log("inside resolve");
//       resolve(data);
//     });
//   });
  
// }

// function onDone(data){
//   console.log(data);
// }

// // ashishReadFile().then(onDone);
// //  or
// let a=ashishReadFile(); //Promise is retuned to function
// a.then(onDone); //giving returned value to onDone function so that it prints


// console.log("hi there")

// Output:
// inside ashishReadFile
// inside promise
// inside resolve
// hi there
// hello world this is my text file.

// 5. What even is a promise?
// ->it is just a class that makes callbacks and async function slightly more readable. 

// ->When ever promise is intialized give function as an argument and resolve for function.
// ->pending have three states
// pending, resolved, rejected.

//5.1 Intializing promises
// 1. Pending

// let p=new Promise(function(resolve){
   
// });
// console.log(p);

// Output:
// Promise {<pending>}

// 2. resolved- 
// eg-1:

// let p=new Promise(function(resolve){
//   resolve("Hello");
// });

// function callback(){
//   console.log(p);
// }
// p.then(callback);

// Output:
// Promise {<fulfilled>: 'Hello'}

// eg-2:

// let p=new Promise(function(resolve){
//   setTimeout(function(){
//     resolve("hello");
//   },1000)
  
// });

// function callback(){
//   console.log(p);
// }

// console.log(p);
// p.then(callback);

// Output:
// Promise {<pending>}
// Promise {<fulfilled>: 'hello'}

























