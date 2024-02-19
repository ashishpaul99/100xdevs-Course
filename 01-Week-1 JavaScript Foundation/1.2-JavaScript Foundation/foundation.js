// 1.1 Variables (let, var, const)
// ->using let keyword
// let a=1;
// a=2;
// console.log(a); //Output:2

// ->using const keyword
// const a=1;
// a=2;
// console.log(a); //Output: Assignment to constant variable.

// 1.2 Data types - strings, numbers and booleans
// let firstname="Ashish";   //String
// let age=18;          //numbers
// let isMarried=false; //booleans

// console.log("person name:"+firstname+" "+"age:"+age+" "+"isMarried:"+false);

// 1.3 If/else
// eg-1:
// let firstname="Ashish"; 
// let isMarried=false;
// if(isMarried==true){
//     console.log(firstname+"is married");
// }else{
//     console.log(firstname+"is not married ")
// }

// 1.4 Loops - For loop
// 1. counting from 1 to 1000
// let ans=0;
// for(let i=1;i<=100;i++){
//      ans=ans+i;
// }

// console.log(ans);  //Output:5050

// 2. Complex primitives
// 2.1 Arrays -> storing collection of data.
// let person1="Ashish";
// let person2="Paul";
// let person3="John";

// eg-1:
// const person=["Ashish","Paul","john"];
// for(let i=0;i<person.length;i++){
//     console.log(person[i]);
// }

// Output:
// Ashish
// Paul
// john

// 2.2 Objects- 
// const person = ["Ashish","paul","rachel"];
// const gender=["male","male","female"];
// for(let i=0;i<person.length;i++){
//    if(gender[i]=="male"){
//     console.log(person[i]);
//    }
// }

// Output:
// Ashish
// paul


// 1. Storing data in objects
// const user1={
//     firstname:"Ashish",
//     gender: "male"
// }

// console.log(user1.firstname); //Output:Ashish
// console.log(user1.gender);    //Output:male

// or
// console.log(user1['firstname']); //Output:Ashish
// console.log(user1['gender']);    //Output:male

// =>Accessing objects in  an object
// const user={
//     name:"harkirat",
//     age:21,
//     address:{
//         houseNumber:777,
//         street:1
//     }
// }

// console.log(user['address']['houseNumber']) //Output:777
// console.log(user.address['houseNumber']); //Output:777
// console.log(user.address.houseNumber); //Output:777

// 2. Storing multiple objects in single array
// const allUsers=[
//     {
//         firstname:"Ashish",
//         age:"24"
//     },
//     {
//         firstname:"Paul",
//         age:"25"

//     }
// ];

// console.log(allUsers[0]); //output:{firstname: 'Ashish', age: '24'}
// console.log(allUsers[1]); //Output:{firstname: 'Paul', age: '25'}
  
//3. printing all objects in an array

// const allUsers=[
//     {
//         firstname:"Ashish",
//         age:"24"
//     },
//     {
//         firstname:"Paul",
//         age:"25"

//     }
// ];

// for(let i=0;i<allUsers.length;i++){
//     console.log(allUsers[i]);
//  }

//  Output:
// {firstname: 'Ashish', age: '24'}
// {firstname: 'Paul', age: '25'}

// 4. Nested objects and arrays
// ->Array of objects
// const allUsers=[
//     {
//         firstname:"Ashish",
//         age:"24",
//         gender:"male"
//     },
//     {
//         firstname:"Paul",
//         age:"25",
//         gender:"male"
//     },
//     {
//         firstname:"Rachel",
//         age:24,
//         gender:"female"
//     }
// ];

// console.log(allUsers[2]["gender"]); //Output:female


// // printing firstname of all male
// for(let i=0;i<allUsers.length;i++){
//     if(allUsers[i]["gender"]=="male"){
//         console.log(allUsers[i]["firstname"]);
//     }
// }
// Output:
// female



// 3. Functions
// 1. Write a function that finds the sum of two numbers?
// function sum(a,b){
//     let sum=a+b;
//     console.log(sum);
// }
// sum(10,5);   //output:15
 
// alter-1:
// function sum(a,b){
//     let sum=a+b;
//     return sum;
    
// }

// let retunr_sum=sum(10,5); // taking returned value
// console.log(retunr_sum);  // printing returned value

// Ouput:
// 15

// alter-2: do things with the input and return an output
// function sum(a,b){
//     return a+b;
// }

// let retunr_sum=sum(10,5); // taking returned value
// console.log(retunr_sum);  // printing returned value

// Output:
// 15


//3.1 Call back Explaination
// You are only allowed to call one function after this
// How will you displayResult of a sum

// function sum(num1, num2) {
//     let result = num1 + num2;
//     return result;
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }


// Solution-1:
// ->Caling all fuctions at a time.
// function sum(num1, num2) {
//     let result = num1 + num2;
//     displayResult(result);
//     displayResultPassive(result);
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }

// let ans=sum(10,5);
// console.log(ans);


// 5 Call backs

// eg-1:
// giving fuction as an argument
// ->calling either of the blow fuctions.
// ->here displayResult fuction is called.
// function sum(num1, num2,fnToCall) {
//     let result = num1 + num2;
//     fnToCall(result);
// }

// function displayResult(data) {
//     console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//     console.log("Sum's result is : " + data);
// }

// let ans=sum(10,5,displayResult);
// console.log(ans); 

// Output:Result of the sum is : 15

// eg-2:
// function calculateArithmetic(a,b,type){
//     if(type="sum"){
//         return a+b;
//     }
//     if(type="minus"){
//         return a-b;
//     }
// }

// const value=calculateArithmetic(10,2,"sum"); 
// console.log(value);
// Output:
// 12

// eg-3:third variable is fuction
// function calculateArithmetic(a,b,operation){
//      const ans=operation(a,b);
//      return ans;
// }

// function sum(a,b){
//    return a+b;
// }

// function sub(a,b){
//     return a-b;
// }


// const value=calculateArithmetic(10,2,sum); 
// console.log(value);


// 5.1-setTimeout function
function greet(){
    console.log("hello");
}
setTimeout(greet,3*1000);












 




  