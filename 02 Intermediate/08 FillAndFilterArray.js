const array = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(array.fill("a"));
// ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']

// console.log(array.fill("b", 3));
// [1, 2, 3, 'b', 'b', 'b', 'b', 'b']

// console.log(array.fill("c", 2, 5));
// [1, 2, 'c', 'c', 'c', 6, 7, 8]


var numbers = [10, 25, 47, 58, 63, 55, 15, 44, 89]
var result = numbers.filter((num) => num != 55);
console.log(result);