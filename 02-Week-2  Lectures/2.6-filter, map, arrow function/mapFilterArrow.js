// Week 2.6 | filter, map, arrow fns Date:09/03/24 Time:7:35 PM

// ->Map and filter functions are helper function when it comes to arrays.
// ->Arrow functions are another way to write functions.

// 1. Arrow functions
// ->normal function
// function sum(a, b) {
//     return a + b;
// }

// ->arrow function
// const sum = (a, b) => {
//     return a + b;
// }

// console.log(sum(10, 5));

// 2. Map and filter
// 2.1 map function.
// ->map accepts intial input and trasformation function as argument.
// ->map function takes individual values of the array.

// map(intialInput, function(){})


// eg-1: given an array, multiplyt each value of the array with 2 and give back new array.
// [1,2,3,4,5]
// [2,4,6,8,10]
// =>normal way
// const array=[1,2,3,4,5];
// const arrayMult2=[];
// for(let i=0;i<array.length;i++){
//      arrayMult2.push(array[i]*2);
// }
// console.log(arrayMult2); //Output:[ 2, 4, 6, 8, 10 ]

// =>solving above problem using map function.
// ->input = [1,2,3,4,5] -----> output=[2,4,6,8,10]

// code:
// const input = [1, 2, 3, 4, 5];
// const result = input.map(function (x) {
//     return 2 * x;
// });
// console.log(result); // Output:[ 2, 4, 6, 8, 10 ]

// 2.2 filter function
// ->filter function takes input and filtering function.
// ->filtering function returns boolean values.
// ->filtering function takes individual values of the array.


// eg-:
// ->this function return if n is even else it resturns false.
// function filtering(n) {
//     if (n % 2 == 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }



// eg-1: take and filter array of even numbers
// => normal way
// const arr=[1,2,3,4,5,6];
// const evenArr=[];
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//        evenArr.push(arr[i]);
//     }
// }
// console.log(evenArr);//Output:[ 2, 4, 6 ]

// =>solving above problem using filter function

// const arr=[1,2,3,4,5,6,10,12];

// function filterLogic(n){
//     if(n%2==0){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// const ans=arr.filter(filterLogic);
// console.log(ans); // Output:[ 2, 4, 6, 10, 12 ]

// eg-1:return name which starts with A
const users=["ashish","ravi","surat","ajay"];
const usersWithA=users.filter(function(n){
    if(n.startsWith("a")){
        return true;
    }
    else{
        false;
    }
});
console.log(usersWithA); //Output:[ 'ashish', 'ajay' ]





