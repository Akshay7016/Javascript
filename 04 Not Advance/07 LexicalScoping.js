// The inner functions have access to the variables and other resources of their parent scope 
function init() {
    var firstName = "Akshay";

    function sayFirstName() {
        console.log(firstName);
    }

    sayFirstName();
}

init();
