var name = "Akshay";

console.log("Line number 3", name);

function sayName() {
    var name = "Ram"
    console.log("Line number 7", name);
    sayNameTwo()

    function sayNameTwo() {
        console.log("Line number 11", name)
    }
}

sayName()


// Line number 3 Akshay
// Line number 7 Ram
// Line number 11 Ram