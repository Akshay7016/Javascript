// Functional approach of defining object
var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`Course count is ${this.courseCount}`)
    }
}

// new keyword is responsible for invoking constructor and creating new instance every single time
var akshay = new User("Akshay", 5);
console.log(akshay);

// User {
//     firstName: 'Akshay',
//     courseCount: 5,
//     getCourseCount: [Function(anonymous)]
// }