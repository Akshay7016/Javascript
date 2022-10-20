var sellingPrice = 199;
var listingPrice = 799;

var discountPercentage = ((listingPrice - sellingPrice) / listingPrice) * 100;

// console.log("Discount percentage is: " + discountPercentage.toFixed(0) + "%");
console.log("Discount percentage is: " + Math.round(discountPercentage) + "%");

const myFunc = () => {

}


console.log("Type of undefined is: " + typeof undefined)
console.log("Type of null is: " + typeof null)
console.log("Type of boolean is: " + typeof true)
console.log("Type of number is: " + typeof 25)
console.log("Type of string is: " + typeof "Akshay")
console.log("Type of function is: " + typeof myFunc)
console.log("Type of object is: " + typeof {})

