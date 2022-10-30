var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`Course count is ${this.courseCount}`)
    }
}

// Prototype --> used to inject properties later on inside the object
User.prototype.getFirstName = function () {
    console.log(`Your name is: ${this.firstName}`);
}

var akshay = new User("Akshay", 5)
akshay.getCourseCount();
akshay.getFirstName();