// Closures are functions that refer to independent (free) variables. In other words, 
// the function defined in the closure ‘remembers’ the environment in which it was created.

function init() {
    var firstName = "Akshay";
    console.log("I am init");

    function sayFirstName() {
        console.log(firstName);
    }

    return sayFirstName;
}

let fun1 = init();
fun1();

// I am init
// Akshay