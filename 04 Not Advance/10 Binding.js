// bind() is used to borrow a method from another object
// bind() method gives reference back
const akshay = {
    firstName: "Akshay",
    lastName: "Sajgule",
    role: "admin",
    courseCount: 3,
    getInfo: function () {
        console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        His role is ${this.role}
        and he is studying ${this.courseCount} courses
        `);
    }
}

const rohit = {
    firstName: "Rohit",
    lastName: "Sharma",
    role: "sub-admin",
    courseCount: 5,
}

akshay.getInfo()

// As this is pointing to akshay object. Now this should points to rohit object so we have passed
// rohit as argument to bind()
akshay.getInfo.bind(rohit)()
// or
// bind() method gives reference back
var rohitInfo = akshay.getInfo.bind(rohit);
rohitInfo()