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