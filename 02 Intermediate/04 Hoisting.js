// Rules
// 1) Function declarations are scanned and made available
// 2) Variable declarations are scanned and made undefined


tipper("10")  //This will  work because tipper is a function and made available (Rule 1)

function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5)
}

// bigTipper(250)   ---> This will not work because bigTipper is a function but it is stored as 
// variable and according to rule 2, Variables are made undefined.

var bigTipper = function (a) {
    var bill = a;
    console.log(bill + 50)
}

bigTipper(300)



console.log(name)     // undefined (Rule 2)
var name = "akshay"