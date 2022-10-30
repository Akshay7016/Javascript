var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`Course count is ${this.courseCount}`)
    }
}

// Prototype
User.prototype.getFirstName = function () {
    console.log(`Your name is: ${this.firstName}`);
}

var akshay = new User("Akshay", 5)
akshay.getCourseCount();

if (akshay.hasOwnProperty("firstName")) {
    akshay.getFirstName();
}
// Course count is 5
// Your name is: Akshay


var sam = new User("Sam", 5)
sam.getCourseCount();

// As sam object does not have "first" property so getFirstName() will not execute.
if (sam.hasOwnProperty("first")) {
    sam.getFirstName();
}
// Course count is 5