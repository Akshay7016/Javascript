const isEven = (number) => {
    // if (number % 2 === 0) {
    //     return true;
    // }
    // return false;

    return number % 2 === 0;
}

// console.log(isEven(4));

// var result = [2, 3, 6, 8].every(isEven)



// Callback syntax-1
// var result = [2, 4, 6, 8].every((item) => {
//     return item % 2 === 0;
// })

// Callback syntax-2
// var result = [2, 4, 7, 8].every((item) => item % 2 === 0)

// Callback syntax-3
var result = [2, 4, 6, 8].every((item) => (item % 2 === 0))
console.log(result);