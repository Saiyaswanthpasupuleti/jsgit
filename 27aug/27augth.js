// [12.345, 67.890, 34.567], // Round each element to 2 decimal places using toFixed()

// let a=[12.345, 67.890, 34.567];
// let b=a.map((a)=>{
//  let d=a.toFixed(2);
// return d.split()
// })
// console.log(b.flat())




// ['123abc', '456def', '789ghi'], // Convert each element to an integer using parseInt()

// let a=['123abc', '456def', '789ghi'];
// let b=a.map((a)=>{
//    return parseInt(a)
// })
// console.log(b)




// [12, 34.56, 78, 90.12], // Check if each element is an integer using isInteger()

// let a=[12, 34.56, 78, 90.12];
// let b=a.map((a)=>{
//     return Number.isInteger(a)
// })
// console.log(b);









// ['abc', 123, 'def', 456], // Check if each element is NaN (Not a Number) using isNaN()


// let a=['abc', 123, 'def', 456];
// let b=a.map((a)=>{
//     return isNaN(a);
// })
// console.log(b)





// [123.456, 789.012, 345.678] // Format each element to have a precision of 4 significant digits using toPrecision()


// let a= [123.456, 789.012, 345.678];
// let b=a.map((a)=>{
//     return a.toPrecision(4)
// })
// console.log(b);




// generate random otp 5 digit num using math.random

console.log(Math.floor(Math.random()*90000))