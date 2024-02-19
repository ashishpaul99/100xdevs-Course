// 1.4 | Loops, Functions and callbacks
// 1. Calculate sum of 0 to 100
// let sum=0;
// for(let i=0;i<=100;i++){
//    sum=sum+i;
// }
// console.log(sum);

// 2. Functions

// eg-1
// function sum(){
//     let sum=0;
//     for(let i=0;i<=100;i++){
//         sum=sum+i;
//     }
//     return sum;
// }

// Calling function
// console.log(sum());
// console.log("hello");

// 2. Callback Functions
// eg-1: finding sum of squares
// function square(n){
//     return n*n;
// }


// function sumOfSquares(a,b){
//     let sq1=square(a);
//     let sq2=square(b);
//     let squareSum=sq1+sq2;
//     return squareSum;
// }


// console.log(sumOfSquares(10,2));

// eg-2: finding sum of cubes and squares
// function square(n){
//     return n*n;
// }
// function cube(n){
//     return n*n*n;
// }

// function sumOfSquare(a,b){
//      let val1=square(a);
//      let val2=square(b);
//      let squareSum=val1+val2;
//      return squareSum;
// }

// function sumOfCubes(a,b){
//     let val1=cube(a);
//     let val2=cube(b);
//     let cubeSum=val1+val2;
//     return cubeSum;
// }

// console.log(sumOfSquare(1,2));

// eg-2: finding sum of cubes and squares using call backs

// function square(n){
//     return n*n;
// }
// function cube(n){
//     return n*n*n;
// }

// function sumOfSquaresCubes(a,b,fn){
//     let val1=fn(a);
//     let val2=fn(b);
//     return val1+val2;
// }


// console.log(sumOfSquaresCubes(10,2,square));
// console.log(sumOfSquaresCubes(10,2,cube));

// 4. Anonymous Function
// eg-1:
function square(n) {
    return n * n;
}


function sumOfSquaresCubes(a, b, fn) {
    let val1 = fn(a);
    let val2 = fn(b);
    return val1 + val2;
}

console.log(sumOfSquaresCubes(1, 2, function (n) {
    return n * n * n;
}));


